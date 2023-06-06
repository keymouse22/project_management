import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../../actions/actions'
import styles from '../../styles/Logo.module.css'
// import '../styles/list.css'

// interface ITaskProps {
//     taskItem: string
//     id: number
//     handleDragging: (dragging) => void
//     handleUpdate: (deleteBoardId: number, taskData: string, newBoardId: number, taskId: number) => void
//     taskId: number
// }

function Task({taskItem, id, handleDragging, handleUpdate, taskId}) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [editTaskName, setEditTaskName] = useState('')

    function handleEdit(taskItem) {
        setEdit((edit) => !edit)
        setEditTaskName(taskItem)
    }

    function handleEditTaskName(event) {
        setEditTaskName(event.target.value)
    }

    function handleSave() {
        setEdit((edit) => !edit)
        // dispatch(editTask(taskItem, editTaskName, id))
    }
    function handleDelete(taskItem) {
        dispatch(deleteTask(taskItem, id))
    }
    function handleDragEnd() {
        handleDragging(false)
    }
    function handleDragStart(event) {
        event.dataTransfer.setData('card', `${taskItem}-${id}`)
        handleDragging(true)
    }
    function handleDragOver(event) {
        event.preventDefault()
    }
    function handleDrop(event) {
        event.preventDefault()
        const data = event.dataTransfer.getData('card').split('-')
        handleUpdate(Number(data[1]), data[0], id, taskId)
        handleDragging(false)
    }
    return (
        <>
        <div 
            className={styles.listitem} 
            draggable={true} 
            onDragEnd={handleDragEnd} 
            onDragStart={(event) => handleDragStart(event)} 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {
                edit ?
                    (
                        <>
                            <input data-testid={`input-${taskItem}`} style={{ padding: '8px', border: 'none', borderRadius: '5px' }} type={'text'} value={editTaskName} onChange={(event) => handleEditTaskName(event)} />
                            <div className={styles.taskaction}>
                                <button data-testid={`save-${taskItem}`} onClick={handleSave}>Save</button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <span className={styles.taskitem}>{taskItem}</span>
                            <div className={styles.taskaction}>
                                <button className={styles.taskitem} data-testid={`edit-${taskItem}`} onClick={() => handleEdit(taskItem)}>Edit</button>
                                <button className={styles.taskitem} data-testid={`${taskItem}`} onClick={() => handleDelete(taskItem)}>Delete</button>
                            </div>
                        </>
                    )
            }
        </div>
        </>
    )
}

export default Task