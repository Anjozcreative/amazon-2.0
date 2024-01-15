import Header from './components.js/Header'
import Banner from './components.js/Banner'
import ProductFeed from './components.js/ProductFeed'

export default async function Home() {

  const products = await getData()

  return (
    <div className='bg-gray-100'>
    {/**this is the header component */}
    <Header />
    <main className='max-w-screen-2xl mx-auto'>
      {/**this is the Banner */}
      <Banner />

      <ProductFeed products={products}/>
    </main>
    </div>
  )
}

async function getData() {
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  return(
    products
  )
}
