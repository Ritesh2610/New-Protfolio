const ResponsiveAboutBlock = () => {
  return (
    <section className="flex md:hidden flex-col relative text-sm font-[Inter]">
      <div className="w-fit h-full absolute top-0 -left-10 md:-left-16">
        <div className="flex flex-col text-milk/30 tracking-wide leading-5 text-xs md:text-sm">
          {[...Array(32)].map((cur, i) => (
            <p key={i}>{i < 9 ? `0${i + 1}` : i + 1}</p>
          ))}
        </div>
      </div>

      {/* --------------- class section ------------ */}
      <div className="flex items-center gap-1.5 tracking-wide">
        <p className="text-red-600">export</p>
        <p className="text-red-600">default</p>
        <p className="text-red-600">class</p>
        <div className="flex items-center">
          <p className="text-light-yellow">Ritesh</p>
          <p className="text-light-yellow">Pandey</p>
        </div>
        <p className="text-milk">{`{`}</p>
      </div>

      {/* --------------- comment section ------------ */}
      <div className="text-milk/40 flex font-normal items-center gap-1.5">
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
      <div className="text-milk/40 flex font-normal items-center gap-1.5">
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
      <div className="px-2 flex flex-col">
        <div className="flex items-center tracking-wide gap-1.5">
          <div className="flex items-center">
            <p className="text-red-600">{`constructor`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        {/* --------------- constructor inside section ------------ */}
        <div className="px-2 flex flex-col">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              <p className="text-blue-400">this.</p>
              <p className="text-white">name</p>
            </div>
            <div className="text-red-400">{`=`}</div>
            <div className="text-blue-300">{`'Ritesh Pandey'`}</div>
          </div>
          <div className="flex items-center gap-1.5">
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
      <div className="px-2 flex flex-col">
        <div className="flex items-center tracking-wide gap-1.5">
          <div className="flex items-center">
            <p className="text-light-yellow">{`workExperience`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-2 flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
          </div>
          <div className="flex flex-col px-2">
            <div className="flex items-center gap-1.5">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'Jun 2022-now'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Software Developer at`}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-green-400">{`SearchingYard Group'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'Jun 2022-Nov 2022'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Software Intern at`}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-green-400">{`SearchingYard Group'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
          </div>
          <p className="text-milk">{`]`}</p>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- education method section ------------ */}
      <div className="px-2 flex flex-col">
        <div className="flex items-center tracking-wide gap-1.5">
          <div className="flex items-center">
            <p className="text-light-yellow">{`education`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-2 flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
          </div>
          <div className="flex flex-col pl-2">
            <div className="flex items-center gap-1.5">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2020-2022'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'NIIS Institute of Business`}</p>
            </div>

            <div className="flex items-center gap-1.5">
              <p className="text-green-400">{`Administration - Master of Computer Science'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2017-2020'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Government College `}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-green-400">{`Koraput - Bachelor of Computer Science'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
          </div>
          <p className="text-milk">{`]`}</p>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- skills method section ------------ */}
      <div className="px-2 flex flex-col">
        <div className="flex items-center tracking-wide gap-1.5">
          <div className="flex items-center">
            <p className="text-light-yellow">{`skills`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-2 flex flex-col">
          <div className="flex center gap-1.5">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
            <div className="flex items-center gap-1.5 flex-wrap text-green-400">
              <p className="">{`'HTML/CSS/JS',`}</p>
              <p className="">{`'Tailwind CSS',`}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5 flex-wrap text-green-400 ">
            <p className="w-fit">{`'Material UI',`}</p>
            <p className="">{`'React',`}</p>
            <p className="">{`'NextUI',`}</p>
            <p className="">{`'Formik'`}</p>
            <p className="">{`'Yup',`}</p>
            <p className="">{`'Firebase',`}</p>
            <p className="">{`'Next.js',`}</p>
            <p className="">{`'Node.js',`}</p>
            <p className="">{`'Express',`}</p>
            <p className="">{`'MongoDB',`}</p>
            <p className="">{`'Mongoose',`}</p>
            <p className="">{`'Prisma',`}</p>
            <p className="">{`'Typescript',`}</p>
          </div>
          <div className="flex items-center gap-x-1.5 flex-wrap text-green-400">
            <p className="">{`'REST'`}</p>
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
export default ResponsiveAboutBlock;
