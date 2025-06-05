const perguntas = [
    {
        pergunta: "Qual foi o estado brasileiro mais afetado por enchentes em 2022?",
        respostas: [
            "São Paulo",
            "Bahia",
            "Santa Catarina",
            "Pernambuco"
        ],
        correta: "Pernambuco",
        explicacao: "Pernambuco registrou a maior tragédia hídrica de sua história em 2022, com 133 mortes e mais de 30 mil desabrigados."
    },
    {
        pergunta: "Qual tecnologia é essencial para prever enchentes com antecedência?",
        respostas: [
            "Blockchain",
            "Sensores IoT + Inteligência Artificial",
            "Realidade Virtual",
            "GPS convencional"
        ],
        correta: "Sensores IoT + Inteligência Artificial",
        explicacao: "A combinação de sensores de monitoramento hidrológico com algoritmos de IA permite previsões com até 48h de antecedência."
    },
    {
        pergunta: "Quantos brasileiros foram afetados por enchentes entre 1991-2022?",
        respostas: [
            "30 milhões",
            "75 milhões",
            "110 milhões",
            "50 milhões"
        ],
        correta: "110 milhões",
        explicacao: "Dados do Cemaden mostram que 110 milhões de pessoas foram impactadas direta ou indiretamente por enchentes nesse período."
    },
    {
        pergunta: "Qual é o principal impacto econômico das enchentes urbanas?",
        respostas: [
            "Aumento do turismo",
            "Perda de infraestrutura (estradas, pontes, etc.)",
            "Valorização imobiliária",
            "Redução do PIB agrícola"
        ],
        correta: "Perda de infraestrutura (estradas, pontes, etc.)",
        explicacao: "Cada R$1 gasto em prevenção economiza R$5 em reconstrução de infraestrutura, segundo o Banco Mundial."
    },
    {
        pergunta: "Qual órgão emite alertas oficiais de enchentes no Brasil?",
        respostas: [
            "INMET",
            "Cemaden",
            "Embrapa",
            "ANP"
        ],
        correta: "Cemaden",
        explicacao: "O Centro Nacional de Monitoramento e Alertas de Desastres Naturais (Cemaden) é vinculado ao Ministério da Ciência e Tecnologia."
    },
    {
        pergunta: "O que significa 'assoreamento de rios'?",
        respostas: [
            "Contaminação por lixo",
            "Acúmulo de sedimentos no leito",
            "Vazamento de óleo",
            "Superfície congelada"
        ],
        correta: "Acúmulo de sedimentos no leito",
        explicacao: "O assoreamento reduz a capacidade de vazão dos rios, aumentando o risco de transbordamentos durante chuvas fortes."
    },
    {
        pergunta: "Qual medida ajuda a PREVENIR enchentes urbanas?",
        respostas: [
            "Construir em áreas de várzea",
            "Usar pavimento permeável",
            "Retificar cursos d'água",
            "Aterrar manguezais"
        ],
        correta: "Usar pavimento permeável",
        explicacao: "Pavimentos permeáveis permitem a infiltração da água no solo, reduzindo em até 40% o volume de escoamento superficial."
    },
    {
        pergunta: "Qual fenômeno climático intensifica enchentes no Nordeste?",
        respostas: [
            "El Niño",
            "ZCIT (Zona de Convergência Intertropical)",
            "Frentes frias",
            "Ciclones extratropicais"
        ],
        correta: "ZCIT (Zona de Convergência Intertropical)",
        explicacao: "A ZCIT concentra umidade do oceano Atlântico, causando chuvas intensas no Nordeste entre abril e julho."
    },
    {
        pergunta: "Qual cidade brasileira teve prejuízos de R$ 1 bi com enchentes em 2023?",
        respostas: [
            "São Sebastião (SP)",
            "Rio de Janeiro (RJ)",
            "Porto Alegre (RS)",
            "Recife (PE)"
        ],
        correta: "São Sebastião (SP)",
        explicacao: "O litoral norte de SP registrou chuvas de 600mm em 24h, destruindo estradas e deixando 64 mortos."
    },
    {
        pergunta: "Quantas horas de antecedência sistemas modernos podem prever enchentes?",
        respostas: [
            "6 horas",
            "12 horas",
            "24 horas",
            "48 horas"
        ],
        correta: "48 horas",
        explicacao: "Plataformas como a do Chuva Alerta usam IoT e IA para emitir alertas com até 48h de antecedência."
    }
]

let indicePerguntaAtual = 0
let pontuacao = 0
let slideAtual = 0

const pergunta = document.getElementById("pergunta")
const botoesResposta = document.querySelectorAll(".btn-resposta")
const botaoProximo = document.getElementById("btn-proximo")
const containerResultado = document.getElementById("resultado")
const elementoPontuacao = document.getElementById("pontuacao")
const explicacao = document.getElementById("explicacao")
const botaoRefazer = document.getElementById("btn-refazer")
const slides = document.querySelectorAll('.slide-img')
const menu = document.getElementById('menu')
const hamburguer = document.getElementById("hamburguer")
const menuItems = document.querySelectorAll(".menu-item")
const menuIcon = document.getElementById('menu-icon')
const btnMensagem = document.getElementById("btn-mensagem")
const erroMensagem = document.getElementById("mensagem-erro")
const form = document.getElementById("formulario")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputInteresse = document.getElementById("interesse")
const inputMensagem = document.getElementById("mensagem")

function iniciarQuiz() {
    indicePerguntaAtual = 0
    pontuacao = 0
    botaoProximo.style.display = "none"
    containerResultado.style.display = "none"
    explicacao.style.display = "none"
    botaoRefazer.style.display = "none"
    exibirPergunta()
}

function exibirPergunta() {
    resetarEstado()
    perguntaAtual = perguntas[indicePerguntaAtual]
    pergunta.innerText = perguntaAtual.pergunta

    botoesResposta.forEach((botao, index) => {
        botao.innerText = perguntaAtual.respostas[index];
        botao.addEventListener("click", selecionarResposta)
    })


}

function resetarEstado() {
    botaoProximo.style.display = "none"
    explicacao.style.display = "none"
    botoesResposta.forEach(botao => {
        botao.disabled = false
        botao.classList.remove("correto", "incorreto")
    })
}

function selecionarResposta(e) {
    const botaoSelecionado = e.target
    const respostaCorreta = botaoSelecionado.innerText === perguntas[indicePerguntaAtual].correta
    if (respostaCorreta) {
        botaoSelecionado.classList.add("correto")
        pontuacao++;
        console.log(pontuacao);

    } else {
        botaoSelecionado.classList.add("incorreto")
    }

    document.querySelectorAll(".btn-resposta").forEach(botao => {
        botao.disabled = true;
    })

    explicacao.innerText = perguntaAtual.explicacao
    console.log(perguntaAtual.explicacao);

    explicacao.style.display = "block"

    botaoProximo.style.display = "block"
}

function exibirResultado() {
    containerResultado.style.display = "block"
    elementoPontuacao.innerText = `${pontuacao} de ${perguntas.length}`
    botaoRefazer.style.display = "block"
}

botaoProximo.addEventListener("click", function () {
    indicePerguntaAtual++
    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta()
    } else {
        exibirResultado()
    }
})

botaoRefazer.addEventListener('click', function () {
    iniciarQuiz()
})

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active')
        if (i === index) slide.classList.add('active')
    })
}

function proximoSlide() {
    slideAtual = (slideAtual + 1) % slides.length
    mostrarSlide(slideAtual)
}

function abrirMenu() {
    console.log('click');
    const isOpen = menu.classList.toggle("showMenu")
    menuIcon.innerText = isOpen ? "✕" : "☰"

    console.log(menuIcon);
}

hamburguer.addEventListener('click', abrirMenu)

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", abrirMenu)
})

btnMensagem.addEventListener("click", function(event){
    event.preventDefault()

    const nome = inputNome.value.trim()
    const email = inputEmail.value.trim()
    const interesse = inputInteresse.value
    const mensagem = inputMensagem.value.trim()
    
    if(nome === "" || email === "" || interesse === "" || mensagem === ""){
        erroMensagem.textContent = "todos os campos devem ser preenchidos"
        erroMensagem.style.display = "block"
        return
    }else if(nome.length < 3 || nome.length > 50){
        erroMensagem.textContent = "nome deve ter entre 3 e 50 caracteres"
        erroMensagem.style.display = "block"
        return
    }else if(mensagem.length < 5 || mensagem.length > 500){
        erroMensagem.textContent = "mensagem deve ter entre 5 e 500 caracteres"
        erroMensagem.style.display = "block"
        return
    }else if(!validacaoEmail(email)){
        erroMensagem.textContent = "e-mail inválido"
        erroMensagem.style.display = "block"
        return
    }

    form.reset()
})

function validacaoEmail(email){
    const partes = email.split("@")
    if(partes.length === 2 &&
        partes[0].length > 0 &&
        partes[1].includes(".") &&
        partes[1].indexOf(".") > 0 &&
        partes[1].indexOf(".") < partes[1].length -1
    ){
        return true
    }else{
        return false
    }
}

setInterval(proximoSlide, 5000)

iniciarQuiz()

