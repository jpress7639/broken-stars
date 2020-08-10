class Artist < ApplicationRecord
    has_many :symptoms
    has_many :resources

    validates :name, presence: true, uniqueness: true 
    validates :profile_img, presence: true, uniqueness: true
    validates :years, presence: true, uniqueness: true
    validates :disorder, presence: true, uniqueness: true
    validates :work_example, presence: true, uniqueness: true
    validates :work_URL, presence: true, uniqueness: true
    validates :story, presence: true, uniqueness: true
end
