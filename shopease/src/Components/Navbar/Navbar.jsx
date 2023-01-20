import React from 'react';
// import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline ,IoNotificationsOutline,IoCartOutline} from "react-icons/io5";

import {Search2Icon  } from '@chakra-ui/icons'
import { FcLike } from "react-icons/fc";

import './Navbar.Module.css';


export const Navbar = () => {
  return (
    <>
    
  <div className='navbar' >

<div>
<img src="" 
alt="" />
</div>


{/* div for input taking  and search button*/}


<div>
{/* <FaSistrix /> */}

<Search2Icon  marginRight={3} bg="#E9F6F7"  ml={2}/>

<input type="text" placeholder="What is on your mind Today ?" />


<button >Search</button>
</div>



<div>


  {/* icons div */}



<IoLocationOutline size={30} color='teal'/>
<IoNotificationsOutline size={30} color='teal'  />
<FcLike  size={30}  />
<IoCartOutline   size={30} color='teal'/>


{/* button for signin.... */}

<button>
  SignIn
</button>


</div>





  </div>



{/* // sun navbar -2 */}


<div  className='subnav1'>
<img src="https://images.shopclues.com/images/ui/madeinindia.png" 
alt="" />

<div>



<span>
  MOBILES & MORE
</span>

<span>
  MEN
</span>


<span>
  WOMEN
</span>

<span>
  HOME & kITCHEN 
</span>


<span>
  APPLIANCES
</span>


<span>
  SPORTS & MORE
</span>
<span>
  ESSENTIALS
</span>

<span>
  OFFERS
</span>


<span>
  GLOBAL SHOPPING
</span>
</div>

</div>

</>

    
    
  )
}
