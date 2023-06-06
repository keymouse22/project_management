import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import Cards from './Cards';
import Board from './Board';
import styles from '../../styles/Logo.module.css'
import { IoMdAdd } from 'react-icons/io'
import DetailsModal from './DetailsModal';

const Details = () => {
    const [modalOpened, setModalOpened] = useState(false)
    const [projectName, setProjectName] = useState()

    const handleCardAdd = (title,detail) => {
        setProjectName({title,detail});
        setModalOpened(false)
      }


    return (

        <div className={styles.App}>
            <main className={styles.flexbox}>
                <Board id="board-1" className={styles.board}>
                    <IoMdAdd
                        color="white"
                        // className={styles.icon}
                        size={25} title="Add card"
                        onClick={() => setModalOpened(true)}
                    />
                    <h3 className={styles.title}>Work To Be Done</h3>
                    <Cards id="card-1" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 1</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                    <Cards id="card-1-1" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 2</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                </Board>


                <Board id="board-2" className={styles.board}>
                    <IoMdAdd
                        color="white"
                        // className={styles.icon}
                        size={25} title="Add card"
                        onClick={() => setModalOpened(true)}
                    />
                    <h3 className={styles.title}>Work in Progress</h3>
                    <Cards id="card-2" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 3</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                    <Cards id="card-2-1" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 4</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>

                </Board>


                <Board id="board-3" className={styles.board}>
                    <IoMdAdd
                        color="white"
                        // className={styles.icon}
                        size={25} title="Add card"
                        onClick={() => setModalOpened(true)}
                    />
                    <h3 className={styles.title}>Work to be Reviewed</h3>
                    <Cards id="card-3" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 5</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                    <Cards id="card-3-1" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 6</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>

                </Board>


                <Board id="board-3" className={styles.board}>
                    <IoMdAdd
                        color="white"
                        // className={styles.icon}
                        size={25} title="Add card"
                        onClick={() => setModalOpened(true)}
                    />
                    <h3 className={styles.title}>QA verified</h3>
                    <Cards id="card-3" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 5</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                    <Cards id="card-3-1" className={styles.card} draggable="true">
                        <Card className={styles.cards}>
                            <Card.Body>
                                <Card.Title>Article 6</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Cards>
                </Board>
                <DetailsModal
                    visible={modalOpened}
                    handleCardAdd={handleCardAdd}
                    onClose={() => setModalOpened(false)}
                    projectName = {projectName} />

            </main>
        </div>
    );
}
export default Details;