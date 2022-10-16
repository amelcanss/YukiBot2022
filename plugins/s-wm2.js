let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let flu = `${pickRandom(['https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
const detek = Math.floor( Kurang % (1000 * 60) / 1000)
await conn.sendButtonLoc(m.chat, await conn.resize(await (await fetch(flu + `${command}`)).buffer(), 300, 200),
`Hi Kak @${m.sender.split('@')[0]} 
 
┏━━━ꕥ〔 *SCRIPT BOT* 〕ꕥ━⬣
┃✾ 📮*Script :* 
┃✾ ╰ Ada digithub tapi gw private
┃✾ 📮*instagram :*  
┃✾ ╰ @riellxd_04
┗━━━━━━ꕥ
`,`📍 *N o t e :* 
• mau ngapain bamg?
• Jangan Lupa follow ig owber

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')

let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/subscribe.mp3`)
bzz = await res.buffer()
  conn.sendFile(m.chat, bzz, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Wahyu🤍 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `${pickRandom(['Follow Tiktok'])}`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler 
