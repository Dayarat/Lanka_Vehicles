import React from 'react';
import '../styles/homepage.css'; 
import backgroundImage from '../styles/Assests/home.png'; 
import icon1 from '../styles/Assests/Logo1.png'; 
import icon2 from '../styles/Assests/Logo2.png';
import icon3 from '../styles/Assests/Logo3.png';
import icon4 from '../styles/Assests/Logo4.png';
import icon5 from '../styles/Assests/Logo5.png';
import icon6 from '../styles/Assests/Logo6.png';
import icon7 from '../styles/Assests/Logo7.png';
import cardImage1 from '../styles/Assests/card1 (1).png'; // Import card images
import cardImage2 from '../styles/Assests/card2.png';
import cardImage3 from '../styles/Assests/card3.png';
import cardImg1 from '../styles/Assests/Icon.png';
import cardImg2 from '../styles/Assests/Icon1.png';
import image6 from '../styles/Assests/Frame 35.png';
import Image1 from '../styles/Assests/image 18.png';
import Image2 from '../styles/Assests/image 19.png';
import Image3 from '../styles/Assests/image 20.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="first-section">
        <div className="left-section">
        <h1>Are You Ready To Start <br></br><span className='sub-text'>Driving Journey ?</span></h1>
                    <p>Where to grow your business</p>
          <button>Register</button>
        </div>
        <div className="right-section">
          <img src={backgroundImage} alt="Background" />
        </div>
      </section>
      
      <section className="second-section">
        <div className="section-content">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="image-grid">
          <img src={icon1} alt="Icon 1" />
          <img src={icon2} alt="Icon 2" />
          <img src={icon3} alt="Icon 3" />
          <img src={icon4} alt="Icon 4" />
          <img src={icon5} alt="Icon 5" />
          <img src={icon6} alt="Icon 6" />
          <img src={icon7} alt="Icon 7" />
        </div>
      </section>


      <section className="third-section">
        <div className="section-content">
          <h2>Manage Your Entire Community<br></br>
in a Single System</h2>
          <p>Who is Nextcent Suitable for?</p>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={cardImage1} alt="Card 1" />
            <h3>Membership Organizations</h3>
            <p>Our membership<br></br> management software<br></br> provides full automation of<br></br> membership renewals and<br></br> payments</p>
          </div>
          <div className="card">
            <img src={cardImage2} alt="Card 2" />
            <h3>National Associations</h3>
            <p>Our membership<br></br> management software<br></br> provides full automation of<br></br> membership renewals and<br></br> payments</p>
          </div>
          <div className="card">
            <img src={cardImage3} alt="Card 3" />
            <h3>Clubs And Groups</h3>
            <p>Our membership<br></br> management software<br></br> provides full automation of<br></br> membership renewals and<br></br> payments</p>
          </div>
        </div>
      </section>


      <section className="fourth-section">
        <div className="section-content">
          <h2><span className='mid'>Helping a Local </span>Vehicle <br></br>Reinvent Itself</h2>
          <p>We Reached here with our Hard Work and Dedication</p>
        </div>
        <div className="card2-container">
          <div className="card2">
            <img src={cardImg1} alt="Card 1" />
            <div className="card2-info">
              <h3>2,245,333</h3>
              <p>Members</p>
            </div>
          </div>
          <div className="card2">
            <img src={cardImg1} alt="Card 2" />
            <div className="card2-info">
              <h3>2,245,333</h3>
              <p>Members</p>
            </div>
          </div>
          <div className="card2">
            <img src={cardImg2} alt="Card 3" />
            <div className="card2-info">
              <h3>2,245,3</h3>
              <p>Event Booking</p>
            </div>
          </div>
          <div className="card2">
            <img src={cardImg1} alt="Card 4" />
            <div className="card2-info">
              <h3>2,245,333</h3>
              <p>Members</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-section">
        <div className="section-content">
          <h2>Caring is the New Marketing</h2>
          <p>The Nextcent blog is the best place to read about the latest membership insights,<br></br> 
          trends and more. See who's joining the community, read about how our<br></br>
           community are increasing their membership income and lot's more.</p>
        </div>
        <div className="card-container-5">
          <div className="card-5">
            <img src={Image1} alt="Card 5" />
            <div className="card-content">
              <p>Creating Streamlined<br></br> Safeguarding Processes with<br></br> Reasoner
Readmore</p>
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="card-5">
            <img src={Image2} alt="Card 5" />
            <div className="card-content">
              <p>What are your safeguarding<br></br> responsibilities and how can<br></br> you manage them?
Readmore</p>
              <a href="#">Readmore <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="card-5">
            <img src={Image3} alt="Card 5" />
            <div className="card-content">
              <p>Revamping the Membership Model<br></br> with Australia

Readmore</p>
              <a href="#">Readmore <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>


      <section className="sixth-section">
        <div className="section-content">
          <div className="left-section">
            <img src={image6} alt="Image 6" className='imgs' />
          </div>
          <div className="right-section">
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.<br></br>
             Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.<br></br>
              Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa<br></br>
               pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>


    </div>
  );
}

export default HomePage;
