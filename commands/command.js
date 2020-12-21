module.exports = { 
    name: 'command',
    description: "embeds",
    execute(message, args, discord){ 
        const newEmbed = new discord.MessageEmbed()
        .setColor('#3300AA')
        .setTitle('BOT')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO')
        .addFields(
            { name: 'Hacken', value: 'Ik steel je diamonds' },
            { name: '\u200B', value: '\u200B' },
            { name: 'BOT', value: 'IK WIN', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'HELLO', value: 'Hoi', inline: true }, 
        )   
        .setImage('https://imgur.com/a/uB3zxUO')
        message.channel.send(newEmbed);
        

    }

}