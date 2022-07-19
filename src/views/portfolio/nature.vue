<template>
  <PortfolioPiece>
    <!--<div class="cover-img d-flex flex-column">
      <img class="small" src="/assets/tiles/nature.png" />
    -->
      <div class="title">
        <h1>Access to Nature and Crime</h1>
        <p>
          A quantitative investigation into the potential impacts that having
          access to nature would have on crime rates aross the various
          neighborhoods within Seattle, Washington. This analysis was done using Juypiter notebook. 
          You can view the Github Repository 
          <a href="https://github.com/vremaker/hcde-410-final/">Here</a>
        </p>
     
        <hr />
      </div>
    <!--</div>-->
      
    <h2>Abstract</h2>
    <p>
      Nature has a huge impact on overall human well being. This study sought to
      understand the relationship between access to natural spaces, such as
      parks, and the amount of crime in a given area. This study focused on two
      conditions: high crime and high parks. High crime meant that there was a
      higher percentage of crime than parks, while high parks meant there was a
      higher percentage of parks than there was of crime.
      <br /><br />
      The first part of the study investigated the question: Do areas with more
      greenspace have less crime? On average, the high crime condition had about
      half the greenspace of the high park condition. On average, the high park
      condition also had significantly less crime than the high crime condition.
      This indicates that having more greenspace might have an impact on the
      amount of crime.
      <br /><br />
      The second part of this study investigated the question: Does the the
      quality of parks in the area affect the amount of crime? On average, the
      high crime condition had a rating that was .6 lower than the high parks
      condition. This indicates that when there are more parks in an area, they
      are usually of higher quality.
      <br /><br />
      Although there was a relationship shown in this study, it is also critical
      to consider other variables which might have an impact on this
      relationship, namely: population in a neighborhood, size of the
      neighborhood, socioeconomic status within a neighborhood, and the ratio of
      stores, housing and natural space in a neighborhood.
    </p>
    <h2>Introduction and Background</h2>
    <p>
      People are highly impacted by the envrionment in which they live. We, as
      humans, are inexplicably drawn to nature; which can have major effects on
      our well being. Having access to nature both wild and domesticated has a
      major impact on our mental health. For example, studies have shown that
      joggers who exercise in nature feel more restored and have less
      anxiety,than those who exerise at the gym (Louv, 35). Unfortunately,
      having access to safe nature is not always achievable. By looking at the
      accessibility of parks, as well as the quality of those parks, it is
      possible to gain a better understanding of their impact within the greater
      Seattle community.
      <br /><br />
      This study seeks to work along a similar framework to the broken window
      thoery which uses the number of broken windows to guague the amount of
      crime - more broken windows incidates higher rates of crime (Koglmeier).
      But, instead of the number of broken windows, we will be using the number
      of parks, as well as the quality of those parks.
      <br /><br />
      Across all of the literature that I reviewed, a key factor in the
      effectiveness of these parks and natural spaces - a key peice to making
      these public spaces effective is the need for a human centered approach
      with community engagement during the erection of these institutions
      (Koglmeier,Green Space and Crime, Ross). It is the human centered
      involvment in the development of these programs and spaces that makes the
      difference in these harm reduction programs. These spaces are not a means
      to an end in an of it self, but a proxy for community engagement (Ross).
      This poses a difficult question within my research in which the ways in
      which the databases I choose do not really include data about community
      invovlement within the development of these areas. Similarly, in the
      literature I reviewed, having greenspace does not automatically reduce
      crime; instead, these parks need to be well maintained and must not have
      hidden spots where crime could occur (Green Space and Crime). Luckily, in
      the Greenspace database, there is a tier ranking of the parks from 1 - 6
      in which 1 is the highest tier and 6 is the lowest tier. This ranking
      scale could probably be used to mirror the quality of the park and more
      deeply understand park quality as it relates to crime rates.
    </p>
    <h2>Research Questions and Hypotheses</h2>
    <ul>
      <li><b>RQ1: </b> Do areas with more greenspace have less crime?</li>
      <li>
        <b>H1: </b> I beleive that there will be less crime in areas with more
        greenspace.
      </li>
      <li>
        <b>RQ2: </b> Does the the quality of parks in the area affect the amount
        of crime?
      </li>
      <li>
        <b>H2: </b> I believe that having higher quality parks will be an
        indicator of less crime.
      </li>
    </ul>
    <h2>Methods</h2>
    <p>
      Listed below are the steps that I took during my data analysis. To look at
      the code, take a look at
      <a
        href="https://github.com/vremaker/hcde-410-final/blob/main/Calculations.ipynb"
        >'Calculations.ipynb'
      </a>
    </p>
    <b>Section 1 - Calling The APIs and Sorting Data </b>
    <ol>
      <li>Import all needed libraries, and sets up api endpoints and limits</li>
      <li>
        Query the Seattle Neighborhood Database and create a dictionary
        'hood_counts' to track the data that I want for each of the
        neighborhoods. This is primarily concerned with: location of the
        neighorhood, number of parks, park rating, the average park rating in
        the neighborhood, and the number of crimes.
      </li>
      <li>
        Query the Seattle Public Spaces Database and check the location of each
        public space against the neigbhorhoods using geodata. Qualifying parks
        will be public, open, and have either greenspace or forest areas. Then,
        the data about the greenspace will be added to the 'hood_counts'
        dictionary at the appropriate spot.
      </li>
      <li>
        Query the Seattle Crime Database and checks the location of each crime
        incient against the neighborhoods using geodata. Qualifying crime will
        be done within the last 5 years (2017 - 2022). Then, the data about the
        crimes will be added to the 'hood_counts' dictionary at the appropriate
        spot.
      </li>
      <li>Calculates the average park rating for each neighborhood.</li>
      <li>
        Because the total number of crimes is going to be far higher than the
        number of parks, it was important to creates a dictionary of the
        hood_percentages which take the total number of crimes and parks for
        each neighborhood and divides them by the total number of crime and
        parks. This sets the baseline to understand which the distribution of
        crime rates and parks across the neighborhoods.
      </li>
    </ol>
    <b>RQ1: Do areas with more greenspace have less crime?</b>
    <ol>
      <li>
        Compare the percentage of of parks in a given neighborhood to the
        percentage of crime within a given neighborhood. This helps get an
        overview of the breakdown of the greenspace and crime.
      </li>
      <li>
        Compare the percentage of of parks in a given neighborhood to the
        percentage of crime within a given neighborhood. This step focuses
        solely on the neighborhoods in which the percentage of crime is higher
        than the percentage of parks. This helps get a more specific look at the
        nuanced similarities and differences against
      </li>
      <li>
        Compare the percentage of of parks in a given neighborhood to the
        percentage of crime within a given neighborhood. This step focuses
        solely on the neighborhoods in which the percentage of parks is higher
        than the percentage of crime.
      </li>
      <li>
        Compares the average percentage of parks and crimes across the
        conditions of a higher percentage of crime and a higher percentage of
        parks. This helps to display a more concise version of the differences
        in percentage of crime and parks in both conditions.
      </li>
    </ol>
    <b
      >RQ2: Does the the quality of the parks available in the area affect the
      amount of crime?</b
    >
    <ol>
      <li>
        Show the average park rating across the neighborhoods where there is a
        higher percentage of parks than crime. This helps understand the
        similarities and differences against the two conditions.
      </li>
      <li>
        Show the average park rating across the neighborhoods where there is a
        higher percentage of crime than parks. This helps understand the
        similarities and differences against the two conditions.
      </li>
      <li>
        Compare the average park rating across all the neighborhoods in which
        the percentage of parks was higher than the percentage of crime, and
        compares it to the average park rating across all the neighborhoods in
        wich the percentage of crime is higher than the percentage of crime.
        This use of averages creates a more vibrant picture of the quality of
        parks across the conditions of higher percentage of crime and higher
        percentage of parks.
      </li>
    </ol>

    <h2>Findings</h2>
    <p>
      Below you can find the graphs created during the data analysis process.
    </p>
    <b>RQ1: Do areas with more greenspace have less crime?</b>
    <p>
      Because there are far more crime than parks, this comparison was broken
      down to look at the percentage of overall parks and crime within a
      specific neighborhood. For each crime or park percentage, it is the total
      number of crimes or parks in the neighborhood divded by the total number
      of parks or crime in all of Seattle.
    </p>
    <img
      src="assets/nature/all_hoods_compare.png"
      alt="neighborhood breakdown: percentage of overall crime and parks"
    />
    <p>
      As shown in 'Neighborhood Breakdown: Percentage of Overall Crime and
      Parks' chart, we have a mix of neighborhoods in which the percentage of
      crime is higher than the percentage of parks and vice versa. This means
      that there might potentially be an impact of parks on reducing crime.
      <br /><br />
      The next two charts make the same comparison of percentages of crime and
      parks, but groups them together by whether there was a higher percentage
      of parks or a higher percentage of crime.
      <br /><br />
      In this chart, we look at the neighborhoods where there are more parks.
    </p>
    <img
      src="assets/nature/high_crime.png"
      alt="high crime breakdown percentage of overall crime and parks"
    />
    <p>
      In this chart, most neighborhoods have over 3% of the parks in Seattle and
      8 of these neighborhoods had over 5% of the parks. The exception to this
      is Seward park, which has 2.7% of the parks, but again, this could be due
      to the size of the area. We also see that most neighborhoods in this
      bracket have between 3% and 6% of the crime in Seattle.
      <br /><br />
      In this chart, we look at the neighborhoods where there is more crime.
    </p>
    <img
      src="assets/nature/high_park.png"
      alt="high park breakdown: percentage of overall crime and parks"
    />
    <p>
      In this chart, most neighborhoods have under 3% of the parks in Seattle.
      There are two exception of note. First, there is Capitol Hill, which has
      about 6% of the parks, and Queen Anne which has about 4% of parks. We also
      see that most neighborhoods have between 3% and 7% of the crime in
      Seattle.
      <br /><br />
      There seems to be a slight difference here for the average range of crime
      when the number of parks is concerned. To look into this more deeply, we
      compared the average percentage of parks and crime across the conditions
      of having a higher percentage of parks or having a higher percentage of
      crime.
    </p>
    <img
      src="assets/nature/average_percent_crime_parks.png"
      alt="high crime vs high parks: average percent of parks"
    />
    <p>
      This chart shows a pretty big disparity between the two conditions. In the
      condition in which there is a higher amount of crime, the average
      percentage of crimes is 6.1% which is about double the average percentage
      of parks 3%. But, in the condition where there are more parks, the average
      number of parks is far higher at 6.6%, and the average amount of crime
      much lower at around .5%.
      <br /><br />
      <em
        >This seems to indicate that having more parks does have a potential
        association with a reduction in crime</em
      >
    </p>
    <hr />
    <b
      >RQ2: Does the the quality of parks in the area affect the amount of
      crime?</b
    >
    <p>
      To begin this section, let's talk a little bit about what the park ratings
      mean within the parks database. This rating system is on a scale from 1 -6
      with a 1 being the best possible park, and 6 being the worst park.
      <br /><br />
      This chart comes from comparing the average park ratings across the
      condition of having a higher percentage of parks when compared to crime.
    </p>
    <img
      src="assets/nature/high_park_rating.png"
      alt="high park breakdown: average park rating"
    />
    <p>
      In the areas with more parks, there is also a better rating for the park,
      and more diversity within the park rating averages. The best average
      rating in this range is 2.3 and the worst average rating is 4.
      <br /><br />
      This chart shows the average rating for parks within a given neighborhood
      in areas where there is a higher percentage crime than there is parks.
    </p>
    <img
      src="assets/nature/high_crime_rating.png"
      alt="high crime breakdown: average park rating"
    />
    <p>
      As you can see, there is not a whole lot of variation across these
      neighborhoods. The worst average park rating is 4.2 and the best rating is
      3.6.
      <br /><br />
      Our final analysis seeks to compare the average park rating across all
      neighborhoods in the condition of having a higher percentage of crime than
      parks and having a higher percentage of parks than crime.
    </p>

    <img
      src="assets/nature/high_crime_rating.png"
      alt="average park rating based on distribution of park and crime"
    />
    <p>
      This chart shows that in the condition in which there is a higher
      percentage of crime than parks the average park rating is 3.9. In the
      condition in which there is a higher percentage of parks than crime, the
      average park rating is 3.3. There is a .6 difference in the average rating
      in which the areas with a higher percentage of parks tend to have overall
      higher quality parks
      <br /><br />
      <em
        >This might indicate that parks in areas which there is less crime also
        have higher quality.
      </em>
    </p>

    <h2>Discussion</h2>
    <p>
      This analysis seems to suggest an inverse correlational relationship
      between the number and quality of parks and crime rates. In this case,
      areas with more, higher quality parks see less crime.
      <br /><br />
      <b>RQ1 asked Do areas with more greenspace have less crime? </b> We found
      that on average, areas with a higher percentage of parks had drastically
      less crime when compared to areas with higher percentages of crime that
      had an smaller assortment of parks. <br /><br />
      <b
        >RQ2 asked Does the the quality of parks in the area affect the amount
        of crime?</b
      >
      We concluded that on average, areas with a higher percentage of crime had
      parks of lower quality when compared to areas with a higher percentage of
      parks. <br /><br />
      Both of my hypotheses were confirmed, and there does seem to be a
      relationship between the amount of crime and the quality and accessibility
      of nature in the city. But, this does not seek to prove causation. There
      are several potential factors that could influence these results namely:
    </p>
    <ul>
      <li>
        <b>Population within a neighborhood:</b> There are a lot of industrial
        areas within Seattle which might not have that many people living in it,
        which could be a reason for fewer, lower quality green spaces.
      </li>
      <li>
        <b>Size of the neighborhood:</b> Not every neighborhood in Seattle is
        the same size. The smaller neighborhoods might have less crime and fewer
        parks simply because there is less space for them.
      </li>
      <li>
        <b>Socioeconomic status within a neighborhood: </b> Those in lower
        socioeconomic classes might not be afforded the "nicer" parks due to
        strucutral injustice within our governing bodies and the ways in which
        cities sometimes distribute funds based on the overall income of those
        living in the neighborhoods. There could also be higher crime rates
        becaues there are people making less, and they would not have the time
        to visit the green spaces. We also tend to see more policing in areas of
        lower socioeconomic status, which of course leads to higher rates of
        crime being reported, but it does not necesarily mean that there is not
        a similar amount of crime going on in the higher socioeconomic status
        neighborhoods in which there is less police patroling.
      </li>
      <li>
        <b>Ratio of stores, housing, and natural spaces in a neighborhood: </b
        >One of the most noticable outliers for crime and green space was
        downtown. Which might be an indicator that areas that have a higher
        focus on retail have less of a need for green space because people can
        go home to their neighborhoods, which might have more greenspace, when
        they are done with their retail adventures. Or, it could also indicate
        that these places of business present more opportunities for crime, such
        as theft, which would be harder to do in a more residential area.
      </li>
    </ul>
    <p>
      It was really fascinating to look at the ways in which available natural
      spaces varies within Seattle, and this sets a great foundation which could
      potentially be the backbone for more research such as taking into account
      the factors listed above in additional research. Or, to potentially set
      the baseline for an ethnographic study which talks to people in these
      neighborhoods to learn more about how residents relationships to nature
      vary in the neighborhoods with a higher percentage of crime than parks and
      those with a higher percentage of parks than crime.
    </p>
    <h2>Conclusion</h2>
    <p>
      Having access to natural greenspace can be very benefical to human health
      and well being. But, not everyone has the same level of access to natural
      spaces due to the ways in which society has been developed. This research
      study sought to answer two questions: (1) Do areas with more greenspace
      have less crime? (2) Do areas with more greenspace have less crime?
      <br /><br />
      For research question 1, it was hypothesized there will be less crime in
      areas with more greenspace. This hypothesis was confirmed when they study
      found that on average, areas with a higher percentage of parks had
      drastically less crime when compared to areas with higher percentages of
      crime that had an smaller assortment of parks.
      <br /><br />
      For research question 2, it was hypothesized that having higher quality
      parks will be an indicator of less crime. This hypothesis ws confirmed
      when the study found that on average, areas with a higher percentage of
      crime had parks of lower quality when compared to areas with a higher
      percentage of parks.
      <br /><br />
      Of course, these finding do have some limitations. There are a lot of
      other variables that might play into the reason that there is less crime
      in areas with more parks and greenspace. The majors factors that might be
      at play in this relationship are population in a neighborhood, size of the
      neighborhood, socioeconomic status within a neighborhood, and the ratio of
      stores, housing and natural space in a neighborhood. Further studies
      should consider the impact of these factors. This may also serve as a call
      to action to add set up areas in which having more, higher quality parks
      added could potentially be beneficial.
    </p>

    <h2>Citations</h2>
    <p>
      Green Space and crime. Cornell College of Human Ecology. (n.d.). Retrieved
      May 11, 2022, from
      https://www.human.cornell.edu/dea/spotlights/green-space-and-crime
      <br /><br />
      Koglmeier, E. (2017, July 31). Can public art reduce crime? expert
      interview with Ben Sandberg. Public Art Archive. Retrieved May 10, 2022,
      from
      https://www.publicartarchive.org/2017/07/31/can-public-art-reduce-crime-expert-interview/
      <br /><br />
      Louv, R. (2005). Last child in the woods: Saving our children from
      nature-deficit disorder (pp. 1-36; 48-54). Chapel Hill, NC: Algonquin.
      <br /><br />
      Ross, C. (n.d.). Examining the ways arts and culture intersect with public
      safety. Retrieved May 11, 2022, from
      https://www.urban.org/sites/default/files/publication/79271/2000725-Examining-the-Ways-Arts-and-Culture-Intersect-with-Public-Safety.pdf
      <br /><br />
      Cover Image Courtesy of
      https://www.360cities.net/image/2018-uw-quad-cherry-blossoms-usa
    </p>
    
     <div class="d-flex flex-column flex-md-row text-center justify-content-between">
        <router-link to="/crochet-buddy"><b>Previous Project: </b> Crochet Buddy</router-link>
        <router-link to="/zoom-u"><b>Next Project: </b>The Virtual College Experience</router-link>
        
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