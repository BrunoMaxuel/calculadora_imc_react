import styles from './modal.module.css';

export const Modal = ({hidden, setHidden}: any) => {

    function handleCloseModal() {
        if(hidden === false) {
            setHidden(true);
        }else{
            setHidden(false);
        }
    }
    return (
        <div className={`modal-container ${styles.container} ${hidden && styles.hidden}`} >
            <button  onClick={handleCloseModal}>Fechar</button>
            <div className={styles.containerbody}>
                <h2>Preencha todos os campos!</h2>
            </div>
        </div>
    )
}
