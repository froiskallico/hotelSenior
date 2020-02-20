<div align="center">

[![Senior](../frontend/src/assets/logoSeniorGreen.svg)](https://www.senior.com.br/)

# **Hotel Senior**

</div>

🏨 **API RESTful para Aplicação de Controle de hóspedes em hotel.**

### 🚀 Desenvolvida usando [Node.JS](https://nodejs.org/en/)

# 🔐 **Desafio:**

Desenvolver uma aplicação Backend que possibilite realizar o cadastro de hóspedes e o check-in.

## 👓 **Requisitos funcionais:**

- [x] Um CRUDL para o cadastro de hóspedes;

- [x] No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;

- [x] Consultar hóspedes que já realizaram o check in e não estão mais no hotel;

- [x] Consultar hóspedes que ainda estão no hotel;

- [x] As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel;

### 📏 **Regras de negócio:**

- Uma diária no hotel de segunda à sexta custa R\$120,00;
- Uma diária no hotel em finais de semana custa R\$150,00;
- Caso a pessoa precise de uma vaga na garagem do hotel há um acréscimo diário, sendo R$15,00 de segunda à sexta e R$20,00 nos finais de semana;
- Caso o horário da saída seja após às 16:30h deve ser cobrada uma diária extra;

**Conforme acordado com o Rafael Liberato:**

- > Se o hóspede entrar em uma sexta-feira e sair em um sábado, será cobrada apenas uma diária (no valor da diária de sábado = R\$ 150,00);

- > Se o hóspede entrar e sair no mesmo dia, será cobrada uma diária inteira;

# 🔨 Instalação

1. O primeiro passo é clonar o repositório. As instruções estão [aqui](https://github.com/froiskallico/hotelSenior/blob/documentation/README.md#-instala%C3%A7%C3%A3o);

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
   _ou se você preferir, pode executar o servidor usando o [Nodemon](https://nodemon.io/) durante o desenvolvimento. Dessa forma, não é necessário parar e executar o servidor a cada alteração de arquivos._
   ```bash
   $ yarn dev #Esse comando irá executar o servidor em modo de desenvolvimento.
   ```


    **Por padrão, o mesmo irá rodar na porta `3333` mas você pode alterar no arquivo `.env`, no campo SERVER_PORT.**

# 🗺 Rotas

Por padrão a API está escrita no idioma Inglês mas devido aos Exemplos JSON enviados pela Senior estarem em Português, os nomes dos campos dos objetos estão em português.

As rotas disponíveis são:

[/guests](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#-guests-h%C3%B3spedes)

[/bills](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#-bills-contascheck-ins)

## 👥 Guests (hóspedes)

Os hóspedes podem ser acessados pela rota `/guests`. Abaixo o _Schema_ para um hóspede:

### **GuestSchema:**

```JSON
{
  "nome": { "type": "String", "required": true },
  "documento": { "type": "String", "required": true },
  "telefone": { "type": "String", "required": true },
  "valorTotal": { "type": "Number", "default": 0 },
  "valorUltimaConta": { "type": "Number", "default": 0 }
}
```

Os campos `valorTotal` e `valorUltimaConta` são, respectivamente, o valor total já gasto por um hóspede no hotel e o valor do último check-in de um hóspede. Estes campos são atualizados automaticamente quando um check-in tem sua `dataSaida` cadastrada ou atualizada.

- [Cadastrar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#cadastrar-h%C3%B3spede)

- [Ler](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#ler-um-h%C3%B3spede)

- [Listar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#listar-h%C3%B3spedes)

- [Atualizar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#atualizar-h%C3%B3spede)

- [Deletar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#deletar-h%C3%B3spede)

  </br>

## Cadastrar hóspede:

```HTTP
 POST /guests
```

Para cadastrar um hóspede, basta enviar uma requisição para a rota acima enviando no `body` um `JSON` conforme o exemplo abaixo:

```JSON
body: {
  "nome": "Fulano de tal",
  "documento": "123456789",
  "telefone": "51 9999 99999"
}
```

</br>

## Ler um hóspede:

```HTTP
 GET /guests/:_id
```

Para ler um hóspede, basta enviar uma requisição para a rota acima enviando o `_id` diretamente na `URL` rota, conforme exemplo abaixo:

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

</br>

## Listar hóspedes:

```HTTP
 GET /guests
```

Para filtrar os hóspedes, enviar no `param` da requisição um ou mais objetos abaixo:

```JSON
params: {
  "nome": "<Nome do Hóspede>",
  "documento": "<Nome do Hóspede>",
  "telefone": "<Telefone do Hóspede>"
}
```

</br>

### Paginação:

A consulta de hóspedes pode ser paginada para facilitar a leitura dos resultados e diminuir a carga de dados nos retornos das requisições.

Para paginar uma conulta, enviar no `params` da requisição, os objetos `pg_size` e `pg` (valores numéricos) para determinar o tamanho das páginas e o número da página, respectivamente. Exemplo abaixo:

```JSON
params: {
  "pg_size": 3,
  "pg": 0
}
```

A paginação é _zero-indexed_, dessa forma, a primeira página é `pg: 0`;

</br>

## Atualizar hóspede:

```HTTP
 PUT /guests/:_id
```

Através dessa rota, é possível efetuar atualização dos atributos de um hóspede. Para isso, basta enviar na `URL` da rota o `_id` do hóspede que se deseja atualizar, e no `body`da requisição, enviar os objetos e valores que serão atualizados, como no exemplo abaixo:

```HTTP
PUT /guests/5e4d4209333e8b457c8f2b93
```

```JSON
body: {
  "telefone": "47 91234 5678"
}
```

Retorna:

```JSON
{
  "valorTotal": 0,
  "_id": "5e4d4209333e8b457c8f2b93",
  "nome": "Fulano de tal",
  "documento": "123456789",
  "telefone": "47 91234 5678",
  "__v": 0
}
```

</br>

## Deletar hóspede:

Para deletar um hóspede basta apenas enviar seu `_id` na `URL` da rota.

```HTTP
 DELETE /guests/:_id
```

🛑 Atenção. Enviando uma requisição para esta rota você estará deletando um objeto do Banco de Dados. Essa ação é irreversível!

Exemplo:

```HTTP
DELETE /guests/5e485046df0d1a3240af4109
```

Retorna:

```JSON
{
  "message": "Hóspede deletado com sucesso",
  "guest": {
    "valorTotal": 0,
    "valorUltimaConta": 0,
    "_id": "5e485046df0d1a3240af4109",
    "nome": "Kallico Fróis",
    "documento": "5106196768",
    "telefone": "996638145",
    "__v": 0
  }
}
```

</br>

## 📃 Bills (Contas/Check-ins)

Os check-ins podem ser acessados pela rota `/bills`. Abaixo o _Schema_ para um check-in:

### **BillSchema:**

```JSON
{
  "hospede": {
    "type": { "GuestSchema" },
    "required": true,
  },
  "dataEntrada": { "type": "Date", "required": true },
  "dataSaida": "Date",
  "adicionalVeiculo": { "type": "Boolean", "required": true },
  "valor": "Number",
}
```

Ao criar ou atualizar um check-in informando sua `dataSaida`, a API irá calcular o valor da estadia e atualizar os campos `valorTotal` e `valorUltimaConta` do hóspede vinculado.

- [Cadastrar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#cadastrar-check-in)

- [Listar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#listar-check-ins)

- [Atualizar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#atualizar-check-in)

- [Deletar](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#deletar-check-in)

  </br>

## Cadastrar check-in:

```HTTP
 POST /bills
```

Para cadastrar um check-in, basta enviar uma requisição para a rota acima enviando no `body` um `JSON` conforme o exemplo abaixo:

```JSON
body: {
  "hospede": {
    "valorUltimaConta": 0,
    "valorTotal": 0,
    "_id": "5e4d4209333e8b457c8f2b93",
    "nome": "Fulano de tal",
    "documento": "123456789",
    "telefone": "47 91234 5678",
    "__v": 0
  },
  "dataEntrada": "17/02/2020T10:00:00",
  "adicionalVeiculo": true
}
```

O envio da `dataSaida` na criação de um check-in é **opcional**

</br>

## Listar check-ins:

Para listar os check-ins cadastrados no Banco de Dados, enviar uma requisição conforme abaixo para essa rota:

```HTTP
 GET /bills
```

### Check-ins abertos e fechados:

Se preferir, é possível filtrar por check-ins ainda sem _Data de Saída_, ou seja, contas abertas, de hóspedes ainda presentes no hotel. Para isso, enviar nos `params` da requisição:

```JSON
params: {
  "open": true
}
```

Ou se preferir, pode consultar por contas fechadas, de hóspedes que estiveram no hotel a já deixaram o local, enviando nos `params` da requisição:

```JSON
params: {
  "open": false
}
```

### Filtrar contas por hóspede:

É possível obter as contas de um hóspede específico enviando seu `_id` como valor do objeto `guestId` nos `params` da requisição, como no exemplo abaixo:

```JSON
params: {
  "guestId": "<hospede._id>"
}
```

</br>

## Atualizar check-in:

```HTTP
 PUT /bills/:_id
```

Através dessa rota, é possível efetuar atualização dos atributos de um check-in. Para isso, basta enviar na `URL` da rota o `_id` do check-in que se deseja atualizar, e no `body`da requisição, enviar os objetos e valores que serão atualizados, como no exemplo abaixo:

```HTTP
PUT /bills/5e4eb505a2876351e0938b3b
```

```JSON
body: {
	"dataSaida": "2020-02-23T21:39:00"
}
```

Retorna:

```JSON
{
  "_id": "5e4eb505a2876351e0938b3b",
  "hospede": {
    "valorTotal": 0,
    "valorUltimaConta": 0,
    "_id": "5e4d4222333e8b457c8f2b94",
    "nome": "Beltrando Souza",
    "documento": "456789123",
    "telefone": "51 84465 8965",
    "__v": 0
  },
  "dataEntrada": "2020-02-20T13:00:00.000Z",
  "adicionalVeiculo": true,
  "__v": 0,
  "dataSaida": "2020-02-24T00:39:00.000Z",
  "valor": 645
}
```

</br>

## Deletar check-in:

Para deletar um check-in basta apenas enviar seu `_id` na `URL` da rota.

```HTTP
 DELETE /bills/:_id
```

🛑 Atenção. Enviando uma requisição para esta rota você estará deletando um objeto do Banco de Dados. Essa ação é irreversível!

Exemplo:

```HTTP
DELETE /bills/5e4eb505a2876351e0938b3b
```

Retorna:

```JSON
{
  "message": "Conta deletada com sucesso"
}
```

</br>

# 🐞 Debug

Para executar requisições diretamente à API você pode usar o [Insomnia](https://insomnia.rest/). Clique no botão abaixo e importe diretamente o _Workspace_ com todos os requests possíveis para essa API.

<div align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=seniorHotel%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ffroiskallico%2FhotelSenior%2Fdocumentation%2Futils%2Finsomnia.json%3Ftoken%3DAL2EPMYOXZ4TQSYKJX76DQ26J322C)

</div>

Ou se preferir, pode usar outro cliente HTTP de sua preferência!
