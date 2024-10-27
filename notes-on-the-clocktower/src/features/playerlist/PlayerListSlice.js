import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playerListArray: [],
    playerListIndex: 0,
    isLoading: true,
    errMsg: ""
};

const PlayerListSlice = createSlice({
    name: "playerlist",
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            if (state.playerListArray.length >= 20) {
                // error?
            }
            const newPlayer = {
                id: state.playerListIndex + 1,
                ...action.payload
            };
            state.playerListIndex++;
            state.playerListArray.push(newPlayer);
        },
        removePlayer: (state, action) => {
            const id = parseInt(action.payload);
            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray.splice(idx, 1);
            }
        }
    }
});

export const { addPlayer, removePlayer } = PlayerListSlice.actions;

export const playerListReducer = PlayerListSlice.reducer;

export const selectAllPlayers = (state) => {
    return state.playerlist.playerListArray;
}

export const selectPlayerByIndex = (idx) => (state) => {
    const i = parseInt(idx);
    if (i < 0 || i >= state.playerlist.playerListArray.length) {
        return null;
    }
    return state.playerlist.playerListArray[idx];
}
