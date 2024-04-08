<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type'); 

include_once 'url.php';
include_once 'database.php';

$parts = explode('/', $_SERVER['REQUEST_URI']);
$parts = removeAPI("API", removeAPI("api", $parts));

$data = json_decode(file_get_contents('php://input'));

$handler = new database();
echo json_encode($handler->readDatabase($parts[1], $data));
?>