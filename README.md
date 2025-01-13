# 🛒 Desafio Auvo - Automação de Testes com Cypress

Este projeto é uma prova de conceito (POC) de automação de testes web para validar fluxos de cadastro e pesquisa de produtos no site de e-commerce fictício [Sauce Demo](https://www.saucedemo.com/).

---

## 📝 Sobre o Projeto

Esta POC tem como objetivo demonstrar a capacidade de automação de testes utilizando **Cypress**, validando fluxos críticos do sistema, como:

1. **Login**: Autenticação na aplicação com credenciais padrão.
2. **Navegação e Pesquisa**: Explorar a seção de produtos e realizar buscas.
3. **Validação de Produto**: Selecionar um produto e verificar seu título, preço e descrição.
4. **Carrinho e Checkout**: Adicionar produtos ao carrinho, acessar o checkout e concluir o pedido.

## 🛠️ Requisitos do Teste

Os testes foram desenvolvidos seguindo os seguintes requisitos:

1. **Ferramenta**: Automação utilizando **Cypress**.
2. **Linguagem**: Código escrito em **JavaScript**.
3. **Arquitetura**: Implementação baseada no **Page Object Model (POM)**.
4. **Documentação**: Instruções claras para configuração e execução.


## 📂 Arquitetura do Projeto

O projeto segue a arquitetura **Page Object Model (POM)**, separando as responsabilidades em diferentes arquivos:

- **Pages**: Contém classes que representam as páginas do site.
- **Tests**: Contém os testes que utilizam as classes das páginas.
- **Fixtures**: Armazena dados utilizados nos testes (e.g., credenciais, informações de produtos).

## ⚙️ Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/PSS1914/saucedemo_cypress


2. **Instale as dependências**

Certifique-se de que o Node.js esteja instalado em sua máquina. Caso não tenha o Node.js instalado, você pode baixar e instalar a partir do site oficial do Node.js.

Verifique se o Node.js está instalado corretamente executando o comando:
node -v

3. **Instale o Cypress**
Para instalar o Cypress como dependência de desenvolvimento, execute o seguinte comando no diretório do projeto:
npm install cypress --save-dev

4. **Rode os testes**

 ```bash
   npx cypress run                                   (for headless mode)
---
   npx open cypress                                  (open cypress UI and run specs in browser)
----