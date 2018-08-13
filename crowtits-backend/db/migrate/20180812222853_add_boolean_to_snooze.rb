class AddBooleanToSnooze < ActiveRecord::Migration[5.2]
  def change
    add_column :snoozes, :status, :boolean
  end
end
