const AboutBlock = () => {
  return (
    <section className="hidden md:flex flex-col relative">
      <div className="w-fit h-full absolute top-0 -left-10 md:-left-16">
        <div className="flex flex-col text-milk/30 tracking-wide gap-[0.3px] leading-6 text-sm">
          {Array.from(Array(27).keys()).map((index) => (
            <p className="font-medium text-base" key={index}>
              {index + 1 > 9 ? `${index + 1}` : `0${index + 1}`}
            </p>
          ))}
        </div>
      </div>

      {/* --------------- class section ------------ */}
      <div className="flex items-center gap-2 tracking-wide">
        <p className="text-red-600">export</p>
        <p className="text-red-600">default</p>
        <p className="text-red-600">class</p>
        <div className="flex items-center">
          <p className="text-light-yellow">ritesh</p>
          <p className="text-light-yellow">Pandey</p>
        </div>
        <p className="text-milk">{`{`}</p>
      </div>

      {/* --------------- comment section ------------ */}
      <div className="text-milk/40 flex font-normal items-center gap-2">
        <div className="flex items-center gap-1">
          <p>/</p>
          <p>/</p>
        </div>
        <p>Todo:</p>
        <p>Remove</p>
        <p>all</p>
        <p>logs</p>
        <p>from</p>
        <p>my</p>
        <p>code</p>
      </div>
      <div className="text-milk/40 flex font-normal items-center gap-2">
        <div className="flex items-center gap-1">
          <p>/</p>
          <p>/</p>
        </div>
        <p>Constructor</p>
        <p>to</p>
        <p>initialize</p>
        <p>instances</p>
        <p>and</p>
        <p>set</p>
        <p>up</p>
        <p>values</p>
      </div>

      {/* --------------- constructor section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-red-600">{`constructor`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        {/* --------------- constructor inside section ------------ */}
        <div className="px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <p className="text-blue-400">this.</p>
              <p className="text-white">name</p>
            </div>
            <div className="text-red-400">{`=`}</div>
            <div className="text-blue-300">{`'Ritesh Pandey'`}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <p className="text-blue-400">this.</p>
              <p className="text-white">email</p>
            </div>
            <div className="text-red-400">{`=`}</div>
            <div className="text-blue-300">{`'riteshpandey7356@gmail.com'`}</div>
          </div>
        </div>

        <div className="text-milk">{`}`}</div>
      </div>

      {/* --------------- work method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`workExperience`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
          </div>
          <div className="flex flex-col px-4">
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'Aug 2024-now'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Software Developer at Holmium Technologies'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'Sep 2023-Aug 2022'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Software Developer at SVAAK Software Technology Pvt Ltd'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
          </div>
          <p className="text-milk">{`]`}</p>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- education method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`education`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
          </div>
          <div className="flex flex-col pl-4">
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2022-2024'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'R.D.Engineering College - Master of Computer `}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-green-400">{`Applications'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2019-2022'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Mewar group of Institutions - Bachelor of Computer Applications'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
          </div>
          <p className="text-milk">{`]`}</p>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- skills method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`skills`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
            <div className="flex items-center gap-2 flex-wrap text-green-400">
              <p className="">{`'HTML/CSS/JS',`}</p>
              <p className="">{`'Tailwind CSS',`}</p>
              <p className="">{`'Material UI',`}</p>
              <p className="">{`'React.js',`}</p>
              <p className="">{`'Redux.js',`}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-green-400">
            <p className="">{`'Formik'`}</p>
            <p className="">{`'Yup',`}</p>
            <p className="">{`'Node.js',`}</p>
            <p className="">{`'Express',`}</p>
            <p className="">{`'MongoDB',`}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-green-400">
            <p className="">{`'Mongoose',`}</p>
            <p className="">{`'REST'`}</p>
            <p className="">{`'Typescript',`}</p>
            <p className="">{`'Postman',`}</p>
            <p className="">{`'Redis',`}</p>
            <p className="">{`'npm/yarn',`}</p>
            <p className="">{`'Git',`}</p>
            <p className="">{`'GitHub',`}</p>
            <p className="">{`'S3',`}</p>
            <p className="">{`'EC2',`}</p>
            <p className="animate-pulse-custom mx-2 bg-milk w-0.5 h-4"></p>
            <p className="text-milk">{`]`}</p>
          </div>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      <p className="text-milk">{`}`}</p>
    </section>
  );
};

export default AboutBlock;
