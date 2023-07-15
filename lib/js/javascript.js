(function (win, doc) {
    'use strict';

    const baseURL = 'https://dev.uniforca.com.br/agenda-facil/';

    //Exibir o calendário
    function getCalendar(perfil, div) {
        let calendarEl = doc.querySelector(div);
        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                start: 'prev,next,today',
                center: 'title',
                end: 'dayGridMonth, timeGridWeek, timeGridDay'
            },
            buttonText: {
                today: 'hoje',
                month: 'mês',
                week: 'semana',
                day: 'dia'
            },
            locale: 'pt-br',
            // dateClick: function (info) {
            //     if (perfil == 'manager') {
            //         alert('vai pra pagina do manager');
            //     } else {
            //         if (info.view.type == 'dayGridMonth') {
            //             calendar.changeView('timeGrid', info.dateStr);
            //         } else {
            //             win.location.href = `${baseURL}/view/user/add.php?date=` + info.dateStr;
            //         }
            //     }
            //     /*alert('Clicked on: ' + info.dateStr);
            //     alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //     alert('Current view: ' + info.view.type);*/
            // },
            events: '../../controller/ControllerEvents.php',
            droppable: true,
            editable: true,
            locale: 'pt-br',
            selectable: true,
            eventDrop: async function (info) {
                await resizeAndDrop(info);
            },
            eventResize: async function (info) {
                await resizeAndDrop(info);
            },
            selectable:true,
            select: async (arg)=>{
                window.location.href = `${baseURL}view/manager/add.php?data=${JSON.stringify(arg)}`;
            },
            // eventClick: function (info) {
            //     if (perfil == 'manager') {
            //         win.location.href = `${base}/view/manager/editar.php?id=${info.event.id}`;
            //     }
            // }
            eventClick: function (info) {
                console.log(info.event);

                let start = new Date(info.event.start).toLocaleString();
                let end = new Date(info.event.end).toLocaleTimeString();
                $('#modalId').html(info.event.extendedProps.id);
                $('#modalTitle').html(info.event.title);
                $('#modalBody').html(info.event.extendedProps.description);
                $('#modalResponsavel').html(info.event.extendedProps.responsavel);
                $('#modalLocal').html(info.event.extendedProps.local);
                $('#modalConvidados').html(info.event.extendedProps.convidados);
                $('#modalRepresentante').html(" | " + info.event.extendedProps.representante);
                $('#modalTimeStart').html(start);
                $('#modalTimeEnd').html(end);
                $('#eventUrlDelete').attr('href', `${baseURL}/controller/ControllerDelete.php?id=${info.event.id}`);
                $('#eventUrlEdit').attr('href', `${baseURL}/view/manager/add.php?id=${info.event.id}`);
                $('#eventUrl').attr('href', info.event.url);
                $('#calendarModal').modal('show');
            },
        });
        calendar.render();
    }

    if (doc.querySelector('.calendarUser')) {
        getCalendar('user', '.calendarUser');
    } else if (doc.querySelector('.calendarManager')) {
        getCalendar('manager', '.calendarManager');
    }
    
    if (doc.querySelector('#delete')) {
        let btn = doc.querySelector('#delete');
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if (confirm("Deseja mesmo apagar este dado?")) {
                win.location.href = event.target.href;
            }
        }, false);
    }

    //Arraste e redimensionamento de eventos
    async function resizeAndDrop(info){
        let newDate = new Date(info.event.start);
        let month = ((newDate.getMonth()+1)<9)?"0"+(newDate.getMonth()+1):newDate.getMonth()+1;
        let day = ((newDate.getDate())<9)?"0"+newDate.getDate():newDate.getDate();
        let minutes = ((newDate.getMinutes())<9)?"0"+newDate.getMinutes():newDate.getMinutes();
        newDate = `${newDate.getFullYear()}-${month}-${day} ${newDate.getHours()}:${minutes}:00`;

        let newDateEnd = new Date(info.event.end);
        let monthEnd = ((newDateEnd.getMonth()+1)<9)?"0"+(newDateEnd.getMonth()+1):newDateEnd.getMonth()+1;
        let dayEnd = ((newDateEnd.getDate())<9)?"0"+newDateEnd.getDate():newDateEnd.getDate();
        let minutesEnd = ((newDateEnd.getMinutes())<9)?"0"+newDateEnd.getMinutes():newDateEnd.getMinutes();
        newDateEnd = `${newDateEnd.getFullYear()}-${monthEnd}-${dayEnd} ${newDateEnd.getHours()}:${minutesEnd}:00`;
        let newData = {
            'id': info.event.id,
            'start': newDate,
            'end': newDateEnd,
        }
        window.location.href = `${baseURL}controller/ControllerDrop.php?data=${JSON.stringify(newData)}`;
        // let reqs = await fetch(`${baseURL}controller/ControllerDrop.php`, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: `id=${info.event.id}&start=${newDate}&end=${newDateEnd}`
        // }).then((res) => {
        //     console.log(res.body);
        //     console.log(res);
        // }).catch((res) => {
        //     win.location.href = `${baseURL}view/manager/`;
        //         var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        //         var toastList = toastElList.map(function (toastEl) {
        //             return new bootstrap.Toast(toastEl)
        //         })
        //         toastList.forEach(toast => toast.show());
        //     console.log("erro");
        // });
        // let ress = await reqs.json();
    }


})(window, document);