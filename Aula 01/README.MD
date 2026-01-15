primeiros passos da aula 01.

configurações basicas :
1 - criar uma pasta que vai guardar os arquivos do projeto ( aula 01)
2 - abrir pasta no terminal do vscode
3 - rodar os seguintes scripts/comandos node
 - npm init (inicializa um projeto node em branco) - 
    - podemos adicionar a flag "-y" para aceita todas as sugestões
       - rodar o comando "npm init -y"
4 - instalar os pacotes do projeto (express)
 "npm install express"
5 - editar o arquivo package.json
 - troca da requisição da chave main, de index.js para app.js(arquivo principal no caso, não necessariamente app mas foi o caso abordado)
 - na chave "type" setar o valor module, em caso da ausencia da chave, sera prdeciso a criação da mesma antes de setar tal valor de maneira logica
6 - criar o arquivo principal na raiz do projeto ( no caso app.js, podendo claramente alterar não tendo real relevancia seu nome por tanto que seja levado a interação de seu nome pratico em todas as aplicações)
7 - editar o arquivo app com os codigos basicos do servidor express
8 - subir a aplicação executar o comado no terminal 
  - "npm start"
9 - criar o codigo e ser feliz 