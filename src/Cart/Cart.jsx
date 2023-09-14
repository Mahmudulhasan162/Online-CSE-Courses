/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse,remainingCredit,totalCredit}) => {
    
    return (
        <div className='text-center  bg-white p-3 rounded-xl text-gray-500'>
            <p className="text-[#2F80ED] text-lg font-semibold">Remaining Credit Hours: {remainingCredit} hr </p>
            <h2 className='text-xl font-bold'>Course Name</h2>
            {
                
                selectedCourse.map(course =>
                    <>
                        
                        <li key={course.id} className=" list-decimal">{course.course_name}</li>
                    
                    </>
                    )
            }
            <hr className="mt-3" />
            <p>Total Credit Hours: {totalCredit}</p>
        </div>
    );
};

export default Cart;