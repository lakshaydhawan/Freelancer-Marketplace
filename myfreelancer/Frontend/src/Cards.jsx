function Cards(props){
    return(
        <>
        <div className="card" style={{width:300}} >
  <img style={{width:200,height:250,marginLeft:50,marginTop:10}} className="card-img-top" src={props.im} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.review}</p>
    
  </div>
</div>
        </>
    )
}
export default Cards;