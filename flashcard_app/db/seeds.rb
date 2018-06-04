# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({email: "demo@gmail.com", name: "demo", password: 'samplepw', password_confirmation: 'samplepw'})

Flashcard.destroy_all
Flashcard.create(question: "MVC (Model-View-Controller)", answer: "Software architectural design pattern that separates an application into functionalities with three main logical components: ", user_id: demo_user.id)
Flashcard.create(question: "Webpack", answer: "JavaScript bundler tool used with React that takes modules with dependencies and generates static assets representing those modules in a dependency graph", user_id: demo_user.id)
Flashcard.create(question: "Big O Notation", answer: "Complexity/worst-case scenario of an algorithm's performance: execution time required or the memory/disk space used", user_id: demo_user.id)
Flashcard.create(question: "Memoization", answer: "Optimization technique to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again", user_id: demo_user.id)
Flashcard.create(question: "AJAX (Asynchronous JavaScript And XML)", answer: "XMLHttpRequest object to communicate with servers. Sends and receives information in various formats, such as JSON", user_id: demo_user.id)
Flashcard.create(question: "JSON", answer: "Syntax for storing and exchanging data between a browser and a server as text written with JavaScript object notation. Can convert any JavaScript object into JSON that is sent to the server and vice-versa", user_id: demo_user.id)
Flashcard.create(question: "Trie", answer: "Radix/prefix tree, stores a dynamic set or associative array where the keys are strings. No node in the tree stores the key associated with that node; its position in the tree defines the key associated. All descendants of a node have a common prefix of String associated with that node, and root is empty String.", user_id: demo_user.id)
Flashcard.create(question: "API (Application programming interface)", answer: "Programming instructions for accessing the functionality of a software application", user_id: demo_user.id)
Flashcard.create(question: "Interpreted language", answer: " e.g. JavaScript, run by the language’s interpreter on the host machine by reading the code directly", user_id: demo_user.id)
Flashcard.create(question: "Compiled language", answer: "e.g. Swift, must compile and build code into a self-contained binary application before it can be distributed and run", user_id: demo_user.id)


# user = User.new
# user.email = '1@1.com'
# user.password = '123'
# user.password_confirmation = '123'
# user.save