<template>
  <PortfolioPiece>
    <!--<div class="cover-img d-flex flex-column">
      <img src="/assets/tiles/fin-lit.png" alt="DCI" />-->
      <div class="title">
        <h1>Chime Financial Literacy</h1>
        <p>
          Empowering users to gain financial literacy skills that are applicable
          to their lives using their real financial data.
        </p>
        <hr />
      </div>
    <!--</div>-->
    <p>
      For the final project of my Human Centered Design and Engineering degree,
      my capstone team designed a financial literacy learning platform for
      Chime, a financial technology company that offers credit and debit cards.
      During our initial stakeholder meeting with Chime, we learned that their
      users know what they have, but feel they can’t build wealth. So, we
      decided to focus our solution on users living paycheck to paycheck, which
      we defined as those who make under $75,000 a year. Over the course of 6
      months, our team planned, researched, and designed a financial literacy
      application that draws upon users own finances as a baseline for their
      learning experience.
    </p>
    <p>
      To motivate our design process, we used began by developing the following
      research and design questions:
    </p>
    <b>Research Questions:</b>
    <ul>
      <li>What categories of financial literacy are most useful to users?</li>
      <li>What does financial literacy mean to users?</li>
      <li>What is the easiest way for someone to build wealth?</li>
      <li>How do you move from paycheck-to-paycheck to accumulate wealth?</li>
      <li>
        What are the differences in the knowledge base between those who have
        financial literacy and those who do not?
      </li>
      <li>Why are users motivated to learn about finances?</li>
      <li>
        What are the most effective ways to engage users on financial literacy?
      </li>
      <li>How do people avoid and escape debt?</li>
    </ul>
    <b>Design Questions: </b>
    <ul>
      <li>
        How can we make financial literacy education more quick, fun, and
        accessible and help build individuals’ wealth?
      </li>
      <li>
        Do we design financial literacy education within users’ finance tools or
        outside of it?
      </li>
    </ul>

    <h2>User Research</h2>
    <p>
      To begin, we conducted several rounds of user research. We conducted
      secondary research, a survey, and interviews. Then, we created personas
      and user journey maps to guide our design process.
    </p>
    <h3>Secondary Research</h3>
    <p>
      To gain an understanding of the current solutions within the problem
      space, we conducted both an audit of Chime and a Competitive analysis of
      current solutions in the financial literacy and education space. Our
      findings are presented below.
    </p>
    <div class="d-flex flex-lg-row flex-column justify-content-between">
      <div class="horiz">
        <p class="c">Chime Audit</p>
        <img
          class="chart"
          src="assets/fin-lit/chime_audit.png"
          alt="chart to describe findings of our Chime Audit"
        />
      </div>
      <div class="horiz">
        <p class="c">Competitive Analysis</p>
        <img
          class="chart"
          src="assets/fin-lit/competitive_analysis.png"
          alt="chart that describes findings of our Competitive Analysis"
        />
      </div>
    </div>
    <br />
    <p>
      Our Chime audit highlighted the limited scope of financial literacy tools
      provided by Chime in which the educational material available was
      presented in long form articles that were hard to parse. Then, our
      competitive analysis highlighted the use of digestible information,
      personalization, and reward systems to motivate continued learning in
      other applications.
    </p>
    <h3>Survey</h3>
    <p>
      After our secondary research was complete, it was time to understand the
      ways in which users currently go about gaining financial literacy. To
      address this, we developed an exploratory survey to garner insight into
      the financial habits, both for those who live paycheck-to-paycheck and
      those who do not.
    </p>
    <b>Survey Goals: </b>
    <ul>
      <li>
        Understand current financial products used by people from any income
        bracket.
      </li>
      <li>Discover more about people's relationship with their finances.</li>
    </ul>
    <b>Participants:</b>
    <ul>
      <li>
        We deployed our survey among our colleagues at the University of
        Washington and in several financial literacy Facebook and Reddit groups.
      </li>
      <li>We received <b>89</b> responses from our survey.</li>
    </ul>
    <b>Survey Overview:</b>
    <ul>
      <li>
        Demographic information about survey participants, such as employment
        status.
      </li>
      <li>Understand participant's usage of the Chime Application.</li>
      <li>
        Understanding of which financial products were in use, and which
        features were most effective towards their learning.
      </li>
      <li>Financial status, such as whether they live paycheck to paycheck.</li>
      <li>
        Understand participants confidence in their financial knowledge and
        financial literacy.
      </li>
      <li>Financial topics of Interest for participants.</li>
      <li>
        Participant interest in being involved in a follow-up interview study.
      </li>
    </ul>
    <img
      src="assets/fin-lit/survey_affinity.png"
      alt="survey affinity diagramming"
    />
    <p class="text-center">
      View the codebook in the survey tab
      <a target="_blank" href="https://tinyurl.com/chimecodebook"> here.</a>
    </p>
    <b>Survey Findings:</b>
    <ul>
      <li>
        Those who were not living paycheck to paycheck utilized more financial
        services than those who were living paycheck to paycheck.
      </li>
      <li>
        Those who were not living paycheck to paycheck knew more financial
        topics and specifics than those who were living paycheck to paycheck.
      </li>
      <li>
        Those who were not living paycheck to paycheck had more familial support
        and generational financial knowledge than those who were living paycheck
        to paycheck.
      </li>
      <li>
        Those who were not living paycheck to paycheck have more passive income
        streams, such as 401ks, Roth IRAs, investments, than those who were
        living paycheck to paycheck.
      </li>
    </ul>
    <h3>User Interviews</h3>
    <p>
      After our survey, in which we garnered an understanding of the financial
      literacy from a wide variety of income sources, we knew that we needed to
      gain more insight about the financial knowledge for those living paycheck
      to paycheck.
    </p>
    <b>Interview Goals:</b>
    <ul>
      <li>
        Decide on the creation of an app within people's finances or outside of
        them.
      </li>
      <li>Understanding people's definitions of financial literacy.</li>
      <li>Understand user's current method for gaining financial literacy.</li>
      <li>
        Garner user perspectives on getting advice from social media such as
        YouTube.
      </li>
      <li>Understand what kind of solutions users will engage with.</li>
      <li>
        Understanding the kind of information people want to build wealth.
      </li>
      <li>
        Understand the relationship between monetary life and financial
        literacy.
      </li>
      <li>
        Understand the content needs that people are looking to engage with.
      </li>
    </ul>
    <b>Interview Hypothesis:</b>
    <ul>
      <li>
        People don’t seek knowledge outside of banking apps for financial
        advice; why?
      </li>
      <li>
        People with make more than 6 figures like social media knowledge more
        than those who did not because they have had financial knowledge
        acquisition modeled by their parents?
      </li>
      <li>
        People prefer to learn from people like them/from other humans instead
        of technology.
      </li>
      <li>
        Younger people have more knowledge on finding information than older
        people.
      </li>
    </ul>
    <b>Participant Overview:</b>
    <ul>
      <li>
        12 interview participants who are living paycheck to paycheck (>
        $75k/year).
      </li>
      <li><b>3</b> Male participants.</li>
      <li><b>9</b> Female participants</li>
      <li><b>2</b> participants over 45 years of age.</li>
      <li><b>10</b> participants under 45 years of age.</li>
    </ul>
    <img
      src="assets/fin-lit/interview_affinity.png"
      alt="interview affinity diagramming "
    />
    <div class="text-center">
      <p>
        View the interview protocol
        <a
          href="https://docs.google.com/document/d/1HI4-qRYRDehj3BLhtxEiDty9cmU9HsuBppELbHuxeZg/edit?usp=sharing"
          target="_blank"
          >here.</a
        >
        <br />
        View the notes and transcripts
        <a href="https://tinyurl.com/chimeinterviewdocs" target="_blank">
          here.</a
        >
        <br />
        View the Codebook in the interview tab
        <a href="https://tinyurl.com/chimecodebook" target="_blank">here.</a>
      </p>
    </div>
    <b>Main findings:</b>
    <ul>
      <li><b>Personalization is Key</b></li>
      <ul>
        <li>
          Desire for their financial services to be more tailored to their
          needs.
        </li>
        <li>
          Some wished for budgeting tools to be more representative their
          specific life situations.
        </li>
        <li>
          Others wished that processes were more tailored to their goals, such
          as "If I am xyz age, what steps do I have to take to retire in 20
          years?"
        </li>
      </ul>
      <li><b>Keeping it Simple with Baby Steps</b></li>
      <ul>
        <li>
          Participants learned best when complex topics are explained in a
          simple way.
        </li>
        <li>
          Furthermore, participants learned best when someone else could explain
          to them subjects step-by-step in a simple manner.
        </li>
      </ul>
      <li><b>Various Sources of Trust and Distrust</b></li>
      <ul>
        <li>
          Credibility is determined by qualifications and evidence-based
          sources.
        </li>
        <li>
          Misinformation on social media is a big concern, prompting
          interviewees to distrust finance advice on social media platforms.
        </li>
        <li>
          Interviewees were more likely to trust people they personally knew
          over strangers online.
        </li>
      </ul>
      <li><b>Numerous Obstacles to Gain Wealth and Learn Finance</b></li>
      <ul>
        <li>
          Participants struggled with issues, such as being immigrants to the
          USA, inconsistent paychecks, precarious living situations, age
          barriers, and external stressors.
        </li>
      </ul>
    </ul>

    <h3>Expert Interview</h3>
    <p>
      Although we gained an understanding of the user needs through participant
      interviews, we wanted to see if there was a difference between what users
      thought they wanted to gain financial literacy, versus what financial
      experts thought was essential for gaining financial literacy.
    </p>
    <b>Interview Goals:</b>
    <ul>
      <li>
        Understand the problem space to make valuable solutions for our users
      </li>
      <li>Learn the best ways to teach finances</li>
      <li>
        Gain understanding on what would benefit those making under $75,000 a
        year
      </li>
    </ul>
    <b>Interview Findings: </b>
    <ul>
      <li>The best way to teach finance is keeping it real</li>
      <ul>
        <li>Give personalized examples of a person's financial situation</li>
      </ul>
      <li>Teach in different ways from quizzes, videos, to case studies</li>
      <ul>
        <li>Avoid math while teaching! Use visuals!</li>
      </ul>
      <li>People must know employer benefits and retirement matching</li>
      <li>
        Drill in the importance of compound interest: the good and the bad
      </li>
      <li>Exploring what resources exist for free</li>
      <li>Do not go into stocks & bonds</li>
      <ul>
        <li>Focus on finding ways to save</li>
        <li>Mutual funds and ETFs are tertiary goals</li>
      </ul>
    </ul>
    <p class="text-center">
      View the notes from the professor interview
      <a href="https://tinyurl.com/profinterview" target="_blank">here. </a>
    </p>

    <h3>Personas</h3>
    <p>
      We created two personas to represent the user populations that we
      encountered during our interviews: Mark and Laura. Initially, we intended
      for both Mark and Laura to be primary users, but during our research, we
      noticed that a lot of the pain points for our older and younger users were
      similar. After a meeting with our stakeholders, we decided to focus our
      design in intervening earlier so that the newer users don't make the same
      mistakes as their older counterparts. Because our focus was on Mark, we
      decided to focus a large portion of our design motivation around the goal
      of understanding and paying off student debt.
    </p>
    <div class="d-flex flex-column justify-content-between">
      <div class="horiz">
        <img src="assets/fin-lit/mark.png" alt="Mark Persona" />
      </div>
      <div class="horiz">
        <img src="assets/fin-lit/laura.png" alt="Laura Persona" />
      </div>
    </div>
    <h3>User Journey Maps</h3>
    <p>
      After creating personas, we made two user journey maps to highlight the
      experiences that our users have with financial literacy. Mark's journey
      map has a huge focus on social media financial literacy, advice from
      parents, and stress about money along with a lack of understanding of how
      credit and debit work. Laura's journey has a focus on providing for her
      family, gaining skills to make money, protecting her finances from
      overdraft fees, and getting advice from her bank about her finances.
    </p>
    <div class="d-flex flex-lg-row flex-column justify-content-between">
      <div class="horiz">
        <img src="assets/fin-lit/mark_jm.png" alt="Mark Map" />
      </div>
      <div class="horiz">
        <img src="assets/fin-lit/laura_jm.png" alt="Laura Map" />
      </div>
    </div>
    <h2>Ideation</h2>
    <p>
      After our user research, we began to create problem statements and design
      goals to center our ideation.
    </p>
    <b>Problem Statements</b>
    <ul>
      <li>
        Users often feel overwhelmed, lost, or intimidated knowing how to start
        learning about finances
      </li>
      <li>Users lack the motivation to practice financial literacy</li>
      <li>
        Financial practices like 401k or savings are abstract and can be
        difficult for users to visualize the benefits
      </li>
      <li>
        Users are given advice that is not impactful to their current experience
        and suffers from "shouldism" for example "I should be investing" or "I
        should be in crypto"
      </li>
    </ul>
    <b>Design Goals</b>
    <ul>
      <li>
        Balance giving the user impactful knowledge, but also allowing them to
        explore various financial interests. We call this Free-range design vs.
        Paternal design.
      </li>
      <li>
        Leave users feeling confident in their financial knowledge and the
        progress they are making in their learning
      </li>
      <li>Provide valuable information to help them here and now</li>
      <li>
        Clearly present information that is valuable to them using visual
        representations
      </li>
      <li>Create a trusting and nonjudgemental learning environment</li>
    </ul>
    <p>
      After coming together to create these design goals, it was time to start
      generating ideas about what tools might be helpful in the creation of a
      financial literacy application. To address this, we went through several
      design activities to scope out our solution space, this involved: crazy
      8's, storyboarding, and the creation of workflows.
    </p>
    <h3>Crazy 8's</h3>
    <p>
      To begin our ideation, we wanted to generate as many ideas a possible by
      doing crazy 8s. We each quickly sketched 8 screens on our own, and then
      posted our work in the team FigJam. We then divided up each crazy-8's
      document into individual screens and grouped the screens based on
      functionality to decide where the team had the most overlap in their
      ideation through the categories: onboarding, progress dashboard, learning
      simulation, lesson layout, testing content, resource locators, resource
      helpers, and financial calculators. With this overview of ideas, we then
      entered the storyboarding phase, in which we took these ideas and thought
      about what those might look like for our users.
    </p>
    <img src="assets/fin-lit/crazy8.png" alt="crazy 8s" />
    <h3>Storyboards</h3>
    <p>
      Following our crazy 8's and a review of user research from previous weeks,
      we created storyboards to explore how potential problem-solving ideas
      would be accessed by our personas.
    </p>
    <img src="assets/fin-lit/storyboards.png" alt="storyboards" />
    <p>
      <b>Results:</b>
      Storyboarding helped us identify how we can fit key features into an app
      format. It also helped us imagine when and where users would need these
      features. This gave us some direction in our Information Architecture,
      helping us decide which ideated features to include, as well as in what
      order these features should appear in our application's hierarchy.
    </p>
    <h3>User Workflows</h3>
    <p>
      We began our wireframes with the design kit created by Chime. For this
      first iteration, we focused on onboarding processes, knowledge checks and
      lesson plans. The workflow diagrams served as the blueprint for our
      wireframes. However, as we prototyped more and discussed as a group, we
      later changed certain aspects of our design. Critiquing the workflow
      diagrams as a group led us to refine ideas more and to decide which ideas
      were supported by our codebook and persona's needs.
    </p>
    <img src="assets/fin-lit/workflow.png" alt="storyboards" />
    <h2>Design and Iteration</h2>
    <p>
      In the design of our final application, we went through three rounds of
      iteration, which are highlighted below. In this process, we were able to
      refine our scope, and focus on features that would be the most helpful for
      our users!
    </p>
    <h3>Iteration 1: Onboarding and Lessons</h3>
    <p>
      We began our wireframes with the design kit created by Chime. For this
      first iteration, we focused on onboarding processes, knowledge checks and
      lesson plans.
      <img
        class="screen"
        src="assets/fin-lit/phone_verify.jpg"
        alt="phone verification"
      />
      <b>Text Verification of User Identity </b>
    </p>

    <ul>
      <li>Make sure the user is real</li>
      <li>
        Allow users to access information and lessons from various platforms
      </li>
      <li>
        reduce the number of times the user has to enter demographic information
      </li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/basic_info.jpg"
      alt="demographic collection"
    />
    <b>Collecting Demographic Information</b>
    <ul>
      <li>Inform the delivery of a customized experience.</li>
      <li>
        Match the race/ethnicity of the presenter to the user to form that sense
        of trust.
      </li>
      <li>
        Enable recommendation of lessons and activities related to the user's
        needs.
      </li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/fin_acct.png"
      alt="finances overview"
    />
    <b>Linking Financial Accounts</b>
    <ul>
      <li>
        Link user's financial accounts in one place to get the most accurate
        overview of their finances.
      </li>
      <li>
        Address skepticism of linking accounts by allowing both account linkage
        and manual entry of information.
      </li>
    </ul>
    <img class="screen" src="assets/fin-lit/lifestyle.jpg" alt="lifestyle" />
    <b>Lifestyle and Habit Details</b>
    <ul>
      <li>
        Understand user lifestyle to make realistic learning recommendations to
        motivate continued learning.
      </li>
      <li>
        Allow multi-selection for the topics the user is interested in learning.
      </li>
      <li>
        Garner information about current financial hygiene habits to tailor
        lessons to improve current habits.
      </li>
    </ul>
    <img class="screen" src="assets/fin-lit/checkpoint.jpg" alt="quiz" />
    <b>Knowledge Check</b>
    <ul>
      <li>
        Eliminate repetitive lessons by determining user's current financial
        knowledge by assessing knowledge through an initial check-in.
      </li>
      <li>
        This check in quiz will contain a variety of questions across the wide
        range of topics offered within our curriculum.
      </li>
      <li>If the user wishes not to take this quiz, it is easy to skip.</li>
    </ul>
    <img class="screen" src="assets/fin-lit/lesson.jpg" alt="lessons" />
    <b>Lesson Learning</b>
    <ul>
      <li>Provide a clear visual path for users to start learning finances.</li>
      <li>
        Each item on the learning map covers one topic the user should learn.
      </li>
      <li>
        When a topic is clicked on, the user enters an overview of the sub-topic
        lesson plan
      </li>
      <li>
        Because people trust information from those they relate to, we intend to
        share relevant stories based on information shared in onboarding.
      </li>
      <li>
        Lessons are presented both in video format with a transcript that
        auto-scrolls, for accessibility.
      </li>
      <li>
        Each lesson is followed by short quizzes inspired by apps like Zogo and
        Duolingo
      </li>
      <li>
        The experience concludes with a celebration and a progress view of where
        they are on their personalized learning path.
      </li>
    </ul>
    <h3>User Test 1</h3>
    <p>
      Financial literacy is a very personal topic, and we wanted to see user
      responses to the features that we had created. We wanted to understand if
      our service was gathering information that was too personal.
    </p>
    <b>User group tested: </b>
    <ul>
      <li>User's who participated in our interview study.</li>
      <li>Those who were not interviewed, but still made under $75K/year.</li>
    </ul>
    <b>Method:</b>
    <ul>
      <li>
        Garnered feedback as we showed users a series of Figma screens all in a
        row.
      </li>
      <li>Talked through the onboarding process.</li>
      <li>Talked through the check your knowledge quiz.</li>
      <li>
        Talked through the selecting a lesson from the customized lesson
        roadmap.
      </li>
      <li>Talked through the completing the comprehension quiz.</li>
      <li>
        We plan to gather quantitative data, we do not believe at this step in
        the design process qualitative data will help up move forward.
      </li>
    </ul>
    <b>Features tested:</b>
    <ul>
      <li>Onboarding demographic, goal, and interests collection</li>
      <li>Quizzes</li>
      <li>Learning Activities</li>
      <li>Progress Tracking</li>
    </ul>
    <b> Method of Evaluation: </b>
    <ul>
      <li>We implemented a codebook to keep track of our qualitative data.</li>
      <li>
        Find the codebook in the "Test 1" tab
        <a
          href="https://docs.google.com/spreadsheets/d/1uD0Mw_Ws9D2BIf59etWQEPswTU7RNYzmS4Dga3LjVs8/edit?usp=sharing"
          target="_blank"
          >here.</a
        >
      </li>
    </ul>
    <b>Findings:</b>
    <ul>
      <li>
        The fidelity of our prototype was too high and caused us to get feedback
        irrelevant to our goal of getting feedback on the features we created.
        The findings below are relevant to our user testing goal for our first
        iteration.
      </li>
      <li>
        Users did not see value in an app that is primarily focused on quizzes
        and focusing on learning activities and which collected copious amounts
        of data, which seemed somewhat irrelevant, during the onboarding
        process.
      </li>
      <li>
        Users wanted simplicity and clear guidance on how to make financial
        decisions first, then the ability to learn about the why of the decision
        more if they so choose.
      </li>
      <li>User's want clear visuals of progress and current states.</li>
      <li>
        User's wanted to see a real copy and not lorem ipsum, without a real
        copy the concept was difficult to understand.
      </li>
    </ul>

    <h3>Iteration 2: Goals, Lessons and Tracking</h3>
    <p>
      After our user testing for or first iteration, we realized that our
      wireframes were too high in fidelity, and our design focus had been too
      focused on information collection and not on features that would provide
      value ot the user. So, we shifted gears to focus on goal setting and
      lessons.
    </p>
    <img
      class="screen"
      src="assets/fin-lit/explore2.png"
      alt="demographic collection"
    />
    <b>Explore: </b>
    <ul>
      <li>
        Give users financial education related to their current financial
        situation and needs.
      </li>
      <li>Search within lessons for specific lessons.</li>
      <li>
        Inspired by users feeling most comfortable googling financial advice and
        exploring on their own.
      </li>
      <li>Includes lessons based on user's financial needs.</li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/budget2.png"
      alt="demographic collection"
    />
    <b>Goal Setting feature:</b>
    <ul>
      <li>Visually set goals and track progress.</li>
      <li>Recommend realistic goals for user.</li>
      <li>
        Allow users to visualize how various $ amounts affect their lives.
      </li>
      <li>Suggest content to follow up with once completing a goal.</li>
      <li>There were many iterations of this feature.</li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/lesson2.png"
      alt="demographic collection"
    />
    <b>Homepage </b>
    <ul>
      <li>Quickly see the current state at a glance</li>
      <li>Give users education within their finances</li>
    </ul>
    <h3>User Test 2</h3>
    <p>
      After our design iteration in which we changed the flows which we created,
      and we wanted to see if the information to value ratio turned out better
      on this round.
    </p>
    <b>Goals:</b>
    <ul>
      <li>Does our idea make sense?</li>
      <li>
        Does the flow provide them the needed information to get to the end of
        their task?
      </li>
      <li>
        Learn what they would change and what they like about the flows and why?
      </li>
    </ul>
    <b>User Test Details</b>
    <ul>
      <li><b>4</b> User Testing Co-design Sessions.</li>
      <li>
        All testers made under 75K due to their alignment with our primary user
        group.
      </li>
    </ul>
    <b>Method:</b>
    <ul>
      <li>
        Presented users with the scenario of our main user persona, who is
        trying to figure out financial aid after his aid has been revoked.
      </li>
      <li>
        Showed users multiple Figma pages for the following four flows
        associated with each interaction we designed.
      </li>
      <ul>
        <li>
          <b>Task 1:</b>
          From your account, learn information about student loans and how you
          can change your habits to pay off your loans.
        </li>
        <li>
          <b>Task 2:</b>
          Look through available lessons to find a lesson about passive income.
        </li>
        <li>
          <b>Task 3: </b>
          From the money management dashboard, enter the information to track
          your student debt repayment.
        </li>
        <li>
          <b>Task 4:</b>
          Goal learning: From the dashboard, see how you would approach
          accomplishing paying off student debt.
        </li>
      </ul>
    </ul>
    <b>Method of Evaluation:</b>
    <ul>
      <li>
        We implemented a codebook to keep track of our qualitative data see
        example below.
      </li>
      <li>
        Find the codebook in the "Test 2" tab
        <a
          href="https://docs.google.com/spreadsheets/d/1uD0Mw_Ws9D2BIf59etWQEPswTU7RNYzmS4Dga3LjVs8/edit?usp=sharing"
          target="_blank"
          >here.</a
        >
      </li>
    </ul>
    <b>Findings:</b>
    <ul>
      <li>
        Personalization was a good idea, but the examples needed to be even more
        personalized, such as providing real numbers instead of # signs.
      </li>
      <li>
        Users didn’t know where to start due to lack of visual hierarchy and
        overwhelming amount of information from the lessons.
      </li>
      <li>
        Showing progress towards goals, and using goals as a motivator, were
        helpful in keeping users engaged and motivated.
      </li>
      <li>
        Simplification was recommended among Budgeting Management Overview
        screens.
      </li>
      <li>
        Users were confused by the lack of cohesion between the pages in these
        flows, and wanted to see navigation and overviews of the features that
        were actually available.
      </li>
    </ul>
    <h3>Iteration 3: Goals, Lessons & Tracking</h3>
    <p>
      After user testing, our next iteration had a huge focus on adding cohesion
      between the screens, with the hopes of reducing previous confusion felt by
      the users.
    </p>
    <img
      class="screen"
      src="assets/fin-lit/home3.png"
      alt="demographic collection"
    />
    <b>Home Page</b>
    <ul>
      <li>
        This iteration adds a navigation bar to connect home, explore lessons
        and settings.
      </li>
      <li>
        Account and Goals are tabs on the homepage. On Accounts, users different
        banking accounts that show their total cash in each account.
      </li>
      <li>
        On goals, users can see visuals of their projected goal, and can use
        sliders with personalized recommendations to customize their goal
        setting. Users can add funds towards their payoff goal and can track
        payments or “funds added” towards the goal.
      </li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/set_goal3.png"
      alt="demographic collection"
    />
    <b>Set Goal</b>
    <ul>
      <li>
        Goal setting is connected tab to the homepage and allows users to add
        goals for savings, spending, debt, and custom goals
      </li>
      <li>
        Connected goals to accounts through linked account, credit card, or
        manual entry to allow for lots of personalization and choice
      </li>
      <li>
        Once a goal has been added, users can see visuals of their projected
        goal, and can use sliders with personalized recommendations to customize
        their goal setting.
      </li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/pay_rough3.png"
      alt="demographic collection"
    />
    <b>Make Payment </b>
    <ul>
      <li>
        Once a goal has been added, users can see visuals of their projected
        goal, and can use sliders with personalized recommendations to customize
        their goal setting.
      </li>
      <li>
        After a payment has been placed, the user is directed back to the goal
        overview page
      </li>
    </ul>
    <img
      class="screen"
      src="assets/fin-lit/learn_rough3.png"
      alt="demographic collection"
    />
    <b>Explore</b>
    <ul>
      <li>
        Lessons were a separate page for users to learn financial topics of
        interest
      </li>
      <li>
        There are 2 tabs, all lessons and completed lessons so users can see
        what lessons they have already completed
      </li>
      <li>Users can search through the different lessons</li>
      <li>Users are recommended lessons based on their goals and finances</li>
      <li>
        Users can resume lessons, review completed lessons, or start new lessons
      </li>
      <li>
        Within a lesson are submodules and a hands-on learning activity linked
        to a user’s personal finances
      </li>
      <li>
        Users can hover over bolded terms to see definitions in paragraph text
      </li>
      <li>
        When users finish a lesson, they are shown a suggested lesson as a next
        step
      </li>
    </ul>
    <h3>Chime Feedback & Critique</h3>
    <p>
      We decided to hold a critique session with Chime after previous positive
      experiences with the product that comes out of their feedback from our
      user tests. Our goal for this was to get feedback about our design from
      our mentors at Chime who have a better understanding of designing for the
      context of those who are living paycheck to paycheck. We walked through
      our second iteration of low fidelity wireframes during our mentor feedback
      meeting, asking them for feedback about the design, and advice for better
      ways to motivate.
    </p>
    <b>The features we went over were:</b>
    <ul>
      <li>Navigation</li>
      <li>Home paged</li>
      <li>Goal setting</li>
      <li>Explore lessons</li>
    </ul>
    <b>Findings: </b>
    <ul>
      <li>
        Simplification was key. Avoid showing users information excess
        information, but rather show them short and simple snippets of
        information.
      </li>
      <li>
        Make screens more actionable to help make learning and goal setting
        easier and more engaging, and add contextualization of information in
        these interactions.
      </li>
      <li>Visual hierarchy and showing more visuals under goals.</li>
      <li>
        Renaming certain features to make more sense and add empowerment to
        users, such as renaming.
      </li>
      <li>
        Use of social proof to show users where they fall within the realm of
        finances when compared to their peers.
      </li>
    </ul>
    <h2>Final Prototype and Testing</h2>
    <p>
      In our final design and user testing, we focused on 3 main flows: the flow
      through lessons, the flow through setting a goal, and the flow for making
      a payment towards a goal.
    </p>
    <b> Explore Lessons </b>
    <img src="assets/fin-lit/final_lesson.png" alt="" />
    <b>What Worked Well:</b>
    <ul>
      <li>Applying one's learning to real life applications.</li>
      <li>Toggle button for Learn and Review.</li>
      <li>Confetti upon completion.</li>
      <li>Visuals within submodules such as interactive graphs and charts.</li>
    </ul>
    <b>What Can Improve:</b>
    <ul>
      <li>Adding more "pizzaz" to Skill Builder Overview.</li>
      <li>Adding more blurbs about the submodules.</li>
      <li>Visual hierarchy of information and more consistency.</li>
      <li>Pagination to indicate scrolling within a submodule.</li>
      <li>
        Making definitions more clear as testers didn't click on bolded words.
      </li>
    </ul>
    <b>Long Term Goal Setting </b>
    <img src="assets/fin-lit/final_goal_cat.png" alt="" />
    <b>What Worked Well:</b>
    <ul>
      <li>Simple process with "Add Goal +" button.</li>
      <li>"Enter Debt Manually" was great for transparency and trust.</li>
      <li>Filtering by goal type.</li>
    </ul>
    <b>What Can Improve: </b>
    <ul>
      <li>We actually did not have a way to pay goals within 10 years.</li>
      <li>Incorporating time frames to pay off debt related goals.</li>
      <li>
        Changing look of the dropdown as testers thought it was a checkmark.
      </li>
    </ul>
    <b>Long Term Goal Payment </b>
    <img src="assets/fin-lit/pay_goal_final.png" alt="" />
    <b>What Worked Well:</b>
    <ul>
      <li>Interactive "Monthly Repayment" slider.</li>
      <li>
        "What do these numbers mean?" was great for transparency and trust.
      </li>
      <li>Confirmation banner with confetti.</li>
    </ul>
    <b>What Can Improve:</b>
    <ul>
      <li>Calendaring and repayment dates can be more intuitive</li>
      <li>Changing language used to be more direct and assertive</li>
      <li>"Estimated Total" can become "Total Loan Cost" for more certainty</li>
      <li>More transparency regarding payment and where it goes</li>
      <li>Formatting and conventions for banking numbers and dates</li>
    </ul>
    <p>
      Overall, this user testing session garnered at 4/5 in overall usability
      from 4 user testing sessions.
    </p>
    <h2>Next Steps</h2>
    <p>
      We came really far in our design ideas over the course of our project, and
      went through several iterations and transitions along the way. One of the
      biggest areas for growth that we came across in our end product was the
      quality and depth of the lessons. To better develop these lessons and
      ideas, an important next step would be to focus on UX writing and content
      strategy to more effectively present the financial literacy content to our
      users. Although the content we present is helpful, it may not be portrayed
      in the cleanest way, and there is definitely room for improvement.
    </p>
    <p>
      We also ended the project with a user testing session. Although we got
      decent reviews from our users, there was still a large amount of feedback
      which would help us improve our application. I am most excited about the
      inclusion of how much money has been put towards your goal at the top of
      the goal details page to show how much progress has been made towards the
      goal to motivate the user to make more progress towards their goals. There
      were improvements to be made to the lessons within our application.
      Although the content was solid, the layout could use more reworking. We
      would add more color and engagement factors within the application, and
      would work to make the screens full of less text.
    </p>
    <p>
      If we were continued with this project, we would also want to create more
      screens and flows for our user's learning experience such as the
      prototyping out the savings flow, budgeting flow, custom goal flow, and
      more content for the lessons that are available in the skill builder
      section. We then, obviously, would perform more user testing and
      iterations upon our product with users who are working paycheck to
      paycheck.
    </p>
    <h2>Reflection</h2>
    <p>
      This capstone project was a great experience. I was worried at the start
      of this project to be designing for financial literacy when I really did
      not know very much about financial literacy myself. During our interview
      process, our intended user groups had just about as much financial
      literacy awareness as we did. One of the biggest barriers, especially
      among the college students, was the lack of stable income as a student.
      Our interviews with the older generation of users, had similar insights
      about what happens when you neglect financial literacy, and it also gave
      me insight into the pains associated with debt, especially for those in
      lower incomes. It was in our interview with the financial professor at UW
      that we were able to start to learn financial literacy, which was a key
      facet to having successful designs. Personally, I talked to my dad about
      financial literacy for the first time during this project. He seemed
      really excited that I was interested in learning financial literacy, and
      I'm grateful that this project allowed me to increase my financial
      literacy skills. It also motivated me to continue my own financial
      literacy journey after this project is complete.
    </p>

    <div
      class="
        d-flex
        flex-column flex-md-row
        text-center
        justify-content-center justify-content-lg-end
      "
    >
      <router-link to="/on-trak"
        ><b>Next Project: </b>OnTrak Troubleshooting</router-link
      >
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
<style scoped style="scss">
.chart {
  padding: 0;
}
/*
.horiz {
  display: flex;
  flex-flow: column;
  width: 49%;
}*/
@media screen and (max-width: 992px) {
  .horiz {
    display: flex;
    flex-flow: column;
    width: 100%;
    padding-bottom: 10px;
  }
}

.c {
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
}

.screen {
  display: block;
  width: 80%;
  margin: auto;
}
</style>