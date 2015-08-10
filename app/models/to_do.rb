class ToDo < ActiveRecord::Base
  mount_uploader :filetodo, TodoUploaderUploader
end
