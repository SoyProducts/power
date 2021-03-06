require 'devise_token_auth'

# devise_for :users
Rails.application.routes.draw do
  post 'auth/request', to:'authorization#get_authorization'
  delete 'auth/sign_out', to:'sessions#destroy'
  mount ActionCable.server => '/cable'
  resources :notifications, only: :index
  resources :station_infos, only: :show 
  # mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
# mount_devise_token_auth_for 'User', at: 'auth'
