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
      </section>

      </div>
    </div>
  );
}