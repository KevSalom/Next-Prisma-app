import TaskCard from "@/Components/TaskCard"

const getData = async()=>{
  const data = await fetch('http://localhost:3000/api/tasks')
  const result = await data.json()
  return  result
}
async function HomePage(){

  const tasks = await getData()

  return (
    <section className=" container mx-auto grid-cols-2 grid md:grid-cols-3 gap-3 mt-10">
      {tasks.map(task =><TaskCard key={task.id} task={task} />)}
    </section>
  )
}

export default HomePage
export const dynamic = 'force-dynamic';