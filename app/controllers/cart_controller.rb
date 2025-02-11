class CartController < ApplicationController
  def show
    # Fetch cart items from session
    @cart_items = session[:cart] || []
    @total_price = @cart_items.sum { |item| item["price"].to_i * item["quantity"].to_i }
  end

  def add
    # Get product details from params (you can fetch product details from the database or a static array)
    product = { id: params[:product_id], name: "Product #{params[:product_id]}", price: params[:price], quantity: 1 }

    # Initialize session cart if it doesn't exist
    session[:cart] ||= []

    # Check if the product is already in the cart
    existing_item = session[:cart].find { |item| item[:id] == product[:id] }

    if existing_item
      # Update quantity if product is already in cart
      existing_item[:quantity] += 1
    else
      # Add new item to the cart
      session[:cart] << product
    end

    redirect_to cart_path, notice: "#{product[:name]} added to cart!"
  end

  def remove
    # Find the item in the cart session and remove it
    product_id = params[:product_id]
    session[:cart] = session[:cart].reject { |item| item["id"] == product_id }

    redirect_to cart_path, notice: "Item removed from cart."
  end

  def clear
    # Clear the entire cart
    session[:cart] = []
    redirect_to cart_path, notice: "Cart cleared!"
  end
end
