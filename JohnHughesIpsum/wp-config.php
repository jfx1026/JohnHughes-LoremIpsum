<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'johnfree_wordpress176');

/** MySQL database username */
define('DB_USER', 'johnfree_word176');

/** MySQL database password */
define('DB_PASSWORD', 'zfvZgP61ggLB');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '?jjqdQV%S=FZuNg!jUJu$WKq>)&*e+*/xvOo+=LHgHLS_cfKGdSHH{z;R=MDNsy%?o%HL<zZOs_HnMFg>i*h*Z;Lyz@pWD^gHj}%xgpIc<<kZqlq-MVn_(dJ|MNYBQUb');
define('SECURE_AUTH_KEY', 'V@=l]k%AFsbAJjacj|Ox/{C_HxC;g(q@K(i=bN|-|&pC=FuXaoei$b<$u|nljubouDF>V>olE(Xx_xsGZ-vYnH/=?LZ}P&AA+ZUah?&P[KbvgT&*Ob%isWKy+DEkkVqC');
define('LOGGED_IN_KEY', 'z+-CB)xk-vvJc_JRsaZXmOGhB[=RdaeW{?S!W@Oc?^^j|][}WmeO]WbKR%U;BU=z$ONGB}_dLmrsH*Et?O/Mn^{kZ<jC>&IKxi+xC<MkMVje_JPbQg]PK{)hW$(BLQmW');
define('NONCE_KEY', '>[WF@+d/$iN)XIdngS[v^Z|gEO/poVzk{k}asjJGFojiXL}/LDpZKfaw-<k>dHK!arZ=qu{|gt]$pp+nq)a!c-|&$MbAwF+&e{L>XLPokRr}$LqWxbCXEMmZKxs*$n?M');
define('AUTH_SALT', 'v/$=u=v|T)!VkMiMd%aFlvN;uAx|nE</Ppvn!bH?AKuzu<-qWQlLb?s_fwSrezJr{aFoae;IlJNZqLNrewA{txmv@]kg_*OCPlnVf}VKcjQf>DWEQ%Q?N{Dqnn+OQsFI');
define('SECURE_AUTH_SALT', 'h%@(Ir^ET?HwC%)<fv{>)xY(B!Lf^z<t_Xe)YmTk_AAb?P}up[q{U=WA>QIX(*()(d*c?o]QmYnK/P[<I}HOd+JhSE{?M/+@A?Pk]p>L(jtN![H{bQ(Pmq*brfysd/Un');
define('LOGGED_IN_SALT', 'HKSOr{jRa$JKtffvD(D+UIHn(+yZ}sJ&)Llj?t=]YVUxFm&TAT_-ns=EGTeOVc-EVyV@$hVAEZx%iGE}/DVE<G*${LK{qOp{DAIcv|bYY%N>|r=BN;aRKTuv&A^<B)/k');
define('NONCE_SALT', 'zLr>LwjkcTXQ!H]r=qr@d/t?pD{hQqE*V-y}ojUIZ[-});z@V$*sU_xQYxM[u?RyknDVvaxWYBW^L$AYFu+;XpNk|_<]wBlbn;*T?IDUKk?fw|N+pDhvzxGPf]@A-ddO');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_rpku_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 5 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
