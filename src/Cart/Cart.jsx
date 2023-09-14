/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        <div className='text-center  bg-white p-3 rounded-xl text-gray-500'>
            {
                selectedCourse.map(course =>
                    <li className=" list-decimal">{course.course_name}</li>

                    )
            }
            <hr className="mt-3" />
        </div>
    );
};

export default Cart;