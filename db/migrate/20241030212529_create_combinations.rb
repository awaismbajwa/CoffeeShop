class CreateCombinations < ActiveRecord::Migration[7.2]
  def change
    create_table :combinations do |t|
      t.string :name
      t.decimal :discount
      t.references :tax, null: false, foreign_key: true

      t.timestamps
    end
  end
end
