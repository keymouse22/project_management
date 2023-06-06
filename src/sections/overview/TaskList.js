import Task from './Task'
// interface ITaskProps {
//     task: string[]
//     id: number
//     isDragging: boolean
//     handleDragging: (dragging: boolean) => 
//     handleUpdate: (deleteBoardId, taskData, newBoardId, taskId) => 
// }

function TaskList({ task, id, isDragging, handleDragging, handleUpdate }) {
    return (
        <div 
            className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
        >
            {task.map((taskItem, index) => {
                return (
                    <Task taskItem={taskItem} handleDragging={handleDragging} id={id} taskId={index} handleUpdate={handleUpdate} />
                )
            })}
        </div>
    )
}

export default TaskList