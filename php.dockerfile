FROM php:8.2-fpm

# Installation des dépendances nécessaires
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    && docker-php-ext-install pdo pdo_mysql

# Nettoyage
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
