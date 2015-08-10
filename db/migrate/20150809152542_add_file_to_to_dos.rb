class AddFileToToDos < ActiveRecord::Migration
  def change
    add_column :to_dos, :filetodo, :string
  end
end
