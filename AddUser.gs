//user yang pernah akses bot (klik command /start)
function saveUser(from) {
  var rownum = getUserRow(from.id);
  if (rownum == 0) {
    var datauser = [
      [
        from.id, from.username, from.first_name, 0
      ]
    ];
    var rangeName = 'USER!A2:D';
    var valueRange = Sheets.newValueRange();
    valueRange.values = datauser;
    var result = Sheets.Spreadsheets.Values.append(valueRange, SheetID, rangeName, { valueInputOption: 'USER_ENTERED' });
  } else {
    var datauser = [
      [
        from.id, from.username, from.first_name
      ]
    ];
    var rangeName = 'USER!A' + rownum + ':C' + rownum;
    var valueRange = Sheets.newValueRange();
    valueRange.values = datauser;
    var result = Sheets.Spreadsheets.Values.update(valueRange, SheetID, rangeName, { valueInputOption: 'USER_ENTERED' });
  }
}

function getUserRow(userid) {
  var rangeName = 'USER!A2:D';
  var users = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  if (!users) {
    return 0;
  } else {
    for (var row = 0; row < users.length; row++) {
      if (users[row][0] == userid) {
        return row + 2;
      }
    }
    return 0;
  }
}