//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUduaEQwaW1MSXJzeENDL0RCbHMvVzN6TEtaaUVncm1WRllIbS92dkxrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZvMnlpOUlreldqNldqNWVveDlFQWVvZEFVV0o2SzA4WFF1ZTZUT0Vodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSXRFVlcycWdUaUJUNU5YNG9QeEx3ZU43bnVvODdUVG5hNStVOE5IR1dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2a09laE1GZ3VSbGh5a3pLV1RyVGhHYXY3RGdFMEtlWnBtdldvdFl3cVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHSlpNclVGVHJrMHNjeXpYVFJER3J5RXM1a2trM2t4bDkxT2o0TS9sbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpEY1F4UzRRd0J2cDA0QkQ0QmxkbURvR0dYNk0wOEhwRWxSWngyOHRlRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhtMlhOK3RIUkllcjI1dHFURUtjSndQUlpZaWVWQnBpOERpT3NxL1NuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWpoU0JuRmNkY3NNbTR6N09Fb2cxZllEbmZDekJZOGxBM0tqSVAwQ0poRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY4ZnkzclBpTGJ0bzh6Z3EzOHdwYzhmMGx4RVQ5K3luVmxYMllVNEVScG9OcU9YZ0lZOFowa3hqUktsQ1VieUREWUY1ck5JNjByVkpuQUFNQllKakJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJQb3pyZXpaT2NNU3pnYklSWkwxRW9SM1dkd0crc2hON0N3eFFQdkpyVTdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2RFJYWkc3dFNqSzVjUGFGbnAzT1RRIiwicGhvbmVJZCI6ImNjNjlkNTRiLTk3MWItNDk2MC1iY2VkLTYxYzZiZTI3NzBlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDcUxRcWVNUFZwSkMxWlYrdTdYcklSVmRoK0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUk40QzNlTlFQb0g0dzUxNTlCUlBtQjM3K3h3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlA3N1dYWUZLIiwibWUiOnsiaWQiOiIyNzY2NTU3Mjg4Njo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJZZXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052S3pWY1EwSnFsdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNucTVVRnRTSzd3ZTN1M29DV3VockRBMG9wQ05ROThYbjdYaUoyUm9Pbms9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZWcW5QTUVFdVNDc1lFSytJeEhXc0NnMG1HTDhCdEV2elg5c3F1UzFHSlNjQTFMa0N5bm83UW1VRWxWMnkxM0JWbEt1N3lwQVFXaGZHdGpLaHJRN0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkQ3ZQajJMd2ZuYUhiMU9XWU9HenYvMUVsWC9zTllQK3MydTV4cGVSc1pTMzBMOW1pSmovcndPSnJqaHNtSDU3TmlYVE9XL2Rjb05SelBsSkw0eVlDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjY1NTcyODg2OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhKNnVWQmJVaXU4SHQ3dDZBbHJvYXd3TktLUWpVUGZGNSsxNGlka2FEcDUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyNzQyNzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3lSIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "27767494368";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝕬𝖛𝖊 𝖇𝖔𝖙",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "𝕬𝖛𝖊 𝖇𝖔𝖙",
  ownername: process.env.OWNER_NAME || "𝕬𝖛𝖊",
  errorChat: process.env.ERROR_CHAT || "This command could not be completed",
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
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.email = "avenyamakazi8gmail.com";
global.location = "Africa/Johannesburg";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.devs = "27767494368";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
