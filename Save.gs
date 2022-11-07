function panjangData(userid) {     
  var SheetID = "1UnpvI-Ca9YkJyMQBSzboBxEVTqx4aF5Q1wdg7xiei3s";
  var rangeName = 'Simpan!A2:N';
  var dataSheet = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;

  for (var row = 0; row < dataSheet.length; row++) {
      if (dataSheet[row][0] == userid && dataSheet[row].length <= 13) {//in accordance to data length.
        var data = dataSheet[row];
        return leng = data.length;
      }
    } 
} 

function simpan(from){
  var id = from;     
 
  var SheetID = "1UnpvI-Ca9YkJyMQBSzboBxEVTqx4aF5Q1wdg7xiei3s"; 
  var rangeName = 'Simpan!A1:O';
  var dataSheet = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  
  /*
  for (var rows = 0; rows < dataSheet.length; rows++) {
      //if (dataSheet[rows][0] != id) {
        var r = rows + 2;
      //}else{return 0;}
    }
  */

  var id = from;   
  var noOrder;
  var snOnt;
  var odp;
  var portOdp;
  var qrCode;
  var panjangDc;
  var breket;
  var roset;
  var soc;
  var snAp;
  var macAp;
  var utp;
  var rj45;
  var now = new Date();
  var waktu = Utilities.formatDate(now, "Asia/Jakarta", "dd/MM/YYYY HH:mm:ss"); 
    var rangeName = 'Simpan';
    var SheetID = "1UnpvI-Ca9YkJyMQBSzboBxEVTqx4aF5Q1wdg7xiei3s";   
    SpreadsheetApp.openById(SheetID).getSheetByName(rangeName).appendRow([id,noOrder,snOnt,odp,portOdp,qrCode,panjangDc,breket,roset,soc,snAp,macAp,utp,rj45,waktu]);
}


function simpanSave(user, from){ 
  var id = from; 
  var users = user;
  var SheetID = "1UnpvI-Ca9YkJyMQBSzboBxEVTqx4aF5Q1wdg7xiei3s";
  var rangeName = 'Simpan!A1:O';
  var dataSheet = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values; 
    for (var row = 0; row < dataSheet.length; row++) {
      if (dataSheet[row][0] == id) {
        var data = dataSheet[row];
      }
    }   
    data.pop(); 
    var filtered = data.filter(function (el) {
      return el != "";
    });
   
    for (var rows = 0; rows < dataSheet.length; rows++) {
      if (dataSheet[rows][0] == id) {
        var r = rows + 1;
      }
    }
    filtered.push(users);
    var datauser = [ filtered  ];

    var rangeName = 'Simpan!A' + r + ':O' + r;
    var valueRange = Sheets.newValueRange();

    valueRange.values = datauser;
    var result = Sheets.Spreadsheets.Values.update(valueRange, SheetID, rangeName, { valueInputOption: 'USER_ENTERED' });   
}

/*
//save data at once
function simpan(data) {
  var pesan = data.message.text;
  let text = pesan;
  let id = data.message.from.id;

  var dt = text.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );

  var noOrder = dt[1];
  var snOnt = dt[2];
  var snAp = dt[3];
  var odp = dt[4];
  var portOdp = dt[5];
  var qrCode = dt[6];
  var panjangDc = dt[7];
  var breket = dt[8];
  var roset = dt[9];
  var soc = dt[10];

  var SheetID = '1UnpvI-Ca9YkJyMQBSzboBxEVTqx4aF5Q1wdg7xiei3s';
  var rangeName = 'Simpan';
  
  if(dt.length != 11){//kalo data ga lengkap (SN ONT - SOC) kirim gagal tersimpan
    sendText(id, "Data tidak tersimpan.\nPastikan data lengkap <b>(1 command & 10 data)</b> dan isi sesuai format atau cek kembali command /help untuk mendapatkan bantuan");
  }else{
    SpreadsheetApp.openById(SheetID).getSheetByName(rangeName).appendRow([noOrder,snOnt,snAp,odp,portOdp,qrCode,panjangDc,breket,roset,soc]);
    sendText(id, "Data berhasil tersimpan");
  }
}
*/