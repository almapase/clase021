function Caja(saldo) {
  this.saldo = inicio || 0;

  this.in = function (monto) {
    this.saldo += monto;
  }

  this.out = function (monto) {
    var pre_saldo = this.saldo - monto;
    if (pre_saldo < 0) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= monto;
    }
  }
}
