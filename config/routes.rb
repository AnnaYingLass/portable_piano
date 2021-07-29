Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.htm
  # get 'harmonies/chordify', to: "harmonies#chordify", as: 'chordify'

  get 'major_triad', to: "harmonies#major_triad", as: 'major_triad'
  get 'tritone', to: "harmonies#tritone", as: 'tritone'
end
