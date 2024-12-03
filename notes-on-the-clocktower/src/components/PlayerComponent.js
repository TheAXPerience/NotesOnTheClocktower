import { useEffect, useRef, useState } from "react";
import { CloseButton } from "reactstrap";
import { ToggleSwitch } from "reactjs-toggleswitch";
import CharacterIcon from "./CharacterIcon";
import Noteblock from "./Noteblock";
import "./PlayerComponent.css";
import { useDispatch } from "react-redux";
import {
    removePlayer,
    editPlayerName,
    editPlayerPronouns,
    editPlayerIsDead,
    editPlayerIsEvil,
    addPlayerNote,
    editPlayerNote,
    removePlayerNote
} from "../features/playerlist/PlayerListSlice";
import CharacterSelectModal from "./CharacterSelectModal";

// angles for random rotation
const maxAngle = 5;
const minAngle = -5;

const PlayerComponent = (props) => {
    const dispatch = useDispatch();
    const player = props.player;

    const [modalOpen, setModalOpen] = useState(false);

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

    // edit player name
    const EditPlayerName = (event) => {
        const val = event.target.value;
        dispatch(editPlayerName({id: player.id, val: val}))
    }

    // edit player pronouns
    const EditPlayerPronouns = (event) => {
        const val = event.target.value;
        dispatch(editPlayerPronouns({id: player.id, val: val}))
    }

    // edit isDead
    const ToggleIsDead = () => {
        const val = !player.isDead;
        dispatch(editPlayerIsDead({id: player.id, val: val}))
    }

    // edit isEvil
    const ToggleIsEvil = () => {
        const val = !player.isEvil;
        dispatch(editPlayerIsEvil({id: player.id, val: val}))
    }

    // add a new note
    const AddNewNote = () => {
        dispatch(addPlayerNote({ id: player.id }));
    }

    // on change
    const EditNote = (noteId, val) => {
        const id = player.id;
        dispatch(editPlayerNote({ id, noteId, val }));
    }

    // on delete
    const DeleteNote = (noteId) => {
        dispatch(removePlayerNote({ id: player.id, noteId }));
    }

    return (
        <div className="PlayerNotes">
            <CloseButton className="CloseButton" onClick={() => ClosePlayer()} />
            <div className="PlayerInfoSection" ref={playerInfoRef}>
                <div className="PlayerCharacterImage">
                    <CharacterIcon
                        imageSrc={props.imageSrc}
                        onClick={() => setModalOpen(!modalOpen)}
                    />
                </div>
                <div className="PlayerNamePronouns">
                    <input
                        className="Name"
                        placeholder="Enter name here"
                        value={player.playerName}
                        onChange={EditPlayerName}
                    />
                    <input
                        className="Pronouns"
                        placeholder="Enter pronouns here"
                        value={player.pronouns}
                        onChange={EditPlayerPronouns}
                    />
                </div>
                <div className="PlayerStatus">
                    <ToggleSwitch
                        checked={player.isDead}
                        onToggle={ToggleIsDead}
                        onColor="#FF8890"
                        offColor="#90E898"
                        width={120}
                    />
                    <label className="SwitchLabel">
                        {player.isDead ? "Dead" : "Alive"}
                    </label>
                </div>
                <div className="PlayerStatus">
                    <ToggleSwitch
                        checked={player.isEvil}
                        onToggle={ToggleIsEvil}
                        onColor="#FF6870"
                        offColor="#A0CCFF"
                        width={120}
                    />
                    <label className="SwitchLabel">
                        {player.isEvil ? "Evil" : "Good"}
                    </label>
                </div>
            </div>
            <div className="PlayerNoteSection">
                <button
                    className="AddPlayerButton"
                    onClick={AddNewNote}
                >
                    + Add Note
                </button>
            </div>
            <div className="PlayerNoteSection">
                {
                    player.notes.map(note => {
                        return (
                            <Noteblock
                                note={note}
                                noteColor={player.noteColor}
                                onEdit={EditNote}
                                onClose={DeleteNote}
                            />
                        );
                    })
                }
            </div>
            <CharacterSelectModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
                modalLines={"ModalLinesBlue"}
                onSelect={() => console.log("Hello World - Player")}
            />
        </div>
    );
}

export default PlayerComponent;