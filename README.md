# React Mui WP GraphQl Example

Example backend build with React and Material Design. Data is synced via GraphQl and Apollo from a WordPress server.

## How to run

Install & Start server

```sh
composer install
cp .env.example .env
```

Create the database and fill details in `.env` file
It is expected you have WP-CLI installed globally
 
```sh
./setup-server.sh
./generate-data-on-server.sh
wp server --host=localhost --port=3001
```

Install the client dependencies and start react app

```sh
npm install
npm start
```
