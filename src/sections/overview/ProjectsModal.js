import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from '../../components/AddCardModal/AddCardModal.module.css'

const ProjectsModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "#fff",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem",

    }
    const [title, setTitle] = React.useState('')
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Enter Project Name</span>
                    <input type="text" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Title</span>
                    <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Description</span>
                    <textArea
                        rows={10} className={styles.input} value={description}
                        type="text" onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button 
                disabled={!title?.trim?.()?.length}
                className={styles.saveButton}
                onClick={()=> {
                    handleCardAdd(title,name,description)
                    setTitle("")
                }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default ProjectsModal