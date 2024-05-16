<template>
  <v-container style="max-width:100%">
    <v-row no-gutters>
      <v-col cols="12 pa-0 ma-0">
        <div>
          <v-timeline :dense="$vuetify.breakpoint.mobile" class="pa-0 ma-0">
<v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/upstream.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold upstream--text`">{{$t('exp.upstream.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="upstream">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item href="https://www.upstream-mobility.at/" target="_blank" style="padding:0px">
                       {{$t('exp.upstream.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div>{{$t('exp.upstream.position')}}</div>
                     <div class="hidden-sm-and-up">{{$t('exp.upstream.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.upstream.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.upstream.desc.s2')}}</v-card-text>  
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.upstream.sk.java.desc')" >
                        {{$t('exp.uni.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.upstream.sk.java.desc')" >
                        {{$t('exp.upstream.sk.spring.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.upstream.sk.java.desc')" >
                        {{$t('exp.upstream.sk.kubernetes.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.upstream.sk.docker.desc')" >
                        {{$t('exp.upstream.sk.docker.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.upstream.sk.bitbucket.desc')" >
                        {{$t('exp.upstream.sk.bitbucket.ico')}}
                      </v-icon>
                    </v-card-actions>
                  </v-card>
            </v-timeline-item>

            <v-timeline-item>
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/icons/coins.png`)"/>
                </v-avatar>
              </template>
              <template #opposite>
                <span :class="`headline font-weight-bold coins--text`">{{$t('exp.coins.time')}}</span>
               </template>
                 <v-card class="elevation-2" dark color="coins">
                   <v-card-title class="institution-name font-weight-bold text-title text-sm-h4z">
                     <v-list-item href="https://ieeexplore.ieee.org/document/10189254" target="_blank" style="padding:0px">
                       {{$t('exp.coins.name')}}
                     </v-list-item>
                   </v-card-title>
                   <v-card-subtitle class="d-flex flex-column body-2 white--text">
                     <div>{{$t('exp.coins.position')}}</div>
                     <div class="hidden-sm-and-up">{{$t('exp.coins.time')}}</div>
                    </v-card-subtitle>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.coins.desc.s1')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.coins.desc.s2')}}</v-card-text>
                    <v-card-text class="white--text pt-0 pb-2">{{$t('exp.coins.desc.s3')}}</v-card-text>
                    <v-card-actions>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.java.desc')" >
                        {{$t('exp.coins.sk.java.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.kotlin.desc')" >
                        {{$t('exp.coins.sk.kotlin.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.andr.desc')" >
                        {{$t('exp.coins.sk.andr.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.git.desc')" >
                        {{$t('exp.coins.sk.git.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.c.desc')" >
                        {{$t('exp.coins.sk.c.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.lat.desc')" >
                        {{$t('exp.coins.sk.lat.ico')}}
                      </v-icon>
                      <v-icon class="mx-1" size="20" :title="$t('exp.coins.sk.sec.desc')" >
                        {{$t('exp.coins.sk.sec.ico')}}
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