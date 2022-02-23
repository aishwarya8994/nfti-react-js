import React from 'react';

import {
    Container,Button,Table,
    Image,Row ,Col, Card
}  from 'react-bootstrap';

import '../../Css/Landing.css';

import { useHistory } from "react-router-dom"; 

import orangebg1 from "../../Assets/Images/orangebg1.jpg";
import introimg from "../../Assets/Images/introimg.png";





const Introduction = () => {
    let history = useHistory();


    return(
     
        <div className='ico-info' style={{backgroundImage:`url(${orangebg1})`,backgroundRepeat:'no-repeat'}} >
   <br/><br/><br/>
   <div className='container'>
   <h2 className='lineup'>Introduction to FiNFTi</h2>
<br/>
   <div className="row">
   <div className="col-sm-4 text-center">
   
   <div className='intro-img'>
  <Image  src={introimg}
  style={{width:'20rem'}}
  responsive/>
  </div>
   

</div>
<div className='col-sm-8 text-start'>
<p className='intro-p'>
   FiNFTi is a unique NFT Platform where you can host or find different types of NFTs which haven’t been adopted by the current NFT marketplace platforms. FiNFTi is a first of its kind, user friendly platform especially developed for the Non-Technical Community comprising of all types of Artists including photographers, story writers, lyricists, musicians, art directors, owners of rare collectibles, real estate owners, sculpturers, movie makers, entrepreneurs, painters along with the techno savvy creators like gaming artists, graphic artists and many more such people who can be a part of the NFT ecosystem.  
   </p>
   <br/>
   <Button variant="outline-light"
   onClick={()=>{history.push("/introduction/readmore");}}
   >Read More</Button>
</div>
</div>
   </div>
   
   </div>
    )
}

export default Introduction;