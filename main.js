/*
 ____  ____  __ _   ___  ____ 
(  _ \(  __)(  ( \ / __)(  __)
 )   / ) _) /    /( (_ \ ) _) 
(__\_)(____)\_)__) \___/(____)

Written by Koalaity
Licensed under GPL-3.0

*/

const { Client, Attachment } = require("discord.js");
const client = new Client();
const config = require("./config.json");

function getCommand(msginput) {
    let message = msginput.toString();
    let parsedCommand = [];
    if(message.includes("r!")) {
        // Get Command
        let command = message.slice(config.prefix.length).split(" ")[0];
        parsedCommand.push(command);

        //Get Argument
        let end = message.indexOf(' ');
        let args = message.substr(end, message.length);
        parsedCommand.push(args);

        return parsedCommand;
    } else {
        return false;
    }
}

client.on('ready', () => {
    console.log('RengeBot loaded!');
});

client.on('message', msg => {
    var command = getCommand(msg);
    //console.log(`${command[0]}, ${command[1]}`)
    if(command[0] === "test") {
        if(command[1].includes('gay')) {
            msg.channel.send('gay')
        }
        msg.channel.send('works')
    }
});

client.login(config.token);