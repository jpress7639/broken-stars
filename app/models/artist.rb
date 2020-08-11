class Artist < ApplicationRecord
    has_many :symptoms
    has_many :resources

    validates :name, presence: true, uniqueness: true
    validates :profile_img, presence: true
    validates :years, presence: true
    validates :disorder, presence: true
    validates :work_example, presence: true
    validates :work_URL, presence: true
    validates :story, presence: true, length: { minimum: 100 }

    # def name_validation
    #     errors.add(:name, :invalid_characters, not_allowed: "!@#%")
    # end
end
