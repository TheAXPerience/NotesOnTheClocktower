import { createSlice } from "@reduxjs/toolkit";
import charactersJson from "../../data/characterRoles.json";

const initialState = charactersJson;

const CharacterListSlice = createSlice({
    name: "characterlist",
    initialState,
    reducers: {}
});

/* export const {

} = CharacterListSlice.actions; */

export const characterListReducer = CharacterListSlice.reducer;

export const selectAllScripts = (state) => {
    return state.characterlist["baseScripts"];
}

export const selectAllCharacterTypes = (state) => {
    return state.characterlist["characterTypes"];
}

// get all characters
export const selectAllCharacters = (state) => {
    return state.characterlist["characterRoles"];
}

export const selectCharactersOfType = (charType) => (state) => {
    return state.characterlist["characterRoles"].filter(character => {
        return character["characterType"] === charType;
    });
}

export const selectCharactersOfScript = (scriptName) => (state) => {
    return state.characterlist["characterRoles"].filter(character => {
        return character["baseScript"] === scriptName;
    });
}

export const selectCharactersFiltered = (scriptName, charType) => (state) => {
    let filteredCharacters = state.characterlist["characterRoles"];
    if (scriptName !== "") {
        filteredCharacters = filteredCharacters.filter(character => {
            return character["baseScript"] === scriptName;
        });
    }
    if (charType !== "") {
        filteredCharacters = filteredCharacters.filter(character => {
            return character["characterType"] === charType;
        });
    }
    return filteredCharacters;
}
