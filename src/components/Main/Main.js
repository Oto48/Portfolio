import Project from "../Project/Project";
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
        <a
          className="flex flex-col xl:flex-row gap-5 group py-4 px-5 hover:text-teal-300 hover:bg-[#475569] hover:bg-opacity-25 rounded"
          href="https://programmingo.com/"
          target="blank"
        >
          <div className="flex items-center h-7 text-slate-400 text-base 2xl:text-lg capitalize gap-2">
            <p>january</p>
            <span className="border h-0 border-slate-400 w-1 2xl:w-3 block"></span>
            <p>may 2023</p>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex gap-5 flex-col">
              <div className="flex items-center gap-2 font-bold text-base text-lg lg:text-base 2lx:text-lg 3xl:text-xl">
                <h3 className="capitalize">junior front-end developer</h3>
                <span>&#183;</span>
                <h3 className="capitalize">programmingo</h3>
              </div>
              <p className="text-slate-300 text-base 2xl:text-lg">
                At Programmingo, I specialized in Vue.js. My role encompassed
                bug fixes, feature enhancements, and design improvements.
                Working closely with the team of experienced professionals at
                Programmingo, I not only mastered Vue.js but also thrived in a
                collaborative environment, making valuable contributions to
                project success.
              </p>
            </div>
            <div className="flex flex-row gap-2 flex-wrap text-teal-300 text-lg">
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">Vue.js</p>
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">
                JavaScript
              </p>
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">SCSS</p>
            </div>
          </div>
        </a>
      </div>
      <div id="projects">
        <div className="flex flex-col gap-5" id="experience">
          <h2 className="text-3xl font-bold capitalize">projects</h2>
          <Project
            url={"https://oto-react-movie-app.netlify.app/"}
            title={"movie app"}
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
            url={"https://oto-video-games-project.netlify.app/"}
            title={"video games app"}
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
            url={"https://oto48.github.io/ecommerce-product-page-main/"}
            title={"E-commerce product page"}
            image={jsProject}
            description={`This is a responsive e-commerce product page project created
            using JavaScript and Tailwind CSS. It displays a single
            product with multiple images. Customers can add this product
            to their cart and remove it when needed.`}
            technologies={["JavaScript", "TailwindCSS"]}
          />

          <Project
            url={"https://oto-quizz-app.netlify.app/"}
            title={"quizz app"}
            image={jsProject2}
            description={`This is a straightforward quiz app that presents you with four
            questions. After you've answered them, the app provides your
            results, indicating how many questions you got right.`}
            technologies={["JavaScript", "CSS"]}
          />

          <Project
            url={"https://oto-php-project.000webhostapp.com/"}
            title={"PHP project"}
            image={phpProject}
            description={`This is a PHP Back-end application. Users can access a
            products page and a form page for adding new products.
            Additionally, users have the ability to delete one or multiple
            products as needed.`}
            technologies={["PHP", "MySQL"]}
          />

          <Project
            url={"https://fox-project.netlify.app/"}
            title={"SCSS project"}
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
