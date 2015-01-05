<?php 


$response['test'] = $_POST['text'];

header('Content-Type: application/json');
echo json_encode($response);

exit;