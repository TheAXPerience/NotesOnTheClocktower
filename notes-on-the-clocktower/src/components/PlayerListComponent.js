import { Collapse } from 'reactstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlayers, addPlayer } from '../features/playerlist/PlayerListSlice';
import PlayerComponent from "./PlayerComponent";
import CharacterIconMini from './CharacterIconMini';
import "./PlayerListComponent.css";

const PlayerListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="Player">
            <button
                className="PlayerButton"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: props.player.noteColor,
                    borderColor: props.player.isEvil ? "#FF6870" : "#A0CCFF",
                    boxShadow: props.player.isEvil ? "2px 2px 6px #FF6870" : "2px 2px 6px #A0CCFF"
                }}
            >
                <div className="PlayerCharacter">
                    <CharacterIconMini
                        imageSrc={props.player.imageSrc}
                        backgroundColor={props.player.isDead ? "#ff8890" : "#90e898"}
                        boxShadow={props.player.isDead ? "0px 0px 4px #FF8890" : "0px 0px 4px #90e898"}
                    />
                </div>
                <div className="PlayerNamePronouns">
                    <label
                        className="Name"
                    >{props.player.playerName}</label>
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
            notes: [],
        };
        dispatch(addPlayer(newPlayer));
    }

    return (
        <div className="PlayersContainer">
            <ul className="PlayerList">
                <li className="AddPlayer">
                    <button className="AddPlayerButton" onClick={() => handleAddPlayer()}>
                        + Add Player
                    </button>
                </li>
            </ul>
            <ul className="PlayerList">
                {
                    players.map(player => {
                        return <PlayerListItem player={player} key={player.id} />;
                    })
                }
            </ul>
        </div>
    );
}

export default PlayerListComponent;