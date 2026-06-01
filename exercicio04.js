let convidados = ["Ana", "Carlos", "Beatriz", "Daniel", "Emília"];

let nomeParaVerificar = "Carlos"; 

if (convidados.includes(nomeParaVerificar)) {
    console.log("Pode entrar, você é convidado VIP!");
} else {
    console.log("Desculpe, seu nome não está na lista.");
}
