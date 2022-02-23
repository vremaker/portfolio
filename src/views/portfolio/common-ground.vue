<template>
  <PortfolioPiece>
    <div>
      <div class="cow">
        <img class="sm-img" src="/assets/tiles/common-ground.png" alt="DCI" />
      </div>
      <h1>Common Ground</h1>
      <p class="subhead">People Over Politics</p>

      <p>
        For the 2020 HCDE Democracy Design Jam, a 24 hour virtual design sprint,
        my team wondered: In a country divided by politics and physical
        isolation, how can people connect and find common ground with each
        other? My team created a mobile app called Common Ground which was
        designed to combat the social divisions that were weaponized in the 2016
        election It humanizes the “opposing side” by focusing on what people
        have in common, rather than their differences in political views.
      </p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/3UOFg3gkssU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p class="text">
        <em
          >This project was given an honorable mention during final project
          judgment.</em
        >
      </p>
      <h2>INTERVIEWS</h2>
      <p>We conducted 12 short interviews with:</p>
      <ul>
        <li>11 civilians and 1 politician</li>
        <li>10 democrats, 1 republican and 1 radical</li>
        <li>9 women and 3 men</li>
        <li>Ages from early twenties to late sixties</li>
      </ul>
      <h3>Key Takeaways:</h3>
      <ul>
        <li>
          “I feel alienated and being pushed to the corner because they [people
          of other beliefs] are so pushy and dominating.” — Civilian
        </li>
        <li>
          “We use [constituent] stories to push our legislative agenda to
          influence priorities” -Politician
        </li>
      </ul>
      <h2>USER PERSONAS</h2>
      <p>
        From our interviews, we gathered key insights on our users that we
        compiled into categories such pain points, desires, and goals.
      </p>
      <img src="assets/common-ground/edward.png" alt="Edward Persona" />
      <img src="assets/common-ground/jane.jpeg" alt="Jane Persona" />
      <h2>PROTOTYPES</h2>
      <p>
        We tested a Mid fidelity prototype with users. Based on their feedback,
        we incorporated an authentication process into our app that allows users
        to sign in via other apps. This helps us to collect more accurate
        political data, while protecting the user’s anonymity.
      </p>
      <img src="assets/common-ground/screens.png" alt="screens" />
      <p>We then added design and aesthetic to create our final product.</p>
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        width="100%"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1gowtffsfPWnABr1RObtDx%2FDDJ%3Fnode-id%3D35%253A24"
        allowfullscreen
      ></iframe>
      <h2>REFLECTION</h2>
      <p>
        Because we had such a limited time frame to create this application, we
        did not get enough input from our users. For example, we were only able
        to interview one republican and one politician. In our future work, we
        would like to get a deeper understanding of our users. We are also
        planning to generate analytics into a report to be used by politicians.
        Lastly, we will implement a share function that will allow users to
        share a post to different social media platforms.
      </p>
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
.cow {
  width: 100%;
  display: flex;
}
.sm-img {
  width: 30%;
  padding-top: 5%;
  padding-bottom: 2%;
  margin: auto;
}

.text {
  text-align: center;
}
h2 {
  text-align: left;
}
img {
  width: 100%;
  height: auto;
  }

em {
  font-weight: 900;
}

#dci {
  padding-bottom: 5%;
}
</style>