class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.references :author, foregin_key: {to_table: :users}, null: false
      t.references :channel, foreign_key: true, null: false

      t.timestamps
    end
  end
end
