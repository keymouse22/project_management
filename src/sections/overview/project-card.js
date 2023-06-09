import { Card, CardContent, Stack, Typography } from '@mui/material';
import styles from "../../styles/Logo.module.css"
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';


export const ProjectCard = ({ projectName, deleteProjectById, updateProjectName, getProject }) => {
    return (
        <>

            <Card className={styles.pointer} style={{ marginBottom: "15px", boxShadow: "7px 21px 44px rgba(0, 0, 0, 0.04), 0px 1px 11px 2.5px rgba(0, 0, 0, 0.03)" }}>
                <CardContent>
                    <Stack
                        alignItems="flex-start"
                        direction="row"
                        justifyContent="space-between"
                        spacing={3}
                    >
                        <Stack spacing={1} onClick={() => getProject()}>
                            <Typography
                                color="text.secondary"
                                variant="overline"
                                fontSize="large"
                                text-decoration="underline"
                            >
                                {projectName}
                            </Typography>

                        </Stack>
                    </Stack>
                </CardContent>
                <div style={{ display: "flex", marginLeft: "25px" }}>
                    <AiTwotoneDelete onClick={() => deleteProjectById()} />
                    <AiFillEdit onClick={() => updateProjectName()} />
                </div>
            </Card>

        </>
    )
}