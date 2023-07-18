<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MaisLab</title>
    <link rel="icon" href="<?php echo DIRPAGE . "lib/img/favicon.png" ?>" type="image/icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo DIRPAGE . 'lib/css/style.css'; ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,700&family=Comfortaa:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
</head>

<body>
<div id="fb-root"></div>

<!--=========Teste de Feed Facebook======-->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v17.0" nonce="dmoH1V34"></script>
<!--==================================== -->
<div class="contato">
    <a href="#" class="text-decoration-none">
        <span class="pulse btn rounded-pill">
            <i class="bi bi-whatsapp"></i>
            Contato
        </span>
    </a>
</div>
<nav id="containerFirstChild" class="boxshadow navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">
            <img src="<?php echo DIRPAGE . 'lib/img/Logo.png'; ?>" alt="Logo MaisLab" width="120" height="auto">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="nav justify-content-center">
                <div class="center">
                    <li class="nav-item">
                        <a class="nav-link" href="quemsomos.php">
                            <span>QUEM SOMOS</span>
                        </a>
                    </li>
                    <div class="bar"></div>
                
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span>RESULTADO DE EXAMES</span>
                    </a>
                </li>
                <div class="bar"></div>
                <li class="nav-item">
                    <a class="nav-link" href="servicos.php">
                        <span>SERVIÇOS</span>
                    </a>
                </li>
                <div class="bar"></div>
                <li class="nav-item">
                    <a class="nav-link" href="fac.php">
                        <span>FAC</span>
                    </a>
                </li>
                </div>
            </ul>
        </div> 
    </div>
</nav>