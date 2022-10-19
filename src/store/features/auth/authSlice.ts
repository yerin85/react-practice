import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '@store/store';
import {LoginData, ResponseData} from '@services/models/dataModel';
import {AuthState} from '@store/data/stateData';
import {logIn, logOut} from "@services/api/authApi";

const initialState: AuthState = {
    accessToken: null,
    status: 'idle',
};

const loginAsync = createAsyncThunk(
    'user/login',
    async (data: LoginData, { rejectWithValue }) => {
        try {
            const response = await logIn(data);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    });

const logOutAsync = createAsyncThunk(
    'user/logout',
    async (data: LoginData, { rejectWithValue }) => {
        try {
            const response = await logOut(data);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    });

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.accessToken += action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
            })
            .addCase(logOutAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(logOutAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.accessToken = '';
            })
            .addCase(logOutAsync.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const authSliceActions = {...authSlice.actions};
export const selectAuth = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
