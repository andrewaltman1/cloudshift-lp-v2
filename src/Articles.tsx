import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import awstocloudflare from './assets/awstocloudflare.png';
import awstoazure from './assets/awstoazure.png';
import screenshot from './assets/screenshot.webp';

const articles = [{ heading: 'Changing Providers', body: 'Currently, cloud-to-cloud migration is a major pain point of modern internet infrastructure even though solutions like rsync/rclone already exist. While they offer all the configuration options that experienced developers need, they are far from simple.', image: awstoazure, altText: 'cloud migration graphic' }, { heading: 'Streamling The Process', body: 'At CloudShift we simplify your cloud data transfer process. Select your current cloud data platform along with your destination site and we will take care of the rest.  All files are encrypted for your privacy.', image: awstocloudflare, altText: 'cloud migration graphic' }, { heading: 'One (UI) And Done', body: 'CloudShift doesn’t require the user to interact with a CLI, making it less intimidating for the average person and most importantly, more accessible. Clients only need prompted credentials, then they simply select which bucket to transfer. CloudShift takes care of the rest.', image: screenshot, altText: 'CloudShift screenshot' }]

const articleComponents = articles.map((article) => {
    return < Box key={article.heading} sx={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'pink',
    }
    }>
        <Typography variant="h4" sx={{ textAlign: 'center', padding: '0 2rem', fontFamily: 'Cabin, sans-serif' }}>{article.heading}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', padding: '0 1rem', fontFamily: 'Cabin, sans-serif' }}>
            {article.body}
        </Typography>
        <Box component="img" alt={article.altText} src={article.image} sx={{ width: '12rem', height: '8rem', borderRadius: '10px' }}></Box>

    </Box >
}
)

const Articles = () => {
    return (
        <>{articleComponents}</>
    )
}

export default Articles