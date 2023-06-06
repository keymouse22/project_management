import { ADD_NEW_LIST, ADD_NEW_TASK, CHANGE_TITLE, DELETE_LIST, DELETE_TASK, DRAG_DROP, EDIT_TASK_NAME } from "../actions/types"

export const addNewList = (data: {title, taskList, id}) => {
    return {
        type: ADD_NEW_LIST,
        payload: data
    }
}

export const addNewTask = (id, task) => {
    return {
        type: ADD_NEW_TASK,
        payload: {id, task}
    }
}

export const editTask = (prevTask, newTask, id) => {
    return {
        type: EDIT_TASK_NAME,
        payload: {prevTask, newTask, id}
    }
}

export const deleteTask = (taskItem, id) => {
    return {
        type: DELETE_TASK,
        payload: {taskItem, id}
    }
}

export const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}

export const changeTitle = (id, newTitle) => {
    return {
        type: CHANGE_TITLE,
        payload: {id, newTitle}
    }
}

export const dragDrop = (removeBoardId, addBoardId, taskItem, taskId) => {
    return {
        type: DRAG_DROP,
        payload: {removeBoardId, addBoardId, taskItem, taskId}
    }
}
