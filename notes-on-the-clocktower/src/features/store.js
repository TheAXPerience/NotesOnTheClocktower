import { configureStore } from "@reduxjs/toolkit";
import { playerListReducer } from "./playerlist/PlayerListSlice";
import { storyInfoReducer } from "./gameinfo/StoryInfoSlice";

export default configureStore({
    reducer: {
        playerlist: playerListReducer,
        storyinfo: storyInfoReducer
    }
});