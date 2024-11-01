require 'rails_helper'

RSpec.describe Tax, type: :model do
  it 'is valid with a name and rate' do
    tax = Tax.new(name: 'Standard Tax', rate: 10)
    expect(tax).to be_valid
  end

  it 'is invalid without a name' do
    tax = Tax.new(name: nil, rate: 10)
    expect(tax).to_not be_valid
  end

  it 'is invalid without a rate' do
    tax = Tax.new(name: "test", rate: nil)
    expect(tax).to_not be_valid
  end

  it 'is invalid with a negative rate' do
    tax = Tax.new(name: "test", rate: -10)
    expect(tax).to_not be_valid
  end

  it 'is invalid with a non integer rate' do
    tax = Tax.new(name: "test", rate: "test")
    expect(tax).to_not be_valid
  end
end
