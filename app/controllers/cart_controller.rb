class CartController < ApplicationController
  def show
    @cart = session[:cart] || {}
  end

  def add
    session[:cart] ||= {}
    zine_id = params[:id].to_s
    session[:cart][zine_id] ||= 0
    session[:cart][zine_id] += 1
    redirect_to cart_path
  end
end
