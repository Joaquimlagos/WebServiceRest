# WebServiceRest

## Sobre 📰

Este é um projeto desenvolvido para a UC de **Programação para web**.

O objetivo do projeto é criar um programa servidor para “transformar” um Web service SOAP em
RESTful e um programa cliente para consumir o Web service RESTful.

Nesta atividade, será utilizado um Web service SOAP de calculadora que
oferece quatro operações aritméticas básicas (soma, subtração, multiplicação e divisão).
O programa servidor irá implementar um Web service RESTful com as mesmas
facilidades, consumindo, para cada operação, a operação correspondente no Web service
SOAP.

------

## Tecnologias utilizadas 💻

- NodeJS
- Express

------

## Como baixar e executar o projeto 💡

```bash


# Primeiramente clone o repositorio
$ git clone https://github.com/Joaquimlagos/WebServiceRest.git

# BACK-END
# Mova se para a pasta do back-end
$ cd WebServiceRest/api

# Agora, instale as dependencias com o comando
$ yarn install 
# ou
$ npm install


# Agora mova se para pasta do servidor back-end
$ cd src

# Agora execute com o comando 
$ yarn start 
# ou
$ npm start
```
 O programa irá executar em localhost:3030/ 
 # o nome da operação ex: localhost:3030/sum.

 Para testar o programa é recomendado utilizar o [insomnia](https://insomnia.rest/download) ou o [postman](https://www.postman.com).

 Utilizar o metodo http POST e escrever a seguinte requisição em JSON: 

 {
     value1: # 1° valor da operação ,
     value2: # 2° valor da operação
 }
