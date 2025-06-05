function setTime(){
    setInterval(
        getTime, 1000
    )
}

setTime();

function getTime(){
    const main = document.getElementById("main-container");
    let timerDiv = document.getElementById('timer');
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        main.appendChild(timerDiv);
    }

    const currentTimeDate = new Date();

    const formattedDate = currentTimeDate.toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    timerDiv.innerHTML = formattedDate.toLocaleUpperCase();
}