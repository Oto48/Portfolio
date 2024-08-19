const Experience = (props) => {
  return (
    // <a
    //   className="flex flex-col xl:flex-row gap-5 group py-4 px-5 hover:text-teal-300 hover:bg-[#475569] hover:bg-opacity-25 rounded"
    //   href={props.url}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   <img
    //     className="xl:w-44 2xl:w-60 h-80 lg:h-52 xl:h-32 object-cover rounded"
    //     src={props.image}
    //     alt="Project"
    //   />
    //   <div className="flex flex-col flex-1 gap-5">
    //     <div className="flex gap-5 flex-col">
    //       <h3 className="capitalize font-bold text-lg 3xl:text-xl">
    //         {props.title}
    //       </h3>
    //       <p className="text-slate-300 text-base 2xl:text-lg">
    //         {props.description}
    //       </p>
    //     </div>
    //     <div className="flex flex-row gap-2 flex-wrap text-teal-300 text-lg">
    //       {props.technologies.map((tag, index) => (
    //         <p
    //           key={index}
    //           className="bg-teal-400/10 px-3 py-1 rounded-full capitalize"
    //         >
    //           {tag}
    //         </p>
    //       ))}
    //     </div>
    //   </div>
    // </a>

    <a
      className="flex flex-col xl:flex-row gap-5 group py-4 px-5 hover:text-teal-300 hover:bg-[#475569] hover:bg-opacity-25 rounded"
      href={props.url}
      target="blank"
    >
      <div className="flex items-center h-7 text-slate-400 text-base 2xl:text-lg capitalize gap-2">
        <p>{props.startDate}</p>
        <span className="border h-0 border-slate-400 w-1 2xl:w-3 block"></span>
        <p>{props.endDate}</p>
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex gap-5 flex-col">
          <div className="flex items-center gap-2 font-bold text-base text-lg lg:text-base 2lx:text-lg 3xl:text-xl">
            <h3 className="capitalize">{props.position}</h3>
            <span>&#183;</span>
            <h3 className="capitalize">{props.company}</h3>
          </div>
          <p className="text-slate-300 text-base 2xl:text-lg">
            {props.description}
          </p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap text-teal-300 text-lg">
          {props.skills.map((skill, index) => (
            <p
              key={index}
              className="bg-teal-400/10 px-3 py-1 rounded-full capitalize"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Experience;
