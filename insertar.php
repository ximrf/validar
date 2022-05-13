<? php

include 'conexion.php';

if(isset($_POST)) {
	$nombre = isset($_POST['nombre']);
		$apaterno = isset($_POST['apaterno']);
	$amaterno = isset($_POST['amaterno']);

	if (empty($nombre) || empty($amaterno) || empty($apaterno)) {
		echo 'Errror, inserte los datos correctamente';
	} else {
		$sql = "INSERT INTO registros (nombre, apaterno, amaterno) VALUES ('$nombre', '$apaterno', '$amaterno');";
		$result = pg_query($db, $sql);

		if($result){
			echo 'Guardado Correctamente'
		} else {
			echo 'Error al guardar el registro';
		}
	
	}
} else {
	echo 'Error';
}

?>
