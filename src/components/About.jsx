export default function About() {
  return (
    <section className="pagePadding">
        <br></br><br></br>
      <h1 className = "bigHeader">Hi, I'm Isaac!</h1>
      <br></br>
      <section className="bioSection">
      <p>
        I’m an aspiring mechanical engineer based in Toronto, Ontario, with a deep passion for creating innovative and creative solutions to real world problems!
        <br></br><br></br>
        I’m currently in my 1A term, studying Systems Design Engineering at the University of Waterloo.
        <br></br><br></br>
        Outside of school and work, I enjoy my leisure time picking up new programming languages (currently Reactjs and Python), solving Leetcode projects, flying Cessna 152 aircraft, and playing video games.
        <br></br><br></br>
        If you’re interested in connecting with me or if you have any further inquiries, feel free to reach out through LinkedIn or email!
      </p>
      <div className = "imageSection">
      <img src="\images\IsaacManProfilePic.jpeg" alt = "Isaac Man"></img>
      <div className = "smallButtons">
      <a href="https://github.com/isaac-man-176" target="_blank" rel="noopener noreferrer"><img src="/images/githublogo.png" className = "githubLogo"></img></a>
      <a href="https://www.linkedin.com/in/isaac-man-865621305/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedinlogo.png" className = "linkedinLogo"></img></a>
      <a href="\images\Isaac_Man___General_Resume___Updated_Sept_11__2025.pdf" download><button className="resumeButton">Resume</button></a>
      </div>
      </div>
      </section>
    </section>
  );
}
