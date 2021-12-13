# Safetrackerbot 🚀

# Description

This bot allows you to quickly and easily see the current price of safemoon from its status and you can check the value of a cetrain amount of it too!

---

## Usage

`~help` lets you see a list of commands

`~set [quantity]` lets you set your amount

`~price` to see how much you safemoon is worth

`~rank` shows prices for different exchanges

---

## Installation

#### Prerequisites

You must have [node.js](https://nodejs.org/) installed on you computer

#### Create the bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and sign in

2. Create a new application and call it "safetrackerbot"

3. Goto the application bot settings and add a bot

4. Copy the bot token

#### Download code

1. Clone [this repository](https://github.com/NateXVI/safetrackerbot/archive/refs/heads/main.zip) and unzip it

#### Configure app

1. Go into the folder and duplicate the file called "config-template.json" and rename it "config.json"

2. Change the "prefix" and "token" parameters in "config.json"

3. It should look something like this

```json
{
  "prefix": "~",
  "token": "ODM3NjM5Nzc4OTE2NDk5NDY2.YIve1Q.mh10MBsCfM50HNv4GHfyjVouOv8"
}
```

#### Install dependencies

1. open a terminal and change the directory to the safetrackerbot folder

```bash
cd [folder pathe eg. Downloads/safetrackerbot]
```

2. Install necessary packages with this command

```bash
npm install
```

#### Run the app

1. Run the app with this command

```bash
npm start
```

2. You should see a message that says "Safetrackerbot connected" and "status set"

#### Add bot to server

1. Go back to the application settings on [Discord Developer Portal](https://discord.com/developers/applications)

2. Goto OAuth2 tab

3. Under scopes check "bot"

4. Under bot permissions check "send messages"

5. Copy the link generated and paste it into your address bar

6. Select the server you want to add it to and you are done

---


