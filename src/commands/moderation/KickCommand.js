const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
 
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'mod', []);
  }
 
 async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command.") 
    const mentionedMember = message.mentions.members.first();
    const moderator = message.member
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ` + message.guild.name)
      .setDescription(`Reason: ` + reason)
      .setColor("#5708ab")
      .setFooter(moderator.user.tag, moderator.user.displayAvatarURL())
      .setTimestamp();
 
    // -kick @user dm ads
    if (!args[0]) return message.channel.send("You need to state a user to kick. \`-kick @user reason\`");
    if (!mentionedMember) return message.channel.send("The member mentioned doesn't exist or is not in this server.");
    if (!mentionedMember.bannable) return message.channel.send('I cannot ban this member.');
  
 
    if (mentionedMember == moderator) return message.channel.send('You cannot kick yourself.')
    if (mentionedMember.hasPermission('ADMINISTRATOR')) return message.channel.send('I cannot kick members that are higher than me or are an administrator.')
 
 
    await mentionedMember.send(kickEmbed).catch(err => console.log("I was unable to message the member.     " + err))
 
 
 
 
    try {
      await mentionedMember.kick(reason)
    } catch (err) {
      console.log(err);
      return message.channel.send("I was unable to kick the member mentioned, most likely because I am not high enough in the hierarchy or some other issue.");
    }
 
 
    
      
    
     
    
 
  }
}