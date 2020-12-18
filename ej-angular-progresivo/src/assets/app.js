$.when($.ready)
  .then(() => {
    console.log($('#valor').first().text());

    $('#btn-dec').click(decrementar);
    $('#btn-inc').click(incrementar);
  })


function incrementar() {
  const cuentaActual = getCuenta();
  const cuentaActualizada =  cuentaActual + 1;
  actualizarCuenta(cuentaActualizada);
}

function decrementar() {
  const cuentaActual = getCuenta();
  const cuentaActualizada =  cuentaActual - 1;
  actualizarCuenta(cuentaActualizada);
}

function getCuenta() {
  return Number($('#valor').first().text());
}

function actualizarCuenta(newVal) {
  $('#valor').first().text(newVal);
}