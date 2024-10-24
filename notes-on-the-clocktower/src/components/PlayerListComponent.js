import { Button, Collapse, Container, Label, ListGroup, ListGroupItem } from 'reactstrap';
import { useState } from 'react';
import PlayerComponent from "./PlayerComponent";
import CharacterIconMini from './CharacterIconMini';
import "./PlayerListComponent.css";

const PlayerListComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="PlayersContainer">
            <Collapse isOpen={isOpen}>
                <PlayerComponent />
            </Collapse>
            <ul className="PlayerList">
                <li className="Player">
                    <button onClick={() => toggle()}>
                        <div className="PlayerCharacter">
                            <CharacterIconMini imageSrc="https://wiki.bloodontheclocktower.com/images/b/b2/Icon_po.png" />
                        </div>
                        <div className="PlayerNamePronouns">
                            <label className="Name">Hello World</label>
                            <label className="Pronouns">he/him</label>
                        </div>
                    </button>
                </li>
                <li className="Player">
                    <button>
                        <div className="PlayerCharacter">
                            <CharacterIconMini imageSrc="https://wiki.bloodontheclocktower.com/images/0/0c/Icon_innkeeper.png" />
                        </div>
                        <div className="PlayerNamePronouns">
                            <label className="Name">Stinky Pete</label>
                            <label className="Pronouns">he/him</label>
                        </div>
                    </button>
                </li>
                <li className="AddPlayer">
                    <button>+ Add Player</button>
                </li>
            </ul>
        </div>
    );
}

export default PlayerListComponent;