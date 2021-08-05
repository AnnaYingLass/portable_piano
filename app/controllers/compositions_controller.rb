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

    p params[:my_theme]
    # above gives an array of note names e,g, [C3,E3,G3], from key.dataset.note;
    # change to array of note instances e.g [#< name:'C3'...>, #< name:'E3'...>, #<name: 'G3'>]
    @my_note_sequence = params[:my_theme].map{ |note| Note.find_by_name(note) }

    # save to database: theme_1 by storing all the theme notes in sequence

    # to retrieve: SELECT * FROM theme_notes WHERE theme_id = 1 ORDER BY rank;
    # returns eventually,[C3, E3, G3]


    render json: @my_note_sequence
  end

end
