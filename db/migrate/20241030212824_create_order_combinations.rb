class CreateOrderCombinations < ActiveRecord::Migration[7.2]
  def change
    create_table :order_combinations do |t|
      t.references :order, null: false, foreign_key: true
      t.references :combination, null: true, foreign_key: true
      t.references :item, null: true, foreign_key: true

      t.integer :quantity

      t.timestamps
    end
  end
end
