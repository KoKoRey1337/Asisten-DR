const fs = require('fs');
const chalk = require('chalk');

global.botName = 'AsisTen Human v4'; // Nama Bot Kamu
global.ownerNumber = '6282137829041'; // Nomor Kamu
global.ownerName = 'Inisial D.W.Ms'; // Nama Kamu
global.website = 'https://deguzmanlegal.com/'; // Web Kamu
global.wagc = 'https://www.darkroom.id'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© 2018 · Inisial D.W.Ms';
global.creator = '6282137829041@s.whatsapp.net'; // Nomor Creator
global.premium = ['6282137829041']; // User Premium
global.prefa = '/'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = 'https://whatsapp.com/channel/0029Vb5bwgaCcW4tkVGBrJ32'; // ID Saluran Kamu
global.saluranName = 'DarkRoom ~ RandomCH 📣'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = 'https://control.optikservers.com'; // Link Panel Kamu
global.cred = 'ptla_aPkBJgJLb5Af29zPTI6FwicgPV8Bw9kuuiTLxp6WEq5'; // API PTLA Kamu
global.apiuser = 'ptlc_XZ8jqmbIbeNLmY8GS3DLdgBmErMlj4Cb36OWno0SAuT'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4OB2M_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822779"; // Zone ID CF Kamu
global.CF_DOMAIN = "optikservers.com"; // Nama Domain Kamu di CF

global.typemenu = 'v1'; // Gaya Menu v1-v5
global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg
global.notifRegister = true // Notif Register
global.onlyRegister = true // Hanya Pendaftar

global.payment = {
	dana: "0813-8548-6377",
	gopay: "0813-8548-6377",
	ovo: "0813-8548-6377",
	qris: "https://8030.us.kg/file/CTyEU3VdcbcL.png",
	shopeePay: "0813-8548-6377",
	seabank: "0813-8548-6377"
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! 🫢",
	botAdmin: "Hu Tao harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "Done Kak! ✨",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak! 😖",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	wait: "Tunggu sebentar ya, Kak... Hu Tao lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://8030.us.kg/file/VrPJDEYqGo4B.jpg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://8030.us.kg/file/VrPJDEYqGo4B.jpg"; // Url Image
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})