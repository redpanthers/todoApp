class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.boolean :completed, index: true
      t.integer :priority
      t.timestamps null: false
    end
  end
end
