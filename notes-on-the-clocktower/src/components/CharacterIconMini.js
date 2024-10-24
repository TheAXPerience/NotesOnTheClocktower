import "./CharacterIconMini.css";

const CharacterIconMini = (props) => {
    return (
        <div className="ClickableIconMini">
            <img className="CharacterIconMini" src={props.imageSrc} />
        </div>
    );
}

export default CharacterIconMini;