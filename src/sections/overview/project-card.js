import { Card, CardContent, Stack, Typography } from '@mui/material';
import styles from "../../styles/Logo.module.css"
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';


export const ProjectCard = ({projectName, deleteProjectById, updateProjectName}) => {
    return (
        <Card className={styles.pointer} style={{marginBottom: "15px"}}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            {projectName}
                        </Typography>
                      
                    </Stack>
                    <AiTwotoneDelete onClick={()=>deleteProjectById()}/>
                    <AiFillEdit onClick={()=>updateProjectName()}/>
                </Stack>
            </CardContent>
        </Card>
    )
}