import styles from './login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Login with Google</div>
            <div className={styles.socialButton}>Login with Github</div>
            <div className={styles.socialButton}>Login with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage