import React from 'react';
import { FaHome } from 'react-icons/fa';
import { PiNotebookBold } from 'react-icons/pi';
import { BiSolidTimeFive } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLanguage } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface VideoPlayerProps {
  src: string;
  courseDuration: string;
  courseDescription: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  courseDuration,
  courseDescription,
}) => {
  const duration = 'Duration: 6 weeks';
  const enrolled = 'Enrolled: 20 students';
  const language = 'Language: English';

  return (
    <div className="border border-gray-300 p-4 flex flex-col items-start max-w-sm m-4">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64"
      ></iframe>
      <div className="mt-4">
        <p className="description-text">{courseDescription}</p>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <BiSolidTimeFive />
          </span>
          {duration}
        </div>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <BsFillPersonFill />
          </span>
          {enrolled}
        </div>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <MdOutlineLanguage />
          </span>
          {language}
        </div>
      </div>
      <br />
      <Link href="/courses/units/math/algebra">
        <Button>Enroll</Button>
      </Link>
    </div>
  );
};

export default VideoPlayer;
