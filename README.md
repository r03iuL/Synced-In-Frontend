# Synced In - Job Site (MERN Stack)

Synced In is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Redux, and Node.js). It provides job seekers and employers with a platform to connect and collaborate.

## Features

- User authentication (sign up, login, password reset)
- Job listings and search functionality
- Profile management
- Company profiles
- Messaging system
- Mobile-friendly design

## Demo

- Web app demo: View Demo
- Mobile app demo: View Demo

### Dummy Accounts

- Admin account: admin@tdev.app / password
- User account: user@tdev.app / password

## Project Structure

1. **API Server (Backend)**
   - Built with Express.js and Node.js
   - MongoDB for data storage
   - Authentication using Passport.js
   - Role-based access control
   - Input validation with Joi
   - Integration testing with Mocha, Chai, and Supertest
   - Docker support (dev and prod modes)

2. **React Client (Frontend)**
   - Created using Create React App
   - State management with Redux
   - Material-UI for UI components
   - Routing with react-router-dom and connected-react-router
   - Docker support (dev and prod modes)



## Getting Started

1. Clone the repository:
``
git clone https://github.com/yourusername/synced-in.git
``

2. Install dependencies:
- Backend: Navigate to the `server` directory and run `npm install`
- Frontend: Navigate to the `client` directory and run `npm install`

3. Configure environment variables:
- Create `.env` files in both the `server` and `client` directories (use `.env.example` as a template)

4. Start the development server:
- Backend: `npm run dev` (Docker: `docker-compose up`)
- Frontend: `npm start` (Docker: `docker-compose up client`)

5. Access the app at `http://localhost:3000` .

## Contributing

Feel free to contribute by opening issues or pull requests. Let's build a better job platform together!

