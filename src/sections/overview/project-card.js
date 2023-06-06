import { Card, CardContent, Stack, Typography } from '@mui/material';
import { HiOutlinePlusCircle } from "react-icons/hi";
import styles from "../../styles/Logo.module.css"
import { useState } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';


export const ProjectCard = ({ projectName }) => {

    const notify = () => toast("Wow so easy!");



    return (
        <>
            <Link href="/details">
                <Card className={styles.pointer} style={{ marginBottom: "15px" }}>
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
                            <AiTwotoneDelete
                                onClick={() => { notify() }}
                            />

                        </Stack>
                    </CardContent>
                </Card>
            </Link>
            <ToastContainer />
        </>
    )
}