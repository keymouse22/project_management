import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { useEffect, useState } from 'react';
import { ProjectCard } from 'src/sections/overview/project-card';
import { createProject, getUserProjects } from 'src/api/users';



const Page = () => {
  const [projects, setProjects] = useState([]);

  const projectData = async() => {
    if (window) { 
      const existingProjects = await getUserProjects();
      if (existingProjects) {
        setProjects(existingProjects);
      }
    }
  }
   
  useEffect(() => {
    if(window !== undefined) {projectData();}
  }, [window !== undefined])


  const projectCreate = async (e) => {
      const payload = { project_name: e, project_id: projects?.length + 1 };
      const response = await createProject(payload);
      setProjects(response.data);
  }

  return (
    <>
      <Head>
        <title>
         Project Management
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            alignItems={"center"}
          >
            <Grid 
            marginBottom={"15px"}
            >
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$24k"
                setProjectName={projectCreate}
              />
            </Grid>
            {projects && projects?.map((key,i) => {
              
                  return (
                    <ProjectCard 
                    projectName={key.project_name} 
                    projects={projects}
                    /> 
                  )
                  
                })}
            </Grid>
        </Container>
       
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
