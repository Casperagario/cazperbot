let handler = async (m, { conn }) => {
  global.DATABASE.data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = false
handler.police = true

module.exports = handler
