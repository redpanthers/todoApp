Rails.application.routes.draw do
  get 'gallery/index'

  get 'gallery/store'

  get 'gallery/update'

  get 'gallery/delete'

  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'
  get  'home/get_todo'
  post 'home/store_todo'

  post 'user/:id/update', to:'user#update_user'
  post 'user/upload_profile', to:'user#upload_profile'

  get 'user/gallery', to:'gallery#index'
  post 'user/gallery/create', to:'gallery#store'
  post 'user/gallery/update_details', to:'gallery#update_details'
  post 'user/gallery/:id/delete', to:'gallery#delete'

  get 'user/:user_id/album', to:'album#index'
  post 'user/album/create', to:'album#create'
  post 'user/album/update', to:'album#update'

  post 'user/album/gallery', to:'album#add_to_album'
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
