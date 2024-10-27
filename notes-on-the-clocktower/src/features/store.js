import { configureStore } from "@reduxjs/toolkit";
import { playerListReducer } from "./playerlist/PlayerListSlice";

export default configureStore({
    reducer: {
        playerlist: playerListReducer
    }
});