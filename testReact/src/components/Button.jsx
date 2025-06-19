function Button(){

    const handleClick = () => console.log("OUCH!");
    const handleClick2 =(name) => console.log(`${name} stop clicking more` );
  return(<button onClick={() =>handleClick2("bro")}> Click More</button>);
}

export default Button