import { Container, ListGroup, ListGroupItem, Label, Row, Button, CloseButton } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import "./StorytellerComponent.css";

const StorytellerComponent = () => {
    return (
        <div className="Storyteller">
            <div className="StorytellerPlaque">
                <div className="StorytellerBigTitle">Blood on the Clocktower</div>
                <div className="StorytellerScriptTitle text-truncate" contentEditable>Trouble Brewing</div>
            </div>
            <div className="ListOfStorytellers">
                <div className="AuthorImage">
                    <CharacterIcon imageSrc="https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png" />
                </div>
                <ul className="AuthorList">
                    <li className="Author">
                        <label className="Name" contentEditable>Juvalent</label>
                        <label className="Pronouns" contentEditable>he/him</label>
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