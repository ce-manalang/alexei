class CheckoutController < ApplicationController
  def index
    @cart_items = session[:cart] || []
    @total_price = @cart_items.sum { |item| item["price"].to_f * item["quantity"].to_i }
  end

  def submit
    # Validate required fields
    if params[:email].blank? || params[:shipping_address].blank? || params[:proof_of_payment].blank?
      redirect_to checkout_path, alert: "All fields are required."
      return
    end

    # Upload proof of payment to S3
    if file = params[:proof_of_payment]
      s3 = Aws::S3::Resource.new(
        region: Rails.application.config.aws["region"],
        access_key_id: Rails.application.config.aws["access_key_id"],
        secret_access_key: Rails.application.config.aws["secret_access_key"]
      )

      bucket = Rails.application.config.aws["bucket"]
      obj = s3.bucket(bucket).object("proof_of_payment/#{SecureRandom.uuid}_#{file.original_filename}")
      obj.upload_file(file.tempfile, acl: 'public-read')

      s3_url = obj.public_url # Return the URL of the uploaded file
    end

    # Save order details in session (for now)
    order_data = {
      email: params[:email],
      shipping_address: params[:shipping_address],
      proof_of_payment_url: s3_url || "",
      cart_items: session[:cart]
    }

    # Save order to Google Sheets
    google_sheets_service = GoogleSheetsService.new
    google_sheets_service.save_order(order_data)

    # Clear cart after submitting checkout
    session[:cart] = []
    session[:order] = order_data

    redirect_to root_path, notice: "Order submitted successfully! We will verify your payment soon."
  end
end
