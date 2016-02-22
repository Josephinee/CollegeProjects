<!DOCTYPE html>
<html>
	<head>
		<title>Holiday Me</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/style.css" />
                <link rel="stylesheet" href="js/jquery.js" />
 		
<?php
include('dbconnection.php');

$FirstName = @$_POST['fname'];
$SecondName = @$_POST['lname'];
$UserName = @$_POST['username'];
$Password = @$_POST['password'];
$Re_Password = @$POST['re_password'];
$Email = @$_POST ['email'];
$Re_Email= @$_POST['re_email'];
$Submit = @$_POST ['submit'];



if($Submit)
{
		if($FirstName==true){
		
			if($SecondName==true){
			
				if($UserName==true){
				
					if($Email==true){
					
						if($Email==$Re_Email){
						
							if($Password==true){

				
							 
								
									if(strlen($Password)<20){
                                                                       
						
									$insert= mysql_query("INSERT INTO users (FirstName, SecondName, UserName, Email, Password) VALUES ('$_POST[fname]', '$SecondName', '$UserName', '$Email', '$Password')");
                                                                        header("location:index.html");
									

						 
						 
									}
									else
									echo "Your password must be between 5 and 20 characters";
									
								  
							}
							else
							echo "Your password is not valid";
						
						}
						else
						echo "Emails do not match";
					
					}
					else
					echo "Your email is not valid";
					
					
				}
				else
				echo "Your username is not valid";
		
				
			}
			else
			echo "Please input your second name.";
			
			
		}
		else
		echo "Please input your first name.";
}		
		
	

?>
	</head>
<body>
	<div class="navbar-static-top navbar-inverse" id="home">
		<div class="container">
			<div class="navbar-brand">
				<?php 
session_start();
if($_SESSION['logged'] == true){ 
    echo    $_SESSION["username"] ;
    echo '   <a href="../index.php"><span> Logout</span></a></li>';
}
else {
    echo '<a href="Form.php"><span>Login/Register</span></a></li>';
}
?>
			</div>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
				Menu
			</button>
			<div class="collapse navbar-collapse navHeaderCollapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="index.html">Home</a></li>
					<li><a href="Quiz.html">Quiz</a></li>
					<li><a href="Locations.html">Locations</a></li>
					<li><a href="Form.php">Registration</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="jumbotron">
		<div class="container">
			<h1>Registration</h1>
			<p>Feel free to register!</p>
		</div>
	</div>
<div class="container padding" id="contact">
		<form role="form" form name="register" form action="Login.html" method="post">
			<div class="form-group">
				<label for="name">First Name:</label>
				<input type="text" class="form-control" id="fname" name="fname" placeholder="First Name"/>
			</div>
			<div class="form-group">
				<label for="name">Second Name:</label>
				<input type="text" class="form-control" id="lname" name="lname" placeholder="Second Name"/>
			
			</div>
			<div class="form-group">
				<label for="message">Username:</label>
				<input class="form-control" name="username" id="username"></input>
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" class="form-control" name="email" id="email" placeholder="example@gmail.com"></input>
			</div>
			<div class="form-group">
				<label for="message">Confirm Email:</label>
				<input type="email"  class="form-control" name="re_email" id="re_email"></input>
			</div>
			<div class="form-group">
				<label for="password">Password: </label> <span id="passstrength"></span>
				<input class="form-control" name="password" type="password" id="password"></input>
                                
                               

			</div>
			<div class="form-group">
				<label for="password">Confirm Password:</label>
				<input class="form-control" name="re_password" type="password" id="re_password"></input>
			</div>
			<div class="form-group">
				<input type="checkbox" /> Send me promotional content
			</div>
			<input class="submit-button" type="submit" value="Register" name="submit" />
		</form>
	</div>
	
	<div class="alt2">
		<div class="container">
			<footer>
				&copy; Holiday Me <br />
				<a href="#home">Back to top</a>
			</footer>
		</div>
	</div>
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script>
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	</script>
	</body>
</html>		