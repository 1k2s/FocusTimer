import * as actions from './actions.js';
import { state } from "./state.js";
import * as el from './elements.js';
import * as sounds from './sounds.js'


export function registerControls() {
    
    el.controls.addEventListener('click', (event) => {

        let action = event.target.dataset.action

        if(typeof actions[action] != 'function') {
            console.log('não é uma função')
            return
        } else {
            actions[action]()
        }
    })
}
        
export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.value = String(minutes).padStart(2, '0')
    el.seconds.value = String(seconds).padStart(2, '0')
}

export function countDown () {
    
    if(!state.isRunning) {
        return
    }
    
    console.log('cronometro iniciado')
    
    let minutes = Number(el.minutes.value)
    let seconds = Number(el.seconds.value)
    
    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }
    
    if(minutes < 0) {

        if(state.Initial == true) {
            el.containerTimer.classList.toggle('animationTimer')
            sounds.endTimer.play()
        }
        
        state.isRunning = false
        document.documentElement.classList.remove('running')

        state.minutes = 0
        state.seconds = 0

        state.Initial = false

        return
    }
    
    updateDisplay(minutes, seconds)
    
    setTimeout(() => {countDown()}, 1000) 
}

export function setMinutes() {

    el.minutes.addEventListener('focus', () => {
        el.minutes.value = ''
    })

    el.seconds.addEventListener('focus', () => {
        el.seconds.value = ''
    })

    el.minutes.addEventListener('keydown', (event) => {

        let tecla = event.key
        console.log(tecla)
        if(!isNaN(tecla) || tecla == 'Backspace') {
            
        } else {
            event.preventDefault()
        }
    })

    el.seconds.addEventListener('keydown', (event) => {

        let tecla = event.key
        console.log(tecla)
        if(!isNaN(tecla) || tecla == 'Backspace') {
            
        } else {
            event.preventDefault()
        }
    })

    el.minutes.addEventListener('blur', (event) => {
        
        let time = event.currentTarget.value
        console.log(time,"minutes")
        
        time = time > 60 ? 60 : time

        state.minutes = time

        updateDisplay()

        el.minutes.setAttribute('disabled', true)
    })

    el.seconds.addEventListener('blur', (event) => {

        let time = event.currentTarget.value
        console.log(time, 'seconds')
        
        time = time > 59 ? 59 : time

        state.seconds = time

        updateDisplay()

        el.seconds.setAttribute('disabled', true)
    })
}

export function addTime(seconds_add) {
    
    let seconds_el = Number(el.seconds.value);
    let minutes_el = Number(el.minutes.value);
    let soma = seconds_el + seconds_add;
    
    let fn = function () {
        el.seconds.value = String(seconds_el).padStart(2, '0')
        el.minutes.value = String(minutes_el).padStart(2, '0')
    }


    if(soma < 0 || soma > 59) {
        seconds_el = 0;
        if(soma > 59 && minutes_el < 59)minutes_el++;
        if(soma < 0 && minutes_el > 0) 
        {
            minutes_el--;
            seconds_el = 55;
        }
        fn();
        return;
    }
         

    seconds_el += seconds_add;
    fn();   

}
      
export function playSounds() {
    
    el.containerSounds.addEventListener('click', (event) => {
    
      if(!state.isMute) {
        sounds[state.lastSound].pause()
        el[state.lastSound].classList.toggle('color-button-sounds-actived')
        console.log(state.lastSound)
        state.isMute = true
      }
      
      let sound = event.target.id
      
      state.lastSound = sound
      state.isMute = false

      el[sound].classList.toggle('color-button-sounds-actived')
      sounds[sound].play()
      console.log(state)
      
    })
}  

        
        
        
        
        

     
            
        

       

        
 





        



