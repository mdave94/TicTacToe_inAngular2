export class Block {
    free: boolean=true;

    value: string="";
    symbol: string="";

setValue(value){
    this.value = value;

    if(this.value == "thick"){
        this.symbol = "O";
    }else{
        this.symbol = "X"
    }
}
getValue(){
    return this.symbol;
}

}