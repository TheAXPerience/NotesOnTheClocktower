import "./CharacterIcon.css";

const CharacterIcon = (props) => {
    return (
        <div className="ClickableIcon">
            <img className="CharacterIcon" src={props.imageSrc} />
        </div>
    );
}

export default CharacterIcon;