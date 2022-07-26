import { InfoUser } from "./../Interfaces/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginValues } from "Interfaces/Login";
import { RegisterValues } from "Interfaces/Register";

import { User, UserRegister } from "Interfaces/User";
import UserAPI from "Services/userAPI";

interface State {
  user: User | null;
  registerValues: UserRegister | null;
  isLoading: boolean;
  errorLogin: string | null;
  errorRegister: string | null;
  infoUser: InfoUser | null;
  isInfoUserLoading: boolean;
  errorInfoUser: string | null;
  availableUser: boolean;
}
const initialState: State = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isLoading: false,
  errorLogin: null,
  errorRegister: null,
  registerValues: null,
  infoUser: null,
  isInfoUserLoading: false,
  errorInfoUser: null,
  availableUser: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginValues: LoginValues, { rejectWithValue }) => {
    try {
      const data = await UserAPI.getUser(loginValues);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (RegisterValues: RegisterValues, { rejectWithValue }) => {
    try {
      const data = await UserAPI.postRegisterUser(RegisterValues);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserInfo = createAsyncThunk(`auth/userInfo`, async () => {
  try {
    const data = await UserAPI.postUserInfo();
    return data;
  } catch (error) {
    throw error;
  }
});

export const putUpdateUser = createAsyncThunk(
  `auth/update`,
  async (payload: UserRegister) => {
    try {
      const data = await UserAPI.putUpdateUser(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    },

    toggleAvailableUser: (state) => {
      state.availableUser = !state.availableUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.errorLogin = null;
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (typeof payload === "string") {
        state.errorLogin = payload;
      }
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.registerValues = payload;
      state.isLoading = false;
      state.errorRegister = null;
    });
    builder.addCase(registerUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (typeof payload === "string") {
        state.errorRegister = payload;
      }
    });
    //--------------------------------------------------------------
    builder.addCase(postUserInfo.pending, (state) => {
      state.isInfoUserLoading = true;
    });
    builder.addCase(postUserInfo.fulfilled, (state, { payload }) => {
      state.isInfoUserLoading = false;
      state.infoUser = payload;
    });
    builder.addCase(postUserInfo.rejected, (state, { payload }) => {});
  },
});

export const { logoutUser, toggleAvailableUser } = authSlice.actions;

export default authSlice.reducer;
