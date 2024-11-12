import { CloseButton } from "reactstrap";
import { useCallback, useRef } from "react";
import ExpandingTextareaHook from "../hooks/ExpandingTextareaHook";
import "./Noteblock.css";

const maxAngle = 5;
const minAngle = -5;

const Noteblock = (props) => {
    // set reference to textarea, and set to expanding
    const textAreaRef = useRef(null);
    ExpandingTextareaHook(textAreaRef.current, props.note.content, 40, 8);

    // random rotation
    const rotateColorRef = useCallback(node => {
        if (node) {
            const angle = Math.random() * (maxAngle - minAngle) + minAngle;
            node.style.transform = `rotate(${angle}deg)`;

            node.style.backgroundColor = props.noteColor;
        }
    }, [props.noteColor]);

    /*
    const noteBlockRef = useRef(null);
    
    useEffect(() => {
        if (noteBlockRef.current) {
            const angle = Math.random() * (maxAngle - minAngle) + minAngle;
            noteBlockRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }, [noteBlockRef.current]);

    // set color
    useEffect(() => {
        if (noteBlockRef.current) {
            noteBlockRef.current.style.backgroundColor = props.noteColor;
        }
    }, [noteBlockRef.current, props.noteColor]);
    */

    return (
        <div className="Noteblock" ref={rotateColorRef} key={props.note.id}>
            <textarea
                className="NoteblockNote"
                placeholder="Write notes here..."
                rows={1}
                value={props.note.content}
                onChange={(event) => props.onEdit(props.note.id, event.target.value)}
                ref={textAreaRef}
            />
            <CloseButton className="CloseButton" onClick={() => props.onClose(props.note.id)} />
        </div>
    );
}

export default Noteblock;