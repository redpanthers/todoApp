class ToDo < ActiveRecord::Base
  mount_uploader :filetodo, TodoUploaderUploader
  belongs_to :user
end
