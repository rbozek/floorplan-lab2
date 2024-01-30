import Planet from "./Planet"
import Continent from "./Continent";
import Country from "./Country";

const SolarSystem = (props) => {
  return ( 
    <div>
      This is a solar system. It contains:
      <div className="planet-div">
      <Planet name={'Earth 2222'} moon={'Moon'}/>
        <div className="continent-div">
          <Continent name={'N America'}/>
            <Country name={'U.S.A.'} foods={'hamboigahs'}/> 
        </div>
        <div className="continent-div">
        <Continent name={'S America'}/>
            <>
            <Country name={'Ecuador'} foods={'idk what'}/>
            </>
        </div>
        <div className="continent-div">
        <Continent name={'Antarctica'}/>
            <>
            <Country name={'IceWorld'} foods={'idk what'}/>
            </>
        </div>
      </div>
    

      <div className="planet-div">
      <Planet name={'Mars'} moon={'Phobos'} />
      </div>
      <div className="planet-div">
      <Planet name={'Jupiter'} moon={'Europa'} />
      </div>



      {/* <Moon name={'Moon 2222'} />
      <Continent name={'Continent 2222'} />
      <Country name={'Country 2222'} /> */}
    </div>
  )
}
 
export default SolarSystem