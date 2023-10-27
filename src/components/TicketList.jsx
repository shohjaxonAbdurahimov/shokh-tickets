import React from 'react'
import { Link } from 'react-router-dom'

function TicketList({tickets}) {
  return (
    <ul className='flex flex-col gap-10'>
        {tickets.map((ticket) => {
            const {id, title, body, priority} = ticket;
            return  <li key={id} className="bg-white p-5 rounded-2xl shadow-xl">
                        <div>
                            <h2 className='font-bold'>
                                {title}
                            </h2>
                            <p className='mt-5'>
                                {body.substring(0, 100)}...
                            </p>
                            <span className='cards-priority'>{priority}</span>
                            <Link to={`/tickets/${id}`} className="btn btn-outline btn-secondary mt-5 cards-read">Read More</Link>
                        </div>
                    </li>
                })}
    </ul>
  )
}

export default TicketList