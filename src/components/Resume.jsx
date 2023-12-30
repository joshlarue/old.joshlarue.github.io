import '../App.css';

function Resume() {
  return (
    <div className='right-side full-width'>
      <header className='resume-header'>
        <div className="resume-hero">
          <h1>Josh LaRue</h1>        
          <img src="headshot.png" alt="my likeness" width='100px' />
        </div>
        <div className="resume-contact">
          <a href="https://linkedin.com/in/joshua-larue-swd" target='_blank'>My LinkedIn Profile</a>
          <p>joshua.larue@edu.sait.ca * (780) 827-5784 * Calgary, AB</p>
        </div>
      </header>
      <main>
        <section className='resume-section'>
          <h2>Education</h2>
          <h5>Sept. 2023 - Present</h5>
          <p>Studying in the Software Development program at the SAIT School for Advanced Digital Technology.</p>
        </section>
        <section className='resume-section'>
          <h2>Projects</h2>
          <a href="https://joshlarue.github.io" target='_blank'>My personal projects</a>
          <ul>
              <li>Several web projects utilizing HTML, CSS, and vanilla JavaScript</li>
              <li>SAIT CourSearch (placed third in a SAIT-run hackathon)</li>
              <li>Nextcloud home server</li>
          </ul>
        </section>
        <section className='resume-section'>
          <h2>Hobbies</h2>
          <ul>
            <li>Music production</li>
            <li>Web development for friends and family</li>
            <li>Reading and writing</li>
          </ul>
        </section>
        <section className='resume-section'>
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