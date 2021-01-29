var data;
var arrData;
var dictData;

function fetchData() {
  var Http = new XMLHttpRequest();
  //var url = 'https://api.steamapis.com/market/items/730?format=compact&compact_value=avg&api_key=';
  // var url = "http://csgobackpack.net/api/GetItemsList/v2/";
  var url = "https://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=AK-47%20%7C%20Redline%20%28Minimal%20Wear%29";
  Http.open("GET", url, true);
  Http.send();
  Http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = this.responseText;
      //data1 = data.slice(1,-2).replaceAll("\,", "<br>");
      document.getElementById("response").innerHTML = data;      
    }
  };
}

arrData = data.split(",");
