# React Mui WP GraphQl Example

Example backend build with React and Material Design. 
Reads data from a GraphQl API WordPress server with the WPGraphQL plugin.

## Setup

Install dependencies

```sh
composer install
pnpm install
```

Create the database and fill details in `.env` file

```sh
cp .env.example .env
```

Setup server (This sets up the wordpress database with the expected configuration)
 
```sh
./bin/setup-server.sh
```

## Start server & client

Start server and react app

```sh
pnpm start
```

## Notes

### Authentication with JWT

Currently, both, the auth and refresh token, are stored in localStorage.
This is not best practice but was a simple way to persist auth state across browser refresh.
Research better alternatives here: 

* https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_persist
* https://github.com/wp-graphql/wp-graphql-jwt-authentication

### Refreshing the JWT

Currently, the auth token will be refreshed when it is expired when a request has to be done.
Maybe it would be better to silently refesh it in the background whenever it expires.  
