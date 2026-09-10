function Studentcard(props){
  
  return (
      <> 
    <p>Welcome to the Studentcard component, {props.name}</p>
    <p>Class: {props.class}</p>
    <p>Value: {props.value}</p>
    </>
  )
}


export default Studentcard