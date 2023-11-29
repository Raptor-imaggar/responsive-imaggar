import React from 'react';
import Landing from '../../components/home/landing'
import Trusted from '../../components/home/trusted';
import Service from '../../components/home/service/mobileService/';
import Counter from '../../components/home/counter'
// import Features from '../../components/home/features';
import Testimonials from '../../components/home/testimonials'
import ContactBar from '../../components/home/ContactBar'
function Home() {
  return (
    <div>
     <Landing />
     <Trusted />
     <Service />
     {/* <br/> */}
     {/* <br/> */}
     <Counter />
     <br/>
     {/* <Testimonials /> */}
     {/* <ContactBar /> */}
     
     
    </div>
  );
}

export default Home;
