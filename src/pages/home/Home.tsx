import { NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import qs from "qs";
import ajax from "../../utils/axios";

const Home = () => {
  const nosotresSection = useRef();
  const proyectosSection = useRef();

  const scrollToNosotres = () => nosotresSection.current.scrollIntoView();
  const scrollToProyectos = () => proyectosSection.current.scrollIntoView();

  const [proyectos, setProyectos] = useState([]);

  const initData = async () => {
    const QUERY = qs.stringify(
      {
        filters: {
          $and: [
            {
              categoria: {
                $eq: "proyectos",
              },
            },
            {
              showHome: {
                $eq: true,
              },
            },
          ],
        },
        // fields: ["title"],
        // pagination: {
        //   pageSize: 3,
        //   page: 1,
        // },
        publicationState: "live",
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    try {
      const RESPONSE = await ajax.get(`/api/posts?${QUERY}`);

      console.log(RESPONSE);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initData();
  }, []);

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
            <NavLink
              className="navLink"
              to="#nosotres"
              onClick={scrollToNosotres}
            >
              Nosotres
            </NavLink>
            {"  |  "}
            <NavLink
              className="navLink"
              to="#proyectos"
              onClick={scrollToProyectos}
            >
              Proyectos
            </NavLink>
            {"  |  "}
            <NavLink className="navLink" to={"/donaciones"}>
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
      <h3 id="nosotres" ref={nosotresSection}>
        Sobre nosotres
      </h3>
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

      <h3 id="proyectos" ref={proyectosSection}>
        Proyectos
      </h3>
    </div>
  );
};

export default Home;
