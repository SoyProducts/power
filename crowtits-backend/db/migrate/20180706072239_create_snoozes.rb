class CreateSnoozes < ActiveRecord::Migration[5.1]
  def change
    create_table :snoozes do |t|
      t.integer :user_id
      t.integer :duration

      t.timestamps
    end
  end
end
