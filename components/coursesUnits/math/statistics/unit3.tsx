import React from 'react';
import Layout from './layout';
import { Carousel } from 'react-responsive-carousel';


const Tutorials: React.FC = () => {
    
  return (
    <Layout>
      <p>Math . Statistics</p><br></br>
      <h1>
        <b className="text-5xl">Unit 3</b>
      </h1>
      <div className="flex flex-col items-start">4 UNITS : 36 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2">About this unit</div>
          <p className="text-gray-700 text-base">
          The course on &rdquo;Right Triangles & Trigonometry&rdquo; is a fundamental branch of mathematics that explores the relationships and properties of right triangles and their connection to trigonometric functions. It provides a solid foundation for understanding the principles of trigonometry and their real-world applications.

            In this course, students learn how to work 
            with right triangles, which are triangles 
            with one angle measuring 90 degrees. Key topics 
            include the Pythagorean Theorem, which establishes 
            the relationship between the lengths of the sides of 
            a right triangle, and the six trigonometric functions: 
            sine, cosine, tangent, cosecant, secant, and cotangent. 

            Furthermore, the course covers applications of 
            trigonometry in various fields, such as physics, 
            engineering, architecture, and navigation. Students 
            also gain valuable problem-solving skills and mathematical 
            reasoning abilities.


          </p>
        </div>
      </div>
      <br></br>
      <div
        className="rounded overflow-hidden shadow-lg border border-gray-300 relative"
        style={{ backgroundImage: "url(your-image-url.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-blue-100 px-10 py-4">
          <h3 className="font-bold text-2xl mb-2">The Coldest Sunset</h3>
          <hr></hr>
        </div>
            {/* <img
            src="your-image-url.jpg"
            alt="Image"
            className="absolute top-0 right-0 mt-4 mr-4 w-12 h-12 rounded-full border-2 border-white"
            /> */}
            <div className="px-10 py-4">
            <p className="text-gray-700 text-base">
                Understanding Right Triangles is a fundamental component of the &rdquo;Right Triangles & Trigonometry&rdquo; course. Right triangles are a special type of triangle characterized by one angle of 90 degrees, known as the right angle. In this course, students dive into the intricacies of right triangles, learning to identify and work with their key components.
                <br/>
                Central to this understanding is recognizing the hypotenuse, which is the side opposite the right angle, and the adjacent and opposite sides concerning a specific angle within the triangle. These relationships form the basis of trigonometric functions, which are crucial for solving problems related to right triangles.
                <br/>
                Students also grasp concepts like the Pythagorean Theorem, which provides a foundational formula for finding the relationship between the lengths of the sides of a right triangle. This theorem is not only essential for understanding right triangles but also serves as a building block for more advanced mathematical concepts.
                <br/>
                In summary, comprehending right triangles involves a deep understanding of their angles, sides, and the relationships between them. This knowledge forms the cornerstone for exploring the broader realm of trigonometry and its practical applications in various fields.  
            </p>
            </div>

            <div className="px-10 py-4">
            <p className="text-gray-700 text-base">
                Understanding Right Triangles is a fundamental component of the &rdquo;Right Triangles & Trigonometry&rdquo; course. Right triangles are a special type of triangle characterized by one angle of 90 degrees, known as the right angle. In this course, students dive into the intricacies of right triangles, learning to identify and work with their key components.
                <br/>
                Central to this understanding is recognizing the hypotenuse, which is the side opposite the right angle, and the adjacent and opposite sides concerning a specific angle within the triangle. These relationships form the basis of trigonometric functions, which are crucial for solving problems related to right triangles.
                <br/>
                Students also grasp concepts like the Pythagorean Theorem, which provides a foundational formula for finding the relationship between the lengths of the sides of a right triangle. This theorem is not only essential for understanding right triangles but also serves as a building block for more advanced mathematical concepts.
                <br/>
                In summary, comprehending right triangles involves a deep understanding of their angles, sides, and the relationships between them. This knowledge forms the cornerstone for exploring the broader realm of trigonometry and its practical applications in various fields.  
            </p>
            </div>

            {/* <div className="flex ">
            <div className="px-10 py-4 w-1/2">
                <div className="bg-white rounded shadow p-6">
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
                </div>
            </div>
            <div className="px-10 py-4 w-1/2">
                <div className="bg-white rounded shadow p-6">
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
            </div>
            </div> */}
        </div>
      {/* THE LOWER TWO CARD */}
      {/* <div className="flex ">
        <div className="flex-1 p-10">
          <div className="border border-gray-300 bg-white rounded-lg shadow p-6 h-full">
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="flex-1 p-10">
          <div className="border border-gray-300 bg-white rounded-lg shadow p-6 h-full">
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="px-10 py-4 w-1/2">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="px-10 py-4 w-1/2">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-900 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="px-10 py-4 w-1/2">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-900 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="px-10 py-4 w-1/2">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="px-10 py-4 w-1/2">
          <Carousel showArrows={true} infiniteLoop={true}>
            <div>
              <div className="bg-white rounded shadow p-6">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded shadow p-6">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div> */}
    </Layout>
  );
};

export default Tutorials;
