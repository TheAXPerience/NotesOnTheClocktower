import { CloseButton } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import "./PlayerComponent.css";

const PlayerComponent = (props) => {
    return (
        <div className="PlayerNotes">
            <div className="PlayerInfoSection">
                <div className="PlayerCharacterImage">
                    <CharacterIcon imageSrc={props.imageSrc} />
                </div>
                <div className="PlayerNamePronouns">
                    <input className="Name" placeholder="Enter name here" />
                    <input className="Pronouns" placeholder="Enter pronouns here" />
                </div>
                <div className="PlayerStatus">
                    <button>Alive/Dead</button>
                </div>
                <div className="PlayerStatus">
                    <button>Good/Evil</button>
                </div>
            </div>
            <div className="PlayerNoteSection">
                <div className="Noteblock">
                    <textarea className="NoteblockNote" placeholder="Write notes here..." />
                    <CloseButton className="Close" />
                </div>
                <div className="Noteblock">
                    <textarea className="NoteblockNote" placeholder="Write notes here..." />
                    <CloseButton className="Close" />
                </div>
                <div className="Noteblock">
                    <textarea className="NoteblockNote" placeholder="Write notes here..." />
                    <CloseButton className="Close" />
                </div>
                <div className="Noteblock">
                    <textarea className="NoteblockNote" placeholder="Write notes here..." />
                    <CloseButton className="Close" />
                </div>
                <div className="Noteblock">
                    <textarea className="NoteblockNote" placeholder="Write notes here..." />
                    <CloseButton className="Close" />
                </div>
                <div>
                    <button className="AddPlayerButton">+ Add Note</button>
                </div>
            </div>
        </div>
    );
}

export default PlayerComponent;