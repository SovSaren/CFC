import styles from './../styles/login.module.css'
import Paper from '@material-ui/core/Paper'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Login from '../components/containers/login'

export default function Logins(){

    return(
        <div className={styles.body}>
            <div className={styles.form}>
                <Login></Login>
            </div>

        </div>
    )
}