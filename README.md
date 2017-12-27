![Quick-Craft Logo](resources/assets/images/favicons/android-chrome-192x192.png)

Welcome to Quick-Craft!
====
A modern development environment boilerplate to quick-start your project using Craft CMS.

## Requirements

Make sure all dependencies have been installed before moving on:

* [PHP](http://php.net/manual/en/install.php) >= 7.1
* [Composer](https://getcomposer.org/download/)
* [Node.js](http://nodejs.org/) >= 7.5.x
* [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

### Initialize

```
    $ yarn
    $ composer install
    $ yarn build
```

### Configurations

1. Create a new empty database
2. Serve the `/public` folder locally
3. Duplicate `.env.example` and rename the copy `.env`
4. Open the `.env` file and update with your own environment variables
5. Open the `/resources/assets/config.json` file and update the `proxyUrl` variable.  

### Build Commands

* `yarn start` — Compile assets when file changes are made, start Browsersync session
* `yarn build` — Compile and optimize the files in your assets directory
* `yarn build:production` — Compile assets for production

## Environment Variables

### General

##### `APP_URL`

Used in the General Config to set the `baseUrl` and `siteUrl`. (Setting this explicitly per-environment prevents cache-poisoning attacks.)

##### `APP_ENV`

Sets the `CRAFT_ENVIRONMENT` constant in `index.php` and determines which per-environment config settings are applied.

##### `APP_ISPRODUCTION`

Sets the `isProduction` item in `environmentVariables` (in the General Config), which is then available for use throughout templates for enabling/disabling production-only features (e.g. analytics, META robots directives)

##### `APP_DEBUG`

Set to `1` to turn [Dev Mode](https://craftcms.com/support/dev-mode) on for a particular environment.

##### `APP_ID`

The [application ID](https://craftcms.com/docs/config-settings#appId), which is used for things like storing data caches and user sessions. If it’s not set, Craft will automatically generate one based on the server path

##### `APP_KEY`

The [validation key](https://craftcms.com/docs/config-settings#validationKey) used to verify that hashed values have not been tampered with.

### Databases

##### `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`

SQL credentials.

## Documentation

#### Content-management

* [CraftCMS](https://craftcms.com/docs/introduction)

#### Templating

* [Twig](https://twig.symfony.com/doc/2.x/)

#### Scripts

* [ES6](http://es6-features.org/)

#### Styles

* [BEM Naming](http://getbem.com/naming/)
* [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)