import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div
      style={{
        padding: "10px",

        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div style={{ height: "100vh" }}>
        <div className="box-dos-art">
          <pre>
            {`
█████   █████                    █████         ██████                       
░░███   ░░███                    ░░███         ███░░███                      
 ░███    ░███   ██████    ██████  ░███ █████  ░███ ░░░  █████ ████ ████████  
 ░███████████  ░░░░░███  ███░░███ ░███░░███  ███████   ░░███ ░███ ░░███░░███ 
 ░███░░░░░███   ███████ ░███ ░░░  ░██████░  ░░░███░     ░███ ░███  ░███ ░███ 
 ░███    ░███  ███░░███ ░███  ███ ░███░░███   ░███      ░███ ░███  ░███ ░███ 
 █████   █████░░████████░░██████  ████ █████  █████     ░░████████ ████ █████
░░░░░   ░░░░░  ░░░░░░░░  ░░░░░░  ░░░░ ░░░░░  ░░░░░       ░░░░░░░░ ░░░░ ░░░░░ 
          `}
          </pre>
        </div>
        <div className="container-home-navbar">
          <div className="home-navbar">
            <NavLink className="navLink" to={"/"}>
              Inicio
            </NavLink>
            {"  |  "}
            <NavLink className="navLink" to="#nosotres">
              Nosotres
            </NavLink>
            {"  |  "}
            <NavLink className="navLink" to="/donaciones">
              Donaciones
            </NavLink>
          </div>
        </div>
        <div className="box-ascci-art">
          <pre className="ascci-art-hackfun">
            {`                                                                                          
                      @@@@@                                          
                      @@@@@     @@@@@@    @@@@@                                
                  @@@@@@@@@     @@@@@     @@@@@@@@@                            
               @@@@@@@@        @@ @@          @@@@@@@@                         
             @@@@@@           @@   @              @@@@@@                       
           @@@@@             @@    @                 @@@@@                     
         @@@@@             @@      @@                  @@@@@                   
        @@@@              @@        @                    @@@@@                 
      @@@@@              @@         @@                     @@@@                
     @@@@               @         @@@@@@                    @@@@               
    @@@@           @@ @@          @@@@@@                     @@@@              
   @@@@          @@@@@@            @@@@  @@@@                 @@@@             
   @@@@          @@@@@@              @@      @@@@   @@@        @@@@            
  @@@@          @@@@@@@@              @           @@@@@@@      @@@@            
   @@        @@@         @@           @@          @@@@@@@       @@@@           
          @@@              @@          @          @@@@@         @@@@           
        @@                   @@@       @@        @    @@         @@@           
 @@@@@@@                        @@      @      @@      @         @@@           
@@@@@@                            @@    @     @        @@        @@@           
@@@@@@@@@                           @@@  @  @@          @@       @@@           
         @@@@                          @@@@@@            @       @@@           
              @@@@@@@@@         @@@@@@@@@@@@@            @@     @@@@           
   @@            @@@@@@@@@@@            @@@@              @     @@@@           
  @@@@            @@@@@                  @                 @    @@@            
  @@@@             @@                   @@                 @@                  
   @@@@            @@                   @                   @@                 
    @@@@           @@                   @                  @@@@@@              
     @@@@          @@                  @@             @@@@@@@@@@@              
      @@@@         @                @@@@@@@@@@@@@@@         @@@@               
       @@@@@       @                @@@@@@                                     
         @@@@      @           @@@@  @@@@               @@                     
          @@@     @@      @@@@                        @@@@@                    
                @@@@@@@@@                          @@@@@@                      
                @@@@@@                          @@@@@@@                        
                 @@@@                      @@@@@@@@@                           
                         @@@@@@@@@@@@@@@@@@@@@@@                               
                          @@@@@@@@@@@@@@@@@                                    
`}
          </pre>
        </div>
      </div>
      <h3 id="nosotres">Sobre nosotres</h3>
      <p>
        Somos una comunidad que comparte una gran variedad de intereses, la
        curiosidad, y el entusiasmo por el trabajo colaborativo y con impacto
        social. Nos interesa (entre otras cosas) la programación, la
        electrónica, la cultura libre, la retrocomputación, los videojuegos
        (viejos y nuevos), la música y también somos la Célula Rosario de
        Cybercirujas. Somos activistas de la seguridad y la privacidad en la
        vida digital, de la conservación de los datos, la cultura y el
        conocimiento, y trabajamos para fomentar la inclusión y la diversidad.
      </p>
    </div>
  );
};

export default Home;
