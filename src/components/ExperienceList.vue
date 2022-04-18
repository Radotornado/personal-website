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
                  class="institution-name font-weight-bold text-title text-sm-h4z"
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
        year: "Sept 2018 - Present",
        institution: "University of Passau",
        institutionIcon: "uni_passau.png",
        position: "Bachelor in Computer Science",
        website: "https://www.uni-passau.de/en/bsc-computer-science/",
        description: [
          "Right now I am doing my bachelors degree in German in Computer Science. During my studies at this research-focused university, I have learned a plethora of valuable skills.",
          "In the mandatory courses I learned all about Analysis, Linear Algebra, Stochastic, Informatics (both theoretical and practical), Computer Architecture, Networks, Distributed Systems, Databases, IT-Security and much more. The knowledge I gained in these lectures was invaluable and built the basis of my understanding of the field.", 
          "Another key part of my studies included the internship I did for the University. It involved of a big project that a team had to complete during the length of a whole semester. A big emphasis was put on security, which I was responsible for. Doing the internship at the university, rather than at a company, was of great value to me. I was mentored closely and my mistakes were corrected as well as explained by my tutor.",
          "The last part of my studies consists of my bachelor thesis and seminar paper. My subject is about Post-quantum cryptography based signature add-ons for open-source mobile applications."
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
        color: "purple",
        year: "throughout 2018",
        institution: "Freelancer",
        institutionIcon: "freelance.png",
        position: "",
        description: [
          "Before starting my bachelor in Germany I did some freelance work in order to learn more about programming. I developed mainly portfolio websites for clients."],
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
        year: "Oct 2015 - Aug 2018",
        institution: "Software University",
        institutionIcon: "softuni.png",
        position: "C# Web Developer",
        description: [ "I studied at the Bulgarian academy for software developers ''SoftUni'' for 3 years. My primary field was C# Web Developer with courses like C# Advanced, MVC, ASP.NET, and much more about databases, teamwork, entity framework, etc. I also participated in other voluntary courses like Arduino, JS Applications, Multimedia and office applications.", " ''SoftUni'' is fundamental part of who I am now, since it is the place, where I started programming seriously."],
        skills: [
          { icon: "mdi-language-csharp", name: "I did 6 courses for C# as it was my field." },
          { icon: "mdi-language-javascript", name: "I did voluntary courses for JavaScript for front-end, back-end, applications and advanced." },
          { icon: "fab fa-java", name: "I did two courses for Java." },
          { icon: "mdi-microsoft-visual-studio", name: "The most used IDE for me there was Visual Studio." }
          ],
        isSmall: false,
      },
      {
        color: "light-green",
        year: "Oct 2016",
        institution: "Greenpeace (voluneer work)",
        institutionIcon: "greenpeace.png",
        position: "IoT Engineer",
        description: [
          "I volunteered in a project organized by Greenpeace, that aims to assess the purity of the atmospheric air in the major cities in Bulgaria."],
        skills: [
          { icon: "mdi-chip", name: "The major part consisted of ATmega328P." },
          { icon: "mdi-web", name: "We designed the web interface of the devices with - HTML, CSS, JS and PHP." },
        ],
        isSmall: true,
      },
      {
        color: "red",
        year: "Mar 2016, Oct 2017",
        institution: "Tikkum Olam Makers (voluneer work)",
        institutionIcon: "tom.png",
        position: "Software Engineer",
        description: [
          "I volunteered twice in the two editions of TOM Bulgaria. The point of the TOM movement is connecting innovators to people with disabilities, in order to develop and disseminate open source solutions for neglected challenges. Together with a team we designed and developed hardware and software solutions for people in need."],
        skills: [
          { icon: "mdi-chip", name: "In the first project we used Arduinos to control movement and measure with sensors." },
          { icon: "mdi-android", name: "The second project was for an android phone." },
          { icon: "fab fa-java", name: "The main language we used was Java." },
          { icon: "mdi-database", name: "We used an online database with QR-Codes." },
          { icon: "fab fa-github", name: "We used GitHub for version control." },
        ],
        isSmall: true,
      },
      {
        color: "indigo",
        year: "Sept 2006 - May 2018",
        institution: "National Gymnasium of Natural Sciences and Mathematic",
        institutionIcon: "ppmg.png",
        position: "Student",
        description: [
          "The high school I graduated from was considered the best education in my town. My major was ''Mathematics, Informatics and English''.", 
          "During my studies I actively took part in competitions for the Bulgarian Academy of Science, the Union of Bulgarian Mathematicians and many more. Two of my projects won a perfect presentation award and one won a special award for a significant social contribution twice. Furthermore I participated in numerous mathematical competitions and have won over 14 of them."],
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