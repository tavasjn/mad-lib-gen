import axios from 'axios';
import { SAVE_INPUTS, SAVE_INPUTS_TO_DB, GET_OUTPUT } from './actionTypes';

const initialState = {
    inputs: [],
    output: [],
}

export const saveInputs = (
    inputOne,
    inputTwo,
    inputThree,
    inputFour,
    inputFive,
    inputSix,
    inputSeven,
    inputEight,
    inputNine,
    inputTen,
    inputEleven,
    inputTwelve,
    inputThirteen,
    inputFourteen,
    inputFifteen,
    inputSixteen,
    inputSeventeen,
    inputEighteen,
    inputNineteen,
    inputTwenty
) => {
    let savedInputs = [
        inputOne,
        inputTwo,
        inputThree,
        inputFour,
        inputFive,
        inputSix,
        inputSeven,
        inputEight,
        inputNine,
        inputTen,
        inputEleven,
        inputTwelve,
        inputThirteen,
        inputFourteen,
        inputFifteen,
        inputSixteen,
        inputSeventeen,
        inputEighteen,
        inputNineteen,
        inputTwenty
    ]
    return {
        type: SAVE_INPUTS,
        payload: savedInputs
    }
}

export default function(state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case SAVE_INPUTS:
            return {...state, inputs: payload}
        default:
            return state
    }
}