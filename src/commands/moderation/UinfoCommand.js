const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SudoCommand extends BaseCommand {
  constructor() {
    super('uinfo', 'moderation', []);
  }

  run(client, message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You do not have permission to use this command")

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args.splice(0).join(" "))


    let sudoresult = new Discord.MessageEmbed()
    sudoresult.setColor('#0099ff')
    sudoresult.setTitle(mentionedMember.user.tag)
    sudoresult.setDescription('Sudo Lookup Results')
    sudoresult.addFields(
      { name: 'Bannable', value: mentionedMember.bannable },
      { name: 'Deleted', value: mentionedMember.deleted },
      { name: 'Name Color', value: mentionedMember.displayHexColor },
      { name: 'Display Name', value: mentionedMember.displayName },
      { name: 'ID', value: mentionedMember.id },
      { name: 'Join Date', value: mentionedMember.joinedAt },
      { name: 'Join Time', value: mentionedMember.joinedTimestamp },
      { name: 'Kickable', value: mentionedMember.kickable },
      { name: 'Last Message', value: mentionedMember.lastMessage },
      { name: 'Manageable', value: mentionedMember.manageable },
      { name: 'Partial', value: mentionedMember.partial },
      { name: 'Permissions', value: mentionedMember.permissions },
      { name: 'Roles', value: mentionedMember._roles },
      { name: 'Username', value: mentionedMember.user.tag },
      { name: 'Avatar', value: String(mentionedMember.user.displayAvatarURL()) },
      { name: 'Bot', value: mentionedMember.user.bot },
      { name: 'Creation Date', value: mentionedMember.user.createdAt },
      { name: 'Creation Time', value: mentionedMember.user.createdTimestamp },
    )

    message.channel.send(sudoresult)
  }
}