<template>
  <Base>
    <template #header>
      <div id="projects" class="text-h5 text-sm-h4">
        <span class="blue--text"> 03. </span>
        {{$t('proj.title')}}
      </div>
    </template>
    <template #content>
      <v-row>
        <v-col cols="12" md="7">
          <v-list two-lines avatar three-line color="transparent" :dark="isDark">

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
               </v-list-item-avatar>
               <v-list-item-content>
                 <v-list-item-title class="blue--text title text-wrap">{{$t('proj.proj.pear.title')}}</v-list-item-title>
                 <v-list-item-subtitle class="text-wrap">{{$t('proj.proj.pear.assoc')}}</v-list-item-subtitle>
                 <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{$t('proj.proj.pear.desc')}}</v-list-item-content>
                 <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>{{$t('proj.proj.used')}}</b>{{$t('proj.proj.pear.tools')}}</div></v-list-item-content>
               </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
               </v-list-item-avatar>
               <v-list-item-content>
                 <v-list-item-title class="blue--text title text-wrap">{{$t('proj.proj.gimms.title')}}</v-list-item-title>
                 <v-list-item-subtitle class="text-wrap">{{$t('proj.proj.gimms.assoc')}}</v-list-item-subtitle>
                 <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{$t('proj.proj.gimms.desc')}}</v-list-item-content>
                 <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>{{$t('proj.proj.used')}}</b>{{$t('proj.proj.gimms.tools')}}</div></v-list-item-content>
               </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
               </v-list-item-avatar>
               <v-list-item-content>
                 <v-list-item-title class="blue--text title text-wrap">{{$t('proj.proj.kittn.title')}}</v-list-item-title>
                 <v-list-item-subtitle class="text-wrap">{{$t('proj.proj.kittn.assoc')}}</v-list-item-subtitle>
                 <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{$t('proj.proj.kittn.desc')}}</v-list-item-content>
                 <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>{{$t('proj.proj.used')}}</b>{{$t('proj.proj.kittn.tools')}}</div></v-list-item-content>
               </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
               </v-list-item-avatar>
               <v-list-item-content>
                 <v-list-item-title class="blue--text title text-wrap">{{$t('proj.proj.abalone.title')}}</v-list-item-title>
                 <v-list-item-subtitle class="text-wrap">{{$t('proj.proj.abalone.assoc')}}</v-list-item-subtitle>
                 <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{$t('proj.proj.abalone.desc')}}</v-list-item-content>
                 <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>{{$t('proj.proj.used')}}</b>{{$t('proj.proj.abalone.tools')}}</div></v-list-item-content>
               </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
               </v-list-item-avatar>
               <v-list-item-content>
                 <v-list-item-title class="blue--text title text-wrap">{{$t('proj.proj.homie.title')}}</v-list-item-title>
                 <v-list-item-subtitle class="text-wrap">{{$t('proj.proj.homie.assoc')}}</v-list-item-subtitle>
                 <v-list-item-content class="caption text-wrap" style="padding-top:5px">{{$t('proj.proj.homie.desc')}}</v-list-item-content>
                 <v-list-item-content class="caption text-wrap" style="padding-top:0px"><div><b>{{$t('proj.proj.used')}}</b>{{$t('proj.proj.homie.tools')}}</div></v-list-item-content>
               </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-col>
        <v-col cols="12" md="5" class="px-sm-8 px-md-0 pt-16 mt-5" fill-height >
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
                :title="$t('proj.skil.front-end.js')">
                <span>JavaScript</span></a>
              </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/personal-website" 
                :title="$t('proj.skil.front-end.vue')">
                <span>Vue.js</span></a>
               </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/Kitten-me" 
                :title="$t('proj.skil.front-end.react')">
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
                :title="$t('proj.skil.server.thy')">
                <span>Thymeleaf</span></a>
               </div>
               <div class="skill">
                <a class="skill-link" 
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span>Primefaces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
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
                :title="$t('proj.skil.back-end.redux')">
                <span>Redux</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span>Jakarta Server Faces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                :title="$t('proj.skil.back-end.spring')">
                <span>Spring Boot</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://softuni.bg/Certificates/Details/57961/7559d8ef" 
                :title="$t('proj.skil.back-end.js')">
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
                :title="$t('proj.skil.gen.java')">
                <span>Java</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/SchoolAssistant" 
                :title="$t('proj.skil.gen.ch')">
                <span>C#</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/LearningHaskell" 
                :title="$t('proj.skil.gen.has')">
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
                :title="$t('proj.skil.db.mssql')">
                <span>MSSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span>PostgreSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/Kitten-me" 
                :title="$t('proj.skil.db.firebase')">
                <span>Firebase</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                :title="$t('proj.skil.db.jpa')">
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
                :title="$t('proj.skil.tools.git')">
                <span>Git</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="http://mandev.net/files/uni_Seminar_LaTeX.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.latex')">
                <span>LaTeX</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span>Test/Behaviour-driven Development</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span>Model-based Testing</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="http://mandev.net/files/uni_R.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.r')">
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
                :title="$t('proj.skil.tools.dig-mar')">
                <span>Digital Marketing</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="http://mandev.net/files/uni_Agile.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.agile')">
                <span>Agile</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="https://github.com/Radotornado/SuperMarioStepperMotor" 
                :title="$t('proj.skil.tools.mario')">
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
  props: { isDark: Boolean }
  };
</script>