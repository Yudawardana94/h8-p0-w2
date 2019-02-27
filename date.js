
  var day = 25
  var month = 3
  var year = 2015

//code      
if(day<=31 && day>=1){
} else{ 
    console.log('not a right day')
}

switch (month) {
    case 1:
        console.log(day +' January '+ year)
        break;
    case 2:
        console.log(day +' February '+ year);
        break;
    case 3:
        console.log(day +' March '+ year);
        break;
    case 4:
        console.log(day +' April '+year)
        break;
    case 5:
        console.log(day +' May '+year)
        break
    case 6:
        console.log(day +' June' +year);
        break;
    case 7:
        console.log(day +' July' +year);
        break;
    case 8:
        console.log(day +' Agustus' +year);
        break;
    case 9:
        console.log(day +' September' +year);
        break;
    case 10:
        console.log(day +' Oktober' +year);
        break;
    case 11:
        console.log(day +' November' +year);
        break;
    case 12:
        console.log(day +' December' +year);
        break;
    default:
        console.log('not a right month')
}

if(year>=1900 && year<= 2200) {
} else {
    console.log('not a right year')
}