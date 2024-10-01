//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4";
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FZcEUwUEFkOHU1WlkrNkcveDdjdGpDTUFLYk9CWThQRkpMNXNiMlNWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTFmcFg4VG9jVXZacXkwWm1DdnViVy9xU1N5Q2NnY1NuOFJYek05dDVoUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTUhxSTBicW1pcUJWd2RXNERWMFg5M0tFSkhmRnF3OGQyekdHTWpvRm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDgwUlNNWnpQYVArVE1PYWFyV3JnZWx5VXFlV3pvOEV2YmV4WmcrWTN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDSllyVGtpS3pKUXkvN0lWSktXSndMOGs0YzIxcngwRk1LTzVoajlnR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhMUWI4QmdGRmZ3NlpvK2FQWmJaZ282WmxqeldCNkkyODBKWmJUZVI1a289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhHazNjbmRGMHYydXdZaGxrTVhtaStKU1pxQUZXc3YweWR3SUZ1UGYzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmdMMjNTVGZTWEZoRFBDa2M2MExYcWFqT3RZYWx4bjIyNFhEdUlGVWkwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksvWFY1Y1VEcTFwajhOTXZDbzlaajJVSG5McUxKNDJyRFppVFNzNG5xTlN2NjFKTGdxYkszNDZBZjFQbzN5MThCVkMyQnpsTkIyWlllTzBBcWp3L0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6ImY1eFFOdkNyOXdoMW1BZFBoMGoxY05nQVdtajhkckQyYS80aXg0UkxGVGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVyblZ1RzJOUm1xX3R3QUJDN0lud2ciLCJwaG9uZUlkIjoiMTMxZDcwNGQtMjMyNC00Yjg0LTljYWEtNDkzNDE1ZTQ4ZmMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzY2hKOHBPV282bWtOKzA3ZTJXOTNQaVovYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIR3p1RVliaFk1RXgrSEc1SjlhNm5nYmFpT3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjM0SkVNTFEiLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4OjcwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hsqf4bSP4bSc4bSLc+G0j8m0IOG1mOG2u+G1mOG1kOG1g+G1j+KBseC8kiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRjejRvREVPU2k4TGNHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3FTQkkvTXcxS1hPdW1tblBZZFBmZDcrWEJKM1hwclFIYnhiSWh4cHlYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMUFoVjljYTFuWmsrVURhaEVFU0Z2SE5zZHp1Wk1qWVcxYkkyK2F2ZVBDclAvQTA2NlJkR0lHYnNaUlBrVHY0dXZla1AzTGRsR1BqT3h4QmQ3cFNrQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVvSjdPdEhGWnFQamF4TlBoVE1LNHc0QUU5TW4vWHhoaDQ0UlZDRVNER2prbkg5N2R3QXN6ck8zVHF0R1lRaWlON0pnWm1reDl6R3B2Rk8vN3hrbkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXFrZ1NQek1OU2x6cnBwcHoySFQzM2UvbHdTZDE2YTBCMjhXeUljYWNsLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzc5NTU3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGUnMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "NARUTO-MD",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
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
