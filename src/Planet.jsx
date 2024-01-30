import Continent from "./Continent"


const Planet = (props) => {
  return ( 
    <div>
      {props.name} has a moon named:&nbsp;
      {props.moon} 
    </div>
    
  )
}

export default Planet