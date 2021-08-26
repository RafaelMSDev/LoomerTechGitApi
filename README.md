# Projeto: App para visualizar organições populares no Github usando React-Native #

<p align="center">
  <img src="./assets/68747470733a2f2f6861636b65726e6f6f6e2e636f6d2f696d616765732f677034733332706b2e6a7067.jpeg" >
</p>

  
 O sistema Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado também para registrar o histórico de edições de qualquer tipo de arquivo . O Git foi inicialmente projetado e desenvolvido por Linux Torvalds (https://pt.wikipedia.org/wiki/Linus_Torvalds) (criador do sitema Linux, Android e Chrome OS)para o desenvolvimento do kernel Linux, mas foi adotado por muitos outros projetos com grandes distribuições do SO, podemos encontrar: Ubuntu, Debian, Kali, Arch, Mint, a distribuição brasileira Kurumin e muitos outros.

 A plataforma do GitHub reune o trabalho de inúmeros desenvovledores em volta do mundo. É uma rede fertil para a troca de experiências e código de maneira livre e eficiente usando o sistema Git. 
 Distríbuido de forma livre, contamos com a API (_Application Programming Interface_) que reúne informações de todos os usuários, organizações englobando repositórios e projetos open source (~~Ou não~~).

Em meu projeto utizei desta distribuição de dados para demonstrar o quão grande a plataforma consegue ser. 

<p align="center">
  <img src="App.png" >
</p>

Foram utilizadas as funcionalidades de FlexBox para alinhar os elementos na tela de forma que fiquem organizados e respeitando os limites definidos pelo protótipo, também utilizei da FlatList com Infinity Scroll (_A mesma tecnologia utilizadas no Instagram, Facebook, TikTok e Youtube para prender o usuário ao aplicativo_). Os dados extraídos foram apresentados dentro da Flatlist com API Rest explorando os sub-niveis que esta proporciona. Também foi adotado o conceito de organização de diretórios e componentes para melhor manutenção do código no futuro.

## FlatList e API Rest ##

API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".

A API alimenta a aplicação de forma que os dados possam ser inseridos e aproveitado dentro da FlatList.

A API do Github disponibiliza aos devs informações (**públicas**_**) a todos aqueles que desejam utilizar em seus projetos.
No nosso caso iremos extrair as informações das organizações em ordem de popularidade e expor dentro de uma FlatList, os dados que iremos utilizar são eles:

- name: >> Nome público no Github
- full_name: >> Nome de forma extensa apresentado muitas das vezes na URL 
- owner: >> Categoria na qual engloba informações sobre um usuário em específicio 
- avatar_url: >> Link da foto do usuário
- avatar_url.owner: >> Retorna a foto do usuário pertencente 

## Infinity Scroll ##

O Infinity Scroll tem a ideia de te prender no aplicativo, um gatilho é acionado quando chega a 10% da lista rodando um loading e carregando assim de maneira posterior.



