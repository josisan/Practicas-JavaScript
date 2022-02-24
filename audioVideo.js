var video = document.getElementById('audio'),
    bntPlay = document.getElementById('play'),
    bntPause = document.getElementById('pause'),
    volumen = document.getElementById('volumen');

    //Reproducir Video
    bntPlay.addEventListener('click', function(){
        video.play();
    });

    //Pausar Video
    bntPause.addEventListener('click', function(){
        video.pause();
    })

    volumen.addEventListener('change', function(){
        video.volume = volumen.value;
    })

    // -- Propiedades
    // video.currenTime - regresa el tiempo actual en el que va el video
    // video.duration - regresa la duracion del video
    // video.ended - regresa si el video ya termino

    // -- Eventos
    /*
        pause
        play
    
    */