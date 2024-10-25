import { Container, ListGroup, ListGroupItem, Label, Row, Button, CloseButton } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import "./StorytellerComponent.css";

const StorytellerComponent = () => {
    return (
        <div className="Storyteller">
            <div className="StorytellerPlaque">
                <div className="StorytellerBigTitle">Blood on the Clocktower</div>
                <input className="StorytellerScriptTitle" placeholder="Enter script name here..." />
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