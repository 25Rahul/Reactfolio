import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Calc from "../../Assets/Projects/Calc.png";
import emotion from "../../Assets/Projects/emotion.png";
import Weather from "../../Assets/Projects/Weather.png";
import Spotify from "../../Assets/Projects/Spotify.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import Recipe from "../../Assets/Projects/Recipe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Music Web Player"
              description="It is a Music Web Player which contains many songs.In this three concepts of development are used HTML,CSS,Javascript. "
              ghLink="https://github.com/25Rahul/Spotify-Music-Web-Player"
              demoLink="https://subtle-macaron-afe5fd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              isBlog={false}
              title="Recipe Book App"
              description="The app allows the users to find recipes based on different criteria such as, course, cuisine, and type of food.In this everytime you refersh the page it will show different varieties of dishes."

              ghLink="https://github.com/25Rahul/Recipe-Book-App"
              demoLink="https://zippy-beignet-9c32d3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Web App"
              description="A simple HTML, CSS and JavaScript application to display weather of any location using  Javascript API."
              ghLink="https://github.com/25Rahul/Weather-App"
              demoLink="https://weather-app25-a806f1.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calc}
              isBlog={false}
              title="Calculator"
              description="A simple calculator designed using HTML, CSS & Javascript.It was my first web development project that i designed during my 2nd year of college."
              ghLink="https://github.com/25Rahul/Calculator"
              demoLink="https://63843ea589f641138be8f038--fantastic-sfogliatella-f761a1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="This is a Tic Tac Toe Game build based on my own insperation and design, it start with a welcome page then the game asks for players information so they can start the game, give it a try I'm sure you will like it.

              Built With:
              
              HTML, CSS, JavaScript"
              ghLink="https://github.com/25Rahul/Tic-Tac-Toe"
              demoLink="https://tictactoegamerg.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
