import fetch from 'isomorphic-unfetch'
// import './_app.css'
import Cards from '../components/Cards'

function Home({ cards }) {
  return (<div>
    <Cards list={cards} /></div>)
}

Home.getInitialProps = async ctx => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()

  return { cards: json }
}

export default Home
