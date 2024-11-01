class Tax < ApplicationRecord
  validates :name, :rate, presence: true
  validates_numericality_of :rate, greater_than: 0

  has_many :combinations
end
