import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Article = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '70vh',
            // backgroundColor: 'pink',
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Streamlining Cloud Data Migration</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>At CloudShift we simplify your cloud data transfer process. Select your current cloud data platform along with your destination site and we will take care of the rest.  All files are encrypted for your privacy.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-evenly',
                width: '100%',
                marginBottom: '1rem'
            }}>
                <Link href="https://github.com/oslabs-beta/CloudShift#what-cloudshift-does-and-doesnt" target="_blank" rel="noopener"><GitHubIcon /></Link>
                <Link href="https://medium.com/cloudshift/cloudshift-data-migration-simplified-f5c4848d7cb8" target="_blank" rel="noopener"></Link>
            </Box >

        </Box >
    )
}

export default Article