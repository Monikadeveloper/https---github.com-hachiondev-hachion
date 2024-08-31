import React, { useState } from 'react';
import './Course.css';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const QaFaqMain = ({ heading, topics, buttonText, additionalTopics }) => {
  const [showMore, setShowMore] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});

  // Toggle additional topics
  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  // Toggle expanded content for each topic
  const handleToggleExpand = (index) => {
    setExpandedTopics(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  // Sample content for "What is Selenium 1.0 and Selenium 2.0?" in bullet list form
  const seleniumContent = [
    'What is Selenium 1.0?',
    'When to use Selenium 2.0?',
    'Difference between Selenium 1.0 and Selenium 2.0?',
    'What are the advantages of Selenium?',
    'Difference between Selenium and QTP?'
  ];

  const renderTopics = (topicList, startIndex = 2) => {
    return topicList.map((topic, index) => (
      <div key={index + startIndex}>
        <div className='curriculum-content' onClick={() => handleToggleExpand(index + startIndex)}>
          <p>{topic}</p>
          <p>
            {expandedTopics[index + startIndex] ? <FaMinus style={{ color: '#006489' }} /> : <FaPlus style={{ color: '#006489' }} />}
          </p>
        </div>
        {expandedTopics[index + startIndex] && (
          <div className='topic-details'>
            {/* Conditionally render bullet list for the specific topic */}
            {topic ==='What is Selenium 1.0 and Selenium 2.0?' ? (
              <ul className='bullet-list'>
                {seleniumContent.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Detailed content for {topic}</p>
            )}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={`curriculum ${showMore ? 'curriculum-expanded' : ''}`}>
      <div className='curriculum-head'>
        <h1 className='qa-heading'>{heading}</h1>
        <button className='btn-curriculum'>
          <BsFileEarmarkPdfFill style={{ height: '40px', width: '30px', color: 'red' }} /> {buttonText}
        </button>
      </div>
      <div className='curriculum-topic'>
        {renderTopics(topics)}
        {showMore && renderTopics(additionalTopics, topics.length)}
      </div>
      <div className='view-div'>
        <button className='view-more-btn' onClick={handleViewMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default QaFaqMain;
