class CreatePlacements < ActiveRecord::Migration
  def change
    create_table :placements do |t|
    	t.string :name
    	t.text :location
    	t.text :date

      t.timestamps null: false
    end
  end
end
