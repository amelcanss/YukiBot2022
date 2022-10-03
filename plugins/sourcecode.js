let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
const detek = Math.floor( Kurang % (1000 * 60) / 1000)
await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/c4f267fe6ac16f6b82a4b.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://youtu.be/lDSHQvws9N0
│ *Tiktok :*  
│ ╰ https://www.tiktok.com/@raraharsita2/video/7144195854117637402
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih Like & Follow My Tiktok

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')

let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/subscribe.mp3`)
bzz = await res.buffer()
  conn.sendFile(m.chat, bzz, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Fory : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `${pickRandom(['Follow Tiktok My Bestie'])}`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://telegra.ph/file/8d216a35e2ac344d128f8.jpg')).buffer(),}} 
     })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler 
