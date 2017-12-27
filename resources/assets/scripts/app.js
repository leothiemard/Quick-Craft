/*
 * Import a logger for easier debugging.
 */

import debug from 'debug';
const log = debug( 'app:log' );

// The logger should only be disabled if we’re in development.
if ( ENV === 'development' ) {
    debug.enable( '*' );
    log( 'Logging is enabled!' );
} else {
    debug.disable();
}