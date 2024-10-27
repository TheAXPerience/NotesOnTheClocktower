import { useEffect, useRef, useState } from "react";
import { CloseButton } from "reactstrap";
import { ToggleSwitch } from "reactjs-toggleswitch";
import CharacterIcon from "./CharacterIcon";
import Noteblock from "./Noteblock";
import "./PlayerComponent.css";
import { useDispatch } from "react-redux";
import { removePlayer } from "../features/playerlist/PlayerListSlice";

// angles for random rotation
const maxAngle = 5;
const minAngle = -5;

const PlayerComponent = (props) => {
    const dispatch = useDispatch();
    const player = props.player;

    // temporary until Redux state is configured
    const [isDead, setIsDead] = useState(player.isDead);
    const [isEvil, setIsEvil] = useState(player.isEvil);

    // random rotation
    const playerInfoRef = useRef(null);
    useEffect(() => {
        if (playerInfoRef) {
            // rotation
            const angle = Math.random() * (maxAngle - minAngle) + minAngle;
            playerInfoRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }, [playerInfoRef]);

    // set color
    useEffect(() => {
        if (playerInfoRef) {
            playerInfoRef.current.style.backgroundColor = player.noteColor;
        }
    }, [playerInfoRef, player.noteColor]);

    // delete player
    const ClosePlayer = () => {
        // probably should add an alert first, but just for testing the redux state...
        dispatch(removePlayer(player.id));
    }

    return (
        <div className="PlayerNotes">
            <CloseButton className="Close" onClick={() => ClosePlayer()} />
            <div className="PlayerInfoSection" ref={playerInfoRef}>
                <div className="PlayerCharacterImage">
                    <CharacterIcon imageSrc={props.imageSrc} />
                </div>
                <div className="PlayerNamePronouns">
                    <input
                        className="Name"
                        placeholder="Enter name here"
                        defaultValue={player.playerName}
                    />
                    <input
                        className="Pronouns"
                        placeholder="Enter pronouns here"
                        defaultValue={player.pronouns}
                    />
                </div>
                <div className="PlayerStatus">
                    <ToggleSwitch
                        checked={isDead}
                        onToggle={() => setIsDead(!isDead)}
                        onColor="#FF8890"
                        offColor="#90E898"
                        width={120}
                    />
                    <label className="SwitchLabel">
                        {isDead ? "Dead" : "Alive"}
                    </label>
                </div>
                <div className="PlayerStatus">
                    <ToggleSwitch
                        checked={isEvil}
                        onToggle={() => setIsEvil(!isEvil)}
                        onColor="#FF6870"
                        offColor="#A0CCFF"
                        width={120}
                    />
                    <label className="SwitchLabel">
                        {isEvil ? "Evil" : "Good"}
                    </label>
                </div>
            </div>
            <div className="PlayerNoteSection">
                {
                    player.notes.map(note => {
                        return <Noteblock content={note} noteColor={player.noteColor} />
                    })
                }
            </div>
            <div className="PlayerNoteSection">
                <button className="AddPlayerButton">+ Add Note</button>
            </div>
        </div>
    );
}

export default PlayerComponent;