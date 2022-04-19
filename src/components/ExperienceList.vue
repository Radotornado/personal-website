<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12 pa-0 ma-0">
        <div>
          <v-timeline :dense="$vuetify.breakpoint.mobile" class="pa-0 ma-0">
            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/uni_passau.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold orange--text`">{{$t('exp.uni.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="orange">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item href="https://www.uni-passau.de/en/bsc-computer-science/" target="_blank" style="padding:0px">
                       {{$t('exp.uni.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div>{{$t('exp.uni.position')}}</div>
                     <div class="hidden-sm-and-up">{{$t('exp.uni.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.uni.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.uni.desc.s2')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.uni.desc.s3')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.uni.desc.s4')}}</v-card-text>
                    <v-card-actions>
                      <v-icon v-for="(skill, i2) in experiences[0].skills" :key="i2" class="mx-1" size="20" :title="skill.name" >{{ skill.icon }}</v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>
            
            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/freelance.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold purple--text`">{{$t('exp.free.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="purple">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item target="_blank" style="padding:0px">
                       {{$t('exp.free.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div class="hidden-sm-and-up">{{$t('exp.free.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.free.desc.s1')}}</v-card-text>
                    <v-card-actions>
                      <v-icon v-for="(skill, i2) in experiences[1].skills" :key="i2" class="mx-1" size="20" :title="skill.name" >{{ skill.icon }}</v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/softuni.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold blue--text`">{{$t('exp.softuni.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="blue">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item target="_blank" style="padding:0px">
                       {{$t('exp.softuni.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div class="hidden-sm-and-up">{{$t('exp.softuni.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.softuni.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.softuni.desc.s2')}}</v-card-text>
                    <v-card-actions>
                      <v-icon v-for="(skill, i2) in experiences[2].skills" :key="i2" class="mx-1" size="20" :title="skill.name" >{{ skill.icon }}</v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/greenpeace.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold light-green--text`">{{$t('exp.green.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="light-green">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item target="_blank" style="padding:0px">
                       {{$t('exp.green.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div class="hidden-sm-and-up">{{$t('exp.green.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.green.desc.s1')}}</v-card-text>
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.green.sk.chip.desc')" >
                        {{$t('exp.green.sk.chip.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.green.sk.web.desc')" >
                        {{$t('exp.green.sk.web.ico')}}
                      </v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/tom.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold red--text`">{{$t('exp.tom.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="red">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item target="_blank" style="padding:0px">
                       {{$t('exp.tom.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div class="hidden-sm-and-up">{{$t('exp.tom.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.tom.desc.s1')}}</v-card-text>
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.tom.sk.chip.desc')" >
                        {{$t('exp.tom.sk.chip.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.tom.sk.andr.desc')" >
                        {{$t('exp.tom.sk.andr.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.tom.sk.java.desc')" >
                        {{$t('exp.tom.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.tom.sk.db.desc')" >
                        {{$t('exp.tom.sk.db.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.tom.sk.github.desc')" >
                        {{$t('exp.tom.sk.github.ico')}}
                      </v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/ppmg.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold indigo--text`">{{$t('exp.pmg.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="indigo">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item target="_blank" style="padding:0px">
                       {{$t('exp.pmg.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div class="hidden-sm-and-up">{{$t('exp.pmg.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.pmg.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.pmg.desc.s2')}}</v-card-text>
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.pmg.sk.github.desc')" >
                        {{$t('exp.pmg.sk.github.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.pmg.sk.embed.desc')" >
                        {{$t('exp.pmg.sk.embed.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.pmg.sk.web.desc')" >
                        {{$t('exp.pmg.sk.web.ico')}}
                      </v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.institution-name {
  word-break: break-word;
}
</style>
<script>
export default {
  name: "ExperienceList",
  data: () => ({
    experiences: [
      {
        skills: [
          { icon: "fab fa-java", name: "Java, inside and out - JSF, parallel programming and much more." },
          { icon: "fab fa-envira", name: "Spring Boot was used in the Web and Data Engineering course." },
          { icon: "fab fa-git", name: "Version control was handled with a private GitLab implenetation for the University." },
          { icon: "mdi-language-haskell", name: "I learned quite a bit of Haskell during the theoretical informatics courses." },
          { icon: "mdi-language-c", name: "I learned some C during the theoretical informatics courses." },
          { icon: "mdi-language-r", name: "I learned some R during a voluntary lecture about the language." },
          { icon: "mdi-database-search", name: "I learned quite a bit of PostgreSQL in multiple courses for and using databases." },
          { icon: "mdi-access-point-network", name: "I learned quite a bit of computer networks in courses like distributed systems and networks." },
          { icon: "mdi-format-text", name: "I learned quite a bit of computer networks in courses like distributed systems and networks." },
          { icon: "mdi-security", name: "I learned a lot of security during security courses, doing my bachelor thesis and my seminar work about BLE vulnerabilites." }
        ]
      },
      {
        skills: [
          { icon: "fab fa-github", name: "I used GitHub for version control." },
          { icon: "mdi-bootstrap", name: "I used Bootstrap for making things pretty." },
          { icon: "mdi-wordpress", name: "I used Wordpress for a website for our orienteering club." },
          { icon: "mdi-language-html5", name: "I used HTML5 for front-end." },
          { icon: "mdi-language-css3", name: "I used CSS3 for front-end." },
          { icon: "mdi-language-javascript", name: "I used javascript for front-end." },
          { icon: "mdi-microsoft-visual-studio-code", name: "VSCode was my IDE of choice." },
        ]
      },
      {
        skills: [
          { icon: "mdi-language-csharp", name: "I did 6 courses for C# as it was my field." },
          { icon: "mdi-language-javascript", name: "I did voluntary courses for JavaScript for front-end, back-end, applications and advanced." },
          { icon: "fab fa-java", name: "I did two courses for Java." },
          { icon: "mdi-microsoft-visual-studio", name: "The most used IDE for me there was Visual Studio." }
          ]
      }
    ],
  }),
};
</script>