import "./CharacterIcon.css";

const CharacterIcon = (props) => {
    return (
        <div className="ClickableIcon" onClick={props.onClick}>
            <img className="CharacterIcon" src={props.imageSrc} alt="" />
        </div>
    );
}

export default CharacterIcon;