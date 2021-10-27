const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Unfortunately I do not have permission to ban members.");
   
    //Variables:
    let reason = args.slice(1).join(" ");
    let userTag = args[0];
    
    //Input Checking:
    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must mention someone to unban. `\`-unban username reason\`');
    if (!isNaN(args[0])) return message.channel.send('The username stated is not a valid username. \`-unban username reason\`');
    
    
    //Executing:
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('This server does not have anyone banned');
      let bid = client.users.cache.find(u => u.tag === userTag).id
      let bUser = bans.find(b => b.user.id == bid);
      if (!bUser) return message.channel.send('The user stated is not banned');
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('Somthing went wrong while unbanning.');
      }).then(() => {
        message.channel.send('Successfully unbanned ' + userTag);
      });
    });

    
  }
}
 