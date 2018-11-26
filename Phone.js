//Obj_Nokia
function NokiaPhone() {
    this.status = true;
    this.battery = new Battery();
    this.charger = new Charger();
    this.saveSentMassage = [];
    this.receivedMessage = [];
    this.putPowerBtn = function () {
        if (this.status) {
            document.getElementById("statusBarNokia").style.backgroundColor = "black";
            document.getElementById("contentBarNokia").style.backgroundColor = "black";
            document.getElementById("textMassageNokia").style.backgroundColor = "black";
            document.getElementById("statusBarNokia").style.borderColor = "black";
            document.getElementById("contentBarNokia").style.borderColor = "black";
            document.getElementById("textMassageNokia").style.borderColor = "black";
            document.getElementById("screenNokia").style.backgroundColor = "black";
            this.status = !this.status;
        }
        else {
            document.getElementById("statusBarNokia").style.backgroundColor = "white";
            document.getElementById("contentBarNokia").style.backgroundColor = "white";
            document.getElementById("textMassageNokia").style.backgroundColor = "white";
            document.getElementById("statusBarNokia").style.borderColor = "cadetblue";
            document.getElementById("contentBarNokia").style.borderColor = "cadetblue";
            document.getElementById("textMassageNokia").style.borderColor = "cadetblue";
            document.getElementById("screenNokia").style.backgroundColor = "white";
            this.status = true;
        }
    };
    this.displayStatusBar = function () {
        document.getElementById("statusBarNokia").value = "4G-Mobiphone  Battery: " + this.battery.capacity + " %   Mess:" + this.receivedMessage.length;
    };
    this.sentMessage = function () {
        Iphone.receivedMessage.push(document.getElementById("textMassageNokia").value);
        document.getElementById("textMassageNokia").value = "";
        this.battery.descrease();
        document.getElementById("contentBarIphone").value = "You have some Message!!!"
    };
    this.readMessage = function () {
        if (this.receivedMessage.length > 0) {
            document.getElementById("contentBarNokia").value = "";
            for (let i = 0; i < this.receivedMessage.length; i++) {
                document.getElementById("contentBarNokia").value += this.receivedMessage[i];
                document.getElementById("contentBarNokia").value += " ";
                document.getElementById("contentBarNokia").value += " ";
                document.getElementById("contentBarNokia").value += " ";
            }
            this.receivedMessage = [];
        }
    };
}



//Obj_Iphone

function IphonePhone() {
    this.status = true;
    this.battery = new Battery();
    this.charger = new Charger();
    this.saveSentMassage = [];
    this.receivedMessage = [];
    this.putPowerBtn = function () {
        if (this.status) {
            document.getElementById("statusBarIphone").style.backgroundColor = "black";
            document.getElementById("contentBarIphone").style.backgroundColor = "black";
            document.getElementById("textMassageBarIphone").style.backgroundColor = "black";
            document.getElementById("screenIphone").style.backgroundColor = "black";
            this.status = !this.status;
        }
        else {
            document.getElementById("statusBarIphone").style.backgroundColor = "white";
            document.getElementById("contentBarIphone").style.backgroundColor = "white";
            document.getElementById("textMassageBarIphone").style.backgroundColor = "white";
            document.getElementById("screenIphone").style.backgroundColor = "white";
            this.status = true;
        }
    };
    this.displayStatusBar= function () {
        document.getElementById("statusBarRight").value = "Batt: "+ this.battery.capacity + "%";
        document.getElementById("statusBarLeft").value = "Mess:" + this.receivedMessage.length;
    };
    this.sentMessage = function (){
        Nokia.receivedMessage.push(document.getElementById("textMassageBarIphone").value);
        document.getElementById("textMassageBarIphone").value = "";
        this.battery.descrease();
        document.getElementById("contentBarNokia").value = "You have some Message!!!"
    };
    this.readMessage = function (){
        if(this.receivedMessage.length > 0){
            document.getElementById("contentBarIphone").value ="";
            for(let i=0 ; i<this.receivedMessage.length ; i++) {
                document.getElementById("contentBarIphone").value += this.receivedMessage[i] ;
                document.getElementById("contentBarIphone").value += " ";
            }
            this.receivedMessage = [];
        }
    }
}



