FactoryBot.define do
  factory :combination do
    name { "Coffee Mashup" }
    discount { 10.0 }
    association :tax

    trait :with_items do
      after(:create) do |combi|
        create_list(:item_combination, 3, combination: combi)
      end
    end
  end
end
