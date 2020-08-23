# React Mui WP GraphQl Example

Example backend build with React and Material Design. 
Reads data from a GraphQl API WordPress server with the WPGraphQL plugin.

## Setup

Install dependencies

```sh
composer install
npm install
```

Create the database and fill details in `.env` file

```sh
cp .env.example .env
```

Setup server (This sets up the wordpress database with the expected configuration)
 
```sh
./setup-server.sh
```

## Start server & client

Start server and react app

```sh
npm start
```

## Notes
