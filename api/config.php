<?php
//header("Access-Control-Allow-Origin:*");
//header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE,OPTIONS");
//header("Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept,application/json "); 
 
//connexion a la base de données mysql

 $db_username = 'id19066703_pfe';
 $db_password = 'fFrP955!N3?G';
 $db_name = 'id19066703_pfe_users';
 $db_host = 'localhost';				
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

 
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>
