var tipo_evento = document.getElementById('tipo_evento');
var select = document.getElementById("horarios");
const eventModal = document.getElementById('eventModal');

tipo_evento.addEventListener('change', () => {
    var selectedOption = tipo_evento.options[tipo_evento.selectedIndex];
    var selectedValue = selectedOption.value;
    var el_allday = document.getElementById('flexSwitchCheckAllDay');

    if (selectedValue === 'feriado') {
        el_allday.removeAttribute('disabled');
        select.setAttribute('disabled', 'disabled');
    } else if (selectedValue === 'outro') {
        el_allday.removeAttribute('disabled');
        select.removeAttribute('disabled');
    } else {
        el_allday.setAttribute('disabled', 'disabled');
        select.removeAttribute('disabled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay,listWeek,dayGridMonth'
        },
        locale: 'pt-br',
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
        },
        themeSystem: 'bootstrap5',
        locale: 'pt-br',
        initialView: 'timeGridWeek',
        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: 'short'
        },
        slotMinTime: '08:00:00',
        slotMaxTime: '22:50:00',
        slotDuration: '00:15:00',
        slotLabelInterval: '00:15',
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        },
        allDayText: 'dia todo',
        nowIndicator: true,
        selectable: true,
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [1, 2, 3, 4, 5, 6], // Monday - Thursday

            startTime: '08:00', // a start time (10am in this example)
            endTime: '22:50', // an end time (6pm in this example)
        },
        selectConstraint: "businessHours",
        events: [
            { id: 1, title: 'Aula de Laboratório', start: '2023-11-04 13:30', end: '2023-11-04 16:00', extendedProps: { type: 'Agendamento' }, description: 'Testee' },
            { id: 2, title: 'Entrega de Material Didático', start: '2023-11-05 10:00', end: '2023-11-05T11:30:00' },
            { id: 3, title: 'Reunião com Prof. Johnson', start: '2023-11-05T15:00:00', end: '2023-11-05T16:00:00' },
            { id: 4, title: 'Retirada de Livros', start: '2023-11-06T14:30:00', end: '2023-11-06T15:30:00' },
            { id: 5, title: 'Aula de Pesquisa em Campo', start: '2023-11-07T08:30:00', end: '2023-11-07T16:30:00' },
            { id: 6, title: 'Reunião com Prof. Brown', start: '2023-11-18T16:30:00', end: '2023-11-08T17:30:00' },
            { id: 7, title: 'Retirada de Materiais de Laboratório', start: '2023-11-09T09:45:00', end: '2023-11-09T10:15:00' },
            { id: 8, title: 'Entrega de Projetores', start: '2023-11-09T13:00:00', end: '2023-11-09T13:45:00' },
            { id: 9, title: 'Aula de Química', start: '2023-11-10T10:00:00', end: '2023-11-10T12:00:00' },
            { id: 10, title: 'Reunião com Prof. Davis', start: '2023-11-10T14:00:00', end: '2023-11-10T15:00:00' },
            { id: 11, title: 'Retirada de Equipamentos de Laboratório', start: '2023-11-10T08:00:00', end: '2023-11-10T09:00:00' },
            { id: 12, title: 'Entrega de Materiais de Escritório', start: '2023-11-10T11:30:00', end: '2023-11-10T12:30:00' }
        ],
        eventClick: function (info) {

            const xmas95 = new Date(info.event.startStr);

            const allDay = info.event.allDay ? 'sim' : 'não';

            $('#event_title').html(info.event.title)
            $('#event_start').html(moment(xmas95).format('DD/MM/YYYY HH:mm'))
            $('#event_description').html(info.event.extendedProps.description)
            $('#event_type').html(info.event.extendedProps.type)
            $('#ask_all_day').html(allDay)
            $('#eventModal').modal('show');
            /* $('#editaAgendamento').attr('href', '/agendamento/' + info.event.id + '/edit');
            $('#deletaAgendamento').attr('href', '/agendamento/' + info.event.id + '/delete'); */
        }
    });
    calendar.render();

    popularHorarios();
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
