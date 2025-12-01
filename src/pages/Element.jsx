import Card from "../components/Card";
import img1 from "../assets/images/img1.jpg"
import Blog1 from "../assets/images/single_blog_1.png.webp"
import Blog2 from "../assets/images/single_blog_2.png.webp"
import Project1 from "../assets/images/project1.png.webp"
import Project2 from "../assets/images/project2.png.webp"
import Project3 from "../assets/images/project3.png.webp"
import Project4 from "../assets/images/project4.png.webp"
import "./Element.css"
const Element = () => {
  return (
    <div>
      <Card
        image={img1}
        heading="OUR ELEMENT"
        linkTo="/"
        pageName="Element"
      />
      <div className="layout-container">
        <h2>Sample Buttons</h2>
        <div className="button-row">
          <button className="btn default">Default</button>
          <button className="btn primary">Primary</button>
          <button className="btn success">Success</button>
          <button className="btn info">Info</button>
          <button className="btn warning">Warning</button>
          <button className="btn danger">Danger</button>
          <button className="btn link">Link</button>
          <button className="btn disabled" disabled>Disable</button>
        </div>
        {}
        <div className="button-row second-row">
          <button className="btn transparent">Default</button>
          <button className="btn transparent1">Primary</button>
          <button className="btn transparent2">Success</button>
          <button className="btn transparent3">Info</button>
          <button className="btn transparent4">Warning</button>
          <button className="btn transparent5">Danger</button>
          <button className="btn transparent6">Link</button>
          <button className="btn transparent7" disabled>Disable</button>
        </div>
        <h3>Left Aligned</h3>
        <div className="section left-align">
          <img src={Blog1} className="section-img" />
           <p> MCSE boot camps have its supporters and its detractors. Some people
                     do not understand why you should have to spend money on boot camp 
                     when you can get the MCSE study materials yourself at a fraction 
                     of the camp price. However, who has the willpower to actually sit
                      through a self-imposed MCSE training. who has the willpower to actually</p>
        </div>
        <h3>Right Aligned</h3>
        <div className="section right-align">
           <p> MCSE boot camps have its supporters and its detractors. Some people
                     do not understand why you should have to spend money on boot camp 
                     when you can get the MCSE study materials yourself at a fraction 
                     of the camp price. However, who has the willpower to actually sit
                      through a self-imposed MCSE training. who has the willpower to actually</p>
          <img src={Blog2} className="section-img" />
        </div>
      </div>
      <div className="extra-container">
        {}
        <h2>Table</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Countries</th>
              <th>Visits</th>
              <th>Percentages</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6,7,8].map((num) => (
              <tr key={num}>
                <td>D{num}</td>
                <td className="country-cell"><img src="https://flagcdn.com/24x18/ca.png" /> Canada</td>
                <td>646032</td>
                <td><div className={`bar bar-${num}`}></div></td>
              </tr>
            ))}
          </tbody>
        </table>
        {}
        <h2>Image Gallery</h2>
        <div className="gallery">
          {[Project1,Project2,Project3,Project4].map((img) => (
            <img key={img} className="gallery-img" src={img} />
          ))}
        </div>
      </div>
      {}
      <div className="ui-container">
        <div className="section1">
          <h2>Image Gallery</h2>
          <h1>This is header 01</h1>
          <h2>This is header 02</h2>
          <h3>This is header 03</h3>
          <h4>This is header 04</h4>
          <h5>This is header 01</h5>
          <h6>This is header 01</h6>
        </div>
        <div className="lists-section">
          <div className="column">
            <h3>Unordered List</h3>
            <ul>
              <li>Fixa Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing</li>
            </ul>
          </div>
          <div className="column">
            <h3>Ordered List</h3>
            <ol>
              <li>Fixa Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing</li>
            </ol>
          </div>
        </div>
        {}
        <div className="section controls">
          <div className="switches">
            <h3>Switches</h3>
            <label><input type="checkbox" /> Sample Switch</label>
            <label><input type="checkbox" /> Primary Color Switch</label>
          </div>
          <div className="selectboxes">
            <h3>Selectboxes</h3>
            <select>
              <option>English</option>
              <option>Urdu</option>
              <option>French</option>
            </select>
          </div>
          <div className="checkboxes">
            <h3>Checkboxes</h3>
            <label><input type="checkbox" /> Sample Checkbox</label>
            <label><input type="checkbox" /> Primary Color Checkbox</label>
          </div>
          <div className="radios">
            <h3>Radios</h3>
            <label><input type="radio" name="r1" /> Sample radio</label>
            <label><input type="radio" name="r1" /> Primary Color radio</label>
          </div>
        </div>
        {}
        <div className="section form">
          <h3>Form Element</h3>
          <div className="form-grid">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Country" />
            <textarea placeholder="Message"></textarea>
            <input type="text" placeholder="Primary color" />
            <input type="text" placeholder="Accent color" />
            <input type="text" placeholder="Secondary color" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Element
