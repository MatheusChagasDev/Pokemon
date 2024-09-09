function pesquisar() {
    let section = document.getElementById("games");
    let procurar = document.getElementById("procurar").value;
    if (!procurar) {
        section.innerHTML = '<p>Nada foi encontrado. Voce tem que digitar</p>';

        return;
    }

    procurar = procurar.toLowerCase();
    

let resultados =''
let titulo = '';
let geracao = '';

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    geracao = dado.geracao.toLowerCase();
    if (titulo.includes(procurar) || geracao.includes(procurar)) {
        resultados += `
        <div>   
             <article>
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                <img src="${dado.imagem}" class="item-resultado-img">
                <p>
                    Geração: ${dado.geracao}
                </p>
                <p>
                    Console: ${dado.console}
                </p>
                <p>
                    Lançamento: ${dado.lancamento}
                </p>
                <p>
                    ${dado.descricao}
                </p>
            </article>
        </div>
            `;
    }
  
}

if (!resultados) {
    resultados = '<p>Nada foi encontrado</p>';
}

section.innerHTML = resultados;

console.log(dados);

}

