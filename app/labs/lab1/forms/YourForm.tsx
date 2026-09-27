export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <div>
        <label htmlFor="wd-first-name">First Name</label>
        <br />
        <input
          type="text"
          id="wd-first-name"
          defaultValue="Kavina"
          placeholder="First name"
        />
      </div>

      <div>
        <label htmlFor="wd-last-name">Last Name</label>
        <br />
        <input
          type="text"
          id="wd-last-name"
          defaultValue="Mansukhani"
          placeholder="Last name"
        />
      </div>

      <div>
        <label htmlFor="wd-my-password">Password:</label>
        <br />
        <input
          type="password"
          id="wd-my-password"
          defaultValue="p@s5w@rd"
          placeholder="Password"
        />
      </div>
      <br />

      <div>
        <label htmlFor="wd-my-textarea">About Me:</label>
        <br />
        <textarea
          id="wd-my-textarea"
          rows={10}
          cols={30}
          defaultValue="My name is Kavina, I am from the Caribbean. I am half Indian and half Dominican. I love reading and some of my favorite books are The Song of Achilles or The Silent Patient. I am excited about this course because in the future I want to be a UX/UI Designer or Web Designer in the future and I think this class will help me gain skills for this goal." >
          </textarea>
      </div>
      <br />

      <div>
        <label>What Year Are You In?</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-freshman" />
        <label htmlFor="wd-radio-freshman">Freshman</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-sophomore" />
        <label htmlFor="wd-radio-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-junior" defaultChecked />
        <label htmlFor="wd-radio-junior">Junior</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-senior" />
        <label htmlFor="wd-radio-senior">Senior</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-graduate" />
        <label htmlFor="wd-radio-graduate">Graduate</label>
        <br />

        <br />
        <label>How Much Are You On Campus?</label>
        <br />
        <input
          type="radio"
          name="radio-campus-time"
          id="wd-radio-full-time"
          defaultChecked
        />
        <label htmlFor="wd-radio-full-time">Full-Time</label>
        <br />
        <input type="radio" name="radio-campus-time" id="wd-radio-part-time" />
        <label htmlFor="wd-radio-part-time">Part-Time</label>
        <br />
        <input type="radio" name="radio-campus-time" id="wd-radio-commuter" />
        <label htmlFor="wd-radio-commuter">Commuter</label>
        <br />
      </div>
      <br />

      <div>
        <label>My Interests</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-design" />
        <label htmlFor="wd-chkbox-design">Designing Apps</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-reading" />
        <label htmlFor="wd-chkbox-reading">Reading Books</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-movies" />
        <label htmlFor="wd-chkbox-movies">Watching Movies</label>
        <br />

        <br />
        <label>Languages</label>
        <br />
        <input
          type="checkbox"
          name="check-language"
          id="wd-chkbox-english"
          defaultChecked
        />
        <label htmlFor="wd-chkbox-english">English</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-french" />
        <label htmlFor="wd-chkbox-french">French</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-spanish" />
        <label htmlFor="wd-chkbox-spanish">Spanish</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-dutch" />
        <label htmlFor="wd-chkbox-dutch">Dutch</label>
        <br />
      </div>
      <br />

      <div>
        <label htmlFor="wd-select-one-major">University Major (select one):</label>
        <br />
        <select id="wd-select-one-major" defaultValue="COMPSCI">
          <option value="COMPSCI">Computer Science</option>
          <option value="DES">Design</option>
          <option value="BUS">Business</option>
          <option value="FILM">Film</option>
        </select>
        <br />

        <br />
        <label htmlFor="wd-select-many-skills">
          What Do You Want To Improve This Term? (select many)
        </label>
        <br />
        <select
          multiple
          id="wd-select-many-skills"
          defaultValue={["CSS", "REACT"]}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JavaScript</option>
          <option value="REACT">React</option>
          <option value="NEXT">Next.js</option>
        </select>
        <br />
      </div>
      <br />

      <div>
        <label htmlFor="wd-my-email">Email: </label>
        <input
          type="email"
          id="wd-my-email"
          defaultValue="mansukhani.k@northeastern.edu"
          placeholder="SAMPLE - jane@university.edu"
        />
        <br />

        <label htmlFor="wd-grad-yr">Estimated Graduation Year: </label>
        <input
          type="number"
          id="wd-grad-yr"
          defaultValue="2028"
          placeholder="SAMPLE - 2028"
          min={2026}
          max={2032}
        />
        <br />

        <label htmlFor="wd-my-birthday">My Birthday: </label>
        <input
          type="date"
          id="wd-my-birthday"
          defaultValue="2006-04-06"
          min="1900-01-01"
          max="2025-12-31"
        />
        <br />

        <label htmlFor="wd-course-range">How Excited Am I (0 to 10):</label>
        <input
          type="range"
          id="wd-course-range"
          defaultValue="8"
          min="0"
          max="10"
        />
      </div>
      <br />

      <div>
        <button id="wd-save-button" type="submit">
          Save
        </button>
        <button id="wd-cancel-button" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
