import { Collapse } from "reactstrap";
import ExpandingTextareaHook from "../hooks/ExpandingTextareaHook";
import "./StorytellerComponent.css";
import { useRef, useState } from "react";
import StorytellerNotepadComponent from "./StorytellerNotepadComponent";
import { useDispatch, useSelector } from "react-redux";
import { editScriptTitle, selectScriptTitle } from "../features/gameinfo/StoryInfoSlice";

const StorytellerComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const dispatch = useDispatch();
    const scriptName = useSelector(selectScriptTitle);
    const setScriptName = (scriptTitle) => {
        dispatch(editScriptTitle(scriptTitle));
    }

    // setup textarea expansion
    const textAreaRef = useRef(null);
    ExpandingTextareaHook(textAreaRef.current, scriptName, 40, 8);

    return (
        <div className="Storyteller">
            <div className="StorytellerPlaque">
                <img
                    src="https://wiki.bloodontheclocktower.com/skins/pivot/assets/images/logo.png"
                    alt="Blood on the Clocktower"
                    className="StorytellerTitleImage"
                />
                <textarea
                    className="StorytellerScriptTitle"
                    placeholder="Enter script name here..."
                    ref={textAreaRef}
                    rows={1}
                    value={scriptName}
                    onChange={(event) => setScriptName(event.target.value)}
                />
            </div>
            <div className="GamesButtonPane">
                <button className="AddPlayerButton">New Game</button>
                <button className="AddPlayerButton">Save Game</button>
                <button className="AddPlayerButton">Load Game</button>
            </div>
            <div className="PresentedBy">
                <button className="PresentedByButton" onClick={() => setIsOpen(!isOpen)}>Presented By...</button>
                <Collapse isOpen={isOpen}>
                    <StorytellerNotepadComponent />
                </Collapse>
            </div>
        </div>
    );
}

export default StorytellerComponent;