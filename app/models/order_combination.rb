class OrderCombination < ApplicationRecord
  belongs_to :order
  belongs_to :combination
end
