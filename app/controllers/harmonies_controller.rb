class HarmoniesController < ApplicationController

  # intervals
  def minor_2nd
  end

  def major_2nd
  end

  def minor_3rd
  end

  def major_3rd
  end

  def perfect_4th
  end

  def augmented_4th
  end

  def perfect_5th
  end

  def minor_6th
  end

  def major_6th
  end

  def minor_7th
  end

  def major_7th
  end

  def perfect_8ve
  end

  # chords
  def major_triad
  end

  def minor_triad
  end

  def diminished_triad
  end

  def augmented_triad
  end

  def tritone
  end

end

  # def construct_major_triad
  #   @notes = Note.all
  #   @root = params[:number].to_i
  #   @results = [Note.find_by_number(@root), Note.find_by_number(@root + 4),Note.find_by_number(@root + 7)]
  #   render json: @results
  # end

  # def construct_tritone
  #   @notes = Note.all
  #   @root = params[:number].to_i
  #   @results = [Note.find_by_number(@root), Note.find_by_number(@root + 6)]
  #   render json: @results
  # end

