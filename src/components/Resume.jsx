import '../App.css';

function Resume() {
  return (
    <div className='right-side full-width'>
      <header>
        <h1>Josh LaRue</h1>
        <a href="https://linkedin.com/profiles/joshlarue">My LinkedIn Profile</a>
        <p>joshua.larue@edu.sait.ca * (780) 827-5784 * Calgary, AB</p>
        <img src="images/edgar-nKC772R_qog-unsplash.jpg" alt="extremely cute kitten" width='250px' />
      </header>
      <main>
        <section>
          <h3>Education</h3>
          <h4>SAIT: Studying in the Software Development program at the SAIT School for Advanced Digital Technology.</h4>
          <table>
            <tr>
              <td>Sept. 2023 - Present</td>
              <td>SAIT: Studying in the Software Development program at the SAIT School for Advanced Digital Technology.</td>
            </tr>
          </table>
        </section>
        <section>
            <h4>Hobbies</h4>
            <ul>
                <li>Music production</li>
                <li>Web development for friends and family</li>
                <li>Reading and writing</li>
            </ul>
            <h4>Personal Projects</h4>
            <ul>
                <li>Several web projects utilizing HTML, CSS, and vanilla JavaScript</li>
            </ul>
            <a href="https://joshlarue.github.io">Link to my site of personal projects</a>
            <h4>Career Goals</h4>
            <p>I would love to work as a freelance web developer in the future. Working closely with clients
                and being able to devote my entire time to their project's success is a goal of mine.
            </p>
          </section>
      </main>
    </div>
  );
}

export default Resume;