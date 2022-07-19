<template>
  <PortfolioPiece>
     <div class="cover-img d-flex flex-column">
        <img class="header-img" src="/assets/tiles/on-trak.png" alt="DCI" />
      <div class="title">
        <h1>OnTrak Troubleshooting</h1>
        <p>
          Empowering users to resolve product conflicts without calling for help
        </p>
        <hr />
      </div>
        </div>

      <p>
       During the summer of 2021, I was given the opportunity to intern at Digital Control Inc. (DCI), a company that specializes in locating technology for horizontal directional drilling (HDD). Their tool set tracks the location of the drill head underground through a two part hardware system consisting of a transmitter and a locator. These systems exhibit issues are fairly common, and the customer service department has standardized procedures for troubleshooting over the phone. For this project, I was tasked with creating a troubleshooting application that would empower users to resolve product issues without having to call customer service for assistance. My design focused on the most common issue, "No Data on Locator", where the locator does not show the location information for the underground transmitter.
      </p>

      <h2>Competitive Analysis</h2>
      <p>
        To gain an understanding of the problem space, I began with competitive analysis. </p>
        <b>Sites Analyzed</b>
        <ul>
          <li> DCI’s own helpdesk site</li>
          <li> DCI’s current product manual/helpdesk mobile application</li>
          <li> Apple’s helpdesk site</li> 
          <li>Ford’s helpdesk site</li>
          <li> iFixIt’s crowdsourced troubleshooting site </li>
        </ul>
        <b>Key Findings</b>
        <ul>
          <li> Current solutions tend to be overwhelmingly text heavy </li>
          <li>Use links and subheadings as the main method of navigation </li>
          <li>It can be difficult for users to translate text into concrete actions to be applied to
        the hardware system</li>
        </ul>
        <b>Solution Implications</b>
        <ul>
          <li>More visual elements</li>
          <li>Focus on one step at a time</li>
          <li>Include gamification elements to reduce frustration</li>
        </ul>
      </p>
      <h2>User Persona</h2>
      <p>
        From the foundational information I was given regarding the drillers
        that typically work with the locating equipment, I created the persona 
        of Martin Dougherty. As user's gain experience on the drill site, troubleshooting 
        becomes more intuitive, so my persona, Martin, needed to be new to drilling to ensure that 
        the solution is digestible at all skill levels. 
      </p>

      <img src="assets/on-trak/persona.png" alt="martin persona" />

      <h2>Workflow</h2>
      <p>
        This application focused on the “No Data on
        Locator” troubleshooting flow provided by customer service.
        In talking to stakeholders and members of the customer service
        support team, there seemed to be a variety of path to go about troubleshooting the same issue. 
        After consulting the head of customer service, I
        created a finalized version of a workflow which displays all the
       paths a user could take while they troubleshoot their locator.
      </p>
      <img
        src="assets/on-trak/workflow.png"
        alt="flow through steps in the app"
      />
      <p>
        This process begins with verifying the equipment in use, and uses a decision tree to
        walk through possible fixes that the user can try on their own until
        either their problem is solved, and they can get back to drilling, or
        they diagnose that their issue is too complicated to fix on their own,
        and requires contact with DCI to deal with rare, more complicated
        replacement or repair options.
      </p>
      <h2>Prototype</h2>
      <p>
        The final design for onTrak found inspiration from the iconic wordless instruction guides used by Ikea to guide users through the furniture construction process. The main goal of this prototype was to be a clean, pleasant, fun, and intuitive guide towards solving any frustrating issues which might occur on the job.
      </p>
      <p>
        The high-fidelity prototype allows you to walk through the multiple pathways involved in this user-driven problem-solving process for the “No Data on Locator” flow as the user is walked through a choose-your-own-adventure styled interaction.
      </p>
      <p>Use the prototype below to explore the interactions for yourself!</p>

      <iframe SameSite=None style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOv0FRMitxrKGHictBHTxMe%2FonTrak-(Copy)%3Fpage-id%3D2%253A1881%26node-id%3D2%253A1881%26viewport%3D520%252C291%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A8209" allowfullscreen></iframe>
      <h2>USER TESTING</h2>
      <p>
        After several iterations of prototyping, it was time to test the
        troubleshooting application with those who would be using it on the
        drill site. Due to COVID-19 restrictions, these user tests were
        completely virtual.
      </p>
      <p>
        <b>Participants: </b> We tested the high-fidelity prototype with 11 in
        house participants in the form of both field representatives, and
        customer service representatives.
      </p>
      <p>
        <b>Purpose: </b> To gain perspective on the merit of the onTrak
        application based on those who work with customers daily.
      </p>
      <p>
        <b>Task: </b> Users followed the steps in the workflow from selecting
        equipment and changing bands all the way through calibration.
      </p>
      <p>
        After completing the steps involved in the user testing task, we asked
        participants 3 Likert scale questions to assess the app’s usability. On
        a scale from 1 to 5, with 1 being the lowest/worst score, and 5 being
        the highest/best score, they rated: how useful the application was, how
        they enjoyed using the application, and it’s usefulness in the field. As
        you can see, each of these 3 categories found ratings above 4.5/5.
      </p>

      <img src="assets/on-trak/rating.png" alt="ratings" />

      <p>
        As far as critical feedback goes, I sorted my results into what worked,
        and what could be improved upon as shown below:
      </p>

      <h3>What Worked:</h3>
      <ul>
        <li>Clean UI.</li>
        <li>Straightforward instructions that are nice and simple.</li>
        <li>Felt like a game.</li>
        <li>Helps focus amid the large amounts of data on the locator.</li>
        <li>
          Diagrams are easier than trying to describe it over the phone.
          Dummy-proof.
        </li>
      </ul>

      <h3>What Worked:</h3>
      <ul>
        <li>
          Testers would have liked a locator in their hands while testing (an
          affordance that testing online due to COVID-19 did not allow for).
        </li>
        <li>More explanation as to why they are doing each step.</li>
        <li>
          Ability to check for electrical failure upon closing drill head
          compartment.
        </li>
        <li>More free form exploration.</li>
        <li>
          Integration into Digi Guide, the current application for
          troubleshooting, and manual reference.
        </li>
      </ul>

      <h2>REFLECTION</h2>
      <p>
        This project was a lot of fun, it was an incredible learning opportunity
        for how to create mobile applications with a more gamified look and
        feel, which helps reduce the tedium in everyday life. Although most
        sites that cover step-by-step instructions tend to have a long scrolling
        experience, the shift to small, quickly read pages hat users could swipe
        though shifted the experience to an entirely new level. This focus on
        simple, and clean UI will be a focus as I continue to design more
        applications.
      </p>
  <div class="d-flex flex-column flex-md-row text-center justify-content-between">
        <router-link to="/fin-lit"><b>Previous Project: </b> Chime Financial Literacy</router-link>
        <router-link to="/common-ground"><b>Next Project: </b>Common Ground</router-link>
        
        </div>

        
  </PortfolioPiece>
</template>

<script>
import PortfolioPiece from "@/components/layouts/PortfolioPiece.vue";

export default {
  components: {
    PortfolioPiece,
  },
};
</script>

<style scoped>
.small {
  width: 5%;
}
</style>