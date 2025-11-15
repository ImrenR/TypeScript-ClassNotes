import { type PropsWithChildren } from "react";

// interface CourGoalProps {
//   title: string
//   children: ReactNode
// }

//! alternative way 2. :

type CourseGoalProps = PropsWithChildren<{ title: string;
   onDelete : (id:number)=> void;
  id:number;
 }>;

//! alternative way :
//const CourseGoal : FC <CourseGoalProps> = ({children, title}) => { dont forget to import FC from react

const CourseGoal = ({ children, title, onDelete, id }: CourseGoalProps) => {
  return (
    <form action="">
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
        
      </div>

      <div>
        <button onClick={()=>onDelete(id)}>DELETE</button>
      </div>
    </div>
    </form>
  );
};

export default CourseGoal;
