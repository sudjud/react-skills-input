function Item({name, clickHandler}) {
  return (
    <div className="item">
      <div className="item__name">{ name }</div>
      <div 
        className="item__delete"
        onClick={clickHandler}
      > x </div>
    </div>
  )
};
export default Item;