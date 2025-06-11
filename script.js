function setTime() {
    setInterval(getTime, 1000);
}

setTime();

function getTime() {
    const main = document.getElementById("main-container");

    let timerDiv = document.getElementById('timer');
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        main.appendChild(timerDiv);
    }

    let dateDiv = document.getElementById('dater');
    if (!dateDiv) {
        dateDiv = document.createElement('div');
        dateDiv.id = 'dater';
        main.appendChild(dateDiv);
    }

    const currentTimeDate = new Date();

    const formattedTime = currentTimeDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dia = currentTimeDate.getDate();
    const mes = meses[currentTimeDate.getMonth()];
    const anio = currentTimeDate.getFullYear();

    const formattedDate = `${dia} ${mes} ${anio}`;

    timerDiv.innerHTML = `${formattedTime}`;
    dateDiv.innerHTML = `${formattedDate.toLocaleUpperCase()}`;
}

