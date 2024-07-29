# Fullstack Developer Roadmap - After PostgreSQL Checkpoint Simple CRUD Apps

A simple command-line interface (CLI) for managing a todo list using Node.js, PostgreSQL, and the `commander` library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd SimpleCrudCli
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add your PostgreSQL database configuration:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=yourpassword
   DB_NAME=tododb
   ```

## Usage & Commands

- `version`: Show version
- `new <description>`: Add a new todo item
- `list [status]`: List all todo items (optionally filter by status)
- `done <id>`: Mark a todo item as done
- `delete <id>`: Delete a todo item

### Examples

- Add a new todo item:

  ```sh
  node src/index.js new "Buy groceries"
  ```

- List all todo items:

  ```sh
  node src/index.js list
  ```

- List all completed todo items:

  ```sh
  node src/index.js list done
  ```

- Mark a todo item as done:

  ```sh
  node src/index.js done 1
  ```

- Delete a todo item:
  ```sh
  node src/index.js delete 1
  ```

## Environment Variables

The following environment variables need to be set in the `.env` file:

- `DB_HOST`: The hostname of the PostgreSQL server
- `DB_PORT`: The port number of the PostgreSQL server
- `DB_USER`: The username to connect to the PostgreSQL server
- `DB_PASSWORD`: The password to connect to the PostgreSQL server
- `DB_NAME`: The name of the PostgreSQL database
