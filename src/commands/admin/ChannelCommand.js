const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ChannelCommand extends BaseCommand {
  constructor() {
    super('channel', 'admin', []);
  }

  async run(client, message, args) {
    let subCmd = args[0]
    let subCode = subCmd.toLowerCase()
    const io = message.channel

    console.log('p1')

    if (subCode == 'del' || subCode == 'delete') {
      console.log('p2')
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return io.send('Yo do not have permission to use this command.')
      if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return io.send('I need the `MANAGE_CHANNELS` permission to preform this action')
      console.log('p3')
      let conf = args[1]
      let confJ;

      if(args[1]) {

      confJ = conf.toLowerCase()

      } else if (!args[1]) {
        confJ = '=-_=-_=-_=-_=-_=-_'
      }

      if (confJ == 'confirm') {
        console.log('p5')
        await message.channel.delete()
        message.member.send('Successfully deleted channel `' + message.channel.name +'` in `' + message.guild.name + '`.')
      } else {
        console.log('p4')
        message.channel.send('Are you sure you want to delete `#' + message.channel.name + '`? \n Type `channel delete confirm` to continue.')
      }





    } 
   }
}