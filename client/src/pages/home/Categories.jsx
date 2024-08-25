import React from 'react';

const categoryItems = [
    {id: 1, title: "Main Dish", des: "(4 Dishes)", image: "/images/home/category/dish.jpg"},
    {id: 2, title: "Breakfast", des: "(4 Breakfast)", image: "/images/home/category/Breakfast.jpg"},
    {id: 3, title: "Dessert", des: "(4 Dessert)", image: "/images/home/category/dessert.jpg"},
    {id: 4, title: "Browse", des: "(Browse All)", image: "/images/home/category/browse.jpg"},
];

const Categories = () => {
    return (
        <div className='section-container py-16'>
            <div className='text-center'>
                <p className='subtitle'>Customer Favorites</p>
                <h2 className='title'>Popular Categories</h2>
            </div>

            {/* Categories */}
            <div className='flex flex-wrap gap-16 justify-center items-center mt-12'>
                {
                    categoryItems.map((item, i) => (
                        <div key={i} className='text-center shadow-lg bg-[#d6e6e3] py-6 px-5 w-72 cursor-pointer transition-transform transform hover:scale-105'>
                            <div className='flex justify-center'>
                                <img
                                    src={item.image}
                                    alt=''
                                    className='p-4 rounded-full w-40 h-40 object-cover'
                                />
                            </div>

                            <div className='mt-5 space-y-1'>
                                <h5 className='font-semibold'>{item.title}</h5>
                                <p className='text-gray-600'>{item.des}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
