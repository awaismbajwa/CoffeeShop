Rails.application.routes.draw do
  root "pos#index"
  get "/items", to: "pos#index"
  get "/bundles", to: "pos#index"
end
