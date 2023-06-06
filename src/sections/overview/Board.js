import { useEffect, useState } from 'react'
import AddList from './AddList'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import { dragDrop } from '../../actions/actions'
import styles from '../../styles/Logo.module.css'
import ProjectsModal from './ProjectsModal'

const Board = ({setProjectName,setProjectTitle, setProjectDescription}) => {
    const list = useSelector((state) => state.listReducer)
    const dispatch = useDispatch()
    const [addList, setAddList] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [modalOpened, setModalOpened] = useState(false)

    const handleCardAdd = (title,name,description) => {
      setProjectName(title);
      setProjectTitle(name);
      setProjectDescription(description);
      setModalOpened(false)
    }
  

    function toggleAddlist() {
        setAddList((prevValue) => !prevValue)
    }

    function handleDragging(dragging) {
        setIsDragging(dragging)
    }

    function handleUpdate(deleteBoardId, taskData, newBoardId, taskId) {
        dispatch(dragDrop(deleteBoardId, newBoardId, taskData, taskId))
    }
    
    useEffect(() => {
        setAddList(false)
    }, [list.list.length])
    return (

        <div className={styles.board}>
            {
                list.list.map((item) => {
                    return (
                        <List 
                            item={item}
                            isDragging={isDragging}
                            handleDragging={handleDragging}
                            handleUpdate={handleUpdate}
                        />
                    )
                })
            }
            <div style={{ padding: '1rem 0rem' }}>
                {
                    addList ? (
                        <div>
                            <AddList />
                        </div>
                    ) : (
                        <div style={{ marginLeft: 15 }}>
                            <button 
                            className={styles.newlist}
                            onClick={() => setModalOpened(true)}
                            //  onClick={toggleAddlist}
                              data-testId="add-list">+</button>
                        </div>
                    )
                }
            </div>
            <ProjectsModal
        visible={modalOpened}
        handleCardAdd={handleCardAdd}
        onClose={() => setModalOpened(false)} />
        </div>
        
    )
}

export default Board