# Lead generation site built for real estate agent: Tamar Tarkhanian

## v1.0 LIVE on 6/13/2022

### Built with NextJS and TailwindCSS, hosted on Vercel @ tt-real-estate-agent.vercel.app (temporary URL)


I tried to build a single page lead generation site using NextJS for a family friend as practice and as a means to explore NextJS / Vercel and their performance increases due to SSG. The code follows strong accessibility and SEO practices, and its "build" deployment has its performance further optimized by NextJS framework. 


### Struggles + Solutions
- Images initially didn't render properly in deployment despite working in both dev and predeploy builds in Localhost, which I resolved when by importing them into each component rather than using inline style "backgroundImage".
- Getting content to lineup and fit within the bounds of just the screen for each component / section was tough, as any overlap would break the site on different media queries. I had to go through each media query and adjust the padding, margin, text size, as well as grid spanning in order to get all content to fit appropriately within its parent div.
- Macbook air. Looking at the live site on my macbook helped me to realize that macbooks have somewhat unique sizing (1440px x roughly 630px when accounting for google chrome UI at top of screen), which made their media queries unique. I had to adapt my media queries to work better on higher resolution / screen sizes in general, rather than building under the assumption of monitors at larger resolution, such as my 1920 x ~880 monitor I built the site with in localhost, and instead of creating an entirely new media query for macbooks, which would be a slippery slope into queries for most devices.


## Lighthouse metrics:
* 100 performance
* 96 accessibility
* ~75 best practices (improving)
* 100 SEO 
 
