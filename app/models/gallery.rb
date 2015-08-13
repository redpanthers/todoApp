class Gallery < ActiveRecord::Base
  mount_uploader :image, GalleryImageUploader
  belongs_to :album
  belongs_to :user
end
