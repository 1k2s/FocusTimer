import { state } from "./state.js"
import * as events from './events.js'
import * as el from './elements.js'


export function toggleRunning() {

    if(state.isRunning == true)
        return;
    document.documentElement.classList.add('Running')
    state.isRunning = true
    events.countDown()

}

export function pause() {
    document.documentElement.classList.remove('Running')
    state.isRunning = false
}

export function set() {
    el.minutes.removeAttribute('disabled', true)
    el.seconds.removeAttribute('disabled', true)
    pause()
    el.minutes.focus()
    state.Initial = true
    el.containerTimer.classList.remove('animationTimer')
}

export function add() {
    /* */ 
    // let seconds = Number(el.seconds.value)
    // console.log(seconds)

    // if (seconds >= 55) {
    //     seconds = 0
    // } else {
    //     seconds += 5
    // }

    // el.seconds.value = String(seconds).padStart(2, '0')
    
    
    events.addTime(5);
    state.Initial = true
    el.containerTimer.classList.remove('animationTimer')

}

export function remove() {

    events.addTime(-5);
    
}


    
        
        






    

        

 



    