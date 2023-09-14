import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Cards = () => {
    const[course, setCourses]= useState([])

    useEffect(()=>{
        fetch("../../../public/Courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])
    return (
        <div>
            {
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            }
        </div>
    );
};

export default Cards;