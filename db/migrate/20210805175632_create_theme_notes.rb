class CreateThemeNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :theme_notes do |t|
      t.references :theme, foreign_key: true
      t.references :note, foreign_key: true
      t.integer :rank
      t.timestamps
    end
  end
end
