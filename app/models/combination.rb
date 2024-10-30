class Combination < ApplicationRecord
  belongs_to :tax
  has_many :item_combinations
end
