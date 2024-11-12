import { CloseButton, Collapse } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import ExpandingTextareaHook from "../hooks/ExpandingTextareaHook";
import "./StorytellerComponent.css";
import { useRef, useState } from "react";
import StorytellerNotepadComponent from "./StorytellerNotepadComponent";
import { useDispatch, useSelector } from "react-redux";
import { editScriptTitle, selectScriptTitle } from "../features/gameinfo/StoryInfoSlice";

const StorytellerComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    
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
                <div className="StorytellerBigTitle">Blood on the Clocktower</div>
                <textarea
                    className="StorytellerScriptTitle"
                    placeholder="Enter script name here..."
                    ref={textAreaRef}
                    rows={1}
                    value={scriptName}
                    onChange={(event) => setScriptName(event.target.value)}
                />
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