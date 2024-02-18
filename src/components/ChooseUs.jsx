import React from 'react'

const ChooseUs = () => {
  return (
    <div className='p-9 mt-[3rem]  bg-[#007eff]'>
    <div className='flex justify-center  '>
        <div className='text-3xl font-bold'>Why Choose US</div>
    </div>
    <div className='flex justify-between'>
            <div className='choose-us-item lg:w-2/5 lg:pl-5 ml-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-white'>Authentic Products</h1>
                <div className='text-white text-balance font-[400] text-[18px] mt-5 pb-3 text-center font-sans'>
                At SupplyndServices, we pride ourselves on offering only authentic products to our customers. We carefully select our suppliers and ensure that they are verified vendors to guarantee the highest quality products. Our commitment to authenticity is unwavering, and we stand behind our services with a 10-day, no-questions-asked refund policy. If for any reason you are not satisfied with your purchase, you can return it to us within 10 days for a full refund. Our goal is to provide our customers with the best possible products and services, and we are confident that you will be satisfied with your experience shopping with us.

                </div>
            </div>
            <div className='choose-us-item lg:w-2/5 lg:pr-5 mr-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-white '>24/7 Customer Service</h1>
                <div className='text-white text-balance font-[400] text-[18px] mt-5 pb-3 text-center font-sans'>
                At SupplyndServices, we understand the importance of your order and value your time. That's why our dedicated customer service representatives are available Round The Clock to address any inquiries you may have regarding order status, order tracking, cancellations, refunds, and general queries. Whether you need assistance with placing an order, tracking your shipment, or have any other questions, our knowledgeable representatives are always here to help. Our commitment to exceptional customer service is a top priority for us, and we strive to provide prompt and efficient responses to all of your requests. We are here to make your shopping experience with us as seamless and stress-free as possible.

                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs
