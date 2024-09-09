# Aplicação de Busca de Jogos Pokémon

## Descrição
Esta aplicação web simples permite que os usuários pesquisem por jogos da franquia Pokémon, exibindo informações como título, descrição, geração, console e ano de lançamento. A aplicação utiliza HTML, CSS e JavaScript para criar uma interface intuitiva e funcional.

## Tecnologias Utilizadas
* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da página, incluindo layout e design.
* **JavaScript:** Lógica da aplicação, como a função de pesquisa e a manipulação do DOM.
* **JSON:** Armazenamento dos dados dos jogos em um formato estruturado.

## Como Utilizar
1. **Clonar o repositório:**
   ```bash
   git clone https://seu-repositorio.git
   ```
2. **Abrir o arquivo index.html em um navegador:**
   Após clonar o repositório, abra o arquivo `index.html` em seu navegador de preferência.

## Estrutura dos Arquivos
* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML.
* **style.css:** Arquivo CSS responsável pelas estilizações da página.
* **app.js:** Arquivo JavaScript com a lógica da aplicação, incluindo a função de pesquisa.
* **dados.js:** Arquivo JSON contendo os dados dos jogos.

## Funcionamento
* A aplicação carrega os dados dos jogos a partir do arquivo `dados.js`.
* Ao digitar um termo de busca e clicar no botão "Buscar", a função `pesquisar()` é acionada.
* A função `pesquisar()` filtra os dados dos jogos com base no termo de busca, considerando o título e a geração.
* Os resultados da pesquisa são exibidos na seção "resultados-pesquisa" da página.

## Função `pesquisar()`
```javascript
function pesquisar() {
  // ... código da função pesquisar() ...
}
```
A função `pesquisar()` é responsável por:
* Obter o valor do campo de busca.
* Filtrar os dados dos jogos com base no termo de busca.
* Construir o HTML para exibir os resultados.
* Atualizar a seção "resultados-pesquisa" com os resultados.

## Estrutura dos Dados (dados.js)
```javascript
let dados = [
  // ... seus dados JSON ...
];
```
Cada objeto dentro do array `dados` representa um jogo e possui as seguintes propriedades:
* `titulo`: Título do jogo.
* `descricao`: Descrição do jogo.
* `imagem`: URL da imagem do jogo.
* `geracao`: Geração do jogo.
* `console`: Console onde o jogo foi lançado.
* `lancamento`: Ano de lançamento do jogo.
* `link`: Link para mais informações sobre o jogo.

## Licença
Este projeto está licenciado sob a licença [Nome da Licença] - consulte o arquivo LICENSE para mais detalhes.

## Autores
* **Matheus:** Desenvolvedor principal
