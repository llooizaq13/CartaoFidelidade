
const cadastros = JSON.parse(localStorage.getItem("cadastros")) ||
    [
        {

        },
    ]

const armazenar = () => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros))
}

function Cadastro() {
    const nome = document.getElementById("cadastroNome").value
    const email = document.getElementById("cadastroEmail").value 
    const senha = document.getElementById("cadastroSenha").value

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!")
        return;
    }


    const existe = cadastros.some(cadastro => cadastro.email === email)
    if (existe) {
        alert("Este e-mail já está cadastrado!")
        return;
    }

    cadastros.push({ nome, email, senha })

    armazenar()

    alert("Cadastro realizado com sucesso!")
}

function Login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("senha").value

    const cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || []

    const verificar = cadastrosSalvos.find(
        cadastro => cadastro.email === email && cadastro.senha === password
    )

    if (verificar) {
        //alert(`Login bem sucedido! bem vindo ${verificar.nome}`)
        event.preventDefault();
        local = window.document.location.href = "/pages/wait.html"
        console.log(local)
    } else if (email === "" || password === ""){
        alert("Preencha todos os campos por favor")
    }
    else {
        alert("Email ou senha incorreto")
    }
}