"use strict";

const Discord = require('discord.js');
const client = new Discord.Client();

let token;
let guild_id;
let channel_id;
let target_bot_id;

let onMessage;

function is_target_message(msg){
  if(
      msg.author.id == target_bot_id && 
      msg.guild.id == guild_id && 
      msg.channel.id == channel_id
  ){
    return true;
  }else{
    return false;
  }
}

function validate_response(text, newOnMessage){
  client.channels.get(channel_id).send(text); 
  onMessage = newOnMessage;
}

function login(data){
  token=data.token;
  guild_id=data.guild_id;
  channel_id=data.channel_id;
  target_bot_id=data.target_bot_id;

  client.login(token);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(is_target_message(msg)){
    msg.reply('I care!');
    onMessage(msg);
  }
});

module.exports = {
  login: login,
  validate_response: validate_response
}
