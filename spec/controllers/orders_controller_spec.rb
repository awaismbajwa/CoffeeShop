require 'rails_helper'

RSpec.describe OrdersController, type: :controller do
  describe "GET #show" do
    it "returns a success response" do
      order = create(:order)
      get :show, params: { id: order.id }

      expect(response).to have_http_status(:success)
    end
  end
end
