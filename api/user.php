<?php
include 'src/services/trenService.php';
include 'src/auth.php';
include 'src/response.php';

$auth = new Authentication();
$auth->verify();
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        $user = json_decode(file_get_contents('php://input'), true);
        $token = $auth->signIn($user);
        $response = array(
            'result' => 'ok',
            'token' => $token
        );
        Response::result(201, $response);
}
?>