#!/bin/bash

# Perform WP installation process.
wp core install \
    --url="127.0.0.1:8001" \
    --title="WodaWordPress" \
    --admin_user="test" \
    --admin_email="test@woda.at" \
    --admin_password="test"

# Update permalink structure
wp option update permalink_structure '/%postname%'

# Remove all posts, comments, and terms.
wp site empty --yes
