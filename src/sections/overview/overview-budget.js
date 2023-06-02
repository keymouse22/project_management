import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { HiOutlinePlusCircle } from "react-icons/hi";
import styles from "../../styles/Logo.module.css"
import { useState, useEffect } from 'react';
import AddCardModal from 'src/components/AddCardModal/AddCardModal';


export const OverviewBudget = ({sx, setProjectName}) => {

  const [modalOpened, setModalOpened] = useState(false)

  const handleCardAdd = (title) => {
    setProjectName(title);
    setModalOpened(false)
  }

  return (
    <>
      <Card className={styles.pointer} sx={sx} style={{border:"1px dashed #6366F1", backgroundColor:"#f3f3f7"}} onClick={() => setModalOpened(true)}>
        <CardContent
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.secondary"
                variant="overline"
              >
                Add New Project
              </Typography>
              <div className={styles.icon}>
                <HiOutlinePlusCircle size={40} />
              </div>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <AddCardModal
        visible={modalOpened}
        handleCardAdd={handleCardAdd}
        onClose={() => setModalOpened(false)} />
    </>
  );
};

