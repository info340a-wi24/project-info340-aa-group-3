import React from 'react';

export default function AboutPage() {
  return (
    <div id="about">
        <h2 className="aboutTitle">About Us</h2>
        <p className="textbox">
            Over time, people have turned to revolts, movements, and protests as a means of advocating for social change. 
            With the rise of social media in the modern era, diverse groups of people are increasingly connected with issues 
            across the globe, as half a million people attended Black Lives Matter protests on June 6th, 2020 
            <cite><a target="_blank" rel="noreferrer" href="https://www.nytimes.com/interactive/2020/07/03/us/george-floyd-protests-crowd-size.html">(Buchanan et al., 2020)</a></cite>. 
            In response to these shifts in the availability of information, apps such as Instagram have worked to expand journalism 
            efforts through features for fundraising, geotags and hashtags, and story posts to rapidly spread information. With the 
            virality of social media, large masses of people can successfully gather and be reached through activist accounts with 
            calls to action. 
        </p>
        <p className="textbox">
            While this is helpful, no centralized platform exists to personalize the process of protest involvement. For issues 
            that are smaller in scale, hosted by lesser-known organizations, or in less metropolitan areas, coverage becomes 
            increasingly difficult. Particularly for individuals whose personalized content and social circles fail to include 
            current events, it is difficult to consistently organize in cohesive ways or discover events that perfectly align 
            with one’s preferences. Furthermore, in response to the popularity of protests over social media, many governmental 
            officials are banning social media or utilizing the platforms to infringe on the privacy of citizens 
            <cite><a target="_blank" rel="noreferrer" href="https://restofworld.org/2021/how-governments-go-after-protesters-using-social-media/">(Cortés, 2021)</a></cite>. 
            To better empower the public to speak up in meaningful ways, a new solution is required.
        </p>
        <p className="textbox">Protest Hub is created to solve just that.</p>
    </div>
  );
}