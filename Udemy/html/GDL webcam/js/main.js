(function() {
    'use strict';

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {
        console.log('ready');

        //CAMPOS DATOS USUARIO
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //CAMPOS PASES
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosDias = document.getElementById('pase_dosDias');
        var pase_completo = document.getElementById('pase_completo');

        //BOTONES

        var calcular = document.getElementById('calcular');
        var error = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');


        //EXTRAS    

        var etiquetas = document.getElementById('etiquetas');
        var camisa_evento = document.getElementById('camisa_evento');
        var cliente = (nombre.value + ' ' + apellido.value);
        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDia);
        pase_dosDias.addEventListener('blur', mostrarDia);
        pase_completo.addEventListener('blur', mostrarDia);

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletoDosDias = parseInt(pase_dosDias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisa_evento.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0,
                    cliente = nombre.value + ' ' + apellido.value;

                var totaPagar = (boletosDia * 30) + (boletoDosDias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2); //los valores de 30 45 50 son e precio de os boletos

                var listadoProductos = [];
                listadoProductos.push(cliente + ' tu resumen de compra es:');
                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por día.');
                }
                if (boletoDosDias >= 1) {
                    listadoProductos.push(boletoDosDias + ' Pases por dos días.');
                }
                if (boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' Pases por todos los días.');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Cantidad camisas.');
                }
                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Cantidad paquetes de etiquetas.');
                }
                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }
                suma.innerHTML = "$ " + totaPagar.toFixed(2);
            }
        }

        function mostrarDia() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletoDosDias = parseInt(pase_dosDias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegiidos = [];

            if (boletosDia > 0) {
                diasElegiidos.push('viernes');
                console.log(diasElegiidos);
            } else {
                document.getElementById('viernes').style.display = 'none';
            }
            if (boletoDosDias > 0) {
                diasElegiidos.push('viernes', 'sabado');
                console.log(diasElegiidos);
            } else {
                document.getElementById('viernes').style.display = 'none';
                document.getElementById('sabado').style.display = 'none';
            }
            if (boletoCompleto > 0) {
                diasElegiidos.push('viernes', 'sabado', 'domingo');
                console.log(diasElegiidos);
            } else {
                document.getElementById('viernes').style.display = 'none';
                document.getElementById('sabado').style.display = 'none';
                document.getElementById('domingo').style.display = 'none';
            }
            for (var i = 0; i < diasElegiidos.length; i++) {
                document.getElementById(diasElegiidos[i]).style.display = 'block';
            }

        }

    }); //DOM CONTENT LOADED
})();