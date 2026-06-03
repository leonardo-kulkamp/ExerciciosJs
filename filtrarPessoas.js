const pessoas = require('./listaPessoas');

function filtrarMaioresDeIdade(lista) {
    const maiores = lista.filter(pessoa => pessoa.idade >= 18);
    
    console.log(maiores);
}

filtrarMaioresDeIdade(pessoas);