import { configureStore } from "@reduxjs/toolkit";
import { playerListReducer } from "./playerlist/PlayerListSlice";
import { storyInfoReducer } from "./gameinfo/StoryInfoSlice";
import { characterListReducer } from "./characterlist/CharacterListSlice";

export default configureStore({
    reducer: {
        playerlist: playerListReducer,
        storyinfo: storyInfoReducer,
        characterlist: characterListReducer
    }
});