"use client"
import React, { useState } from "react";
import styles from '@/components/styles/header.module.css'
import Container from "@/components/Container";

const CalculationSection = () => {
    // State management for the sliders and inputs
    const [rooms, setRooms] = useState(3000); // Number of rooms
    const [floors, setFloors] = useState(5000); // Number of floors
    const [energyType, setEnergyType] = useState(""); // Energy Type
    const [bathroom, setBathroom] = useState(""); // Bathroom type
    const [terrace, setTerrace] = useState(false); // Terrace option

    // Calculate the estimated price based on inputs
    const calculatePrice = () => {
        // Basic pricing logic based on sliders
        let basePrice = 10000;
        basePrice += rooms * 0.5; // Price per room
        basePrice += floors * 10; // Price per floor
        if (terrace) basePrice += 5000; // Add price if terrace is selected

        return basePrice;
    };

    return (

        <div className={`${styles.navbar} py-[80px]`}>
            <Container>
            <div>
                <h2 className="text-2xl font-semibold  mb-4">
                    <span className="underline decoration-[#FEED01] text-white">ESTIMATED PRICE</span>
                </h2>
                <h3 className="text-4xl font-semibold  text-white mb-12">
                    Mortage Calculator
                </h3>
            </div>

            <div className="bg-white text-black p-10">


                {/* Form Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Slider for rooms */}
                    <div className="flex flex-col">
                        <label htmlFor="rooms" className="text-xl mb-2">
                            How many rooms:
                        </label>
                        <div className="flex justify-between items-center mb-6">
                            <input
                                type="range"
                                id="rooms"
                                min="1000"
                                max="50000"
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                                className="w-full h-2 bg-gray-500 rounded-full"
                            />
                            <span className="text-xl">{rooms}</span>
                        </div>
                    </div>

                    {/* Slider for floors */}
                    
                    <div className="flex flex-col">
                        <label htmlFor="floors" className="text-xl mb-2">
                            Number of floors:
                        </label>
                        <div className="flex justify-between items-center mb-6">
                            <input
                                type="range"
                                id="floors"
                                min="0"
                                max="10000"
                                value={floors}
                                onChange={(e) => setFloors(e.target.value)}
                                className="w-full h-2 bg-[gray-500]  rounded-full"
                            />
                            <span className="text-xl">{floors}</span>
                        </div>
                    </div>
                </div>

                {/* Dropdown for energy type */}
                <div className="mb-6">
                    <label htmlFor="energy" className="text-xl mb-2">
                        Energy Type:
                    </label>
                    <select
                        id="energy"
                        value={energyType}
                        onChange={(e) => setEnergyType(e.target.value)}
                        className="w-full p-3 bg-[#feed01] text-black rounded-md"
                    >
                        <option value="">Select Now</option>
                        <option value="Solar">Solar</option>
                        <option value="Electric">Electric</option>
                        <option value="Gas">Gas</option>
                    </select>
                </div>

                {/* Dropdown for bathroom type */}
                <div className="mb-6">
                    <label htmlFor="bathroom" className="text-xl mb-2">
                        Bathroom:
                    </label>
                    <select
                        id="bathroom"
                        value={bathroom}
                        onChange={(e) => setBathroom(e.target.value)}
                        className="w-full p-3 bg-[#feed01] text-black rounded-md"
                    >
                        <option value="">Select Now</option>
                        <option value="1">1 Bathroom</option>
                        <option value="2">2 Bathrooms</option>
                        <option value="3">3 Bathrooms</option>
                    </select>
                </div>

                {/* Terrace toggle */}
                <div className="mb-6 flex items-center">
                    <label htmlFor="terrace" className="text-xl mr-4">
                        Terrace:
                    </label>
                    <button
                        onClick={() => setTerrace(!terrace)}
                        className={`px-6 py-3 rounded-md ${terrace ? "bg-green-500" : "bg-red-500"}`}
                    >
                        {terrace ? "Yes" : "No"}
                    </button>
                </div>

                {/* Estimated Price Display */}
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold">Estimated Price:</h3>
                    <p className="text-4xl font-bold inline-block px-6 py-4 text-black bg-[#feed01] mt-2">
                        ${calculatePrice()}
                    </p>
                </div>
            </div>
            </Container>
           
        </div>


    );
};

export default CalculationSection;
