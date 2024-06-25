"use client"
import { useRouter } from "next/navigation";
import React from "react";

/* export const metadata = {
  title: 'about'
} */

const AboutPage = () => {
  const router = useRouter()
  return (
    <section>
      <h1>AboutPage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
        pariatur tempore ea quod perspiciatis ipsum officia consequuntur neque
        dolorum laudantium architecto sequi adipisci cupiditate, sint molestiae
        vitae. Possimus mollitia culpa hic dolores suscipit. Vel similique
        corrupti sit beatae possimus, deleniti quod ipsam cupiditate amet odit
        minus sint quam, vero nobis iste aliquam hic dolore neque rem. Obcaecati
        illo provident accusantium nobis, rem ipsam architecto quidem quaerat,
        totam explicabo expedita beatae praesentium eligendi assumenda omnis
        autem consequatur, ab nulla aliquid iste at voluptas officia eum
        sapiente? Unde sint quod, qui magni consectetur quasi ex neque? Nulla
        veniam illum nihil ad voluptates?
      </p>
      <button className="bg-sky-400 px-3 py-2 rounded-md" 
      onClick={() => {
        alert('ejecutando codigo antes de que redireccione') 
        router.push('/')
      }}
      >Click</button>
    </section>
  );
};

export default AboutPage;
