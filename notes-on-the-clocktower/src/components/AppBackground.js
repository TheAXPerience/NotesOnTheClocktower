import './AppBackground.css';
import NotesPage from './NotesPage';

const AppBackground = () => {
    return (
        <div className='Background'>
            <div className='LeftBackground HugCenterLeft'></div>
            <div className='CenterBackground'>
                <NotesPage />
            </div>
            <div className='RightBackground HugCenterRight'></div>
        </div>
    );
}

export default AppBackground;