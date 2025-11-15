import { type PropsWithChildren } from "react";

// interface CourGoalProps {
//   title: string
//   children: ReactNode
// }

//! alternative way 2. :

type CourseGoalProps = PropsWithChildren<{ title: string }>;

//! alternative way :
//const CourseGoal : FC <CourseGoalProps> = ({children, title}) => { dont forget to import FC from react

const CourseGoal = ({ children, title }: CourseGoalProps) => {
  return (
    <div className="flex flex-col items-center  bg-gray-200">
      {/* Card container */}
      <div className="bg-gray-100 rounded-lg py-5 my-auto w-full max-w-md flex flex-col gap-4">
        {/* Label */}
        <label htmlFor="title" className="text-sm font-medium text-gray-900">
          {title}
        </label>

        {/* Description */}
        <div className="text-gray-500 text-sm">{children}</div>

        {/* Input */}
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter your goal"
          className="py-2 px-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <button>DELETE</button>
      </div>
    </div>
  );
};

export default CourseGoal;
