import 'react-toastify/dist/ReactToastify.css';
import { ToastContainerStyled } from './Notification.styled';

 const Notification = () => {
    return (
        <ToastContainerStyled
        theme="dark"
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    );
}

export default Notification;