import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import Cards from './Cards';
import Board from './Board';
import styles from '../../styles/Logo.module.css'
import { IoMdAdd } from 'react-icons/io'
import DetailsModal from './DetailsModal';
import { useRouter } from 'next/router';
import { deleteTask, getProjectTask, postProjectTask } from 'src/api/users';
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import EditDetailsModal from './EdtDetailsModal';
import { toast } from 'react-toastify';

const Details = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [editModalOpened, setEditModalOpened] = useState(false)
  const [projectName, setProjectName] = useState()
  const [card, setCard] = useState()
  const [board, setBoard] = useState()
  const [editBoard, setEditBoard] = useState()


  const router = useRouter();

  const handleCardAdd = (title, detail) => {
    setProjectName({ title, detail });
    setModalOpened(false)
  }

  useEffect(() => {
    if (router.query) {
      getTask(router.query.id);
    }
  }, [])

  const getTask = async (id) => {
    const response = await getProjectTask(id);
    setCard(response.data)
  }
  const openModal = (board) => {
    setModalOpened(true)
    setBoard(board)
  }

  const editModal = (editBoard) => {
    setEditModalOpened(true)
    setEditBoard(editBoard)
  }
  const addTask = async (task) => {
    const response = await postProjectTask(task)
    setCard(response.data)
  }

  const deleteTaskProject = async(id) => {
    const deleted = await deleteTask(id);
    setCard(deleted.data);
    if (deleted.status === 200) {
      toast.success("Deleted Successfully");
    }
  };


  return (

    <div className={styles.App}>
      <main className={styles.flexbox}>
        <Board id="board-1" className={styles.board}>
          <div>
            <IoMdAdd
              color="white"
              // className={styles.icon}
              size={25} title="Add card"
              onClick={() => {openModal("Tasks")
              setProjectName("")}}
            />
          </div>

          <h3 className={styles.title}>To Do</h3>
          {card?.map((item, i) => {
            return (
              item.board_name === 'Tasks' && <Cards id={`card-${i}`} className={styles.card} draggable="true">

                <Card style={{ border: "none" }} className={styles.cards}>
                  <div style={{ paddingLeft: "78%", zIndex:"99" }}>
                    <AiTwotoneDelete onClick={() => deleteTaskProject(item._id)}/>
                    <AiFillEdit onClick={() => editModal("Tasks")} />
                  </div>
                  <Card.Body style={{ marginTop: "-40px" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ marginBottom: "0 auto" }}>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>


              </Cards>)
          })}
        </Board>


        <Board id="board-2" className={styles.board}>
          <IoMdAdd
            color="white"
            // className={styles.icon}
            size={25} title="Add card"
            onClick={() => openModal("In-Progress")}
          />
          <h3 className={styles.title}>In-Progress</h3>
          {card?.map((item, i) => {
            return (
              item.board_name === 'In-Progress' && <Cards id={`card-${i}`} className={styles.card} draggable="true">
                <Card style={{ border: "none" }} className={styles.cards}>
                  <div style={{ paddingLeft: "78%", zIndex:"99" }}>
                    <AiTwotoneDelete />
                    <AiFillEdit onClick={() => editModal("Tasks")} />
                  </div>
                  <Card.Body style={{ marginTop: "-40px" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
            )
          })}

        </Board>

        <Board id="board-4" className={styles.board}>
          <IoMdAdd
            color="white"
            // className={styles.icon}
            size={25} title="Add card"
            onClick={() => openModal("QA")}
          />
          <h3 className={styles.title}>QA verified</h3>
          {card?.map((item, i) => {
            return (
              item.board_name === 'QA' && <Cards id={`card-${i}`} className={styles.card} draggable="true">
                <Card style={{ border: "none" }} className={styles.cards}>
                  <div style={{ paddingLeft: "78%", zIndex:"99" }}>
                    <AiTwotoneDelete />
                    <AiFillEdit onClick={() => editModal("Tasks")} />
                  </div>
                  <Card.Body style={{ marginTop: "-40px" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Cards>)
          })}
        </Board>


        <Board id="board-3" className={styles.board}>
          <IoMdAdd
            color="white"
            // className={styles.icon}
            size={25} title="Add card"
            onClick={() => openModal("Done")}
          />
          <h3 className={styles.title}>Done</h3>
          {card?.map((item, i) => {
            return (
              item.board_name === 'Done' && <Cards id={`card-${i}`} className={styles.card} draggable="true">
                <Card style={{ border: "none" }} className={styles.cards}>
                  <div style={{ paddingLeft: "78%", zIndex:"99" }}>
                    <AiTwotoneDelete />
                    <AiFillEdit onClick={() => editModal("Tasks")} />
                  </div>
                  <Card.Body style={{ marginTop: "-40px" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Cards>)
          })}

        </Board>

        <DetailsModal
          board={board}
          visible={modalOpened}
          handleCardAdd={handleCardAdd}
          onClose={() => setModalOpened(false)}
          projectName={projectName}
          dataPost={(task) => addTask(task)}
        />

        <EditDetailsModal
          editBoard={editBoard}
          visible={editModalOpened}
          onClose={() => setEditModalOpened(false)}
        />

      </main>
    </div>
  );
}
export default Details;