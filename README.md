# Todo Application

A full-stack todo application built with Ruby on Rails backend and React TypeScript frontend.

## Tech Stack

### Backend
- **Ruby**: 2.7.8
- **Rails**: 6.1.7.10
- **Database**: SQLite3
- **CORS**: rack-cors for cross-origin requests

### Frontend
- **React**: Latest
- **TypeScript**: Latest
- **npm**: 11.4.2
- **HTTP Client**: Axios

## Project Structure

```
myproject/
├── todo-backend/          # Rails API backend
│   ├── app/
│   │   ├── controllers/
│   │   │   └── api/v1/
│   │   │       └── todos_controller.rb
│   │   └── models/
│   │       └── todo.rb
│   ├── config/
│   │   ├── routes.rb
│   │   └── initializers/
│   │       └── cors.rb
│   └── db/
│       ├── migrate/
│       └── seeds.rb
└── todo-frontend/         # React TypeScript frontend
    ├── src/
    │   ├── components/
    │   │   ├── TodoForm.tsx
    │   │   ├── TodoItem.tsx
    │   │   └── TodoList.tsx
    │   ├── services/
    │   │   └── todoService.ts
    │   ├── types/
    │   │   └── Todo.ts
    │   └── App.tsx
    └── package.json
```

## Features

- ✅ Create new todos
- ✅ View all todos (separated by pending/completed)
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states
- ✅ TypeScript type safety

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/v1/todos` | Get all todos |
| GET    | `/api/v1/todos/:id` | Get a specific todo |
| POST   | `/api/v1/todos` | Create a new todo |
| PUT    | `/api/v1/todos/:id` | Update a todo |
| DELETE | `/api/v1/todos/:id` | Delete a todo |

## Setup Instructions

### Prerequisites
- Ruby 2.7.8
- Rails 6.1.7.10
- Node.js (with npm 11.4.2)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd todo-backend
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Setup database:
   ```bash
   bundle exec rails db:migrate
   ```

4. (Optional) Seed with sample data:
   ```bash
   bundle exec rails db:seed
   ```

5. Start the Rails server:
   ```bash
   bundle exec rails server -p 3001
   ```

   The API will be available at `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd todo-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`

## Usage

1. **Add a Todo**: Fill in the title and optional description, then click "Add Todo"
2. **Mark Complete**: Click the circle button next to a todo to toggle its completion status
3. **Delete Todo**: Click the trash icon to delete a todo (confirmation required)
4. **View Organization**: Todos are automatically organized into "Pending" and "Completed" sections

## Configuration

### CORS Setup
The backend is configured to accept requests from `http://localhost:3000`. To change this:

1. Edit `config/initializers/cors.rb`
2. Update the `origins` parameter to your frontend URL

### API Base URL
The frontend API base URL is configured in `src/services/todoService.ts`. Update `API_BASE_URL` if your backend runs on a different port.

## Development

### Adding New Features

1. **Backend**: Add new endpoints in `app/controllers/api/v1/todos_controller.rb`
2. **Frontend**: Update TypeScript interfaces in `src/types/Todo.ts` and service methods in `src/services/todoService.ts`

### Database Schema

The Todo model has the following fields:
- `id`: Primary key
- `title`: String (required)
- `description`: Text (optional)
- `completed`: Boolean (default: false)
- `created_at`: Timestamp
- `updated_at`: Timestamp

## Troubleshooting

### Backend Issues
- Ensure Ruby 2.7.8 and Rails 6.1.7.10 are installed
- Check that port 3001 is available
- Run `bundle exec spring stop` if encountering spring issues

### Frontend Issues
- Ensure Node.js and npm are installed
- Check that port 3000 is available
- Verify the backend is running before starting the frontend

### CORS Issues
- Ensure the frontend URL is correctly configured in `config/initializers/cors.rb`
- Restart the Rails server after changing CORS configuration

## Testing the API

You can test the API using curl:

```bash
# Get all todos
curl http://localhost:3001/api/v1/todos

# Create a new todo
curl -X POST http://localhost:3001/api/v1/todos \
  -H "Content-Type: application/json" \
  -d '{"todo": {"title": "Test Todo", "description": "Test description"}}'

# Update a todo
curl -X PUT http://localhost:3001/api/v1/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"todo": {"completed": true}}'

# Delete a todo
curl -X DELETE http://localhost:3001/api/v1/todos/1
```

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Due dates for todos
- [ ] Categories/tags for todos
- [ ] Search and filtering
- [ ] Drag and drop reordering
- [ ] Dark mode theme
- [ ] Real-time updates with WebSockets
- [ ] Mobile app using React Native

## License

This project is created for educational purposes.
