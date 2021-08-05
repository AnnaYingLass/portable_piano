class Theme < ApplicationRecord
  # scope
  # usuaully, fetch all themenotes, if don't care, give by id
  # now: give me the array accoding to the rank
  has_many(:theme_notes, -> { order('rank') })
  has_many(:notes, through: :theme_notes)
end
