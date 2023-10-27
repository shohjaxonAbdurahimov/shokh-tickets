import React from 'react'
import { useFetch } from '../hooks/useFetch'
import TicketList from './TicketList'
import { Link } from 'react-router-dom'


function Home() {
    const { data:tickets, isPending, error } = useFetch('http://localhost:3000/tickets')
  return (
    <div className='max-w-3xl mx-auto px-5 py-5 flex flex-col gap-5 w-full mt-6'>
        <div className='flex justify-between'>
            <div>
                <h2 className='text-2xl font-bold text-primary'>Tickets</h2>
                <p className='home-text text-black  '>Currently open tickets.</p>
            </div>
            <Link to='/create' className='btn btn-primary btn-sm flex '>New Ticket</Link>
        </div>
        <div className='flex flex-col'>
            {tickets && <TicketList tickets={tickets} />}
        </div>
    </div>
  )
}

export default Home