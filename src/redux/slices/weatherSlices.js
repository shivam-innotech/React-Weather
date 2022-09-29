import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherAction } from "./service";

fetchWeatherAction();

const WeatherSlice = createSlice({
    name: "weather",
    initialState: { data: 'loaded' },
    extraReducers: builder => {
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.weather = undefined;
            state.loading = false;
            state.error = action?.payload;
        });

    },
});

export default WeatherSlice.reducer;