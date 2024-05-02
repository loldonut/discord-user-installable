# discord-user-installable

- [Install](#install)
- [Example](#example)

`discord-user-installable` is a package that contains a builder for creating user-installable compatible slash commands.

> This package is a temporary solution to create user-installable slash commands since `discord.js` currently does not support this.

### Install

Install the package from GitHub

##### installs from main branch

```sh
npm install loldonut/discord-user-installable
```

### Example

##### register multiple commands

```js
// or require('@discordjs/rest')
const { REST, Routes } = require('discord.js');
const { UserSlashCommandBuilder } = require('discord-user-installable');

const PING_COMMAND = new UserSlashCommandBuilder()
  .setName('ping')
  .setDescription('Pong!');

const PONG_COMMAND = new UserSlashCommandBuilder()
  .setName('pong')
  .setDescription('Ping!');

const commands = [PING_COMMAND, PONG_COMMAND].map((cmd) => cmd.toJSON());

const rest = new REST().setToken('client-token');

rest
  .put(Routes.applicationCommands('client-id'), {
    body: commands,
  })
  .then(() => console.log('Registered commands'))
  .catch(console.error);
```
