import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='max-w-3xl mx-auto px-5 py-5 flex flex-col gap-5 w-full mt-6'>
      <h2 className='text-1xl font-bold text-primary'>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam eum corporis quod ducimus perferendis soluta. Laboriosam omnis numquam quas distinctio facere autem maiores hic, beatae libero aliquam asperiores eligendi dolorem illum alias assumenda perferendis? Molestiae maxime.</p>
      <div className='flex flex-col items-center'>
        <Link to='/' className='btn btn-primary btn-sm mt-5 mb-4 '>View Tickets</Link>
      </div>
      <h2 className='text-1xl font-bold text-primary'>Company Updates</h2>
      <div className='bg-white p-5'>
        <h2 className='text-1xl font-semibold'>New member of the web dev team...</h2>
        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati tenetur doloribus quaerat esse ad nulla neque, tempora porro ipsam?</p>
      </div>
      <div className='bg-white p-5'>
        <h2 className='text-1xl font-semibold'>New website live!</h2>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti hic sint ipsum aliquam consequuntur! Velit eaque numquam accusamus nobis adipisci provident, neque aliquam commodi facilis? Quam eligendi similique ipsum!</p>
      </div>
    </div>
  )
}

export default Dashboard