import React from "react";
import { Table , Image} from "react-bootstrap";
import '../../Css/Landing.css';

import darkblue from "../../Assets/Images/darkblue.jpg";



const Tokenomics = () => {

    return(
        <div className="tokenomics" id="tokenomics" style={{backgroundImage:`url(${darkblue})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh',justifyContent:'center',alignItems:'center'}}>
   <div className="container">
   <br/>
   <h2 className="token-heading text-center">Tokenomics</h2>
   <br/>

   <div className="row">
   
   <div className='col-sm-5'>
   <Table className='table'  bordered size="md" >
  
  <tbody>
    <tr>
      <td>Contract Address</td>
      <td>address</td>
    </tr>
    <tr>
      <td>Contract Link</td>
      <td><a href='https://bscscan.com/token/address'>https://bscscan.com/token/address</a> </td>
    </tr>
    <tr>
      <td>Name </td>
      <td>FiNFTi</td>
    </tr>
    <tr>
      <td>Type  </td>
      <td>BEP-20 </td>
    </tr>
    <tr>
      <td>Symbol  </td>
      <td>FNFT</td>
    </tr>
  </tbody>
</Table>
   
   
   
   

   </div>

   <div className="col-sm-7">
   <div>
   <p className="text-start">
   FNFT token is FiNFTi’s Utility token.    
   </p>
   <p className="text-start">
   FNFT Token will be used for consuming various service of the FiNFTi platform.  
   </p>
   <p className="text-start">
   FNFT token can be used to list an NFT. You can avail assistance in converting the assets to NFTs from our tech assistants and pay FNFT tokens as charges. Using FNFT you can buy an NFT.   
   </p>
   <p className='text-start'>
   You can stake FNFT to earn rewards.  
   FNFT is the transacting medium of this platform FiNFTi. 
   </p>
   <p className="text-start">
   FiNFTi Team’s and Advisors’ Tokens will be locked for 3 months after IDO with an additional 24 months of vesting. Marketplace Mining Tokens will be vested for 40 months after IDO.
   </p>
   </div>
   </div>
   
   </div>

   
   </div>
   </div>

    )
}

export default Tokenomics;