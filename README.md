<div align="center">

[![Senior](./frontend/src/assets/logoSeniorGreen.svg)](https://www.senior.com.br/)

</div>


# **Hotel Senior**
Aplicação para Controle de Hóspedes em hotel.

### ⚙ Ir para a **[Documentação da API](./backend/README.md);** 

### ✨ Ir para a **[Documentação do Frontend](./frontend/README.md)**

</br>


# **Desafio:**
Desenvolver uma aplicação [Backend](./backend/) e [Frontend](./frontend/) que possibilite realizar o cadastro de hóspedes e o check-in.

 ## **Requisitos funcionais:**

[x]	Um CRUDL para o cadastro de hóspedes;

[x]	No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;

[x]	Consultar hóspedes que já realizaram o check in e não estão mais no hotel;

[x]	Consultar hóspedes que ainda estão no hotel;

[x]	As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel.


## **Regras de negócio:**
- Uma diária no hotel de segunda à sexta custa R$120,00;
-	Uma diária no hotel em finais de semana custa R$150,00;
-	Caso a pessoa precise de uma vaga na garagem do hotel há um acréscimo diário, sendo R$15,00 de segunda à sexta e R$20,00 nos finais de semana;
-	Caso o horário da saída seja após às 16:30h deve ser cobrada uma diária extra.
    
**Conforme acordado com o Rafael Liberato:**
- > Se o hóspede entrar em uma sexta-feira e sair em um sábado, será cobrada apenas uma diária (no valor da diária de sábado = R$ 150,00).

- > Se o hóspede entrar e sair no mesmo dia, será cobrada uma diária inteira.

# **Stack:**
- API RESTful desenvolvida em [Node.JS](https://nodejs.org/en/)
- Frontend web desenvolvido em [React JS](https://pt-br.reactjs.org/);
- Banco de Dados NoSQL [Mongo DB](https://www.mongodb.com/) (Hospedado em cloud no Mongo DB Atlas).

### **Principais libs utilizadas:** 
- [Express](https://expressjs.com/pt-br/);
- [Mongoose](https://mongoosejs.com/);
- [Axios](https://github.com/axios/axios);
- [ESLint](https://eslint.org/);
- [moment.js](https://momentjs.com/);
- [Material Design](https://material-ui.com/).
