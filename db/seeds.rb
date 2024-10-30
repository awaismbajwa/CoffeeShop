# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

ItemCombination.destroy_all
Combination.destroy_all
Item.destroy_all
Tax.destroy_all

no_tax = Tax.create!({
   name: "NoTax",
   rate: 0 })
standard_tax = Tax.create!({
   name: "StandardTax",
   rate: 19.5 })
luxury_tax = Tax.create!({
   name: "LuxuryTax",
   rate: 25 })
sales_tax = Tax.create!({
   name: "SalesTax",
   rate: 16 })

p "Created #{Tax.count} taxes"


Item.create!([
    {
      name: "Lemonade",
      price: 7,
      category: "drinks"
    },
    {
      name: "Crispy Grilled Sandwich",
      price: 20,
      category: "sandwich"
    },
    {
      name: "Classic Sandwich",
      price: 15,
      category: "sandwich"
    },
    {
      name: "Shortbread Cookies",
      price: 7,
      category: "cookies"
    },
    {
      name: "Plain Bagel",
      price: 8,
      category: "bakery"
    },
    {
      name: "Everything Bagel",
      price: 10,
      category: "bakery"
    },

    {
      name: "Chocolate Brownie",
      price: 12,
      category: "bakery"
    },
    {
      name: "Butter Croissant",
      price: 11,
      category: "bakery"
    } ])

madeleines = Item.create!(
  {
    name: "Madeleines",
    price: 5,
    category: "cookies"
  }
)

flat_white = Item.create!(
  {
    name: "Flat white",
    price: 15,
    category: "drinks"
  }
)

double_chocolate_brownie = Item.create!(
  {
    name: "Double Chocolate Brownie",
    price: 15,
    category: "bakery"
  }
)

ceramic_mug = Item.create!(
  {
    name: "Ceramic Desktop Mug",
    price: 30,
    category: "mug"
  }
)

espresso = Item.create!({
  name: "Espresso",
  price: 5,
  category: "drinks" })

ham_swiss_sandwich = Item.create!({
  name: "Ham&Swiss Sandwich",
  price: 20,
  category: "sandwich" })

chocolate_croissant = Item.create!({
  name: "Chocolate Croissant",
  price: 14,
  category: "bakery" })

cappuccino = Item.create!(
  {
    name: "Cappuccino",
    price: 12,
    category: "drinks"
  }
)

chocolate_chip_cookie = Item.create!(
  {
    name: "Chocolate Chip Cookie",
    price: 8,
    category: "cookies"
  }
)

recycled_mug = Item.create!(
  {
    name: "Recycled Ceramic Mug",
    price: 15,
    category: "mug"
  }
)


p "Created #{Item.count} items"


morning_boost_bundle = Combination.create!({
   name: "Morning Boost Bundle",
   discount: 10,
   tax: sales_tax
  })

afternoon_bundle = Combination.create!({
   name: "Afternoon Pick-Me-Up",
   discount: 0,
   tax: standard_tax
  })

cozy_combo = Combination.create!({
   name: "Cozy Combo",
   discount: 20,
   tax: luxury_tax
 })

student_special = Combination.create!({
    name: "The Student Special",
    discount: 25,
    tax: no_tax
  })




p "Created #{Combination.count} Combinations"


# add items for morning boost bundle
ItemCombination.create!([
  {
    combination: morning_boost_bundle,
    item: espresso
  },
  {
    combination: morning_boost_bundle,
    item: chocolate_croissant
  },
  {
    combination: morning_boost_bundle,
    item: ham_swiss_sandwich
  } ])


# add items for afternoon bundle
ItemCombination.create!(
  [
    {
      combination: afternoon_bundle,
      item: cappuccino
    },
    {
      combination: afternoon_bundle,
      item: chocolate_chip_cookie
    },
    {
      combination: afternoon_bundle,
      item: recycled_mug
    }
  ]
)

# add items for cozy_combo bundle
ItemCombination.create!(
  [
    {
      combination: cozy_combo,
      item: flat_white
    },
    {
      combination: cozy_combo,
      item: double_chocolate_brownie
    },
    {
      combination: cozy_combo,
      item: cappuccino
    },
    {
      combination: cozy_combo,
      item: ceramic_mug
    }
  ]
)


# add items to student_special bundle
ItemCombination.create!(
  [
    {
      combination: student_special,
      item: espresso
    },
    {
      combination: student_special,
      item: madeleines
    }
  ]
)


p "Created #{ItemCombination.count} ItemCombinations"
