//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dHR1JhWEgrZ3BwaG5lOTNpVFBWUFhaZmJ5VDNORTdlTTVUdXRNSjcyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWStiNGg2amV6cW13aXF4VUFFbTZZZCttR2c5anNWb3pxYm1kMHM4U2ozUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQzJMMlNoMTZsSm03QjNrVlk5VlgzRnNyQ2I1WG9HTGI2ZnZOR1daYUhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWc3RDa3R6TDNVdXlZU05wODlJemhMMVR2ejMxOWNvcVRsRVQ4YXlzTzA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPUXNtMEY1Qng2dTFBNmlBb1hrbm5ZYjRHMEttaUUwUnhvVWhqd21pVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJhbGViMzRIVU5DVDkvTXhDekp6Mi9pcnpkaUtFTjFLbkZvVlZWWDVFSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tGWFdIYzRVNk1LR01nTFlkdTZsYUlWdnBDM0hmM1Z6QnJ5VkRRUkFXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmpnUUdNSkphYmI0bTkzRExNRkxjbkQ5d2tZSU9VM0dyWjltVXErQXpVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRWUVVnb0NsMkVMaDhOa1FEN2xlRkwwNXpkVlo5Q1JkVFBrMkFHMklJbnU5V3FvU2VhVFBTMGpkY3Vsc0xhN0xXcG1YbkFqN2NwZ1JXQTV6OUR6Ymh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IkZvaTBXQ0dod3JYNFNRQzRqSi84U3NMS3VxWHRGOThETFBBR0NxQ3BWZWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkQwbmFacDcyU05XeHRnUzRRYmZYcGciLCJwaG9uZUlkIjoiNjQyMzI0YjctMDg5Mi00OTg0LWI1NjQtM2M5NTE5Mzk1NmMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5EV1dMMHhZSEt2NVBxbFhodFRQaDZRY2ZBaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRkxPSUZndGh1a2V0QTdIUmw2bVNLYzBzdTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzVWRFNSMjUiLCJtZSI6eyJpZCI6IjM1ODQ1NzM5ODM4NTY6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2au/Cdmq7wnZq18J2QmCDwnZCK8J2atPCdmq/wnZCWIPCdmrPwnZq1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNelo0bHdRNm9IUXRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuNW9wTDg5WFNzRWRjTXpZaG90U2czNldXeVRpbHpHU3BwWnBqNmFKbmdRPSIsImFjY291bnRTaWduYXR1cmUiOiJmNGI3YUw5ZVI4Q3kyNEZoOTd4Ny9qcE43SnpXandUZFhVcGNWM0l3TTJrQ0hSQkJBWmF3MXpVQ0pPSmlLRFA1ekd3MTUvbFM1QUxiQlo0WmJLRFlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicFYxWkZOaGxCTGZCTGV4UEx6aEdCellQMFBWai93dzBzS2NmV29KZkZPL3JJcDRZZitzWTAyV2gvakRzaGt4RkZrcTR3ODNmWlBqb2xRSVJ2UGNDanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNTg0NTczOTgzODU2OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlorYUtTL1BWMHJCSFhETTJJYUxVb04rbGxzazRwY3hrcWFXYVkrbWlaNEUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5NzU2MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSS83In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
