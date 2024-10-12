import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'social' ?
            <ToggleButton active value="social" onClick={() => setToggle('social')}>SOCIAL</ToggleButton>
            :
            <ToggleButton value="social" onClick={() => setToggle('social')}>SOCIAL</ToggleButton>
          }
          <Divider />
          {toggle === 'health' ?
            <ToggleButton active value="health" onClick={() => setToggle('health')}>Health</ToggleButton>
            :
            <ToggleButton value="health" onClick={() => setToggle('health')}>Health</ToggleButton>
          }
          <Divider />
          {toggle === 'education' ?
            <ToggleButton active value="education" onClick={() => setToggle('education')}>Education</ToggleButton>
            :
            <ToggleButton value="education" onClick={() => setToggle('education')}>Education</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects