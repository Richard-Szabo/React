import { createSlice } from "@reduxjs/toolkit";


const calculate = (state) => {
    switch (state.lastOperation) {
        case "+":
            state.value = eval(state.lastValue + state.lastOperation + state.value)
            break;
        case "-":
            state.value = eval(state.lastValue + "-" + state.value)
            break;
        case "/":
            if (state.value == 0) {
                state.value = "N/A"
            }
            else {
                state.value = eval(state.lastValue + "/" + state.value)
            }
            break;
        case "*":
            state.value = eval(state.lastValue + "*" + state.value)
            break;
    }
    state.lastOperation = null;
}

const reset = (state) => {
    state.value = '0';
    state.lastValue = '0';
    state.lastOperation = null;
    state.lastValueString = '';
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: '0',
        lastValue: '0',
        lastOperation: null,
        lastValueString: "",
        history: [],
        showHistory: false
    },
    reducers: {
        buttonCommand: (state, action) => {
            if (!isNaN(action.payload) || action.payload == ".") {
                if (parseInt(state.value) === 0) {
                    state.value = action.payload;
                }
                else {
                    state.value += action.payload;
                }
                state.lastValueString += action.payload;
            }
            if (action.payload === "AC") {
                reset(state)
            }
            if (action.payload === "+" || action.payload === "-" || action.payload === "/" || action.payload === "*") {
                if (state.lastOperation !== null) {
                    calculate(state)
                }
                console.log(state.value);
                state.lastOperation = action.payload;
                state.lastValue = state.value;
                state.value = '';
                state.lastValueString += action.payload;
            }
            if (action.payload === "=") {
                calculate(state)

                const arr = [...state.history];
                arr.push(state.lastValueString + action.payload + state.value);
                state.history = arr;
                state.lastValueString = 'ANS(' + state.value + ")";
            }
            if (action.payload === "%") {
                state.value = eval(state.value + "/" + 100);
            }
            if (action.payload === "+/-") {
                if (Math.sign(state.value) == 1) {
                    state.value = eval("-" + state.value);
                }
                else if (Math.sign(state.value) == -1) {
                    state.value = Math.abs(state.value);
                }

            }
        },
        historyToggle: (state) => {
            state.showHistory = !state.showHistory;
        }

    }
})

export const { buttonCommand, historyToggle } = calculatorSlice.actions;
export default calculatorSlice.reducer;