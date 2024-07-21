
import Layout from './components/Topbar';
import ExplorePopularServices from './components/Explore';
export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-5xl font-bold mb-4">bharosa</h1>
        <h2 className="text-4xl font-serif mb-8">trusted reviews for you to judge</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <button className="bg-black text-white px-6 py-3 rounded mr-4">Add a Review</button>
            <span>/ Explore </span>
            
            <div className="mt-8 bg-orange-100 rounded-lg overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1664202526828-6f18286508d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxjb25zdW1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="Workspace" className="w-full h-64 object-cover" />
              
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-xl font-medium">
             We are a community based forum. We believe in saving your money and time before you purchase a product or services from a company.
             <p className='text-2xl'>How ?</p>
             <p className="text-xl font-medium">Users in our community post reviews on products / services availed by them.These reviews also have a rating out of 5.
              Before purchasing anything you search and browse through our forums if someone has posted a review/rating . This can be better judged by you whether you can trust the product or not
             .<p> <span className='font-semibold'>You can also be a part of our community and help others.
                This project is launched as a demo . We are currently in development mode. Any contributions can be initiated to nissshhdev@gmail.com
                
              </span>
              </p>
              </p> 

            </p>
          </div>
        </div>
      </div>
    <ExplorePopularServices/>
    </Layout>
  );
}