import CardItem from './CardItem'

function Cards(props) {
  return (<>
    {
      props.list.map((item) => <CardItem key={item.id} id={item.id} address={item.address.street} website={item.website} company={item.company.name} name={item.name} nikname={item.username} phone={item.phone} email={item.email} />)
    }

  </>)
}


export default Cards
