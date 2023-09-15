/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse,remainingCredit,totalCredit, totalPrice}) => {
    
    return (
        <div className='text-left  bg-white p-3 rounded-xl text-gray-500 mt-3'>
            <p className="text-[#2F80ED] text-lg font-semibold">Remaining Credit Hours: {remainingCredit} hr </p>
            <hr className="my-5" />
            <h2 className='text-xl font-bold'>Course Name</h2>
            {
                
                selectedCourse.map(course =>
                    <>
                        
                        <li key={course.id} className=" list-decimal">{course.course_name}</li>
                    
                    </>
                    )
            }
            <hr className="my-5" />
            <p className=" text-slate-600 font-medium">Total Credit Hours: {totalCredit}</p>
            <hr className="my-5" />
            <p className=" text-slate-600 font-medium">Total Price : {totalPrice} USD</p>
        </div>
    );
};

export default Cart;