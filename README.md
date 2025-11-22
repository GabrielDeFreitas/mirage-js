# Mirage

MirageJS é uma biblioteca que permite simular uma API diretamente no frontend, criando um ambiente de desenvolvimento totalmente independente do backend.

Com ele, vode pode:

- Simular rotas HTTP (GET, POST, PUT, DELETE…)
- Criar modelos, seeds e bancos de dados mockados
- Interceptar requisições feitas pelo frontend
- Testar fluxos completos sem depender de servidor
- Desenvolver mais rápido enquanto a API real não está pronta

Este projeto é o aplicativo Reminders utilizado no tutorial oficial do MirageJS.

- Documentação: [miragejs.com/docs/getting-started/introduction/](https://miragejs.com/docs/getting-started/introduction/)
- Link para o tutorial: [miragejs.com/tutorial](https://miragejs.com/tutorial)

# Pré-requisitos

Este projeto é antigo e utiliza:

- webpack 4
- react-scripts 3.4

Por isso, não é compatível com versões recentes do Node (18+ até 24).

# Instalação e Execução

Substitua `pnpm` pelo gerenciador de pacotes de sua preferência (`npm` ou `yarn`).

| Command        | Action                                                        |
| :------------- | :------------------------------------------------------------ |
| `pnpm install` | Instala todas as dependências do projeto.                     |
| `pnpm start`     | Inicia o servidor de desenvolvimento em `localhost:3000`    |
