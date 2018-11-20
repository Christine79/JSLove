Rails.application.routes.draw do
#  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get  'stress/app', to:   'stress#app'
#  get  'stress/app', to:   'stress#application'
  root 'stress#app'
end
