const timeline = [
  {
    id: 1,
    role: "React Developer",
    workplace: "Unicorn Systems | Pilsen",
    date: "2016 - 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
  },
  {
    id: 2,
    role: "React Developer",
    workplace: "Unicorn Systems | Pilsen",
    date: "2016 - 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
  },
  {
    id: 3,
    role: "React Developer",
    workplace: "Unicorn Systems | Pilsen",
    date: "2016 - 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
  },
  {
    id: 4,
    role: "React Developer",
    workplace: "Unicorn Systems | Pilsen",
    date: "2016 - 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
  },
];

const Resume = () => {
  return (
    <div className="mx-auto flow-root max-w-xl px-8 pt-12 pb-12 lg:max-w-7xl">
      <div className="mb-16">
        <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          My Resume
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
          dolor cupiditate blanditiis ratione.
        </p>
      </div>

      <ul role="list">
        {timeline.map((item, index) => {
          let isEven = index % 2 === 0;

          return (
            <li key={item.id}>
              <div className="relative py-4">
                <span className="absolute top-5 left-1/2 -ml-px h-full w-0.5 bg-violet-200" aria-hidden="true" />

                <div className="relative flex items-start justify-center">
                  <div className="-mt-1.5 mr-4 w-1/2 text-right">
                    {isEven ? (
                      <>
                        <p className="text-xl font-bold text-gray-900">{item.role}</p>
                        <p className="text-md mt-2 font-semibold text-gray-400">{item.workplace}</p>
                        <p className="mt-2 inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
                          {item.date}
                        </p>
                        <p className="mt-4 text-xl text-gray-700">{item.comment}</p>
                      </>
                    ) : null}
                  </div>

                  <div className="relative h-4 w-4 rounded-full bg-white px-2 ring-4 ring-violet-700" />

                  <div className="-mt-1.5 ml-4 w-1/2 text-left">
                    {isEven ? null : (
                      <>
                        <p className="text-xl font-bold text-gray-900">{item.role}</p>
                        <p className="text-md mt-2 font-semibold text-gray-400">{item.workplace}</p>
                        <p className="mt-2 inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
                          {item.date}
                        </p>
                        <p className="mt-4 text-xl text-gray-700">{item.comment}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Resume;
