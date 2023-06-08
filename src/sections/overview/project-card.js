import { Card, CardContent, Stack, Typography } from '@mui/material';
import styles from "../../styles/Logo.module.css"
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';


export const ProjectCard = ({projectName, deleteProjectById, updateProjectName,getProject}) => {
    return (
        <>
        
        <Card className={styles.pointer} style={{marginBottom: "15px"}}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                > 
                        <Stack spacing={1} onClick ={()=>getProject()}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            {projectName}
                        </Typography>
                      
                    </Stack>
                    <div style ={{display:"flex", gap:"6px"}}>
                    <AiTwotoneDelete onClick={()=>deleteProjectById()}/>
                    <AiFillEdit onClick={()=>updateProjectName()}/>
                    </div>

                </Stack>
            </CardContent>
        </Card>
        
        </>
    )
}