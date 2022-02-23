import React from 'react';
import "../../Css/ReadMore.css";
// import {
//     Image
// } from 'react-bootstrap';

import intro1 from "../../Assets/Images/intro1.jpg";

const ReadMore = () => {

    return(
    <div className='readmore-body'>
    <div className='read-img' style={{backgroundImage:`url(${intro1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'250px',width:'100%'}}>
    <h2 className='intro-finfti'>Introduction to FiNFTi</h2>  

    </div>
    <div className='container'>
    <br/>
    
    <br/><br/>
    <div className='row '>
    <br/><br/>
    <div className='col text-start'>
    <p>
    FiNFTi is a unique NFT Platform where you can host or find different types of NFTs which haven’t been adopted by the current 
    NFT marketplace platforms. FiNFTi is a first of its kind, user friendly platform especially developed for the Non-Technical Community
    comprising of all types of Artists including photographers, story writers, lyricists, musicians, art directors, owners of rare collectibles, 
    real estate owners, sculpturers, movie makers, entrepreneurs, painters along with the techno savvy creators like gaming artists, 
    graphic artists and many more such people who can be a part of the NFT ecosystem. 
    </p>
    
    <p>
    The platform will be divided into different sections based on whether the asset to be tokenized belongs to the graphics industry, metaverse industry, gaming industry, movie industry, sports faculty, physical assets from real estate industry, rare collectibles, business, diamonds, inventions, etc.
    </p>
    <br/>
    <h4>Changing the way Digital Assets move across the market </h4>
    <br/>
    <p>
    FiNFTi will empower the artists to create their digital and physical IPs on our platform and share it with the other stake holders in their industry in a very systematically copyrighted and protected manner. This will be of great value to the creative industry where lyricists, music composers, story writers, novelists who are in need of sharing their IP with the other stakeholders in a protected manner. 
    </p>

    <p>
    The Creator of the NFT does not have to get indulged in the complexity of blockchain wallets management like MetaMask. The platform will provide an easier interface to the creator to pay the fees in FIAT which in turn will get converted into MATIC tokens to mint the creative on the Polygon Blockchain.  
    </p>
    <p>
    Creative Artists can market their art like never before to the world using the state of art NFT Platform 
    </p>
    
    </div>
    
    </div>
    </div>
    <br/><br/><br/><br/>
    </div>
    );
};

export default ReadMore;