import * as events from './events.js';
import { state } from './state.js';

export function start(minutes,seconds) {

    minutes = state.minutes
    seconds = state.seconds

    events.updateDisplay();
    events.registerControls();
    events.setMinutes()
    events.playSounds()

}