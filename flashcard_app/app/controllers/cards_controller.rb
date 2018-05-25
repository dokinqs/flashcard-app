class CardsController < ApplicationController
  def index
    render json: {
      cards: [
        {'category': 'chinese'},
        {'category': 'japanese'},
        {'category': 'korean'}
      ]
    }.to_json
  end
end
  
