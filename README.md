# Project Name

A Ruby on Rails application with a React frontend and SQLite3 database. This project demonstrates how to integrate React components into a Rails app, using SQLite3 as the development and testing database.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Docker Setup](#docker-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Getting Started

This project is a basic setup of a simple coffee shop POS implemented using Ruby on Rails and Reactjs 
## Prerequisites

Make sure you have the following installed:

- [Ruby](https://www.ruby-lang.org/en/downloads/) (<code>version >= 3.3.5</code>)
- [Rails](https://rubyonrails.org/) (<code>version >= 7.2.1.2</code>)
- [Node.js and npm](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/awaismbajwa/CoffeeShop
   cd CoffeeShop

2. **Install Ruby Gems**
   Run the following command to install the necessary gems:
   ```bash
   bundle install

3. **Install JavaScript Dependencies**
   ```bash
   yarn install
   ```

## Database setup
This project uses SQLite3 as the development and testing database.

1. **Create and Migrate the Database**
   ```bash
   rails db:create
   rails db:migrate
2. **Seed the Database**
   ```bash
   rails db:seed

## Running the Project

1. **Start the rails server**
   To start the Rails server, run:
   ```bash
   rails server
   ```
   The application will be accessible at http://localhost:3000.


2. **Compile JavaScript Assets**
   
    In development, Rails will automatically compile assets with Webpacker. However, to watch for changes to React components, 
you can run Webpack in a separate terminal:
   ```bash
   ./bin/webpack-dev-server
   ```

3. **Navigate to Your Application**

   Open a browser and go to http://localhost:3000 to see the application running.

## Running Tests
   Project is configured to run RSpec tests and linting
   ```bash
   rspec #for executing all the specs in repo
   bin/rubocop #for code linting checks
   ```



## Docker Setup
1. **Make sure you have the following installed**:
   - **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
   - **Docker Compose**: Included with Docker Desktop or install separately via Docker's documentation
   

2.  **Build and Start Docker Containers**
    
    For running app with docker change webpacker dev_server:host and dev_server:public values from localhost to webpacker
    Run the following commands to build the Docker image and start the containers:
    ```bash
    docker-compose build
    docker-compose up 
    ```
3. **Running Rails Commands in Docker**

   To run Rails commands, such as opening the Rails console or creating a migration, 
   prefix commands with <code>docker-compose run web</code>:
   ```bash
   docker-compose run web rails console
   docker-compose run web rails db:create db:migrate
   docker-compose run web rails db:reset
   ```


## Project Structure

This project follows a standard Rails structure with the addition of a React frontend.
 
- **Rails Backend:** Rails controllers, models, and views handle backend processing.
- **React Frontend:** Located in app/javascript, with React components rendered in Rails views using react-rails and webpacker.


## Key Folders and Files

- <code>app/javascript/packs/application.js</code> Entry point for the React application
- <code>app/views</code>: Holds Rails views where you can embed React components.
- <code>app/controllers</code>: Rails controllers handle API requests and serve data to the frontend.
- <code>config/routes.rb</code>: Define Rails routes for API and frontend views here.

## Contributing
If you want to contribute to this project, please fork the repository, create a new branch, and submit a pull request.

1. Fork the repository
2. Create a branch (<code>git checkout -b feature-name</code>)
3. Commit your changes (<code>git commit -am 'Add new feature'</code>)
4. Push to the branch (<code>git push origin feature-name</code>)
5. Create a new Pull Request
