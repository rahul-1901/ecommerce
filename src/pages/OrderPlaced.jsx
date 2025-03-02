import React, { useEffect, useState } from 'react';
import { finalOrderPage,purchasedItems } from '../backendApi/api';
import { Package, Truck, CreditCard, Calendar, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const OrderPlaced = () => {
    const [finalOrderDetails, setFinalOrderDetails] = useState([]);
    const [bought, setBought] = useState([]);

    const fetchOrderdetails = async () => {
        try {
            const response = await finalOrderPage();
            setFinalOrderDetails(response);
            console.log(response)
        } catch (error) {
            console.log("error");
        }
    }

    const fetchPurchased = async () => {
        try {
            const response = await purchasedItems();
            setBought(response);
            // console.log(response)
        } catch (error) {
            console.log("Error fetching from frontend side...")
        }
    }


    const orderDate = () => {
        const date = new Date();
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }

    const deliveryDate = () => {
        const date = new Date();
        return `${date.getDate() + 5}-${date.getMonth() + 1}-${date.getFullYear()}`
    }

    const wordsValue = () => {
        if(bought.length > 1) {
            return "items"
        } else if (bought.length === 1) {
            return "item"
        } 
    }
    
    useEffect(() => {
        fetchOrderdetails();
        fetchPurchased();
    }, [])

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 mt-10 mb-5">
                <div className="bg-white rounded-xl shadow-md max-w-2xl w-full overflow-hidden">

                    <div className="bg-green-50 p-6 border-b border-green-100">
                        <div className="flex items-center">
                            <CheckCircle className="text-green-500 mr-3" size={28} />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800">Order Placed Successfully</h1>
                                <p className="text-gray-600">Thank you for your purchase!</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <p className="text-sm text-gray-500">Order Number</p>
                                <p className="font-medium">#ORD-{new Date().getFullYear()}-{Math.round(Math.random() * (5000 - 2222 + 1)) + 2222}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Order Date</p>
                                <p className="font-medium">{orderDate()}</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <Package className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Items Purchased</p>
                                    <p className="font-medium"> {bought.length} {wordsValue()}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Truck className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Shipping Address</p>
                                    <p className="font-medium">{finalOrderDetails.houseAddress}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Calendar className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                                    <p className="font-medium">{deliveryDate()}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex-1">
                                Track Order
                            </button>
                            <Link to="/finalPayment" className='flex-1'>
                                <button className="text-white font-medium py-2 px-6 rounded-lg bg-[oklch(0.373_0.034_259.733)] hover:bg-[oklch(0.373_0.054_259.733)] w-full cursor-pointer">
                                    View Order Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                            Need help? <a href="#" className="text-blue-600 hover:underline">Contact our support team</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderPlaced;