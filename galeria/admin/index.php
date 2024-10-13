<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Gallery | Login</title>

		<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
		<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

		<!--<script src="../assets/js/form_login.js"></script>-->
		<style href="../assets/css/estilos.css"></style>

    <!-- Custom CSS -->
    <link href="../assets/bootstrap/css/thumbnail-gallery.css" rel="stylesheet">
		
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body style="width: 100vw;">

    <!-- Page Content -->
		<div class="container">
    	<div class="row">
			<div class="col-md-6">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="./index.php?page=login" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="./index.php?page=register" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<?php 
									//Alternativamente se debería navegar mediante JS
									$page = isset($_GET['page']) ? $_GET['page'] : 'login';
									switch($page){
										case 'login':
											include "includes/login.php";
											break;
										case 'register':
											include "includes/register.php";
											break;
										default:
											break;
									}							
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
   
        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p></p>
                </div>
            </div>
        </footer>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="../assets/bootstrap/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>