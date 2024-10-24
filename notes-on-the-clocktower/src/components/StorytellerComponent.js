import { Container, ListGroup, ListGroupItem, Label, Row, Button, CloseButton } from "reactstrap";
import CharacterIcon from "./CharacterIcon";
import "./StorytellerComponent.css";

const StorytellerComponent = () => {
    return (
        <Container className="Storyteller">
            <Container className="StorytellerPlaque">
                <Row className="StorytellerBigTitle">Blood on the Clocktower</Row>
                <Row className="StorytellerScriptTitle" contentEditable>Trouble Brewing</Row>
            </Container>
            <Container className="ListOfStorytellers">
                <Container className="AuthorImage">
                    <CharacterIcon imageSrc="https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png" />
                </Container>
                <ListGroup className="AuthorList">
                    <ListGroupItem className="Author">
                        <Label className="Name" contentEditable>Juvalent</Label>
                        <Label className="Pronouns" contentEditable>he/him</Label>
                        <CloseButton className="Close">X</CloseButton>
                    </ListGroupItem>
                    <ListGroupItem className="AddAuthor">
                        <Button>+ Add Storyteller</Button>
                    </ListGroupItem>
                </ListGroup>
            </Container>
        </Container>
    );
}

export default StorytellerComponent;