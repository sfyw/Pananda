const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('Mute', 'moderation', []);
  }

  run(client, message, args) {
    
  }
}