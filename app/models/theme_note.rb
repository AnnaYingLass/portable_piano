class ThemeNote < ApplicationRecord
  belongs_to(:theme)
  belongs_to(:note)
end
