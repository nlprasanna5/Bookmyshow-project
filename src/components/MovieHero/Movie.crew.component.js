import React from "react";

const CrewHero = () => {
    return (
        <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-28">
            <h1 className="text-gray-800 text-2xl font-bold">Crew</h1>
            <div className="h-28 flex gap-6  mt-8">
                
                <a href=""><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg" className="rounded-full"/>
                <h1 className="pt-4 text-center">Destin Kreton</h1><p className="text-center text-gray-500">Director</p></a> 
                <a href=""><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg" className="rounded-full"/>
                <h1 className="pt-4 text-center">Kevin Feige</h1><p className="text-center text-gray-500">Producer</p></a>
               <a href=""> <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg" className="rounded-full"/>
               <h1 className="pt-4 text-center">Jonarthan Schwartz </h1><p className="text-center text-gray-500">Producer</p></a>
                <a href=""><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg" className="rounded-full"/>
                <h1 className="pt-4 text-center">Bill Pope </h1><p className="text-center text-gray-500">Cinematographer</p></a>
            
            </div>
    
        </div>
        
            
    );
}

export default CrewHero;