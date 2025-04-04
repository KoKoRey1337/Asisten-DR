process.on("uncaughtException", console.error);
require("./settings");
const {
  default: makeWASocket,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  delay
} = require("@whiskeysockets/baileys");
const readline = require("readline");
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const {
  Low,
  JSONFile
} = require("./lib/lowdb");
const yargs = require("yargs/yargs");
const fs = require('fs');
const chalk = require("chalk");
const FileType = require("file-type");
const path = require("path");
const axios = require("axios");
const _ = require("lodash");
const util = require("util");
const os = require('os');
const moment = require("moment-timezone");
const PhoneNumber = require("awesome-phonenumber");
global.autoJoinNewsletter = true;
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  await,
  clockString,
  enumGetKey,
  fetchBuffer,
  fetchJson,
  format,
  formatDate,
  formatp,
  generateProfilePicture,
  getBuffer,
  getGroupAdmins,
  getRandom,
  getSizeMedia,
  isUrl,
  json,
  logic,
  msToDate,
  parseMention,
  sizeLimit,
  runtime,
  sleep,
  sort,
  toNumber
} = require("./lib/myfunc");
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
global.opts = new Object(yargs(process.argv.slice(0x2)).exitProcess(false).parse());
global.db = new Low(new JSONFile("src/" + tempatDB));
global.DATABASE = global.db;
global.muatDatabase = async function muatDatabase() {
  if (global.db.READ) {
    return new Promise(_0x13488f => {
      const _0x3f66d1 = setInterval(() => {
        if (!global.db.READ) {
          clearInterval(_0x3f66d1);
          _0x13488f(global.db.data == null ? global.muatDatabase() : global.db.data);
        }
      }, 0x3e8);
    });
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  try {
    await global.db.read();
    global.db.data = {
      'users': {},
      'rpg': {},
      'database': {},
      'chats': {},
      'game': {},
      'settings': {},
      'message': {},
      ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
  } catch (_0x246b3c) {
    console.error("⚠️ Gagal membaca database:", _0x246b3c);
  } finally {
    global.db.READ = false;
  }
};
muatDatabase();
if (global.db) {
  setInterval(async () => {
    if (global.db.data && !global.db.READ) {
      try {
        await global.db.write();
      } catch (_0x52434b) {
        console.error("⚠️ Gagal menyimpan database:", _0x52434b);
      }
    }
  }, 30000);
}
const session = './' + sessionName;
const question = _0x8e80d8 => {
  const _0xefe342 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x1cf3cc => {
    _0xefe342.question(_0x8e80d8, _0x1cf3cc);
  });
};
async function startHaruka() {
  const {
    state: _0x2bd878,
    saveCreds: _0x1a9584
  } = await useMultiFileAuthState(session);
  const _0x330c95 = makeWASocket({
    'printQRInTerminal': false,
    'syncFullHistory': true,
    'markOnlineOnConnect': true,
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'generateHighQualityLinkPreview': true,
    'patchMessageBeforeSending': _0x220690 => {
      const _0x42a47a = !!(_0x220690.buttonsMessage || _0x220690.templateMessage || _0x220690.listMessage);
      if (_0x42a47a) {
        _0x220690 = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x220690
            }
          }
        };
      }
      return _0x220690;
    },
    'version': (await (await fetch("https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json")).json()).version,
    'browser': ["Windows", "Chrome", "20.0.04"],
    'logger': pino({
      'level': "fatal"
    }),
    'auth': {
      'creds': _0x2bd878.creds,
      'keys': makeCacheableSignalKeyStore(_0x2bd878.keys, pino().child({
        'level': "silent",
        'stream': "store"
      }))
    }
  });
  if (!_0x330c95.authState.creds.registered) {
    const _0x487e6e = await question("\n\n\nKetik nomor kamu, contoh input nomor yang benar: 6281234567890\n");
    const _0x1b49fe = await _0x330c95.requestPairingCode(_0x487e6e.trim());
    console.log(chalk.white.bold(" Kode Pairing Bot Whatsapp kamu :"), chalk.red.bold('' + _0x1b49fe));
  }
  _0x330c95.ev.on("connection.update", async _0x410c9e => {
    const {
      connection: _0x5ba6f1,
      lastDisconnect: _0x2ede9c
    } = _0x410c9e;
    if (_0x5ba6f1 === "close") {
      let _0xb8ffb0 = new Boom(_0x2ede9c?.["error"])?.["output"]["statusCode"];
      if (_0xb8ffb0 === DisconnectReason.badSession) {
        console.log("❌ Aduh, sesi-nya bermasalah nih, kak! Hapus sesi dulu terus coba lagi ya~ 🛠️");
        process.exit();
      } else {
        if (_0xb8ffb0 === DisconnectReason.connectionClosed) {
          console.log("🔌 Yahh, koneksinya putus... Sabar ya, KoKoRey coba sambungin lagi! 🔄");
          startHaruka();
        } else {
          if (_0xb8ffb0 === DisconnectReason.connectionLost) {
            console.log("📡 Oops, koneksi ke server hilang, kak! Tunggu bentar, KoKoRey sambungin lagi ya~ 🚀");
            startHaruka();
          } else {
            if (_0xb8ffb0 === DisconnectReason.connectionReplaced) {
              console.log("🔄 Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, kak! 💻");
              process.exit();
            } else {
              if (_0xb8ffb0 === DisconnectReason.loggedOut) {
                console.log("🚪 Kak, perangkatnya udah keluar... Hapus folder sesi terus scan QR lagi ya! 📲");
                process.exit();
              } else {
                if (_0xb8ffb0 === DisconnectReason.restartRequired) {
                  console.log("🔄 Sebentar ya, KoKoRey lagi mulai ulang koneksinya biar lancar lagi! ♻️");
                  startHaruka();
                } else if (_0xb8ffb0 === DisconnectReason.timedOut) {
                  console.log("⏳ Hmm, koneksinya timeout nih, kak! KoKoRey coba sambungin ulang ya~ 🌐");
                  startHaruka();
                } else {
                  console.log("❓ Eh, alasan disconnect-nya gak jelas nih, kak... (" + _0xb8ffb0 + " | " + _0x5ba6f1 + ") 🤔 Tapi tenang, KoKoRey coba sambungin lagi ya! 💪");
                  startHaruka();
                }
              }
            }
          }
        }
      }
    } else {
      if (_0x5ba6f1 === "open") {
        console.log(chalk.white.bold("\n🎉 Horeee! Berhasil terhubung ke nomor :"), chalk.yellow(JSON.stringify(_0x330c95.user, null, 0x2)));
        console.log("✅ Semua sudah siap, kak! Selamat menjalankan bot-nya ya~ 🥳🎈");
        const _0x26dd2b = () => {
          const _0x29b2ff = process.uptime();
          const _0x50963d = Math.floor(_0x29b2ff / 0xe10);
          const _0x14bca1 = Math.floor(_0x29b2ff % 0xe10 / 0x3c);
          const _0xa1c822 = Math.floor(_0x29b2ff % 0x3c);
          return _0x50963d + "h, " + _0x14bca1 + "m, " + _0xa1c822 + 's';
        };
        const _0x2e2cd6 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
        const _0x212b12 = moment().tz("Asia/Jakarta").format("DD MMMM YYYY");
        const _0x4b2acd = os.networkInterfaces()?.["eth0"]?.[0x0]?.["address"] || "Tidak diketahui";
        let _0x185d21 = "✅ *Bot Berhasil Terhubung!*\n\n";
        _0x185d21 += "📅 *Tanggal:* " + _0x212b12 + "\n";
        _0x185d21 += "⏰ *Waktu:* " + _0x2e2cd6 + " WIB\n";
        _0x185d21 += "📡 *Status:* Online\n";
        _0x185d21 += "🌍 *IP Address:* " + _0x4b2acd + "\n";
        _0x185d21 += "⏳ *Runtime:* " + _0x26dd2b() + "\n\n";
        _0x185d21 += "🚀 Bot siap digunakan, silahkan ketik *.menu* untuk melihat daftar menu yang tersedia.";
        _0x330c95.sendMessage(ownerNumber + "@s.whatsapp.net", {
          'image': imageBuffer,
          'caption': _0x185d21,
          'ai': true
        });
        if (autoJoinNewsletter) {
          const _0x2bfa04 = ['0029Vb6YAhHDZ4LhEHIciq0s', "0029Vb2L4fu8KMqpesPWmB17", "0029Vb7hxelAInPh30Y8oV1a", "0029Vb2Msk84Crfg9LcBhz0Z", "0029Vb1Kx1Y9hXF7S1tR2L2Y", "0029Vb6pHCBEquiWoORKud44", "0029Vb297zKEquiHq55LGy1z", "0029Vb6cAgd5a2427asKFd1x", "0029Vb6WkWmHFxP28yjz2407", '0029Vb0QWsE8vd1UjhCjQO2V'];
          const _0x4b29c5 = async _0x35a070 => {
            for (const _0x1ac16b of _0x35a070) {
              try {
                await sleep(0xbb8);
                const _0x4c9c02 = await _0x330c95.newsletterMetadata("invite", _0x1ac16b);
                await sleep(0xbb8);
                await _0x330c95.newsletterFollow(_0x4c9c02.id);
              } catch (_0x3faf98) {
                console.error("❌ Gagal join saluran ID: " + _0x1ac16b, _0x3faf98);
              }
            }
          };
          (async () => {
            await _0x4b29c5(_0x2bfa04);
          })();
        }
      }
    }
    ;
  });
  _0x330c95.ev.on("creds.update", _0x1a9584);
  _0x330c95.ev.on('messages.upsert', () => {});
  function _0x313a2c() {
    const _0x2fab50 = path.join(__dirname, "temp");
    fs.readdir(_0x2fab50, (_0x1e5941, _0x2e4273) => {
      if (_0x1e5941) {
        console.error(chalk.red("Gagal membaca folder 'temp':"), _0x1e5941);
        return;
      }
      if (_0x2e4273.length === 0x0) {
        return;
      }
      _0x2e4273.forEach(_0x53c370 => {
        const _0x5732f4 = path.join(_0x2fab50, _0x53c370);
        fs.stat(_0x5732f4, (_0x4e3561, _0x1ae558) => {
          if (_0x4e3561) {
            console.error(chalk.red("Gagal membaca file:"), _0x5732f4, _0x4e3561);
            return;
          }
          if (_0x1ae558.isFile()) {
            fs.unlink(_0x5732f4, _0x5a9bed => {
              if (_0x5a9bed) {
                console.error(chalk.red("Gagal menghapus file:"), _0x5732f4, _0x5a9bed);
              }
            });
          } else if (_0x1ae558.isDirectory()) {
            fs.rmdir(_0x5732f4, {
              'recursive': true
            }, _0x467d2d => {
              if (_0x467d2d) {
                console.error(chalk.red("Gagal menghapus folder:"), _0x5732f4, _0x467d2d);
              }
            });
          }
        });
      });
    });
  }
  setInterval(_0x313a2c, 0xea60);
  _0x330c95.ev.on("group-participants.update", async _0x54e4df => {
    if (welcome) {
      try {
        let _0x1706ef = await _0x330c95.groupMetadata(_0x54e4df.id);
        let _0x39f34e = _0x54e4df.participants;
        for (let _0x48f8fd of _0x39f34e) {
          let _0x2c220d;
          let _0x33938b;
          try {
            _0x2c220d = await _0x330c95.profilePictureUrl(_0x48f8fd, "image");
          } catch (_0x3a5dcb) {
            _0x2c220d = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
          }
          try {
            _0x33938b = await _0x330c95.profilePictureUrl(_0x54e4df.id, 'image');
          } catch (_0x54845a) {
            _0x33938b = "https://8030.us.kg/file/P2LpaOHxWlJt.jpg";
          }
          let _0x24f1a7 = '@' + _0x48f8fd.split('@')[0x0];
          if (_0x54e4df.action === "add") {
            let _0x2dfd69 = "yah anjing beban GC nambah ngentod"  + _0x24f1a7 +  "eh kentod, disini gausah tengil ya babi";
            await _0x330c95.sendMessage(_0x54e4df.id, {
              'contextInfo': {
                'mentionedJid': [_0x48f8fd],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "Welcome New Sensei! ✨",
                  'body': "Dari " + ownerName,
                  'previewType': 'PHOTO',
                  'thumbnailUrl': _0x33938b,
                  'sourceUrl': wagc
                }
              },
              'text': _0x2dfd69
            });
          } else {
            if (_0x54e4df.action === "remove") {
              let _0x10cbea = "akhirnya sih beban cabut" + _0x24f1a7 + "semoga harimu sesat terus ya tod, sampai berjumpa di akhirat. Tuhan yesus memberkatimu";
              await _0x330c95.sendMessage(_0x54e4df.id, {
                'contextInfo': {
                  'mentionedJid': [_0x48f8fd],
                  'forwardingScore': 0x3e7,
                  'isForwarded': true,
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': "Goodbye from " + _0x1706ef.subject + "! 🌟",
                    'body': "Dari " + ownerName,
                    'previewType': "PHOTO",
                    'thumbnailUrl': _0x33938b,
                    'sourceUrl': wagc
                  }
                },
                'text': _0x10cbea
              });
            }
          }
        }
      } catch (_0xfaf7de) {
        console.error("❌ Terjadi kesalahan di fitur auto send join/leave:", _0xfaf7de);
      }
    }
  });
  _0x330c95.ev.on('call', async _0x153905 => {
    if (anticall) {
      for (let _0x29c086 of _0x153905) {
        if (_0x29c086.status === "offer") {
          await _0x330c95.sendMessage(_0x29c086.from, {
            'text': "Maaf ya, kami nggak bisa menerima panggilan *" + (_0x29c086.isVideo ? "video" : "suara") + "* saat ini. 🙏\nKalau @" + _0x29c086.from.split('@')[0x0] + " butuh bantuan, langsung hubungi owner aja ya! 😊",
            'mentions': [_0x29c086.from]
          });
          await _0x330c95.rejectCall(_0x29c086.id, _0x29c086.from);
        }
      }
    }
  });
  _0x330c95.ev.on("messages.upsert", async _0x30a564 => {
    if (autoswview) {
      mek = _0x30a564.messages[0x0];
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        await _0x330c95.readMessages([mek.key]);
      }
    }
  });
  _0x330c95.ev.on('group-participants.update', async _0x4265d6 => {
    if (adminevent) {
      console.log(_0x4265d6);
      try {
        let _0x40ca5c = _0x4265d6.participants;
        for (let _0x44dfa7 of _0x40ca5c) {
          try {
            ppuser = await _0x330c95.profilePictureUrl(_0x44dfa7, 'image');
          } catch (_0x3e997b) {
            ppuser = "https://8030.us.kg/file/P2LpaOHxWlJt.jpg";
          }
          try {
            ppgroup = await _0x330c95.profilePictureUrl(_0x4265d6.id, 'image');
          } catch (_0x1a9332) {
            ppgroup = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
          }
          if (_0x4265d6.action == "promote") {
            const _0x2dae71 = moment.tz("Asia/Jakarta").format('HH:mm:ss');
            const _0x387c87 = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
            body = "🎉 *Selamat @" + _0x44dfa7.split('@')[0x0] + "lu udah di adminin, jadi gausah tengil ya tol\n\nWaktu: " + _0x2dae71 + "\nTanggal: " + _0x387c87;
            _0x330c95.sendMessage(_0x4265d6.id, {
              'text': body,
              'contextInfo': {
                'mentionedJid': [_0x44dfa7],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'containsAutoReply': true,
                  'title': botName,
                  'body': ownerName,
                  'previewType': 'PHOTO',
                  'thumbnailUrl': ppgroup,
                  'sourceUrl': wagc
                }
              }
            });
          } else {
            if (_0x4265d6.action == 'demote') {
              const _0x48e513 = moment.tz("Asia/Jakarta").format("HH:mm:ss");
              const _0x228414 = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
              body = "gua bilang juga apa kan" + _0x44dfa7.split('@')[0x0] + "mampus kan di unadmin*.\n\nWaktu: " + _0x48e513 + "\nTanggal: " + _0x228414;
              _0x330c95.sendMessage(_0x4265d6.id, {
                'text': body,
                'contextInfo': {
                  'mentionedJid': [_0x44dfa7],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'containsAutoReply': true,
                    'title': botName,
                    'body': ownerName,
                    'previewType': "PHOTO",
                    'thumbnailUrl': ppgroup,
                    'sourceUrl': wagc
                  }
                }
              });
            }
          }
        }
      } catch (_0x297169) {
        console.log(_0x297169);
      }
    }
  });
  _0x330c95.ev.on("groups.update", async _0x48a8ca => {
    if (groupevent) {
      try {
        let _0x31cf98 = "https://8030.us.kg/file/P2LpaOHxWlJt.jpg";
        try {
          _0x31cf98 = await _0x330c95.profilePictureUrl(_0x48a8ca[0x0].id, "image");
        } catch (_0x362650) {
          console.warn("⚠️ Gagal dapetin foto grup, pake gambar default aja ya.");
        }
        const _0x2c21dc = _0x48a8ca[0x0];
        if (_0x2c21dc.announce === true) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🔒 *Oops, Gerbang Grup Ditutup!* 🔒\n\nSekarang cuma *admin* yang bisa ngobrol di sini. Jangan sedih ya, tunggu admin buka lagi! 🥺✨"
          });
        } else if (_0x2c21dc.announce === false) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🔓 *Yay, Gerbang Grup Terbuka!* 🔓\n\nSekarang semua anggota bebas ngobrol seru lagi di sini. Ayo ramein! 🎉😄"
          });
        }
        if (_0x2c21dc.restrict === true) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🔐 *Info Grup Dikunci!* 🔐\n\nHanya *admin* yang bisa edit info grup sekarang. Tetap tertib ya! 😇📚"
          });
        } else if (_0x2c21dc.restrict === false) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🔓 *Info Grup Dibuka!* 🔓\n\nSemua anggota bisa ikut edit info grup. Jangan lupa sopan dan bijak ya! 😊📢"
          });
        }
        if (_0x2c21dc.desc) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "📝 *Deskripsi Baru Nih!* 📝\n\nGrup ini punya deskripsi baru lho:\n\n" + _0x2c21dc.desc + "\n\nKeren gak? 😍✨"
          });
        }
        if (_0x2c21dc.subject) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🖊️ *Nama Grup Baru!* 🖊️\n\nSekarang grup kita punya nama baru:\n\n*" + _0x2c21dc.subject + "*\n\nGimana, kece kan? 😎🔥"
          });
        }
        if (_0x2c21dc.memberAddMode === true) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🛡️ *Tambah Anggota? Tertutup Dulu!* 🛡️\n\nSekarang cuma *admin* yang bisa nambah anggota baru. Yuk, patuhi aturan ya! 👀✨"
          });
        } else if (_0x2c21dc.memberAddMode === false) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "✅ *Tambah Anggota Bebas!* ✅\n\nSekarang semua anggota bisa ngajak teman-temannya masuk grup ini. Ayo tambah rame! 🥳🎈"
          });
        }
        if (_0x2c21dc.joinApprovalMode === true) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "🛡️ *Pintu Masuk Dijaga Ketat!* 🛡️\n\nCalon anggota baru harus dapet *persetujuan admin* dulu ya sebelum bisa gabung. Tetap aman dan tertib! 🤝🔒"
          });
        } else if (_0x2c21dc.joinApprovalMode === false) {
          await sleep(0x7d0);
          _0x330c95.sendMessage(_0x2c21dc.id, {
            'text': "✅ *Pintu Masuk Terbuka Lebar!* ✅\n\nAnggota baru bisa langsung gabung tanpa nunggu persetujuan admin. Yuk, tambah rame di sini! 🎊😊"
          });
        }
      } catch (_0x245ab3) {
        console.error("❌ Oops, ada yang error waktu proses pembaruan grup:", _0x245ab3);
      }
    }
  });
  _0x330c95.ev.on('messages.upsert', async _0x231379 => {
    try {
      mek = _0x231379.messages[0x0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === 'status@broadcast') {
        return;
      }
      m = smsg(_0x330c95, mek, store);
      require("./case")(_0x330c95, m, _0x231379, mek, store);
    } catch (_0x35ee03) {
      console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(_0x35ee03)));
    }
  });
  _0x330c95.decodeJid = _0xe5bd85 => {
    if (!_0xe5bd85) {
      return _0xe5bd85;
    }
    if (/:\d+@/gi.test(_0xe5bd85)) {
      let _0x308637 = jidDecode(_0xe5bd85) || {};
      return _0x308637.user && _0x308637.server && _0x308637.user + '@' + _0x308637.server || _0xe5bd85;
    } else {
      return _0xe5bd85;
    }
  };
  _0x330c95.ev.on("contacts.update", _0x58d0a1 => {
    for (let _0x106dc8 of _0x58d0a1) {
      let _0x4978a0 = _0x330c95.decodeJid(_0x106dc8.id);
      if (store && store.contacts) {
        store.contacts[_0x4978a0] = {
          'id': _0x4978a0,
          'name': _0x106dc8.notify
        };
      }
    }
  });
  _0x330c95.getName = (_0x59d57b, _0x754722 = false) => {
    id = _0x330c95.decodeJid(_0x59d57b);
    _0x754722 = _0x330c95.withoutContact || _0x754722;
    let _0x2580c1;
    if (id.endsWith('@g.us')) {
      return new Promise(async _0x22fc0f => {
        _0x2580c1 = store.contacts[id] || {};
        if (!(_0x2580c1.name || _0x2580c1.subject)) {
          _0x2580c1 = _0x330c95.groupMetadata(id) || {};
        }
        _0x22fc0f(_0x2580c1.name || _0x2580c1.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber("international"));
      });
    } else {
      _0x2580c1 = id === '0@s.whatsapp.net' ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x330c95.decodeJid(_0x330c95.user.id) ? _0x330c95.user : store.contacts[id] || {};
    }
    return (_0x754722 ? '' : _0x2580c1.name) || _0x2580c1.subject || _0x2580c1.verifiedName || PhoneNumber('+' + _0x59d57b.replace("@s.whatsapp.net", '')).getNumber("international");
  };
  _0x330c95.sendContact = async (_0x43417f, _0x66ab23, _0x24b4c0 = '', _0x3c49f1 = {}) => {
    let _0x71a83d = [];
    for (let _0x6ed585 of _0x66ab23) {
      _0x71a83d.push({
        'displayName': await _0x330c95.getName(_0x6ed585),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x330c95.getName(_0x6ed585)) + "\nFN:" + (await _0x330c95.getName(_0x6ed585)) + "\nitem1.TEL;waid=" + _0x6ed585.split('@')[0x0] + ':' + _0x6ed585.split('@')[0x0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      });
    }
    _0x330c95.sendMessage(_0x43417f, {
      'contacts': {
        'displayName': _0x71a83d.length + " Contact",
        'contacts': _0x71a83d
      },
      ..._0x3c49f1
    }, {
      'quoted': _0x24b4c0
    });
  };
  _0x330c95['public'] = true;
  _0x330c95.serializeM = _0x4967cd => smsg(_0x330c95, _0x4967cd, store);
  const _0xb97211 = {
    'upload': _0x330c95.waUploadToServer
  };
  _0x330c95.sendButtonText = (_0x2de8ea, _0x395028 = [], _0x5d741a, _0x25355b, _0x5d7f50 = '', _0x26060e = {
    'contextInfo': {
      'mentionedJid': parseMention(_0x5d741a)
    }
  }) => {
    let _0x319e08 = [];
    for (let _0x270341 = 0x0; _0x270341 < _0x395028.length; _0x270341++) {
      _0x319e08.push({
        'name': _0x395028[_0x270341].name,
        'buttonParamsJson': JSON.parse(JSON.stringify(_0x395028[_0x270341].buttonParamsJson))
      });
    }
    let _0x1c73b5 = generateWAMessageFromContent(_0x2de8ea, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            ..._0x26060e,
            'mentionedJid': parseMention(_0x5d741a),
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x5d741a
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x25355b
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x319e08
            })
          })
        }
      }
    }, {
      'quoted': _0x5d7f50
    });
    _0x330c95.relayMessage(_0x1c73b5.key.remoteJid, _0x1c73b5.message, {
      'messageId': _0x1c73b5.key.id
    });
    return _0x1c73b5;
  };
  _0x330c95.sendButtonImage = async (_0x3012f4, _0x41c46b, _0x3348a6 = [], _0x7a53b3, _0x21d0c7, _0x339bb6 = '', _0x7c7243 = {
    'contextInfo': {
      'mentionedJid': parseMention(_0x7a53b3)
    }
  }) => {
    let _0x3fcbde = [];
    for (let _0x3a59b8 = 0x0; _0x3a59b8 < _0x3348a6.length; _0x3a59b8++) {
      _0x3fcbde.push({
        'name': _0x3348a6[_0x3a59b8].name,
        'buttonParamsJson': JSON.parse(JSON.stringify(_0x3348a6[_0x3a59b8].buttonParamsJson))
      });
    }
    var _0x36a77e = await prepareWAMessageMedia({
      'image': _0x41c46b
    }, _0xb97211);
    let _0x5b22f3 = generateWAMessageFromContent(_0x3012f4, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            ..._0x7c7243,
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x21d0c7
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': _0x7a53b3,
              'subtitle': _0x7a53b3,
              'hasMediaAttachment': true,
              'imageMessage': _0x36a77e.imageMessage
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x3fcbde
            })
          })
        }
      }
    }, {
      'quoted': _0x339bb6
    });
    _0x330c95.relayMessage(_0x5b22f3.key.remoteJid, _0x5b22f3.message, {
      'messageId': _0x5b22f3.key.id
    });
    return _0x5b22f3;
  };
  _0x330c95.sendButtonVideo = async (_0x5073e2, _0x589782, _0x30f2df = [], _0x3b1c15, _0x7c9180, _0xb9b413 = '', _0x53779b = {
    'contextInfo': {
      'mentionedJid': parseMention(_0x3b1c15)
    }
  }) => {
    let _0x274ce9 = [];
    for (let _0x5110b1 = 0x0; _0x5110b1 < _0x30f2df.length; _0x5110b1++) {
      _0x274ce9.push({
        'name': _0x30f2df[_0x5110b1].name,
        'buttonParamsJson': JSON.parse(JSON.stringify(_0x30f2df[_0x5110b1].buttonParamsJson))
      });
    }
    var _0x2bc7d1 = await prepareWAMessageMedia({
      'video': _0x589782
    }, _0xb97211);
    let _0x3d06f1 = generateWAMessageFromContent(_0x5073e2, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            ..._0x53779b,
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x7c9180
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': _0x3b1c15,
              'subtitle': _0x3b1c15,
              'videoMessage': _0x2bc7d1.videoMessage,
              'hasMediaAttachment': true
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x274ce9
            })
          })
        }
      }
    }, {
      'quoted': _0xb9b413
    });
    _0x330c95.relayMessage(_0x3d06f1.key.remoteJid, _0x3d06f1.message, {
      'messageId': _0x3d06f1.key.id
    });
    return _0x3d06f1;
  };
  _0x330c95.sendButtonDocument = async (_0x3a1a97, _0x2c84c1 = {}, _0x402eea = [], _0x5c955a, _0x58c987, _0x45c8e8 = '', _0x4fc936 = {
    'contextInfo': {
      'mentionedJid': parseMention(_0x5c955a)
    }
  }) => {
    let _0x38d136 = [];
    for (let _0x46d360 = 0x0; _0x46d360 < _0x402eea.length; _0x46d360++) {
      _0x38d136.push({
        'name': _0x402eea[_0x46d360].name,
        'buttonParamsJson': JSON.parse(JSON.stringify(_0x402eea[_0x46d360].buttonParamsJson))
      });
    }
    let _0x332099 = generateWAMessageFromContent(_0x3a1a97, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            ..._0x4fc936,
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x5c955a
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x58c987
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'hasMediaAttachment': true,
              ...(await prepareWAMessageMedia(_0x2c84c1, {
                'upload': _0x330c95.waUploadToServer
              }))
            }),
            'gifPlayback': true,
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x38d136
            })
          })
        }
      }
    }, {
      'quoted': _0x45c8e8
    });
    await _0x330c95.relayMessage(_0x332099.key.remoteJid, _0x332099.message, {
      'messageId': _0x332099.key.id
    });
    return _0x332099;
  };
  _0x330c95.sendText = (_0x14dbc7, _0x320b3f, _0x3b6df3 = '', _0x134793) => _0x330c95.sendMessage(_0x14dbc7, {
    'text': _0x320b3f,
    ..._0x134793
  }, {
    'quoted': _0x3b6df3,
    ..._0x134793
  });
  _0x330c95.sendImage = async (_0x22e918, _0x335020, _0x12e965 = '', _0x20b789 = '', _0x677a78) => {
    let _0x4f73d9 = Buffer.isBuffer(_0x335020) ? _0x335020 : /^data:.*?\/.*?;base64,/i.test(_0x335020) ? Buffer.from(_0x335020.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x335020) ? await await getBuffer(_0x335020) : fs.existsSync(_0x335020) ? fs.readFileSync(_0x335020) : Buffer.alloc(0x0);
    return await _0x330c95.sendMessage(_0x22e918, {
      'image': _0x4f73d9,
      'caption': _0x12e965,
      ..._0x677a78
    }, {
      'quoted': _0x20b789
    });
  };
  _0x330c95.sendTextWithMentions = async (_0x34890b, _0x3771a2, _0x23fdd4, _0x1a518b = {}) => _0x330c95.sendMessage(_0x34890b, {
    'text': _0x3771a2,
    'mentions': [..._0x3771a2.matchAll(/@(\d{0,16})/g)].map(_0x1b0491 => _0x1b0491[0x1] + "@s.whatsapp.net"),
    ..._0x1a518b
  }, {
    'quoted': _0x23fdd4
  });
  _0x330c95.sendFromOwner = async (_0x107109, _0x2cde0b, _0x39e3d4, _0x230c57 = {}) => {
    for (const _0x551e65 of _0x107109) {
      await _0x330c95.sendMessage(_0x551e65 + "@s.whatsapp.net", {
        'text': _0x2cde0b,
        ..._0x230c57
      }, {
        'quoted': _0x39e3d4
      });
    }
  };
  _0x330c95.sendImageAsSticker = async (_0x100017, _0x568ec2, _0x2066f2, _0x57f20a = {}) => {
    let _0x147360 = Buffer.isBuffer(_0x568ec2) ? _0x568ec2 : /^data:.*?\/.*?;base64,/i.test(_0x568ec2) ? Buffer.from(_0x568ec2.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x568ec2) ? await await getBuffer(_0x568ec2) : fs.existsSync(_0x568ec2) ? fs.readFileSync(_0x568ec2) : Buffer.alloc(0x0);
    let _0x426a17;
    if (_0x57f20a && (_0x57f20a.packname || _0x57f20a.author)) {
      _0x426a17 = await writeExifImg(_0x147360, _0x57f20a);
    } else {
      _0x426a17 = await imageToWebp(_0x147360);
    }
    await _0x330c95.sendMessage(_0x100017, {
      'sticker': {
        'url': _0x426a17
      },
      ..._0x57f20a
    }, {
      'quoted': _0x2066f2
    }).then(_0x56bc72 => {
      fs.unlinkSync(_0x426a17);
      return _0x56bc72;
    });
  };
  _0x330c95.sendAudio = async (_0x34c824, _0x1bc4fc, _0x4c9a65 = '', _0x5dadc4 = false, _0x58e662) => {
    let _0x54eae4 = Buffer.isBuffer(_0x1bc4fc) ? _0x1bc4fc : /^data:.*?\/.*?;base64,/i.test(_0x1bc4fc) ? Buffer.from(_0x1bc4fc.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x1bc4fc) ? await await getBuffer(_0x1bc4fc) : fs.existsSync(_0x1bc4fc) ? fs.readFileSync(_0x1bc4fc) : Buffer.alloc(0x0);
    return await _0x330c95.sendMessage(_0x34c824, {
      'audio': _0x54eae4,
      'ptt': _0x5dadc4,
      ..._0x58e662
    }, {
      'quoted': _0x4c9a65
    });
  };
  _0x330c95.sendVideo = async (_0x2def27, _0x9a1a69, _0x31b188 = '', _0x21c2a1 = '', _0x4b55a1 = false, _0x4caa69) => {
    let _0x518984 = Buffer.isBuffer(_0x9a1a69) ? _0x9a1a69 : /^data:.*?\/.*?;base64,/i.test(_0x9a1a69) ? Buffer.from(_0x9a1a69.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x9a1a69) ? await await getBuffer(_0x9a1a69) : fs.existsSync(_0x9a1a69) ? fs.readFileSync(_0x9a1a69) : Buffer.alloc(0x0);
    return await _0x330c95.sendMessage(_0x2def27, {
      'video': _0x518984,
      'caption': _0x31b188,
      'gifPlayback': _0x4b55a1,
      ..._0x4caa69
    }, {
      'quoted': _0x21c2a1
    });
  };
  _0x330c95.sendVideoAsSticker = async (_0x570d61, _0x1938de, _0x120892, _0x5b243d = {}) => {
    let _0x4ef909 = Buffer.isBuffer(_0x1938de) ? _0x1938de : /^data:.*?\/.*?;base64,/i.test(_0x1938de) ? Buffer.from(_0x1938de.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x1938de) ? await await getBuffer(_0x1938de) : fs.existsSync(_0x1938de) ? fs.readFileSync(_0x1938de) : Buffer.alloc(0x0);
    let _0x3631ef;
    if (_0x5b243d && (_0x5b243d.packname || _0x5b243d.author)) {
      _0x3631ef = await writeExifVid(_0x4ef909, _0x5b243d);
    } else {
      _0x3631ef = await videoToWebp(_0x4ef909);
    }
    await _0x330c95.sendMessage(_0x570d61, {
      'sticker': {
        'url': _0x3631ef
      },
      ..._0x5b243d
    }, {
      'quoted': _0x120892
    });
    return _0x3631ef;
  };
  _0x330c95.sendFileUrl = async (_0x3fdb57, _0x2f07ca, _0x4687e3, _0x35b1c7, _0x1462c7 = {}) => {
    let _0x4dc99e = '';
    let _0x1c47b0 = await axios.head(_0x2f07ca);
    _0x4dc99e = _0x1c47b0.headers["content-type"];
    if (_0x4dc99e.split('/')[0x1] === "gif") {
      return _0x330c95.sendMessage(_0x3fdb57, {
        'video': await getBuffer(_0x2f07ca),
        'caption': _0x4687e3,
        'gifPlayback': true,
        ..._0x1462c7
      }, {
        'quoted': _0x35b1c7,
        ..._0x1462c7
      });
    }
    if (_0x4dc99e === "application/pdf") {
      return _0x330c95.sendMessage(_0x3fdb57, {
        'document': await getBuffer(_0x2f07ca),
        'mimetype': "application/pdf",
        'caption': _0x4687e3,
        ..._0x1462c7
      }, {
        'quoted': _0x35b1c7,
        ..._0x1462c7
      });
    }
    if (_0x4dc99e.split('/')[0x0] === 'image') {
      return _0x330c95.sendMessage(_0x3fdb57, {
        'image': await getBuffer(_0x2f07ca),
        'caption': _0x4687e3,
        ..._0x1462c7
      }, {
        'quoted': _0x35b1c7,
        ..._0x1462c7
      });
    }
    if (_0x4dc99e.split('/')[0x0] === "video") {
      return _0x330c95.sendMessage(_0x3fdb57, {
        'video': await getBuffer(_0x2f07ca),
        'caption': _0x4687e3,
        'mimetype': 'video/mp4',
        ..._0x1462c7
      }, {
        'quoted': _0x35b1c7,
        ..._0x1462c7
      });
    }
    if (_0x4dc99e.split('/')[0x0] === 'audio') {
      return _0x330c95.sendMessage(_0x3fdb57, {
        'audio': await getBuffer(_0x2f07ca),
        'caption': _0x4687e3,
        'mimetype': "audio/mpeg",
        ..._0x1462c7
      }, {
        'quoted': _0x35b1c7,
        ..._0x1462c7
      });
    }
  };
  _0x330c95.getFile = async (_0x3d821c, _0x37485d) => {
    let _0x10f094;
    let _0x243a4a = Buffer.isBuffer(_0x3d821c) ? _0x3d821c : /^data:.*?\/.*?;base64,/i.test(_0x3d821c) ? Buffer.from(_0x3d821c.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x3d821c) ? await (_0x10f094 = await getBuffer(_0x3d821c)) : fs.existsSync(_0x3d821c) ? (filename = _0x3d821c, fs.readFileSync(_0x3d821c)) : typeof _0x3d821c === "string" ? _0x3d821c : Buffer.alloc(0x0);
    let _0x4d2306 = (await FileType.fromBuffer(_0x243a4a)) || {
      'mime': "application/octet-stream",
      'ext': '.bin'
    };
    filename = path.join(__filename, '../temp/' + new Date() * 0x1 + '.' + _0x4d2306.ext);
    if (_0x243a4a && _0x37485d) {
      fs.promises.writeFile(filename, _0x243a4a);
    }
    return {
      'res': _0x10f094,
      'filename': filename,
      'size': await getSizeMedia(_0x243a4a),
      ..._0x4d2306,
      'data': _0x243a4a
    };
  };
  _0x330c95.sendFile = async (_0x4da1cc, _0x5f1013, _0x3b54ac = '', _0x3c3cfc = '', _0x4be1a0, _0x3eae26 = false, _0x154547 = {}) => {
    let _0x1c17a5 = await _0x330c95.getFile(_0x5f1013, true);
    let {
      res: _0x29d34a,
      data: _0x2a49ad,
      filename: _0x3be7be
    } = _0x1c17a5;
    if (_0x29d34a && _0x29d34a.status !== 0xc8 || _0x2a49ad.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x2a49ad.toString())
        };
      } catch (_0x4794f0) {
        if (_0x4794f0.json) {
          throw _0x4794f0.json;
        }
      }
    }
    let _0x4e5d8f = {
      'filename': _0x3b54ac
    };
    if (_0x4be1a0) {
      _0x4e5d8f.quoted = _0x4be1a0;
    }
    if (!_0x1c17a5) {
      _0x154547.asDocument = true;
    }
    let _0x39012b = '';
    let _0x124fee = _0x1c17a5.mime;
    let _0x2c1c93;
    if (/webp/.test(_0x1c17a5.mime) || /image/.test(_0x1c17a5.mime) && _0x154547.asSticker) {
      _0x39012b = "sticker";
    } else {
      if (/image/.test(_0x1c17a5.mime) || /webp/.test(_0x1c17a5.mime) && _0x154547.asImage) {
        _0x39012b = "image";
      } else {
        if (/video/.test(_0x1c17a5.mime)) {
          _0x39012b = 'video';
        } else {
          if (/audio/.test(_0x1c17a5.mime)) {
            _0x2c1c93 = await (_0x3eae26 ? toPTT : toAudio)(_0x2a49ad, _0x1c17a5.ext);
            _0x2a49ad = _0x2c1c93.data;
            _0x3be7be = _0x2c1c93.filename;
            _0x39012b = "audio";
            _0x124fee = "audio/ogg; codecs=opus";
          } else {
            _0x39012b = "document";
          }
        }
      }
    }
    if (_0x154547.asDocument) {
      _0x39012b = 'document';
    }
    delete _0x154547.asSticker;
    delete _0x154547.asLocation;
    delete _0x154547.asVideo;
    delete _0x154547.asDocument;
    delete _0x154547.asImage;
    let _0x421ebe = {
      ..._0x154547,
      'caption': _0x3c3cfc,
      'ptt': _0x3eae26,
      [_0x39012b]: {
        'url': _0x3be7be
      },
      'mimetype': _0x124fee
    };
    let _0x54b985;
    try {
      _0x54b985 = await _0x330c95.sendMessage(_0x4da1cc, _0x421ebe, {
        ..._0x4e5d8f,
        ..._0x154547
      });
    } catch (_0x56e17b) {
      console.error(_0x56e17b);
      _0x54b985 = null;
    } finally {
      if (!_0x54b985) {
        _0x54b985 = await _0x330c95.sendMessage(_0x4da1cc, {
          ..._0x421ebe,
          [_0x39012b]: _0x2a49ad
        }, {
          ..._0x4e5d8f,
          ..._0x154547
        });
      }
      _0x2a49ad = null;
      return _0x54b985;
    }
  };
  _0x330c95.sendPoll = (_0x3a240c, _0x528209 = '', _0x1474e4 = [], _0xdd0800 = global.select) => {
    return _0x330c95.sendMessage(_0x3a240c, {
      'poll': {
        'name': _0x528209,
        'values': _0x1474e4,
        'selectableCount': _0xdd0800
      }
    });
  };
  _0x330c95.cMod = (_0x442c71, _0x5758b3, _0x258295 = '', _0x37cdc1 = _0x330c95.user.id, _0x4414a0 = {}) => {
    let _0xfa4f18 = Object.keys(_0x5758b3.message)[0x0];
    let _0x5c9e7a = _0xfa4f18 === 'ephemeralMessage';
    if (_0x5c9e7a) {
      _0xfa4f18 = Object.keys(_0x5758b3.message.ephemeralMessage.message)[0x0];
    }
    let _0x590f83 = _0x5c9e7a ? _0x5758b3.message.ephemeralMessage.message : _0x5758b3.message;
    let _0x1bc88b = _0x590f83[_0xfa4f18];
    if (typeof _0x1bc88b === "string") {
      _0x590f83[_0xfa4f18] = _0x258295 || _0x1bc88b;
    } else {
      if (_0x1bc88b.caption) {
        _0x1bc88b.caption = _0x258295 || _0x1bc88b.caption;
      } else {
        if (_0x1bc88b.text) {
          _0x1bc88b.text = _0x258295 || _0x1bc88b.text;
        }
      }
    }
    if (typeof _0x1bc88b !== "string") {
      _0x590f83[_0xfa4f18] = {
        ..._0x1bc88b,
        ..._0x4414a0
      };
    }
    if (_0x5758b3.key.participant) {
      _0x37cdc1 = _0x5758b3.key.participant = _0x37cdc1 || _0x5758b3.key.participant;
    } else {
      if (_0x5758b3.key.participant) {
        _0x37cdc1 = _0x5758b3.key.participant = _0x37cdc1 || _0x5758b3.key.participant;
      }
    }
    if (_0x5758b3.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x37cdc1 = _0x37cdc1 || _0x5758b3.key.remoteJid;
    } else {
      if (_0x5758b3.key.remoteJid.includes('@broadcast')) {
        _0x37cdc1 = _0x37cdc1 || _0x5758b3.key.remoteJid;
      }
    }
    _0x5758b3.key.remoteJid = _0x442c71;
    _0x5758b3.key.fromMe = _0x37cdc1 === _0x330c95.user.id;
    return proto.WebMessageInfo.fromObject(_0x5758b3);
  };
  _0x330c95.sendMedia = async (_0x1e28dc, _0x1bf143, _0xf7df51 = '', _0x25c536 = '', _0x5e74f1 = '', _0x4ebcc4 = {}) => {
    let _0x5cacc2 = await _0x330c95.getFile(_0x1bf143, true);
    let {
      mime: _0x4ab9ab,
      ext: _0xb17b87,
      res: _0x4e1c42,
      data: _0x7d58a3,
      filename: _0x1e3397
    } = _0x5cacc2;
    if (_0x4e1c42 && _0x4e1c42.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x1ff4e7) {
        if (_0x1ff4e7.json) {
          throw _0x1ff4e7.json;
        }
      }
    }
    let _0x57566d = '';
    let _0x489947 = _0x4ab9ab;
    let _0x13f7fb = _0x1e3397;
    if (_0x4ebcc4.asDocument) {
      _0x57566d = "document";
    }
    if (_0x4ebcc4.asSticker || /webp/.test(_0x4ab9ab)) {
      let {
        writeExif: _0x12a49c
      } = require("./lib/exif");
      let _0x5f04f4 = {
        'mimetype': _0x4ab9ab,
        'data': _0x7d58a3
      };
      _0x13f7fb = await _0x12a49c(_0x5f04f4, {
        'packname': _0x4ebcc4.packname ? _0x4ebcc4.packname : global.packname,
        'author': _0x4ebcc4.author ? _0x4ebcc4.author : global.author,
        'categories': _0x4ebcc4.categories ? _0x4ebcc4.categories : []
      });
      await fs.promises.unlink(_0x1e3397);
      _0x57566d = "sticker";
      _0x489947 = 'image/webp';
    } else {
      if (/image/.test(_0x4ab9ab)) {
        _0x57566d = "image";
      } else {
        if (/video/.test(_0x4ab9ab)) {
          _0x57566d = "video";
        } else {
          if (/audio/.test(_0x4ab9ab)) {
            _0x57566d = 'audio';
          } else {
            _0x57566d = "document";
          }
        }
      }
    }
    await _0x330c95.sendMessage(_0x1e28dc, {
      [_0x57566d]: {
        'url': _0x13f7fb
      },
      'caption': _0x25c536,
      'mimetype': _0x489947,
      'fileName': _0xf7df51,
      ..._0x4ebcc4
    }, {
      'quoted': _0x5e74f1,
      ..._0x4ebcc4
    });
    return fs.promises.unlink(_0x13f7fb);
  };
  _0x330c95.copyNForward = async (_0x2fc796, _0x27832d, _0x528d56 = false, _0x22dae0 = {}) => {
    let _0x1239c5;
    if (_0x22dae0.readViewOnce) {
      _0x27832d.message = _0x27832d.message && _0x27832d.message.ephemeralMessage && _0x27832d.message.ephemeralMessage.message ? _0x27832d.message.ephemeralMessage.message : _0x27832d.message || undefined;
      _0x1239c5 = Object.keys(_0x27832d.message.viewOnceMessage.message)[0x0];
      delete (_0x27832d.message && _0x27832d.message.ignore ? _0x27832d.message.ignore : _0x27832d.message || undefined);
      delete _0x27832d.message.viewOnceMessage.message[_0x1239c5].viewOnce;
      _0x27832d.message = {
        ..._0x27832d.message.viewOnceMessage.message
      };
    }
    let _0x497495 = Object.keys(_0x27832d.message)[0x0];
    let _0x5935e5 = await generateForwardMessageContent(_0x27832d, _0x528d56);
    let _0x282cf6 = Object.keys(_0x5935e5)[0x0];
    let _0x213004 = {};
    if (_0x497495 != "conversation") {
      _0x213004 = _0x27832d.message[_0x497495].contextInfo;
    }
    _0x5935e5[_0x282cf6].contextInfo = {
      ..._0x213004,
      ..._0x5935e5[_0x282cf6].contextInfo
    };
    const _0x4c58a4 = await generateWAMessageFromContent(_0x2fc796, _0x5935e5, _0x22dae0 ? {
      ..._0x5935e5[_0x282cf6],
      ..._0x22dae0,
      ...(_0x22dae0.contextInfo ? {
        'contextInfo': {
          ..._0x5935e5[_0x282cf6].contextInfo,
          ..._0x22dae0.contextInfo
        }
      } : {})
    } : {});
    await _0x330c95.relayMessage(_0x2fc796, _0x4c58a4.message, {
      'messageId': _0x4c58a4.key.id
    });
    return _0x4c58a4;
  };
  _0x330c95.parseMention = (_0x38af3f = '') => {
    return [..._0x38af3f.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x896c98 => _0x896c98[0x1] + "@s.whatsapp.net");
  };
  _0x330c95.downloadAndSaveMediaMessage = async (_0x76f6b0, _0x4460bb, _0x4af463 = true) => {
    let _0x168dd8 = _0x76f6b0.msg ? _0x76f6b0.msg : _0x76f6b0;
    let _0x5d769e = (_0x76f6b0.msg || _0x76f6b0).mimetype || '';
    let _0x4daf01 = _0x76f6b0.mtype ? _0x76f6b0.mtype.replace(/Message/gi, '') : _0x5d769e.split('/')[0x0];
    const _0x2e64bd = await downloadContentFromMessage(_0x168dd8, _0x4daf01);
    let _0xd45db8 = Buffer.from([]);
    for await (const _0x5b32a1 of _0x2e64bd) {
      _0xd45db8 = Buffer.concat([_0xd45db8, _0x5b32a1]);
    }
    let _0x3ff9f7 = await FileType.fromBuffer(_0xd45db8);
    let _0x87f9da = _0x4af463 ? "./temp/" + _0x4460bb + '.' + _0x3ff9f7.ext : './temp/' + _0x4460bb;
    await fs.writeFileSync(_0x87f9da, _0xd45db8);
    return _0x87f9da;
  };
  _0x330c95.downloadMediaMessage = async _0x3ac5d3 => {
    let _0x3b6445 = (_0x3ac5d3.msg || _0x3ac5d3).mimetype || '';
    let _0x210347 = _0x3ac5d3.mtype ? _0x3ac5d3.mtype.replace(/Message/gi, '') : _0x3b6445.split('/')[0x0];
    const _0x45ce14 = await downloadContentFromMessage(_0x3ac5d3, _0x210347);
    let _0xe8f902 = Buffer.from([]);
    for await (const _0x52acb3 of _0x45ce14) {
      _0xe8f902 = Buffer.concat([_0xe8f902, _0x52acb3]);
    }
    return _0xe8f902;
  };
  return _0x330c95;
}
;
startHaruka();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});