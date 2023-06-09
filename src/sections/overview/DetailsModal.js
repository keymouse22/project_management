import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from '../../components/AddCardModal/AddCardModal.module.css'
import { postProjectTask } from 'src/api/users';
import { useRouter } from 'next/router';



const DetailsModal = ({ visible, onClose, handleCardAdd, board, dataPost }) => {
    const customStyles = {
        width: "100%",
        height: "fit-content",
        animationDuration: "300ms",
        background: "rgb(255, 255, 255)",
        padding: "20px",
        top: "0rem",
        margin: "0 auto",
        maxWidth: "53rem",
        overflow: "auto",
        height: "800px",
        marginTop: "7%"
    }
    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')
    const [comment, setComment] = React.useState('')
    const router = useRouter();


    const postData = async () => {
        var data = {
            board_name: board,
            title: title,
            description: detail,
            hours: Number(value),
            comments: comment,
            project_id: router.query.id
        };
        dataPost(data)
    };

    const [value, setValue] = React.useState();

    const onChange = (event) => {
        setValue(event.target.value);

    };

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Project Title</span>
                    <input type="text" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Description</span>
                    <textArea
                        rows={10} className={styles.inputDescription} value={detail}
                        type="text" onChange={(e) => setDetail(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Hours</span> <br /> <br />
                    <input type="number" onChange={onChange} value={value} />
                </div>
                <div>
                    <span className={styles.label}>Comment</span>
                    <textArea
                        rows={10} className={styles.inputComment} value={comment}
                        type="text" onChange={(e) => setComment(e.target.value)} />
                </div>

                <button
                    disabled={title === "" && detail === "" && value === "" && comment === ""}
                    className={styles.saveButton}
                    onClick={() => {
                        postData()
                        handleCardAdd(title, detail)
                        setTitle("")
                        setDetail("")
                        setValue("")
                        setComment("")
                    }}
                >
                    Add
                </button>


            </div>
        </Rodal>
    )
}

export default DetailsModal