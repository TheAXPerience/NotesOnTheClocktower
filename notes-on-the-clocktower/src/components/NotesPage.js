import { Container } from 'reactstrap';
import StorytellerComponent from './StorytellerComponent';
// import VotingComponent from './VotingComponent';
import PlayerListComponent from './PlayerListComponent';
import "./NotesPage.css";


const NotesPage = () => {
    // TODO: add VotingComponent when rest of page is done

    return (
        <Container className="NotesPage">
            <StorytellerComponent />
            <PlayerListComponent />
        </Container>
    );
}

export default NotesPage;