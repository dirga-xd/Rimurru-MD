let handler = async m => m.reply(`
*Mau donasi bang?  Silahkan donasi seikhlasnya aja buat beli kuotaπ*

β­βγ Donasi β’ Pulsa γ
β β’ Telkomnyet [0812-8277-8090]
β β’ Axis [0838-2112-3163]
β°ββββ

β­βγ Donasi β’ Non Pulsa γ
β β’ OVO, Dana [0838-2112-3163]
β β’ https://trakteer.id/xlaw_xd
β°ββββIo
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
