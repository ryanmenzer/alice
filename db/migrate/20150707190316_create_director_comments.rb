class CreateDirectorComments < ActiveRecord::Migration
  def change
    create_table :director_comments do |t|
    	t.integer :user_id
    	t.integer :application_id
    	t.text :text

      t.timestamps null: false
    end
  end
end
