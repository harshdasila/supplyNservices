import React from 'react';

function Copywrite() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=' bg-[#007eff] text-white text-sm p-5 leading-7'>
            
            <p className='text-xl'>© {currentYear} Copy & Supplies. All rights reserved.</p>
            <p>
                Disclaimer: CopyndServices is an online platform that sells various brands and products. They support their merchandise through the Original Equipment Manufacturer (OEM) and adhere to CTS's and FTC's rules for buyer protection. They want to make it clear that they are not associated or affiliated with the products purchased on their website, as those products are also available on the brand owners' websites. For more information, customers should refer to their refund policy or contact them directly with any questions.

            </p>
        </footer>
    );
}

export default Copywrite;
