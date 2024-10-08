import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import gepartsProject from "../../assets/images/geparts.png";
import reactProject from "../../assets/images/reactproject.png";
import angularProject from "../../assets/images/angularproject.png";
import jsProject from "../../assets/images/jsproject.png";
import jsProject2 from "../../assets/images/jsproject2.png";
import phpProject from "../../assets/images/phpproject.png";
import scssProject from "../../assets/images/scssproject.png";

const Main = () => {
  return (
    <main className="lg:w-6/12 py-12 lg:py-32 flex flex-col gap-40 z-50">
      <div className="flex flex-col gap-5 text-lg 3xl:text-xl" id="about">
        <h2 className="text-3xl font-bold capitalize">about</h2>
        <p>
          In 2020, I embarked on my web development journey, starting with
          frontend technologies like React, Vue.js, and Angular. I didn't stop
          there—I also dived into backend development, adding PHP to my skill
          set and attended boot camps to enrich my knowledge.
        </p>
        <p>
          In 2023, I gained valuable experience as a junior frontend developer
          at Programmingo, where I specialized in Vue.js and embraced agile
          teamwork. Now, I'm eager to bring my skills and passion to new
          challenges. While I excel in frontend development, I'm open to backend
          opportunities.
        </p>
        <p>Let's create something exceptional together!" 😊🚀</p>
      </div>
      <div className="flex flex-col gap-5" id="experience">
        <h2 className="text-3xl font-bold capitalize">experience</h2>
        <Experience
          url="https://programmingo.com/"
          startDate="january"
          endDate="jun 2023"
          position="junior front-end developer"
          company="programmingo"
          description={`
          At Programmingo, I specialized in Vue.js. My role encompassed
          bug fixes, feature enhancements, and design improvements.
          Working closely with the team of experienced professionals at
          Programmingo, I not only mastered Vue.js but also thrived in a
          collaborative environment, making valuable contributions to
          project success.
          `}
          skills={["vue.js", "JavaScript", "SCSS", "git", "GitHub", "jira"]}
        />
        <Experience
          url="https://geparts.ge/home"
          startDate="january 2024"
          endDate="present"
          position="full-stack developer"
          company="geparts"
          description={`
          At Geparts, I expanded my expertise by taking on a full-stack developer role,
          where I worked extensively with both Vue.js on the front end and Laravel on
          the back end. My responsibilities included developing new features,
          maintaining existing systems, and ensuring seamless integration between
          the front-end and back-end components. Collaborating closely with
          the development team, I played a key role in optimizing performance
          and enhancing user experience, contributing to the overall success of the platform.
          `}
          skills={[
            "Vue.js",
            "JavaScript",
            "laravel",
            "PHP",
            "Tailwind CSS",
            "git",
            "GitHub",
            "jira",
            "figma",
          ]}
        />
      </div>
      <div id="projects">
        <div className="flex flex-col gap-5" id="experience">
          <h2 className="text-3xl font-bold capitalize">projects</h2>
          <Project
            url="https://geparts.ge/home"
            title="geparts.ge"
            image={gepartsProject}
            description={`Geparts is an advanced e-commerce platform designed for the seamless
            ordering of auto parts. The platform allows users to register, browse, 
            and purchase a wide range of automotive products. I contributed to this project by
            leveraging Vue.js for the front-end, ensuring a responsive and dynamic user
            interface, while utilizing Laravel for the back-end for data processing. 
            This project showcases my ability to integrate front-end and back-end technologies
            to deliver a robust and user-friendly experience.`}
            technologies={["vue.js", "laravel", "tailwind css"]}
          />

          <Project
            url="https://oto-react-movie-app.netlify.app/"
            title="movie app"
            image={reactProject}
            description={`This is a Full-stack movie app built with React and Node.js. It uses
            the TMDB API to get movie information. The website has three main
            pages: one for trending movies and TV shows, another for movies, and
            one for TV shows. Users can register, add movies and TV shows to
            their bookmarks, and even change their profile picture. The app also
            includes a search filter for finding movies and TV shows easily.`}
            technologies={["react", "node.js", "mongoDB", "tailwind CSS"]}
          />

          <Project
            url="https://oto-video-games-project.netlify.app/"
            title="video games app"
            image={angularProject}
            description={`This is a Front-end Video Games App built with Angular and
            SCSS. It uses RAWG Video Games Database to get video game
            information. The website has two main pages: one for video
            games list and one for selected video game information. The
            App includes search filter. Users can also sort video games
            based on rating, release date, last updated, etc.`}
            technologies={["angular", "SCSS"]}
          />

          <Project
            url="https://oto48.github.io/ecommerce-product-page-main/"
            title="E-commerce product page"
            image={jsProject}
            description={`This is a responsive e-commerce product page project created
            using JavaScript and Tailwind CSS. It displays a single
            product with multiple images. Customers can add this product
            to their cart and remove it when needed.`}
            technologies={["JavaScript", "TailwindCSS"]}
          />

          <Project
            url="https://oto-quizz-app.netlify.app/"
            title="quizz app"
            image={jsProject2}
            description={`This is a straightforward quiz app that presents you with four
            questions. After you've answered them, the app provides your
            results, indicating how many questions you got right.`}
            technologies={["JavaScript", "CSS"]}
          />

          <Project
            url="https://oto-php-project.000webhostapp.com/"
            title="PHP project"
            image={phpProject}
            description={`This is a PHP Back-end application. Users can access a
            products page and a form page for adding new products.
            Additionally, users have the ability to delete one or multiple
            products as needed.`}
            technologies={["PHP", "MySQL"]}
          />

          <Project
            url="https://fox-project.netlify.app/"
            title="SCSS project"
            image={scssProject}
            description={`This project is built using SCSS, with a focus solely on SCSS
            for styling. It is designed to be responsive, adapting
            seamlessly to different screen sizes.`}
            technologies={["HTML", "SCSS"]}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
