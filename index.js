const Discord = require("discord.js")
require("donenv").config()

const TOKEN = "OTkxMTg1NzY2MjM3NjIyMjky.Gnq4vO.S2BjsWAbM0uS6_XW_3l2tEV4F45dWDXfr9ok9o"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "pharma"){
        message.reply("posse")
    }
})

client.login(process.env.TOKEN)