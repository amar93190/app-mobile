<?php
$db = new mysqli("bdd", "root", "", "demo");
$db->query("INSERT INTO compteur (valeur) VALUES (1)");
$res = $db->query("SELECT COUNT(*) as total FROM compteur");
$data = $res->fetch_assoc();
echo "Incrémentation OK<br>Nombre total : " . $data['total'];
$db->close();
?>

