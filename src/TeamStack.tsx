import { Avatar, Card, CardActionArea, CardContent, Link, Stack, Typography } from '@mui/material';

const team = [{ name: 'Andrew Altman', link: 'https://www.linkedin.com/in/andrewaltman1/', image: 'https://media.licdn.com/dms/image/D4E03AQEb4TN7c7FzmA/profile-displayphoto-shrink_400_400/0/1676902578686?e=1696464000&v=beta&t=JQkIGJznM0bZSTqaRyoxAIQ0kp6FobB8Fpp22aOxpqc' }, { name: 'Ansel Santos', link: 'https://www.linkedin.com/in/ansel-santos/', image: 'https://media.licdn.com/dms/image/D4D03AQEbOFt9TjBmFw/profile-displayphoto-shrink_400_400/0/1683128378246?e=1696464000&v=beta&t=GAnEH1CGj2JsNo-ms5Ud_lfeg7PrkKn2OP4YqbcEgHs' }, { name: 'Jamey Huffnagle', link: 'https://www.linkedin.com/in/jamey-huffnagle/', image: 'https://media.licdn.com/dms/image/D4E03AQHfa98kJzZvtw/profile-displayphoto-shrink_400_400/0/1681954271804?e=1696464000&v=beta&t=yghQlUFzy3cxEIS_hUPT-I0F1sBHED9X8oFSyhefDww' }, { name: 'Phillip Luc', link: 'https://www.linkedin.com/in/phil-luc-307978271/', image: 'https://media.licdn.com/dms/image/D4E03AQHEUHX3RXoNcw/profile-displayphoto-shrink_400_400/0/1683392480854?e=1696464000&v=beta&t=5EdxJwyooqgFu508PUDMIGPN3sLptcQvw18ca8iSEf4' }, { name: 'Zachary De Jesus', link: 'https://www.linkedin.com/in/zachary-dejesus/', image: 'https://media.licdn.com/dms/image/D4E03AQG2bfbaNirwCg/profile-displayphoto-shrink_400_400/0/1685717271306?e=1696464000&v=beta&t=5tWGd8AisHENktygzUJAyNqw7PeXz-aMUtEOiWEUH1E' }
]

const cards = team.map((member) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 375 }}>
            <Link href={member.link} target='_blank' rel="noopener" underline="none" sx={{ color: 'inherit' }}>
                <CardActionArea >
                    <CardContent sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-around', alignItems: 'center', gap: '1rem' }}>
                        <Typography variant="h6">
                            {member.name}
                        </Typography>
                        <Avatar alt={member.name} src={member.image} sx={{ width: '40%', height: '40%' }} />
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}
)

export default function TeamStack() {
    return (
        <Stack direction="column" spacing={2} >
            <Typography variant="h4" sx={{ textAlign: 'center' }}>The Team</Typography>
            {cards}
        </Stack>
    )
}   