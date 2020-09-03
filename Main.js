const token = 'NzUxMjA0MTA5Njc5NTkxNTUz.X1FrWA.sNnPRvcCDsPcseUAEnaZNQSdjEs';
const {welcome, purge, kick, ban, status, say, mute, info} = require("discord-bot-maker");
const Discord = require("discord.js");
const bot = new Discord.Client();
 
welcome(bot, {
  privatemsg : "Hello Welcome To My Server Hope You Enjoy!", 
  publicmsg : "Hey @MEMBER Thanks For Joining @GUILDNAME", //@GUILDNAME @MEMBER
  publicchannelid : "751204928516522005" //CHANNEL ID
});
 
purge(bot, {
  prefix:"!",
  purgecommand: "purge",
  errormsg: "asd",
  nopermmsg: "asd",
});
 
kick(bot, {
  prefix:"!",
  kickcommand: "kick",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Default Reason",
  kickmsg: "@KICKDUSER got kicked for @Reason by @KICKAUTHOR" //@KICKAUTHOR @KICKEDUSER @REASON
});
 
ban(bot, {
  prefix:"!",
  bancommand: "ban",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Default Reason",
  banmsg: "@BANDUSER got the ban hammer because @REASON so @BANAUTHOR banned them lol" //@BANAUTHOR @BANNEDUSER @REASON
});
 
status(bot, {
  type: "WATCHING", //PLAYING, WATCHING, STREAMING
  title: "The Commands Of AlexMogger the prefix is !"
});
 
say(bot, {
  prefix:"!",
  nopermmsg: "No Perm Error"
});
 
mute(bot, {
  prefix:"!",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  alreadyhasrole: "Already Has Role Error",
  roleid: "751206512575381596", //SECONDARY ROLE ID*
  defaultreason: "Default Reason",
  mutemsg: "Mute Message" //@MUTEDUSER, @MUTEAUTHOR, @REASON
});

info(bot, {
	prefix:"!"
	infocommand:"info"
	infomsg:"Owners Youtube is AlexMogger And Twitter Is therealalexmog1 b-bye"
});
 
bot.login(token)