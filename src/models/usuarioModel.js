var database = require("../database/config")

function autenticar(email, senha) {

    var instrucaoSql = `
        SELECT idUsuario, nome, epAtual, fkPersonagem FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, epAtual, epsDia, iconeUsuario) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, epAtual, qtdEpsDia, fkPersonagem) VALUES ('${nome}', '${email}', '${senha}', ${epAtual}, ${epsDia}, ${iconeUsuario});
    `;
    return database.executar(instrucaoSql);

}

module.exports = {
    autenticar,
    cadastrar
};