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
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0R2SmVhRndnN1dHQkZOd0x4Y2VhckRhYVVjbVpsVU8wRm93aG53NTUwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFpwREN5eFJlOVdsbzZPb3lJWFVYdVBNUFRvam5oQmVBZnJtVlkrR1hCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUHgyYk5CZHVWZWQ2TUVMbDVEODdLTG9YZkNxT1ZJS3JXWVdDenFIMlhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzekkxYTB0Y3dVWjJIdlNOTnZ4ejMyOGlLaWZEYkkxSURGL01naTZNb1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldObVpDSjRKU3VvNE5wTVVlVEh6dDdmOVV3TEpqY3crQjVHSGd1UFk3MGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii92eTRHQUwwK0t5blN5NHlYMkVGNjF1a2ozenVLWnF5VzRsMlFvVmJtQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZMelk3RmdiRXVCbXZVVWdZblBJNlkrRmVLSzFRQWdZNEV0ck43SHVXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidC9BTSs4S3ErUVUyZThOSjlMWkZuTEw2dWpIM1dGSVpuTVpSb0VqTTlFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYyUk90ek9WUzRBekRpNDR3NUxWcXVhc3ZJYTRQOUQrNUVFM1BESU96cXM3dDkvMmxZajNqRzI2N3JKb1dFN2JlVkxaMm96dGpoL1FQYUR6Z1FmM2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJUeEE3ME9xY3hsRjRhbUN4eFFJYW1Kem9PYUVyTEREYTRRYzJBOTRhZjlzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAyMzMxOTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVCQzJBQTIyOEYyQkVENTg2OTM2QjFBMzJCMUQ0RDBFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg2NjU5NjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAyMzMxOTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3MTgzQkIwOEU2QTFENjRCNTM5NkVCMTVENDU4MTg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg2NjU5NjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkMyNXRqZWxaVEQyMUdHcXplY1lWV3ciLCJwaG9uZUlkIjoiZTE0MDNkZGUtZmZjNy00NzZjLThmMWUtODA4ZDdiNTEwYTU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNUT3laYlBkSzVpazFIV2JDMnhKZEtRelEvST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEdERaVm9sSUFXOE1tZ1RKVHF3aFVLRUgrQjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlFKUk04N1giLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIzwnZCr4oiF8J2Vg/CdlYbwnZWM8J2VgvCdlYrwnZWG4oSVIPCdlYzihKTwnZWM8J2VhPCdlLjwnZWC8J2VgCAg8J2Vi/CdlLzihILihI0v4oiFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnQrYU1GRU5peXBiZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPSIsImFjY291bnRTaWduYXR1cmUiOiI2aTFOSC80NFJXUllBZWMzdGtTeVgrbGVoQ2VDUEx3WU9lVTFCeFRRZkRzRFMvakQvSmxxa0pJQzlzRHlOZUc2NG5wRGN5clNrTVpSQzlDVmpwS29Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRnltYkxuVmlXRzljWExHcWhrZ1Zaa1p1MGxma2NDSTJzaDNwaEdZc0Evb3FIcklTVGdPUVFnZVEvV3BDVFpNaEtEdzlIWTlFMXpqRWkxWGhseDhUaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwMjMzMTk4ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSTdCeHkzUkErVG5JckNNVHVlcUFrajVhOU1KYXowdHQ1SUpCNHV5cHRCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NjY1OTU4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhuViJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
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
