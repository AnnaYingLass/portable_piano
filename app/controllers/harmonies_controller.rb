class HarmoniesController < ApplicationController

  def major_triad
  end

  def tritone
  end

  def construct_major_triad
    @notes = Note.all
    @root = params[:number].to_i
    @results = [Note.find_by_number(@root), Note.find_by_number(@root + 4),Note.find_by_number(@root + 7)]
    render json: @results
  end

  def construct_tritone
    @notes = Note.all
    @root = params[:number].to_i
    @results = [Note.find_by_number(@root), Note.find_by_number(@root + 6)]
    render json: @results
  end

end

