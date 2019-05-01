
const Discord = require('discord.js');
const Enmap = require(`enmap`);
const farm = new Enmap();
const client1 = new Discord.Client();

client1.on("ready", () => {

	      var interval = setInterval (function () {
        client1.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client1.login(process.env.S1);



const client2 = new Discord.Client();

client2.on("ready", () => {

	      var interval = setInterval (function () {
        client2.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client2.login(process.env.S2);



const client3 = new Discord.Client();

client3.on("ready", () => {

	      var interval = setInterval (function () {
        client3.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client3.login(process.env.S3);



const client4 = new Discord.Client();

client4.on("ready", () => {

	      var interval = setInterval (function () {
        client4.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client4.login(process.env.S4);



const client5 = new Discord.Client();

client5.on("ready", () => {

	      var interval = setInterval (function () {
        client5.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client5.login(process.env.S5);



const client6 = new Discord.Client();

client6.on("ready", () => {

	      var interval = setInterval (function () {
        client6.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client6.login(process.env.S6);



const client7 = new Discord.Client();

client7.on("ready", () => {

	      var interval = setInterval (function () {
        client7.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client7.login(process.env.S7);



const client8 = new Discord.Client();

client8.on("ready", () => {

	      var interval = setInterval (function () {
        client8.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client8.login(process.env.S8);



const client9 = new Discord.Client();

client9.on("ready", () => {

	      var interval = setInterval (function () {
        client9.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client9.login(process.env.S9);



const client10 = new Discord.Client();

client10.on("ready", () => {

	      var interval = setInterval (function () {
        client10.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client10.login(process.env.S10);



const client11 = new Discord.Client();

client11.on("ready", () => {

	      var interval = setInterval (function () {
        client11.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});



client11.login(process.env.S11);



const client12 = new Discord.Client();

client12.on("ready", () => {

	      var interval = setInterval (function () {
        client12.channels.get("572938530901196832").send(Math.random().toString(36).substring(7)) 

}, 180000);

});







client1.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client1.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client2.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client2.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client3.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client3.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client4.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client4.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client5.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client5.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client6.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client6.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client7.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client7.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client8.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client8.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client9.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client9.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client10.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client10.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client11.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client11.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
client12.on('message', msg => {
    let ownerid = '560394135115268106';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client12.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@560394135115268106> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
