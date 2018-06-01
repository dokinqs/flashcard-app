class FlashcardsController < ApplicationController
  before_action :set_flashcard, only: [:show, :tags, :update, :destroy]

  # GET /flashcards
  def index
    # @flashcards = Flashcard.all

    # render json: @flashcards
    render json: {
      flashcards: [
        {'question': 'q1', 'answer': 'a1'},
        {'question': 'q2', 'answer': 'a2'},
        {'question': 'q3', 'answer': 'a3'}
      ]
    }.to_json
  end

  # GET /flashcards/1
  def show
    render json: @flashcard
  end

  # POST /flashcards
  def create
    @flashcard = Flashcard.new(flashcard_params)

    if @flashcard.save
      render json: @flashcard, status: :created, location: @flashcard
    else
      render json: @flashcard.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /flashcards/1
  def update
    if @flashcard.update(flashcard_params)
      render json: @flashcard
    else
      render json: @flashcard.errors, status: :unprocessable_entity
    end
  end

  # DELETE /flashcards/1
  def destroy
    @flashcard.destroy
  end

  
  # def tags
  #   @flashcard.tags
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flashcard
      @flashcard = Flashcard.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def flashcard_params
      params.require(:flashcard).permit(:user_id, :question, :answer)
    end
end
