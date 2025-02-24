import React, { useEffect, useState } from 'react';
import "./Cart.css";
import image from "../assets/homeStart.png"
import { Trash } from "lucide-react";
import { deleteUserClothes, purchasedItems } from '../backendApi/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [purchased, setPurchased] = useState([]);
    const fetchPurchased = async () => {
        try {
            const response = await purchasedItems();
            setPurchased(response);
            console.log(response)
        } catch (error) {
            console.log("Error fetching from frontend side...")
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteUserClothes(id);
            toast.success(response, {autoClose: 1000});
            const updatedUserClothes = await purchasedItems();
            setPurchased(updatedUserClothes);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPurchased();
    }, [])

    return (
        <>
            <div className='min-h-screen mt-[70px] mb-10'>
                <div className='lg:ml-[60px] ml-[10px]'>
                    <div className='titleDesign flex mt-[100px]'>
                        <p className='text-center text-3xl'><span className='latest'>YOUR</span> CART</p>
                        <div className='spanLine ml-2'></div>
                    </div>
                    <div className='flex flex-col'>
                        {purchased.map((items) => (
                            <div key={items._id} className='flex md:gap-10 mt-5 itemsHere justify-between'>
                                <div className='flex md:none md:gap-10'>
                                    <div className=''>
                                        <img src={items.image} className='clothesShown lg:w-40 md:w-40'></img>
                                    </div>
                                    <div className='itemDescrip flex flex-col ml-2 md:ml-0'>
                                        <p className='text-sm md:text-2xl lg:text-3xl font-medium text-gray-700'>{items.name}</p>
                                        <div className='flex gap-3 ml-[1px] mt-2'>
                                            <p className='md:text-[20px]'>${items.price}</p>
                                            <div className='sizeMap px-2 md:px-3 md:py-1'>
                                                M
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row md:justify-center items-center md:items-start mt-2 ml-2 md:mt-4 md:ml-10 lg:ml-60 trashHere text-xl'>
                                    <div className='itemAddded w-20 mr-1 md:mr-0'>22</div>
                                    <button onClick={() => handleDelete(items._id)}>
                                        <Trash size={25} className='md:ml-20 mt-2 md:mt-[2px] cursor-pointer md:mr-20' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ToastContainer />
            </div >
        </>
    )
}

export default Cart