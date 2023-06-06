import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Details from 'src/sections/overview/details-page';

const Page = () => {
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
              <Details/>
            </Grid>
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