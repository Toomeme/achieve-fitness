import React from 'react';
import cardImage from '../../assets/small/food/0.jpg';
import rouletteImage from '../../assets/small/food/1.jpg';
function About() {
  return (
    <section className="my-5 flex-row">
      <h1 id="about" data-aos="fade-up">Welcome to Achieve Fitness!</h1>
      <div className="my-2">
      <img data-aos="fade-left" src={cardImage} className=" left abt-image"alt="cover" />
      <h3 data-aos="fade-down">Building strong habits, strong minds, and strong bodies since 2011.</h3>
      <p data-aos="fade-up" className='text-right'>What sets Achieve Fitness apart from other gyms?</p>
      <ul>
        <li>Private studio</li>
        <li>Customized programs</li>
        <li>Nutritional counseling built into membership</li>
        <li>60 minute sessions</li>
        <li>Small staff for a more personalized experience</li>
      </ul>
      </div>
      <div className="my-2">
      <img data-aos="fade-right" src={rouletteImage} className="right abt-image"alt="cover" />
      <h3 data-aos="fade-down">Building strong habits, strong minds, and strong bodies since 2011</h3>
        <p data-aos="fade-up" className='text-left'>
        Walking into a big gym can be overwhelming.  Sometimes not knowing where to begin can cause you to 
        give up before you even start.  Our studio provides a private setting to ease your 
        fears and discomforts of feeling like “all eyes are on you”.
        </p>
        <p data-aos="fade-up" className='text-left'>
        Your body is unique.  We customize each workout for your body and devise programs that are best 
        suited to your personal goals.  Whether it's weight loss, strength training and conditioning, toning, 
        flexibility, or overall health you seek, we continually 
        monitor and track your progress so that you get the results you desire.
        </p>
        <p data-aos="fade-up" className='text-left'>
        We believe exercise and nutrition go hand in hand.  Nutritional counseling is built into your program
        to coincide with your workouts to get you the best results.
        </p>
        <p data-aos="fade-up" className='text-left'>
        All sessions are 60 minutes and include a warm-up, strength training, and conditioning 
        customized for you.
        </p>
      </div>
    </section>
  );
}

export default About;