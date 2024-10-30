class OrderCombination < ApplicationRecord
  belongs_to :order
  belongs_to :combination, optional: true
  belongs_to :item, optional: true
end
