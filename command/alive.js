async function alive(sock,jid,msgkey){
	var jid2 = jid
         await sock.sendMessage(jid2, {
            delete: msgkey
         });
         var msg = await sock.sendMessage(jid2, {
            text: "šššš\n*I am alive*\nššššš"
         });
}

module.exports = alive; 