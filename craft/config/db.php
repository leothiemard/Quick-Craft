<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return [
    '*' => [
        'server' => getenv('DB_HOST'),

        'database' => getenv('DB_DATABASE'),

        'user' => getenv('DB_USERNAME'),

        'password' => getenv('DB_PASSWORD'),

        'tablePrefix' => 'craft',
    ],
];
