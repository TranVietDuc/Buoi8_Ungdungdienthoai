function Charger() {
    this.status = false;
    this.putINorPutOut = function (Namephone) {
        this.namePhone = Namephone;
        if(this.namePhone === Nokia) {
            if (!this.status) {
                document.getElementById("ChargerNokia").innerHTML = "Charging";
                document.getElementById("ChargerNokia").style.backgroundColor = "blue";
                this.status = true;

            }
            else {
                document.getElementById("ChargerNokia").innerHTML = "UnCharging";
                document.getElementById("ChargerNokia").style.backgroundColor = "grey";
                this.status = false;
            }
        }
        else {
            if (!this.status) {
                document.getElementById("ChargerIphone").innerHTML = "Charging";
                document.getElementById("ChargerIphone").style.backgroundColor = "blue";
                this.status = true;

            }
            else {
                document.getElementById("ChargerIphone").innerHTML = "UnCharging";
                document.getElementById("ChargerIphone").style.backgroundColor = "grey";
                this.status = false;
            }
        }

    }
}