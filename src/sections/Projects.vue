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
        <v-col cols="12" md="5" class="px-sm-8 px-md-0 pt-16 mt-5 pl-10 pr-10" fill-height>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-2' : 'grey lighten-2'">
            <v-col
              cols="1"
              class="skill-header-container d-flex flex-column align-center justify-center"
              :class="isDark ? 'blue darken-3' : 'blue lighten-1'"
            >
              <div class="skill-header">Front-End</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://softuni.bg/Certificates/Details/50411/66b7c884" 
                :title="$t('proj.skil.front-end.js')">
                <span :class="isDark ? 'white--text' : 'black--text'">JavaScript</span></a>
              </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/personal-website" 
                :title="$t('proj.skil.front-end.vue')">
                <span :class="isDark ? 'white--text' : 'black--text'">Vue.js</span></a>
               </div>
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/Kitten-me" 
                :title="$t('proj.skil.front-end.react')">
                <span :class="isDark ? 'white--text' : 'black--text'">React</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-1' : 'grey lighten-3'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-1' : 'blue lighten-2'">
              <div class="skill-header">Server-rendered</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link" 
                target = "_blank"
                href="https://github.com/Radotornado/GiiMMS" 
                :title="$t('proj.skil.server.thy')">
                <span :class="isDark ? 'white--text' : 'black--text'">Thymeleaf</span></a>
               </div>
               <div class="skill">
                <a class="skill-link" 
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">Primefaces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">Omnifaces</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-2' : 'grey lighten-2'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-3' : 'blue lighten-1'">
              <div class="skill-header">Back-end</div>
            </v-col>
            <v-col col="11" class="skill-container">
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/Kitten-me" 
                :title="$t('proj.skil.back-end.redux')">
                <span :class="isDark ? 'white--text' : 'black--text'">Redux</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">Jakarta Server Faces</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                :title="$t('proj.skil.back-end.spring')">
                <span :class="isDark ? 'white--text' : 'black--text'">Spring Boot</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://softuni.bg/Certificates/Details/57961/7559d8ef" 
                :title="$t('proj.skil.back-end.js')">
                <span :class="isDark ? 'white--text' : 'black--text'">JavaScript</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-1' : 'grey lighten-3'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-1' : 'blue lighten-2'">
              <div class="skill-header">General purpose</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/TOMBarcodeReader" 
                :title="$t('proj.skil.gen.java')">
                <span :class="isDark ? 'white--text' : 'black--text'">Java</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/SchoolAssistant" 
                :title="$t('proj.skil.gen.ch')">
                <span :class="isDark ? 'white--text' : 'black--text'">C#</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/LearningHaskell" 
                :title="$t('proj.skil.gen.has')">
                <span :class="isDark ? 'white--text' : 'black--text'">Haskell</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-2' : 'grey lighten-2'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-3' : 'blue lighten-1'">
              <div class="skill-header">Storage</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/MSSQL" 
                :title="$t('proj.skil.db.mssql')">
                <span :class="isDark ? 'white--text' : 'black--text'">MSSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">PostgreSQL</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/Kitten-me" 
                :title="$t('proj.skil.db.firebase')">
                <span :class="isDark ? 'white--text' : 'black--text'">Firebase</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/GiiMMS" 
                :title="$t('proj.skil.db.jpa')">
                <span :class="isDark ? 'white--text' : 'black--text'">Jakarta Persistence API</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-1' : 'grey lighten-3'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-1' : 'blue lighten-2'">
              <div class="skill-header">Tools</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">
                <a class="skill-link"
                href="https://github.com/Radotornado/" 
                :title="$t('proj.skil.tools.git')">
                <span :class="isDark ? 'white--text' : 'black--text'">git</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="http://mandev.net/files/uni_Seminar_LaTeX.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.latex')">
                <span :class="isDark ? 'white--text' : 'black--text'">LaTeX</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">Test/Behaviour-driven Development</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="#projects" 
                :title="$t('proj.skil.private')">
                <span :class="isDark ? 'white--text' : 'black--text'">Model-based Testing</span></a>
               </div>
               <div class="skill">
                <a class="skill-link"
                href="http://mandev.net/files/uni_R.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.r')">
                <span :class="isDark ? 'white--text' : 'black--text'">R</span></a>
               </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container" :class="isDark ? 'grey darken-2' : 'grey lighten-2'">
            <v-col cols="1" class="skill-header-container" :class="isDark ? 'blue darken-3' : 'blue lighten-1'">
              <div class="skill-header">Skills</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">VSCode</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">IntelliJ</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">Selenium</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">IBM RSA</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">Photoshop</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">FTP</div>
              <div class="skill" :class="isDark ? 'white--text' : 'black--text'">Responsive Design</div>
              <div class="skill">
              <a class="skill-link"
                href="https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code" 
                :title="$t('proj.skil.tools.dig-mar')">
                <span :class="isDark ? 'white--text' : 'black--text'">Digital Marketing</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="http://mandev.net/files/uni_Agile.pdf"
                target="_blank"
                :title="$t('proj.skil.tools.agile')">
                <span :class="isDark ? 'white--text' : 'black--text'">Agile</span></a>
              </div>
              <div class="skill">
              <a class="skill-link"
                href="https://github.com/Radotornado/SuperMarioStepperMotor" 
                :title="$t('proj.skil.tools.mario')">
                <span :class="isDark ? 'white--text' : 'black--text'">Arduino</span></a>
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