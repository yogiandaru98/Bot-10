/*

~ SC ORI BY MHANKBARBAR ~
DI UPDATE OLEH :

ADIT
FARID

SUBSCRIBE 🙃
YT : ItsMeMuzza
YT : Muzhaa

RECODE BOLEH AJA, ASAL JANGAN HAPUS NAMA KITA :)

REQUEST ? wa.me/6281231951590
ERROR ? wa.me/6281231951590

*/


//GANTI SEMUA DI SINI
namaowner = 'PIPI BOTZ' 
namabot = 'Pipi Bot' 
nomorbot = '6289643314604'//GANTI NOMOR BOT LOE
nomerowner = '62895417686677'//‼️❗‼️ GANTI SESUAI CONTOH!!
nomerowner2 = '62895416494640' //‼️❗‼️ GANTI SESUAI CONTOH!!
prefix = '.'
limitawal = "10"
gamewaktu = '30'
hargalimit = '500'
cr = '*PIPIBOT VERIFIED*'
fake = 'LAH, DI HAPUS'
fake1 = '*PIPI Bot*'
fake2 = '*YouTube : PIPI BOTZ*'
lolkey = ' BELI YA BANG :)'
zekskey = 'apivinz'
imgbg = 'https://i.ibb.co/tx5Dbhr/images.jpg'
sosmedowner = 'FOLLOW FB OWNER : PIPI BOT'
teksban = 'Maaf kamu sudah terbenned!'
tagown = 'PIPI BOTZ'

//DONASI //GANTI AJA
gopay = '089643314604'
pulsa = '089643314604'
ovo = '089643314604'
dana = 'Sedang Perbaikan.'
shopeepay = '-'























//WA CONNECTIION
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")

//PACKAGE NPM
const qrcode = require("qrcode-terminal")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                //MUZHAGENZ FARID GANZ AKOWOWOWOWOWOKKKK
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const ms = require('parse-ms')
const chalk = require('chalk')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const yts = require( 'yt-search')
const { yta, ytv } = require('./lib/ytdl')
const toMs = require('ms')
const request = require('request')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./database/bahasa')
const game = require('./lib/game')
const { addgambar, getJawabanTG, isTebakGambar, cekWaktuTG, getTGPosi } = require('./lib/game')
blocked = [] 
const ownerNumber = [`${nomerowner}@s.whatsapp.net`]   //JANGAN DI UBAH ATAU DI GANTI 
//VCARD NUMBER
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${namaowner}\n`
            + `ORG:ownernya ${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=${nomerowner}:${nomerowner2}\n` //JANGAN DI GANTI ATAU DI UBAH
            + 'END:VCARD'

//FILE JSON TEMP
const setiker = JSON.parse(fs.readFileSync('./database/storage/sticker.json'))
const videonye = JSON.parse(fs.readFileSync('./database/storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./database/storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/storage/image.json'))

//DATA JSON DATAUSER SRC DLL
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/prem.json'))
const adm = JSON.parse(fs.readFileSync('./database/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
let tebakgambar = [];
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

//LEVELING AND LIMIT FUNCTIONS AND OTHER
const getLevelingXp = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}
const getLevelingLevel = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}
const getLevelingId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].id
}
}
const addLevelingXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}
const addLevelingLevel = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}
const addLevelingId = (sender) => {
const obj = {id: sender, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
}
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}


const addATM = (sender) => {
const obj = {
id: sender, uang: 0
}
uang.push(obj)
fs.writeFileSync('./database/uang.json',
JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}
}

const checkATMuser = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

const bayarLimit = (sender, amount) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
}
}

const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}
}

const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
}
}

/******************* TIME ******************/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

/********** FUNCTION ***************/

async function starts() {
        	const farid = new WAConnection()
        	farid.version =  [2, 2143, 3]
	        farid.logger.level = 'warn'	        
        	farid.on('qr', () => {
        	console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('ItsMuzha','red'),color('X','lime'),color('Muzza','red'))
             })
	        fs.existsSync('./muzza.json') && farid.loadAuthInfo('./muzza.json')
	        farid.on('connecting', () => {
		    start('2', '50%')		   
        	})
	        farid.on('open', () => {	        
	    	success('2', '100%')
	    	console.log(chalk.bgHex('#FFDF00').underline(color('SUKSES TERSAMBUNG BOSQUEE!','black')))
  	  	console.log(chalk.bgHex('#FFDF00').underline(color('JANGAN LUPA FOLLOW & SUBSCRIBE','black')))
  	  	console.log(chalk.bgHex('#FFDF00').underline(color('YT : ItsMeMuzza','black')))
  	  	console.log(chalk.bgHex('#FFDF00').underline(color('IG : @farid.mhrdkaa','black')))
  	  	console.log(chalk.bgHex('#FFDF00').underline(color('BUG ATAU APA SILAHLAN CHAT 6281231951590','red')))
  	  	})         
            await farid.connect({timeoutMs: 30*1000})
            farid.sendMessage(`${nomerowner}@s.whatsapp.net`, `HAI OWNER!\n${namabot} TELAH ONLINE DENGAN PREFIX : ${prefix}\n\n「 TERIMAKASIH 」`, MessageType.extendedText)
            console.log(color('MENUNGGU PESAN MASUK :','silver'))
            fs.writeFileSync('./muzza.json', JSON.stringify(farid.base64EncodedAuthInfo(), null, '\t'))
//▬▭▬▭⸨ WELCOME ⸩▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

            farid.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await farid.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await farid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `    ❲ WELCOME ❳

*Hai @${num.split('@')[0]} 👋*

*SELAMAT DATANG DI GRUP*
${mdata.subject}

❀ *ɴᴀᴍᴀ* :
❀ *ᴜᴍᴜʀ* :
❀ *ɢᴇɴᴅᴇʀ* :
❀ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :

 ❲ *SEMOGA BETAH* ❳`
 
				let buff = await getBuffer(ppimg)
				farid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await farid.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					teks = `SELAMAT TINGGAL @${num.split('@')[0]} 🙉`
				let buff = await getBuffer(ppimg)
				farid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
      //-
	farid.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
      for (let i of json[1].blocklist) {
	blocked.push(i.replace('c.us','s.whatsapp.net'))
      }
	})
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
            farid.on('message-update', async (mek) => {
		try {
	      const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? farid.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(color(`╭─⸨ ANTI-DELETE ⸩─•\n│STATUS UNTUK GRUP : ${!isRevoke}\n│STATUS SEMUA KONTAK : ${!isCtRevoke}\n│STATUS KONTAK DIKECUALIKAN : ${!isBanCtRevoke}\n╰────•`,'green'))
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? farid.user.jid : farid.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? farid.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `   「 ANTI-DELETE 」

╭──────•
│- *NAMA :* ${pushname} 
│- *NOMER :* ${sender.replace('@s.whatsapp.net', '')}
│- *TIPE :* Text
│- *WAKTU :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
│- *TANGGAL :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
│- *PESAN :*
│ ${body ? body : '-'}
╰──────•`
				farid.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await farid.downloadAndSaveMediaMessage(int.data, `./database/antdel/sticker/${filename}`)
				const strConversation = `   「 ANTI-DELETE 」

╭──────•
│- *NAMA :* ${pushname} 
│- *NOMER :* ${sender.replace('@s.whatsapp.net', '')}
│- *TIPE :* Sticker
│- *WAKTU :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
│- *TANGGAL :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
│- *PESAN :*
│ ${body ? body : '-'}
╰──────•`
				const buff = fs.readFileSync(savedFilename)
				farid.sendMessage(from, strConversation, MessageType.text, opt4tag)
				farid.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await farid.downloadAndSaveMediaMessage(int.data, `./database/antdel/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `   「 ANTI-DELETE 」

╭──────•
│- *NAMA :* ${pushname} 
│- *NOMER :* ${sender.replace('@s.whatsapp.net', '')}
│- *TIPE :* Image
│- *WAKTU :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
│- *TANGGAL :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
│- *PESAN :* 
│ ${body ? body : '-'}
╰──────•`
				farid.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
//-----------//
      farid.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
		      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? 
			mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
                  const from = mek.key.remoteJid			
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = farid.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = farid.contacts[sender] != undefined ? farid.contacts[sender].vname || farid.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await farid.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
               	const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./database/image/Farid.jpeg') }, "title": `PIPI BOTZ`, "productImageCount": 9999 }, "businessOwnerJid": `0@s.whatsapp.net`}}}
	            const muz1 = {
                  key: {
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
	        	},
     		      message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./database/image/Farid.jpeg`)
					},
					"title": fake1,
					"description": fake2,
					"currencyCode": 'USD',
					"priceAmount1000": '9999999',
					"retailerId": fake1,
					"productImageCount": '9999999',
				     },
			    	"businessOwnerJid": `0@s.whatsapp.net`
	     	      }
            	}
            }
            mess = {
            wait: '*☐* Silahkan tunggu',
            success: '*☉* Berhasil',
            Public: '*☒* fitur dalam mode private sekarang hanya owner yang dapat menggunakan bot',
            ferr: 'Maaf sepertinya fitur sedang Error',
            limitend: 'Maaf limit kamu telah habis, silahkan lakukan pembelian ulang.',
            error: {
            stick: '*☒* Silakan ulangi beberapa saat lagi',
            Iv: '*☒* Link Error'
               },
            only: {
            group: '*☒* Fitur ini hanya untuk *GRUP*',
            ownerG: '*☒* Fitur ini hanya untuk *OWNER GRUP*',
            ownerB: '*☒* Fitur ini hanya untuk *OWNER BOT*',
            admin: '*☒* Fitur ini hanya untuk *ADMIN GRUP*',
            Badmin: '*☒* Jadikan bot *ADMIN !*'
            }
            }
/*-----------------------------------------------------[ SUBSCRIBE PIPI BOT ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SUBSCRIBE PIPI BOT ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SUBSCRIBE PIPI BOT ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SUBSCRIBE PIPI BOT ]--------------------------------------------------------------*/    

            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegister = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
                  const itsMe = sender == botNumber ? true : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			function monospace(string) {
                   return '```' + string + '```'
                    }   
                   function randomNomor(angka){
                   return Math.floor(Math.random() * angka) + 1
                   }
                   
                   const reply = (teks) => {
				farid.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				farid.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? farid.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    farid.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			farid.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    farid.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	         async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return farid.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
          
 /*****************END SCURITY FEATURE ********/
			
            const sotoy = [
            '🍊 : 🍒 : 🍐',
            '🍒 : 🔔 : 🍊',
            '🍇 : 🍇 : 🍇',
            '🍊 : 🍋 : 🔔',
            '🔔 : 🍒 : 🍐',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍋 : 🔔',		
            '🍐 : 🍒 : 🍋',
            '🍐 : 🍐 : 🍐',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍒 : 🔔',
            '🍐 : 🔔 : 🔔',
            '🍊 : 🍋 : 🍒',
            '🍋 : 🍋 : 🍌',
            '🔔 : 🔔 : 🍇',
            '🔔 : 🍐 : 🍇',
            '🔔 : 🔔 : 🔔',
            '🍒 : 🍒 : 🍒',
            '🍌 : 🍌 : 🍌',
            ]
			let gambar = "" || fs.readFileSync('./database/image/Farid.jpeg')
			const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const batuu = ['1','2','3','4','5','6','7','8','9','10']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
			const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]                     
            //CASE BY DAPPAUHUY JAN DI BULLY KAK GW CUMAN COPAS :'(
            //WAKTU BUAT FAKEREPLY:'(
            	var date = new Date(); //BY DAPPAUHUY GW CUMAN COPAS KAK JAN DI BULLY:'(
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilBulan = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
            var ase = new Date();
            var waktoonyabro = ase.getHours();
            switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
            var asu = `${limitawal}`
            //-
			//FAKE REPLY.                     
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/png", "caption": `${YahahaHayyuk}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/image/Farid.jpeg')} } }
            const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${YahahaHayyuk}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${YahahaHayyuk},;;;\nFN:${YahahaHayyuk},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./database/image/Farid.jpeg')}}}
		Barss = getLevelingLevel(sender)
		bars = `[▒▒▒▒▒▒▒▒▒]`
		if (Barss <= 10) {
				bars = `[█▒▒▒▒▒▒▒▒]`
		} else if (Barss <= 20) {
				bars = `[██▒▒▒▒▒▒▒]`
		} else if (Barss <= 30) {
				bars = `[███▒▒▒▒▒▒]`
		} else if (Barss <= 40) {
				bars = `[████▒▒▒▒▒]`
		} else if (Barss <= 50) {
				bars = `[█████▒▒▒▒]`
		} else if (Barss <= 60) {
				bars = `[██████▒▒▒]`
		} else if (Barss <= 70) {
				bars = `[███████▒▒]`
		} else if (Barss <= 80) {
				bars = `[████████▒]`
		} else if (Barss <= 90) {
				bars = `[█████████]`
		} else if (Barss <= 100) {
				bars = `[█████████]`
		} else if (Barss <= 110) {
				bars = `[█████████]+1*`
		} else if (Barss <= 120) {
				bars = `[█████████]+2*`
		} else if (Barss <= 130) {
				bars = `[█████████]+3*`
		} else if (Barss <= 140) {
				bars = `[█████████]+4*`
		} else if (Barss <= 150) {
				bars = `[█████████]+5*`
		} else if (Barss <= 160) {
				bars = `[█████████]+6*`
		} else if (Barss <= 170) {
				bars = `[█████████]+7*`
		} else if (Barss <= 180) {
				bars = `[█████████]+8*`
		} else if (Barss <= 190) {
				bars = `[█████████]+9*`
        } else if (Barss <= 110) {
				bars = `[█████████]+10*`
        } else if (Barss <= 99999999999999) {
				bars = `[█████████]+上帝*`
        }
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole <= 100) {
            role = 'Exterminator'

           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPrem) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
//funtion nobadword
if (isGroup && isBadWord) {
if (bad.includes(messagesC)) {
if (!isGroupAdmins) {
return reply("JAGA UCAPAN DONG!! 😠")
.then(() => farid.groupRemove(from, sender))
.then(() => {
farid.sendMessage(from, `*「 ANTI BADWORD 」*\nAra akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
}).catch(() => farid.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
} else {
return reply( "Tolong Jaga Ucapan Min 😇")
}
}
}
			
if (isGroup && isRegister && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 100
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bayarLimit(sender, 3)
await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
}
} catch (err) {
console.error(err)
}
}
game.cekWaktuTG(farid, tebakgambar)
//----limit
const isLimit = (sender) => {
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal) {
position = true
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = {
id: sender,
limit: 1
}
_limit.push(obj)
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
return false
}
}

//--check limit user
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return farid.sendMessage(from, `Maaf limit kamu telah habis, silahkan lakukan pembelian ulang`, text,{ quoted: mek})
farid.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 1 }
_limit.push(obj)
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
farid.sendMessage(from, `〘  *LIMIT* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
}
}

//--Balance
if (isRegister && isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}
if (budy.startsWith("> ")){
if(!isOwner) return
console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (game.isTebakGambar(from, tebakgambar) && isRegister){
            if (budy.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
            var Farid = randomNomor(100)
            addLevelingXp(sender, Farid)
            await reply(`*Selamat Jawaban Kamu Benar✔*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* +${Farid}XP`)
            tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)            
            } else {
            reply('```❗SALAH❗```')
            }
            }
            if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return
		farid.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`❗❲ *LINK GROUP DETECTED* ❳❗\n\n HAI ${sender.split("@")[0]} KAMU MELANGGAR PERATURAN GRUP!!\n TERPAKSA ANDA AKAN HILANG DARI GRUP INI 🤡`)
	      farid.groupRemove(from, [kic]).catch((e)=>{reply(`*ERROR :* ${e}`)})
            }
                  //kolor bapakmu :v
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
  switch(command) {
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
 case '$':
				if (!isOwner) return
try {
console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
				const cmd = body.slice(2)
				var itsme = `${tescuk}`
				var split = `*EXECUTOR*`
				const term = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				exec(cmd, (err, stdout) => {
					if (err) return farid.sendMessage(from, `EXEC ${err}`, text, { quoted: mek })
					if (stdout) {
						farid.sendMessage(from, stdout, text, term)
					}
				})
			} catch (e) {
reply(`${e}`)
}
	break
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
case 'listsurah':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)
				reply(ind.wait())
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = 'List Surah:\n'
       for (var x in get_result) {
           ini_txt += `${x}. ${get_result[x]}\n`
       }
       reply(ini_txt)
       break
   case 'alquran':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)
				reply(ind.wait())
       if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
       urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
       quran = await fetchJson(urls)
       result = quran.result
       ayat = result.ayat
       ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
       for (var x of ayat) {
           arab = x.arab
           nomor = x.ayat
           latin = x.latin
           indo = x.indonesia
           ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
       }
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       reply(ini_txt)
       break
   case 'alquranaudio':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)
				reply(ind.wait())
       if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
       surah = args[0]
       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
       farid.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
       break
   case 'asmaulhusna':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)
				reply(ind.wait())
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `No : ${get_result.index}\n`
       ini_txt += `Latin: ${get_result.latin}\n`
       ini_txt += `Arab : ${get_result.ar}\n`
       ini_txt += `Indonesia : ${get_result.id}\n`
       ini_txt += `English : ${get_result.en}`
       reply(ini_txt)
       break
   case 'kisahnabi':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)
				reply(ind.wait())
       if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Name : ${get_result.name}\n`
       ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
       ini_txt += `Umur : ${get_result.age}\n`
       ini_txt += `Tempat : ${get_result.place}\n`
       ini_txt += `Story : \n${get_result.story}`
       reply(ini_txt)
       break

case 'jadwalsholat':
                    if (!isRegister) return reply(ind.noregis())
		        if (isBanned) return reply(teksban)	
				reply(ind.wait())
      try {
        if (args.length == 0) return reply(`Example: ${prefix + command} Pasuruan`)
       daerah = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Wilayah : ${get_result.wilayah}\n`
       ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
       ini_txt += `Sahur : ${get_result.sahur}\n`
       ini_txt += `Imsak : ${get_result.imsak}\n`
       ini_txt += `Subuh : ${get_result.subuh}\n`
       ini_txt += `Terbit : ${get_result.terbit}\n`
       ini_txt += `Dhuha : ${get_result.dhuha}\n`
       ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
       ini_txt += `Ashar : ${get_result.ashar}\n`
       ini_txt += `Maghrib : ${get_result.maghrib}\n`
       ini_txt += `Isya : ${get_result.isya}`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break

case 'niatsholat':
//「‼️」BY FARID
if (!isRegister) return reply(ind.noregis())
if (isBanned) return reply(teksban)
try {
if (args.length < 1) return reply(`EXAMPLE : ${prefix + command} dzuhur`)
yy = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${q}?apikey=${lolkey}`)
rr = yy.result
reply(`──「 NIAT SHOLAT 」──

*TITLE :* ${rr.name}
───
*ARAB :* ${rr.ar}
───
*LATIN :* ${rr.latin}
───
*INDO :* ${rr.id}`)
} catch (e) {reply('```ERROR! MUNGKIN JUDUL TIDAK DI TEMUKAN```')}
break
//▬▭▬▭⸨⸩▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
case 'd':
case 'del':
case 'delete':
farid.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
.else
break				
		case 'mutual':
                 if (!isRegister) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		
case 'ceklimit':
if (!isRegister) return reply(ind.noregis)
checkLimit(sender)
break

//---cek saldo user
case 'ceksaldo':
if (!isRegister) return reply(ind.noregis)
uangkau = checkATMuser(sender)
hasil = `〘 *ATM* 〙
╭───────────────•
│•*Nama* : *${pushname}*
│•*Saldo* : *Rp.${uangkau}.-*
│•*Nomor* : *${sender.split("@")[0]}*
╰───────────────•`
reply(hasil)
break
case 'addbadword':

                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'gets':
                    var itsme = `0@s.whatsapp.net`
                    var split = `${cr}`
                    var selepbot = {
                    contextInfo: {
                    participant: itsme,
                    quotedMessage: {
                    extendedTextMessage: {
                    text: split,
                    }
                    }
                    }
                    }
                    namastc = body.slice(6)
                    try {
                    result = fs.readFileSync(`./database/storage/sticker/${namastc}.webp`)
                    farid.sendMessage(from, result, sticker, selepbot)
                    } catch {
                    reply('Pack tidak terdaftar')
                    }
                    break
                    case 'getstik':
                    var itsme = `0@s.whatsapp.net`
                    var split = `${cr}`
                    var selepbot = {
                    contextInfo: {
                    participant: itsme,
                    quotedMessage: {
                    extendedTextMessage: {
                    text: split,
                    }
                    }
                    }
                    }
                    namastc = body.slice(9)
                    try {
                    result = fs.readFileSync(`./database/storage/sticker/${namastc}.webp`)
                    farid.sendMessage(from, result, sticker, selepbot)
                    } catch {
                    reply('Pack tidak terdaftar')
                    }
                    break
                    case 'liststik':
                    teks = '*Sticker list :*\n\n'
                    for (let awokwkwk of setiker) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}getstik (nama pack)*\nuntuk mengambil stiker`
                    farid.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
                    break
                    case 'addstik':
                    if (!isQuotedSticker) return reply('Reply stiker nya')
                    if (!isOwner) return reply(mess.only.ownerB)
                    svst = body.slice(9)
                    if (!svst) return reply('Nama sticker nya apa?')
                    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await farid.downloadMediaMessage(boij)
                    setiker.push(`${svst}`)
                    fs.writeFileSync(`./database/storage/sticker/${svst}.webp`, delb)
                    fs.writeFileSync('./database/storage/sticker.json', JSON.stringify(setiker))
                    farid.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
                    break
                    case 'addvn':
                    if (!isQuotedAudio) return reply('Reply vnnya')
                    if (!isOwner) return reply(mess.only.ownerB)
                    svst = body.slice(7)
                    if (!svst) return reply('Nama audionya apa')
                    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await farid.downloadMediaMessage(boij)
                    audionye.push(`${svst}`)
                    fs.writeFileSync(`./database/storage/audio/${svst}.mp3`, delb)
                    fs.writeFileSync('./database/storage/audio.json', JSON.stringify(audionye))
                    farid.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
                    break
                    case 'getvn':
                    namastc = body.slice(7)
                    try {
                    buffer = fs.readFileSync(`./database/storage/audio/${namastc}.mp3`)
                    farid.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
                    } catch {
                    reply('Pack tidak terdaftar')
                    }
                    break
                    case 'listvn':
                    case 'vnlist':
                    teks = '*List Vn:*\n\n'
                    for (let awokwkwk of audionye) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${audionye.length}*\nGunakan perintah\n*${prefix}getvn (nama pack)*\nuntuk mengambil vn`
                    farid.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
                    break
                    case 'addimg':
                    if (!isQuotedImage) return reply('Reply imagenya')
                    if (!isOwner) return reply(mess.only.ownerB)
                    svst = body.slice(8)
                    if (!svst) return reply('Nama imagenya apa')
                    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await farid.downloadMediaMessage(boij)
                    imagenye.push(`${svst}`)
                    fs.writeFileSync(`./database/storage/image/${svst}.jpeg`, delb)
                    fs.writeFileSync('./database/storage/image.json', JSON.stringify(imagenye))
                    farid.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
                    break
                    case 'getimg':
                    namastc = body.slice(8)
                    try {
                    buffer = fs.readFileSync(`./database/storage/image/${namastc}.jpeg`)
                    farid.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
                    } catch {
                    reply('Pack tidak terdaftar')
                    }
                    break
                    case 'listimg':
                    teks = '*List Image :*\n\n'
                    for (let awokwkwk of imagenye) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${imagenye.length}*\nGunakan perintah\n*${prefix}getimg (nama pack)*\nuntuk mengambil gambar`
                    farid.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
                    break
                    case 'addvid':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (!isQuotedVideo) return reply('Reply videonya')
                    svst = body.slice(8)
                    if (!svst) return reply('Nama videonya')
                    boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await farid.downloadMediaMessage(boij)
                    videonye.push(`${svst}`)
                    fs.writeFileSync(`./database/storage/video/${svst}.mp4`, delb)
                    fs.writeFileSync('./database/storage/video.json', JSON.stringify(videonye))
                    farid.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`, MessageType.text, { quoted: mek })
                    break
                    case 'getvid':
                    namastc = body.slice(8)
                    try {
                    buffer = fs.readFileSync(`./database/storage/video/${namastc}.mp4`)
                    farid.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
                    } catch {
                    reply('Pack tidak terdaftar')
                    }
                    break
                    case 'listvid':
                    teks = '*List Video :*\n\n'
                    for (let awokwkwk of videonye) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${videonye.length}*\nGunakan perintah\n*${prefix}getvid (nama pack)*\nuntuk mengambil video`
                    farid.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
                    break
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		
                  case 'nobadword':
                  if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(ind.satukos(prefix, command))
                if (args[0] === 'on') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'off') {
                          var ini = badword.indexOf(from)
                  	  badword.splice(ini, 1)
                 	   fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos(prefix, command))
                	}
                    break
              case 'soundplaydate':
				
                 if (!isRegister) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				let BOTOPERATORmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				farid.sendMessage(from, BOTOPERATORmy, MessageType.audio, { quoted: mek, ptt: true })
				await limitAdd(sender)
				break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				farid.updatePresence(from, Presence.composing) 
				
                 if (!isRegister) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break
                case 'addprem':  
                    
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
                     
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
             case 'slot2': //Case by ItsMuzha
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            farid.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
            case 'slot':  //case by rimuru/nayla 
		     	 slot = `╭───────────────────────────\n`
		      slot += `│  ╭─────────[ *SLOT* ]─────────\n`
			slot += `│  │➻ ${slot11} │ ${slot22} │ ${slot33}\n`
			slot += `│  │➻ ${slot44} │ ${slot55} │ ${slot66} <===\n`
		      slot += `│  │➻ ${slot77} │ ${slot88} │ ${slot99}\n`		 
			slot += `│  ╰─────────────────────────\n`
			slot += `╰───────────────────────────\n`
			farid.sendMessage(from, slot, text, {quoted: mek})
		    break
                case 'premiumlist':
				farid.updatePresence(from, Presence.composing) 
				
                 if (!isRegister) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
case 'buylimit':
if (args.length < 1) return reply(`Berapa limit yang mau di beli? Pastikan saldo ATM cukup juga! \n\nCara cek saldo : ${prefix}Ceksaldo`)
                 if (!isRegister) return reply( ind.noregis())
				if (isBanned) return reply(teksban)
payout = body.slice(10)
const koinPerlimit = hargalimit
const total = koinPerlimit * payout
if (checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (checkATMuser(sender) >= total) {
confirmATM(sender, total)
bayarLimit(sender, payout)
await reply(`〘 *NOTA PEMBAYARAN* 〙\n\n‣ *Pengirim* : Admin\n‣ *Penerima* : ${pushname}\n‣ *Nominal pembelian* : ${body.slice(10)} \n‣ *Harga limit* : ${koinPerlimit}/limit\n‣ *Sisa saldo* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran \n${createSerial(15)}`)
}
break

//--transfer
case 'transfer':
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
if (args.length < 1) return reply(`Silahkan ulangi dengan
*${prefix}Transfer Tag target|Jumlah transfer*`)
if (!q.includes('|')) return  reply('Maaf format teks salah')
const tujuan = q.substring(0, q.indexOf('|') - 1)
const jumlah = q.substring(q.lastIndexOf('|') + 1)
if (isNaN(jumlah)) return await reply('Jangan tambahan tanda apapun !')
if (jumlah < 5000) return reply(`minimal transfer Rp.5000`)
if (checkATMuser(sender) <= jumlah) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan transfer lagi nanti`)
if (checkATMuser(sender) >= jumlah) {
const tujuantf = `${tujuan.replace("", '')}@s.whatsapp.net`
fee = 0.005 *jumlah
hasiltf = jumlah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumlah)
addKoinUser('6289643314604@s.whatsapp.net', fee)
await reply(`〘  *TRANSFER*  〙
Pengiriman saldo telah sukses
‣ *Dari* : ${sender.split("@")[0]}
‣ *Ke* : ${tujuan}
‣ *Jumlah transfer* : Rp.${jumlah},-
‣ *Biaya admin* : Rp.${fee},-`)
}

break
                case 'banlist':
                 if (!isRegister) return reply( ind.noregis())
				if (isBanned) return reply(teksban)
				farid.updatePresence(from, Presence.composing) 
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
                 if (!isRegister) return reply( ind.noregis())
				if (isBanned) return reply(teksban)
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':				
                 if (!isRegister) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply(teksban)
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break

		case 'limit':				
                 if (!isRegister) return reply( ind.noregis())
				if (isBanned) return reply(teksban)
				checkLimit(sender)
				break
                              case 'setnamaowner':
		             	if (!isOwner) return reply(ind.ownerb())
					farid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					namaowner = body.slice(14)
					reply(`nama owner berhasil di ubah menjadi : ${namaowner}`)
				      await sleep(5000)
                              break 
                              case 'setnamabot':
		             	if (!isOwner) return reply(ind.ownerb())
					farid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					namabot = body.slice(12)
					reply(`nama bot berhasil di ubah menjadi : ${namabot}`)
				break 
                              case 'setthumb':
					case 'setthum':
					if (!isOwner) return
	       			boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
       				delb = await farid.downloadMediaMessage(boij)
	       			fs.writeFileSync('./database/image/Farid.jpeg', delb)
		        		matanecok = fs.readFileSync('./database/image/Farid.jpeg')
        				reply(`Sukses`)
	       			break      
                              case 'setthumb2':
					case 'setthum2':
					if (!isOwner) return
	       			boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
       				delb = await farid.downloadMediaMessage(boij)
	       			fs.writeFileSync('./database/image/gambar.jpeg', delb)
		        		matanecok = fs.readFileSync('./database/image/gambar.jpeg')
        				reply(`Sukses`)
	       			break      
                        case 'setsticktag':
             		if (!isOwner) return
			    	if (!isQuotedSticker) return reply('REPLY STICKERNYA OWNERKUUU')
	      	      boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await farid.downloadMediaMessage(boij)
		 	    	fs.writeFileSync(`./database/image/tagbot.webp`, delb)
                         reply ('SUKSES')
                         break
                              case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					farid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
	       			break 
	                      	case 'setreplyy':
	          			if (!isAdmin) return reply('*Only Admin bot*')
					farid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
				      break 
	                       	case 'grouplist':					
                              if (!isRegister) return reply( ind.noregis())
					farid.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group Ara :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
		//daftar 
case 'verify':
case 'daftar':
case 'register':
if (isRegister) return reply('```Akun Kamu Sudah Terverfikasi```')
veri = sender
if (isGroup) {
const namaUser = `${pushname}`
const serialUser = createSerial(10)
addRegisteredUser(sender, namaUser, time, serialUser)
hasil = ` 〘 *VERIFIKASI SUKSES* 〙


• *NAMA :* ${namaUser}
• *NOMOR :* ${sender.split("@")[0]}
• *SERIAL :* ${serialUser}
• *WAKTU VERIFIKASI :* ${time}

      「 *TERIMAKASIH* 」`
farid.sendMessage(from, hasil, text, {quoted: ftoko})
console.log(color('❲ VERIFIKASI ❳'), '\nTIME : ', color(time, 'yellow'), '\nNAME : ', color(namaUser, 'cyan'), '\nSERIAL : ', color(serialUser, 'cyan'), '\nDI GRUP : ', color(sender || groupName))
} else {
const namaUser = `${pushname}`
const serialUser = createSerial(10)
addRegisteredUser(sender, namaUser, time, serialUser)
hasil = ` 〘 *VERIFIKASI SUKSES* 〙


• *NAMA :* ${namaUser}
• *NOMOR :* ${sender.split("@")[0]}
• *SERIAL :* ${serialUser}
• *WAKTU VERIFIKASI :* ${time}

      「 *TERIMAKASIH* 」`
farid.sendMessage(from, hasil, text, {quoted: ftoko})
console.log(color('❲ VERIFIKASI ❳'), '\nTIME : ', color(time, 'yellow'), '\nNAME : ', color(namaUser, 'cyan'), '\nSERIAL : ', color(serialUser, 'cyan'))
}
break


	                   	case 'berburu':					
                              if (!isRegister) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
			       	if (isBanned) return reply(teksban)
	                        if (isOwner | isAdmin | isPrem) {
					const Xp = Math.ceil(Math.random() * 999)
					addLevelingXp(sender, Xp)
					const Money = Math.ceil(Math.random() * 999)
					addKoinUser(sender, Money)
					await reply(`*Anda Mendapatkan ${buruh33}\nUang ${Money}\nXp : ${Xp}*`)
                         	} else {
					const Moneyy = Math.ceil(Math.random() * 999)
					addKoinUser(sender, Moneyy)
					const onee = Math.ceil(Math.random() * 999)
					addLevelingXp(sender, onee)
					await reply(`*Anda Mendapatkan ${buruh33}\nUang ${Moneyy}\nXp : ${onee}*`)
					}
					await limitAdd(sender)
					break
	                   	case 'speed5':
	                   	case 'ping3':					
                              if (!isRegister) return reply( ind.noregis())
					await farid.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
case 'menu':
case 'help':
if (isBanned) return reply(teksban)
if (!isRegister) return reply(ind.noregis())
reply(`*MENAMPILKAN MENU..*`)
uptime = process.uptime()
teks = `${kyun(uptime)}`
userXpp = getLevelingXp(sender)
getLevell = getLevelingLevel(sender)
uanglu = checkATMuser(sender)
var itsme = `${tescuk}`
var split = `${cr}`
wew = fs.readFileSync(`./database/image/Farid.jpeg`)
// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
const bruhhhh = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
muz = `
*${YahahaHayyuk}*

╭──❲ INFO BOT ❳
│◨ *NAMA :* ${namabot}
│◨ *LINK :* wa.me/${nomorbot}
│◨ *USER TEREGISTRASI :* ${_registered.length}
│◨ *HARI :* ${tampilBulan}
│◨ *JAM :* ${tampilJam}
│◨ *PREFIX :* 「 ${prefix} 」
│◨ *OWNER :* ${namaowner}
╰──❲ *${namabot}* ❳───⊱

╭──❲ INFO PENGGUNA ❳
│◨ *NAMA :* ${pushname}
│◨ *NOMER :* wa.me/${sender.split("@")[0]}
│◨ *RANK :* ${role}
│◨ *BARS :* ${bars}
│◨ *UANG :* ${uanglu}
│◨ *LEVEL :* ${getLevell}
│◨ *XP :* ${userXpp}
╰──❲ *${namabot}* ❳───⊱

╭──❲ *LIST MENU* ❳
\`\`\`│◨ ${prefix}groupmenu
│◨ ${prefix}ownermenu
│◨ ${prefix}nsfwmenu
│◨ ${prefix}makermenu
│◨ ${prefix}othermenu
│◨ ${prefix}downloadmenu
│◨ ${prefix}stalkmenu
│◨ ${prefix}soundmenu
│◨ ${prefix}stickermenu
│◨ ${prefix}premiummenu
│◨ ${prefix}funmenu
│◨ ${prefix}menucek
│◨ ${prefix}menuislam\`\`\`
╰──❲ *${namabot}* ❳───⊱

╭──❲ TQTO ❳
│◨ *MhmdAfifi* ❲ORI❳
│◨ *PipiGanz* ❲AUTHOR❳
│◨ *PipiCoeg* ❲AUTHOR❳
│◨ *${namaowner}* ❲OWNER❳
│◨ *PenyediaApikey*
╰─❲ *${namabot}* ❳`
//DAH ADA NAMA LU!!
//JADI JANGAN DI UBAH TQTONYA!!
farid.sendMessage(from, wew, image, {thumbnail:fs.readFileSync('./database/image/gambar.jpeg'), quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./database/image/Farid.jpeg') }, 'title': `⊳ PIPI BOTZ ⊲`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}, caption: muz})
break
case 'menucek':
case 'cekmenu':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
parit =`
\`\`\`╭──❲ MENU CEK ❳
│• ${prefix} CEK GAKJELAS
│• ${prefix} CEK MALES
│• ${prefix} CEK PELIT
│• ${prefix} CEK BAIK
│• ${prefix} CEK AROGAN
│• ${prefix} CEK MANDUL
│• ${prefix} CEK GALAK
│• ${prefix} CEK SABAR
│• ${prefix} CEK LEBUS
│• ${prefix} CEK IKHLAS
│• ${prefix} CEK LUCU
│• ${prefix} CEK GOBLOK
│• ${prefix} CEK GILA
│• ${prefix} CEK TOLLOL
│• ${prefix} CEK GANTENG
│• ${prefix} CEK CANTIK
│• ${prefix} CEK MANIS
│• ${prefix} CEK JELEK
│• ${prefix} CEK CUPU
│• ${prefix} CEK SKILL
│• ${prefix} CEK GAY
│• ${prefix} CEK CUPU
│• ${prefix} CEK LESBI
│• ${prefix} CEK NAFSU
│• ${prefix} CEK SANGE
│• ${prefix} CEK ALAY
│• ${prefix} CEK BANCI
│• ${prefix} CEK TOMBOI
│• ${prefix} CEK PEKA
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, parit, text, { quoted: freply})
break
case 'islammenu':
case 'menuislam':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ ISLAM ❳
│• ${prefix}alquran
│• ${prefix}jadwalsholat
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi
│• ${prefix}alquranaudio
│• ${prefix}listsurah
│• ${prefix}niatsholat
╰─────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'groupmenu':
case 'menugroup':
case 'grupmenu':
case 'grubmenu':
case 'menugrup':
case 'menugrub':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ GROUP MENU ❳
│•${prefix}promote [@tag]
│•${prefix}demote [@tag]
│•${prefix}tagall
│•${prefix}wakillist
│•${prefix}premiumlist
│•${prefix}banlist
│•${prefix}blocklist
│•${prefix}linkgc
│•${prefix}hidetag
│•${prefix}grouplist
│•${prefix}add [62]
│•${prefix}kick [@tag]
│•${prefix}setname
│•${prefix}setdesc
│•${prefix}setpp
│•${prefix}listadmin
│•${prefix}linkgc
│•${prefix}leave
│•${prefix}level
│      
│•${prefix}grup [buka/tutup)
│•${prefix}welcome ON/OFF
│•${prefix}nsfw ON/OFF
│•${prefix}antilink ON/OFF
│•${prefix}leveling ON/OFF
│•${prefix}nobadword ON/OFF
│•${prefix}simih ON/OFF
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'ownermenu':
case 'menuowner':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ OWNER MENU ❳
│• >
│• ${prefix}$
│•${prefix}nobadword
│•${prefix}addbadword
│•${prefix}delbadword
│•${prefix}bc
│•${prefix}bcgc
│•${prefix}setreply
│•${prefix}setprefix
│•${prefix}clearall
│•${prefix}block
│•${prefix}unblock
│•${prefix}leave
│•${prefix}event ON/OFF
│•${prefix}antidelete aktif/mati
│•${prefix}antidelete ctaktif/ctmati
│•${prefix}antidelete banct 628XX
│•${prefix}clone
│•${prefix}setppbot
│•${prefix}sethargalimit
│•${prefix}setnamaowner
│•${prefix}setnamabot
│•${prefix}setwaktugametb
│•${prefix}setthumb
│•${prefix}setthumb2
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'nsfwmenu':
case 'menunsfw':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
if (!isNsfw) return reply('```AKTIFKAN MODE NSFW!!```')
lzain = `
\`\`\`╭──❲ RANDOM MENU ❳
│•${prefix}waifu
│•${prefix}husbu
│•${prefix}loli
│•${prefix}elf
│•${prefix}art
│•${prefix}bts
│•${prefix}exo
│•${prefix}neko
│•${prefix}shota
│•${prefix}husbu
│•${prefix}sagiri
│•${prefix}shinobu
│•${prefix}megumin
│•${prefix}wallnime
│•${prefix}chiisaihentai
│•${prefix}trap
│•${prefix}blowjob
│•${prefix}yaoi
│•${prefix}ecchi
│•${prefix}hentai
│•${prefix}ahegao
│•${prefix}hololewd
│•${prefix}sideoppai
│•${prefix}animefeets
│•${prefix}animebooty
│•${prefix}animethighss
│•${prefix}hentaiparadise
│•${prefix}animearmpits
│•${prefix}hentaifemdom
│•${prefix}lewdanimegirls
│•${prefix}biganimetiddies
│•${prefix}animebellybutton
│•${prefix}hentai4everyone
│•${prefix}bj
│•${prefix}ero
│•${prefix}cum
│•${prefix}feet
│•${prefix}yuri
│•${prefix}trap
│•${prefix}lewd
│•${prefix}feed
│•${prefix}eron
│•${prefix}solo
│•${prefix}gasm
│•${prefix}poke
│•${prefix}anal
│•${prefix}holo
│•${prefix}tits
│•${prefix}kuni
│•${prefix}kiss
│•${prefix}erok
│•${prefix}smug
│•${prefix}baka
│•${prefix}solog
│•${prefix}feetg
│•${prefix}lewdk
│•${prefix}pussy
│•${prefix}femdom
│•${prefix}cuddle
│•${prefix}hentai
│•${prefix}eroyuri
│•${prefix}cum_jpg
│•${prefix}blowjob
│•${prefix}erofeet
│•${prefix}holoero
│•${prefix}classic
│•${prefix}erokemo
│•${prefix}fox_girl
│•${prefix}futanari
│•${prefix}lewdkemo
│•${prefix}wallpaper
│•${prefix}pussy_jpg
│•${prefix}kemonomimi
│•${prefix}nsfw_avatar
│•${prefix}ngif
│•${prefix}nsfw_neko_gif
│•${prefix}random_hentai_gif
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'makermenu':
case 'menumaker':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ TEXT PRO ME ❳
│•${prefix}blackpink text
│•${prefix}neon text
│•${prefix}greenneon text
│•${prefix}advanceglow text
│•${prefix}futureneon text
│•${prefix}sandwriting text
│•${prefix}sandsummer text
│•${prefix}sandengraved text
│•${prefix}metaldark text
│•${prefix}neonlight text
│•${prefix}text1917 text
│•${prefix}minion text
│•${prefix}deluxesilver text
│•${prefix}newyearcard text
│•${prefix}bloodfrosted text
│•${prefix}halloween text
│•${prefix}jokerlogo text
│•${prefix}fireworksparkle text
│•${prefix}natureleaves text
│•${prefix}bokeh text
│•${prefix}toxic text
│•${prefix}strawberry text
│•${prefix}box3d text
│•${prefix}roadwarning text
│•${prefix}breakwall text
│•${prefix}icecold text
│•${prefix}luxury text
│•${prefix}cloud text
│•${prefix}summersand text
│•${prefix}horrorblood text
│•${prefix}pornhub text1 text2
│•${prefix}glitch text1 text2
│•${prefix}avenger text1 text2
│•${prefix}space text1 text2
│•${prefix}ninjalogo text1 text2
│•${prefix}marvelstudio text1 text2
│•${prefix}lionlogo text1 text2
│•${prefix}wolflogo text1 text2
│•${prefix}steel3d text1 text2
│•${prefix}wallgravity text1 text2
╰────────────────⊱

╭──❲ PHOTOT OXY ❳
│•${prefix}tahta text
│•${prefix}shadow text
│•${prefix}cup text
│•${prefix}cup1 text
│•${prefix}romance text
│•${prefix}smoke text
│•${prefix}burnpaper text
│•${prefix}lovemessage text
│•${prefix}undergrass text
│•${prefix}love text
│•${prefix}coffe text
│•${prefix}woodheart text
│•${prefix}woodenboard text
│•${prefix}summer3d text
│•${prefix}wolfmetal text
│•${prefix}nature3d text
│•${prefix}underwater text
│•${prefix}golderrose text
│•${prefix}summernature text
│•${prefix}letterleaves text
│•${prefix}glowingneon text
│•${prefix}fallleaves text
│•${prefix}flamming text
│•${prefix}harrypotter text
│•${prefix}carvedwood text
│•${prefix}tiktok text1 text2
│•${prefix}arcade8bit text1 text2
│•${prefix}battlefield4 text1 text2
│•${prefix}pubg text1 text2
╰────────────────⊱

╭──❲ EPHOTO 360 ❳
│•${prefix}wetglass text
│•${prefix}multicolor3d text
│•${prefix}watercolor text
│•${prefix}luxurygold text
│•${prefix}galaxywallpaper text
│•${prefix}lighttext text
│•${prefix}beautifulflower text
│•${prefix}puppycute text
│•${prefix}royaltext text
│•${prefix}heartshaped text
│•${prefix}birthdaycake text
│•${prefix}galaxystyle text
│•${prefix}hologram3d text
│•${prefix}greenneon text
│•${prefix}glossychrome text
│•${prefix}greenbush text
│•${prefix}metallogo text
│•${prefix}noeltext text
│•${prefix}glittergold text
│•${prefix}textcake text
│•${prefix}starsnight text
│•${prefix}wooden3d text
│•${prefix}textbyname text
│•${prefix}writegalacy text
│•${prefix}galaxybat text
│•${prefix}snow3d text
│•${prefix}birthdayday text
│•${prefix}goldplaybutton text
│•${prefix}silverplaybutton text
│•${prefix}freefire text
│•${prefix}wasted reply
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'othermenu':
case 'menuother':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
wew = fs.readFileSync(`./database/image/Farid.jpeg`)
lzain = `
\`\`\`╭──❲ OTHER MENU ❳
│•${prefix}asupan
│•${prefix}meme
│•${prefix}memeindo
│•${prefix}tts
│•${prefix}slot
│•${prefix}infogempa
│•${prefix}tebakgambar
│•${prefix}tebakgambar2
│•${prefix}family100
╰────────────────⊱

╭──❲ SOUND MENU ❳
│•${prefix}tupai
│•${prefix}gemok
│•${prefix}slowmo
│•${prefix}bass
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'downloadmenu':
case 'downloader':
case 'menudownload':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ DOWNLOAD MENU ❳
│•${prefix}play
│•${prefix}ytmp33
│•${prefix}ytmp3
│•${prefix}ytmp32
│•${prefix}ytmp4
│•${prefix}ytmp42
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'stalkmenu':
case 'menusatalking':
case 'menustalk':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ STALKING MENU ❳
│•${prefix}igstalk
│•${prefix}githubstalk
│•${prefix}tkstalk
│•${prefix}ytstalk
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break
case 'soundmenu':
case 'sound':
case 'menusound':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
wew = fs.readFileSync(`./database/muzza/pale`)
lzain = `
\`\`\`╭──❲ SOUND MENU RANDOM ❳
│•${prefix}sound1
│•${prefix}sound2
│•${prefix}sound3
│•${prefix}sound4
│•${prefix}sound5
│•${prefix}sound6
│•${prefix}sound7
│•${prefix}sound8
│•${prefix}sound9
│•${prefix}sound10
│•${prefix}sound11
│•${prefix}sound12
│•${prefix}sound13
│•${prefix}sound14
│•${prefix}sound15
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
farid.sendMessage(from, wew, MessageType.audio, {qouted: freply, mimetype: 'audio/mp4', ptt:true})
break
case 'stickermenu':
if (isBanned) return reply(teksban)
if (!isRegister) return reply( ind.noregis())
wew = fs.readFileSync(`./database/image/Farid.jpeg`)
lzain = `
\`\`\`╭──❲ STICKER MENU ❳
│•${prefix}sticker
│•${prefix}toimg
│•${prefix}semoji
│•${prefix}gawrgura
│•${prefix}umongus
│•${prefix}dadu
│•${prefix}stickanjing
│•${prefix}stickbucin
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: muz1})
break
case 'premiummenu':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ DOWNLOAD MENU ❳
│•${prefix}ytplay2
│•${prefix}ytplay3
│•${prefix}ytsearch
│•${prefix}createktp
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: fkontak})
break
case 'funmenu':
if (!isRegister) return reply( ind.noregis())
if (isBanned) return reply(teksban)
lzain = `
\`\`\`╭──❲ FUN MENU ❳
│•${prefix}ngentod
│•${prefix}berburu
╰────────────────⊱\`\`\`
`
farid.sendMessage(from, lzain, text, { quoted: freply})
break

	                   	case 'donasi':
                  		case 'donate':		
                              farid.sendMessage(from, donasi(namabot, gopay, pulsa, dana, shopeepay, ovo), text)
					break
	                  	case 'level':					
                              if (!isRegister) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					farid.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
                    		case 'info':
					me = farid.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : ${namaowner}\n*No Owner* : wa.me/${nomerowner}\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					farid.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
	                    	case 'snk':
					me = farid.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan ${namabot}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					farid.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
	                   	case 'lpr':case 'report': case 'lapor':
					const bug = body.slice(5)
					if (pesan.length > 300) return farid.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					farid.sendMessage('6281231951590@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner ara Laporan palsu atau main² tidak akan ditanggapi.')
					break					
	                   	case 'request': //USAHAKAN JANGAN DI GANTI :)
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return farid.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST FITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
			     	      farid.sendMessage('6281231951590@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER ARA REQUESTS PALSU ATAU MAIN² TIDAK AKAN DITANGGAPI.')
					break
		case 'blocklist': 
if (!isRegister) return reply(ind.noregis())
if (isBanned) return reply(teksban)
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					farid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
case 'ffstalk':
if (!isRegister) return reply(ind.noregis())
if (isBanned) return reply(teksban)
if (args.length == 0) return reply(`Idnya mana kak?`)
                    ff_id = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/freefire/${ff_id}?apikey=${lolkey}`)
                    reply(get_result.result)
                    break
                               case 'hidetag':					
                              if (!isRegister) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
			       	if (isBanned) return reply(teksban)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await farid.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					farid.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                                case 'afk':				
                                if (!isRegister) return reply( ind.noregis())
	               	    	  if (isBanned) return reply(teksban)
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        farid.sendMessage(from, tagzz, text, {quoted: mek})
                                        break
                                        case 'profile':
                 if (!isRegister) return reply( ind.noregis())
				if (isBanned) return reply(teksban)
    				farid.updatePresence(from, Presence.composing)
					try {
					ppimg = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					farid.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break
   
	       case 'ocr': 					
                 if (!isRegister) return reply( ind.noregis())
	              if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply(teksban)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await farid.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		                              case 'sethargalimit':
					if (args.length < 1) return
		             	if (!isOwner) return reply(ind.ownerb())
					farid.updatePresence(from, Presence.composing) 
					hargalimit = body.slice(15)
					reply(`harga limit berhasil di ubah menjadi : ${hargalimit}`)
			      	break 
                              case 'setwaktugametb':
					if (args.length < 1) return
		             	if (!isOwner) return reply(ind.ownerb())
					farid.updatePresence(from, Presence.composing) 
					gamewaktu = body.slice(16)
					reply(`waktu game berhasil di ubah menjadi : ${gamewaktu}`)
	        			break 
                              case 'setprefix':
 					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
                              case 'linkgc':
		       		if (!isGroup) return reply(ind.groupo())
		        		if (isLimit(sender)) return reply(ind.limitend(pushname))
		       		if (!isBotGroupAdmins) return reply(ind.badmin())
		         		linkgc = await farid.groupInviteCode (from)
		        		yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		       		farid.sendMessage(from, yeh, text, {quoted: mek})
		       		await limitAdd(sender)
				     break
                             case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						farid.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
	                   	case 'bot':
					farid.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
	                    	case 'wa.me':
	                    	case 'wame':
                              if (!isRegister) return reply(ind.noregis())
                              if (isBanned) return reply(teksban)
  					if (isLimit(sender)) return reply(ind.limitend(pushname))
  					farid.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					farid.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
	                    	case 'tagall':
		  			if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
	                   	case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await farid.chats.all()
					farid.setMaxListeners(25)
					for (let _ of anu) {
						farid.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
                              case 'toimg':
                              if (!isRegister) return reply(ind.noregis())
				      if (isBanned) return reply(teksban)
		     	        	if (!isQuotedSticker) return reply('Reply/tag sticker !')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						farid.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
case 'fisheye':
case 'skullmask':
case 'alien':
case 'tosmile':
case 'cartoon':
case 'invert':
case 'pixelate':
case 'flip':
case 'grayscale':
case 'roundimage':
case 'pencil':
case 'wasted':
//[❗] case by DappaGanz
if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
if (!isPrem) return reply(ind.prem())
reply(ind.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await farid.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
farid.sendMessage(from, uhyy, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'affect':
case 'beautiful':
case 'facepalm':
case 'hitler':
case 'jail':
case 'rip':
case 'sepia':
case 'trash':
case 'wanted':
//[❗] case by DappaGanz
if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
if (!isPrem) return reply(ind.prem())		      
reply(ind.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await farid.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
farid.sendMessage(from, uhyy, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'setlimit':
if (!isOwner) return reply(ind.ownerb)
if (args.length < 1) return
limitawal = args[0]
reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
break
case 'resetlimit':
if (!isOwner) return reply(ind.ownerb())
reply(`WAIT BOS`)
var ngonsol = []
rest = _limit.indexOf([0])
_limit.splice(rest)
fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
await sleep(5000)
reply(`LIMIT BERHASIL DI RESET BOS`)
break
case 'refresh':
case 'refres':
if (!isOwner) return reply(ind.ownerb())
farid.updatePresence(from, Presence.composing) 
fs.writeFileSync('./src/msg.data.json', ('[]'))
await sleep(5000)
reply(`\`\`\`SUKSES!!\`\`\``)
break
                        case 'simih':
			      if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply(ind.satukos(prefix, command))
				if (args[0] === 'on') {
				if (isSimi) return reply(`Fitur ${command} sudah aktif`)
				samih.push(from)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
				reply(`SUKSES MENGAKTIFKAN FITUR SIMIH DI GRUP INI`)
				} else if (args[0] === 'off') {
                        var uni = samih.indexOf(from)
				samih.splice(uni, 1)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
				reply(`SUKSES MENGAKTIFKAN FITUR SIMIH DI GRUP INI`)
				} else {
				reply(ind.satukos(prefix, command))
				}
				break

 case 'memegenerator':
           case 'memegen':
			        if (!isPrem) return reply(ind.prem())
              if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
                reply(ind.wait())
               var imgbb = require('imgbb-uploader')
               var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                var media = await farid.downloadAndSaveMediaMessage(enmedia)
                var anu = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
                var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
                var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
                var resu = await getBuffer(`http://zekais-api.herokuapp.com/mgen?text1=${teks1}&text2=${teks2}&url=${anu.display_url}`)
                farid.sendMessage(from, resu, image, {quoted: mek})
                fs.unlinkSync(media)               
                break	
		case 'blockk':
				 farid.updatePresence(from, Presence.composing) 
				 farid.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					farid.blockUser (`${body.slice(8)}@c.us`, "add")
					farid.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    farid.blockUser (`${body.slice(10)}@c.us`, "remove")
					farid.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 farid.updatePresence(from, Presence.composing) 
				 farid.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					farid.blockUser (`${body.slice(7)}@c.us`, "add")
					farid.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    farid.blockUser (`${body.slice(9)}@c.us`, "remove")
					farid.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
                    case 'ngentod':		
					case 'ngewe':
				    if (!isRegister) return reply(ind.noregis)				
			      	if (isBanned) return reply('*Lu Dah Ke Ban Tulol*')
			     	if (!isGroup) return reply(`GRUP ONLY`)	
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const hpoo = ['4','5','6','7','8','9'] 
					const kontrod = ['TV','KORAN']
					coook = kontrod[Math.floor(Math.random() * (kontrod.length))] 
					ahahahu = hpoo[Math.floor(Math.random() * (hpoo.length))] 
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ${command} kemarin di grub ini adalah\n@${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} \nDIA NGEWE SAMPE ${ahahahu}X KEMARIN\n\nSAMPE MASUK ${coook}:v`
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break
		case 'leave':
					
                 if (!isRegister) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					farid.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					farid.updatePresence(from, Presence.composing) 
					farid.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await farid.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await farid.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							farid.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin && !isOwner) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await farid.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await farid.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							farid.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await farid.downloadAndSaveMediaMessage(mek)
					await farid.updateProfilePicture(from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						farid.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						farid.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  farid.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  .then((res) => farid.sendMessage(from, `TUH NO OWNERKU. JANGAN LUPA ${sosmedowner}`, text, {quoted: res}))
					break    
           case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					farid.groupUpdateSubject(from, `${body.slice(9)}`)
					farid.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					farid.groupUpdateDescription(from, `${body.slice(9)}`)
					farid.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
                    case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻?? ??𝗻𝗴??𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					farid.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮??𝗮??𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀??𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
					farid.groupDemoteAdmin(from, mentioned)
					}
					break
			      	case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻??𝗶𝗻 𝗱𝗶 ??????𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					farid.groupMakeAdmin(from, mentioned)
					} else {
					mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					farid.groupMakeAdmin(from, mentioned)
					}
					break	
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += ` *_ASEK DAPAT MAKANAN OTW MENGKICK_*
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						farid.groupRemove(from, mentioned)
					} else {
						mentions(`*_ASEK DAPAT MAKANAN OTW MENGKICK_*
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						farid.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.satukos(prefix, command))
					if (args[0] === 'on') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️*')
					} else if (args[0] === 'off') {
					var ini = _leveling.indexOf(from)
					_leveling.splice(ini, 1)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️*')
					} else {
					reply(ind.satukos(prefix, command))
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.satukos(prefix, command))
					if (args[0] === 'on') {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭')
					} else if (args[0] === 'off') {
						var ini = welkom.indexOf(from)
                                    welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭')
					} else {
						reply(ind.satukos(prefix, command))
					}
					break
                        case 'antidelete':
		       	if (!isOwner) return
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return farid.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [aktif/mati] (Untuk grup)\n${prefix}antidelete [ctaktif/ctmati] (untuk semua kontak)\n${prefix}antidelete banct 628558xxxxxxx (banlist kontak)`, MessageType.text, {quoted: mek})
				if (argz[1] == 'aktif') {
				if (isGroup) {
				if (isRevoke) return farid.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, {quoted: mek})
				dataRevoke.push(from)
				fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
				farid.sendMessage(from, `❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️ Mengaktifkan Fitur Antidelete Di Grup Ini!`, MessageType.text, {quoted: mek})
				} else if (!isGroup) {
				farid.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text, {quoted: mek})
				}
				} else if (argz[1] == 'ctaktif') {
				if (!isGroup) {
				if (isCtRevoke) return farid.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, {quoted: mek})
				dataCtRevoke.data = true
				fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
				farid.sendMessage(from, `❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️ ANTIDELETE UNTUK SEMUA KONTAK BERHASIL DI AKTIFKAN!`, MessageType.text, {quoted: mek})
			      } else if (isGroup) {
				farid.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text, {quoted: mek})
				}
				} else if (argz[1] == 'banct') {
				if (isBanCtRevoke) return farid.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, {quoted: mek})
				if (argz.length === 2 || argz[2].startsWith('0')) return farid.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text, {quoted: mek})
				dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
				fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
				farid.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, {quoted: mek})
				} else if (argz[1] == 'mati') {
				if (isGroup) {
			      const index = dataRevoke.indexOf(from)
				dataRevoke.splice(index, 1)
				fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
				farid.sendMessage(from, `❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️ disable Antidelete Grup!`, MessageType.text, {quoted: mek})
				} else if (!isGroup) {
				farid.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text, {quoted: mek})
				}
				} else if (argz[1] == 'ctmati') {
			      if (!isGroup) {
				dataCtRevoke.data = false
				fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
				farid.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, {quoted: mek})
				} else if (isGroup) {
				farid.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text, {quoted: mek})
				}
				}
				break
                              case 'antilink':
                              case 'antilinlgroup':
                              case 'antilinlgrup':
                              if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(ind.satukos(prefix, command))
					if (args[0] === 'on') {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️*')
						farid.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (args[0] === 'off') {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						var ini = antilink.indexOf(from)
                                    antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️*')
					} else {
						reply(ind.satukos(prefix, command))
					}
					break
					break
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(ind.satukos(prefix, command))
					if (args[0] === 'on') {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭️*')
					} else if (args[0] === 'off') {
						var inu = event.indexOf(from)
                                    event.splice(inu, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭*')
					} else {
						reply(ind.satukos(prefix, command))
					}
					break 
					case 'nsfw':
				if (!isGroup) return reply(`GRUP ONLY`)
				if (!isGroupAdmins) return reply(`*LU ADMIN??*`)
				if (args.length < 1) return reply(ind.satukos(prefix, command))
				if (args[0] === 'on') {
				if (isNsfw) return reply('*SUDAH AKTIF CUY*')
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 Nsfw Mode 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️**')
				} else if (args[0] === 'off') {
				var una = nsfw.indexOf(from)
                        nsfw.splice(una, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 Nsfw Mode 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*️')
				} else {
				reply(ind.satukos(prefix, command))
				}
				break
                case 'tts':
                if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					if (args.length < 1) return jere.sendMessage(from, 'KODE BAHASANYA MANA KAK?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'TEXTNYA MANA KAK?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						farid.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
	                   	case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await farid.getProfilePicture(id)
						buffer = await getBuffer(pp)
						farid.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await farid.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							farid.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break

/*-----------------------------------------------------[ RANDOM MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ RANDOM MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ RANDOM MENU ]--------------------------------------------------------------*/    
                    case 'cecan':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    reply(ind.wait())
                    cecan = await getBuffer(`http://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
                    farid.sendMessage(from, cecan, image, { quoted: fkontak})
                    break
                    case 'cogan':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    reply(ind.wait())
                    cogan = await getBuffer(`http://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
                    farid.sendMessage(from, cogan, image, { quoted: fkontak})
                    break
                    case 'art':
                    case 'bts':
                    case 'exo':
                    case 'elf':
                    case 'loli':
                    case 'neko':
                    case 'waifu':
                    case 'shota':
                    case 'husbu':
                    case 'sagiri':
                    case 'shinobu':
                    case 'megumin':
                    case 'wallnime':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    farid.sendMessage(from, buffer, image, { quoted: fkontak})
                    await limitAdd(sender)
                    break
                    case 'chiisaihentai':
                    case 'trap':
                    case 'blowjob':
                    case 'yaoi':
                    case 'ecchi':
                    case 'hentai':
                    case 'ahegao':
                    case 'hololewd':
                    case 'sideoppai':
                    case 'animefeets':
                    case 'animebooty':
                    case 'animethighss':
                    case 'hentaiparadise':
                    case 'animearmpits':
                    case 'hentaifemdom':
                    case 'lewdanimegirls':
                    case 'biganimetiddies':
                    case 'animebellybutton':
                    case 'hentai4everyone':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: fkontak})
                    await limitAdd(sender)
                    break
                    case 'bj':
                    case 'ero':
                    case 'cum':
                    case 'feet':
                    case 'yuri':
                    case 'trap':
                    case 'lewd':
                    case 'feed':
                    case 'eron':
                    case 'solo':
                    case 'gasm':
                    case 'poke':
                    case 'anal':
                    case 'holo':
                    case 'tits':
                    case 'kuni':
                    case 'kiss':
                    case 'erok':
                    case 'smug':
                    case 'baka':
                    case 'solog':
                    case 'feetg':
                    case 'lewdk':
                    case 'waifu':
                    case 'pussy':
                    case 'femdom':
                    case 'cuddle':
                    case 'hentai':
                    case 'eroyuri':
                    case 'cum_jpg':
                    case 'blowjob':
                    case 'erofeet':
                    case 'holoero':
                    case 'classic':
                    case 'erokemo':
                    case 'fox_girl':
                    case 'futanari':
                    case 'lewdkemo':
                    case 'wallpaper':
                    case 'pussy_jpg':
                    case 'kemonomimi':
                    case 'nsfw_avatar':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: fkontak})
                    await limitAdd(sender)
                    break
                    case 'ngif':
                    case 'nsfw_neko_gif':
                    case 'random_hentai_gif':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    buff = fs.readFileSync(rano)
                    farid.sendMessage(from, buff, sticker, { quoted: fkontak})
                    fs.unlinkSync(rano)
                    })
                    await limitAdd(sender)
                    break
/*-----------------------------------------------------[ MAKER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ MAKER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ MAKER MENU ]--------------------------------------------------------------*/    
                       // Textprome //
                    case 'blackpink':
                    case 'neon':
                    case 'greenneon':
                    case 'advanceglow':
                    case 'futureneon':
                    case 'sandwriting':
                    case 'sandsummer':
                    case 'sandengraved':
                    case 'metaldark':
                    case 'neonlight':
                    case 'text1917':
                    case 'minion':
                    case 'deluxesilver':
                    case 'newyearcard':
                    case 'bloodfrosted':
                    case 'halloween':
                    case 'jokerlogo':
                    case 'fireworksparkle':
                    case 'natureleaves':
                    case 'bokeh':
                    case 'toxic':
                    case 'strawberry':
                    case 'box3d':
                    case 'roadwarning':
                    case 'breakwall':
                    case 'icecold':
                    case 'luxury':
                    case 'cloud':
                    case 'summersand':
                    case 'horrorblood':
		            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
		            if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzha`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply})
                    await limitAdd(sender)
                     break
                   case 'harta': case 'hartatahta': case 'tahta':
                if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
		            if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzza`)         
                farid.sendMessage(from, await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${lolkey}&text=${q}`), image, {quoted: mek, caption: 'nieeeh'}).catch(() => reply('ERROR'))
                await limitAdd(sender)
                break
                    case 'pornhub':
                    case 'glitch':
                    case 'avenger':
                    case 'space':
                    case 'ninjalogo':
                    case 'marvelstudio':
                    case 'lionlogo':
                    case 'wolflogo':
                    case 'steel3d':
                    case 'wallgravity':
	              	if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
	              	if (isLimit(sender)) return reply(ind.limitend(pushname))
                    cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzha`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply})
                    await limitAdd(sender)
                    break

                    // Photo Oxy //
                    case 'shadow':
                    case 'cup':
                    case 'cup1':
                    case 'romance':
                    case 'smoke':
                    case 'burnpaper':
                    case 'lovemessage':
                    case 'undergrass':
                    case 'love':
                    case 'coffe':
                    case 'woodheart':
                    case 'woodenboard':
                    case 'summer3d':
                    case 'wolfmetal':
                    case 'nature3d':
                    case 'underwater':
                    case 'golderrose':
                    case 'summernature':
                    case 'letterleaves':
                    case 'glowingneon':
                    case 'fallleaves':
                    case 'flamming':
                    case 'harrypotter':
                    case 'carvedwood':
		if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzha`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply})
                    break
                    case 'tiktok':
                    case 'arcade8bit':
                    case 'battlefield4':
                    case 'pubg':
		if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzha`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply})
                    break
                    // Ephoto 360 //
                    case 'wetglass':
                    case 'multicolor3d':
                    case 'watercolor':
                    case 'luxurygold':
                    case 'galaxywallpaper':
                    case 'lighttext':
                    case 'beautifulflower':
                    case 'puppycute':
                    case 'royaltext':
                    case 'heartshaped':
                    case 'birthdaycake':
                    case 'galaxystyle':
                    case 'hologram3d':
                    case 'greenneon':
                    case 'glossychrome':
                    case 'greenbush':
                    case 'metallogo':
                    case 'noeltext':
                    case 'glittergold':
                    case 'textcake':
                    case 'starsnight':
                    case 'wooden3d':
                    case 'textbyname':
                    case 'writegalacy':
                    case 'galaxybat':
                    case 'snow3d':
                    case 'birthdayday':
                    case 'goldplaybutton':
                    case 'silverplaybutton':
                    case 'freefire':
	             	if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Muzha`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply})
                    break
/*-----------------------------------------------------[ STALKING MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ STALKING MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ STALKING MENU ]--------------------------------------------------------------*/    
                    case 'igstalk':
					if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					farid.sendMessage(from, buffer, image, {quoted: fkontak, caption: txt})
					break
                    case 'githubstalk':
					if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					farid.sendMessage(from, buffer, image, {quoted: fkontak, caption: txt})
					break
                               case 'tkstalk':
                               if (!isRegister) return reply(ind.noregis())
		                   if (isBanned) return reply(teksban)
                               username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					farid.sendMessage(from, buffer, image, {quoted: fkontak, caption: txt})
					break
                              case 'ytstalk':
					if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
					cari += `*Channel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
/*-----------------------------------------------------[ DOWNLAOD MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ DOWNLOAD MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ DOWNLOAD MENU ]--------------------------------------------------------------*/    
                              
                         case 'ytplay2': case 'play2':
		            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    farid.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: freply})
                    get_video = await getBuffer(get_result.video)
                    farid.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: freply})
                    break
		            case 'ytmp33':
		           	if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio2?apikey=KatoNiBoss&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, buffer, image, { quoted: freply, caption: txt })
		            get_audio = await getBuffer(get_result.link[0].size)
		            farid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break
                    case 'ytmp3':
		            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link.link)
                    farid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply})
                    break
                    case 'ytmp32':
		            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    farid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply})
                    break
                    case 'ytmp4':
		            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link.link)
                    farid.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply})
                    break
                    case 'ytmp42':
                    if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    farid.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply})
                    break
/*-----------------------------------------------------[ STICKER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ STICKER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ STICKER MENU ]--------------------------------------------------------------*/    
                 case 'quotemaker2':
		case 'makequote':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                  var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}${command} Aku Diam Diam Suka Sama Bapak Kamu | muzzabot`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					farid.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
			             break	
                   case 'ktpmaker':
                   case 'createktp':
                    if (!isPrem) return reply(ind.prem())                
                    if (args.length == 0) return reply(`> *USAGE :* ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\n────────────\n\n> *EXAMPLE :* ${prefix + command} 6289643314604|bumipertiwi|fatamorgana|PIPI BOT|mars, 99-99-9999|belum ditemukan|jl sukarno|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/QbCC3Q7/0438dd9a28d2.jpg\n\nNOTE : UNTUK MENGUBAH GAMBAR MENJADI URL BISA LEWAT https://imgbb.com`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    farid.sendMessage(from, ini_buffer, image, { quoted: mek })
		        break	
                         case 'stickanjing':
                            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                            anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=${lolkey}`)
                            farid.sendMessage(from, anu, sticker, {quoted: mek})
                             break
                              case 'stickbucin':
                            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                           ene = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/bucinstick?apikey=${lolkey}`)
                            farid.sendMessage(from, ene, sticker, {quoted: mek})
                             break
                             case 'dadu': case 'gawrgura': case 'umongus':
                            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                            una = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/${command}?apikey=${lolkey}`)
                            farid.sendMessage(from, una, sticker, {quoted: mek})
                             break
                        case 'stickergif':
		          	case 'stikergif':
		         	case 'sgif':
		         	case 'stiker': 
		         	case 'sticker':
			        case 's':
			        if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
				    await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
				    reply(mess.stick)
					})
					.on('end', function () {
					console.log('Subscribe ItsMeMuzza')
					buffer = fs.readFileSync(ran)
					farid.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(ind.wait())
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(ind.stikga())
					})
					.on('end', function () {
					console.log('Subscribe ItsMeMuzza')
					buffer = fs.readFileSync(ran)
					farid.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
                            case 'toimg':
                            if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                            if (!isQuotedSticker) return reply('REPLY STICKER ATAU TAG STICKER YANG SUDAH DI KIRIM')
	 				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('eror breks')
					buffer = fs.readFileSync(ran)
					farid.sendMessage(from, buffer, image, {quoted: freply, caption: 'Tuh Dh Jadi\nSubcribe ItsMuzha Untuk Update Selanjutnya '})
					fs.unlinkSync(ran)
					})
					break
/*-----------------------------------------------------[ SOUND ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SOUND ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SOUND ]--------------------------------------------------------------*/    
                    case 'slowmo':
                    if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			     	media = await farid.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp3')
				    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			      	fs.unlinkSync(media)
				    if (err) return reply('Error!')
			      	uhh = fs.readFileSync(ran)
			     	farid.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply,duration:999999999999})
			     	fs.unlinkSync(ran)
			      	})
			     	break
				    case 'tupai':
                              if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					farid.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply,duration:999999999999})
					fs.unlinkSync(ran)
					})
				    break
				    case 'gemok':
                              if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					farid.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply,duration:999999999999})
					fs.unlinkSync(ran)
			   		})
				    break
				    case 'bass':     
                              if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await farid.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					farid.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
					fs.unlinkSync(ran)
					})
					break
			      	case 'joingc':
                    if (!isOwner) return reply(ind.ownerb())
                    codeInvite = body.slice(32) 
                    response = await farid.acceptInvite(codeInvite)
                    reply('Done!!!')
                    console.log(response)
                    break
/*-----------------------------------------------------[ ASUPAN MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ ASUPAN MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ ASUPAN MENU ]--------------------------------------------------------------*/    
		     
                  case 'asupan':
			if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    farid.sendMessage(from, buffer, video, { quoted: freply, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
				    case 'meme': 
			if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${lolkey}`, {method: 'get'})
                    farid.sendMessage(from, buffer, image, {quoted: freply})
                    break
                    case 'memeindo': 
			if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`, {method: 'get'})
                    farid.sendMessage(from, buffer, image, {quoted: freply})
                    break
                    case 'darkjoke': //FIX BUY BY MUZHA
			if (!isRegister) return reply(ind.noregis())
				    if (isBanned) return reply(teksban)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
                    farid.sendMessage(from, buffer, image, {quoted: freply, caption: 'NIEEH KAK'})
                    break
/*-----------------------------------------------------[ SOUND MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SOUND MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ SOUND MENU ]--------------------------------------------------------------*/    
                    case 'sound1':
                    case 'sound2':
                    case 'sound3':
                    case 'sound4':
                    case 'sound5':
                    case 'sound6':
                    case 'sound7':
                    case 'sound8':
                    case 'sound9':
                    case 'sound10':
                    case 'sound11':
                    case 'sound12':
                    case 'sound13':
                    case 'sound14':
                    case 'sound15':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    reply(ind.wait())
                    sound = fs.readFileSync(`./database/muzza/${command}`)
                    farid.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
/*-----------------------------------------------------[ PREMIUM MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ PREMIUM MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ PREMIUM MENU ]--------------------------------------------------------------*/    
                    case 'playvideo': 
                    case 'playmp4':{
                    if (!isPrem) return reply(ind.prem())
                    if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    try {
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                    if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `─ 「 PLAY VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ URL :* ${a.data}\n\n─━─━「 ‼️ 」━─━─\n*DURASI MELEBIHI BATAS, ANDA BISA DOWNLOAD MELALUI URL DI ATAS*`, mek)
                    const captionis = `─ 「 PLAY VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n─━─━「 *WAIT* 」━─━─\n_VIDEO SEDANG DI KIRIM MUNGKIN BUTUH BEBERAPA MENIT_`
                    sendFileFromUrl(from, thumb, captionisu, mek)
                    sendFileFromUrl(from, dl_link, '', mek)
                    })
                    })
                    } catch (err) {
                    console.log('Error : %s', color(err, 'red'))
                    reply(`${err}`)
                    }           
                    }
                    break         
                    case 'play':
                    case 'ytplay':        
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    try {
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                    if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `─ 「 PLAY MP3 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ Link :* ${a.data}\n\n─━─━「 ‼️ 」━─━─\n*DURASI MELEBIHI BATAS, ANDA BISA DOWNLOAD MELALUI URL DI ATAS*`, mek)
                    const captionis = `─ 「 PLAY MP3 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ URL :* ${yut.videos[0].url}\n\n─━─━「 *WAIT* 」━─━─\n_LAGU SEDANG DI KIRIM MUNGKIN BUTUH BEBERAPA MENIT_`
                    sendFileFromUrl(from, thumb, captionis, mek)
                    sendFileFromUrl(from, dl_link, '', mek)
                    })
                    })                           
                    } catch (err) {
                    console.log('Error : %s', color(err, 'red'))
                    reply(`${err}`)
                    }   
                    await limitAdd(sender)        
                    break             
                    case 'ytplay3':
                    if (!isPrem) return reply(ind.prem())
                    if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    if (Number(get_info.duration) >= 30000) return reply('```ERROR! DURASI SEPERTI REL KERETA API```')
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n\n\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    farid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio.link)
                    farid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoed: freply})
                    get_video = await getBuffer(get_result.video.link)
                    farid.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoed: freply})                    
                    break
                    case 'ytsearch':
			  if (!isPrem) return reply(ind.prem())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                    ini_txt += `Title : ${x.title}\n`
                    ini_txt += `Views : ${x.views}\n`
                    ini_txt += `Published : ${x.published}\n`
                    ini_txt += `Thumbnail : ${x.thumbnail}\n`
                    ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)                    
                    break
                    case 'tiktokmusic':
                    if (!isPrem) return reply(ind.prem())
                    if (args.length < 1) return reply(`Linknya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    if (!isUrl) return reply(`ITU KAH LINKNYA?`)        	 				
                    reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                    farid.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})                             
                    break                  
                    case 'tiktok':
                    case 'tiktoknowm':   	
                    if (!isPrem) return reply(ind.prem())
                    if (args.length < 1) return reply(`Linknya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    if (!isUrl) return reply(`ITU KAH LINKNYA?`)        	 				
                    reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link0 = args[0]
                    const data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_link0}`)
                    const { title, thumbnail, description, duration, link } = data.result
                    let capt = `TIKTOK NO WATERMARK\n━━━━••━━━━━━━━••━━━━\n\n\nData Berhasil Didapatkan!\n\n▢- Title : *${title}*\n▢- Username / Nickname : *${data.result.author.username} / ${data.result.author.nickname}*\n▢- Duration : *${duration}*\n▢- LikeCount : *${data.result.statistic.diggCount}*\n▢- ShareCount : *${data.result.statistic.shareCount}*\n▢- CommentCount : *${data.result.statistic.commentCount}*\n▢- PlayCount : *${data.result.statistic.playCount}*\n▢- Descripttion : *${description}*`
                    var buff = await getBuffer(link)
                    reply('VIDEO TELAH DI DAPATKAN, TUNGGU SEBENTAR')
                    farid.sendMessage(from, buff, video, {quoted: mek, caption: capt})
                    break         
/*-----------------------------------------------------[ FUN MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ FUN MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ FUN MENU ]--------------------------------------------------------------*/    
 case 'cek': 
 case 'test':{
 //CASE BY @farid.mhrdkaa || MUZZA
 if (isBanned) return reply(teksban)
 if (!isRegister) return reply(ind.noregis())
 //==================\\
 Muzza = Math.floor(Math.random() * 100) + 1
 const emoy = ["🤣","🙂","😄","😁","😎","😀","😃","😁","😝","😐","😱","😵","😲"]
 const emot = emoy[Math.floor(Math.random() * (emoy.length))]
 //==================\\
 if (args[0] == 'ganteng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'cantik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'goblok') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'baper') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'tomboi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'banci') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'alay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'peka') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'cuek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'manis') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'jelek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'tollol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'tolol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'asu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gendeng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gila') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'sange') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'nafsu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'lesbi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'haram') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'bangsat') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'cupu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'skill') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'skil') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gabut') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gajelas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'lucu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'gakjelas') {
 reply(`nilai nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'males') {
 reply(`nilai nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'malas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'pelit') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'baik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'buruk') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'arogan') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'mandul') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'galak') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'sabar') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'lebus') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0] == 'ikhlas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 }
break


                    case 'tebakgambar': case 'tg': case 'tbg':{
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                    const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    sendFileFromUrl(from, anu.data.result.image, monospace(`「 *TEBAK GAMBAR* 」\nSilahkan Jawab Soal Yang Ada Di Foto Ini\n\nWaktu : ${gamewaktu}s`), mek)
                    let m = anu.data.result.answer.toLowerCase()
                    game.addgambar(from, m, gamewaktu, tebakgambar)
                    }
                    await limitAdd(sender) 
                    break                    
                    case 'tebakgambar2':
				    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/tebakgambar?apikey=dappabotwa`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					farid.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			    	case 'family100':
			 		if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					farid.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					farid.sendMessage(from, family, text, {quoted: fkontak}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
/*-----------------------------------------------------[ OTHER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ OTHER MENU ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ OTHER MENU ]--------------------------------------------------------------*/    
                    case 'infogempa':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    farid.sendMessage(from, get_buffer, image, { quoted: freply, caption: ini_txt })
                    await limitAdd(sender)
                    break
                    case 'semoji':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 🗿`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    farid.sendMessage(from, ini_buffer, sticker, { quoted: freply})
                    await limitAdd(sender)
                    break
                    case 'quotes':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    await limitAdd(sender)
                    break
                    case 'quotesanime':
                    if (!isRegister) return reply(ind.noregis())
                    if (isBanned) return reply(teksban)
                    reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    await limitAdd(sender)
                    break
/*-----------------------------------------------------[ ZEKS API ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ ZEKS API ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ ZEKS API ]--------------------------------------------------------------*/    
                    case 'memeindo': 
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    gatauda = body.slice(8)
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
                    farid.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'tribunews':
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    farid.updatePresence(from, Presence.composing) 
                    data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
                    teks = '=================\n'
                    for (let i of data.result) {
                    teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
                    }
                    reply(teks.trim())
                    await limitAdd(sender)
                    break
                    case 'liputan6': 
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					farid.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
                    teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
                    case 'foxnews': 
                    if (isBanned) return reply(teksban)
                    if (!isRegister) return reply(ind.noregis()) 
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					farid.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
                    teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			      	case 'nickff': 
                              if (isBanned) return reply(teksban)
                              if (!isRegister) return reply(ind.noregis()) 
                              if (isLimit(sender)) return reply(ind.limitend(pushname))
					farid.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
                              teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
/*-----------------------------------------------------[ AUTO RESPONDER ]--------------------------------------------------------------*/    
/*-----------------------------------------------------[ AUTO RESPONDER ]--------------------------------------------------------------*/  
                    default:		        
                    try {
                    if (isGroup && !itsMe && !isCmd && isSimi) {
                    farid.updatePresence(from, Presence.composing)
                    simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${budy}`)
                    reply(`👱‍♀️ : ${simi.result ? simi.result : '‍SIMI NDAK TAU KAK'}`)
                    }
                    } catch (e) {
                    }
                    //❏❏❏❏「 FITUR SIMI SIMI SUKA ERROR GA RESPON ATAU UNDEPINED 」❏❏❏❏
		       if (budy.includes('ekprefix')){
                   farid.sendMessage(from, `Prefix saat ini: ${prefix}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./database/image/Farid.jpeg', 'base64')}) 
                    }
                    if (budy.includes(`ualaikum`)) {
                    reply(`Waalaikumsalam`)
                    }
	              if (budy.includes("u'alaikum")) {
                    reply(`Waalaikumsalam`)
                    }
	              if (budy.includes(`akasih`)) {
                    reply(`Iyaaa Sama Samaa`)
                    }
	              if (budy.includes(`ma kasih`)) {
                    reply(`sama samaaa ${pushname}`)
                    }
	              if (budy.includes(`ma Kasih`)) {
                    reply(`Sama Sama`)
                    }
	              if (budy.includes(`hanks`)) {
                    reply(`Sama-sama ${pushname}`)
                    }
	             
                    if (budy.includes(`${nomerowner}`)) {
                    if (!isGroup) return
                   // farid.sendMessage(`${nomerowner}@s.whatsapp.net`, `OI OWNER, SI wa.me/${sender.split("@")[0]} SEDANG NYARIIN KAMU TUUH, DI GRUP *${groupName}*`, text)
                    const Muzha = fs.readFileSync('./database/image/tagbot.webp');
                    farid.sendMessage(from, Muzha, MessageType.sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./database/image/Farid.jpeg') }, 'title': `${tagown}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}})
                    console.log(color(`HY OWNER, ADA YANG TAG KAMU DI GRUP ${groupName}`,'yellow'))
                    }
	              }
		        } catch (e) {
	 	        console.log(color('[ ERROR ] : %s','yellow'), color(e, 'red'))                   
                    }
	              })

/*
SUBSCRIBE


YT : PIPIBOTZ
YT : PIPIBOTZ
*/
}
starts()