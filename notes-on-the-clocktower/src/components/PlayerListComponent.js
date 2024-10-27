import { Collapse } from 'reactstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlayers, addPlayer } from '../features/playerlist/PlayerListSlice';
import PlayerComponent from "./PlayerComponent";
import CharacterIconMini from './CharacterIconMini';
import "./PlayerListComponent.css";

const pastelColors = [
    "#b9e2e6",
    "#fcf784",
    "#fac7c4",
    "#bef1ae",
    "#f9b0a7",
    "#d6d6e2",
    "#ffd2a5"
];

const PlayerListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="Player">
            <button
                className="PlayerButton"
                onClick={() => setIsOpen(!isOpen)}
                style={{ backgroundColor: props.player.noteColor }}
            >
                <div className="PlayerCharacter">
                    <CharacterIconMini imageSrc={props.player.imageSrc} />
                </div>
                <div className="PlayerNamePronouns">
                    <label className="Name">{props.player.playerName}</label>
                    <label className="Pronouns">{props.player.pronouns}</label>
                </div>
            </button>
            <Collapse isOpen={isOpen}>
                <PlayerComponent player={props.player} imageSrc={props.player.imageSrc} />
            </Collapse>
        </li>
    );
}

const PlayerListComponent = () => {
    // temporary player list
    const dispatch = useDispatch();
    const players = useSelector(selectAllPlayers);

    const handleAddPlayer = () => {
        const newPlayer = {
            playerName: "",
            pronouns: "",
            isDead: false,
            isEvil: false,
            characterRole: "",
            imageSrc: "",
            noteColor: pastelColors[Math.floor(Math.random() * pastelColors.length)],
            notes: [],
        };
        dispatch(addPlayer(newPlayer));
    }

    console.log(players);

    return (
        <div className="PlayersContainer">
            <ul className="PlayerList">
                {
                    players.map(player => {
                        return <PlayerListItem player={player} key={player.id} />;
                    })
                }
            </ul>
            <ul className="PlayerList">
                <li className="AddPlayer">
                    <button className="AddPlayerButton" onClick={() => handleAddPlayer()}>
                        + Add Player
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default PlayerListComponent;