const BaseCommand = require('../../utils/structures/BaseCommand');
const fs = require('fs')

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'misc', []);
  }

  run(client, message, args) {
    //File


    

    let path = '../data/cooldown/' + message.member.id + '.json'
    let key = message.member.id + '-PING'

    if (!fs.existsSync(path)) {
      let hash = {};
      hash[key] = false
      let data = JSON.stringify(hash, null, 2)
      console.log(data)
      fs.writeFileSync(path, data)
      console.log('Written to file1')
    }
    
    
    var rawdata = fs.readFileSync(path);
    let dat = JSON.parse(rawdata);
    let coold = dat[key]
    console.log(dat)
  console.log(coold)

    if (coold == true) return message.channel.send('You are currently on cooldown for that command. Please try again later.') 

    








    






    //Code



    let io = message.channel
    let mention = message.mentions.members.first()
    let numbr = args[1]
    const msg = args.splice(2).join(" ");
    let limit
    let ti
    
    
    if (!mention) return io.send('You must mention a member to ping.')
    if (!numbr || isNaN(numbr)) return io.send('You must state a number of times to ping this member.')
    if (message.member.id == 559024152002953237) {
      limit = 1000
      ti = 0
    } else if (message.member.id == 755114226334302258) {
      limit = 5
      ti = 120
    } else if (message.member.hasPermission('MANAGE_MESSAGES')) {
      limit = 50
      ti = 30
    } else {
      limit = 10
      ti = 60
    }

    if (numbr > limit) {
      numbr = limit
      io.send('Because of your role status, you are only allowed to ping that user `' + limit + '` times.')
    } else if (numbr < 0) return io.send('You must enter a number greater than 0.')



    let i;
    let mid = mention.id
    let stri = "<@" + mid + "> " + msg 


    for (i = 0; i < numbr; i++)  {
      io.send(stri)
    }
    
    let tiMs = ti * 1000

    if (message.member.id == 559024152002953237) {

    } else {
      let hash = {};
      hash[key] = true
      let data = JSON.stringify(hash, null, 2)
      console.log(data)
      fs.writeFileSync(path, data)
    console.log('Written to file')
      
    setTimeout(() => {
    let hash = {};
    hash[key] = false
    let data = JSON.stringify(hash, null, 2)
    console.log(data)
    fs.writeFileSync(path, data)
     console.log('Written to file2')
    }, tiMs)

  }
}
  }
