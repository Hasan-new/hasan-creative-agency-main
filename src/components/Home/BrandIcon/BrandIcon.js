import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';

const BrandIcons = [
        {
            icon: airbnb,
        },
        {
            icon: slack,
        },
        
        {
            icon: netflix,
            
        },
        {
            icon: uber,
            
        },
        {
            icon: google,
            
        }
    ]




const BrandIcon = () => {

    return (
        <div className='text-center'>
            {
                BrandIcons.map(brand => <img style={{ height:'30px'}} src={brand.icon} alt="" className="mt-5 ml-5 icons"  /> )
            }
        </div>
    );
};

export default BrandIcon;