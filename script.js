document.getElementById("buscar").addEventListener("click", buscarCep);

async function buscarCep(){

    let cep = document.getElementById("cep").value

    try{

        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        let dados = await resposta.json()

        if(dados.erro){

            limparCampos()
            document.getElementById("mensagem").innerText = "CEP não encontrado"

            return
        }

        document.getElementById("rua").innerText = dados.logradouro
        document.getElementById("bairro").innerText = dados.bairro
        document.getElementById("cidade").innerText = dados.localidade
        document.getElementById("estado").innerText = dados.uf

        document.getElementById("mensagem").innerText = ""

    }catch(erro){

        limparCampos()
        document.getElementById("mensagem").innerText = "Erro ao buscar CEP"

    }

}

function limparCampos(){

    document.getElementById("rua").innerText = ""
    document.getElementById("bairro").innerText = ""
    document.getElementById("cidade").innerText = ""
    document.getElementById("estado").innerText = ""

}
