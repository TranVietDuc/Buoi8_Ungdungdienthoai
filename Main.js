var Nokia = new NokiaPhone();
var Iphone = new IphonePhone();


function NokiaIsCharged(){
  if(Nokia.charger.status){
    Nokia.battery.beingCharged();
  }

}
function IphoneIsCharged(){
    if(Iphone.charger.status){
      Iphone.battery.beingCharged();
    }
}

  window.onload = function () {
    setInterval("NokiaIsCharged()",2000);
      setInterval("IphoneIsCharged()",2000);
    setInterval("Nokia.displayStatusBar()",100);
      setInterval("Iphone.displayStatusBar()",100);

  };