class Album < ActiveRecord::Base
  has_many :galleries
  belongs_to :user
end
