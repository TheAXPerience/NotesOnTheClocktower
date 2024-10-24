import { Container } from "reactstrap";
import "./CharacterIcon.css";

const CharacterIcon = (props) => {
    return (
        <Container className="ClickableIcon">
            <img className="CharacterIcon" src={props.imageSrc} />
        </Container>
    );
}

export default CharacterIcon;