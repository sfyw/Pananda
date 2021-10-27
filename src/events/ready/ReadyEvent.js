const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../../slappey.json')

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');

    client.user.setPresence(
      { activity: 
        { name: 'V' + config.version,
          type: "PLAYING"
      }
        , status: 'online' }
        )
  }
}