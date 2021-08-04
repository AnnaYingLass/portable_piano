Rails.application.routes.draw do
  root to: 'pages#landing_page'
  # get'home', to: 'pages#home', as: 'home'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.htm
  get 'home', to: "pages#home", as: 'home'
  get 'minor_2nd', to: "harmonies#minor_2nd", as: 'minor_2nd'
  get 'major_2nd', to: "harmonies#major_2nd", as: 'major_2nd'
  get 'minor_3rd', to: "harmonies#minor_3rd", as: 'minor_3rd'
  get 'major_3rd', to: "harmonies#major_3rd", as: 'major_3rd'
  get 'perfect_4th', to: "harmonies#perfect_4th", as: 'perfect_4th'
  get 'augmented_4th', to: "harmonies#augmented_4th", as: 'augmented_4th'
  get 'perfect_5th', to: "harmonies#perfect_5th", as: 'perfect_5th'
  get 'minor_6th', to: "harmonies#minor_6th", as: 'minor_6th'
  get 'major_6th', to: "harmonies#major_6th", as: 'major_6th'
  get 'minor_7th', to: "harmonies#minor_7th", as: 'minor_7th'
  get 'major_7th', to: "harmonies#major_7th", as: 'major_7th'
  get 'perfect_8ve', to: "harmonies#perfect_8ve", as: 'perfect_8ve'

  get 'major_triad', to: "harmonies#major_triad", as: 'major_triad'
  get 'minor_triad', to: "harmonies#minor_triad", as: 'minor_triad'
  get 'diminished_triad', to: "harmonies#diminished_triad", as: 'diminished_triad'
  get 'augmented_triad', to: "harmonies#augmented_triad", as: 'augmented_triad'
  get 'tritone', to: "harmonies#tritone", as: 'tritone'
  get 'dominant_7th_chord', to:"harmonies#dominant_7th_chord", as: 'dominant_7th_chord'


  # for ajax
  # get 'harmonies/construct_major_triad', to: "harmonies#construct_major_triad"
  # get 'harmonies/construct_tritone', to: "harmonies#construct_tritone"
end
