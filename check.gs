var SheetID = "sheet_id"; // Spreadsheet id 

function AmbilData() {
  var rangeName = 'Simpan!A2:O'; //sheet name of Google Spreadsheet
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function searchByNoOrder(IDdata) {
var dataSheet = AmbilData();
  for (var row = 0; row < dataSheet.length; row++) {
    if(dataSheet[row][1]==IDdata){ 
      return "<b>Data with ORDER NO : "+"'"+ dataSheet[row][1] +"' is founded</b>"+"\n" + "\n" +
              "<b>----------------------------DETAIL----------------------------</b>\n" +
             "<b>SN ONT</b> : " + dataSheet[row][2] + "\n" + 
             "<b>ODP</b> : " + dataSheet[row][3]+"\n" +
             "<b>PORT ODP</b> : " + dataSheet[row][4] + "\n" + 
             "<b>QR CODE</b> : " + dataSheet[row][5] + "\n" +
             "<b>PANJANG DC</b> : " + dataSheet[row][6]+"\n" +
             "<b>BREKET</b> : " + dataSheet[row][7] + "\n" + 
             "<b>ROSET</b> : " + dataSheet[row][8] + "\n" +
             "<b>SOC</b> : " + dataSheet[row][9] + "\n" +
             "<b>SN AP</b> : " + dataSheet[row][10] + "\n" +
             "<b>MAC AP</b> : " + dataSheet[row][11] + "\n" +
             "<b>UTP</b> : " + dataSheet[row][12] + "\n" +
             "<b>RJ45</b> : " + dataSheet[row][13];
    }
  }
  return "Data dengan No Order " +"'<b>"+ IDdata +"</b>'"+"\n"+ "tidak ditemukan.\n<b>Cek kembali atau masukan data sesuai format yang ditentukan!</b>";
}
