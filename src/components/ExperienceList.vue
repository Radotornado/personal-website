<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12 pa-0 ma-0">
        <div>
          <v-timeline :dense="$vuetify.breakpoint.mobile" class="pa-0 ma-0">
            <v-timeline-item
              v-for="(experience, i) in experiences"
              :key="i"
              :small="experience.isSmall"
            >
              <template #icon>
                <v-avatar>
                  <v-img
                    :src="
                      require(`@/assets/icons/${experience.institutionIcon}`)
                    "
                  />
                </v-avatar>
              </template>
              <template #opposite>
                <span
                  :class="`headline font-weight-bold ${experience.color}--text`"
                  v-text="experience.year"
                ></span>
              </template>
              <v-card class="elevation-2" dark :color="experience.color">
                <v-card-title
                  class="institution-name font-weight-bold text-title text-sm-h5"
                  >
                  <v-list-item :href="experience.website" target="_blank" style="padding:0px">
                  {{ experience.institution }}
                  </v-list-item>
                </v-card-title>
                <v-card-subtitle class="d-flex flex-column body-2 white--text">
                  <div>{{ experience.position }}</div>
                  <div class="hidden-sm-and-up">{{ experience.year }}</div>
                </v-card-subtitle>
                <v-card-text class="white--text" v-for="(descParagraph, j) in experience.description" :key="j">{{
                  descParagraph
                }}</v-card-text>
                <v-card-actions>
                  <v-icon
                    v-for="(skill, i2) in experience.skills"
                    :key="i2"
                    class="mx-1"
                    size="20"
                    :title="skill.name"
                    >{{ skill.icon }}</v-icon
                  >
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
        color: "orange",
        year: "2018 - Present",
        institution: "University of Passau",
        institutionIcon: "uni_passau.png",
        position: "Bachelor in Computer Science",
        website: "https://www.uni-passau.de/en/bsc-computer-science/",
        description: [
          "I'm currently doing my bachelors degree in german in Computer Science. During my studies in this research-focused university I have leared a plethora of valuable skills.",
          "In the mandatory courses in my bachelor I learned all about Analysis, Linar Algebra, Stochastics, Informatics (both theoretical and practical), Computer Architecture, Computer Networks, Distributed Systems, Databases, IT-Security and much more.", 
          "The knowledge I gained in these lectures was invaluable and built the basis of my understanding of the field. Another crucial part of my studies were the TODO" 
          ],
        skills: [
          {
            icon: "fab fa-java",
            name: "Java, inside and out - JSF, parallel programming and much more.",
          },
          { icon: "fab fa-envira", name: "Spring Boot" }
        ],
        isSmall: false,
      },
      {
        color: "blue",
        year: "2018",
        institution: "Freelancer",
        institutionIcon: "freelance.png",
        position: "Freelancer",
        description: [
          "TODO."],
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false,
      },
      {
        color: "blue",
        year: "October 2015 - 2018",
        institution: "Software University",
        institutionIcon: "softuni.png",
        position: "TODO",
        description: [
          "TODO."],
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false,
      },
      {
        color: "green",
        year: "October 2016",
        institution: "Greenpeace (volunteer work)",
        institutionIcon: "greenpeace.png",
        position: "IoT Engineer",
        description: [
          "TODO."],
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false,
      }
    ],
  }),
};
</script>