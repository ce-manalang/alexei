require 'google/apis/sheets_v4'
require 'googleauth'

GOOGLE_SHEETS_CREDENTIALS = Rails.application.credentials.google_sheets

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

Google::Auth::ServiceAccountCredentials.make_creds(
  json_key_io: StringIO.new(GOOGLE_SHEETS_CREDENTIALS.to_json),
  scope: SCOPES
)
