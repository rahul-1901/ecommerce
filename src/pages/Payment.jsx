import React, { useEffect, useState } from 'react';
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react";
import { deliveryWork, finalOrderPage } from '../backendApi/api';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const [deliveryData, setDeliveryData] = useState({ firstName: "", lastName: "", pinCode: "", phoneNumber: "", State: "", Country: "", houseAddress: "", nearAddress: "", city: "", email: "" })
    const navigate = useNavigate();

    const handleDelivery = async (e) => {
        e.preventDefault();
        try {
            const response = await deliveryWork(deliveryData);
            if (response.message === 'Info already there...') {
                toast.warn(response.message, { autoClose: 1000 })
            } else {
                toast.success(response.message, { autoClose: 1000 })
            }
            setTimeout(() => {
                navigate('/finalPayment');
            }, 2000)
        } catch (error) {
            toast.error("Error submitting delivery details.");
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDeliveryData({ ...deliveryData, [name]: value })
    }

    useEffect(() => {
        const fetchDeliveryDetails = async () => {
            const storedEmail = localStorage.getItem("userEmail");
            if (storedEmail) {
                setDeliveryData((prev) => ({ ...prev, email: storedEmail }));
                try {
                    const data = await finalOrderPage();
                    console.log(data)
                    if (data.email === storedEmail) {
                        setDeliveryData((prev) => ({
                            ...prev,
                            ...data,
                        }));
                    } else {
                        console.warn("No delivery details found");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        fetchDeliveryDetails();
    }, []);

    return (
        <>
            <Link to='/cart' className='linkTocart mt-[75px] text-gray-700 flex items-center text-[17px]'><ChevronLeft size={18} className='mt-[1px]' /> Back To Cart</Link>
            <div className='flex paymentJsx min-h-screen mt-[0px]'>
                <form className='flex flex-col gap-4 sm:w-[350px] md:w-[500px] px-5 mb-10' onSubmit={handleDelivery}>
                    <p className='text-center text-3xl font-medium'><span className='latest'>DELIVERY</span> INFORMATION</p>
                    <div className='payUserInput flex gap-3'>
                        <input
                            type='text'
                            required
                            name='firstName'
                            placeholder='First Name'
                            className='border border-gray-300 rounded py-2 px-1 w-full'
                            value={deliveryData.firstName}
                            onChange={handleChange}
                        ></input>
                        <input
                            type='text'
                            required
                            name='lastName'
                            value={deliveryData.lastName}
                            onChange={handleChange}
                            placeholder='Last Name'
                            className='border border-gray-300 rounded py-2 px-1 w-full'
                        ></input>
                    </div>
                    <input
                        type='email'
                        required
                        name='email'
                        value={deliveryData.email}
                        onChange={handleChange}
                        placeholder='Email address'
                        className='border border-gray-300 rounded py-2 px-1 w-full bg-blue-100'
                        readOnly
                    >
                    </input>
                    <input
                        type='text'
                        required
                        name='houseAddress'
                        value={deliveryData.houseAddress}
                        onChange={handleChange}
                        placeholder='House Address'
                        className='border border-gray-300 py-2 px-1 rounded w-full'
                    >
                    </input>
                    <input
                        type='text'
                        name='nearAddress'
                        value={deliveryData.nearAddress}
                        onChange={handleChange}
                        placeholder='Near LandMark *(Optional)'
                        className='border border-gray-300 py-2 px-1 rounded w-full'
                    >
                    </input>
                    <div className='payUserInput flex gap-3'>
                        <input
                            type='text'
                            required
                            placeholder='City'
                            name='city'
                            value={deliveryData.city}
                            onChange={handleChange}
                            className='border border-gray-300 rounded py-2 px-1 w-full'
                        >
                        </input>
                        <input
                            type='tel'
                            name='phoneNumber'
                            value={deliveryData.phoneNumber}
                            onChange={handleChange}
                            placeholder='+91 Phone Number'
                            pattern="[0-9]{10}"
                            maxLength="10"
                            className='border border-gray-300 rounded py-2 px-1'
                        >
                        </input>
                    </div>
                    <select
                        name='State'
                        value={deliveryData.State}
                        onChange={handleChange}
                        className='border border-gray-900 rounded py-2 w-full'>
                        <option value='country'>State</option>
                        <option value='aCountry'>Andhra Pradesh</option>
                        <option value='bCountry'>Arunachal Pradesh</option>
                        <option value='cCountry'>Assam</option>
                        <option value='dCountry'>Bihar</option>
                        <option value='eCountry'>Chhattisgarh</option>
                        <option value='fCountry'>Goa</option>
                        <option value='gCountry'>Gujarat</option>
                        <option value='hCountry'>Haryana</option>
                        <option value='iCountry'>Himachal Pradesh</option>
                        <option value='jCountry'>Jharkhand</option>
                        <option value='kCountry'>Karnataka</option>
                        <option value='lCountry'>Kerala</option>
                        <option value='mCountry'>Madhya Pradesh</option>
                        <option value='nCountry'>Maharashtra</option>
                        <option value='oCountry'>Manipur</option>
                        <option value='pCountry'>Meghalaya</option>
                        <option value='qCountry'>Mizoram</option>
                        <option value='sCountry'>Nagaland</option>
                        <option value='tCountry'>Odisha</option>
                        <option value='uCountry'>Punjab</option>
                        <option value='vCountry'>Rajasthan</option>
                        <option value='wCountry'>Sikkim</option>
                        <option value='xCountry'>Tamil Nadu</option>
                        <option value='yCountry'>Telangana</option>
                        <option value='zCountry'>Tripura</option>
                        <option value='1Country'>Uttar Pradesh</option>
                        <option value='2Country'>Uttarakhand</option>
                        <option value='3Country'>West Bengal</option>
                    </select>
                    <div className='payUserInput flex gap-3'>
                        <input
                            type='text'
                            required
                            placeholder='Pincode'
                            name='pinCode'
                            value={deliveryData.pinCode}
                            onChange={handleChange}
                            maxLength="6"
                            className='payerPincode border border-gray-900 rounded py-2 px-1 w-full'
                        >
                        </input>
                        <select
                            name='Country'
                            value={deliveryData.Country}
                            onChange={handleChange}
                            className='border border-gray-900 rounded py-2 px-1 w-full'>
                            <option value='country'>Country</option>
                            <option value='firstCountry'>India</option>
                        </select>
                    </div>
                    <button type='submit'
                        className='cursor-pointer bg-black py-3 rounded text-white'>
                        PROCEED PAYMENT
                    </button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Payment