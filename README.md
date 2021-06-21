Este é meu primeiro projeto realizado com AngularJS e Spring integrado a um banco de dados MySQL.


#SOBRE O SISTEMA

Este é um sistema que permite listar, cadastrar, atualizar e deletar usuários.
É um **CRUD FullStack**, com __AngularJS 10__ e __Bootstrap 5__ para o frontend, e __Spring com API REST__ como backend,
integrados a um banco de dados __MySQL__.
Consegui em um semana realizá-lo, e com a documentação original do Angular e outros cursos, aprendi e apliquei
conceitos como: componentes, serviços e routing, e como consumir a API REST. 

#FRONTEND
No frontend, todo as funcionalidades foram feitas com componentes, que consumiam o service
para injeção de dependência, sendo todas as classes organizadas com o __NgModules__. Para navegação entre as views, utilizou-se 
do **Router**. Alguns conceitos de *Programação Orientada a Objetos* foram utilizados (encapsulamento, polimorfismo). Adicionei 
uma restrição para impossibilitar a inserção de CPF/CNPJ iguais. O Framework Bootstrap foi usado para estilizar e deixar melhor
a experiência do usuário.

##COMO RODAR O ANGULAR
  - Na pasta do projeto, inicie o prompt de comando
  - Digite o seguinte comando: `ng serve`

#BACKEND
Toda a aplicação foi feito com **Java**, utilizando Spring como framework, com API REST e rodando o servidor com TomCat 10.x, 
que utiliza JPA/Hibernate para conexão com o banco de dados. Assim como no frontend, conceitos da *POO* foram utilizados, e as
Annotations para endereçamento, facilitando a criação das tabelas no banco. Para adicionar a restrição de duplos CPF's, o campo
*register* foi criado como unique no banco de dados, e no backend, utilizei o modelo DAO para acesso a um dado específico, onde
no frontend foi realizado a programação defensiva.

##COMO CRIAR O BANCO DE DADOS
  - Abra o arquivo `bd.sql` no MySQL Workbench
  - Rode o script (necessário ter um servidor instalado e operando, ex: wamp)
  
##COMO RODAR O SERVIDOR TOMCAT
       
       
#MELHORIAS A SEREM FEITAS

Implementar uma tela de login, utilizando OAuth 2.0, assim como possibilitar a inserção de vários endereços/telefones
O estilo do sistema pode ser melhorado e adequar-se a uma melhor experiência do usuário.
