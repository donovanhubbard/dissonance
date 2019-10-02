//TODO
//add mocha?

const client = require('./client.js');
const expect = require('chai').expect

const config = require('./config.json');

function ping_returns_pong(){
  client.validate_response('ping',msg=>{
    expect(msg.content).to.equal('<@628393690376830976>, pong');
  });
}



client.login(config);

setTimeout(ping_returns_pong,3000);
