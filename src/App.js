import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-parallax-tilt';
import GradientBackground from './components/GradientBackground';
import HoverableParagraph from './components/HoverableParagraph';
import CollegeInfo from './components/CollegeInfo';
import Project from './components/Project';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <GradientBackground />
        <Navbar expand="lg" sticky="top" className="navbar-custom" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="pixel art of me!"
                src="https://i.imgur.com/hqPvhua.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Peter Sullivan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#edskill">Education/Skills</Nav.Link>
                <Nav.Link href="#proj">Projects</Nav.Link>
                <Nav.Link href="#interests">Interests</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="body" id="home">
          <div className="hero">
            <div className="hero-text">
              <h1>Peter Sullivan</h1>
              <p>Hi! I'm Peter Sullivan, a CS Major at UCR. I dabble in all sorts of things, but recently I've been learning web design and compilers.</p>
            </div>
            <Tilt scale={1.05} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://i.imgur.com/eEQbHqR.png" alt="Peter Sullivan in a collared shirt"></img>
            </Tilt>
          </div>
          <Parallax className="parallax" scale={[0.8, 1]} >
            <div className="about" id="about">
              <div className="about-img">
                <Tilt scale={1.05} transitionSpeed={2500} tiltReverse={true}>
                  <a href="https://docs.google.com/document/d/1gWlGg3ICpkH-MqY7Aq1jQkVxS-wPx2cD/edit" target="_blank" rel="noopener noreferrer">📝</a>
                </Tilt>
                <p>My resume!</p>
              </div>
              <div className="about-text">
                <h1>About Me</h1>
                <HoverableParagraph />
              </div>
            </div>
          </Parallax>
          
          <div className="edskill" id="edskill">
            <h1>Education/Skills</h1>
            <Parallax className="parallax" translateX={[-20, 20, 'easeOutBack']} >
            <div className="college1">
              <CollegeInfo degree="B.S." major="Computer Science" college="University of California, Riverside" time="2022-2025" />
            </div>
            </Parallax>
            <Parallax className="parallax" translateX={[20, -20]} >
            <div className="college2">
              <CollegeInfo degree="A.S." major="Computer Science" college="Diablo Valley College" time="2020-2022" />
            </div>
            </Parallax>
            <Parallax className="parallax" translateX={[-20, 20]} >
            <div className="courses">
              <h2>Selected Coursework</h2>
              <p>Advanced C++, Object Oriented C++, Assembly Language, Algorithms/Data Structures, Compiler Design, Operating Systems, Web Dev</p>
            </div>
            </Parallax>
            <div className="langs">
              <h2>Programming Languages</h2>
              <p>C++, C, Python, Java, Javascript, HTML/CSS</p>
              <h2>Tools and Technologies</h2>
              <p>Git, VSCode, GDB, Valgrind, Unity, Node.js, React, Express, AJAX</p>
            </div>
          </div>
          
          <div className="proj" id="proj">
            <h1>Projects</h1>
            <Tilt className="parallax-effect-glare-scale" perspective={1000} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
              <div className="inner-element">
                <Project
                  name="Professional Website"
                  year="2024"
                  info={["This very website!", "Made with React, HTML, and CSS", "Designed and programmed by me"]}
                />
              </div>
            </Tilt>
            <Tilt className="parallax-effect-glare-scale" perspective={1000} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
              <div className="inner-element">
                <Project
                  name="TGM Tournament Overlay"
                  year="2024"
                  info={["Webapp to be used as a browser source in OBS", "Made with HTML, and CSS, Javascript, and Python(Flask)", "Updates player information in live time"]}
                />
              </div>
            </Tilt>
            <Tilt className="parallax-effect-glare-scale" perspective={1000} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
              <div className="inner-element">
                <Project
                  name="EcoDex"
                  year="2022"
                  info={["Pokemon Go-like game to encourage kids to care about native plants", "Created the user interface in Python using Kivy", "Made in a team of 3", "Interfaces with Plantnet API to identify plants in pictures"]}
                />
              </div>
            </Tilt>
          </div>

          <div className="interests" id="interests">
            <h1>Interests</h1>
            <p>
              I've participated in 5CHack in both 2023 (where our team won Best Beginner Hack!) and 2024, as well as Citrus Hack 2023.
              Besides programming, I'm passionate about video games, with a recent obsession being Tetris the Grandmaster. I also enjoy playing golf.
            </p>
          </div>
          <footer className="footer">
            <Container>
              <p>&copy; 2024 Peter Sullivan</p>
              <div id="contact">
                <a href="https://github.com/Peter-Sully" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/peter-sullivan-a85347265/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </Container>
          </footer>
          
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
