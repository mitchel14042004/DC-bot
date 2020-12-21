const { MessageManager } = require("discord.js");



module.exports= { 
name: 'clear',
description: 'Verwijderd berichten',



async execute(message, args){

    if(message.member.roles.cache.has('769260136526381077')){



    if(!args[0]) return message.reply("Zeg hoeveel je wild verwijderen.");
    if(isNaN(args[0]))return Message.reply("Je mag wel normal cijfers gebruiken!");
    if(args[0] > 100) return message.reply("Het limiet staat op 100!")
    if(args[0] < 1) return message.reply("Het getal moet positief zijn!")

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{ 
        message.channel.bulkDelete(messages);
    });


    }else{
        message.channel.send("Je hebt geen rechten");
    }



}
}