import React from 'react';
import './Home.css';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Carousel } from 'react-bootstrap';
import LearnerCard from './LearnerCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Learners = () => {
  return (
    <>
      <div className='training-events'>
        <div className='training-events-head'>
          <h1 className='association-head'>Our Learners Speak</h1>
        </div>
        
        <ImQuotesLeft style={{ height: '113.97px', zIndex: '1', width: '148.59px', color: 'rgba(0, 174, 239, 1)', marginBottom: '-8vh' }} />
        <div className='learner-cover'>
        <Carousel indicators={false} prevIcon={<span className="custom-prev-icon" />} nextIcon={<span className="custom-next-icon" />}>
        <Carousel>
          <Carousel.Item>
            <div className='learner-card-item'>
           
              <LearnerCard
                name='Dhananjay'
                profile='Android app developer'
                location='Canada'
                content='Hachion is a great place for fresher’s can learn good communication skills and subjects in this institute and they will place you according to your talent.'
              />
              <LearnerCard
                name='Henry Lee'
                profile='IOS app developer'
                location='USA'
                content='The best training and placement institute that I came across, created a good platform for achieving my dream as an IOS developer.'
              />
           </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='learner-card-item'>
              <LearnerCard
                name='John Doe'
                profile='Web Developer'
                location='UK'
                content='Excellent learning experience, great instructors, and fantastic career support.'
              />
              <LearnerCard
                name='Jane Smith'
                profile='Data Scientist'
                location='Australia'
                content='The training was comprehensive and the placement support was exceptional.'
              />
          </div>
          </Carousel.Item>
       
          <Carousel.Item>
            <div className='learner-card-item'>
              <LearnerCard
                name='John Mathew'
                profile='Python Developer'
                location='UK'
                content='Excellent learning experience, great instructors, and fantastic career support.'
              />
              <LearnerCard
                name='Jane Maverick'
                profile='Data Scientist'
                location='Melbourne'
                content='The training was comprehensive and the placement support was exceptional.'
              />
              </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='learner-card-item'>
              <LearnerCard
                name='John Smith'
                profile='Swift Developer'
                location='UK'
                content='Excellent learning experience, great instructors, and fantastic career support.'
              />
              <LearnerCard
                name='Justin'
                profile='Angular developer'
                location='Switzerland'
                content='The training was comprehensive and the placement support was exceptional.'
              />
              </div>
          </Carousel.Item>
        </Carousel>
        </Carousel>
        </div>
        <ImQuotesRight style={{ height: '113.97px', zIndex: '1', width: '148.59px', color: 'rgba(0, 174, 239, 1)', marginTop: '-8vh', marginLeft: '90vw' }} />
      </div>
    </>
  );
}

export default Learners;