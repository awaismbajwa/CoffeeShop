FactoryBot.define do
  factory :order_combination do
    association :item
    association :combination
    association :order
    quantity { 1 }
  end
end
