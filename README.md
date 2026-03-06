<!DOCTYPE html>
<html lang="pt-en">
<head>
<meta charset="UTF-8">
<title>Consulta CEP</title>
<script src="script.js" defer></script>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Consulta de CEP:</h1>

<p>Digite seu CEP: </p>
<input type="text" id="cep" placeholder="Apenas números">

<button type="button" id="buscar">Buscar</button>

<h3>Resultado:</h3>

<p><b>
    Rua:</b> <span id="rua"></span>      
     <br><br>
     <b>Bairro:</b> <span id="bairro"></span> 
     <br><br>         
     <b>Cidade: </b> <span id="cidade"></span>  
     <br><br>      
     <b>Estado: </b> <span id="estado"></span></p>

<p id="mensagem"></p>

</body>
</html>
