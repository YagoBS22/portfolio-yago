import * as React from 'react';
import { Stack, AppBar, Box, Toolbar, Typography, Button, TextField, Card } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

function Body() {

  return (
    <Stack className='body'>
        <Stack 
        className=' banner-container' 
        direction={'row'}
        alignItems={'center'}   
        justifyContent={'space-evenly'}
        >
        <Stack className='banner-text'>
            <Typography 
                className='banner-title'
                >
                    Who's Yago?
                </Typography>
                <Typography 
                className='banner-desc'
                >
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

        <Stack 
        className='experience-section'
        >
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

        <Stack 
        className='projects-section'
        >
            <Typography className='section-title'>Projects</Typography>
            <Stack className='projects-container'>
                <Stack className='projects-box'>
                    <img src='./src/assets/ConfTicket.png'/>
                    <Stack className='projects-desc'>
                        <Typography className='projects-title'> Conf Ticket </Typography>
                        <Button color='secondary' href='https://conf-ticket-generator-ochre.vercel.app'>Link para Site</Button>
                    </Stack>
                </Stack>

                <Stack className='projects-box'>
                    <img src='./src/assets/AgeCalculator.png' height={'350px'}/>
                    <Stack className='projects-desc'>
                        <Typography className='projects-title'> Age Calculator </Typography>
                        <Button color='secondary' href='https://age-calculator-yago-bastos-dos-santos-projects.vercel.app'>Link para Site</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    )
}

export default Body
