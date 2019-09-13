function requestStatus(andar, nsala ) {
        let sala = document.querySelector(`img#${nsala}`)
        url = `https://raw.githubusercontent.com/jadson179/Enigma/develop/painel-salas/clientes/imperatriz/andar${andar}/sala${nsala}/logo.png`
        sala.src = url;
    }   

