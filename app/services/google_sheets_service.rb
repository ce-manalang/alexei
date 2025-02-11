require 'google/apis/sheets_v4'
require 'googleauth'

class GoogleSheetsService
  def initialize
    @service = Google::Apis::SheetsV4::SheetsService.new
    @service.authorization = Google::Auth::ServiceAccountCredentials.make_creds(
      json_key_io: StringIO.new(GOOGLE_SHEETS_CREDENTIALS.to_json),
      scope: SCOPES
    )
  end

  def get_products(spreadsheet_id, range = 'Products!A2:F')
    response = @service.get_spreadsheet_values(spreadsheet_id, range)
    response.values
  end

  def update_product(spreadsheet_id, product_id, updated_values)
    worksheet_range = 'Products!A2'
    # values = [
    #   ['Name', 'Age', 'Email'], 
    #   ['Alice', 25, 'alice@example.com'], 
    #   ['Bob', 30, 'bob@example.com']
    # ]

    value_range = Google::Apis::SheetsV4::ValueRange.new(values: updated_values)
    @service.update_spreadsheet_value(
      spreadsheet_id,
      worksheet_range,
      value_range,
      value_input_option: 'RAW'
    )
  end

  # Save order details to Google Sheets
  def save_order(order_data, spreadsheet_id = Rails.application.credentials.spreadsheet_id)
    worksheet_range = 'Orders!A2:E'  # Assuming 'Orders' is the sheet name
    values = [
      order_data[:email],
      order_data[:shipping_address],
      order_data[:proof_of_payment_url],
      order_data[:cart_items].map { |item| "#{item["name"]} (#{item["quantity"]}x)" }.join(", "),
      Time.now.strftime("%Y-%m-%d %H:%M:%S") # Timestamp
    ]

    value_range = Google::Apis::SheetsV4::ValueRange.new(values: [values])
    @service.append_spreadsheet_value(
      spreadsheet_id,
      worksheet_range,
      value_range,
      value_input_option: 'RAW'
    )
  end
end
