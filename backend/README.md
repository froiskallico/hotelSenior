<center>

![Senior](../frontend/src/assets/logoSeniorGreen.svg)

</center>


# **Hotel Senior**
API RESTful para Aplicação de Controle de Hóspedes em hotel.

### 🚀 Desenvolvida usando [Node.JS](https://nodejs.org/en/)

# **Desafio:**
Desenvolver uma aplicação Backend que possibilite realizar o cadastro de hóspedes e o check-in.

## **Requisitos funcionais**

[x]	Um CRUDL para o cadastro de hóspedes;

[x]	No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;

[x]	Consultar hóspedes que já realizaram o check in e não estão mais no hotel;

[x]	Consultar hóspedes que ainda estão no hotel;

[x]	As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel;


## **Regras de negócio:**
- Uma diária no hotel de segunda à sexta custa R$120,00;
-	Uma diária no hotel em finais de semana custa R$150,00;
-	Caso a pessoa precise de uma vaga na garagem do hotel há um acréscimo diário, sendo R$15,00 de segunda à sexta e R$20,00 nos finais de semana;
-	Caso o horário da saída seja após às 16:30h deve ser cobrada uma diária extra;

**Conforme acordado com o Rafael Liberato:**
- > Se o hóspede entrar em uma sexta-feira e sair em um sábado, será cobrada apenas uma diária (no valor da diária de sábado = R$ 150,00);

- > Se o hóspede entrar e sair no mesmo dia, será cobrada uma diária inteira;

