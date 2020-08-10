class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :profile_img
      t.string :years
      t.string :disorder
      t.string :work_example
      t.string :work_URL
      t.string :story

      t.timestamps
    end
  end
end
