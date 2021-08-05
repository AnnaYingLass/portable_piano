class CompositionsController < ApplicationController
  # protect_from_forgery with: :null_session
  # because post a bit dangerous, changes database
  # CORS
  skip_before_action :verify_authenticity_token

  def composing_mode
  end

  def compose
  end

  def save_compose
    @my_theme = params[:my_theme]
    p @my_theme
    @my_saved_theme = []
    @my_theme.each do |noteName|
      @my_saved_theme << Note.find_by_name(noteName)
    end
    render json: @my_saved_theme
  end

end
