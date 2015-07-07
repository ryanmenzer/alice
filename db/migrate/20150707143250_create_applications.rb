class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
    	t.integer :survey_id
    	t.integer :user_id
    	t.integer :year
    	t.integer :placement_id

      t.timestamps null: false
    end
  end
end
