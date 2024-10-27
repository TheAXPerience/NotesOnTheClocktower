import { Collapse } from 'reactstrap';
import { useState } from 'react';
import PlayerComponent from "./PlayerComponent";
import CharacterIconMini from './CharacterIconMini';
import "./PlayerListComponent.css";

const PlayerListItem = (player) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="Player">
            <button className="PlayerButton" onClick={() => setIsOpen(!isOpen)}>
                <div className="PlayerCharacter">
                    <CharacterIconMini imageSrc={player.imageSrc} />
                </div>
                <div className="PlayerNamePronouns">
                    <label className="Name">{player.playerName}</label>
                    <label className="Pronouns">{player.pronouns}</label>
                </div>
            </button>
            <Collapse isOpen={isOpen}>
                <PlayerComponent player={player} imageSrc={player.imageSrc} />
            </Collapse>
        </li>
    );
}

const PlayerListComponent = () => {
    // temporary player list
    const players = [
        {
            playerName: "Samael",
            pronouns: "he/him",
            isDead: false,
            isEvil: false,
            imageSrc: "https://wiki.bloodontheclocktower.com/images/b/b2/Icon_po.png",
            noteColor: "#f7a6b9",
            notes: [
                "",
                "holy shit"
            ]
        },
        {
            playerName: "Tigger",
            pronouns: "he/him",
            isDead: true,
            isEvil: false,
            imageSrc: "https://wiki.bloodontheclocktower.com/images/0/0c/Icon_innkeeper.png",
            noteColor: "#4bb8da",
            notes: [
                "Tigger's Honey Hunt",
                "Died protecting me :O",
                "",
                "abcdefg hijklmnop qrs tuv wx y z"
            ]
        },
    ]

    return (
        <div className="PlayersContainer">
            <ul className="PlayerList">
                {
                    players.map(player => {
                        return PlayerListItem(player);
                    })
                }
            </ul>
            <ul className="PlayerList">
                <li className="AddPlayer">
                    <button className="AddPlayerButton">+ Add Player</button>
                </li>
            </ul>
        </div>
    );
}

export default PlayerListComponent;