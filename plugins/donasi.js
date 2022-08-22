let handler = async m => m.reply(`
╭─「 Donasi 」
│ •  [0838-2112-3163]
│ •  [trakteer.id/xlaw_xd]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
