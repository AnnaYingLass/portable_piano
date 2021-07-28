class PagesController < ApplicationController
  def home
    @notes = Note.all
    @first=Note.find_by_number(1)
    @third= Note.find_by_number(5)
  end
end
