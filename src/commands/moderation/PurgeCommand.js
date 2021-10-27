const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have permission to use that command.")
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send("I need the `MANAGE_MESSAGES` permission to preform the action.")
    if (!args[0]) return message.channel.send("You must state a number of messages to purge.")
    const rawdeleteNum = Number(args[0], 10)
    let deleteNum = rawdeleteNum + 1

    if (isNaN(deleteNum)) return message.channel.send("Invalid number.")
    if (!Number.isInteger(deleteNum)) return message.channel.send("You must use a whole number.")
    if (!deleteNum || deleteNum < 1 || deleteNum > 10000) return message.channel.send("Number must be at least 1 and less than 10000")

    //time for my honors math test POG
    let times
    let remainder

    if (deleteNum > 99) {
      let trueTimes
      remainder = deleteNum % 99
      trueTimes = deleteNum / 99
      times = Math.floor(trueTimes)

      if (!times * 99 + remainder == deleteNum) console.log('Fatal Error, calculated number does not equal original number.')
      
      
    }






    if (deleteNum > 99){

      let i = 0
    for (i = 0; i > times; i++) {

    


    const fetched = await message.channel.messages.fetch({
      limit: 99
    })

    try {
      await message.channel.bulkDelete(fetched)
    } catch (err){
      console.log(err)
    }




  }

  const fetched = await message.channel.messages.fetch({
    limit: remainder
  })

  try {
    await message.channel.bulkDelete(fetched)
  } catch (err){
    console.log(err)
  }





} else {
  const fetched = await message.channel.messages.fetch({
    limit: deleteNum
  })

  try {
    await message.channel.bulkDelete(fetched)
  } catch (err){
    console.log(err)
  }
}

message.channel.send('Successfuly Deleted `' + rawdeleteNum + '` messages.').then(sentMessage => {
  setTimeout(async function () {
    sentMessage.delete()
  }, 7000)
});


}
}