class CreateSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :sessions do |t|
      t.string :accesstoken
      t.string :uid
      t.boolean :active

      t.timestamps
    end
  end
end
