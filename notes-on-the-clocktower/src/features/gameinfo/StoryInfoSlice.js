import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scriptTitle: "",
    storytellerArray: [],
    storytellerNotesArray: [],
    storytellerCharactersArray: [],
    storytellerIndex: 0,
    storytellerNotesIndex: 0,
    storytellerCharactersIndex: 0,
    isLoading: true,
    errMsg: ""
};

const StoryInfoSlice = createSlice({
    name: "storyinfo",
    initialState,
    reducers: {
        editScriptTitle: (state, action) => {
            state.scriptTitle = action.payload;
        },
        addStoryteller: (state, action) => {
            const storyteller = {
                id: state.storytellerIndex++,
                storytellerName: "",
                pronouns: ""
            };
            state.storytellerArray.push(storyteller);
        },
        removeStoryteller: (state, action) => {
            const id = parseInt(action.payload.id);
            const idx = state.storytellerArray.findIndex(storyteller => storyteller.id === id);
            
            if (idx > -1) {
                state.storytellerArray.splice(idx, 1);
            }
        },
        editStorytellerName: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;
            const idx = state.storytellerArray.findIndex(storyteller => storyteller.id === id);
            
            if (idx > -1) {
                state.storytellerArray[idx].storytellerName = val;
            }
        },
        editStorytellerPronouns: (state, action) => {
            const id = parseInt(action.payload.id);
            const val = action.payload.val;
            const idx = state.storytellerArray.findIndex(storyteller => storyteller.id === id);
            
            if (idx > -1) {
                state.storytellerArray[idx].pronouns = val;
            }
        },
        addStorytellerCharacter: (state, action) => {
            const storytellerCharacter = {
                id: state.storytellerCharactersIndex++,
                character: "",
                imageSrc: ""
            };
            state.storytellerCharactersArray.push(storytellerCharacter);
        },
        removeStorytellerCharacter: (state, action) => {
            const id = parseInt(action.payload);
            const idx = state.storytellerCharactersArray.findIndex(sc => sc.id === id);

            if (idx > -1) {
                state.storytellerCharactersArray.splice(idx, 1);
            }
        },
        editStorytellerCharacter: (state, action) => {
            const id = parseInt(action.payload.id);
            const character = action.payload.character;
            const imageSrc = action.payloag.imageSrc;
            const idx = state.storytellerCharactersArray.findIndex(sc => sc.id === id);

            if (idx > -1) {
                state.storytellerCharactersArray[idx].character = character;
                state.storytellerCharactersArray[idx].imageSrc = imageSrc;
            }
        },
        addStorytellerNote: (state, action) => {
            const note = {
                id: state.storytellerNotesIndex++,
                content: ""
            };
            state.storytellerNotesArray.push(note);
        },
        removeStorytellerNote: (state, action) => {
            const noteId = parseInt(action.payload.noteId);
            const idx = state.storytellerNotesArray.findIndex(note => note.id === noteId);

            if (idx > -1) {
                state.storytellerNotesArray.splice(idx, 1);
            }
        },
        editStorytellerNote: (state, action) => {
            const noteId = parseInt(action.payload.noteId);
            const val = action.payload.val;
            const idx = state.storytellerNotesArray.findIndex(note => note.id === noteId);

            if (idx > -1) {
                state.storytellerNotesArray[idx].content = val;
            }
        }
    }
});

export const {
    editScriptTitle,
    addStoryteller,
    removeStoryteller,
    editStorytellerName,
    editStorytellerPronouns,
    addStorytellerCharacter,
    removeStorytellerCharacter,
    editStorytellerCharacter,
    addStorytellerNote,
    removeStorytellerNote,
    editStorytellerNote
} = StoryInfoSlice.actions;

export const storyInfoReducer = StoryInfoSlice.reducer;

export const selectScriptTitle = (state) => {
    return state.storyinfo.scriptTitle;
}

export const selectAllStorytellers = (state) => {
    return state.storyinfo.storytellerArray;
}

export const selectAllStorytellerNotes = (state) => {
    return state.storyinfo.storytellerNotesArray;
}

export const selectAllStorytellerCharacters = (state) => {
    return state.storyinfo.storytellerCharactersArray;
}
