import './App.css';
import profileImage from './profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="portfolio-header">
        <div className="profile-container">
          <img src={profileImage} className="profile-image" alt="Profile" />
          <h1 className="name">გიორგი ქართველიშვილი</h1>
          <p className="title">Full Stack დეველოპერი</p>
        </div>

        <div className="about-section">
          <h2>ჩემს შესახებ</h2>
          <p className="description">
            მე ვარ გატაცებული ვებ დეველოპერი, რომელსაც აქვს გამოცდილება თანამედროვე 
            ტექნოლოგიებით მუშაობაში. ვქმნი ინოვაციურ და მომხმარებელზე ორიენტირებულ 
            ვებ აპლიკაციებს, რომლებიც აერთიანებენ ფუნქციონალურობას და დიზაინს.
          </p>
        </div>

        <div className="skills-section">
          <h2>ჩემი უნარები</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div className="skill-item">
              <h3>Tools</h3>
              <p>Git, VS Code, npm</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>კონტაქტი</h2>
          <p>📧 email@example.com</p>
          <p>📱 +995 555 12 34 56</p>
        </div>
      </header>
    </div>
  );
}

export default App;
