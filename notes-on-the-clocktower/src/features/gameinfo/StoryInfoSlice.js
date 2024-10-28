import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scriptTitle: "",
    storytellerArray: [],
    storytellerCharactersArray: [],
    storytellerIndex: 0,
    storytellerNotesIndex: 0,
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
            // TODO
        },
        removeStoryteller: (state, action) => {
            // TODO
        },
        editStorytellerName: (state, action) => {
            // TODO
        },
        editStorytellerPronouns: (state, action) => {
            // TODO
        },
        addStorytellerCharacter: (state, action) => {
            // TODO
        },
        removeStorytellerCharacter: (state, action) => {
            // TODO
        },
        editStorytellerCharacter: (state, action) => {
            // TODO
        },
        addStorytellerNote: (state, action) => {
            // TODO
        },
        removeStorytellerNote: (state, action) => {
            // TODO
        },
        editStorytellerNote: (state, action) => {
            // TODO
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
