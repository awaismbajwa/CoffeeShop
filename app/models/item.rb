class Item < ApplicationRecord
  belongs_to :tax
  has_many :item_combinations
  has_many :order_combinations
end
