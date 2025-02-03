class ZinesController < ApplicationController
  require 'yaml'

  def index
    google_sheets_service = GoogleSheetsService.new
    spreadsheet_id = Rails.application.credentials.spreadsheet_id
    @zines = google_sheets_service.get_products(spreadsheet_id)
  end

  def show
    google_sheets_service = GoogleSheetsService.new
    spreadsheet_id = Rails.application.credentials.spreadsheet_id
    zines = google_sheets_service.get_products(spreadsheet_id)
    @zine = zines.find { |z| z[0].to_i == params[:id].to_i }
  end
end
