const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const config = require('../../../slappey.json')
module.exports = class ChangelogCommand extends BaseCommand {
  constructor() {
    super('changelog', 'log', []);
  }

  async run(client, message, args) {

    const lastUPDT = "4/3/2021"
    const changelog = "-Added Channel command \n -Added Delete subcategory to channel command \n -Added purge command \n -Pananda will now be hosted 24/7!"
    
    
    
    
    
    
    
    
    


    const log = new Discord.MessageEmbed()
      .setTitle("Changelog")
      .setDescription("PanandaBot V" + config.version)
      .addFields(
        {name: lastUPDT, value: changelog}
      )
      .setColor('#45b057')
      message.channel.send(log)
  }
}