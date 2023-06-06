import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Cards from './Cards';
import Board from './Board';
import styles from '../../styles/Logo.module.css'


const Details = () => {
    return (
      <Board />
      // <div className={styles.App}>
        
      //   <main className={styles.flexbox}> 
      //     <Board id="board-1" className={styles.board}>
      //       <h3>Work To Be Done</h3>
      //       <Cards id="card-1" className={styles.card} draggable="true">
      //         <Card>
      //           <Card.Body>
      //             <Card.Title>Article 1</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //       <Cards id="card-1-1" className={styles.card} draggable="true">
      //       <Card>
      //           <Card.Body>
      //           <Card.Title>Article 2</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //     </Board>
      //     <Board id="board-2" className={styles.board}>
      //       <h3>Work in Progress</h3>
      //       <Cards id="card-2" className={styles.card} draggable="true">
      //       <Card>
      //           <Card.Body>
      //           <Card.Title>Article 3</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //       <Cards id="card-2-1" className={styles.card} draggable="true">
      //       <Card>
      //           <Card.Body>
      //           <Card.Title>Article 4</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //     </Board>
      //     <Board id="board-3" className={styles.board}>
      //       <h3>Work to be Reviewed</h3>
      //       <Cards id="card-3" className={styles.card} draggable="true">
      //       <Card>
      //           <Card.Body>
      //           <Card.Title>Article 5</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //       <Cards id="card-3-1" className={styles.card} draggable="true">
      //       <Card>
      //           <Card.Body>
      //           <Card.Title>Article 6</Card.Title>
      //             <Card.Text>
      //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Cards>
      //     </Board>
      //   </main>
      // </div>
    );
  }


export default Details;



