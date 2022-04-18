<template>
  <Base>
    <template #header>
      <div id="projects" class="text-h5 text-sm-h4">
        <span class="blue--text"> 03. </span>
        Projects, Tools and Skills I have used
      </div>
    </template>
    <template #content>
      <v-row>
        <v-col cols="12" md="7">
          <v-list
            two-lines
            avatar
            three-line
            color="transparent"
            :dark="isDark"
          >
            <v-list-item v-for="(project, i) in projects" :key="i">
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="blue--text title text-wrap">{{
                  project.name
                }}</v-list-item-title>
                <v-list-item-subtitle class="text-wrap">{{
                  project.association
                }}</v-list-item-subtitle>
                <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{
                  project.description
                }}</v-list-item-content>
                <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>Used tools: </b>{{
                  project.tools
                }}</div></v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="5" class="px-sm-8 px-md-0 pt-10" fill-height >
          <v-row class="grey lighten-2 skill-group-container">
            <v-col
              cols="1"
              class="blue skill-header-container d-flex flex-column align-center justify-center"
            >
              <div class="skill-header">Front-End</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://softuni.bg/Certificates/Details/50411/66b7c884" 
                title="Certificate from SoftUni.">
                <span>JavaScript</span></a>
              </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/personal-website" 
                title="Project, that uses Vue.js">
                <span>Vue.js</span></a>
               </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/Kitten-me" 
                title="Project, that uses React.">
                <span>React</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-3 skill-group-container">
            <v-col cols="1" class="blue lighten-2 skill-header-container">
              <div class="skill-header">Server-rendered</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/GiiMMS" 
                title="Project, that uses Thymeleaf.">
                <span>Thymeleaf</span></a>
               </div>
               <div class="skill">
                <a class="skill-link" 
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>Primefaces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>Omnifaces</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-2 skill-group-container">
            <v-col cols="1" class="blue skill-header-container">
              <div class="skill-header">Back-end</div>
            </v-col>
            <v-col col="11" class="skill-container">
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/Kitten-me" 
                title="Project, that uses Redux as back-end.">
                <span>Redux</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>Jakarta Server Faces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                title="Project, that uses Spring Boot for back-end.">
                <span>Spring Boot</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://softuni.bg/Certificates/Details/57961/7559d8ef" 
                title="Certificate for JavaScript applications by SoftUni.">
                <span>JavaScript</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-3 skill-group-container">
            <v-col cols="1" class="blue lighten-2 skill-header-container">
              <div class="skill-header">General purpose</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/TOMBarcodeReader" 
                title="Voluteer work for TOM Bulgaria.">
                <span>Java</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/SchoolAssistant" 
                title="A rather large project I did for IT competitions in Bulgaria.">
                <span>C#</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/LearningHaskell" 
                title="Course from University.">
                <span>Haskell</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-2 skill-group-container">
            <v-col cols="1" class="blue skill-header-container">
              <div class="skill-header">Storage</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/MSSQL" 
                title="A course from SoftUni.">
                <span>MSSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>PostgreSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/Kitten-me" 
                title="Project, that uses Firebase for a database.">
                <span>Firebase</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                title="Project, that uses JPA as storage.">
                <span>Jakarta Persistence API</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-3 skill-group-container">
            <v-col cols="1" class="blue lighten-2  skill-header-container">
              <div class="skill-header">Tools</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/" 
                title="I'm using git for all of my projects.">
                <span>Git</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="todo" 
                title="I'm using LaTeX for math and scientific articles. Also I have a certificate from a voluntary course from my University on this subject.">
                <span>LaTeX</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>Test/Behaviour-driven Development</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                title="Private Repository, because of University policy. Please contact me for more info.">
                <span>Model-based Testing</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="TODO" 
                title="Voluntary course from University with certificate.">
                <span>R</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="grey lighten-2 skill-group-container">
            <v-col cols="1" class="blue skill-header-container">
              <div class="skill-header">Skills</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">VSCode</div>
              <div class="skill">IntelliJ</div>
              <div class="skill">Selenium</div>
              <div class="skill">IBM RSA</div>
              <div class="skill">Photoshop</div>
              <div class="skill">FTP</div>
              <div class="skill">Responsive Design</div>
              <div class="skill">
              <a class="skill-link"
                href="https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code" 
                title="Certificate from Google.">
                <span>Digital Marketing</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="TODO" 
                title="Certificate from University.">
                <span>Agile</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="https://github.com/Radotornado/SuperMarioStepperMotor" 
                title="Project, that we did in Robotics sommer camp. I have multiple projects with Arduino and Raspberry pi and a certificate from SoftUni.">
                <span>Arduino</span></a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </Base>
</template>
<style>
.skill-group-container {
  min-height: 100px;
  display: flex;
  flex-direction: row;
  color: rgba(0, 0, 0, 0.54);
}
.skill-header-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
}
.skill-header {
  position: relative;
  color: white;
  font-weight: bold;
  transform: rotate(270deg);
  display: block;
  width: 80px;
  text-align: center;
  font-size: 14px;
}
.skill-container {
  align-self: center;
}
.skill {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  background-color: transparent;
  font-size: 1em;
  color: black;
}

.skill-link span {
    color: #000;
    text-decoration: none;
}
</style>
<script>
const Base = () => import("@/sections/Base.vue");

export default {
  name: "Projects",
  components: {
    Base
  },
  props: { isDark: Boolean },
  data() {
    return {
      projects: [
        {
          name: "Pear Review",
          association: "Accosiated with University Passau",
          description: "Pear Review is the biggest project I have participated in. I had to develop a Java Web Application as a system for peer review of scientific articles alongside four more people. The project was part of the mandatory internship for my degree. It ended up with more than 22,000 rows of code and more than 250 pages of documentation, planning and validation.",
          tools: "Jakarta Server Faces, Primefaces, Omnifaces, PostgreSQL, JUnit, Selenium, LaTeX."
        },
        {
          name: "GiiMMS",
          association: "Accosiated with University Passau",
          description: "A full stack employee management system for the course Web and Data Engineering.",
          tools: "Spring Boot, Thymeleaf, JPA."
        },
        {
          name: "Kittn me",
          association: "Personal project",
          description: "A full stack cat-themed social media that I did just for fun.",
          tools: "React, Redux, Firebase, Busboy, Dicer, Streamsearch."
        },
        {
          name: "AI Abalone",
          association: "Accosiated with University Passau",
          description: "A Java only project for the advanced course in programming. It consists of the game Abalone with GUI, so that it is possible to play against the computer in different levels of difficulty. The project is done only with math and the min-max algorithm.",
          tools: "Java, Swing, JUnit."
        },
        {
          name: "Homie Home Automation",
          association: "Personal project",
          description: "A smart home system which one other person and I created for IT competitions.",
          tools: "Python, PHP, Arduino, Raspberry Pi, TI Launchpad."
        },
      ],
    };
  },
};
</script>