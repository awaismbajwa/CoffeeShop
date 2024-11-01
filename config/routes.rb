Rails.application.routes.draw do
  root "pos#index"
  get "/items", to: "pos#index"
  get "/bundles", to: "pos#index"

  resources :orders, only: [ :create, :show, :update ] do
    collection do
      get "status/:status", to: "orders#by_status", as: "by_status"
    end
  end
end
