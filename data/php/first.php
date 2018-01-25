<?php #data/php/first.php?user=....

/**
 *  $_REQUEST gets content from
 *  a) $_GET
 *  b) $_POST
 *  c) $_COOKIE
 *
 *
 * DO NOT USE $_REQUEST! it is not secure and it is easy to inject data via cookies
 * from the client side
 */

if(isset($_REQUEST['user'])){echo 'Welcome back, <b>' .$_REQUEST['user'] . '</b>. ';}

echo('This text comes from a php file');

?>