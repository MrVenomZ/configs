import React, { useState, useEffect } from "react";
import ShippingStyle from "./ShippingStyle.module.css"; 

const CountrySelector = () => {
    const [countries, setCountries] = useState([]); 
    const [country, setCountry] = useState(""); 

    useEffect(() => {
        fetch("/path-to-your/countries.json") 
            .then((response) => response.json())
            .then((data) => setCountries(data)) 
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);


    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    return (
        <div className={ShippingStyle.CurrencyContent}>
            <label htmlFor="countrySelect">اختر البلد</label>
            <select
                id="countrySelect"
                value={country}
                onChange={handleCountryChange}
            >
                {}
                {countries.map((name, index) => (
                    <option key={index} value={name.toLowerCase()}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelector;
