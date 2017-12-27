<?php

/*
 * Helper variables
 */

$protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
$host = rtrim(getenv('APP_URL'), '/');
$baseUrl = $protocol . $host;

$realpath = realpath($_SERVER['DOCUMENT_ROOT']);
$basePath = rtrim(str_replace('\\', DIRECTORY_SEPARATOR, $realpath), '/');

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [
    // Default
    '*' => [
        'environmentVariables' => array(
            'baseUrl' => $baseUrl,
            'basePath' => $basePath,
            'isProduction' => (getenv('APP_ENV') == 'production'),
        ),
        'appId' => getenv('APP_ID'),
        'validationKey' => getenv('APP_KEY'),
        'siteUrl' => $baseUrl,
        'baseCpUrl' => $baseUrl,
        'allowAutoUpdates' => false,
        'devMode' => (getenv('APP_DEBUG') == '1'),
        'usePathInfo' => 'true',
        'omitScriptNameInUrls' => true,
        'cacheDuration' => 'P1Y',
    ],

    // Dev environments
    'local' => [
        'allowAutoUpdates' => true,
        'devMode' => 1,
        'cache' => false,
        'usePathInfo' => 'auto',
    ],

    'dev' => [
        'allowAutoUpdates' => true,
        'cache' => false,
    ],

    'staging' => [
        'cache' => false
    ],
];
