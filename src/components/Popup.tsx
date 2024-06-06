import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../actions";
import './Popup.css';

const Popup = () => {
    const dispatch = useDispatch();
    const isPopupOpen = useSelector((state: any) => state.isPopupOpen);
    const sectionName = useSelector((state: any) => state.sectionName);

    return (
        <div>
            <Dialog onClick={() => dispatch(hidePopup())} open={isPopupOpen}>
                <DialogTitle>{sectionName}</DialogTitle>
                <IconButton
                    edge="start"
                    sx={{
                        position: 'absolute',
                        right: 5,
                        top: 1,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    onClick={() => dispatch(hidePopup())}>
                    <CloseIcon />
                </IconButton>
            </Dialog>
        </div>
    )
}

export default Popup;