import { Container } from 'reactstrap';
import './AppBackground.css';
import NotesPage from './NotesPage';

const AppBackground = () => {
    return (
        <Container className='Background'>
            <Container className='LeftBackground HugCenterLeft'></Container>
            <Container className='CenterBackground'>
                <NotesPage />
            </Container>
            <Container className='RightBackground HugCenterRight'></Container>
        </Container>
    );
}

export default AppBackground;