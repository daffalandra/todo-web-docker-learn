# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Clear existing todos
Todo.destroy_all

# Create sample todos
todos = [
  {
    title: "Learn Ruby on Rails",
    description: "Complete the Rails tutorial and build a simple application",
    completed: true
  },
  {
    title: "Set up React TypeScript frontend",
    description: "Create a modern frontend with React, TypeScript, and proper API integration",
    completed: true
  },
  {
    title: "Implement CRUD operations",
    description: "Add create, read, update, and delete functionality for todos",
    completed: false
  },
  {
    title: "Add user authentication",
    description: "Implement login/signup functionality with JWT tokens",
    completed: false
  },
  {
    title: "Deploy to production",
    description: "Deploy both backend and frontend to a cloud platform",
    completed: false
  }
]

todos.each do |todo_attrs|
  Todo.create!(todo_attrs)
end

puts "Created #{Todo.count} todos"

Todo.create!([
  {
    title: 'Learn Ruby on Rails',
    description: 'Complete the Rails tutorial and build a todo app',
    completed: false
  },
  {
    title: 'Learn React',
    description: 'Master React hooks and TypeScript integration',
    completed: false
  },
  {
    title: 'Setup project',
    description: 'Initialize Rails API and React frontend',
    completed: true
  }
])
