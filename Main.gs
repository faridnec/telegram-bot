var token = "token_bot_id";//token bot id from telegram
var SheetID = "sheet_id";// sheet id
var url = "https://api.telegram.org/bot" + token;
var webAppUrl = "web_app_url_hook";//Web App URL adress from deployment

function setWebhook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}

function doPost(e) {
  let stringJson = e.postData.getDataAsString();
  let updates = JSON.parse(stringJson);
  
  let id_tele = updates.message.from.id;
  let Cmd = updates.message.text;
  let user = updates.message.from.username;
  let daftar = Cmd;
  let cek = daftar.substring(0, 1);
  let command = daftar.split(" ")[0]; // command
  let subCommand = daftar.split(" ")[1]; // data

  switch(command){
    case "/start" :
      saveUser(updates.message.from);
        let start = 
          'Welcome to <b>CCAN bot 2</b>\n' +
          '<b>Input Bot </b>\n\n' + 'Enter command /help to list commands';
        sendText(updates.message.chat.id, start);
    break;
    case "/help" :
      let help =
              '<b>Commands List</b>\n' +
              '----------------\n\n' +
              '1) /start - Bot information\n\n' +
              '2) /help - Commands list\n\n' +
              '3) /save - Save data\n<b> Add "-" to pass empty data</b>\n\n' +
              '4) /check - Checking data (format -> /check NO-ORDER)\n<b>Command and data is separated with a whitespace</b>';
      sendText(updates.message.chat.id, help);
    break;
    case "/check" :
      sendText(updates.message.chat.id, searchByNoOrder(subCommand));
    break;
  }

  if(Cmd == '/save'){
    //data and variables can be changed if necessary
    simpan(updates.message.from.id);
    var noOrder = 'ORDER NO';       
    sendReply(noOrder, updates.message.chat.id, updates.message.message_id);
    }else if(panjangData(updates.message.from.id) == 1){
          simpanSave(Cmd, updates.message.from.id);
          var snOnt = 'SN ONT';                     
          sendReply(snOnt, updates.message.chat.id, updates.message.message_id);             
        }else if(panjangData(updates.message.from.id) == 2){
              simpanSave(Cmd, updates.message.from.id);
              var odp = 'ODP';
              sendReply(odp, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 3){
              simpanSave(Cmd, updates.message.from.id);               
              var portOdp = 'PORT ODP';
              sendReply(portOdp, updates.message.chat.id, updates.message.message_id);               
        }else if(panjangData(updates.message.from.id) == 4){
              simpanSave(Cmd, updates.message.from.id);
              var qrCode = 'QR CODE';
              sendReply(qrCode, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 5){
              simpanSave(Cmd, updates.message.from.id);               
              var panjangDc = 'PANJANG DC';
              sendReply(panjangDc, updates.message.chat.id, updates.message.message_id);               
        }else if(panjangData(updates.message.from.id) == 6){
              simpanSave(Cmd, updates.message.from.id);
              var breket = 'BRECKET';
              sendReply(breket, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 7){
              simpanSave(Cmd, updates.message.from.id);               
              var roset = 'ROSET';
              sendReply(roset, updates.message.chat.id, updates.message.message_id);               
        }else if(panjangData(updates.message.from.id) == 8){
              simpanSave(Cmd, updates.message.from.id);
              var soc = 'SOC';
              sendReply(soc, updates.message.chat.id, updates.message.message_id);                   
        }else if(panjangData(updates.message.from.id) == 9){
              simpanSave(Cmd, updates.message.from.id);
              var snAp = 'SN AP';
              sendReply(snAp, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 10){
              simpanSave(Cmd, updates.message.from.id);
              var macAp = 'MAC AP';
              sendReply(macAp, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 11){
              simpanSave(Cmd, updates.message.from.id);
              var utp = 'UTP';
              sendReply(utp, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 12){
              simpanSave(Cmd, updates.message.from.id);
              var rj45 = 'RJ45';
              sendReply(rj45, updates.message.chat.id, updates.message.message_id);
        }else if(panjangData(updates.message.from.id) == 13){
              simpanSave(Cmd, updates.message.from.id);        
              sendText(updates.message.chat.id, "Thank you, data has been saved");
        }
}

function sendText(chatid, text, replymarkup) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function sendReply(text, chatid, message_id) { 
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      reply_to_message_id : String(message_id)     
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data); 
}