<?php

$mysql_hostname = "mysql12.000webhost.com";
$mysql_username = "a3404225_hm";
$mysql_password = "holidayme1";
$mysql_database = "a3404225_php";


$db = mysql_connect ($mysql_hostname, $mysql_username, $mysql_password);

mysql_select_db($mysql_database, $db) or die ("couldn't find db");
?>