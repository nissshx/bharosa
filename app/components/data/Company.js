import React from 'react';

const CompanyData = () => {
  const companies = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Airtel_logo-01.png",
      name: "Airtel India",
      description: "Mobile Operator",
      averageRating: 4.7,
      services: [
        "Telecommunications",
        "Broadband Services",
        "TV Service Provider",
        "Digital Payments Bank"
      ],
      numberOfReviews: 283
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Logo-500x281.png",
      name:"Ola",
      description: "Cabs & Electric Mobility Company",
      averageRating: 4.5,
      services: [
        "Cabs Booking Provider",
        "Electric Scooter Company",
        "Digital Wallet Provider",
        "AI Products"
      ],
      numberOfReviews: 512
    },
    {
      logo: "https://www.thestatesman.com/wp-content/uploads/2024/01/Untitled-design_20240130_111243_0000.jpg",
      name: "Zerodha",
      description: "Trading Finance Company",
      averageRating: 4.8,
      services: [
        "Stocks Trading ( India )",
        "Specialized Care",
        
      ],
      numberOfReviews: 1024
    },
    {
      logo: "https://pwebassets.paytm.com/commonwebassets/ir/images/press-kit/brand.png",
      name: "Paytm",
      description: "Payment Gateway and Finance Company",
      averageRating: 4.6,
      services: [
        "Payment Platform",
        "Merchant Gateway",
        "Finance",
        "Stock Trading"
      ],
      numberOfReviews: 729
    },
    {
      logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0-kVvcT0NwW9A0ynTpSrGRXht3TO0mi8hWxXSC7LHJwGaWHpe",
      name: "Internshala",
      description: "Ed-Tech",
      averageRating: 4.4,
      services: [
        "Edtech",
        "Classified Jobs",
      
      ],
      numberOfReviews: 876
    },
    {
      logo: "https://cdn.worldvectorlogo.com/logos/maruti-suzuki-logo.svg",
      name: "Maruti Suzuki",
      description: "Automobile ",
      averageRating: 4.3,
      services: [
        "Automobile Manufacturing",
        "Autombile Sellers ",
        "Automobile Servicing",
      ],
      numberOfReviews: 651
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo-500x281.png",
      name: "State Bank Of India",
      description: "Financial Services",
      averageRating: 4.9,
      services: [
        "Banking",
        "Loans",
        "Insurance",
        "Stocks"
      ],
      numberOfReviews: 408
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Hindustan_Unilever_Logo.svg/250px-Hindustan_Unilever_Logo.svg.png",
      name: "Hindustan Unilever",
      description: "FMCG",
      averageRating: 4.7,
      services: [
        "Food Products",
        "Homecare Products",
        "Personal Care Products",
        "Hygience Products"
      ],
      numberOfReviews: 937
    }
  ];

  return { companies };
};

export default CompanyData;