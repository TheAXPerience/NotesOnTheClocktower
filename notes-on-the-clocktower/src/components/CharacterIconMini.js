import "./CharacterIconMini.css";

const CharacterIconMini = (props) => {
    return (
        <div
            className="ClickableIconMini"
            style={{
                boxShadow: props.boxShadow ? props.boxShadow : "none",
                backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent"
            }}
        >
            <img className="CharacterIconMini" src={props.imageSrc} />
        </div>
    );
}

export default CharacterIconMini;