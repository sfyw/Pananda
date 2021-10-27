const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class RlevCommand extends BaseCommand {
  constructor() {
    super('rlev', 'rmanage', []);
  }

  async run(client, message, args) {

    const u = message.member
    if (!u.hasPermission('ADMINISTRATOR')) return io.send('You do not have permission to use that command')

    let level = args[0]

    const io = message.channel;
    if (level < 1) return io.send('You must specify a level above 0')
    let highestLevel = message.guild.roles.highest.position
    if (level > highestLevel) return io.send('That level is too high. The current max level is `' + highestLevel + "`.")

    
    
    let rolename = args.splice(1).join(" ")
    let role = message.guild.roles.cache.find(r => r.name === rolename)
    if (!role) return io.send('There is no role with that name')


    if (role.position === level) return io.send('This role is already in that position.')


    await role.setPosition(level).then(
      io.send('The role was successfully moved.')
    ).catch(err => console.log(err))


  }
}