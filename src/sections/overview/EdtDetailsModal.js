import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from '../../components/AddCardModal/AddCardModal.module.css'
import { postProjectTask } from 'src/api/users';
import { useRouter } from 'next/router';



const EditDetailsModal = ({ visible, onClose, handleCardAdd, board, dataPost }) => {
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
    const [description, setDescription] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [value, setValue] = React.useState();
    const [formData, setFormData] = React.useState({
            title: 'john',
            description: 'sss',
            hours: 2,
            comments: "ccc"
            // Add more fields as needed
          });
        
          const editHandler = (data) => {
            setFormData(data);
            console.log(data,"daa")
          };
    const router = useRouter();


    const postData = async () => {
        var data = {
            board_name: board,
            title: title,
            description: description,
            hours: Number(value),
            comments: comment,
            project_id: router.query.id
        };
        dataPost(data)
        console.log(data, "dataaa")
    };


    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
                <div className={styles.container}>
                    <div>
                        <span className={styles.label}>Project Title</span>
                        <input type="text" className={styles.input}  value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                     
                    </div>
                    <div>
                        <span className={styles.label}>Description</span>
                        <textArea
                            rows={10} className={styles.inputDescription} 
                            type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div>
                        <span className={styles.label}>Hours</span> <br /> <br />
                        <input type="number" value={formData.hours}   onChange={(e) => setFormData({ ...formData, hours: e.target.value })}   />
                    </div>
                    <div>
                        <span className={styles.label}>Comment</span>
                        <textArea
                            rows={10} className={styles.inputComment} 
                            type="text" value={formData.comments}   onChange={(e) => setFormData({ ...formData, comments: e.target.value })} />
                    </div>

                    <button onClick={() => editHandler()}>
                        Add
                    </button>


                </div>
        </Rodal>
    )
}

export default EditDetailsModal
