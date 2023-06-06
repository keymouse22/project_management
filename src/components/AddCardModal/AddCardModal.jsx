import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from './AddCardModal.module.css'


const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "#fff",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem",

    }
    const [title, setTitle] = React.useState('')

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Enter Project Name</span>
                    <input type="text" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <button 
                disabled={!title?.trim?.()?.length}
                className={styles.saveButton}
                onClick={()=> {
                    handleCardAdd(title)
                    setTitle("")
                }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModal