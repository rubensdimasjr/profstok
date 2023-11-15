var tipo_evento = document.getElementById('tipo_evento');
var select = document.getElementById("horarios");

tipo_evento.addEventListener('change', () => {
    var selectedOption = tipo_evento.options[tipo_evento.selectedIndex];
    var selectedValue = selectedOption.value;
    var el_allday = document.getElementById('flexSwitchCheckAllDay');

    if(selectedValue === 'feriado'){
        el_allday.removeAttribute('disabled');
        select.setAttribute('disabled','disabled');
    }else if(selectedValue === 'outro'){
        el_allday.removeAttribute('disabled');
        select.removeAttribute('disabled');
    }else{
        el_allday.setAttribute('disabled','disabled');
        select.removeAttribute('disabled');
    }
});

// Função para preencher o select com horários de 15 em 15 minutos
function popularHorarios() {

    // Configurando o horário inicial e final
    var horarioInicial = new Date();
    horarioInicial.setHours(8, 0); // 8:00

    var horarioFinal = new Date();
    horarioFinal.setHours(22, 45); // 22:45

    // Preenchendo as opções
    while (horarioInicial <= horarioFinal) {
        var option = document.createElement("option");
        var hora = horarioInicial.getHours();
        var minutos = horarioInicial.getMinutes();

        // Formatando a hora para exibição
        var horaFormatada = hora.toString().padStart(2, '0');
        var minutosFormatados = minutos.toString().padStart(2, '0');

        option.text = horaFormatada + ":" + minutosFormatados;
        option.value = horaFormatada + ":" + minutosFormatados;

        select.add(option);

        // Adicionando 15 minutos ao horário atual
        horarioInicial.setMinutes(horarioInicial.getMinutes() + 15);
    }
}



// Chamando a função para popular os horários ao carregar a página
window.onload = popularHorarios;