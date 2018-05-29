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

  def create
     @card = Card.new
  end

  def edit
  end

  def create
    @card = Card.new(card_params)

  end

  def update
  end

  def destroy
  end
  
end
  
