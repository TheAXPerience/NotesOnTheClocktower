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
                id: state.playerListIndex++,
                noteIndex: 0,
                ...action.payload
            };
            state.playerListArray.push(newPlayer);
        },
        removePlayer: (state, action) => {
            const id = parseInt(action.payload);
            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray.splice(idx, 1);
            }
        },
        editPlayerName: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;

            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray[idx].playerName = val;
            }
        },
        editPlayerPronouns: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;

            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray[idx].pronouns = val;
            }
        },
        editPlayerIsDead: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;

            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray[idx].isDead = val;
            }
        },
        editPlayerIsEvil: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;

            const idx = state.playerListArray.findIndex(player => player.id === id);
            if (idx > -1) {
                state.playerListArray[idx].isEvil = val;
            }
        },
        addPlayerNote: (state, action) => {
            const id = parseInt(action.payload.id);
            const idx = state.playerListArray.findIndex(player => player.id === id);

            if (idx > -1) {
                const player = state.playerListArray[idx];
                const newNote = {
                    id: player.noteIndex++,
                    content: ""
                };
                player.notes.push(newNote);
            }
        },
        removePlayerNote: (state, action) => {
            const id = parseInt(action.payload.id);
            const noteId = parseInt(action.payload.noteId);
            const idx = state.playerListArray.findIndex(player => player.id === id);

            if (idx > -1) {
                const player = state.playerListArray[idx];
                const noteIdx = player.notes.findIndex(note => note.id === noteId);
                if (noteIdx > -1) {
                    player.notes.splice(noteIdx, 1);
                }
            }
        },
        editPlayerNote: (state, action) => {
            const id = parseInt(action.payload.id);
            const noteId = parseInt(action.payload.noteId);
            const val = action.payload.val;
            const idx = state.playerListArray.findIndex(player => player.id === id);

            if (idx > -1) {
                const player = state.playerListArray[idx];
                const noteIdx = player.notes.findIndex(note => note.id === noteId);
                if (noteIdx > -1) {
                    player.notes[noteIdx].content = val;
                }
            }
        }
    }
});

export const {
    addPlayer,
    removePlayer,
    editPlayerName,
    editPlayerPronouns,
    editPlayerIsDead,
    editPlayerIsEvil,
    addPlayerNote,
    removePlayerNote,
    editPlayerNote
} = PlayerListSlice.actions;

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
