const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const ms = require('ms')

module.exports = class TempbanCommand extends BaseCommand {
  constructor() {
    super('tempban', 'moderation', []);
  }

  async run(client, message, args) {

    //Permission checking and input checking Also definitions
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You do not have permission to use that command.')
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I need permission to ban members.')

    const mentionedMember = message.mentions.members.first()
    
    let reason = args.splice(2).join(" ")
    let time = args[1]
    const io = message.channel

    

    



    

    
    
    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must mention someone to ban. `\`-tempban @user time reason\`');
    if (!mentionedMember) return message.channel.send('The member mentioned is not in this server.');
    if (!mentionedMember.bannable) return message.channel.send('I cannot ban this member.');
    if (mentionedMember.roles.highest.position >= message.member.roles.highest.position) return io.send('You do not have permission to ban this user.')
    if (!args[1]) return io.send('You must state how much time to ban the user for.')
    if (time == 0 && !isNaN(time)) return message.channel.send('You must ban someone for at least one second')


    let mtime = time.slice(0, -1)


    if (isNaN(mtime) && isNaN(time)) return io.send('You must state a valid ban duration')
    if (mtime == 0) return message.channel.send('You must ban someone for at least one second')

    const userID = mentionedMember.id


    let rtime



    let type = time.slice(-1)

    

    let bantime
    let fulltype

    //checking if time is in years,weeks,days etc.

    if (type == 'y') {
      rtime = mtime
      bantime = mtime * 31536000000
      fulltype = "Years"
    } else if (type == 'w') {
      rtime = mtime
      bantime = mtime * 604800000
      fulltype = "Weeks"
    } else if (type == 'd') {
      rtime = mtime
      bantime = mtime * 86400000
      fulltype = "Days"
    } else if (type == 'h') {
      rtime = mtime
      bantime = mtime * 3600000
      fulltype = "Hours"
    } else if (type == 'm') {
      rtime = mtime
      bantime = mtime * 60000
      fulltype = "Minutes"
    } else if (type == 's') {
      rtime = mtime
      bantime = mtime * 1000
      fulltype = "Seconds"
    } else {
      rtime = time
      bantime = time * 86400000
      fulltype = "Days"
    }
    let banEmbed
    let implural = fulltype.slice(0, -1)


    // generate embed
    if (rtime == 1) {
    banEmbed = new Discord.MessageEmbed()
      .setTitle('You have been banned from ' + message.guild.name)
      .setDescription(`Reason for ban: ` + reason)
      .setColor("#5708ab")
      .setTimestamp()
      .addFields(
        {name: "Time", value: rtime + " " + implural}
      )
      } else {
      banEmbed = new Discord.MessageEmbed()
      .setTitle('You have been banned from ' + message.guild.name)
      .setDescription(`Reason for ban: ` + reason)
      .setColor("#5708ab")
      .setTimestamp()
      .addFields(
        {name: "Time", value: rtime + " " + fulltype}
      )
      }



      let banMessage
      if (rtime == 1) {
        banMessage = new Discord.MessageEmbed()
          .setTitle(mentionedMember.user.tag + ' Was struck by the Ban Hammer')
          .setDescription(`Reason for ban: ` + reason)
          .setColor("#5708ab")
          .setTimestamp()
          .addFields(
            {name: "Time", value: rtime + " " + implural}
          )
          } else {
          banMessage = new Discord.MessageEmbed()
          .setTitle(mentionedMember.user.tag + ' Was struck by the Ban Hammer')
          .setDescription(`Reason for ban: ` + reason)
          .setColor("#5708ab")
          .setTimestamp()
          .addFields(
            {name: "Time", value: rtime + " " + fulltype}
          )
          }

      //Ban the member
      

      await mentionedMember.send(banEmbed).catch(err => console.log(err))
      await mentionedMember.ban({
        days: 7,
        reason: reason
      })
      await io.send(banMessage)


      //Unban the member after the time is up
      setTimeout(async function () {
        await message.guild.fetchBans().then(async bans => {
          if (bans.size == 0) return;
          let bannedUser = bans.find(b => b.user.id == userID)
          if (!bannedUser) return;
          await message.guild.members.unban(bannedUser.user, reason).catch(err => console.log(err))
        });



      }, ms.bantime)
  }
}