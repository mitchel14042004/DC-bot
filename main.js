const fs = require('fs');

const discord = require('discord.js');

const client = new discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';




client.commands = new discord.Collection();





const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//bot is online melding
client.on('ready',()=>{
    console.log('Dikke bertha is online!')
});

//welkom bericht
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Pro-GAMER');
    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache.get('759025380467671114').send(`Welkom <@${guildMember.user.id}>, WAT DOE JIJ HIER?`)

})

//commands
client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);


    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'terror'){
        client.commands.get('terror').execute(message, args);
    } else if(command == 'command'){
        client.commands.get('command').execute(message, args, discord); 
    } else if(command == 'clear'){ 
        client.commands.get('clear').execute(message,args)
    }else if(command == 'kick'){ 
      client.commands.get('kick').execute(message,args)
    }else if(command == 'ban'){ 
      client.commands.get('ban').execute(message,args)
    }else if(command == 'reactierol'){
        client.commands.get('reactierol').execute(message, args, discord, client);
    }






});

client.login(process.env.Token);
