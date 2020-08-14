class Resource < ApplicationRecord
  belongs_to :artist

  validates :name, presence: true, uniqueness: true
  validates :link, presence: true, uniqueness: true
end
