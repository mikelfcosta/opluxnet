# #opluxnet

O projeto opluxnet busca trazer as discussões sobre Privacidade, Segurança e Neutralidade na Web, 
e expandi-las no Brasil, com base nas leis digitais brasileiras.

Utilizaremos um website que irá trazer a população digital brasileira para conhecer os perigos da internet, 
informa-las sobre estes assuntos e motiva-las a entrar na discussão.

## Tecnologias

O opluxnet será desenvolvido utilizando as seguintes plataformas:

### Frontend

Utilizaremos Vue com Vuex para criar um webapp modular. O projeto será desenvolvido em ES6, e compilado para ES5 usando
Babel. A automatização será feita por Gulp.

O css da página será gerado através de SCSS compilados pelo Gulp. Os arquivos também serão minificados e utilizaremos
hot module swapping quando possível para maior velocidade na página.

Webworkers também serão usados para possibilidade de execução da página em modo offline quando possível.

A página possuirá capacidade para ser multi-idiomas. Isto será feito através de arquivos JSON contendo todas os textos
da página, que serão inseridos nela através de variaveis pela Template Engine do Vue.

### Backend

Utilizaremos NodeJS como plataforma principal. Utilizaremos o ExpressJS para criar o servidor e gerenciar as rotas.
Para este projeto, conectaremos com várias redes sociais, portanto o uso do Passport também será necessário.

O código no NodeJS será todo em ES6, não será necessário compilação. Os unittests serão executados por Mocha.

### Database

Utilizaremos MongoDB para gerenciar o banco de dados do sistema. 

### System

Utilizaremos a plataforma Linux em CentOS para o servidor. O servidor virá através das nossas contas no cloudatcost,
ou através do uso dos cŕeditos da AWS que possuímos pelo Github Education Pack.

## Desenvolvimento

O projeto terá inicio de desenvolvimento em Abril, primeiramente apenas com funcionalidades, utilizando uma estrutura
e identidade visual padrão.

A identidade visual será desenvolvida paralelamente e aplicada no projeto em Maio.

O Marketing e SEO também serão planejados em Abril e aplicados em Maio. O projeto possuirá todo um estudo osbre SEO e
os resultados serão analisados através do Google Analytics.

## Lançamento

A expectativa de lançamento do projeto é para a terceira semana de Maio. Desta forma, teremos tempo para publicar e
promover o projeto em diversas mídias e coletar os resultados.