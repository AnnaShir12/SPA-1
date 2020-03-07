
function CardItem(props) {
  // console.log(props)
  return (<div className="user-card" onClick={() => console.log(props.id)}>
    <div className="user-card__photo"></div>
    <div className="user-card__name">{props.name}</div>
    <div className="user-card__username">@{props.nikname}</div>
    <div className="user-card__company">{props.company}</div>
    <div className="user-card__phone">{props.phone}</div>
    <div className="user-card__email">{props.email}</div>
    <div className="user-card__address">{props.address}</div>
    <div className="user-card__website">{props.website}</div>
    <style jsx>{`
body{
  background-color: #F5F5F5;
}
  a{
    text-decoration: none;
    color:  #e2587c;
  }
   
  .user-card{
    position: relative;
    background-color: white;
    width: 30%;
    margin: 20px auto;
    padding: 30px;
    box-shadow:  0px 0px 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
  }
  .user-card__photo,
  .user-card__name,
  .user-card__username,
  .user-card__company,
  .user-card__phone,
  .user-card__email,
  .user-card__address,
  .user-card__website {
    margin-bottom: 20px;
    font-size: 16px;
    color: #626262;
  }
  .user-card__photo{
    width: 100px;
    height: 100px;
    margin: 0 auto 20px auto;
    box-shadow:  0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 50%;
  }
  .user-card__name{
    font-size: 24px;
    font-weight: 700;
    color: #e2587c;
  }
  .user-card__email{
    font-style: italic;
  }
`}</style>
  </div>

  )

}

export default CardItem
