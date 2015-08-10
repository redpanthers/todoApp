class AddUserImageToUser < ActiveRecord::Migration
  def change
    add_column :users, :userimage, :string
  end
end
