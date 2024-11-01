class OrdersController < ApplicationController
  def show
    @order = Order.includes(:order_combinations).find(params[:id]).as_json(include: {
      order_combinations: {
        only: [ :item, :combination ],
        include: [ :item, :combination ]
      }
    })
    render json: @order
  end

  def create
    cart_items = params[:cart_items]
    order_total = 0

    order = Order.new(order_params)

    cart_items.each do |item|
      item = item[1]
      item_quantity = item[:quantity]
      item = item[:item]

      if item[:category].present?
        shop_item = Item.find(item[:id])
      else
        shop_combination = Combination.find(item[:id])
      end

      order.order_combinations.build(
        quantity: item_quantity,
        combination: shop_combination,
        item: shop_item
      )

      # Calculate the order total
      order_total += (shop_item ? shop_item.total_tax_price : shop_combination.total_tax_price) * item_quantity
    end

    if order_total.round(2) != order.total_price.round(2)
      render json: { success: false, errors: [ message: "price calculation error!" ] }, status: :unprocessable_entity
    else
      if order.save
        render json: { success: true, order_id: order.id }, status: :created
      else
        render json: { success: false, errors: order.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
  def order_params
    params.require(:order).permit(:status, :total_price)
  end
end
