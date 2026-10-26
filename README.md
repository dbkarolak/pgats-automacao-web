# AutomationExercise - Automação Web

Projeto de automação de testes end to end desenvolvido com **Cypress** para a aplicação [Automation Exercise](https://automationexercise.com/).

O projeto implementa os casos de teste solicitados no trabalho de conclusão, utilizando modularização, reutilização de código, geração de relatórios e execução automatizada através do GitHub Actions.

## Tecnologias utilizadas

- Node.js 22
- JavaScript
- Cypress 13
- Cypress Mochawesome Reporter
- Git
- GitHub Actions

## Casos de teste implementados

| Caso | Cenário |
| --- | --- |
| 1 | Register User |
| 2 | Login User with correct email and password |
| 3 | Login User with incorrect email and password |
| 4 | Logout User |
| 5 | Register User with existing email |
| 8 | Verify All Products and product detail page |
| 9 | Search Product |
| 10 | Verify Subscription in home page |
| 15 | Place Order: Register before Checkout |
| 16 | Place Order: Login before Checkout |

A suíte possui **10 testes automatizados distribuídos em 5 specs**.

## Estrutura do projeto

```text
cypress/
├── e2e/
│   └── specs/
│       ├── authentication.cy.js
│       ├── checkout.cy.js
│       ├── products.cy.js
│       ├── registration.cy.js
│       └── subscription.cy.js
│
├── support/
│   ├── data/
│   │   ├── payment.data.js
│   │   └── user.data.js
│   │
│   ├── helpers/
│   │   ├── authentication.helper.js
│   │   └── registration.helper.js
│   │
│   └── modules/
│       ├── checkout/
│       ├── login/
│       ├── products/
│       ├── registration/
│       └── subscription/
│
└── legado/
```

Os testes são separados por domínio funcional, enquanto elementos, ações e asserções ficam organizados nos módulos correspondentes.

## Instalação

Pré-requisitos:

- Node.js 22
- npm

Instale as dependências:

```bash
npm install
```

## Executando os testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar toda a suíte em modo headless:

```bash
npx cypress run
```

Resultado esperado:

```text
5 specs
10 tests
10 passing
0 failing
```

## Relatórios

O projeto utiliza **Cypress Mochawesome Reporter** para geração de relatórios HTML.

Após executar:

```bash
npx cypress run
```

o relatório é gerado em:

```text
cypress/reports/
```

O relatório apresenta os specs executados, resultado dos testes e duração de cada cenário.

## GitHub Actions

O workflow está localizado em:

```text
.github/workflows/cypress.yml
```

Os testes são executados automaticamente em:

- push para `developer`;
- push para `production`;
- Pull Requests destinados à `production`.

O job obrigatório da pipeline é:

```text
Cypress E2E
```

O relatório HTML também é armazenado como artifact da execução no GitHub Actions.

## Fluxo de branches e merge

O projeto utiliza duas branches principais:

- `developer` - desenvolvimento e novas alterações;
- `production` - versão estável.

O fluxo é:

```text
developer
    ↓
Pull Request
    ↓
Cypress E2E
    ↓
production
```

A branch `production` possui um Ruleset com:

- Pull Request obrigatório;
- `Cypress E2E` como status check obrigatório;
- bloqueio de force push;
- bloqueio de exclusão da branch.

O repositório também possui **auto-merge** habilitado.

Assim, em um Pull Request de:

```text
developer → production
```

o merge somente é realizado quando o workflow **Cypress E2E** termina com sucesso.

```text
Cypress falhou
→ merge bloqueado

Cypress passou
→ auto-merge para production
```

Após o merge, a pipeline é executada novamente na branch `production`.

## Aplicação testada

Automation Exercise:

```text
https://automationexercise.com
```