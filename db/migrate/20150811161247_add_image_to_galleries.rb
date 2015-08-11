class AddImageToGalleries < ActiveRecord::Migration
  def change
    add_column :galleries, :image, :string, :after => :description
  end
end
