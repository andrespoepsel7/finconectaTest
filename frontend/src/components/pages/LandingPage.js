import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'

export default function LandingPage() {
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col px-[10%] pb-[50px]'>
            <p className='text-blue-700 font-bold text-3xl mt-8'>Summary:</p>
            <p className='text-blue-700 text-xl mt-4'>HTML, CSS, JAVASCRIPT</p>
            <p className='mt-1 text-justify'>
              In this test, I employed various technologies to meet all the specified goals. Firstly, 
              I implemented a header, footer, and body as nested components. This design allows the application 
              to dynamically render changes in its body without re-rendering the header and footer components,
              showcasing my skills in HTML, CSS, and JavaScript. I also added hover animations to the menu. 
              The web application is fully responsive across all its components.
            </p>
            <p className='text-blue-700 text-xl mt-4'>API</p>
            <p className='mt-1 text-justify'>
              For the API component of the project, I utilized two different types of APIs. The first, a public 
              API named "TheMealDB API," was employed for fetching data, displaying a variety of delicious meals 
              and their names. The second API, known as "JSONPlaceholder API," is widely used for testing purposes. 
              I utilized it to submit data and subsequently receive responses, demonstrating the application's interactive 
              capabilities with external data sources. This approach highlights the project's ability to both retrieve 
              and send data effectively.
            </p>
            <p className='text-blue-700 text-xl mt-4'>ReactJs</p>
            <p className='mt-1 text-justify'>
              The entire frontend of this project is developed using ReactJS. For styling, I employed "Tailwind CSS," 
              a tool I find particularly efficient and effective for optimizing the appearance of frontend applications. 
              To manage routing within the application, I utilized the "react-router-dom" library. This library 
              facilitated the nesting of the components mentioned earlier and enabled the creation of specific 
              routes to manage different components, showcasing the flexible and dynamic capabilities of the 
              application's architecture. 
            </p>
            <p className='text-blue-700 text-xl mt-4'>Node.js, Express and MongoDB</p>
            <p className='mt-1 text-justify'>
              For the backend, I utilized Node.js and Express to establish the server, alongside MongoDB for managing i
              nteractions with a NoSQL database. This setup enabled the implementation of CRUD (Create, Read, Update, Delete) 
              functionality. Additionally, I integrated API authentication using JSON Web Tokens (JWT), ensuring secure access 
              and data integrity. This combination of technologies provided a robust and efficient backend structure, 
              supporting the application's overall functionality and security requirements.
            </p>
          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col px-[10%] pb-[50px]'>
            <p className='text-blue-700 font-bold text-3xl mt-8'>Summary:</p>
            <p className='text-blue-700 text-xl mt-4'>HTML, CSS, JAVASCRIPT</p>
            <p className='mt-1 text-justify'>
              In this test, I employed various technologies to meet all the specified goals. Firstly, 
              I implemented a header, footer, and body as nested components. This design allows the application 
              to dynamically render changes in its body without re-rendering the header and footer components,
              showcasing my skills in HTML, CSS, and JavaScript. I also added hover animations to the menu. 
              The web application is fully responsive across all its components.
            </p>
            <p className='text-blue-700 text-xl mt-4'>API</p>
            <p className='mt-1 text-justify'>
              For the API component of the project, I utilized two different types of APIs. The first, a public 
              API named "TheMealDB API," was employed for fetching data, displaying a variety of delicious meals 
              and their names. The second API, known as "JSONPlaceholder API," is widely used for testing purposes. 
              I utilized it to submit data and subsequently receive responses, demonstrating the application's interactive 
              capabilities with external data sources. This approach highlights the project's ability to both retrieve 
              and send data effectively.
            </p>
            <p className='text-blue-700 text-xl mt-4'>ReactJs</p>
            <p className='mt-1 text-justify'>
              The entire frontend of this project is developed using ReactJS. For styling, I employed "Tailwind CSS," 
              a tool I find particularly efficient and effective for optimizing the appearance of frontend applications. 
              To manage routing within the application, I utilized the "react-router-dom" library. This library 
              facilitated the nesting of the components mentioned earlier and enabled the creation of specific 
              routes to manage different components, showcasing the flexible and dynamic capabilities of the 
              application's architecture. 
            </p>
            <p className='text-blue-700 text-xl mt-4'>Node.js, Express and MongoDB</p>
            <p className='mt-1 text-justify'>
              For the backend, I utilized Node.js and Express to establish the server, alongside MongoDB for managing i
              nteractions with a NoSQL database. This setup enabled the implementation of CRUD (Create, Read, Update, Delete) 
              functionality. Additionally, I integrated API authentication using JSON Web Tokens (JWT), ensuring secure access 
              and data integrity. This combination of technologies provided a robust and efficient backend structure, 
              supporting the application's overall functionality and security requirements.
            </p>
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
