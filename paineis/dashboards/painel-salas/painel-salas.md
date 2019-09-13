# PAINEL DE SALAS | GRAFANA

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Painel de Salas</title>
    <script src="request.js"></script>
    <style>
        table {
            background-color: #fff;
            width: 100%;
            
        }
        img {
            width: 95%; 
            margin-left: 5px;
            max-width: 200px;
            height: 60px;
        }
        p {
            width: 70%; 
            min-width: 50px; 
            margin: auto;
            background-color: rgba(0,0,0, 0.3); 
            color: #fff; border-radius: 5em; 
            text-align: center;
        }
        th {
          color: #fff;
          background-color: #000;
          text-align: center;
        }
        td {
          border: 1px solid #000;
        }
</style>
</head>
<body >
<table>
    <tr>
        <th> 1º Andar </th>
        <th> 2º Andar </th>
        <th> 3º Andar </th>
        <th> 4º Andar </th>
        <th> 5º Andar </th>
        <th> 6º Andar </th>
        <th> 7º Andar </th>
        <th> 8º Andar </th>
        <th> 9º Andar </th>
        <th> 10º Andar </th>
        <th> 11º Andar </th>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="101"><p> Sala 101</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="201"><p> Sala 201</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="301"><p> Sala 301</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="401"><p> Sala 401</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="501"><p> Sala 501</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="601"><p> Sala 601</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="701"><p> Sala 701</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="801"><p> Sala 801</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="901"><p> Sala 901</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1001"><p> Sala 1001</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1101"><p> Sala 1101</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="102"><p> Sala 102</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="202"><p> Sala 202</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="302"><p> Sala 302</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="402"><p> Sala 402</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="502"><p> Sala 502</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="602"><p> Sala 602</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="702"><p> Sala 702</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="802"><p> Sala 802</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="902"><p> Sala 902</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1002"><p> Sala 1002</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1102"><p> Sala 1102</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="103"><p> Sala 103</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="203"><p> Sala 203</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="303"><p> Sala 303</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="403"><p> Sala 403</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="503"><p> Sala 503</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="603"><p> Sala 603</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="703"><p> Sala 703</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="803"><p> Sala 803</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="903"><p> Sala 903</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1003"><p> Sala 1003</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1103"><p> Sala 1103</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="104"><p> Sala 104</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="204"><p> Sala 204</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="304"><p> Sala 304</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="404"><p> Sala 404</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="504"><p> Sala 504</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="604"><p> Sala 604</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="704"><p> Sala 704</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="804"><p> Sala 804</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="904"><p> Sala 904</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1004"><p> Sala 1004</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1104"><p> Sala 1104</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="105"><p> Sala 105</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="205"><p> Sala 205</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="305"><p> Sala 305</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="405"><p> Sala 405</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="505"><p> Sala 505</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="605"><p> Sala 605</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="705"><p> Sala 705</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="805"><p> Sala 805</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="905"><p> Sala 905</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1005"><p> Sala 1005</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png" id="1105"><p> Sala 1105</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="106"><p> Sala 106</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="206"><p> Sala 206</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="306"><p> Sala 306</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="406"><p> Sala 406</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="506"><p> Sala 506</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="606"><p> Sala 606</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="706"><p> Sala 706</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="806"><p> Sala 806</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="906"><p> Sala 906</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="1006"><p> Sala 1006</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"id="1106"><p> Sala 1106</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 107</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 207</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 307</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 407</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 507</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 607</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 707</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 807</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 907</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1007</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1107</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 108</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 208</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 308</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 408</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 508</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 608</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 708</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 808</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 908</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1008</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1108</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 109</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 209</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 309</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 409</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 509</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 609</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 709</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 809</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 909</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1009</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1109</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 110</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 210</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 310</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 410</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 510</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 610</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 710</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 810</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 910</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1010</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1110</p></td>
    </tr>
    <tr>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 111</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 211</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 311</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 411</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 511</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 611</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 711</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 811</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 911</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1011</p></td>
        <td><img  src="https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar1/sala101/logo.png"><p> Sala 1111</p></td>
    </tr>
</table>
</body>
</html>
```


## Requisítos 

- [Plugin Zabbix](https://grafana.com/grafana/plugins/alexanderzobnin-zabbix-app)