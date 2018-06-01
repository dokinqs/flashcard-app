Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :tags do
    get :flashcards, on: :member
  end
  resources :flashcards do
    get :tags, on: :member
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'flashcards#index'
  resources :flashcards
end
