# safetrackerbot

A discord bot used to check the price of Safemoon token.

## Prerequisites

You must have [node.js](https://nodejs.org/) installed on you computer

## Usage

### Create the bot

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and sign in

Create a new application and call it "safetrackerbot"

Goto the application bot settings and add a bot

Copy the bot token

### Download code

Clone [this repository](https://github.com/NateXVI/safetrackerbot/archive/refs/heads/main.zip) and unzip it

### Configure app

Go into the folder and duplicate the file called "config-template.json" and rename it "config.json"

Change the "prefix" and "token" parameters in "config.json"

It should look something like this
```json
{
  "prefix": "~",
  "token": "ODM3NjM5Nzc4OTE2NDk5NDY2.YIve1Q.mh10MBsCfM50HNv4GHfyjVouOv8"
}
```

### Install dependencies

open a terminal and change the directory to the safetrackerbot folder
```
cd "location of folder"
```

Install necessary packages with this command

```
npm install
```

### Run the app

Run the app with this command
```
npm start
```

You should see a message that says "Safetrackerbot connected" and "status set"

### Add bot to server

Go back to the application settings on [Discord Developer Portal](https://discord.com/developers/applications)

Goto OAuth2 tab

Under scopes check "bot"

Under bot permissions check "send messages"

Copy the link generated and paste it into your address bar

Select the server you want to add it to and you are done

## Bot commands

Use ~help to see a list of commands

Use ~set [number] to tell the bot how much safemoon you have

Use ~price to see how much your safemoon is worth and the current price of safemoon

Use ~rank to see the price of safemoon on different exchanges
