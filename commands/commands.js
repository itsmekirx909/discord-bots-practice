const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')
require('dotenv').config()

const commands = [
    {
        name: 'test',
        description: 'tests command'
    },
    {
        name: 'hello',
        description: 'Says hello to user'
    },
    {
        name: 'greet',
        description: 'Greets the user',
        options: [
            {
                name: 'user',
                description: 'The user',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },
    {
        name: 'guess',
        description: 'Try to guess the number from 1-10',
        options: [
            {
                name: 'number',
                description: 'Your Number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'flip',
        description: 'Flip a coin'
    },
    {
        name: 'playgame',
        description: 'Play a game of rock paper scissors game with bot',
        options: [
            {
                name: 'choose',
                description: 'Choose between',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'Rock',
                        value: 'rock'
                    },
                    {
                        name: 'Paper',
                        value: 'paper'
                    },
                    {
                        name: 'scissors',
                        value: 'scissors'
                    }
                ]
            }
        ]
    },
    {
        name: 'avatar',
        description: 'Shows your avatar',
    },
    {
        name: 'setbotstatus',
        description: `Set bot's status`,
        options: [
            {
                name: 'activity',
                description: 'Choose bot activity',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'Competing',
                        value: 'Competing'
                    },
                    {
                        name: 'Listening',
                        value: 'Listening'
                    },
                    {
                        name: 'Playing',
                        value: 'Playing'
                    },
                    {
                        name: 'Streaming',
                        value: 'Streaming'
                    },
                    {
                        name: 'Watching',
                        value: 'Watching'
                    }
                ] 
            },
            {
                name: 'status',
                description: 'Choose bot status',
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    }
]

const rest = new REST({version: '10'}).setToken(process.env.Token);



(async ()=>{
    try {
      await  rest.put(
            Routes.applicationGuildCommands(process.env.BotId, process.env.GuildId),
            {body: commands}
        )


    } catch (error) {
        console.log('error occured', error)
    }
})
()

