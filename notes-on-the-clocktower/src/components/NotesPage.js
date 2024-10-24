import { Container } from 'reactstrap';
import StorytellerComponent from './StorytellerComponent';
import VotingComponent from './VotingComponent';
import PlayerListComponent from './PlayerListComponent';
import "./NotesPage.css";


const NotesPage = () => {
    return (
        <Container className="NotesPage">
            <StorytellerComponent />
            <VotingComponent />
            <PlayerListComponent />
        </Container>
    );
}

export default NotesPage;