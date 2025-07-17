<template>
  <PortfolioPiece>
    <!--<div class="cover-img d-flex flex-column">
      <img src="/assets/tiles/crochet-buddy.png" alt="DCI" />
    </div>-->
    <div class="title">
      <h1>Crochet Buddy</h1>
      <p>
        Exploratory prototyping for Crochet Buddy: an Internet of Things (IoT)
        device created to assist novice crochet hobbyists in the pursuit of
        beautiful yarn-craft.
      </p>
    </div>
    <hr />
    <p>
      In the Spring of 2020, near the start of the Novel Coronavirus Pandemic,
      I took up the art of crochet to fill the days. My earlier projects ended up 
      lopsided due to the difficulty I faced tracking stitches. To address this 
      problem, I designed Crochet Buddy is an Internet of Things (IoT) device 
      created to assist novice crochet hobbyists in their
      pursuit of beautiful yarn-craft. This project consisted of exploration in:
      analog prototyping, 3D modeling, Voice User Interface, and AI stitch
      tracking.
    </p>
    <img
      class="p-0"
      src="assets/crochet-buddy/sketch.png"
      alt="crochet buddy sketch"
    />

    <h2>Design Overview</h2>
    <p>
      The Crochet Buddy is a simple IoT device with a large impact on
      those who crochet. The physical device has two main components: an
      ergonomic handle and a camera facing the crochet hook’s neck which counts
      the number of stitches and tracks which type of stitches are being made. 
      The hook also has a pressure sensitive hook, which tracks the amount of 
      force exerted each time the user pulls on the stitch. The hook will 
      also vibrate when the user should stop pulling on the stitch, thus 
      enforcing a consistent pull, making the yarn-craft more consistent.
    </p>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/X2v73GxMAIo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <h2>Analog Prototype</h2>
    <p>
      The analog prototype for Crochet Buddy was made out of 3 ingredient clay
      (made with flour, water, and salt) as well as a crochet hook that I had
      lying around my room. I made the clay for the hook, and then wrapped it
      around my hook around to form a handle. I then took and extra bit of clay
      to figure out what the camera placement would look like. After the handle
      was formed, I took it off of my crochet hook, and baked it until the clay
      became sturdy. I then put the handle back on my crochet hook for user
      testing. The first handle iteration is shown below.
    </p>
    <img
      class="pt-0"
      src="assets/crochet-buddy/analog_1.jpeg"
      alt="crochet buddy sketch"
    />
    <p>
      I actually went through two prototypes while designing this hook. The
      first prototype turned out to be far too bulky and big, so I created a
      sleeker and smaller handle, which ended up being the better of the two, as
      shown below.
    </p>
    <img
      class="pt-0"
      src="assets/crochet-buddy/analog_2.jpeg"
      alt="crochet buddy sketch"
    />
    <b>Analysis</b>
    <p>
      The grip that I created for my prototype makes holding the crochet hooks
      that I have so much more comfortable, that I actually find myself using
      the lo-fi prototype handle when I’m planning on crocheting for longer
      periods of time. This is a testament to the biggest feature that I was
      using my analog model to test for: comfort and grip positioning.
    </p>
    <p>
      During the analysis phase, I also took a video of what the camera would
      see. This was to see if it was even possible to use machine learning to
      track stitches in this way. It did prove that there is a distinct
      possibility that machine learning for stitch counting in this way is a
      distinct possibility.
    </p>
    <h2>3D Prototyping</h2>
    <p>
      The 3D model of Crochet Buddy was made in Onshape: a collaborative CAD
      modeling program. I began the model as a sketch the front plane. This
      sketch contained a half view of the side profile of Crochet Buddy’s main
      form. As you can see, the sketch captures the rounded features of crochet
      buddy which make it more comfortable to use.
    </p>
    <img
      src="assets/crochet-buddy/3d_sketch.png"
      alt="line sketch for crochet buddy"
    />
    <p>
      Next, I use the revolve feature for the above sketch, to create the base
      for Crochet Buddy. this lead to a very simple three-dimensional figure
      that works as the base for Crochet Buddy.
    </p>
    <img
      src="assets/crochet-buddy/3d_round.png"
      alt="revolve for crochet buddy"
    />
    <p>
      Once the main 3D form for Crochet Buddy was completed, I created a new
      sketch, again on the front plane. These sketches are on the same plane to
      ensure that the sketches overlap and can actually be used for extrudes.
    </p>
    <img
      src="assets/crochet-buddy/3d_cut.png"
      alt="sketch for crochet hook cut"
    />
    <p>
      In order to create the cutout that makes up the hook for Crochet Buddy, I
      used an extrude cut. The extrude cut took the material from the triangle
      that I had sketched away from the hook. The more angular slanted nature of
      the cutout for Crochet Buddy is based off of the angular style of Susan
      Bates crochet hooks, which are objectively the easiest to work with. Most
      others are too rounded, which makes it difficult to capture the loops that
      are being pulled through to create a stitch.
    </p>
    <img
      src="assets/crochet-buddy/3d_clear.png"
      alt="cut for crochet buddy hook"
    />
    <p>
      For the third time, I created a sketch on the front plane. This time, it
      was nestled against the thick grip section of the handle, on top of the
      beginning of the hook. This is the ideal placement because it is out of
      the way for the user, and it has a pretty solid view down the neck of the
      hook, which is the vantage point used for counting and tracking stitches.
    </p>
    <img
      src="assets/crochet-buddy/3d_camera.png"
      alt="sketch for crochet buddy camera"
    />
    <p>
      To create the camera housing, based off of the initial sketch, I used an
      extrude on the square. I extruded both to the left and to the right with
      the sketch on the front plane as my “center point.” This allowed me to
      make the camera housing evenly centered on the hook so that the camera
      would have the clearest view down the hook’s neck.
    </p>
    <img
      src="assets/crochet-buddy/3d_cam_col.png"
      alt="extrude for crochet buddy camera"
    />
    <p>
      Finally, to make the the 3D model more aesthetically pleasing and appear
      to be more realistic, I used the appearance feature of Onshape to apply a
      blue color to the hook part of Crochet Buddy. This blue color mimics the
      standard color for 5mm crochet hooks.
    </p>
    <img
      src="assets/crochet-buddy/3d_color.png"
      alt="final model for crochet buddy"
    />
    <div class="text-center">
      <a
        href="https://cad.onshape.com/documents/6fe367458e9e7df097cd1b08/w/c87550b82174ec9333dfbd76/e/b54d1e8d204f7130c8ada965"
        target="_blank"
        >You can view the 3D model here.</a
      >
    </div>
    <b>Analysis</b>
    <p>
      Because I’ve taken classes on CAD modeling before, I am fairly content
      with the decisions that I made to create the 3D model for Crochet Buddy.
      The 3D model created in Onshape resembles my analog model very nicely. The
      only real downfall of my prototype is that it is not fully constrained.
      But, as you can see, the dimensions of the model appear to be correct.
    </p>
    <p>
      Overall, I am incredibly proud of the 3D model for Crochet Buddy. but
      there are definitely still areas for improvement. In the future, I would
      probably do some deeper multi-piece assemblies with constraints in the
      button interactions. I would include a button that would be used to
      “indicate the end of the first line of stitches, and any other changes
      made by the user while working on their piece. This would be located on
      the trip of the handle. I would also possibly add a long thin button going
      down the entire length of the hook, that would actually be what was used
      to gauge the pressure in the pulls for each stitch.
    </p>
    <h2>Voice User Interface</h2>
    <p>
      Although Crochet Buddy has functionality for a crotchetier of any skill
      levels, this iteration focuses on Crochet Buddy as a resource for total
      beginners to learn crochet with real time feedback. Never again will a
      novice crochetier be left wondering if they missed a step, misunderstood
      the directions, or did something wrong. The design for the educational
      aspect of crochet buddy has two main aspects:
    </p>
    <ul>
      <li>
        An updated analog prototype which includes the ability to attach an
        actual web camera to Crochet Buddy.
      </li>
      <li>
        The VUI which prompts users step by step how to crochet, by explaining
        the steps to make a variety of stitches.
      </li>
    </ul>
    <b>Goal</b>
    <p>
      From the start of my exploration into the development of Crochet buddy, I
      had the idea in my head that novice a crochetier would be able to use it
      as a platform to learn crochet, and to follow along with patterns from the
      internet. The goal of this iteration is to gauge both the usability and
      feasibility of learning using only a VUI alone, albeit one paired with
      stitch tracking capabilities.
    </p>
    <b>Analog Prototype</b>
    <p>
      The analog model of Crochet Buddy followed a similar form to the original
      Crochet Buddy hook. The biggest factor taken into account in this model
      was the idea that I wanted the camera to have a full view of all of the
      hook that was open to yarn. But, the focal length of my web camera was
      super short, which meant that I had to cover a very large amount of the
      hook in order for the camera to have this full perspective of the yarn on
      the hook.
    </p>
    <img
      class="pt-0"
      src="assets/crochet-buddy/vui_analog.png"
      alt="analog model for crochet buddy vui"
    />
    <p>
      Although the appearance of the new hook and handle is a lot bulkier, due
      to my constraints, it definitely shows a very clean video feed. In the
      video below, watch a user alternate between a single and double croceht
      stitch from Crochet Buddy's perspective.
    </p>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/hkRtghFuSuI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="pb-1"
    ></iframe>

    <p>
      In future iterations (with a higher budget), I would look into smaller,
      wireless cameras with a wider lens to be integrated into a the hook in a
      cleaner fashion.
    </p>

    <b>VUI Interaction</b>
    <p>
      Below, you can find the scripts for the VUI interactions that have been
      crafted for each of the stitches for the crocheter to learn. This script
      goes over a whole tutorial, teaching the user the chain stitch, the double
      crochet, and the triple crochet. But, these can also be taught
      individually upon request.
    </p>
    <p><b>USER:</b> Crochet Buddy, I want a crochet tutorial.</p>
    <p><b>CB:</b> Start.</p>
    <b>Chain Stitch</b>
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vS57b9b9vWJZdVvoVI8aO0s2QSPVGMXMa1eADhaCUYHp60UC7zbC2Q-4Mo9CsFj7QMuqJVXrLycQiUD/embed?start=false&loop=false&delayms=3000"
      frameborder="0"
      width="100%"
      height="350"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      class="pb-1"
    ></iframe>
    <p>
      <b>CB:</b> To begin, let’s make a slip knot. Loop the yarn around your
      index finger, then grab some yarn from between the loop you made and the
      ball or skein of yarn and pull it through the loop. When you are ready,
      say next or say repeat to hear this step again.
    </p>
    <ul>
      <li><b>(1) USER:</b> Repeat.</li>
      <li>
        <b>CB:</b> Make a slip knot. Loop the yarn around your index finger,
        then grab some yarn from between the loop you made and the ball or skein
        of yarn and pull it through the loop. When you are ready, say next or
        say repeat to hear this step again.
      </li>
    </ul>
    <p><b>USER: </b>Next.</p>
    <p><b>CB: </b>Put your hook through the slip knot.</p>
    <p><b>USER: </b>(one loop on hook, from slip knot).</p>
    <p><b>CB: </b>Now, tightly loop the yarn around your crochet hook.</p>
    <ul>
      <li><b>(1) USER:</b> (has more than two loops on the hook).</li>
      <li>
        <b>CB:</b> Looks like you have too many loops on your hook. There should
        only be two loops on the hook.
      </li>
      <li><b>(2) USER:</b> (has only one loop on the hook).</li>
      <li>
        <b>CB:</b> Don’t forget to loop the yarn around the crochet hook. There
        should two loops on the hook.
      </li>
    </ul>
    <p><b>USER: </b> (has two loops on the hook).</p>
    <p>
      <b>CB: </b> Finally, pull your hook through the first slip knot, bringing
      the second loop you made with it.
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> (doesn’t pull the loop second loop through the first
        loop).
      </li>
      <li>
        <b>CB:</b> Looks like that stitch didn’t catch. When pulling through the
        slip knot, make sure that you the second loop gets caught in the hook
        and will be the next single loop on your hook.
      </li>
    </ul>
    <p>
      <b>CB: </b> You have now created your first chain stitch. Repeat this step
      11 more times to make a base chain of 12. To hear the stitch instructions
      again say “one more time.
    </p>
    <ul>
      <li><b>(1) USER:</b> One more time.</li>
      <li><b>CB:</b>Tightly loop the yarn around your crochet hook.</li>
      <li><b>(1) USER:</b> (has two loops on the hook).</li>
      <li>
        <b>CB:</b> Pull your hook through the first slip knot, bringing the
        second loop you made with it. Repeat *n* more times to complete the row.
      </li>
    </ul>
    <p>
      <b>USER: </b> (11 more stitches made, as tracked by crochet hooks camera).
    </p>
    <p><b>USER: </b> Awesome! Now you are ready to learn the double crochet.</p>
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vTrUwbOIrxTehJXhqRZ0AOlzxS4QWogSdwdtw03x1OpqoS06-NHpdFI7F_02FIWHfn34PimNmiayj3O/embed?start=true&loop=true&delayms=5000"
      frameborder="0"
      width="100%"
      height="315"
      class="pb-1"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
    <p>
      <b>CB:</b> Start by tightly looping the yarn around your crochet hook.
    </p>
    <ul>
      <li><b>(1) USER:</b> (has more than two loops on the hook).</li>
      <li>
        <b>CB:</b>Looks like you have too many loops on your hook. There should
        only be two loops on the hook.
      </li>
      <li><b>(2) USER:</b> (has only one loop on the hook).</li>
      <li>
        <b>CB:</b> Don’t forget to loop the yarn around the crochet hook. There
        should be two loops on the hook.
      </li>
    </ul>
    <p><b>USER:</b> (has two loops on the hook).</p>
    <p>
      <b>CB:</b> Now, for the first stitch only, take your hook and put it
      through the third chain away from the hook. On the rest of your stitches,
      it will be the chain next to your last stitch.
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> (wraps string around, instead of putting it through the
        chain).
      </li>
      <li>
        <b>CB:</b>Looks like you wrapped the yarn instead of going through a
        chain.
      </li>
      <li><b>(2) USER:</b>(puts the hook in the wrong chain).</li>
      <li>
        <b>CB:</b> Looks like you hit the wrong chain. There should be two
        chains between the first and third loop on your hook.
      </li>
    </ul>
    <p><b>USER:</b> (has three loops on the hook).</p>
    <p>
      <b>CB:</b> Now pull the loop closest to the hook mouth through the two
      loops between the first and last loop on the hook.
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> (pulls through too many loops, less than 2 loops on
        hook).
      </li>
      <li>
        <b>CB:</b> Looks like you pulled through too many loops. There should be
        2 loops on the hook now. Pull out this stitch and say “restart stitch”
        (which just goes back to the top of 4.2)
      </li>
      <li>
        <b>(2) USER:</b>(only pulls through one loop, three loops on hook).
      </li>
      <li>
        <b>CB:</b> Looks like you didn’t pull through enough. Pull through the
        loop second closest to the hook. There should be three loops on the hook
        now.
      </li>
    </ul>
    <p><b>USER:</b> (has two loops on the hook).</p>
    <p><b>CB:</b> Once again, tightly loop the yarn around the crochet hook.</p>
    <ul>
      <li><b>(1) USER:</b> (has more than three loops on the hook).</li>
      <li>
        <b>CB:</b> Looks like you have too many loops on your hook. There should
        only be three loops on the hook.
      </li>
      <li><b>(2) USER:</b>(has less than three loop on the hook).</li>
      <li>
        <b>CB:</b> Looks like you don’t have enough loops on your hook. There
        should be three loops on the hook.
      </li>
    </ul>
    <p><b>USER:</b> (has three loops on the hook).</p>
    <p>
      <b>CB:</b> Now pull the loop closest to the hook mouth through the other
      two loops on the hook.
    </p>
    <ul>
      <li><b>(1) USER:</b> (has more than three loops on the hook).</li>
      <li>
        <b>CB:</b> Looks like you have too many loops on your hook. There should
        only be three loops on the hook.
      </li>
      <li><b>(2) USER:</b>(has less than three loop on the hook).</li>
      <li>
        <b>CB:</b> Looks like you don’t have enough loops on your hook. There
        should be three loops on the hook.
      </li>
    </ul>
    <p><b>USER:</b> (has three loops on the hook).</p>
    <p><b>CB:</b> Once again, tightly loop the yarn around the crochet hook.</p>
    <ul>
      <li><b>(1) USER:</b> (has more than four loops on the hook).</li>
      <li>
        <b>CB:</b> Looks like you have too many loops on your hook. There should
        only be four loops on the hook.
      </li>
      <li><b>(2) USER:</b>(has less than four loop on the hook).</li>
      <li>
        <b>CB:</b> Looks like you don’t have enough loops on your hook. There
        should be four loops on the hook.
      </li>
    </ul>
    <p><b>USER:</b> (has four loops on the hook).</p>
    <p>
      <b>CB:</b> Now pull the loop closest to the hook mouth through the two
      loops between the first and last loop on the hook.
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> (pulls through too many loops, less than 2 loops on
        hook).
      </li>
      <li>
        <b>CB:</b> Looks like you pulled through too many loops. There should be
        2 loops on the hook now. Pull out this stitch and say “restart stitch”
        (which just goes back to the top of Double Crochet).
      </li>
      <li>
        <b>(2) USER:</b> (only pulls through one loop, three loops on hook).
      </li>
      <li>
        <b>CB: </b> Looks like you didn’t pull through enough. Pull through the
        loop second closest to the hook. There should be three loops on the hook
        now.
      </li>
    </ul>
    <p><b>USER:</b> (has two loops on the hook).</p>
    <p><b>CB:</b> Once again, tightly loop the yarn around the crochet hook.</p>
    <ul>
      <li>
        <b>(1) USER:</b> (pulls through too many loops, less than 2 loops on
        hook).
      </li>
      <li>
        <b>CB:</b> Looks like you pulled through too many loops. There should be
        2 loops on the hook now. Pull out this stitch and say “restart stitch”
        (which just goes back to the top of Double Crochet).
      </li>
      <li>
        <b>(2) USER:</b> (only pulls through one loop, three loops on hook).
      </li>
      <li>
        <b>CB: </b> Looks like you didn’t pull through enough. Pull through the
        loop second closest to the hook. There should be three loops on the hook
        now.
      </li>
    </ul>
    <p><b>USER:</b> (has three loops on the hook).</p>
    <p>
      <b>CB:</b> Now pull the loop closest to the hook mouth through the other
      two loops on the hook.
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> (pulls through too many loops, less than 1 loops on
        hook).
      </li>
      <li>
        <b>CB:</b> Looks like you pulled through too many loops. There should be
        2 loops on the hook now. Pull out this stitch and say “restart stitch”
        (which just goes back to the top of Double Crochet).
      </li>
      <li>
        <b>(2) USER:</b> (only pulls through one loop, two loops on hook).
      </li>
      <li>
        <b>CB: </b> Looks like you didn’t pull through enough. Pull through the
        loop second closest to the hook. There should be three loops on the hook
        now.
      </li>
    </ul>
    <p><b>USER:</b> (has one loops on the hook).</p>
    <p>
      <b>CB:</b> Congratulations. You’ve completed your first double crochet. To
      get familiar with this stitch, repeat it 9 more times until the end of
      your row. Remember, the next chain that you put your hook through should
      be the one right next to your last stitch. To hear the stitch instructions
      again say “one more time.”
    </p>
    <ul>
      <li>
        <b>(1) USER:</b> One more time.
      </li>
      <li>
        <b>CB:</b> Tightly loop the yarn around your crochet hook.
      </li>
      <li>
        <b>USER:</b> (has two loops on the hook).
      </li>
      <li>
        <b>CB: </b> Now, take your hook and put it through the chain closest to the last stitch you made.
      </li>
       <li>
        <b>USER:</b> (has three loops on the hook).
      </li>
      <li>
        <b>CB: </b> Once again, tightly loop the yarn around the crochet hook.
      </li>
       <li>
        <b>USER:</b> (has four loops on the hook).
      </li>
      <li>
        <b>CB: </b> Now pull the loop closest to the hook mouth through the two loops between the first and last loop on the hook.
      </li>
       <li>
        <b>USER:</b> (has two loops on the hook).
      </li>
      <li>
        <b>CB: </b> Once again, tightly loop the yarn around the crochet hook.
      </li>
       <li>
        <b>USER:</b> (has three loops on the hook).
      </li>
      <li>
        <b>CB: </b> Now pull the loop closest to the hook mouth through the other two loops on the hook.
      </li>
      <li>
        <b>USER:</b> (has one loops on the hook).
      </li>
      <li>
        <b>CB: </b> Congratulations. You’ve completed your Xth double crochet. To get familiar with this stitch. To hear the stitch instructions again say “one more time."
      </li>
    </ul>
    <p><b>USER:</b> (reaches 9 more double crochets).</p> 
    <p><b>CB:</b> Awesome! You have learned the double crochet. You are now at the point where you can start making crochet items!</p>
    <div class="text-center">
      <a
        href="https://docs.google.com/document/d/1sw-pY2WbI3VCdQqk_Mk5MY1IYT0yUQpTpH7eHamClxk/edit?usp=sharing"
        target="_target"
        >You can view the document with all the VUI scripts here.</a
      >
    </div>
    <b>Demo</b>
    <p>
      The final aspect of Crochet Buddy was the demo video, which showcases the
      VUI and stitch tracking camera working together to deliver an easy and
      seamless way to learn crochet!
    </p>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/pvUAqp3lwj4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <b>Evaluation</b>
    <p>
      When I was initially thinking about Learning with Crochet Buddy, I wanted
      to include a Graphical User Interface (GUI) with the VUI so that the user
      would be able to see what they are supposed to be doing, in addition to
      hearing it from the VUI, while they are doing it. But, I also wanted to
      see how feasible it would be to learn Crochet by voice alone. To test the
      VUI’s effectiveness on it’s own, I ran a VUI usability test with my mom
      over Zoom. Because the Crochet Hook that my mom was using was poorly made
      and almost impossible to use, we decided to skip over the triple crochet
      section of the tutorial script.
    </p>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/02jf-K-xQZQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p>
      The main findings from this evaluation was that knowing the number of
      stitches that need to be on the hook is important information for the
      user, when they are learning any crochet stitch, even if Crochet Buddy is
      tracking it for them. It seems to be critical to the learning process for
      the user to either have a view of what the state of the yarn should look
      like as a picture, or to know the number of loops that should be on the
      hook at any given time.
    </p>
    <p>
      It also became incredibly apparent that in any future iterations of
      Crochet Buddy it is important to only use the
      <a
        href="https://www.amazon.com/Susan-Bates-Silvalume-Crochet-Pouch/dp/B000XZYISM"
        target="_blank"
        >Susan Bates Hooks</a
      >, which are the most well loved hooks in the world of crochet. The other
      generic crochet hooks just did not work very effectively, and made it
      incredibly difficult for my mother to even attempt the steps Crochet Buddy
      was giving her.
    </p>

    <b>Analysis</b>
    <p>
      Although the analog prototype shows how effective the vantage point of
      having a camera embedded in the hook of Crochet Buddy’s handle is, the web
      camera that I used for this analog prototype proved to be bulky and had a
      very narrow view point. The bulky clip on the camera made it very
      difficult to hold the analog prototype, while the narrow camera angle made
      it so that there could only be a very small portion of the hook open for
      yarn in order for the camera to view all the loops on the hook.
    </p>
    <p>
      The next steps in furthering the Crochet Buddy analog design would be the
      use of a smaller camera with a wider lens that does not interfere with the
      quality and comfort of the handle grip of Crochet Buddy. It would be
      mounted in such a way where it would be angled to see a bigger portion of
      the crochet hook.
    </p>
    <p>
      The VUI combined with stitch tracking also hold promise. From the demo
      video, it is clear that having live feedback from Crochet Buddy, with
      limited vocal interactions, could be an easy and fun way to learn crochet.
      The biggest change to the VUI would be to add an additional sentence to
      each of the lines that the VUI gives, stating the number of loops that
      should be on the hook at any given time. Although I thought having Crochet
      Buddy’s stitch tracking would be enough to help the user, my testing it
      proved that the user would like to know the number of loops that should be
      on the hook. Having the VUI state the number of loops there should be
      proves effective then it would be able to be distributed without
      connection to an app. Future iterations of Crochet Buddy would also
      instructions for more stitches than the three stitches used for this
      prototype. I would also change the script to possibly include more crochet
      specific terms. When I was writing my scripts this time around I was
      trying to use words that maybe were more descriptive, but given my user
      testing and evaluation I believe having the more specific terms would be
      more effective, especially if there is a way for users to interact with
      Crochet Buddy to find out the definitions of the more niche crochet terms
      if they aren’t obvious enough.
    </p>
    <p>
      The next step for Crochet Buddy’s learning and educational systems would
      be the creating of a mobile application which would integrate a GUI into
      the pre-existing VUI and stitch tracking capabilities of Crochet Buddy.
      This would enable users to have both audio and visual instructions in
      their real time feedback. This application interface would also make it
      possible t get rid of the audio feedback entirely and focus on written or
      picture instructions which use on screen prompts and stitch tracking to
      provide live feedback even when the user doesn’t want audio.
    </p>
     <div class="d-flex flex-column flex-md-row text-center justify-content-between">
        <router-link to="/common-ground"><b>Previous Project: </b> Common Ground</router-link>
        <router-link to="/nature"><b>Next Project: </b>Access to Nature and Crime</router-link>
        
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
</style>