<template>
  <PortfolioPiece :title="headerDetails.title" :color="headerDetails.color" :subtitle="headerDetails.subtitle"
    :role="headerDetails.role" :timeline="headerDetails.timeline" :tools="headerDetails.tools"
    :team="headerDetails.team" :accentColor="headerDetails.accentColor">
    <section id="story">
      <b-row align-h="center">
        <b-col cols="8">
          <section id="background">
            <h2>Background </h2>
            <p>
              Optimal Blue Administrators monitor market conditions and set qualification guidelines for a multitude of
              mortgage products across several investors to deliver
              accurate and up to date pricing. Administrators manage three types of product pricing: pricing maintained
              by our internal content team; overlays that modify a subsets of internally managed pricing; and fully
              custom, administrator-managed pricing grids to give users full control as needed.
            </p>
            <p>
              In the legacy Optimal Blue environment, administrators were required to define qualification rules in a
              highly localized manner. Rules had to be applied at the investor level by selecting a specific product or
              product folder. As a result, administrators frequently encountered duplicative products across investors.
              For example, a 30-year conforming loan for Fannie Mae and Citibank had to be managed separately, even when
              the same qualification guidelines applied.
            </p>
            <p>
              When market conditions changed and pricing guidelines needed to be updated, administrators were forced to
              make the same updates in multiple locations to maintain pricing accuracy across affected products. This
              repetitive process not only increased administrative effort but also introduced frustration and a higher
              risk of user error.
            </p>

          </section>
          <section id="question">
            <h1 class="accent" :style="{ color: '#1979cc' }">How can we optimize the product creation workflow to
              increase efficiency for Optimal
              Blue administrators?</h1>
            <p class="fw-light">Design Question</p>
          </section>
          <section id="requirements">
            <h2>Design Requirements</h2>
            <p><b>Goal</b>: Enhance the speed at which administrators can manage the rules that qualify a loan for a
              given mortgage product.</p>
            <b>
              Initial requests for the product Team
            </b>
            <ul>
              <li>Swap between sets and products.</li>
              <li>More details about products at a higher level. </li>
              <li>Ability to apply rule to multiple products across investors.</li>
              <li>More generalized workflows, so users do not have to start over completely if they need to switch
                between a rule, a grid, and a matrix. </li>
              <li>Manage rules in a more global way - be able to save a user defined list so to be used in rules at a
                global level.</li>
              <li>Need to keep global rules and their associated attributes separate from the legacy investor specific
                rules and attributes. </li>
            </ul>
          </section>
          <section id="UXR">
            <h2>User Research</h2>
            <p>
              Over the course of this project, we conducted user interviews and distributed a survey to gather feedback
              from stakeholders. This research ensured we delivered a product that enhances user workflows rather than
              introducing unnecessary complexity without meaningful gains.
            </p>

            <h3>Key Findings</h3>
            <ul>
              <li><strong>High cognitive load:</strong> Legacy solutions required repetitive tasks when managing
                multiple rules across products and entities</li>
              <li><strong>Poor scalability:</strong> Legacy overlays were difficult to maintain at scale</li>
              <li><strong>Missing logic support:</strong> Lack of OR statements limited rule flexibility</li>
              <li><strong>Limited change visibility:</strong> It was difficult to identify what changed and who made the
                change</li>
              <li><strong>Inconsistent terminology:</strong> Terms such as rules, rule sets, and product groups were
                confusingly similar</li>
            </ul>

          </section>
          <section id="video">
            <h2>Rules Optimizer Overview</h2>
            <p>
              Rules Optimizer simplifies rules management with powerful global settings that eliminate repetitive work.
              Watch Tiffany McGarry, Vice President of Product Management at Optimal Blue, at the company’s Inaugural
              Summit in 2025 as she shares how Rules Optimizer cut a 60-minute workflow down to just 5 minute generating
              efficiency gains of up to 80%.
            </p>
            <div class="video-container">
              <iframe src="https://www.youtube.com/embed/uzZYMvgUz_E?si=AOPxLDzfDZbOoav2&amp;start=30" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <br />

            <h2>Key Features and Enhancements</h2>
            <b>One-to-Many Rules Management</b>
            <ul>
              <li>Create a rule once and apply it across multiple investors or products.</li>
              <li>Supports both 1:1 relationships (custom rules) and 1:many relationships (shared rules), giving teams
                flexibility to choose what works best.
              </li>
              <li>Existing investor-specific content remains unchanged, preserving accuracy and trust.
              </li>
            </ul>
            <b>Rules & Sets Workspace</b>
            <ul>
              <li>A centralized view showing all rules, rule sets, and their relationships in one place.</li>

              <li> Create a rule and assign it to a set or folder for easier organization.

              </li>
              <li>Top-level filtering by rule type, with additional filters for granular control.
              </li>
              <li> Top-level filtering by rule type, with additional filters for granular control.
              </li>
              <li> Seamless navigation between rules and the products or investors they’re tied to.
              </li>
            </ul>


            <b> Rule Reuse & Optimization </b>
            <ul>
              <li> Copy an existing rule or rule set to make quick modifications without starting from scratch.</li>
              <li> Group shared rule attributes (e.g., FICO ranges for adjustment grids) into reusable lists—eliminating
              </li>
              <li> Copy an existing rule or rule set to make quick modifications without starting from scratch.</li>
              <li> repetitive setup work that was previously required per investor.</li>
            </ul>
            <b>Effective Date Automation </b>
            <ul>
              <li>Define effective start and end dates for product rules.</li>
              <li> Rules automatically activate and expire with no additional action required.</li>
              <li> Ideal for limited-time pricing incentives, LLPA changes, or regulatory-driven updates—set it once and
                forget it.</li>
            </ul>
            <b>Transparency & Change Tracking </b>
            <ul>
              <li>Real-time activity panel displays:
                <ul>
                  <li>Rule creation dates</li>
                  <li>Changes made</li>
                  <li>User responsible for each change</li>
                </ul>
              </li>
              <li>Dashboard summary highlights the most recently edited rules, with quick shortcuts back to active work
              </li>
              <li>Improves team awareness and increases visibility into updates across the system</li>
            </ul><b> Archiving & Retrieval </b>
            <ul>
              <li>Archive outdated rules with a single click instead of deleting them</li>
              <li>Archived rules remain retrievable, functioning like a recycle bin for historical reference or future
                reuse</li>
              <li>Modernized interface:
                <ul>
                  <li>All existing rule actions remain intact, delivered through a cleaner, more intuitive interface
                  </li>
                  <li>Reduces cognitive load while supporting faster, more confident decision-making</li>
                </ul>
              </li>
            </ul>


            <!-- <div class="second-row">
            <iframe   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div> -->
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
        title: "Rules Optimizer",
        subtitle: "Streamlining rule creation and management for Optimal Blue Administrators.",
        role: "Lead UX Designer",
        timeline: "17 Months (2023-2025)",
        tools: "Figma, Axure, Microsoft Teams, UX Tweak",
        team: "UX Designers, Project Managers, Business Analysts, Development, and Stakeholders",
        color: "#1979cc",
        accentColor: '#ffffff'
      }
    }
  },
  methods: {
  }
};

</script>

<style lang="sass" scoped>
.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  /* For a 16:9 aspect ratio (standard for YouTube/Vimeo), the calculation is 9/16 = 0.5625, or 56.25% */
  padding-top: 56.25%;
  /* If you need a different ratio, e.g., 4:3, use 75% (3/4 = 0.75) */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none; /* Removes default iframe border */
}
</style>