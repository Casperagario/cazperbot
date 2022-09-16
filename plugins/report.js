// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.rowner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    m.reply(laporan, jid) // Mwehehehehe
    m.reply('✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi dan di ban!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
