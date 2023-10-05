const Project = (props) => {
  return (
    <a
      className="flex flex-col xl:flex-row gap-5 group py-4 px-5 hover:text-teal-300 hover:bg-[#475569] hover:bg-opacity-25 rounded"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="xl:w-44 2xl:w-60 h-80 lg:h-52 xl:h-32 object-cover rounded"
        src={props.image}
        alt="Project"
      />
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex gap-5 flex-col">
          <h3 className="capitalize font-bold text-lg 3xl:text-xl">
            {props.title}
          </h3>
          <p className="text-slate-300 text-base 2xl:text-lg">
            {props.description}
          </p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap text-teal-300 text-lg">
          {props.technologies.map((tag, index) => (
            <p
              key={index}
              className="bg-teal-400/10 px-3 py-1 rounded-full capitalize"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
