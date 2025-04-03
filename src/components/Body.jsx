import * as React from 'react';
import { Stack, Box, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function Body({ projectsRef, experiencesRef, contactRef }) {

  return (
    <Stack className='body'>
        
        <Stack className=' banner-container' direction={'row'}alignItems={'center'}  justifyContent={'space-evenly'}>
        <Stack className='banner-text'>
            <Typography className='banner-title'>Who's Yago?</Typography>
                <Typography className='banner-desc'>
                    Computer Engineering student at Centro Universitário SENAI CIMATE
                    C since 2022.1. Experienced as an IT intern at Qualidados Engenharia
                    and as a full-stack developer. Worked at CIMATEC JR., SENAI CIMATEC's
                    junior enterprise, developing web and mobile projects, creating databases, 
                    and preparing reports. Proficient in C/C++, Python, Java/JavaScript, SQL, and 
                    advanced English. Proactive, communicative, and a team player, always eager to 
                    learn and tackle new challenges.
                </Typography>
            </Stack>

            <Box>
                <img src='./src/assets/Img_banner.png' className='banner-img'/>
            </Box>

        </Stack>

        <Stack className='experience-section' ref={experiencesRef}>
            <Typography className='section-title'>Experiences</Typography>
            <Stack className='experience-container'>
                <Stack className='experience-box'>
                    <FontAwesomeIcon icon={faReact} size="3x" color="hsl(192, 95%, 68%)" />
                    <Typography className='experience-title'>Full Stack</Typography>
                    <Typography className='experience-desc'>
                    Expertise in front-end (React, HTML/CSS) 
                    and back-end (Node.js, Python) technologies, 
                    integration with SQL/NoSQL databases, and RESTful APIs.
                    </Typography>
                </Stack>

                <Stack className='experience-box'> 
                    <FontAwesomeIcon icon={faDatabase} size="3x" color="hsl(0, 0%, 50%)" />
                    <Typography className='experience-title'>SQL</Typography>
                    <Typography className='experience-desc'>
                    Expertise in complex queries, 
                    query optimization, and data modeling. Experience in ETL, 
                    stored procedures, and integration. Certified by Alura.
                    </Typography>
                </Stack>

                <Stack className='experience-box'>
                    <FontAwesomeIcon icon={faPython} size="3x" color="hsl(207, 51%, 44%)" />
                    <Typography className='experience-title'>Python</Typography>
                    <Typography className='experience-desc'>
                    Expertise in data manipulation (Pandas/NumPy), 
                    visualization (Matplotlib/Seaborn), 
                    and statistical analysis (EDA) applied to real-world scenarios.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>

        <Stack className='projects-section' ref={projectsRef}>
            <Typography className='section-title'>Projects</Typography>
            <Stack className='projects-container'>

                <Card className='projects-card' sx={{ width: 345, height: 365, maxWidth: 345}}>
                    <CardMedia className='card-img' sx={{ height: 200 }} image='./src/assets/AgeCalculator.png'></CardMedia>
                    <CardContent className='card-desc'>
                        <Typography className='desc-title'>Age Calculator</Typography>
                        <Typography className='desc-text'>A project that calculates your age based on your birth date</Typography>
                    </CardContent>
                    <CardActions className='card-btn'>
                        <Button className='btn' size='small' href='https://github.com/YagoBS22/age-calculator'>GitHub</Button>
                        <Button className='btn' size='small' href='https://age-calculator-yago-bastos-dos-santos-projects.vercel.app/'>Vercel</Button>
                    </CardActions>
                </Card>

                <Card className='projects-card' sx={{ width: 345, height: 365, maxWidth: 345}}>
                    <CardMedia className='card-img' sx={{ height: 200 }} image='./src/assets/ConfTicket.png'></CardMedia>
                    <CardContent className='card-desc'>
                        <Typography className='desc-title'>Conference Ticket Generator</Typography>
                        <Typography className='desc-text'>A project that a randomly generates a conference ticket</Typography>
                    </CardContent>
                    <CardActions className='card-btn'>
                        <Button className='btn' size='small' href='https://github.com/YagoBS22/conf-ticket-generator'>GitHub</Button>
                        <Button className='btn' size='small' href='https://vercel.com/yago-bastos-dos-santos-projects/conf-ticket-generator'>Vercel</Button>
                    </CardActions>
                </Card>

                <Card className='projects-card' sx={{ width: 345, height: 365, maxWidth: 345}}>
                    <CardMedia className='card-img' sx={{ height: 200 }} image='./src/assets/Perpetual.png'></CardMedia>
                    <CardContent className='card-desc'>
                        <Typography className='desc-title'>Movie Database</Typography>
                        <Typography className='desc-text'>A site that provides information about movies</Typography>
                    </CardContent>
                    <CardActions className='card-btn'>
                        <Button className='btn' size='small'>GitHub</Button>
                        <Button className='btn' size='small'>Vercel</Button>
                    </CardActions>
                </Card>

            </Stack>
        </Stack>

        <Stack className='contact-section' ref={contactRef}>
            <Typography className='section-title'>Contact</Typography>
            <Stack className='contact-container'>
                <Typography className='contact-text'>Contact me through my socials below</Typography>
                <Stack className='contact-icons'>
                    <a href="https://www.linkedin.com/in/yago-santos-962169275/">
                        <FontAwesomeIcon className='icon' icon={faLinkedin} size="2x" color="hsl(240, 62.20%, 61.60%)" />
                    </a>
                    <a href="https://github.com/YagoBS22">
                        <FontAwesomeIcon className='icon' icon={faGithub} size="2x" color="hsl(0, 0.00%, 100.00%)" />
                    </a>
                    <a href="https://www.instagram.com/gyago17/">
                        <FontAwesomeIcon className='icon' icon={faInstagram} size="2x" color="hsl(320, 62.20%, 61.60%)" />
                    </a>
                </Stack>
            </Stack>
        </Stack>

    </Stack>
    )
}

export default Body
