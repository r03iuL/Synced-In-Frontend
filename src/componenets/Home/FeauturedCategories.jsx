import React from 'react';

const FuturedCategories = () => {
  // Define predefined categories with name and image URL
  const categories = [
    {
      name: 'Web Developer',
      image: 'https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7314.jpg?w=1060&t=st=1718964877~exp=1718965477~hmac=74a0633841a744868362602d3a0a8080747ab6360b1e05d090bc67030dde830d',
    },
    {
      name: 'UX/UI Designer',
      image: 'https://img.freepik.com/premium-vector/graphic-designer-vector-illustration_1366-1105.jpg?w=1060',
    },
    {
      name: 'Data Scientist',
      image: 'https://img.freepik.com/free-vector/woman-vr-with-template-character_603843-3541.jpg?t=st=1718965121~exp=1718968721~hmac=6574c563d16407f972caf2a906fabc28793d55fa55efa9b4d172d37e0b817bc4&w=740',
    },
    {
      name: 'Software Engineer',
      image: 'https://img.freepik.com/premium-vector/programming-concept-with-people-scene-flat-cartoon-design-programmer-works-creating-code_198565-6694.jpg?w=1060',
    },
    {
      name: 'AI Engineer',
      image: 'https://img.freepik.com/free-vector/flat-design-innovation-concept-with-robots_23-2149165060.jpg?t=st=1718965232~exp=1718968832~hmac=08b908a62b589f3f748e50a4ee83c435bc8223d5141d9aec735006c79e8c5dcc&w=1060',
    },
    {
      name: 'Graphic Designer',
      image: 'https://img.freepik.com/free-vector/landing-page-design-process-concept_23-2148303913.jpg?t=st=1718965267~exp=1718968867~hmac=2780bdbbefc58833f0dec732d6602ebfcaee1009de02992e92280e279c208e0d&w=1060',
    },
    {
      name: 'DevOps Engineer',
      image: 'https://img.freepik.com/free-vector/programmers-working-project-illustration_335657-384.jpg?t=st=1718965308~exp=1718968908~hmac=1e1529e0d020891e53dc914cf3fd8819d21ae3e63c4799996c76a0707a9fc339&w=1060',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-left text-4xl font-semibold mb-8 text-gray-800 border-l-8 px-2 py-2 border-green-500">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card card-compact w-85 h-80 bg-base-100 shadow-xl">
              <figure>
                <img src={category.image} alt={category.name} />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{category.name}</h2>
                <div className="card-actions justify-center">
                  <button className="btn bg-green-500 text-white">Explore Jobs</button>
                </div>
              </div>
            </div>
          ))}
          {/* See more card */}
          <a href="/categories" className="btn-ghost card bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center h-48">
                <span className="text-xl font-semibold">See more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default FuturedCategories;
