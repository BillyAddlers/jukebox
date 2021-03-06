![](.github/images/jukebox.png)
# Jukebox
> Just a simple Discord music bot

<a href='https://discordapp.com/oauth2/authorize?client_id=698573904129818624&permissions=53857345&scope=bot'><img src="https://img.shields.io/static/v1?label=Invite%20Me&message=Jukebox%239319&plastic&color=7289DA&logo=discord"></a>
<a href='https://github.com/Hazmi35/jukebox/actions?query=workflow%3A%22Node.js+CI%22'><img src='https://github.com/Hazmi35/jukebox/workflows/Node.js%20CI/badge.svg' alt='Node.JS CI Status' /></a>
<img src="https://badgen.net/badge/icon/typescript?icon=typescript&label">
<a href="https://heroku.com/deploy?template=https://github.com/Hazmi35/jukebox/tree/stable"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy"></a>

## Usage

1. Rename `.env.schema` to `.env` and fill out the values (example on .env.example):
```sh
DISCORD_TOKEN=
YT_API_KEY=

CONFIG_NAME=
CONFIG_PREFIX=
CONFIG_OWNERS=
CONFIG_TOTALSHARDS=
CONFIG_MAX_VOLUME=
CONFIG_DEFAULT_VOLUME=
CONFIG_ALLOW_DUPLICATE=
```
2. Install dependencies as stated [here](https://github.com/Hazmi35/jukebox#install)
3. Run `npm run build` or `yarn run build` if you're using yarn.
4. (Optional) Prune devDependencies (This is good to save disk spaces):
```shell script
npm prune --production
#or with yarn
yarn install --production
```
5. Start it with `npm start` or `yarn start`! And you're done!

Note: If you're using "Deploy to Heroku" button, you don't need to do this.

## Install

Without optional packages
```shell script
npm install --no-optional
# or with yarn
yarn install --ignore-optional
```

With optional packages (Recommended)

```shell script
npm install
# or with yarn
yarn install
```
For optional packages, you need to install build tools as stated [here](https://github.com/nodejs/node-gyp#installation)

## Features
- TypeScript! This bot is using TypeScript in a way that is easy to understand. Even a [dogmeat](https://fallout.fandom.com/wiki/Dogmeat_(Fallout_4)) can understand the code!
- Discord.JS! Who doesn't like Discord.JS? Robust module, robust documentation!
- Using the concept of extending base command, similar to Commando.
- A production-ready music bot, suitable for you that dislike hassling with the code.

Based on [discord-music-bot](https://github.com/iCrawl/discord-music-bot)