import React from 'react';
import { Star } from 'lucide-react';

//Mock data
const watches = [
    {
        id: 1,
        name: "Royal Oak Chronograph",
        category: "luxury",
        price: 25000,
        image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        featured: true
    },
    {
        id: 2,
        name: "Nautilus Blue Dial",
        category: "luxury",
        price: 35000,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80",
        featured: true
    },
    {
        id: 3,
        name: "Submariner Date",
        category: "luxury",
        price: 12000,
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        id: 4,
        name: "Speedmaster Professional",
        category: "luxury",
        price: 6000,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
];

const WatchCard = ({ watch }) => (
    <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
            <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {watch.name}
                    </a>
                </h3>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-900">${watch.price.toLocaleString()}</p>
            </div>
        </div>
    </div>
);

const Watches = () => {
    return (
        <div className="bg-white">
            <div className="relative h-[100vh]">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Watches collection"
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                </div>
                <div className="relative flex justify-center items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Our Watch Collection
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                            Discover timepieces for every style, occasion, and budget.
                        </p>
                    </div>
                </div>

            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Luxury Watches</h2>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {watches.map((watch) => (
                        <WatchCard key={watch.id} watch={watch} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Watches;
