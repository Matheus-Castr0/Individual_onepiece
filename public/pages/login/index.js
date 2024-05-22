function logar() {
    var email = ipt_email.value
    var senha = ipt_senha.value

    fetch('http://localhost:3333/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha,
        })
    }).then((res) => {

        if(res.ok) {

            res.json().then(json => {
                sessionStorage.NOME_USUARIO = json.nome
                sessionStorage.PERSONAGEM = json.personagem
                sessionStorage.EP_ATUAL = json.epAtual
            })

            window.open('/pages/dashboard/index.html', '_self')

        }
        
    })
}