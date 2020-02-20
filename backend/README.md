<div align="center">

[![Senior](./frontend/src/assets/logoSeniorGreen.svg)](https://www.senior.com.br/)

# **Hotel Senior**
</div>

🏨 **API RESTful para Aplicação de Controle de Hóspedes em hotel.**

### 🚀 Desenvolvida usando [Node.JS](https://nodejs.org/en/)

# 🔐 **Desafio:**
Desenvolver uma aplicação Backend que possibilite realizar o cadastro de hóspedes e o check-in.

## 👓 **Requisitos funcionais:**

[x]	Um CRUDL para o cadastro de hóspedes;

[x]	No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;

[x]	Consultar hóspedes que já realizaram o check in e não estão mais no hotel;

[x]	Consultar hóspedes que ainda estão no hotel;

[x]	As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel;


### 📏 **Regras de negócio:**
- Uma diária no hotel de segunda à sexta custa R$120,00;
-	Uma diária no hotel em finais de semana custa R$150,00;
-	Caso a pessoa precise de uma vaga na garagem do hotel há um acréscimo diário, sendo R$15,00 de segunda à sexta e R$20,00 nos finais de semana;
-	Caso o horário da saída seja após às 16:30h deve ser cobrada uma diária extra;

**Conforme acordado com o Rafael Liberato:**
- > Se o hóspede entrar em uma sexta-feira e sair em um sábado, será cobrada apenas uma diária (no valor da diária de sábado = R$ 150,00);

- > Se o hóspede entrar e sair no mesmo dia, será cobrada uma diária inteira;

# 🔨 Instalação

1. O primeiro passo é clonar o repositório. As instruções estão [aqui](../README.md#-Instalação);

   ```bash
   $ git clone https://github.com/froiskallico/hotelSenior.git
   ```
2. Vá para o diretório da API:
   ```bash
   $ cd .../hotelSenior/backend
   ```
3. Use o [Yarn](https://yarnpkg.com/) para instalar as dependências:
   ```bash
   $ yarn
   ```
4. Execute o seguinte comando no terminal para iniciar o servidor.
   ```bash
   $ yarn start #Esse comando irá executar o servidor para produção.
   ```
   *ou se você preferir, pode executar o servidor usando o [Nodemon](https://nodemon.io/) durante o desenvolvimento. Dessa forma, não é necessário parar e executar o servidor a cada alteração de arquivos.*
   ```bash
   $ yarn dev #Esse comando irá executar o servidor em modo de produção.
   ```



    **Por padrão, o mesmo irá rodar na porta `3333` mas você pode alterar no arquivo `.env`, no campo SERVER_PORT.**

# 🗺 Rotas

Por padrão a API está escrita no idioma Inglês mas devido aos Exemplos JSON enviados pela Senior estarem em Português, os nomes dos campos dos objetos estão em português.

## 👥 Guests (Hóspedes )
Os hóspedes podem ser acessados pela rota `/guests`. Abaixo o *Schema* para um hóspede:

### **GuestSchema:**

```JSON
{
  "nome": { "type": "String", "required": true },
  "documento": { "type": "String", "required": true },
  "telefone": { "type": "String", "required": true },
  "valorTotal": { "type": "Number", "default": 0 }, // Armazena o valor total de todos os Check-ins fechados;
  "valorUltimaConta": { "type": "Number", "default": 0 } //Armazena o valor total do último Check-in fechado;
}
  ```

## Cadastrar um usuário
```HTTP
 POST /guests
 ```

Para cadastrar um usuário, basta enviar uma requisição para a rota acima enviando no `body` um `JSON` conforme o exemplo abaixo:

```JSON
body: {
  "nome": "Fulano de tal",
  "documento": "123456789",
  "telefone": "51 9999 99999"
}
```
## Ler um usuário
```HTTP
 GET /guests/:_id
```

Para ler um usuário, basta enviar uma requisição para a rota acima enviando o `_id` diretamente na rota, conforme exemplo abaixo:

```HTTP
GET /guests/5e4d4209333e8b457c8f2b93
```
Retorna:
```JSON
{
  "valorTotal": 0,
  "valorUltimaConta": 0,
  "_id": "5e4d4209333e8b457c8f2b93",
  "nome": "Fulano de tal",
  "documento": "123456789",
  "telefone": "51 9999 99999",
  "__v": 0
}
```
## Listar Usuários
```HTTP
 GET /guests
 ```

Para filtrar os usuários, enviar no `query` da requisição um ou mais objetos abaixo:

```JSON
query: {
{ "nome": "<Nome do Usuário>" }
}
```



## Atualizar Usuário
```HTTP
 PUT /guests/:_id
 ```

## Deletar Usuário
```HTTP
 DELETE /guests/:_id
 ```

