const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

  async run(client, message, args) {
       

    const help = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Command List')
    .setDescription('Use -help `command` for more detailed help')
    .addFields(
      { name: 'Moderation', value: 'Ban' + '\n' + 'Uinfo' + '\n' + 'Say' + '\n' + 'Kick' + '\n' + 'Unban \n Tempban' },
      { name: 'Role Manager', value: 'Rhighest' + '\n' + 'Rlev'},
      { name: 'Channel Manager', value: 'Channel' },
      { name: 'Other', value: 'Help \n Changelog'}
    )





    if (!args[0]) return message.channel.send(help);
    
    let subCmd = args.splice(0).join(" "); 
    let jSubCmd = subCmd.toLowerCase();


      console.log(jSubCmd)

     if (jSubCmd == "ban") {
      const verifyhelp = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Ban')
	.setDescription('Ban is used to ban server members')
	.addFields(
    { name: 'Usage', value: '-ban `@user` `Reason`' },
    { name: 'Example', value: '-ban @jhon rule breaker' },
	)
message.channel.send(verifyhelp);
      
    } else if (jSubCmd == "unban") {
      const reverifyhelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Unban')
      .setDescription('Unban is used to unban banned server members')
      .addFields(
        { name: 'Usage', value: '-unban user#tag reason' },
        { name: 'Example', value: '-unban jhon#1234 hello' },
      )
        message.channel.send(reverifyhelp);
    }  else if (jSubCmd == "say") {
      const reverifyohelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Say')
      .setDescription('Say allows moderators to say something as the bot')
      .addFields(
        { name: 'Usage', value: '-say message' },
        { name: 'Example', value: '-say hi' },
      )
        message.channel.send(reverifyohelp);
    } else if (jSubCmd == "kick") {
      const unverifyhelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Kick')
      .setDescription('Kick allows moderators to kick people from the server')
      .addFields(
        { name: 'Usage', value: '-kick @user reason' },
        { name: 'Example', value: '-kick @jhondoe#1234 rule breaker' },
      )
        message.channel.send(unverifyhelp);
    } else if (jSubCmd == "uinfo") {
      const sudohelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Uinfo')
      .setDescription('Uinfo is a command that allows moderators to view all info associated with a user, including join date and account creation date')
      .addFields(
        { name: 'Usage', value: '-Uinfo `@user`' },
        { name: 'Example', value: '-Uinfo @jhondoe#1234' },
      )
        message.channel.send(sudohelp);
    }  else if (jSubCmd == "rlev") {
      const sudo2help = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rlev')
      .setDescription('Rlev allows Admins to change the position of a role in the hierarchy')
      .addFields(
        { name: 'Usage', value: '-rlev level rolename' },
        { name: 'Example', value: '-rlev 3 Member' },
      )
        message.channel.send(sudo2help);
    }  else if (jSubCmd == "rhighest") {
      const sudo3help = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rhighest')
      .setDescription('Rhighest allows moderators to see what the top role of a server is')
      .addFields(
        { name: 'Usage', value: '-rhighest' },
      )
        message.channel.send(sudo3help);
    } else if (jSubCmd == "help") {
      const sudo4help = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Help')
      .setDescription('View the command list')
      .addFields(
        { name: 'Usage', value: '-help `Command`' },
        { name: 'Example', value: '-help ban'}
      )
        message.channel.send(sudo4help);
    } else if (jSubCmd == "changelog") {
      const help5 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Help')
      .setDescription('View the bot changelog')
      .addFields(
        { name: 'Usage', value: '-changelog' },
      )
        message.channel.send(help5);
    } else if (jSubCmd == "tempban") {
      const help6 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Tempban')
      .setDescription('Tempban allows moderators to ban someone for a certain amount of time')
      .addFields(
        { name: 'Usage', value: '-temban `@user` `TIME[UNIT]` `[REASON]`' },
        { name: 'Example', value: '-temban @jhondoe#1234 6h rule breaker' },
        { name: 'Parameters', value: '[UNIT]: type of time unit to use, Immediatly follows time with no space. Optional. \n Accepted Values: y (years), w (weeks), d (days), h (hours), m (minutes), s (seconds)' },
      )
        message.channel.send(help6);
    } else if (jSubCmd == "channel") {
      const help6 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Channel Manager')
      .addFields(
        { name: 'Sub Command List', value: 'delete' }
      );
        message.channel.send(help6);
    } else if (jSubCmd == "channel delete" || jSubCmd == "channel del") {
      const help6 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Channel Delete')
      .setDescription('Channel delete deletes the current channel. confirmation is required.')
      .addFields(
        { name: 'Usage', value: '-channel delete confirm' }
      )
        message.channel.send(help6);
    } else {
      message.channel.send('Unknown Command. To view commands list, type -help.')
    }
  }
}