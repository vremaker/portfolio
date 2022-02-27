<template>
  <PortfolioPiece>
     <!-- <div class="cover-img">
        <img class="sm-img" src="/assets/tiles/on-trak.png" alt="DCI" />
      </div>-->
      <div class="title">
        <h1>OnTrak Troubleshooting</h1>
        <p class="subhead">
          Empowering users to resolve product conflicts without calling for help
        </p>
        <hr />
      </div>

      <p>
        During the Summer of 2021, I was given the wonderful opportunity to
        intern at Digital Control Inc. (DCI), a company that specializes in
        locating technology for the horizontal directional drilling (HDD)
        process. Their toolset helps drillers locate the drill head under the
        ground through a two part hardware system consisting of a transmitting
        device and a locating device. On these drill sites, users can encounter
        complicated issues with their locating system, but these issues are
        fairly common and the customer service department has documented
        standardized procedures for troubleshooting these devices over the
        phone. During my internship I was tasked with creating a troubleshooting
        application that would not only reduce the call volume for customer
        service representatives, but that would also empower users to resolve
        product issues without having to call customer service for assistance.
        My design specifically focused on the most common issue that needs
        troubleshooting: when no data is showing up on the locator from the
        transmitter that has been placed underground. With DCI’s gracious
        permission, my design process was as follows:
      </p>

      <h2>COMPETITIVE ANALYSIS</h2>
      <p>
        I began by gaining an understanding of competitive and comparable
        troubleshooting products, by looking at DCI’s own helpdesk site, DCI’s
        current product manual/helpdesk mobile application, Apple’s helpdesk
        site, Ford’s helpdesk site, and iFixIt’s crowdsourced troubleshooting
        site. Most of these applications were extremely text heavy (especially
        the help desk sites for Apple, Ford, and DCI), with links and subheads
        as the main way to navigate through the content. The level of text is
        incredibly overwhelming, and with hardware products, such as those
        produced by DCI, it can be incredibly difficult for users to translate
        what the text is trying to convey into concrete actions to be applied to
        the hardware system. This competitive analysis made it clear that the
        design needed to be far more visual, focus on single steps at one time,
        and include some gamified elements to make the troubleshooting
        interaction less tedious and frustrating.
      </p>
      <h2>USER PERSONA</h2>
      <p>
        From the foundational information I was given regarding the drillers
        that typically work with the locating equipment, along with the baseline
        information about the technical problems that users run into when they
        are in the field, I created the persona of Martin Dougherty. Martin is
        new to drilling, in order to ensure that even the most inexperienced
        drillers can still succeed using this troubleshooting application.
      </p>

      <img src="assets/on-trak/persona.png" alt="martin persona" />

      <h2>WORKFLOW</h2>
      <p>
        The design for this onTrak application focused on the “No Data on
        Locator” troubleshooting flow provided by customer service.
        Interestingly, in talking to various members of the customer service
        support team and my various stakeholders, there seemed to be a slightly
        modified path through the troubleshooting to get data back on the
        locator, which conflicted with the flow chart I was given when I began
        my internship. So, after consulting the head of customer service, I
        created a finalized version of a workflow which displays all of the
        possible paths that a user could encounter while trying to troubleshoot
        getting data back on their locator.
      </p>
      <img
        src="assets/on-trak/workflow.png"
        alt="flow through steps in the app"
      />
      <p>
        Although there are a lot of possible steps to go through, this process
        begins with verifying the equipment in use, and uses a decision tree to
        walk through possible fixes that the user can try on their own until
        either their problem is solved, and they can get back to drilling, or
        they diagnose that their issue is too complicated to fix on their own,
        and requires contact with DCI to deal with rare, more complicated
        replacement or repair options.
      </p>

      <h2>PROTOTYPE</h2>
      <p>
        The final design for onTrak found inspiration from the iconic wordless
        instruction guides used by Ikea to guide users through the furniture
        construction process. The main goal of this prototype was to be a clean,
        pleasant, fun, and intuitive guide towards fixing any frustrating issues
        which might occur on the job.
      </p>
      <p>
        The high fidelity prototype allows you to walk through the multiple
        pathways involved in this user driven problem solving process for the
        “No Data on Locator” flow as the user is walked through a choose your
        own adventure styled interaction.
      </p>
      <p>Use the prototype below to explore the interactions for yourself!</p>

      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        width="100%"
        height="400"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqDKtN0o0pfNamUFKKiuBd4%2FonTrak-HiFi-Prototype%3Fnode-id%3D2%253A8209%26scaling%3Dscale-down%26page-id%3D2%253A1881%26starting-point-node-id%3D2%253A8209"
        allowfullscreen
      ></iframe>
      <h2>USER TESTING</h2>
      <p>
        After several iterations of prototyping, it was time to test the
        troubleshooting application with those who would be using it on the
        drill site. Due to COVID-19 restrictions, these user tests were
        completely virtual.
      </p>
      <p>
        <em>Participants: </em> We tested the high fidelity prototype with 11 in
        house participants in the form of both field representatives, and
        customer service representatives.
      </p>
      <p>
        <em>Purpose: </em> To gain perspective on the merit of the onTrak
        application based on those who work with customers daily.
      </p>
      <p>
        <em>Task: </em> Users followed the steps in the workflow from selecting
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
          Dummy-proof."
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
        sites that cover step by step instructions tend to have a long scrolling
        experience, the shift to small, quickly read pages hat users could swipe
        though shifted the experience to an entirely new level. This focus on
        simple, and clean UI will be a huge focus as I continue to design more
        applications.
      </p>
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