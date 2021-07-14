const bookstore = require('./database')
//console.log(bookstore)

// pegar um input do user 

const readUser = require('readline-sync')

const entradaInicial = readUser.question(" Deseja iniciar sua busca? S/N : ")

// Se for sim, mostrar as categorias disponiveis e perguntar qual a categoria escolhida

// Se for nao, mostrar todos os livros em ordem crescente pela quantidade de paginas de

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponíveis : ")
    console.log("Algoritmos", "/Development", "/Programacao", "/Developer", "/Data analysis", "Data", "/Data Engineering")

    const entradaCategory = readUser.question("Escolha a Categoria: ")

    const retorno = bookstore.filter(bookstore => bookstore.category === entradaCategory)

    console.table(retorno)
}else{
    const orderBooks = bookstore.sort((a,b) => a.pages -b.pages)
    console.log('Essas são todas os Titulos disponíveis :')
    console.table(orderBooks)
    
}