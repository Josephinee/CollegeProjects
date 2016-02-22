<?php
session_start();
$host="mysql12.000webhost.com"; // Host name 
$username="a3404225_hm"; // Mysql username 
$password="holidayme1"; // Mysql password 
$db_name="a3404225_php"; // Database name 
$tbl_name="users"; // Table name 



// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");


// username and password sent from form 
$username=$_POST['username']; 
$password=$_POST['password']; 

// To protect MySQL injection (more detail about MySQL injection)
$username = stripslashes($username);
$password = stripslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);
$sql="SELECT * FROM $tbl_name WHERE username='$username' and password='$password'";

$result=mysql_query($sql);


$count=mysql_num_rows($result);


if($count==1){

$_SESSION["username"] = $username;
$_SESSION["logged"] = true;
session_register("username");
session_register("password"); 
header("location:index.html");
}
else {
header("location:Form.php");
}
?>