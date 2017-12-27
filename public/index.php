<?php

// Path to your craft/ folder
$craftPath = '../craft';
$root_dir = dirname(__DIR__);

require_once('../vendor/autoload.php');

/**
 * Use Dotenv to set required environment variables and load .env file in root
 */
if (file_exists($root_dir . '/.env')) {
    $dotenv = new Dotenv\Dotenv($root_dir);
    $dotenv->load();
}

// Environment server variables
$_SERVER['PHP_SELF'] = $_SERVER['SCRIPT_NAME'] = getenv( 'APP_URL' );

define('CRAFT_TEMPLATES_PATH', '../resources/views/');
define('CRAFT_ENVIRONMENT', getenv('APP_ENV'));

// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';

if (!is_file($path))
{
	if (function_exists('http_response_code'))
	{
		http_response_code(503);
	}

	exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}

require_once $path;
