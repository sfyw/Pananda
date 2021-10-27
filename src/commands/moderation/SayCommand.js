const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'moderation', []);
  }

  async run(client, message, args) {
   let io = message.channel
   let u = message.member
  
   let m = args.splice(0).join(" ")
   message.delete();
   if (!u.hasPermission('MANAGE_MESSAGES')) return;

  
  
   io.send(m)
  }
}