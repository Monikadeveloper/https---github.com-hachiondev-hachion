import React from 'react'
import { RiMenuUnfold3Line } from "react-icons/ri";
import CourseCard from './CourseCard';
import card1 from '../Assets/image 96.png';
import card2 from '../Assets/image 85.png';
import card3 from '../Assets/image 93.png';
import card4 from '../Assets/image 90.png';
import card5 from '../Assets/image 80.png';
import card6 from '../Assets/image 107.png';
import card7 from '../Assets/image 110.png';
import card8 from '../Assets/image 95.png';



const Trending = () => {
  return (
  <>
 < div className='training-events'>
    <div className='training-events-head'>
<h1 className='association-head'>Trending courses</h1></div>
<div className='view-btn'>
<button className='view-all'>View All</button>
</div>
<div className='courses-list'>
  <h2 className='course-names'>All</h2>
  <h2 className='course-names'>Cloud Computing</h2>
  <h2 className='course-names'>Salesforce</h2>
  <h2 className='course-names'>Data Science</h2>
  <h2 className='course-names'>QA testing</h2>
  <h2 className='course-names'>Service now</h2>
  <h2 className='course-names'>BPM</h2>
  <h2 className='course-names'>< RiMenuUnfold3Line style={{fontSize:'1.5rem'}}/></h2>
</div>
<div className='training-card-holder'>
  
<CourseCard heading='Google Cloud' month=' 3 months' time='80 hours' image={card1} />
<CourseCard heading='AWS Developer' month=' 3 months' time='80 hours' image={card2}/>
<CourseCard heading='Load Runner' month=' 3 months' time='80 hours' image={card3}/>
<CourseCard heading='Python' month=' 3 months' time='80 hours' image={card4}/>
</div>
<div className='training-card-holder'>
  
<CourseCard heading='QA Automation' month=' 3 months' time='80 hours' image={card5}/>
<CourseCard heading='Angular JS Training' month=' 3 months' time='80 hours' image={card6}/>
<CourseCard heading='Javascript course' month=' 3 months' time='80 hours' image={card7}/>
<CourseCard heading='QA Manual Testing' month=' 3 months' time='80 hours' image={card8}/>
</div>

</div>
  
  </>
  )
}

export default Trending
