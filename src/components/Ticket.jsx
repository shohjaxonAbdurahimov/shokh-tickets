import { NavLink, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Ticket() {
  const { id } = useParams()
  const url = 'http://localhost:3000/tickets/' + id
  const { data: ticket, error, isPending } = useFetch(url)
  return (
    <div className="max-w-3xl mx-auto">
      {ticket && <>
        <div className="bg-white p-5 rounded-2xl shadow-xl">
          <h2 className="font-bold">{ticket.title}</h2>
          <p className="mt-5">
            <span className="">body:</span> {ticket.body}
          </p>
          <span className='cards-priority'>{ticket.priority}</span>
          <NavLink className="btn btn-outline btn-secondary mt-4" to="/">Go ticket</NavLink>
        </div>
      </>}
    </div>
  )
}

export default Ticket