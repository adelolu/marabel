document.getElementById('in').addEventListener('click', temi)
        
function temi() {
    // alert('ye')
    $("#log").css({
        'animation-name': 'right',
        'animation-duration': '5s',
        'animation-fill-mode': 'both',
        'animation-play-state': 'running',

    })
    // alert('ye')
    $("#sign").css({
        'animation-name': 'left',
        'animation-duration': '5s',
        'animation-fill-mode': 'both',
        'animation-play-state': 'running',
    })
    setTimeout(() => {
        document.getElementById('card3').style.opacity = '0.3'
        document.getElementById('card2').style.display = 'none'
        document.getElementById('card3').style.display = 'block'
    }, 2000);
    setTimeout(() => {
       
        document.getElementById('card3').style.opacity = '0.8'

    }, 4000);
    setTimeout(() => {
        document.getElementById('card3').style.opacity = '1'

    }, 6000);
}

document.getElementById('toll').addEventListener('click', tutu)
function tutu() {
    $("#sign").css({
        'animation-name': 'short',
        'animation-duration': '5s',
        'animation-fill-mode': 'both',
        'animation-play-state': 'running',

    })
    // alert('ye')
    $("#log").css({
        'animation-name': 'tall',
        'animation-duration': '5s',
        'animation-fill-mode': 'both',
        'animation-play-state': 'running',
    })
    setTimeout(() => {
        document.getElementById('card2').style.opacity = '0.5'
         document.getElementById('card3').style.display = 'none'
        document.getElementById('card2').style.display = 'block'
    }, 2000);
    setTimeout(() => {
       
        document.getElementById('card2').style.opacity = '0.8'

    }, 4000);
    setTimeout(() => {
        document.getElementById('card2').style.opacity = '1'

    }, 6000);
}