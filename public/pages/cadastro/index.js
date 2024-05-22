function validar() {
    var nome = ipt_nome.value;
    var email = ipt_email.value
    
    var senha = ipt_senha.value
    var senhaConfirmar = ipt_confirmarSenha.value
    
    var epAtual = ipt_epAtual.value
    var epsDia = ipt_epsDia.value

    var usuario_icone = select_char.value

    var valido = 0

    if(nome.length <= 2) {
        erro_nome.style.color = '#FF0000'
    } else {
        erro_nome.style.color = '#FFFFFF'
        valido++
    }

    if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        erro_email.style.color = '#FF0000'
    } else {
        erro_email.style.color = '#FFFFFF'
        valido++
    }

    if(senha.length < 8 || senha.length > 12) {
        erro_senha.style.color = '#FF0000'
    } else {
        erro_senha.style.color = '#FFFFFF'
        valido++
    }

    if(senha != senhaConfirmar) {
        erro_confirmarSenha.style.color = '#FF0000'
    } else {
        erro_confirmarSenha.style.color = '#FFFFFF'
        valido++
    }

    if(epAtual < 1 || epAtual > 1105) {
        erro_epAtual.style.color = '#FF0000'
    } else {
        erro_epAtual.style.color = '#FFFFFF'
        valido++
    }

    if(epsDia < 1 || epsDia > 12) {
        erro_epsDia.style.color = '#FF0000'
    } else {
        erro_epsDia.style.color = '#FFFFFF'
        valido++
    }

    if(usuario_icone == 'blank') {
        erro_select.style.color = '#FF0000'
    } else {
        erro_select.style.color = '#FFFFFF'
        valido++
    }

    if(valido == 7) {
        cadastrar(nome,email,senha,epAtual,epsDia,usuario_icone)
    }
}

function cadastrar(nome, email, senha, epAtual, epsDia, iconeUsuario) {
    fetch('http://localhost:3333/usuarios/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            epAtualServer: epAtual,
            epsDiaServer: epsDia,
            iconeUsuarioServer: iconeUsuario
        })
    }).then(res => {
        
        if(res.ok){
            window.open('/pages/login/index.html', '_self')
        } else {
            res.json().then(response => alert(response))
        }

    })

}

function mudarPoster() {
    var usuario_icone = select_char.value
    poster.src = `../../assets/images/cartazes/Wanted${usuario_icone}.jpg`
}