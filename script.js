document.addEventListener('DOMContentLoaded', () => {
    console.log('Content has been charged');
});

const añadir = document.querySelector('.btn');

//not aviable for mobile phones
//should to improve the animation loader
// It is very challenging for mobile browsers and older computers
// Should research how to show animations only when the card is in view
function fullanimation(){
    let y = 0
    while(y<999){
        const typeanimations = [
            // Attention seekers
            'animate__bounceIn', 'animate__flash', 'animate__pulse', 'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__headShake',
            'animate__swing', 'animate__tada', 'animate__wobble', 'animate__jello', 'animate__heartBeat',
            
            // Back entrances
            'animate__backInDown', 'animate__backInLeft', 'animate__backInRight', 'animate__backInUp',
            
            // Bouncing entrances
            'animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInLeft', 'animate__bounceInRight', 'animate__bounceInUp',
            
            // Fading entrances
            'animate__fadeIn', 'animate__fadeInDown', 'animate__fadeInDownBig', 'animate__fadeInLeft', 'animate__fadeInLeftBig',
            'animate__fadeInRight', 'animate__fadeInRightBig', 'animate__fadeInUp', 'animate__fadeInUpBig',
            'animate__fadeInTopLeft', 'animate__fadeInTopRight', 'animate__fadeInBottomLeft', 'animate__fadeInBottomRight',
            
            // Flippers
            'animate__flipInX', 'animate__flipInY',
            
            // Lightspeed
            'animate__lightSpeedInRight', 'animate__lightSpeedInLeft',
            
            // Rotating entrances
            'animate__rotateIn', 'animate__rotateInDownLeft', 'animate__rotateInDownRight', 'animate__rotateInUpLeft', 'animate__rotateInUpRight',
            
            // Specials
            'animate__jackInTheBox', 'animate__rollIn',
            
            // Zooming entrances
            'animate__zoomIn', 'animate__zoomInDown', 'animate__zoomInLeft', 'animate__zoomInRight', 'animate__zoomInUp',
            
            // Sliding entrances
            'animate__slideInDown', 'animate__slideInLeft', 'animate__slideInRight', 'animate__slideInUp'
        ];
    
        let select = typeanimations[Math.floor(Math.random()*typeanimations.length)];
        console.log(`la animacion escogida es ${select}`);
    
        const dados = document.createElement('div');
        dados.classList.add('dados','animate__animated', select, 'animate__delay-.6s');
 
        console.log(dados.classList);
    
        dados.style.backgroundColor = colorRandom();
        dados.textContent = colorRandom() +' ' + select;

        dados.addEventListener('click', () => {
            if(dados.classList.contains('dados','animate__animated', select, 'animate__delay-2s')){
            dados.classList.remove('dados','animate__animated', select, 'animate__delay-2s');
            void dados.offsetWidth;
            dados.classList.add('dados','animate__animated', select, 'animate__delay-.5s');
            }
            
            console.log('diste click');
        });
        document.querySelector('.caja').appendChild(dados);
        y++;
    }
}
// Función para generar un color hexadecimal aleatorio
function colorRandom() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log('generando color');
    return color;
    
}

fullanimation();
