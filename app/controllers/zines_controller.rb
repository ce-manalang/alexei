class ZinesController < ApplicationController
  require 'yaml'

  def index
    @zines = YAML.load_file(Rails.root.join('data', 'zines.yml'))
  end

  def show
    zines = YAML.load_file(Rails.root.join('data', 'zines.yml'))
    @zine = zines.find { |z| z["id"] == params[:id].to_i }
  end
end
