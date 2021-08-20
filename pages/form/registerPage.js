import styles from './../../styles/register.module.css'
import Paper from '@material-ui/core/Paper';
import Register from './../../components/containers/register'


export default function registerPage(){

    return(
        <div className={styles.body}>
            <div className={styles.form}>
                <Register></Register>
            </div>
        </div>
    )
}