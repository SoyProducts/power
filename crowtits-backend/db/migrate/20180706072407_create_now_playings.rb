class CreateNowPlayings < ActiveRecord::Migration[5.1]
  def change
    create_table :now_playings do |t|
      t.string :song_title
      t.string :channel_name
      t.string :stream_link
      t.string :station_twitter
      t.string :phone
      t.string :request_form_link

      t.timestamps
    end
  end
end
