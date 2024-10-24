//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Loukson/NARUTO-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "243891624013";
global.owner = process.env.OWNER_NUMBER || "243891624013";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dmKqfTP.jpg,https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dbuMtaa.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU44all2QTNkVmFLSDZINkRsMGRJRDhWZUlYeUczWnRUSmx5Z0xINnpHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZiVjhhT3cwY3QzNUtYS2FuQ1BISVAzMHNjZitOVjA1WkdkeFkzL2FrRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1pNbXZ3VGVzdmtYVjIyRDFNYi9FTmJWU204ZnFhbDlBVXJISXJLSDJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvK3NZenJMNDFibGIzYk9tSmNhWExTM0pzYlBEWjdrbzk4Q3BiTTduZ3kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCYlFST3U2dnk5NkFTRU1pdUhkckROc3dwZkZ6amNZOURHUEZGTXA3blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQvRFBKZUdHbkoxSURVWWM3am1rb21CbGRTcGEwV1JYWjhlRHExVlg0Z1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dRSlI4UC9BdnpvUll4RForSmVjdnc2ZnFwU1FQMUZ6MVY2MjMwM3Bsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiby9rVDNYRnBDMkprUFdyRTVmZTBvR2Y1TWdEZHJjUG0yOFdkdGFWcjBTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhDKzAxUEVPazA2clZnOWlVZWhQamxncUxPaU9hb2xWNkhSMlVRc1c3NDRtVEtQckNqbDJXVE5Lc2svaWtUWUtWUFBPeHNrNVZ5Ky8rbmltRUhtekFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6ImFnSElQaHNseGFDdVVORmFibS8wcGR3Y2swdEswRzVCdW1iSmQreGZnWGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRVTVBDM3NHUTl5clhDdTZNVk16NnciLCJwaG9uZUlkIjoiZTcyZGMxNmEtZmFjNS00MGI1LTlhOWMtZWQxNGQ1MWUzZjMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhOMXcvS29iSW1IaHJvaFhTUDdoSUhtWXVNZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUkw1TlJXY0RBRWMxMUZ0ejNJWEFyeDBxSDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0g0OFFCVjUiLCJtZSI6eyJpZCI6IjI0Mzg5MTYyNDAxMzoyOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFdaNlRvUWw3dnJ1QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWdoNFdoOEdiYWhidjlsOGROSTUwajI5SHljSnRYUEJ2d0hRVkdsVThDYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYVBMNWRCKzgrTWFzMGhSbS9mZUFJTUhMMTVDaXRxZ1AyWDNiZXlVcFRXU09aaHNXSkFtczI3bFdoNXlMczZaQUdLd1hiSGFTZEhDMktXTjEzbzYzQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFEUG8xWGg1Y0o1cnVRU0lMV3gzMlZyUDBoK2FnV3JPelplMHl6VnhVYStOSmNsbEJKaVBES1I4ZGNlRStJK09EZEdaNGpBRHRxS2hySXVBaUdwMUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzODkxNjI0MDEzOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZSWVGb2ZCbTJvVzcvWmZIVFNPZEk5dlI4bkNiVnp3YjhCMEZScFZQQW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk4MTM5MjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTStMIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WENDY-MD™`",
  author: process.env.PACK_AUTHER || "WEN AK47",
  packname: process.env.PACK_NAME || "WEN AK47",
  botname: process.env.BOT_NAME || "WENDY-MD",
  ownername: process.env.OWNER_NAME || "WEN AK47",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
