import TaskCard from "@/Components/TaskCard"
const getData = async()=>{
  const data = await fetch('http://localhost:3000/api/tasks')
  return await data.json()
}
const HomePage = async() => {

  const tasks = await getData()

  return (
    <section className=" container mx-auto grid-cols-2 grid md:grid-cols-3 gap-3 mt-10">
      {tasks.map(task =><TaskCard task={task} key={task.id} />)}
    </section>
  )
}

export default HomePage
