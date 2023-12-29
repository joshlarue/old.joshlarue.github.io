import '../App.css';

function Resume() {
  return (
    <div className='right-side full-width'>
      <header className='resume-header'>
        <div className="resume-hero">
          <h1>Josh LaRue</h1>        
          <img src="headshot.png" alt="my likeness" width='100px' />
        </div>
        <a href="https://linkedin.com/profiles/joshlarue">My LinkedIn Profile</a>
        <p>joshua.larue@edu.sait.ca * (780) 827-5784 * Calgary, AB</p>
      </header>
      <main>
        <section>
          <h2>Education</h2>
          <p>Sept. 2023 - Present</p>
          <h4>SAIT: Studying in the Software Development program at the SAIT School for Advanced Digital Technology.</h4>
          <h2>Projects</h2>
          <ul>
              <li>Several web projects utilizing HTML, CSS, and vanilla JavaScript</li>
          </ul>
          <a href="https://joshlarue.github.io">Link to my site of personal projects</a>
          <h2>Hobbies</h2>
          <ul>
              <li>Music production</li>
              <li>Web development for friends and family</li>
              <li>Reading and writing</li>
            </ul>

            <h2>Career Goals</h2>
            <p>I would love to work as a freelance web developer in the future. Working closely with clients
                and being able to devote my entire time to their project's success is a goal of mine.
            </p>
          </section>
      </main>
    </div>
  );
}

export default Resume;