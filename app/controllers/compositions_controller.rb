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

    @my_name_sequence = params[:my_theme]
    p @my_sname_sequence
    # above gives an array of note names e,g, [C3,E3,G3]
    # change to array of note instances e.g [#< name:'C3'...>, #< name:'E3'...>, #<name: 'G3'>]
    @my_note_sequence = @my_name_sequence.map{ |name| Note.find_by_name(name) }
    end
    render json: @my_saved_theme
  end

end
