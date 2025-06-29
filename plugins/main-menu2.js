const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const fs = require('fs')

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` 
╭──⭘🤖 *${config.BOT_NAME}* 🤖─·⭘
┆ ◦ 
┆ ◦ • 👑 Owner : *${config.OWNER_NAME}*
┆ ◦ • ⚙️ Prefix : *[${config.PREFIX}]*
┆ ◦ • 🌐 Platform : *Heroku*
┆ ◦ • 📦 Version : *2.0.0 Bᴇᴛᴀ*
┆ ◦ • ⏱️ Runtime : *_${runtime(process.uptime())}_*
┆ ◦ 
╰────────────────┈⊷

> 𝙳𝙰𝚁𝙺-𝙺𝙽𝙸𝙶𝙷𝚃-𝚇𝙼𝙳 ᴄᴍᴅs ᴍᴇɴᴜ
     
╭──·๏[📥 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*📥]
┆ ◦ 
┆ ◦  🟦 facebook
┆ ◦  🔵 fb2
┆ ◦  📁 mediafire
┆ ◦  📁 mfire2
┆ ◦  🎵 tiktok
┆ ◦  ▶️ tt2
┆ ◦  🐦 twitter
┆ ◦  📷 insta
┆ ◦  📷 insta2
┆ ◦  📦 apk
┆ ◦  📦 apk2
┆ ◦  🖼️ img
┆ ◦  📌 pins
┆ ◦  📌 pins2
┆ ◦  📍 pinterest
┆ ◦  🎶 spotify
┆ ◦  🎧 play
┆ ◦  🎧 play2
┆ ◦  🎧 song
┆ ◦  🎶 song2
┆ ◦  🔉 audio
┆ ◦  🎬 video
┆ ◦  🎬 video1
┆ ◦  🎬 video2
┆ ◦  🎵 ytmp3
┆ ◦  📹 ytmp4
┆ ◦  🎬 darama
┆ ◦  ☁️ gdrive
┆ ◦  🌐 ssweb
┆ ◦  🎵 tiks
┆ ◦  
┆ ◦  🔞 xvideo
┆ ◦  🔞 xnxx
┆ ◦  🔞 porn
┆ ◦  🔞 xporn
┆ ◦ 
╰────┈⊷

╭──·๏[👥 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 👥]
┆ ◦ 
┆ ◦  🔗 grouplink
┆ ◦  🚪 kickall
┆ ◦  🚷 kickall2
┆ ◦  🚫 kickall3
┆ ◦  ➕ add
┆ ◦  ➖ remove
┆ ◦  👢 kick
┆ ◦  👢 out
┆ ◦  🖼️ fullpo
┆ ◦  ⬆️ promote
┆ ◦  ⬇️ demote
┆ ◦  🚮 dismiss
┆ ◦  🔄 revoke
┆ ◦  👋 setgoodbye
┆ ◦  🎉 setwelcome
┆ ◦  🗑️ delete
┆ ◦  🖼️ getpic
┆ ◦  ℹ️ ginfo
┆ ◦  ⏳ disappear on
┆ ◦  ⏳ disappear off
┆ ◦  📝 allreq
┆ ◦  ✏️ updategname
┆ ◦  📝 updategdesc
┆ ◦  📩 joinrequests
┆ ◦  📨 senddm
┆ ◦  🏃 nikal
┆ ◦  🔇 mute
┆ ◦  🔊 unmute
┆ ◦  🔒 lockgc
┆ ◦  🔓 unlockgc
┆ ◦  🚷 antilink kick
┆ ◦  🚫 out country code
┆ ◦  📩 invite
┆ ◦  #️⃣ tag
┆ ◦  🏷️ hidetag
┆ ◦  @️⃣ tagall
┆ ◦  👔 tagadmins
╰───┈⊷

╭──·๏[🎭 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ* 🎭]
┆ ◦ 
┆ ◦  👊 bully @tag
┆ ◦  🤗 cuddle @tag
┆ ◦  😢 cry @tag
┆ ◦  🤗 hug @tag
┆ ◦  🐺 awoo @tag
┆ ◦  💋 kiss @tag
┆ ◦  👅 lick @tag
┆ ◦  🖐️ pat @tag
┆ ◦  😏 smug @tag
┆ ◦  🔨 bonk @tag
┆ ◦  🚀 yeet @tag
┆ ◦  😊 blush @tag
┆ ◦  😄 smile @tag
┆ ◦  👋 wave @tag
┆ ◦  ✋ highfive @tag
┆ ◦  🤝 handhold @tag
┆ ◦  🍜 nom @tag
┆ ◦  🦷 bite @tag
┆ ◦  🤗 glomp @tag
┆ ◦  👋 slap @tag
┆ ◦  💀 kill @tag
┆ ◦  😊 happy @tag
┆ ◦  😉 wink @tag
┆ ◦  👉 poke @tag
┆ ◦  💃 dance @tag
┆ ◦  😬 cringe @tag
┆ ◦ 
╰─┈⊷

╭──·๏[🎨 *ʟᴏɢᴏ ᴍᴀᴋᴇʀ* 🎨]
┆ ◦
┆ ◦  💡 neonlight
┆ ◦  🎀 blackpink
┆ ◦  🐉 dragonball
┆ ◦  🎭 3dcomic
┆ ◦  🇺🇸 america
┆ ◦  🍥 naruto
┆ ◦  😢 sadgirl
┆ ◦  ☁️ clouds
┆ ◦  🚀 futuristic
┆ ◦  📜 3dpaper
┆ ◦  ✏️ eraser
┆ ◦  🌇 sunset
┆ ◦  🍃 leaf
┆ ◦  🌌 galaxy
┆ ◦  💀 sans
┆ ◦  💥 boom
┆ ◦  💻 hacker
┆ ◦  😈 devilwings
┆ ◦  🇳🇬 nigeria
┆ ◦  💡 bulb
┆ ◦  👼 angelwings
┆ ◦  ♈ zodiac
┆ ◦  💎 luxury
┆ ◦  🎨 paint
┆ ◦  ❄️ frozen
┆ ◦  🏰 castle
┆ ◦  🖋️ tatoo
┆ ◦  🔫 valorant
┆ ◦  🐻 bear
┆ ◦  🔠 typography
┆ ◦  🎂 birthday
┆ ◦ 
╰─┈⊷

╭──·๏[👑 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 👑]
┆ ◦ 
┆ ◦  👑 owner
┆ ◦  📜 menu
┆ ◦  📜 menu2
┆ ◦  📊 vv
┆ ◦  📋 listcmd
┆ ◦  📚 allmenu
┆ ◦  📦 repo
┆ ◦  🚫 block
┆ ◦  ✅ unblock
┆ ◦  🖼️ fullpp
┆ ◦  🖼️ setpp
┆ ◦  🔄 restart
┆ ◦  ⏹️ shutdown
┆ ◦  🔄 updatecmd
┆ ◦  💚 alive
┆ ◦  🏓 ping
┆ ◦  🆔 gjid
┆ ◦  🆔 jid
┆ ◦  📖 bible
┆ ◦  📖 biblelist /blist
┆ ◦  😇 setsudo
┆ ◦  🙁 delsudo
┆ ◦ 
╰─┈⊷

╭──·๏[🎉 *ғᴜɴ ᴍᴇɴᴜ* 🎉]
┆ ◦ 
┆ ◦  🤪 shapar
┆ ◦  ⭐ rate
┆ ◦  🤬 insult
┆ ◦  💻 hack
┆ ◦  💘 ship
┆ ◦  🎭 character
┆ ◦  💌 pickup
┆ ◦  😆 joke
┆ ◦  🎭 blur
┆ ◦  ❤️ hrt
┆ ◦  😊 hpy
┆ ◦  😔 syd
┆ ◦  😠 anger
┆ ◦  😳 shy
┆ ◦  💋 kiss
┆ ◦  🧐 mon
┆ ◦  😕 cunfuzed
┆ ◦  🖼️ setpp
┆ ◦  ✋ hand
┆ ◦  🏃 nikal
┆ ◦  🤲 hold
┆ ◦  🤗 hug
┆ ◦  🏃 nikal
┆ ◦  🎵 hifi
┆ ◦  👉 poke
┆ ◦ 
╰─┈⊷

╭──·๏[🔄 *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ* 🔄]
┆ ◦ 
┆ ◦  🏷️ sticker
┆ ◦  🏷️ sticker2
┆ ◦  😀 emojimix
┆ ◦  ✨ fancy
┆ ◦  🖼️ take
┆ ◦  🎵 tomp3
┆ ◦  🗣️ tts
┆ ◦  🌐 trt
┆ ◦  🔢 base64
┆ ◦  🔠 unbase64
┆ ◦  010 binary
┆ ◦  🔤 dbinary
┆ ◦  🔗 tinyurl
┆ ◦  🌐 urldecode
┆ ◦  🌐 urlencode
┆ ◦  🌐 url
┆ ◦  🔁 repeat
┆ ◦  ❓ ask
┆ ◦  📖 readmore
┆ ◦  💚 help
┆ ◦  💚 support
┆ ◦ 
╰─┈⊷

╭──·๏[🤖 *ᴀɪ ᴍᴇɴᴜ*🤖]
┆ ◦ 
┆ ◦  🧠 ai
┆ ◦  🤖 bot
┆ ◦  🤖 gpt
┆ ◦  🤖 openai
┆ ◦  🤖 chatgpt
┆ ◦  👑 deepseek
┆ ◦  🧠 seekai
┆ ◦  🎨 imagine
┆ ◦  🖼️ imagine2
┆ ◦  🤖 gemini
┆ ◦  🤖 gemini2
┆ ◦ 
╰─┈⊷

╭──·๏[⚡*ᴍᴀɪɴ ᴍᴇɴᴜ* ⚡]
┆ ◦ 
┆ ◦  🏓 ping
┆ ◦  🚀 speed
┆ ◦  📡 live
┆ ◦  💚 alive
┆ ◦  ⏱️ runtime
┆ ◦  ⏳ uptime
┆ ◦  📦 repo
┆ ◦  👑 owner
┆ ◦  📜 menu
┆ ◦  📜 menu2
┆ ◦  🔄 restart
┆ ◦ 
╰─┈⊷

╭──·๏[🎎 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 🎎] 
┆ ◦ 
┆ ◦  🤬 fack
┆ ◦  ✅ truth
┆ ◦  😨 dare
┆ ◦  🐶 dog
┆ ◦  🐺 awoo
┆ ◦  👧 garl
┆ ◦  👰 waifu
┆ ◦  🐱 neko
┆ ◦  🧙 megnumin
┆ ◦  🐱 neko
┆ ◦  👗 maid
┆ ◦  👧 loli
┆ ◦  📰 animenews
┆ ◦  👧 animegirl
┆ ◦  👧 animegirl 1-5
┆ ◦  👧 animegirl 5
┆ ◦  🦊 foxgirl
┆ ◦  🍥 naruto
┆ ◦ 
╰─┈⊷

╭──·๏[ℹ️*ᴏᴛʜᴇʀ ᴍᴇɴᴜ* ℹ️]
┆ ◦ 
┆ ◦  🕒 timenow
┆ ◦  📅 date
┆ ◦  🔢 count
┆ ◦  🧮 calculate
┆ ◦  🔢 countx
┆ ◦  🎲 flip
┆ ◦  🪙 coinflip
┆ ◦  🎨 rcolor
┆ ◦  🎲 roll
┆ ◦  ℹ️ fact
┆ ◦  💻 cpp
┆ ◦  🎲 rw
┆ ◦  💑 pair
┆ ◦  💑 pair2
┆ ◦  ✨ fancy
┆ ◦  🎨 logo <text>
┆ ◦  📖 define
┆ ◦  📰 news
┆ ◦  🎬 movie
┆ ◦  ☀️ weather
┆ ◦  📦 srepo
┆ ◦  🤬 insult
┆ ◦  💾 save
┆ ◦  🌐 wikipedia
┆ ◦  🔑 gpass
┆ ◦  👤 githubstalk
┆ ◦  🔍 yts
┆ ◦  📹 ytv
┆ ◦ 
╰─┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/brlkte.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400240662312@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
