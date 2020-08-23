#!/bin/bash

# Perform WP installation process.
server/vendor/bin/wp core install \
    --url="localhost:3001" \
    --title="WodaWordPress" \
    --admin_user="test" \
    --admin_email="test@woda.at" \
    --admin_password="test"

# Update permalink structure
server/vendor/bin/wp option update permalink_structure '/%postname%'

# Set WpGraphQl Cors "Access-Control-Allow-Origin" header
server/vendor/bin/wp option update wpgraphql_acao 'http://localhost:3000'

# Remove all posts, comments, and terms.
server/vendor/bin/wp site empty --yes

# Generate data on server
server/vendor/bin/wp post generate --count=100 --post_type=post
