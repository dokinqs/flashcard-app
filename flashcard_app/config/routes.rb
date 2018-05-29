Rails.application.routes.draw do
  resources :tags
  resources :flashcards
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'cards#index'
  resources :cards
end
