class AddTaxToItem < ActiveRecord::Migration[7.2]
  def change
    add_reference :items, :tax, null: false, foreign_key: true
  end
end
