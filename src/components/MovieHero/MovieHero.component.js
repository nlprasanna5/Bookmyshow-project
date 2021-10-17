import React from "react";
import {FaHeart} from "react-icons/fa";
import {BiChevronRight} from "react-icons/bi";
import {BiShareAlt} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_kMz27A7WU0BrBm",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/most-eligible-bachelor-et00300001-11-10-2021-05-33-35.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/most-eligible-bachelor-et00300001-11-10-2021-05-33-35.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "35rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="flex">
<div className="absolute z-30 w-64 h-96 left-16 top-10">
<img
src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/most-eligible-bachelor-et00300001-11-10-2021-05-33-35.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>
   
<div className="absolute z-30 lg:ml-4 lg:left-1/4  lg:top-12">
            <div className=" flex gap-64 items-center justify-between">
               <h1 className="text-white text-3xl font-bold w-76 ">Most Eligible Bachelor</h1>
                   <div className="bg-gray-700 bg-opacity-50 w-24 p-2 rounded-xl text-center ">
                     <a href="share" className="flex text-center">
                     <BiShareAlt className="w-8 h-6 mt-2 " color= "white" />
                   <h1 className="text-white w-8 h-8 mt-2">Share</h1>
                   </a>
                   </div>
               </div>

               <div className="flex gap-3 relative mt-1">
                   <FaHeart className="w-5 h-6" color = "#F037A5"  />
                   <h1 className="text-white font-bold text-xl">91%</h1>
                   <h1 className="text-white py-1">35.9K ratings</h1>
                   <BiChevronRight color="white" className="mt-2 absolute left-44 text-gray-400"/>
               </div>

            
               <div className="bg-gray-800 flex gap-12 rounded-lg mt-2 p-3 w-2/3 ">
                   <div>
                       <h1 className="text-white ">Add your rating and review</h1>
                       <h2 className="text-white ">Your ratings matter</h2>
                    </div>
                    <button className="bg-white rounded-lg p-2 h-10">Rate now</button>
                </div>

                   <div className=" bg-white mt-5 w-1/2 pl-2 rounded">
                       <a href= " " className="hover:underline">2D,</a>
                       <a href= " " className="hover:underline"> 3D,</a>
                       <a href= " " className="hover:underline"> IMAX-2D,</a>
                       <a href= " " className="hover:underline"> MX4D,</a>
                       <a href= " " className="hover:underline"> 4DX</a>
                   </div>
 
                   <div className=" bg-white mt-4 w-1/3 rounded pl-2">
                       <a href= " " className="hover:underline">English,</a>
                       <a href= " " className="hover:underline"> Kannada,</a>
                       <a href= " " className="hover:underline"> Tamil,</a>
                       <a href= " " className="hover:underline"> Hindi,</a>
                       <a href= " " className="hover:underline"> Telugu,</a>
                       <a href= " " className="hover:underline"> Malayalam</a>
                   </div> 

                   <div className="container  flex gap-6 text-white mt-4"> 
                   <h1 className=""> 2h 12m</h1>
                   <h1>  <ul ><li className="list-disc"><a href="#" className="hover:underline">Action</a>,<a href="" className="hover:underline"> Adventure</a>,<a href="" className="hover:underline"> Fantasy</a></li></ul> </h1>
                   <h1> <ul><li className="list-disc">UA</li></ul></h1>
                   <h1><ul><li className="list-disc">3 Sep 2021</li></ul></h1>
                   </div>

               <div className="text-white mt-3 bg-pink-700 w-32 p-3 rounded-xl"> 
                  <button onClick={launchRazorPay} className="text-center font-bold">Book tickets</button>
               </div>
         </div>
     </div>
   
   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/most-eligible-bachelor-et00300001-11-10-2021-05-33-35.jpg"
     alt="poster"
     className="w-full h-full"
    />
   </div>

    </>
  )
};

export default MovieHero;