class Apartment < ApplicationRecord
  acts_as_paranoid
  belongs_to :user
  validates :user_id, :name, presence: true
end
