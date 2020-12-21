module.exports = { 


    name: 'terror',
    description: "this is a terror command",
    execute(message, args){ 

        let role = message.guild.roles.cache.find(r => r.name == "Terrorist");




        if(!message.member.roles.cache.some(role => role.name === "Terrorist")){


    

         message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO');

        } 
        
        
        
        else{ 
                message.reply("GEFELICITEERD, je hebt nu de rol terrorist ");
                
                message.member.roles.add(role).catch(console.error);
           }






        
    }
}