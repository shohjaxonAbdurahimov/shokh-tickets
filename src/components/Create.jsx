import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


function Create() {
  const { data, isPending, error, newData } = useFetch("http://localhost:3000/tickets", "POST")
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState(null);

  const resetInputs = () => {
    setTitle('')
    setBody('')
    setPriority(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    newData({
      title: title,
      body: body,
      id: uuidv4(),
    })
    resetInputs()
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className='text-2xl font-bold  text-primary'>New tickets </h2>
      <form className="card-bg bg-inherit bg p-5" onSubmit={handleSubmit}>
        <label for="title">
          <h3>Title: </h3>
        </label>
        <input className="input-one" onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" />
        <label for="body">
          <h3>Bio : </h3>
        </label>
        <textarea onChange={(e) => setBody(e.target.value)} value={body} name="body" className="input-two "></textarea>
        <label for="priority">
          <h3>Priority: </h3>
        </label>
        <select onChange={(e) => setPriority(e.target.value)} value={priority} name="priority" className="input-three">
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <div className="flex flex-col gap-5 items-center mt-5">
          <button className=" flex w-[350px] bg-primary p-2 justify-center items-center rounded-sm text-white ">Add Ticket</button>
        </div>
      </form>
    </div>
  )
}

export default Create