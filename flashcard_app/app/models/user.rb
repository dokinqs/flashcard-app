class User < ApplicationRecord
  has_many :flashcards, dependent: :destroy
end
