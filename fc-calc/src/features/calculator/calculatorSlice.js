import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        unit: ''
    },
    reducers: {
        setCelsius: (state, action) => {
            state.celsius = action.payload;
            state.unit = 'c';
        },
        setFahrenheit: (state, action) => {
            state.fahrenheit = action.payload;
            state.unit = 'f';
        },
        calc: (state) => {
            state.celsius = state.unit === 'c' ? state.celsius : ((parseInt(state.fahrenheit)-32)/1.8);
            state.fahrenheit = state.unit === 'f' ? state.fahrenheit : (parseInt(state.celsius)*1.8+32);
        }
    }}
    );

export const {setCelsius, setFahrenheit, calc} = calculatorSlice.actions;

export default calculatorSlice.reducer;