class HarmoniesController < ApplicationController
  # def chordify
  #   @root = params[:number].to_i
  #   @notes = Note.all

  #   chord_type = params[:chord_type]
  #   if chord_type == "major_triad"
  #     major_triad
  #   elsif chord_type == "tritone"
  #     tritone
  #   else
  #     @results = ["This chord is not yet ready to be played"]
  #   end
  # end



  def construct_major_triad
    @notes = Note.all
    @root = params[:number].to_i
    @results = [Note.find_by_number(@root), Note.find_by_number(@root + 4),Note.find_by_number(@root + 7)]
    render json: @results
  end
  # private

  def major_triad
    # @notes = Note.all
    # @root = params[:number].to_i
    # @results = [Note.find_by_number(@root), Note.find_by_number(@root + 4), Note.find_by_number(@root + 7)]

  end

  def tritone
    @notes = Note.all
    @root = params[:number].to_i
    @results = [Note.find_by_number(@root),Note.find_by_number(@root + 6)]
  end
end
