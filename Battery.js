function Battery(){
    this.capacity = Math.floor(Math.random()*100+1);
    this.descrease = function () {
        this.capacity --;
    };
    this.beingCharged = function () {
        if(this.capacity<100)
        this.capacity ++;
    }
}