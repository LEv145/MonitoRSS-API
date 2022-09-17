const { MessageVisual } = require('discord.js-prompts')
const LocalizedPrompt = require('../common/utils/LocalizedPrompt.js')
const Translator = require('../../../structs/Translator.js')

/**
 * @typedef {Object} Data
 * @property {import('../../../structs/db/Profile.js')} [profile]
 * @property {import('../../../structs/db/Feed.js')[]} feeds
 * @property {import('../../../structs/db/Feed.js')} [selectedFeed]
 * @property {number} targetEmbedIndex
 */

/**
 * @param {Data} data
 */
function resetEmbedSuccessVisual (data) {
  const { profile, selectedFeed: feed } = data
  const translate = Translator.createProfileTranslator(profile)

  return new MessageVisual(translate('commands.embed.removedEmbed', {
    link: feed.url
  }))
}

const prompt = new LocalizedPrompt(resetEmbedSuccessVisual)

exports.prompt = prompt
