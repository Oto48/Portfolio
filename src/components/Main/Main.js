const Main = () => {
  return (
    <main className="w-6/12 py-32 flex flex-col gap-40 z-50">
      <div className="flex flex-col gap-5" id="about">
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
          className="flex gap-5 group py-4 px-5 hover:text-teal-300 hover:bg-[#475569] hover:bg-opacity-25 rounded"
          href="https://programmingo.com/"
          target="blank"
        >
          <div className="flex items-center h-7 text-slate-400 capitalize gap-2">
            <p>january</p>
            <span className="border h-0 border-slate-400 w-3 block"></span>
            <p>may 2023</p>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex gap-5 flex-col">
              <div className="flex items-center gap-2 font-bold">
                <h3 className="capitalize">junior front-end developer</h3>
                <span className="border bg-white w-1 h-1 rounded-full"></span>
                <h3 className="capitalize">programmingo</h3>
              </div>
              <p className="text-slate-300">
                At Programmingo, I specialized in Vue.js. My role encompassed
                bug fixes, feature enhancements, and design improvements.
                Working closely with the team of experienced professionals at
                Programmingo, I not only mastered Vue.js but also thrived in a
                collaborative environment, making valuable contributions to
                project success.
              </p>
            </div>
            <div className="flex flex-row gap-2 flex-wrap text-teal-300">
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">Vue.js</p>
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">
                JavaScript
              </p>
              <p className="bg-teal-400/10 px-3 py-1 rounded-full">SCSS</p>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Main;
