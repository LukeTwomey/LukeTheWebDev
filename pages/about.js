import Head from "next/head";

export const About = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About</title>
        <meta name="description" content="Here's my great about page!"></meta>
      </Head>

      <main>
        <h1>About</h1>
        <p>
          Hey guys! My name's <span>Luke Twomey</span>, a{" "}
          <span>web developer</span> from the UK.
        </p>
        <p>
          After graduating with a first in BSc(Hons) Computing Studies in 2006,
          I began working for a London software company, initially on the client
          helpdesk and later as a technical consultant.
        </p>
        <p>
          Five genuinely enjoyable years later, I jumped at the opportunity to
          explore more of the world, backpacking for a year. Aside from
          countless incredible experiences, this gave me ample opportunity to
          choose an exciting new career path.
        </p>
        <p>
          Above all else, I craved the impossible dream - to enjoy what I did
          for a living! Was it just a mythical goal only reserved for sports
          people and fighter pilots?
        </p>
        <p>
          I have always been a very logical person, methodical and well
          organised, with a talent for problem solving and a high attention to
          detail. I had always known I enjoyed development - right from when I
          first started programming in university. It was finally becoming
          clearer to me in which direction I should be heading.
        </p>
        <p>
          After my moment of realisation I dived headfirst into teaching myself
          the basics of web development, and after producing my first proper
          website I was hooked. I was soon immersing myself in HTML, CSS,
          JavaScript and all the other fun stuff that came along with it.
        </p>
        <p>
          I landed my very first development job at{" "}
          <a href="http://www.streeten.co.uk/">Streeten Design</a> in May 2015,
          and I've not looked back since.
        </p>
        <p>
          I have previously worked at Sky, part of a team responsible for their
          digital marketing campaigns. I produced HTML5/JavaScript banners to be
          deployed in the Google DoubleClick Studio environment and developed
          tools and applications which were used within the team to improve our
          day to day work and drive efficiency. These ranged from Google Chrome
          extensions to React single page applications. There are a couple of
          examples of these tools <a href="/portfolio">in my portfolio</a>. One
          is a Chrome extension called <a href="/asset-eater-2">Asset Eater</a>,
          which bulk downloaded the assets for our banners from DoubleClick. The
          other is <a href="/tstack">tStack</a>, an email component generator
          used by the email development team. My role also involved training and
          mentoring new starters on the development team, until they had the
          required knowledge to work on live creative briefs.
        </p>
        <p>
          I am currently working at ASOS, part of the web engineering team
          responsible for the company website, regularly visited by millions of
          customers around the world. Working in Agile teams, we follow strict
          engineering best practices to ensure our product is of the utmost
          quality. The website consists of micro frontends, built in modern
          frameworks (E.G. React with Redux) and each thoroughly developed
          through code reviews, automated testing and a TDD approach. We will
          soon be moving to Azure Kubernetes Service (AKS) for deployment to
          further improve our product.
        </p>
        <p>
          So far I've managed to pick up the following skills along the way.
        </p>
      </main>
    </div>
  );
};

export default About;
