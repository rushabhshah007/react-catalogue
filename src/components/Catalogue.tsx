import { useDispatch } from 'react-redux';
import { showPopup } from '../actions';
import face from '../image.svg'
import './Catalogue.css';
import Popup from './Popup';

const Catalogue = () => {
    const dispatch = useDispatch();

    const onImageClick = (sectionName: string) => {
        dispatch(showPopup(sectionName));
    };
    return (
        <div>
            <img src={face} alt="Catalogue"></img>
            <div className='section section-forehead' onClick={() => onImageClick('Forehead')}></div>
            <div className='section section-nose' onClick={() => onImageClick('Nose')}></div>
            <div className='section section-lips' onClick={() => onImageClick('Lips')}></div>
            <div className='section section-cheeks' onClick={() => onImageClick('Cheeks')}></div>
            <div className='section section-jaw' onClick={() => onImageClick('Jaw')}></div>

            <Popup />
        </div>
    );
}

export default Catalogue;