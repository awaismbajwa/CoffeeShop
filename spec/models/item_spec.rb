require 'rails_helper'

RSpec.describe Tax, type: :model do
  tax = Tax.new(name: 'Test Tax', rate: 10)

  it 'is valid with a name, category, price and tax' do
    item = Item.new(name: "test item", category: "category", price: 20, tax: tax)
    expect(item).to be_valid
  end

  it 'is not valid with out tax' do
    item = Item.new(name: "test item", category: "category", price: 20)
    expect(item).not_to be_valid
  end

  it 'is invalid with negative price' do
    item = Item.new(name: "test item", category: "category", price: -20, tax: tax)
    expect(item).not_to be_valid
  end
end
