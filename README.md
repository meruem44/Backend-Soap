# Backend-Soap
Backend do Desafio

Ferramentas utilizadas:
O banco de dados utilizado foi o MongoDb, junto com a biblioteca Mongoose.
Na criação do servidor Node, foi usado o Sucrase, que faz com que o Node consiga
entender a linguagem mais atual do JavaScript.

Models:
Os Models criados representam as tabelas no banco.
Os models são: 

* Dealer: guarda as informações do revendedor,
* information: guarda as informações do revendedor como lucro, valor gasto nos produtos,
valor das taxas,
* Products: guarda os produtos cadastrados que são listados na hora de repor o estoque,
* Tax: Todas os impostos que precisam ser pago, são salvo nessa tabela ,
* Transaction: Guarda todas as informações das compras que o usuario realizou como:
  id do usuario, a data, a quantidade, o valor total e o id do produto
  
Controllers:
* DealerController: Fica toda logica de criar o usuario,
* InformationController: Fica toda logica que envolve as informações do usuario, nesse controler
fica as funcionalidades de Listar as informações de determinado usuario.
* ProductsController: Nesse controller é possivel criar novos produtos para que os revendedores possam 
comprar (Essa função não foi adicionada no app Web, funciona apenas se for chamada manualmente), além 
de listar todos os produtos.
* SessionsController: Esse controller cuida da parte de autenticação do usuário, onde verifica as suas
credenciais para realizar a autenticação.
* TaxController: Cuida de toda parte de cobrança de imposto, a listagem de impostos que o revendedor precisa pagar, 
a atualização da situação do imposto, se foi pago ou não. E além de ficar a função que cria o imposto quando é realizado 
uma compra.
* TransactionController: Esse é o controller mais importante, pois além de listar todas as compra e do revendedor, a principal
regra de negocio da aplicação está nele.
* Primeiro é realizado a transação, após isso os valores do usuário são atualizado, como Valor gasto nos produtos,
impostos, calculo do lucro e etc.



