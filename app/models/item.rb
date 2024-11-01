class Item < ApplicationRecord
  belongs_to :tax
  has_many :item_combinations
  has_many :order_combinations

  validates :name, :price, :category, presence: true
  validates_numericality_of :price, greater_than: 0


  def total_tax_price
    tax_value = price * (tax.rate/100.0)
    price + tax_value
  end
end
