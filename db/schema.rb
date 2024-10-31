# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_31_215937) do
  create_table "combinations", force: :cascade do |t|
    t.string "name"
    t.decimal "discount"
    t.integer "tax_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tax_id"], name: "index_combinations_on_tax_id"
  end

  create_table "item_combinations", force: :cascade do |t|
    t.integer "item_id", null: false
    t.integer "combination_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["combination_id"], name: "index_item_combinations_on_combination_id"
    t.index ["item_id"], name: "index_item_combinations_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "tax_id", null: false
    t.index ["tax_id"], name: "index_items_on_tax_id"
  end

  create_table "order_combinations", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "combination_id"
    t.integer "item_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["combination_id"], name: "index_order_combinations_on_combination_id"
    t.index ["item_id"], name: "index_order_combinations_on_item_id"
    t.index ["order_id"], name: "index_order_combinations_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "status"
    t.decimal "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taxes", force: :cascade do |t|
    t.string "name"
    t.decimal "rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "combinations", "taxes"
  add_foreign_key "item_combinations", "combinations"
  add_foreign_key "item_combinations", "items"
  add_foreign_key "items", "taxes"
  add_foreign_key "order_combinations", "combinations"
  add_foreign_key "order_combinations", "items"
  add_foreign_key "order_combinations", "orders"
end
