let fetch = require('node-fetch') 
let handler = async function (m, { text, usedPrefix }) {
	await conn.sendButton(m.chat, `Terima Kasih ${'@'+m.sender.split`@`[0]} sudah menerima Rules  
Kami Harap kamu Tidak melanggarnya

Hormat kami  `, '  ', { 'button[0]': 'Menu', 'row[0]': '.menu' }, m, { mentions: [m.sender] })
 
  }

handler.command = /^(terima)$/i

module.exports = handler

