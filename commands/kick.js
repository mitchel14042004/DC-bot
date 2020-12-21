module.exports= { 
    name: 'kick',
    description: "verwijderen uit server",
    execute(message, args){ 
       
       if(message.member.roles.cache.has('769260136526381077')){
       
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("Lekker bezig je heb hem gekickt!");

        }else{
            message.channel.send("Je mag niet kicken, hoe durf je! (gebruik @(persoon))");
     

           }
        }else{
            message.channel.send("Je hebt geen rechten");

        }
    }
}





