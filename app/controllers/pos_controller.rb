class PosController < ApplicationController
  def index
    @items = Item.includes(:tax).all.sort_by(&:category).as_json(
      include: {
        tax: {
          only: [ :name, :rate ]
        }
      }
    )

    @bundles = Combination.includes(:item_combinations, :tax).all
    @bundles = @bundles.as_json(
      only: [ :id, :name, :discount, :tax ],
      include: {
        tax: {
          only: [ :name, :rate ]
        },
        item_combinations: {
          include: [ :item ]
        }
      },
      methods: [ :total_price, :total_discounted_price ]
    )
  end
end
