require('dotenv').config()
const { Client, IntentsBitField, ActivityType } = require('discord.js')

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

bot.on('interactionCreate',(i)=>{
    if(!i.isChatInputCommand()) return;

if(i.commandName === 'test'){
    i.reply('Working perfectly')
}

if(i.commandName === 'hello'){
    i.reply(`Hello! @${i.user.username}#${i.user.discriminator}`)
}

if(i.commandName === 'greet'){
    i.reply(`Hello! ${i.options.get('user').value}`)
}

if(i.commandName === 'guess'){
    const rnum = Math.ceil(Math.random() * 10);
    if(rnum == i.options.get('number').value){
        i.reply(`Correct! The number was ${rnum}`)
    }
    else if(i.options.get('number').value == 0 || i.options.get('number').value >10){
        i.reply(`The number must be between 1-10`)
    }
    else{
        i.reply(`Wrong! The number was ${rnum}`)
    }
    
}

if(i.commandName === 'flip'){
    const rnum = Math.floor(Math.random() * 2);
    const ht = ['Heads', 'Tails']

    i.reply(`The coin landed on ${ht[rnum]}`)
}

if(i.commandName === 'playgame'){
    const rnum = Math.floor(Math.random() * 3);
    const opts = ['rock', 'paper', 'scissors']

    const botopt = opts[rnum]

if(i.options.get('choose').value == botopt){
    i.reply(`The bot choose ${botopt}, so it was a draw`)
}
else{

if(i.options.get('choose').value == 'rock'){

    if(botopt == 'paper'){
    i.reply(`You lost! The bot choose ${botopt}`)
    }
    else{   
    i.reply(`You won! The bot choose ${botopt}`)
    }

}

if(i.options.get('choose').value == 'paper'){

    if(botopt == 'scissors'){
    i.reply(`You lost! The bot choose ${botopt}`)
    }
    else{   
    i.reply(`You won! The bot choose ${botopt}`)
    }

}

if(i.options.get('choose').value == 'scissors'){

    if(botopt == 'rock'){
    i.reply(`You lost! The bot choose ${botopt}`)
    }
    else{   
    i.reply(`You won! The bot choose ${botopt}`)
    }

}

}





}

if(i.commandName === 'avatar'){
    i.reply(`${i.user.displayAvatarURL({dynamic: true})}`)
}

if(i.commandName === 'setbotstatus'){
    if(i.member.roles.cache.find(role => role.name === 'Admin')){
        const act = i.options.get('activity').value

        bot.user.setActivity({
            name: i.options.get('status').value,
            type: ActivityType[act]
        })
        i.reply('Status Set')
        }
        else{
        i.reply(`Only admins can set the bot's status`)
    }
}

})

bot.on('ready',()=>{
    bot.user.setActivity({
        name: 'Useful Things',
        type: ActivityType.Playing
    })
})

bot.login(process.env.Token)