# Teste Para o Buscapé


## O que é?
    Foi criado uma pequena tela de produtos, com a possibilidade de adiciona-los em um carrinho de compra
    e a remoção conforme necessário, e a exibição do preço de todos os itens do carrinho calculado.
    A exibição de todas as imagens dos produtos em uma galeria.

## O que foi usado
    Foi usado o ReactJS na versão 15, webpack e o Json-Server como API

## Como usar?
- É obrigatório

    ```bash
        É necessário ter o NodeJS instalado na maquina
    ```

- Instale as dependencias

    Execute o package.json que está dentro da pasta frontend

    ```bash
        $ npm install  
    ```
- Json-Server

    Instale o json-serve

    ```bash
        $ npm install -g json-server
    ```
    Execute o seguinte comando no terminal dentro da pasta backend

    ```bash
        $ json-server db.json --watch
    ```

    Em seguida execute o comando, na pasta frontend do projeto

    ```bash
        $ npm run dev
    ```

    Por fim abra o seu navegador e acesse a seguinte URL: 

    ```bash
        $ http://localhost:8080
    ```