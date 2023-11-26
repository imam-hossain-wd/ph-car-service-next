import TechnicianCarousel from "@/components/ui/carousel/Carousel";


const Technician = () => {
//     const data =[ 
//         {
//         name: "John",
//         designation: "Engine Expert",
//         image:"https://themeholy.com/wordpress/malen/wp-content/uploads/2023/05/team_1_1.jpg"
//     },
//         {
//         name: "Bohn",
//         designation: "Body Expert",
//         image:"https://themeholy.com/wordpress/malen/wp-content/uploads/2023/05/team_1_3.jpg"
//     },
//         {
//         name: "Morn",
//         designation: "Brake Expert",
//         image:"https://themeholy.com/wordpress/malen/wp-content/uploads/2023/05/team_1_2.jpg"
//     },
//         {
//         name: "Korn",
//         designation: "WashringExpert",
//         image:"https://themeholy.com/wordpress/malen/wp-content/uploads/2023/05/team_1_1.jpg"
//     },

// ]
    return (
        <div>
            <div className="text-center">
                <h5>EXPERT TECHNICIAN</h5>
                <h1>Meet Our Experts</h1>
            </div>

           <div className="my-5">
           <TechnicianCarousel  />
           </div>
            
        </div>
    );
};

export default Technician;