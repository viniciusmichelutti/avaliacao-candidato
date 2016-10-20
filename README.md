# Avaliação Candidato
Uma aplicação para o cadastro de candidatos e suas habilidades.

## Interface
![Formulário](https://i.imgsafe.org/8b7ba3494d.png)
![Sucesso](https://i.imgsafe.org/8b7bd1fb8f.png)
![Administração](https://i.imgsafe.org/8b7c02a8eb.png)

## Pré requisitos
Este projeto utiliza Mongo, Node, Less, mas não é necessário se preocupar com nada disto.
Tudo que é necessário para rodar a aplicação, é instalar o [Meteor](https://www.meteor.com/)

1. Possuir [Meteor](https://www.meteor.com/) 

## Scripts
### Inicializando o projeto
Após instalar o meteor, basta executar 

```
npm start
```

### Rodando testes
```
npm test
```

## Todo
* ~~Área de cadastro~~
* ~~Área administrativa para visualizar os registros~~
* ~~Real time (área adm dar update sozinho conforme surgirem registros)~~
* ~~Testes~~
* Implementar login para área administrativa

## Observações
### Email
O código está pronto para enviar o e-mail, falta apenas configurar nas confs, a variável para o servidor/user/senha SMTP.
O template do Email está sendo enviado no log do node.
