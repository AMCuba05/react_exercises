const Item = ({item}) => {
    return(
        <button style={{backgroundColor: item.color}} >{item.name}</button>
    )
}

export default Item