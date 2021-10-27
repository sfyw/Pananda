const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('Ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Unfortunately I do not have permission to ban members.");
   
    //Variables:
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();
    
    //Input Checking:
    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must mention someone to ban. `\`-ban @user reason\`');
    if (!mentionedMember) return message.channel.send('The member mentioned is not in this server.');
    if (!mentionedMember.bannable) return message.channel.send('I cannot ban this member.');
    if (mentionedMember.roles.highest.position >= message.member.roles.highest.position) return io.send('You do not have permission to ban this user.')

    //Executing:
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.name}`)
      .setDescription(`Reason for ban: ${reason}`)
      .setColor("#5708ab")
      .setTimestamp();

      const banMessage = new Discord.MessageEmbed()
      .setTitle(mentionedMember.user.tag + ' Was struck by the Ban Hammer')
      .setDescription(`Reason for ban: ` + reason)
      .setColor("#5708ab")
      .setTimestamp()
      

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err))
    await message.channel.send(banMessage)

  }
}