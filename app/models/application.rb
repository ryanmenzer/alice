class Application < ActiveRecord::Base

	belongs_to :survey
	belongs_to :user
	belongs_to :placement
	has_one :director_comment
	has_many :answers

end
