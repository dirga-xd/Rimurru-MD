let handler = async m => m.reply(`
*Mau donasi bang?  Silahkan donasi seikhlasnya aja buat beli kuota😉*

╭─「 Donasi • Pulsa 」
│ • Telkomnyet [0812-8277-8090]
│ • Axis [0838-2112-3163]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [0838-2112-3163]
│ • https://trakteer.id/xlaw_xd
╰────Io
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
