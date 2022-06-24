import toast from 'react-hot-toast';
import { MdClose, MdNotificationsNone, MdWarning, MdDone } from 'react-icons/md';
import { Colors } from './colors';

class Toast {
    static error(message: string, icon = `${MdClose}`) {
        toast(message, {
            icon,
            style: {
                backgroundColor: Colors.error,
                color: Colors.white
            }
        });
    }

    static warning(message: string, icon = `${MdWarning}`) {
        toast(message, {
            icon,
            style: {
                backgroundColor: Colors.orangeyellow,
                color: Colors.black
            }
        });
    }

    static notification(message: string, icon = `${MdNotificationsNone}`) {
        toast(message, {
            icon,
            style: {
                backgroundColor: Colors.dodgerblue,
                color: Colors.white
            }
        });
    }

    static success(message: string, icon = `${MdDone}`) {
        toast(message, {
            icon,
            style: {
                backgroundColor: Colors.limegreen,
                color: Colors.white
            }
        });
    }
}

export default Toast;