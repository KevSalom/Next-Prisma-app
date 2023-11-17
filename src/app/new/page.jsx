"use client";

import { useRouter } from "next/navigation";

const NewPage = () => {

  const router = useRouter()
  const handleSubmit = async(e) => {
   e.preventDefault()
   try {
    const dataTask = {title:e.target.title.value, description: e.target.description.value}
   const response = await fetch('/api/tasks', {
    method:'POST',
    body: JSON.stringify(dataTask),
    headers:{
      'Content-Type':'application/json'
    }
   })
   e.target.reset()
  router.push('/')
   } catch (error) {
     console.error(error.message)
   }
   
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-500 p-4 w-full sm:w-1/4 gap-4 rounded-md"
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="title" >Titulo</label>
          <input type="text" id="title" name="title"  className="rounded-sm  text-black p-1"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" >Descripción</label>
          <textarea name="description" id="description" rows="3" className="rounded-sm text-black  p-1"></textarea>
        </div>
        <button className="bg-slate-800 py-2 rounded-sm">Crear Tarea</button>
      </form>
    </div>
  );
};

export default NewPage;
