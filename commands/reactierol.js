module.exports = { 


    name: 'reactierol',
    async execute(message, args, discord, client){ 


        const channel = '789236214263840818'
        const RocketLeagueRol = message.guild.roles.cache.find(role => role.name === "Rocket League");
        const MitchelSMPROLE = message.guild.roles.cache.find(role => role.name === "Mitchel SMP");
        const Valorant = message.guild.roles.cache.find(role => role.name === "Valorant");
       
        const raket = '\:poop:';
        const valorant = '\:eye:';
        const MitchelSMp = '\:banana:';


        let embed = new discord.MessageEmbed()   
        .setColor('#3300AA') 
        .setTitle('Kies hier je rol')
        .setDescription('Geef een reactie op de spellen die je speelt. \n \n'
            +`${raket} voor Rocket League`
            +`${valorant} voor Valorant`
            +`${MitchelSMp} voor SMP`);

        
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(raket);
        messageEmbed.react(valorant);
        messageEmbed.react(MitchelSMp);

        client.on('messageReactionAdd', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === raket) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(RocketLeagueRol);
                }
                if (reaction.emoji.name === valorant) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Valorant);
                }
                if (reaction.emoji.name === MitchelSMp) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MitchelSMPROLE);
                }else{
                    return;
                }
            } 
        } );

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === raket) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(RocketLeagueRol);
                }
                if (reaction.emoji.name === valorant) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Valorant);
                }
                if (reaction.emoji.name === MitchelSMp) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MitchelSMPROLE);
                }else{
                    return;
                }
            } 
        } );




    }

}