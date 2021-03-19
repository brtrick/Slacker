class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.references :workspace, foreign_key: true, null: false
      t.boolean :private, null: false, default: false
      t.boolean :dm, null: false, default: false

      t.timestamps
    end
    add_index :channels, :name, unique: true
    add_index :channels, [:workspace_id, :name], unique: true
  end
end
