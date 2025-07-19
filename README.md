# Frontend - Gerador de Currículos

Esta é a interface do usuário (Frontend) para o projeto **Gerador de Currículos**. Construída com React e Vite, esta aplicação permite que os usuários preencham um formulário intuitivo e completo, visualizem as alterações em tempo real e, ao final, façam o download do currículo em PDF gerado pelo backend.

## Principais Funcionalidades

-   **Formulário Completo:** Seções para informações pessoais, resumo, experiência, educação e habilidades.
-   **Edição Completa:** Adicione, edite e exclua itens de experiência e educação.
-   **Pré-visualização ao Vivo:** Veja como seu currículo ficará enquanto você digita.
-   **Múltiplos Layouts:** Escolha entre os temas "Moderno", "Clássico" e "Minimalista".
-   **Customização de Cores:** Selecione uma cor primária para o seu currículo.
-   **Tema Claro e Escuro (Dark/Light Mode):** Interface adaptada para a preferência do usuário.
-   **Persistência de Dados:** O formulário é salvo automaticamente no navegador para evitar perda de dados.
-   **Design Responsivo:** A aplicação se adapta a ecrãs de telemóveis e tablets.
-   **Validação de Formulário:** Feedback em tempo real para campos obrigatórios ou inválidos.

## Tecnologias Utilizadas

-   **React**: Biblioteca para a construção da interface.
-   **Vite**: Ferramenta de build e servidor de desenvolvimento rápido.
-   **React Context API**: Para gerenciamento de estado global.
-   **Axios**: Cliente HTTP para fazer as chamadas para o backend.
-   **Vitest & React Testing Library**: Para a execução de testes automatizados de componentes.

## Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [NPM](https://www.npmjs.com/) (geralmente vem com o Node.js)

## Instalação e Configuração

1.  Navegue até a pasta do frontend:
    ```bash
    cd frontend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Como Executar

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou em outra porta, se esta estiver em uso).

**Importante:** Para a funcionalidade de gerar PDF funcionar, o [servidor do backend](#) também precisa estar em execução.

## Como Rodar os Testes

Para executar os testes automatizados dos componentes, rode o seguinte comando:

```bash
npm test
```