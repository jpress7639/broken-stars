Rails.application.routes.draw do
  resources :artists do
    resources :symptoms
    resources :resources
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
