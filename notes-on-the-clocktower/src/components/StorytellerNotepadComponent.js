import { useDispatch, useSelector } from "react-redux";
import { addStoryteller, addStorytellerCharacter, addStorytellerNote, editStorytellerCharacter, editStorytellerName, editStorytellerNote, editStorytellerPronouns, removeStoryteller, removeStorytellerCharacter, removeStorytellerNote, selectAllStorytellerCharacters, selectAllStorytellerNotes, selectAllStorytellers } from "../features/gameinfo/StoryInfoSlice";
import { useCallback, useState } from "react";
import { CloseButton } from "reactstrap";
import Noteblock from "./Noteblock";
import "./StorytellerNotepadComponent.css";
import CharacterIcon from "./CharacterIcon";
import CharacterSelectModal from "./CharacterSelectModal";

// angles for random rotation
const maxAngle = 5;
const minAngle = -5;

const StorytellerTag = (props) => {
    const storyteller = props.storyteller;

    // random rotation
    const rotateRef = useCallback(node => {
        if (node) {
            const angle = Math.random() * (maxAngle - minAngle) + minAngle;
            node.style.transform = `rotate(${angle}deg)`;
        }
    }, []);

    return (
        <div className="StorytellerTag" ref={rotateRef} key={storyteller.id}>
            <CloseButton className="CloseButton" onClick={props.deleteStoryteller} />
            <input
                className="Name"
                placeholder="Enter name here"
                value={storyteller.storytellerName}
                onChange={props.editName}
            />
            <input
                className="Pronouns"
                placeholder="Enter pronouns here"
                value={storyteller.pronouns}
                onChange={props.editPronouns}
            />
        </div>
    );
}

// props = editCharacter, deleteCharacter, id, character, imageSrc
const StorytellerCharacter = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    // random rotation
    const rotateRef = useCallback(node => {
        if (node) {
            const angle = Math.random() * (maxAngle - minAngle) + minAngle;
            node.style.transform = `rotate(${angle}deg)`;
        }
    }, []);

    const onClick = (character, imageSrc) => {
        props.editCharacter(character, imageSrc);
        setModalOpen(!modalOpen);
    }
    
    return (
        <div className="StorytellerCharacter" ref={rotateRef}>
            <CloseButton className="CloseButton" onClick={props.deleteCharacter} />
            <CharacterIcon
                imageSrc={props.imageSrc}
                imageAlt={props.character}
                onClick={() => setModalOpen(!modalOpen)}
            />
            <CharacterSelectModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
                modalLines={"ModalLinesRed"}
                onSelect={onClick}
            />
        </div>
    );
}

const StorytellerNotepadComponent = () => {
    const dispatch = useDispatch();
    const storytellers = useSelector(selectAllStorytellers);
    const notes = useSelector(selectAllStorytellerNotes);
    const characters = useSelector(selectAllStorytellerCharacters);

    // add storyteller
    const AddStoryteller = () => {
        dispatch(addStoryteller({}))
    }

    // edit storyteller name
    const EditStorytellerName = (id) => (event) => {
        const val = event.target.value;
        dispatch(editStorytellerName({ id, val}))
    }

    // edit storyteller pronouns
    const EditStorytellerPronouns = (id) => (event) => {
        const val = event.target.value;
        dispatch(editStorytellerPronouns({ id, val}))
    }

    // delete storyteller
    const DeleteStoryteller = (id) => {
        dispatch(removeStoryteller({ id }));
    }

    // TODO: add character
    const AddStorytellerCharacter = () => {
        dispatch(addStorytellerCharacter({}));
    }

    // TODO: edit character
    const EditStorytellerCharacter = (id) => (character, imageSrc) => {
        dispatch(editStorytellerCharacter({ id, character, imageSrc }));
    }

    // TODO: delete character
    const DeleteStorytellerCharacter = (id) => () => {
        dispatch(removeStorytellerCharacter({ id }));
    }

    // add note
    const AddNewNote = () => {
        dispatch(addStorytellerNote({}));
    }

    // edit note
    const EditNote = (noteId, val) => {
        dispatch(editStorytellerNote({ noteId, val }));
    }

    // delete note
    const DeleteNote = (noteId) => {
        dispatch(removeStorytellerNote({ noteId }));
    }

    return (
        <div className="StorytellerNotes">
            <div className="StorytellerNoteSection">
                <button
                    className="AddPlayerButton"
                    onClick={AddStoryteller}
                >
                    + Add Storyteller
                </button>
                <button
                    className="AddPlayerButton"
                    onClick={AddStorytellerCharacter}
                >
                    + Add Character
                </button>
                <button
                    className="AddPlayerButton"
                    onClick={AddNewNote}
                >
                    + Add Note
                </button>
            </div>
            <div className="StorytellerNoteSection">
                {
                    storytellers.map(storyteller => {
                        return (
                            <StorytellerTag
                                storyteller={storyteller}
                                editName={EditStorytellerName(storyteller.id)}
                                editPronouns={EditStorytellerPronouns(storyteller.id)}
                                deleteStoryteller={() => DeleteStoryteller(storyteller.id)}
                            />
                        );
                    })
                }
            </div>
            <div className="StorytellerNoteSection">
                {
                    characters.map(character => {
                        return (
                            // props = editCharacter, deleteCharacter, id, character, imageSrc
                            <StorytellerCharacter
                                editCharacter={EditStorytellerCharacter(character.id)}
                                deleteCharacter={DeleteStorytellerCharacter(character.id)}
                                id={character.id}
                                character={character.character}
                                imageSrc={character.imageSrc}
                            />
                        );
                    })
                }
            </div>
            <div className="StorytellerNoteSection">
                {
                    notes.map(note => {
                        return (
                            <Noteblock
                                note={note}
                                noteColor="#FFFFFF"
                                onEdit={EditNote}
                                onClose={DeleteNote}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StorytellerNotepadComponent;