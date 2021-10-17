import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";
import CastHero from "../components/MovieHero/Movie.cast.component";
import CrewHero from "../components/MovieHero/Movie.crew.component";

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

const  Movie = () => {
    return (
    <>
    <MovieHero />

    <div className="my-12 container px-4 lg:w-2/3 lg:ml-32">
   <div className="flex flex-col items-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p>Most Eligible Bachelor is a romantic dramedy directed by Bommarillu Baskar starring Akhil Akkineni as an NRI and Pooja Hegde as a standup comic. This wholesome entertainer is produced by Vasu Varma and Bunny Vas.</p>
   </div>
   <div className="my-8">
      <hr />
   </div>
   <div className="flex flex-col items-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>

   </div>
   <CastHero />
   <CrewHero />
   </>
);
};

export default Movie;

/*<div>
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/most-eligible-bachelor-et00300001-11-10-2021-05-33-35.jpg"
        alt="movie" />
    </div>
    */