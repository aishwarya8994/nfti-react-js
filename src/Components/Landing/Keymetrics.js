import React from "react";
import { Table, Image } from "react-bootstrap";

import '../../Css/Landing.css';

import pie from "../../Assets/Images/pie.png";


const Keymetrics = () => {

    return(
        <div className='key-metrics'>
       <div className='container'>
       <div className='row text-start'>
       <div className='col-sm-6'>
       <br/>
       <h3>Key Metrics</h3>
       <br/><br/>
       <div>
       <Table className='table'  bordered size="md" >
  
  <tbody>
    <tr>
      <td>Total Supply</td>
      <td>10,000,000,000 </td>
    </tr>
    <tr>
      <td>Early-Stage Associates & Community Members</td>
      <td>500,000,000</td>
    </tr>
    <tr>
      <td>Seed Round  </td>
      <td>500,000,000 </td>
    </tr>
    <tr>
      <td>Initial Supply   </td>
      <td>1,000,000,000 </td>
    </tr>
    <tr>
      <td>Development, Maintenance & Enhancement </td>
      <td>5,000,000,000 </td>
    </tr>
    <tr>
      <td>Charity   </td>
      <td>200,000,000 </td>
    </tr>
    <tr>
      <td>Treasury  </td>
      <td>2,000,000,000 </td>
    </tr>
  </tbody>
</Table>
       </div>


       </div>
       <div className='col-sm-6'>
       <br/>
       <h3>Detailed Token Metrics</h3>
       <br/>


       <Image src={pie}
   className="pie img-responsive "
   style={{height:'70vh'}}
    responsive />

       

       </div>
       
       </div>
       </div>
       
       </div>

    
    )
}

export default Keymetrics;