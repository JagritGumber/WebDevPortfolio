import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadSlim } from "@tsparticles/slim";

import { initParticlesEngine } from "@tsparticles/react";

export interface ParticlesState {
  init: boolean;
}

const initialState: ParticlesState = {
  init: false,
};

export const particleSlice = createSlice({
  name: "particles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      initParticles.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.init = action.payload;
      }
    );
  },
});

export const initParticles = createAsyncThunk(
  "particles/init",
  async function (_, thunkAPI) {
    try {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      return thunkAPI.fulfillWithValue(true);
    } catch (err) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);

export const {} = particleSlice.actions;

export default particleSlice.reducer;
