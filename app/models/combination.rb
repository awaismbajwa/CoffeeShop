class Combination < ApplicationRecord
  belongs_to :tax
  has_many :item_combinations
  has_many :order_combinations

  def total_price
    item_combinations.includes(:item).map { |ic| ic.item.price  }.sum
  end
  def total_discounted_price
    price = total_price
    dc = price * (discount/100.0)
    price - dc
  end

  def total_tax_price
    price = total_discounted_price
    tax_value = price * (tax.rate/100.0)
    price + tax_value
  end
end
