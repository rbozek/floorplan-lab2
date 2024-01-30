import SolarSystem from "./SolarSystem"



const Galaxy = (props) => {
  return ( 
    <div>
    {props.name} Galaxy Contains:
    <SolarSystem />
    </div>
  )
}

export default Galaxy 