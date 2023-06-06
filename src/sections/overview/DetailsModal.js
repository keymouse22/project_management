import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from '../../components/AddCardModal/AddCardModal.module.css'

const DetailsModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "#fff",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem",

    }
    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')


    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Project Title</span>
                    <input type="text" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Detail</span>
                    <textArea
                        rows={10} className={styles.input} value={detail}
                        type="text" onChange={(e) => setDetail(e.target.value)} />
                </div>

                <button 
                disabled={title=== ""  && detail === ""}
                className={styles.saveButton}
                onClick={()=> {
                    handleCardAdd(title, detail)
                    setTitle("")
                    setDetail("")
                }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default DetailsModal