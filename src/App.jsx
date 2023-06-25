import './App.css'
import Hero from './component/Hero.jsx';
import Navbar from './component/Navbar.jsx';
import Card from './component/Card.jsx';
import data from './data.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {
          data.map(function (cardItem) {
            return (
              <Card
                // personImage={cardItem.coverImg}
                // rating={cardItem.stats.rating}
                // reviewCount={cardItem.stats.reviewCount}
                // title={cardItem.title}
                // desc={cardItem.description}
                // location={cardItem.location}
                // price={cardItem.price}
                // openSpots={cardItem.openSpots}
                {...cardItem}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App
