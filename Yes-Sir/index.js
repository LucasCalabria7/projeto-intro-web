//Yes, sir! Shoe store.

// ITEM: TÊNIS||SNEAKERS.

let tenis1 = {
    nome: "Air force 1",                //Adicionando Objetos
    cor : "Branco",
    marca: "Nike",
    tamanho: [38, 39, 40, 41, 42, 43, 44],
    temEstoque: true,
    preco: 1000,
    html: document.getElementById("airforce")
};

let tenis2 = {
    nome : "Air Jordan 1 Chicago",   
    cor : ["Branco", "Vermelho", "Preto"],    
    marca : "Nike",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 2000,
    html: document.getElementById("jordan1")
};

let tenis3 = {
    nome: "Dunk Low Retro",   
    cor: ["Branco", "Preto"],
    marca : "Nike",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 1200,
    html: document.getElementById("dunk")
};

let tenis4 = {
    nome: "Yeezy Boost 350",   
    cor: ["Branco"],
    marca : "Adidas",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 1500,
    html: document.getElementById("yeezy")
};

let meusObjetos = [];               //Adicionando objetos ao array verificando booleanos

if(tenis1.temEstoque){
    meusObjetos.push(tenis1)
} else{
    alert(`O produto ${tenis1.nome} está em falta no estoque!`)
};

if(tenis2.temEstoque){
    meusObjetos.push(tenis2)
} else{
    alert(`O produto ${tenis2.nome} está em falta no estoque!`)
};

if(tenis3.temEstoque){
    meusObjetos.push(tenis3)
} else{
    alert(`O produto ${tenis3.nome} está em falta no estoque!`)
};

if(tenis4.temEstoque){
    meusObjetos.push(tenis4)
} else{
    alert(`O produto ${tenis4.nome} está em falta no estoque!`)
};

function calcularMedia () {
    let numshoes = meusObjetos.length;
    let soma = 0;

    for(let elementos of meusObjetos) {
        soma += elementos.preco
    }
    return soma / numshoes
}
console.log("A média de preço entre os produtos é", calcularMedia());

function relatorioObjeto (arrayObjeto) {
    for(i in arrayObjeto) {
        console.log(`Produto ${Number(i)+1} :`, arrayObjeto[i]);
    }
}
console.log(`Você tem ${meusObjetos.length} produtos em estoque, segue o relatório dos mesmos:`)
relatorioObjeto(meusObjetos); //Atualizando Relatório dos produtos



function buscarItens (arrayObj, string) {
    let busca = document.getElementById("nome");
    string = busca.value

    let container = document.getElementById("middle-container");

    if(!string) {
        return alert("Faça uma busca valida")
    }

    for(objeto of arrayObj){
        if(objeto.nome === string){
            return container.innerHTML = objeto.html.innerHTML
        }
    }
    return alert(`Seu produto ${string} não foi encontrado!`)
} 
//Buscando itens através de função.