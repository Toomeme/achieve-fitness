import React from 'react';

const Testemonials = () => {

  return (
    <div>

    <h1>Testemonials</h1>
    <h4>Statements from clients who love Achieve Fitness and the impact it had on them.</h4>

      <div className="card mb-3">
          {/*Image goes here*/}
        <div className="card-body">
          <p>I have been with Achieve Fitness for almost two years. Jen has been my trainer since the 
            beginning. My experience with Jen and the program she has me on is very positive. 
            My strength has increased dramatically and getting through the hour is a pleasure with Jen.
            I actually am not a fan of physical exercise. My motto before joining Achieve Fitness was,
            “I'd rather be working than working out”. That has changed because I enjoy Jen's 
            expertise and her company as I work through the hour to better myself.</p>
        </div>        
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-dark">
            - Mike B.
          </span>
        </p>
      </div>

      <div className="card mb-3">
          {/*Image goes here*/}
        <div className="card-body">
          <p>Achieve Fitness has really changed my life in the most positive way. Not only has Jen helped me 
            lose 30+ lbs. in 5 months, but I've also become significantly stronger both physically and mentally. 
            Jen has a great passion for what she does and it shines through in her training.</p>
        </div>        
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-dark">
            - Brooke S.
          </span>
        </p>
      </div>

      <div className="card mb-3">
          {/*Image goes here*/}
        <div className="card-body">
          <p>I've always loved to support small businesses, especially ones that are in my small town 
            of Prospect. If anyone out there is looking to make a difference in their mind, body, 
            or daily lifestyle, Achieve Fitness is the place to be. I've not only gained strength 
            since I've been here but I've also gained a best friend in Jen, who in so many ways 
            has helped me get through some tough times. Jen and Achieve Fitness have been something 
            truly wonderful for me over the past few years!</p>
        </div>        
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-dark">
            - Lynsey P.
          </span>
        </p>
      </div>

    </div>
  );
};

export default Testemonials;