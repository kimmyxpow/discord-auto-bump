require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const config = require('./config.json')

const client = new Client()

const getRandomDelay = () => {
    const { min, max } = config.intervals
    return Math.round(Math.random() * (max - min + 1)) + min
}

const sendBump = async (channel) => {
    try {
        await channel.sendSlash(config.disboardBotId, config.bumpCommand)
        console.count('Bumped!')
    } catch (error) {
        console.error('Failed to bump:', error)
    }
}

const startBumpLoop = (channel) => {
    const delay = getRandomDelay()
    setTimeout(() => {
        sendBump(channel)
        startBumpLoop(channel)
    }, delay)
}

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`)

    try {
        const channel = await client.channels.fetch(process.env.BUMP_CHANNEL)

        if (!channel || !('sendSlash' in channel)) {
            throw new Error('Invalid channel or missing permissions')
        }

        await sendBump(channel)
        startBumpLoop(channel)
    } catch (error) {
        console.error('Setup failed:', error)
        process.exit(1)
    }
})

client.login(process.env.TOKEN).catch((error) => {
    console.error('Failed to login:', error)
    process.exit(1)
})
