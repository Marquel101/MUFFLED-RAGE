# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

@admin =User.create!(username: 'marquel', email: 'marquel@email.com', password: 'marquel')

puts "#{User.count} users created"

Post.create!(name: "test", user: @admin)
Post.create!(name: "test1", user: @admin)
Post.create!(name: "test2", user: @admin)

puts "#{Post.count} post(s) created"