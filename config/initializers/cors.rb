Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*" # Use specific origin like 'http://localhost:3000' in production
    resource "*", headers: :any, methods: [ :get, :post, :put, :patch, :delete, :options, :head ]
  end
end
