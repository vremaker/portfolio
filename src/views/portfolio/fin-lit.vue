<template>
  <PortfolioPiece  :title="headerDetails.title" :color="headerDetails.color" :subtitle="headerDetails.subtitle"
    :role="headerDetails.role" :timeline="headerDetails.timeline" :tools="headerDetails.tools"
    :team="headerDetails.team" :accentColor="headerDetails.accentColor">

    <section id="story">
      <b-row align-h="center">
        <b-col cols="8">
          <section id="background">
            <h2>Background </h2>
              <p>Chime users want to be active participants in their personal finances. They generally have an understanding of their cash flow, but feel they can’t build
              wealth. 
              </p>
             <p>They are drawn to Chime’s credit
              building features and forgiving policies such as no overdraft or monthly fees. They generally have a good
              picture of their net worth but feel they can’t build wealth. Our approach focus on users living pay check
              to
              paycheck which we defined as an income of $75,000 a year. </p>
          </section>
          <section id="question">
            <h1 :style="{ color: '#14a961' }">How can we help Chime users build wealth in an easy, fun, and accessible
              way?</h1>
            <p class="fw-light">Design Question</p>
          </section>
          <section id="reserach">
            <h2>User Research </h2>
            <p>To better understand our user base, we conducted a general survey (n = 89) to explore the range of
              financial situations and identify who would most benefit from our tool. We then interviewed 12
              participants earning under $75,000 to gain deeper insight into their specific financial needs.</p>
            <h3>How do people from all walks of life perceive their financial situation? </h3>
            <ul>
              <li>People with greater wealth typically had more financial support from their family and demonstrated a
                greater understanding of a wider range of financial topic.</li>
              <li>People who experienced greater financial hardship often found it challenging to focus on building
                wealth, as their attention was consumed by managing their immediate financial burdens.</li>
              <li>Finances are very personal, which causes some users to feel uneasy about sharing details about their
                finances without proper trust building. </li>
            </ul>
            <h3>How do users want to learn about finances? </h3>
            <ul>
              <li>Users distrusted social media as a method of learning, as many financial social media influences
                promote misinformed financial.</li>
              <li>Users wanted a free and accessible platform to master the basics rooted in real life situations and
                evidence based sources, which would allow them to gain confidence in their financial skills by setting
                goals and them. </li>
            </ul>
          </section>
          <section id="expert">
            <h2>Learning From The Experts </h2>
            <p>We then interviewed financial experts to learn the tools they use to build wealth for others.</p>
            <h3>What does it take to master financial literacy? </h3>
            <ul>
              <li>Keep it simple and keep it real: Break complex financial topics into several smaller, easy to
                understand steps.</li>
              <li>Meet people where they are: Focus on topics that are achievable at their current financial level.</li>
              <li>Make content that is accessible for a variety of learning styles: Provide a variety of resources that
                focus on the big picture such as: Case studies, watching videos, and taking quizzes. </li>
            </ul>
            <h3>How do you build wealth? </h3>
            <ul>
              <li>Understand Compound Interest, the building block of the financial industry. Use it to your advantage,
                not to your detriment. </li>
              <li>Learn to maximize pre-tax money by gaining a deeper understanding of how employers programs such as
                health plans, stock buying plans, or retirement benefits.</li>
              <li>Focus on finding ways to save. Build a budget to get a better picture of where your money is going.
              </li>
              <li>Make your money work for you. Invest money into mutual funds and EFTs, which return dividends over
                time. </li>
            </ul>
          </section>
          <section id="empathy">
            <h2>Meet Our Users</h2>
            <p>Everyone deserves the opportunity to build wealth. Our personas and user journey maps serve as reminders
              to keep people from all walks of life at the center of our design and decision-making.</p>


              <!-- <img  v-img src="../../../public/assets/fin-lit/laura.png" /> -->
              <!--- COME BACK AND MAKE THESE OPEN INTO A  SLIDEY FULL SCREEN-->
            <!-- <div class="d-flex flex-row w-100">
            
          
             <img src="../../../public/assets/fin-lit/mark.png" />
            </div>
            <div  class="d-flex flex-row w-100">
                  <img  src="../../../public/assets/fin-lit/laura_jm.png" />
                 <img src="../../../public/assets/fin-lit/mark_jm.png" />
            </div> -->
          </section>
          <section id="define">
            <h2>What do Our Users Need?</h2>
            <p>There’s a lot of information out there. To ensure we are able to guide our users through the muck to the
              best knowledge, we did crazy 8s and storyboarding to define the goal post of our designs.</p>
            <h3>What features do our users need for success? </h3>
            <ul>
              <li><em>Onboarding:</em> To personalize the experience while finding balance between gathering enough
                detail to create personalized experiences while avoiding anything that feels overly intrusive. </li>
              <li><em>Learning Center:</em>A hub filled with resources to learn, with a variety of paths to follow, and
                full of videos, activities and checkpoints designed to build user confidence. </li>
              <li><em>Calculators:</em>A suite of tools to help users holistically assess their finances and compare the
                outcomes of different financial choices with just a few clicks. </li>
              <li><em>Resource Locator:</em>Provide a variety of resources to get financial advice: through a portal to
                connect with local fiduciaries virtually or in person, and over text.</li>
            </ul>
            <h3>What is the best format for our tool? </h3>
            <p>Finances are a deeply personal topic and often occupy people’s thoughts throughout the day, no matter
              where they are. We envisioned our users in various on-the-go situations where they might have quick
              financial questions and need immediate, reliable answers. This insight led us to develop a mobile app.</p>
            <!-- <img clkass="w-100" src="../../../public\assets\fin-lit\storyboards.png" /> -->
          </section>
          <section id="design">
            <h2>The Design Process</h2>
            <carousel :images="images" ></carousel>
          </section>
          <section id="future">
            <h2>Future State</h2>
            <p>Over the course of our project, our design ideas evolved significantly as we went through multiple
              iterations and transitions. One of the biggest areas for growth we identified in our final product was the
              quality and depth of the lessons. To further develop these lessons and improve their impact, an important
              next step would be to focus on UX writing and content strategy. This would help us present financial
              literacy content to users in a clearer, more engaging, and user-friendly way. While the material we
              included was helpful, we recognized that the presentation could be cleaner and more cohesive.</p>
            <p>We concluded the project with a user testing session. Although users gave us generally positive feedback,
              they also provided valuable insights that could guide future improvements. One feature I’m most excited
              about is displaying the amount of money a user has contributed toward their goal at the top of the goal
              details page. This visual progress indicator can help motivate users to continue working toward their
              financial goals.</p>
            <p>Another key takeaway from testing was the need to refine the layout of our lessons. While the content
              itself was strong, the interface could benefit from more color, interactivity, and a reduction in text
              density to make the experience more engaging and approachable.</p>
            <p>If we were to continue developing this project, we would aim to design additional screens and user flows
              to enhance the learning experience—such as prototyping savings, budgeting, and custom goal flows, along
              with expanding the content within the skill builder section. Naturally, this would be followed by further
              rounds of user testing and iteration, particularly with users living paycheck to paycheck, to ensure our
              product truly meets their needs.</p>
          </section>
          <section id="reflect">
            <h2>Reflection</h2>
            <p>This capstone project was a great learning experience. At the start, I was nervous about designing for
              financial literacy since I didn’t have much knowledge of the topic myself. During the interview process,
              we discovered that many of our intended users had similar levels of financial literacy awareness, which
              helped us empathize with their challenges.</p>
            <p>One of the biggest barriers we observed was the lack of a stable income, especially for those still in
              school. Our interviews with older participants revealed similar insights about the consequences of
              neglecting financial literacy and provided valuable perspective on the struggles associated with debt,
              particularly among lower-income individuals.</p>
            <p>A turning point came when we interviewed a financial professor at UW, which deepened our understanding of
              financial literacy and informed our design decisions. On a personal note, this project encouraged me to
              talk to my dad about financial literacy for the first time. He was thrilled that I wanted to learn more,
              and I’m grateful that this project not only expanded my professional skills but also sparked a personal
              commitment to continue improving my financial literacy beyond this experience.</P>
          </section>

        </b-col>
      </b-row>
    </section>
  </PortfolioPiece>
</template>
<script>
import PortfolioPiece from "@/components/layouts/PortfolioPiece.vue";
import carousel from "../../components/layouts/carousel.vue";


export default {
  components: {
    PortfolioPiece,
    carousel
  },
  data() {
    return {
      full: false,
      headerDetails: {
        title: "Building Wealth With Chime",
        subtitle: "Empowering users to set financial goals and build practical financial literacy skills using their own real-world financial data.",
        role: "UX Designer and Researcher",
        timeline: "12 Months (2021-2022)",
        tools: "Figma, G-Suite, Slack, Virtual Sticky Notes",
        team: "Valerie Remaker, Katia Meuleman, Aiza Ali, Brisa Jimenez",
        color: "#2de38e",
        accentColor: '#333333'
      },
      images: [{
        name: "hi",
        link: 'hi'
      }, {
        name: "hi",
        link: 'hi'
      }]
    }
  },
  methods: {
  }
};

</script>