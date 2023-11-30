
import TaskCard from "@/Components/TaskCard"
import Link from "next/link";

const getData = async()=>{
  console.log('entro')
  const data = await fetch('http://localhost:3000/api/tasks')
  const result = await data.json()
  return  result
}

async function HomePage(){

  const tasks = await getData()

  return (<>
    <section className=" container mx-auto grid-cols-2 grid md:grid-cols-3 gap-3 mt-10">
      {tasks.map(task =><TaskCard key={task.id} task={task} />)}
    </section>
       <Link href='/new' >New</Link>
    </>
  )
}

export const dynamic = 'force-dynamic';
export default HomePage



// 'use client'
// import { useEffect, useState } from "react";
// import TaskCard from "@/Components/TaskCard"
// import Link from "next/link";

// const getData = async()=>{
//   console.log('entro')
//   const data = await fetch('http://localhost:3000/api/tasks')
//   const result = await data.json()
//   return  result
// }

// function HomePage(){

//  const [tasks, setTasks] = useState(null)

//   useEffect(()=>{
//     getData().then((data)=>setTasks(data))
//   },[])


//   return (<>
//     <section className=" container mx-auto grid-cols-2 grid md:grid-cols-3 gap-3 mt-10">
//       {tasks?.map(task =><TaskCard key={task.id} task={task} />)}
//     </section>
//        <Link href='/new' >New</Link>
//     </>
//   )
// }

// export default HomePage


