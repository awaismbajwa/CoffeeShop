class Order < ApplicationRecord
  has_many :order_combinations
  scope :by_status, ->(status) { where(status: status) }
end
