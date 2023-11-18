"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((data) => data.json())
        .then(({ title, description }) => {
          setTitle(title);
          setDescription(description);
        }).catch((error)=>console.error(error))
    }
  }, []);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataTask = {
        title,
        description,
      };

      if(!params.id){
        await fetch("/api/tasks", {
          method: "POST",
          body: JSON.stringify(dataTask),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else{
        await fetch(`/api/tasks/${params.id}`, {
          method: 'PUT',
          body: JSON.stringify(dataTask),
          headers: {
            'Content-Type': 'app`lication/json'
          },
        })
      router.refresh()
      }
      

      router.push("/");
    } catch (error) {
      console.error(error.message);
    }



  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-500 p-4 w-full sm:w-1/4 gap-4 rounded-md"
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            className="rounded-sm  text-black p-1"
            placeholder="Escribe título..."
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="rounded-sm text-black  p-1"
            placeholder="Escribe una descripción..."
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button className="bg-slate-800 py-2 rounded-sm">{(params.id)?'Actualizar tarea':'Crear Tarea'}</button>
      </form>
    </div>
  );
};

export default NewPage;
export const dynamic = 'force-dynamic';