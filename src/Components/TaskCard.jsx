'use client'
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
    const router = useRouter()
  return (
    <div
      className="bg-slate-600  p-4 rounded-md hover:cursor-pointer hover:bg-slate-700 flex flex-col "
      key={task.id} onClick={()=> router.push(`tasks/edit/${task.id}`)} 
    >
      <h3 className="text-lg font-bold mb-2 text-slate-100">{task.title}</h3>
      <p className="text-sm mb-2  text-slate-300">{task.description}</p>
      <div className="flex-1 flex justify-end items-end">
        <span className="p-1 text-xs rounded-sm font-bold text-slate-100">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
