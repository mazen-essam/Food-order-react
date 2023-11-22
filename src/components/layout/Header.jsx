import React from "react";
import meals from "../../assets/meals.jpg";
export default function Header() {
   return (
      <>
         <section className="Header">
            <div className="img">
               <img src={meals} alt="" />
            </div>
            <div className="box">
               <h1>Delicious food ,Delivered to you</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis,
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  totam laboriosam.
               </p>
            </div>
         </section>
      </>
   );
}
