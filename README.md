<h1 align="center">
    <img alt="DevRadar" title="#delicinha" src=".github/devradar.svg" width="250px" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 10.0 🚧 <strong>Em contrução</strong> 🚧
</h4>

<br />

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pablogiaccon/DevRadar">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pablogiaccon/DevRadar">
  
  <a href="https://github.com/Rocketseat/semana-omnistack-10/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pablogiaccon/DevRadar">
  </a>

  <a href="https://github.com/Rocketseat/semana-omnistack-10/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/pablogiaccon/DevRadar">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="Frontend" src=".github/devradar.png" width="100%">
</p>

<div id="tecnologias"></div>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [SocketIO](https://socket.io/)
- [Styled-components](https://styled-components.com/)

<br />

<div id="projeto"></div>

## 💻 Sobre o Projeto

O DevRadar é um projeto que visa conectar desenvolvedores próximos a você que trabalham com as mesmas tecnologias.

📜 Para a versão web temos um formulário de cadastro onde o dev pode se cadastrar utilizando o seu usuário do Github e informar a sua localização.

🗺️ Já na versão mobile o dev pode encontrar outros devs no mapa baseado na sua localização, além de filtrar por tecnologias que trabalham. É possível acessar o perfil do Github do dev de interesse e fazer sua network ✨.

🚀 O projeto foi desenvolvido durante a Semana OmniStack 10 oferecida pela RocketSeat. A Semana OmniStack é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

<br />

<div id="como-executar"></div>

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:

1. Back End (pasta backend)
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

<br />
<br />

### 🎲 Rodando o Back End (servidor)

<br />

```bash
# Clone este repositório
$ git clone https://github.com/pablogiaccon/DevRadar

# Acesse a pasta do projeto no terminal/cmd
$ cd devradar

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install
# ou utilizando o yarn
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm start
# ou
$ yarn start

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

<br />

### 🧭 Rodando a aplicação web (Front End)

<br />

```bash
# Após ter realizado o passo anterior para executar o servidor
# Acesse a pasta do projeto no terminal/cmd
$ cd devradar

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install
# ou utilizando o yarn
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm start
# ou utilizando o yarn
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 🧭 Rodando a aplicação mobile

<br />

> Para executar a aplicação mobile no seu celular, você precisa ter instalado no seu dispositivo o aplicativo do Expo, você pode encontrar nas lojas de aplicativos.

<br />

```bash
# Após ter realizado o passo para executar o servidor
# Acesse a pasta do projeto no terminal/cmd
$ cd devradar

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install
# ou utilizando o yarn
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm start
# ou utilizando o yarn
$ yarn start

# No terminal será exibido um QR Code, abra o aplicativo do Expo no seu celular e faça a leitura do QR Code e o projeto inicializará.
```

<br />
<br />

<h4 align="center"> 
	🚧  DevRadar ainda 🚀 Em construção...  🚧
</h4>

<br />

### 🏷 Novas features para serem implementadas

- [ ] Cadastro de usuário pela aplicação mobile
- [ ] Autenticação de usuário com JWT
- [ ] Usuários poderem se conectar dentro da plataforma
- [ ] Implementar dashboard do usuário
- [ ] Refatorar toda aplicação para TypeScript

<br />
<br />

## 📝 Licença

<br />

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Pablo Giaccon 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pablogiaccon/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
