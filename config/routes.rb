Rails.application.routes.draw do
  get "checkout/index"
  get "checkout/submit"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  root 'zines#index'
  resources :zines, only: [:index, :show]

  get 'cart', to: 'cart#show'
  post 'cart/add/:product_id', to: 'cart#add', as: 'add_to_cart'
  delete 'cart/remove/:product_id', to: 'cart#remove', as: 'remove_from_cart'
  delete 'cart/clear', to: 'cart#clear', as: 'clear_cart'

  # Checkout routes
  get 'checkout', to: 'checkout#index', as: 'checkout'
  post 'checkout/submit', to: 'checkout#submit', as: 'submit_checkout'
end
