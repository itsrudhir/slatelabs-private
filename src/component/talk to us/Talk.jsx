import React from 'react'







const Talk = () => {
  return (
    <>
      
        <div className='bg-orange-700 rounded-3xl w-11/12 mx-auto shadow-[3px_3px_10px_0px] mb-12 md:w-6/12'  >

            <div>
                <h3 className='text-center pt-5 text-4xl font-semibold'>Get in Touch with Us</h3>

            </div>
            <img src="990.png" alt="" className='mx-auto object-contain lg:w-4/12'/>


            <div className='flex flex-col items-center justify-center pb-4'>

            <button type='button' className='btn btn-outline-dark btn-lg shadow-[1px_1px_4px]'
            onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSeoPSQH1eX_w324reQJuWhXpKN1Flqh27rW2jekTiBBJj8KzQ/viewform?usp=send_form")}} >
                Lets Go{'>>'}
            </button>

            </div>

        </div>






    </>
  )
}

export default Talk
