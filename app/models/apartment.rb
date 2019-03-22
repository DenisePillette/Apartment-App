class Apartment < ApplicationRecord
  acts_as_paranoid
  belongs_to :user
  validates :user_id, :name, :contact, :phone, :address, :city, :state, :zip, :price, presence: true
  validates :price, numericality: true
end
