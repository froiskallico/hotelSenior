<div align="center">

[![Senior](../frontend/src/assets/logoSeniorGreen.svg)](https://www.senior.com.br/)

# **Hotel Senior**
</div>

🏨 **API RESTful para Aplicação de Controle de Hóspedes em hotel.**

### 🚀 Desenvolvida usando [Node.JS](https://nodejs.org/en/)

# 🔐 **Desafio:**
Desenvolver uma aplicação Backend que possibilite realizar o cadastro de hóspedes e o check-in.

## 👓 **Requisitos funcionais:**

- [x]	Um CRUDL para o cadastro de hóspedes;

- [x]	No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;

- [x]	Consultar hóspedes que já realizaram o check in e não estão mais no hotel;

- [x]	Consultar hóspedes que ainda estão no hotel;

- [x]	As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel;


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

As rotas disponíveis são:

[/guests](https://github.com/froiskallico/hotelSenior/tree/documentation/backend#-guests-h%C3%B3spedes-)

[/bills]()


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
  </br>

## Cadastrar um hóspede
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

 ## Ler um hóspede
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

## Listar Hóspedes
```HTTP
 GET /guests
 ```

Para filtrar os hóspedes, enviar no `param` da requisição um ou mais objetos abaixo:

```JSON
params: {
  { "nome": "<Nome do Hóspede>" },
  { "documento": "<Nome do Hóspede>" },
  { "telefone": "<Telefone do Hóspede>" }
}
```
</br>

### Paginação
A consulta de hóspedes pode ser paginada para facilitar a leitura dos resultados e diminuir a carga de dados nos retornos das requisições.

Para paginar uma conulta, enviar no `params` da requisição, os objetos `pg_size` e `pg` (valores numéricos) para determinar o tamanho das páginas e o número da página, respectivamente. Exemplo abaixo:

```JSON
params: {
  { "pg_size": 3 },
  { "pg": 0 }
}
```
A paginação é *zero-indexed*, dessa forma, a primeira página é `pg: 0`;

</br>

## Atualizar Hóspede
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


## Deletar Hóspede
Para deletar um hóspede basta apenas enviar seu `_id` na `URL` da rota.
```HTTP
 DELETE /guests/:_id
 ```
🛑 Atenção. Enviando uma requisição para esta rota você estará deletando um objeto do Banco de Dados. Essa ação é irreversível!


Exemplo:
```HTTP
DELETE /guests/:_id
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

# 🐞 Debug

Para executar requisições diretamente à API você pode usar o [Insomnia](https://insomnia.rest/). Clique no botão abaixo e importe diretamente o *Workspace* com todos os requests possíveis para essa API.

<div align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=seniorHotel%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ffroiskallico%2FhotelSenior%2Fdocumentation%2Futils%2Finsomnia.json%3Ftoken%3DAL2EPMYOXZ4TQSYKJX76DQ26J322C)

</div>

Ou se preferir, pode usar outro cliente HTTP de sua preferência!
