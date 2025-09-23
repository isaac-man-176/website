import "/src/index.css";

export default function Gallery() {
  return (
    <div className="projectsPage">
      <br></br><br></br>
      <h1 className="projectsHeader">Projects</h1>
      <div className = "gallerySection">

        <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="/images/FRCclimb.gif" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">Prototyping, CAD, Onshape, Glowforge Laser Cutting</p>
        <h1 className="projectTitle">Donut Deep Climb Mechanism</h1>
        <p className = "description">Designed a robust two prong lift mechanism for the 120 lbs 8884 Knight Owls - First Robotics Competition robot. The high torque lift mechanism pushes down and balances on the cage. Ran through multiple tests: using laser cutted wood for early prototyping, and testing various thicknesses of aluminum/steel. Also experimented with various curves for the prongs to help the robot balance.
</p>
      </section>

      <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="/images/EVcar.gif" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">Electrical Wiring, CFD, CAD, Onshape, Fusion 360, CNC, 3D Print
</p>
        <h1 className="projectTitle">Waterloo EV Challenge
</h1>
        <p className = "description">Designed a robust and efficient vehicle, optimizing the shape with CFD analysis. Promoted sustainability by repurposing unused robotics components and optimizing material efficiency. Used various electrical devices such as 2 WCP Kraken X60 Motors, and implemented a steering and braking system. Achieved a top speed of 40 km/h.
</p>
        <a href="https://cad.onshape.com/documents/05cf3b641ee4c460f41d1e71/w/67c9bd82c64e835995ff3b82/e/f7ecb65d8b774b501f7e5767?renderMode=0&uiState=68c5f838cdd257f1bfe7e6f0" target="_blank" rel="noopener noreferrer"><button className="resumeButton">Onshape CAD File</button></a>

      </section>

      <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="/images/TTCTruckCAD.png" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">CAD, Mechanical Draiwngs, Onshape
</p>
        <h1 className="projectTitle">Ariel Freightliner Truck
</h1>
        <p className = "description">Created a 3D CAD model of various control system assemblies, such as storage containers, lights, a fuel tank, ariel lift elevator, and reinforcement frames. Developed detaield mechanical drawings to assist mechanics in the production line.
</p>
        <a href="\images\TTC_Truck_Drawing_Package.pdf" download><button className="resumeButton">Download Mechanical Drawings</button></a>
        <a href="https://cad.onshape.com/documents/0f5ba5d7489b6b53202310ac/w/59f94dcc740d5dab35963c14/e/90291b965c0a4cbe4f57a10a?renderMode=0&uiState=68c5f5c97539e8eb42522522" target="_blank" rel="noopener noreferrer"><button className="resumeButton">Onshape CAD File</button></a>



      </section>

      <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="public\images\skills_comp_drawing.png" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">CAD, Mechanical Draiwng, Onshape, Fusion 360 Render, GD&T
</p>
        <h1 className="projectTitle">Mechanical CAD Skills Ont. Comp.
</h1>
        <p className = "description">Bronze Medalist. Redesigned a fully parametric 3D window assembly to enable multi-purpose configurability for 100+ window sizes
and shapes, improve ergonomics and usability, and allow new prototypes to be created in under 3 minutes.
</p>
        <a href="\images\skills_ont_drawing_package_and_render.pdf" download><button className="resumeButton">Download Mechanical Drawings and Render</button></a>
        <a href="https://cad.onshape.com/documents/fbfcd6d49c88085e5c4f4f6b/w/0c0a2ae28f8953a419ccd696/e/8a16dd29e7d49de88d2394e3?renderMode=0&uiState=68d21ea173602ad1b26faeb2" target="_blank" rel="noopener noreferrer"><button className="resumeButton">Onshape CAD File</button></a>



      </section>

      <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="/images/Cansat.jpeg" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">C++, Arduino, Prototyping, CAD, Onshape</p>
        <h1 className="projectTitle">Can-Sat Miniature Satellite</h1>
        <p className = "description">Constructed a mini satellite to detect temperature, air pressure, and acceleration, using a BMP 280 and MPU
6050 sensor, soldered onto an Arduino UNO R3 board. The satellite was dropped 100+ meters above ground and successfully captured various data of the atmosphere.
</p>
      </section>

      <section className = "galleryBox">
        <div className = "imageBox">
        <img src ="/images/Pacman.jpeg" alt = "img" className ="galleryImages"></img>
        </div>
        <p className="skillz">Glowforge Laser Cutting, CNC, 3D Printing, CAD, Onshape
</p>
        <h1 className="projectTitle">Pacman Mechanical Simulation

</h1>
        <p className = "description">Created a physical simulation of the game Pacman, with various gears, linkages, and mechanisms to add motion. Added electrical components to motorize the crank handle that runs the simulation.

</p>
        <a href="https://cad.onshape.com/documents/2822d7125bd57a790487e426/w/f6529e9e47a20687f1f2ad04/e/1039c757fb191a435a34f593?renderMode=0&uiState=68c5f7baf3beaa0f0d676011" target="_blank" rel="noopener noreferrer"><button className="resumeButton">Onshape CAD File</button></a>

      </section>

      </div>
    </div>
  );
}