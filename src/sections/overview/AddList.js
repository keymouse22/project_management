import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewList } from '../../actions/actions'
import styles from '../../styles/Logo.module.css'

function AddList() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [taskName, setTaskName] = useState('')
    const [taskList, setTasks] = useState([])

    function handleTitle(event) {
        setTitle(event.target.value)
    }
    function handleTaskName(event) {
        setTaskName(event?.target.value)
    }
    function handleTask() {
        setTasks((prev) => [...prev, taskName])
        setTaskName('')
    }
    function saveList() {
        const dataObj = {
            title: title,
            taskList: taskList,
            id: Date.now()
        }
        dispatch(addNewList(dataObj))
        setTitle('')
        setTasks([])
    }
    return (
        <div className={styles.addlist}>
            <input style={{ padding: '5px' }} value={title} type={'text'} onChange={(event) => handleTitle(event)} placeholder={'Add title..'} data-testid="new-board-title" />
            {
                taskList.map((task) => {
                    return (<div style={{ margin: '10px 5px' }}>{task}</div>)
                })
            }
            <div className={styles.taskname}>
                <div><input placeholder='Add task..' style={{ padding: '5px' }} value={taskName} type={'text'} onChange={(event) => handleTaskName(event)} data-testid="new-task-name" /></div>
                <div className={styles.savetask}><button onClick={handleTask} disabled={taskName.length === 0} data-testid="new-task-add">Save Task</button></div>
            </div>
            <button disabled={taskList.length === 0 || title.length === 0} onClick={saveList} data-testid="new-board-add">Save List</button>
        </div>
    )
}

export default AddList