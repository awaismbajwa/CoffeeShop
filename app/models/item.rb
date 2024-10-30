class Item < ApplicationRecord
  has_many :item_combinations
  has_many :order_combinations
end
