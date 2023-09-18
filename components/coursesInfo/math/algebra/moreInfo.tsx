'use client'
import React, { useState } from 'react';
import VideoPlayer from './videoPlayer';
import DescriptionContent from './descriptionContent';
import CurriculumContent from './curriculumContent';
import ReviewsContent from './reviewsContent';
import RelatedCourses from './relatedCourses';
import { PiNotebookBold } from 'react-icons/pi';
import { AiFillStar } from 'react-icons/ai';
import { FaRibbon } from 'react-icons/fa';

interface MoreInfoProps {}

const MoreInfo: React.FC<MoreInfoProps> = () => {
  const videoSrc = 'https://www.youtube.com/embed/aR6phzMLuKM';
  const courseDuration = '6 hours';
  const courseDescription = 'This is a comprehensive course that covers Algebra in detail...';

  const [activeTab, setActiveTab] = useState<'description' | 'curriculum' | 'reviews'>(
    'description'
  );

  const tabContents: Record<string, JSX.Element> = {
    description: <DescriptionContent />,
    curriculum: <CurriculumContent />,
    reviews: <ReviewsContent />,
  };

  const handleTabClick = (tab: 'description' | 'curriculum' | 'reviews') => {
    setActiveTab(tab);
  };

  const navigationCardStyle: React.CSSProperties = {
    padding: '8px 16px',
    cursor: 'pointer',
    border: '2px solid #ccc',
    borderRadius: '2px',
    marginRight: '10px',
    marginBottom: '10px',
    minWidth: '260px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: activeTab === 'description' ? 'blue' : 'transparent',
    color: activeTab === 'description' ? 'white' : 'black',
  };

  const navigationCardsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const tabContentStyle: React.CSSProperties = {
    marginTop: '16px',
  };

  const homePageContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    
  };

  const videoRelatedContainerStyle: React.CSSProperties = {
    display: 'flex',
    borderRadius: '10px'
  };

  const navigationContainerStyle: React.CSSProperties = {
    flex: '1',
    marginLeft: '16px',
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const headerImageStyle: React.CSSProperties = {
    width: '700px',
    height: '100%',
  };

  return (
    <div style={homePageContainerStyle}>
      
      <div style={navigationContainerStyle}>

        <div style={headerImageStyle}>
          <h1 style={headingStyle}>
            Unlock the Power of Equations: Join our Algebra Adventure!
          </h1>
          <img
            src="https://img.freepik.com/free-photo/colleagues-making-business-plan-meeting-close-up_176420-5105.jpg?w=740&t=st=1692783789~exp=1692784389~hmac=94117eeef9a92dfbb8df10be4824e819acd724b2457427c3834781668bc0c0e9"
            alt="Header Image"
            style={{ width: '900px', borderRadius: '10px', height: '400px' }}
          />
        </div>

        <div style={navigationCardsStyle}>
          <div
            style={{
              ...navigationCardStyle,
            }}
            onClick={() => handleTabClick('description')}
          >
            <FaRibbon style={{ marginRight: '8px' }} />
            Description
          </div>
          <div
            style={{
              ...navigationCardStyle,
              backgroundColor: activeTab === 'curriculum' ? 'blue' : 'transparent',
              color: activeTab === 'curriculum' ? 'white' : 'black',
            }}
            onClick={() => handleTabClick('curriculum')}
          >
            <PiNotebookBold style={{ marginRight: '8px' }} />
            Curriculum
          </div>
          <div
            style={{
              ...navigationCardStyle,
              backgroundColor: activeTab === 'reviews' ? 'blue' : 'transparent',
              color: activeTab === 'reviews' ? 'white' : 'black',
            }}
            onClick={() => handleTabClick('reviews')}
          >
            <AiFillStar style={{ marginRight: '8px' }} />
            Reviews
          </div>
        </div>

        {activeTab && (
          <div style={tabContentStyle}>{tabContents[activeTab]}</div>
        )}
      </div>

      <div style={videoRelatedContainerStyle}>
        <div className="border-radius-4">
          <VideoPlayer
            src={videoSrc}
            courseDuration={courseDuration}
            courseDescription={courseDescription}
          />
          <div className="related-courses-container">
            {/* <RelatedCourses /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
