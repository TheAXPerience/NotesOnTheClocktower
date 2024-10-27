import { CloseButton } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import ExpandingTextareaHook from "../hooks/ExpandingTextareaHook";
import "./StorytellerComponent.css";
import { useRef, useState } from "react";

const StorytellerComponent = () => {
    // temporary state
    const [scriptName, setScriptName] = useState("");

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
            <div className="ListOfStorytellers">
                <div className="AuthorImage">
                    <CharacterIcon imageSrc="https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png" />
                </div>
                <ul className="AuthorList">
                    <li className="Author">
                        <input className="Name" value="Juvalent" placeholder="Enter name here"></input>
                        <input className="Pronouns" value="he/him" placeholder="Enter pronouns here"></input>
                        <CloseButton className="Close" />
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