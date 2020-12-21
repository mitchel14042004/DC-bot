module.exports= { 
    name: 'ban',
    description: "verbannen van de server",
    execute(message, args){ 
       
       if(message.member.roles.cache.has('769260136526381077')){
       
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("LETS GOOO EEN BANNNNN");

        }else{
            message.channel.send("Je mag niet bannen, hoe durf je! (gebruik @(persoon))");
     

           }
        }else{
            message.channel.send("Je hebt geen rechten");

        }
    }
}