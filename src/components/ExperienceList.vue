<template>
  <v-container style="max-width:100%">
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
                 <v-card class="elevation-2" dark color="orange darken-1">
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
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.java.desc')" >
                        {{$t('exp.uni.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.spring.desc')" >
                        {{$t('exp.uni.sk.spring.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.git.desc')" >
                        {{$t('exp.uni.sk.git.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.haskell.desc')" >
                        {{$t('exp.uni.sk.haskell.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.c.desc')" >
                        {{$t('exp.uni.sk.c.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.r.desc')" >
                        {{$t('exp.uni.sk.r.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.db.desc')" >
                        {{$t('exp.uni.sk.db.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.net.desc')" >
                        {{$t('exp.uni.sk.net.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.lat.desc')" >
                        {{$t('exp.uni.sk.lat.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.sec.desc')" >
                        {{$t('exp.uni.sk.sec.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.uni.sk.andr.desc')" >
                        {{$t('exp.uni.sk.andr.ico')}}
                      </v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/uni_passau.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold orange--text`">{{$t('exp.intern.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="orange darken-1">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item href="https://www.infosun.fim.uni-passau.de/cb/Kurse/sep_ws2122/" target="_blank" style="padding:0px">
                       {{$t('exp.intern.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div>{{$t('exp.intern.position')}}</div>
                     <div class="hidden-sm-and-up">{{$t('exp.intern.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.intern.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.intern.desc.s2')}}</v-card-text>
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.intern.sk.java.desc')" >
                        {{$t('exp.intern.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.intern.sk.git.desc')" >
                        {{$t('exp.intern.sk.git.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.intern.sk.db.desc')" >
                        {{$t('exp.intern.sk.db.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.intern.sk.lat.desc')" >
                        {{$t('exp.intern.sk.lat.ico')}}
                      </v-icon>
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
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.github.desc')" >
                        {{$t('exp.free.sk.github.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.boot.desc')" >
                        {{$t('exp.free.sk.boot.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.word.desc')" >
                        {{$t('exp.free.sk.word.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.html.desc')" >
                        {{$t('exp.free.sk.html.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.css.desc')" >
                        {{$t('exp.free.sk.css.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.js.desc')" >
                        {{$t('exp.free.sk.js.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.free.sk.vsc.desc')" >
                        {{$t('exp.free.sk.vsc.ico')}}
                      </v-icon>
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
                      <v-icon class="mx-1" size="20" :title="$t('exp.softuni.sk.ch.desc')" >
                        {{$t('exp.softuni.sk.ch.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.softuni.sk.js.desc')" >
                        {{$t('exp.softuni.sk.js.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.softuni.sk.java.desc')" >
                        {{$t('exp.softuni.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.softuni.sk.vs.desc')" >
                        {{$t('exp.softuni.sk.vs.ico')}}
                      </v-icon>
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
  name: "ExperienceList"
};
</script>