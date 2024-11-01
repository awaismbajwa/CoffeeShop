FactoryBot.define do
  factory :order do
    status { "new" }
    total_price { "9.99" }

    trait :with_order_combinations do
      after(:create) do |order|
        create_list(:order_combination, 3, order: order)
      end
    end
  end
end
