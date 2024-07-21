import React from 'react';
import CompanyData from './data/Company';

const ExplorePopularServices = () => {
  const { companies } = CompanyData();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-left p-10">
          Explore Popular Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div key={company.name} className="bg-white border border-separate border-slate-200 rounded-md overflow-hidden h-full flex flex-col">
              <div className="relative h-40">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70">
                  <p className="text-white text-sm font-medium truncate">
                    {company.description}
                  </p>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(company.averageRating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({company.numberOfReviews} reviews)
                  </span>
                </div>
                <ul className="mb-4 flex-grow">
                  {company.services.map((service) => (
                    <li key={service} className="text-sm text-gray-600 mb-1">
                      • {service}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-auto bg-gray-950 text-white py-2 px-4 hover:bg-red-700 transition duration-300">
                  Explore Reviews
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePopularServices;