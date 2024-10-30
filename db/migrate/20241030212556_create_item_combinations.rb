class CreateItemCombinations < ActiveRecord::Migration[7.2]
  def change
    create_table :item_combinations do |t|
      t.references :item, null: false, foreign_key: true
      t.references :combination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
