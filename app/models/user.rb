class User < ActiveRecord::Base

	has_many :applications
	has_many :director_comments

end
