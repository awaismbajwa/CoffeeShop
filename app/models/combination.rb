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
end
