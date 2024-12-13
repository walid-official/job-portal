import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=> {
        fetch('/Categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="">
            <div className="text-center pt-10">
                <h2 className='font-bold text-4xl'>Popular <span className='text-[#55a1ff]'>Categories</span> </h2>
                <p className='text-center w-[40%] mx-auto py-4 text-[16px]'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
        <div className='w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-4 py-20'>
            {
                categories.map((Category,index) => <CategoryCard key={index}  category={Category}></CategoryCard> )
            }
        </div>
        </div>
    );
};

export default CategoryCards;