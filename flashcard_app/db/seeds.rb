# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# # demo_user = User.create({login: "demo@gmail.com", name: "demo", password_digest: "demopw"})
# demo_user = User.create({login: "demo@gmail.com", name: "demo", password: 'samplepw', password_confirmation: 'samplepw'})

# Flashcard.destroy_all
# Flashcard.create(question: "Sample Flashcard Q", answer: "Sample Flashcard A", user_id: demo_user.id)
# Flashcard.create(question: "Sample Flashcard Q 2", answer: "Sample Flashcard A 2", user_id: demo_user.id)
# Flashcard.create(question: "Sample Flashcard Q 3", answer: "Sample Flashcard A 3", user_id: demo_user.id)

user = User.new
user.login = '1@1.com'
user.password = '123'
user.password_confirmation = '123'
user.save