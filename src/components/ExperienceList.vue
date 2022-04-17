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
                <v-card-text class="white--text pt-0 pb-2" v-for="(descParagraph, j) in experience.description" :key="j">{{
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
        year: "September 2018 - Present",
        institution: "University of Passau",
        institutionIcon: "uni_passau.png",
        position: "Bachelor in Computer Science",
        website: "https://www.uni-passau.de/en/bsc-computer-science/",
        description: [
          "I'm currently doing my bachelors degree in German language in Computer Science. During my studies at this research-focused university, I have learned a plethora of valuable skills.",
          "In the mandatory courses in my bachelor I learned all about Analysis, Linear Algebra, Stochastic, Informatics (both theoretical and practical), Computer Architecture, Networks, Distributed Systems, Databases, IT-Security and much more. The knowledge I gained in these lectures was invaluable and built the basis of my understanding of the field.", 
          "Another crucial part of my studies served the Internship I did for the University. It consisted of a big project that a team of five had to do during the length of a whole semester. A big emphasis was put on security, which I was partly responsible for. Doing it at the University, rather than a company, was of great value, as we were mentored closely and our mistakes were corrected and explained by our tutor.",
          "The last part of my studies consists of my bachelor thesis and seminar paper. My subject is about ''A Performance Comparison of Post Quantum Cryptography Based Signature Add-ons (certificate-based or not) for Open-source Android Email Applications''."
          ],
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
        ],
        isSmall: false,
      },
      {
        color: "light-green",
        year: "throughout 2018",
        institution: "Freelancer",
        institutionIcon: "freelance.png",
        position: "",
        description: [
          "Before starting my bachelor I did some freelance work in order to learn more about programming. Mainly I did portfolio websites for clients."],
        skills: [
          { icon: "fab fa-github", name: "I used GitHub for version control." },
          { icon: "mdi-bootstrap", name: "I used Bootstrap for making things pretty." },
          { icon: "mdi-wordpress", name: "I used Wordpress for a website for our orienteering club." },
          { icon: "mdi-language-html5", name: "I used HTML5 for front-end." },
          { icon: "mdi-language-css3", name: "I used CSS3 for front-end." },
          { icon: "mdi-language-javascript", name: "I used javascript for front-end." },
          { icon: "mdi-microsoft-visual-studio-code", name: "VSCode was my IDE of choice." },
        ],
        isSmall: true,
      },
      {
        color: "blue",
        year: "October 2015 - August 2018",
        institution: "Software University",
        institutionIcon: "softuni.png",
        position: "C# Web Developer",
        description: [ "I studied at the Bulgarian academy for software developers SoftUni for 3 years. My primary field was C# Web Developer with courses like ''C# Advanced'', ''MVC'', ''ASP.NET'', and much more about databases, teamwork, entity framework, etc. I also participated in other voluntary courses like ''Arduino'', ''JS Applications'', ''Multimedia and office applications'' and more.", "Here I started getting into programming seriously and was a big foundation of what I am now."],
        skills: [
          { icon: "mdi-language-csharp", name: "I did 6 courses for C# as it was my field." },
          { icon: "mdi-language-javascript", name: "I did voluntary courses for JavaScript for front-end, back-end, applications and advanced." },
          { icon: "fab fa-java", name: "I did two courses for Java." },
          { icon: "mdi-microsoft-visual-studio", name: "The most used IDE for me there was Visual Studio." }
          ],
        isSmall: false,
      },
      {
        color: "indigo",
        year: "September 2006 - May 2018",
        institution: "National Gymnasium of Natural Sciences and Mathematic",
        institutionIcon: "ppmg.png",
        position: "Student",
        description: [
          "This was the High School I got my Diploma. It was considered the best education in my town. My profile was ''Mathematics, Informatics and English''.", 
          "During my studies there I participated actively in competitions for the Bulgarian Academy of Science, Union of Bulgarian Mathematicians and more. Two of my projects won a perfect presentation award and one won a special award for a significant social contribution twice. I have also participated in Math competitions and have won over 14 of them."],
        skills: [
          { icon: "fab fa-github", name: "I used GitHub for version control." },
          { icon: "mdi-chip", name: "I did a lot of projects with embedded systems, like Arduino, Raspberry Pi, TI Launchpad, and more." },
          { icon: "mdi-web", name: "Here I started learning the essense of web - HTML, CSS and JS." },
        ],
        isSmall: true,
      },
    ],
  }),
};
</script>