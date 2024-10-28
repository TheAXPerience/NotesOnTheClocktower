import Noteblock from "./Noteblock";
import "./StorytellerNotepadComponent.css";

const StorytellerNotepadComponent = () => {
    const notes = [
        { id: 1, content: "Hello World" }
    ];
    return (
        <div className="StorytellerNotes">
            <div className="StorytellerNoteSection">
                {
                    notes.map(note => {
                        return (
                            <Noteblock
                                note={note}
                                noteColor="#FFFFFF"
                                onEdit={() => console.log("Edit the world")}
                                onClose={() => console.log("Delete the world")}
                            />
                        );
                    })
                }
            </div>
            <div className="StorytellerNoteSection">
                <button
                    className="AddPlayerButton"
                    onClick={() => console.log("Goodbye, world")}
                >
                    + Add Note
                </button>
            </div>
        </div>
    );
}

export default StorytellerNotepadComponent;