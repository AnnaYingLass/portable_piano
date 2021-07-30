Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.htm
  get 'major_triad', to: "harmonies#major_triad", as: 'major_triad'
  get 'tritone', to: "harmonies#tritone", as: 'tritone'


  # for ajax
  get 'harmonies/construct_major_triad', to: "harmonies#construct_major_triad"
  get 'harmonies/construct_tritone', to: "harmonies#construct_tritone"
end
