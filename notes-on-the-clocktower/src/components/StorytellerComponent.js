import { CloseButton, Collapse } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import ExpandingTextareaHook from "../hooks/ExpandingTextareaHook";
import "./StorytellerComponent.css";
import { useRef, useState } from "react";
import StorytellerNotepadComponent from "./StorytellerNotepadComponent";

const StorytellerComponent = () => {
    // temporary state
    const [scriptName, setScriptName] = useState("");
    const [isOpen, setIsOpen] = useState(false);

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
            <div className="ListOfStorytellers">
                <div className="AuthorImage">
                    <CharacterIcon imageSrc="https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png" />
                </div>
                <ul className="AuthorList">
                    <li className="Author">
                        <input className="Name" value="Juvalent" placeholder="Enter name here"></input>
                        <input className="Pronouns" value="he/him" placeholder="Enter pronouns here"></input>
                        <CloseButton className="CloseButton" />
                    </li>
                    <li className="AddAuthor">
                        <button>+ Add Storyteller</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StorytellerComponent;