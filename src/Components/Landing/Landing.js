import React from 'react';
import '../../Css/Landing.css';
// import Particles from "react-tsparticles";


import {
    Container,
    
    Button,Table,
    Image,Row ,Col, Card
}  from 'react-bootstrap';

import {AiOutlineArrowRight} from 'react-icons/ai';
// import nft1 from '../../Assets/Images/nft1.jpg';
import tools from '../../Assets/Images/tools.png';
// import b1 from "../../Assets/Images/b1.jpg";
// import bitcoin from "../../Assets/Images/bitcoin.png";
import dummy from "../../Assets/Images/dummy.png";
import background9 from "../../Assets/Images/background9.gif";
import darkblue from "../../Assets/Images/darkblue.jpg";
import introimg from "../../Assets/Images/introimg.png";
import orangebg1 from "../../Assets/Images/orangebg1.jpg";

import art1 from "../../Assets/Images/art1.jpg";
import art2 from "../../Assets/Images/art2.jpg";
import art3 from "../../Assets/Images/art3.png";
import art4 from "../../Assets/Images/art4.jpg";




import { useHistory } from "react-router-dom"; 
import Introduction from './Introduction';
import Tokenomics from './Tokenomics';
import Keymetrics from './Keymetrics';





const Landing = () => {

  let history = useHistory();


  

    return(
<>
<div className='landing' id='landing' style={{backgroundImage:`url(${background9})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >

        
      <br/>

   {/* Landing Page */}
    <div className="landing-section">
    
        <div className='row text-center'> 
         <div className='col-sm-12 '>
        <div className='landing-info'>
        <h1 className='landing-heading'>FiNFTi
        is a NextGen NFT Platform
        </h1>
        <br/>
        <p>
        FiNFTi is an NFT Ecosystem transforming Digital Assets, Art, Music, Lyrics, Scripts, Novels,<br/>
         Physical Goods and IP, bringing NFT to the Mainstream Audience Globally 
        </p>
        <br/>
        <Button className="acc-button" variant="outline-light" size="lg">Access the Marketplace <AiOutlineArrowRight/> </Button>{' '}
        
        </div>
        </div>
        
        </div>
</div>
    </div>
    

    
<Introduction/>
<Tokenomics/>
<Keymetrics />
    

    {/*------------------ Tokenomics -----------------*/}

   
       {/*------------------ key metrics -----------------*/}

       

       {/*------------------ popular items -----------------*/}

    

    <div className='about' id='about' style={{backgroundImage:`url(${orangebg1})`,backgroundRepeat:'no-repeat'}} >
        <div className='container'>
            <h2>Popular Items</h2>
            
            <br/>

            <Row className='text-center'>
                <Col sm={3}>
                <Card className='card-about'>
                <Card.Img className='about-img' variant="top" src={art1} alt='about-image' />

                <Card.Body>
                <Card.Title className='card-title'>Fragments</Card.Title>
                <p>0.00080 ETH</p>
                <Card.Text className='card-text'>Highest Bid :</Card.Text>

                
                </Card.Body>
                
                </Card>
                
                
                </Col>
                <Col sm={3}>
                <Card className='card-about'>
                <Card.Img className='about-img' variant="top" src={art2} alt='about-image' />

                <Card.Body>
                <Card.Title className='card-title'>Shine Bright</Card.Title>
                <p>0.00080 ETH</p>
                <Card.Text className='card-text'>Highest Bid :</Card.Text>

                
                </Card.Body>
                
                </Card>
                
                
                </Col>
                <Col sm={3}>
                <Card className='card-about'>
                <Card.Img className='about-img' variant="top" src={art3} alt='about-image' />

                <Card.Body>
                <Card.Title className='card-title'>Fire Magic</Card.Title>
                <p>0.00080 ETH</p>
                <Card.Text className='card-text'>Highest Bid :</Card.Text>

                
                </Card.Body>
                
                </Card>
                
                
                </Col>
                <Col sm={3}>
                <Card className='card-about'>
                <Card.Img className='about-img' variant="top" src={art4} alt='about-image' />

                <Card.Body>
                <Card.Title className='card-title'>Art Edition</Card.Title>
                <p>0.00080 ETH</p>
                <Card.Text className='card-text'>Highest Bid :</Card.Text>

                
                </Card.Body>
                
                </Card>
                
                
                </Col>
                
                
            </Row>

        </div>


    </div>

    {/*------------------ Our Partners -----------------*/}

    <div className='partners'>
    <div className='container'>
    <div className='partners-container'>
    <br/><br/>

    <div className='row'>
    <h2>Our Partners</h2>
    <br/><br/>

    <div className='col-sm-2'>
      <div>
      <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners'style={{height:'150px',width:'200px',objectFit:'contain'}} />
      </div>
    </div>
    <div className='col-sm-2'>
    <div>
    <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners' style={{height:'150px',width:'200px',objectFit:'contain'}} />
    </div>
    </div>
    <div className='col-sm-2'>
    <div>
    <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners' style={{height:'150px',width:'200px',objectFit:'contain'}}/>
    </div>
    </div>
    <div className='col-sm-2'>
    <div>
    <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners' style={{height:'150px',width:'200px',objectFit:'contain'}} />
    </div>
    </div>
    <div className='col-sm-2'>
    <div>
    <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners' style={{height:'150px',width:'200px',objectFit:'contain'}} />
    </div>
    </div>
    <div className='col-sm-2'>
    <div>
    <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" alt='partners' style={{height:'150px',width:'200px',objectFit:'contain'}} />
    </div>
    </div>
    </div>
    </div>
    </div>

    
    </div>

        {/*------------------ Road Map-----------------*/}

    
    <div className="roadmap">
    <div className='container'>
    <br/>
    <div className='row'>
    <div className='col'>
    <h1>Roadmap</h1>
    <br/>
    <Image className="img-responsive" src={dummy}
    style={{height:'40%' , width:'100%',objectFit:'contain'}}
    />
    
    </div>
    <br/>
    </div>
    </div>
    <br/>
    
    </div>
 

    
    <div className='product' id='product' >
        <div className='container' >
        <br/>
        <div>
            <h2>Our Latest <span>Products</span></h2>
            <p>Check Out Our Newest Themes & Templates</p>
            <br/>
            <Row className='text-center'>
                <Col sm={3}>
                <div className='card '>
                <div className='card-body'>
                <img src={tools} alt="" style={{height:'70px',width:'70px'}}/>
                <h4>ICO Finance</h4>
                <p>Depending on your needs you can change the product easily in the way you want from the layout to look in no time.</p>
                </div>
                </div>

                </Col>
                <Col sm={3}>
                <div className='card '>
                <div className='card-body'>
                    <img src={tools} alt="" style={{height:'70px',width:'70px'}}/>
                    <h4>Blockchain</h4>
                    <p>Depending on your needs you can change the product easily in the way you want from the layout to look in no time.</p>
                    </div>
                    </div>
                </Col>
                <Col sm={3}>
                <div className='card '>
                <div className='card-body'>

                    <img src={tools} alt="" style={{height:'70px',width:'70px'}}/>
                    <h4>Market News</h4>
                    <p>Depending on your needs you can change the product easily in the way you want from the layout to look in no time.</p>
                    </div>
                    </div>

                </Col>
                <Col sm={3}>
                <div className='card '>
                <div className='card-body'>

                    <img src={tools} alt="" style={{height:'70px',width:'70px'}}/>
                    <h4>Market News</h4>
                    <p>Depending on your needs you can change the product easily in the way you want from the layout to look in no time.</p>
                    </div>
                    </div>

                </Col>
                
            </Row>
        </div>
        </div>

    </div>
    </>

    );
};

export default Landing;