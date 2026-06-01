import HeroCard from '../components/home/HeroCard'

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 min-h-screen">
      <HeroCard className='col-span-2' />
    </div>
  )
}

export default Home