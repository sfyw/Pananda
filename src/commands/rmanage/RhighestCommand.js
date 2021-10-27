const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RhighestCommand extends BaseCommand {
  constructor() {
    super('rhighest', 'rmanage', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission to use that command.')


  let highestLevel = message.guild.roles.highest.position
  let role = message.guild.roles.highest.name


    message.channel.send('The highest role is `' + role + '` at level `' + highestLevel + '`.');
  }
}