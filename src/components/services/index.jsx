import React from 'react';
import './services.css';

const SERVICES = [
    {
        name: 'Fresh Start',
        description: "Ideal for regular upkeep and a quick refresh Basic cleaning essentials (dusting, vacuuming, sweeping, and mopping)Kitchen counter cleaning Bathroom sanitization (toilet, sink, tub/shower)",
        pricing: [
            "Small home (1–2 bedrooms): $125",
            "Medium home (3–4 bedrooms): $150",
            "Large home (5+ bedrooms): $200"
        ]
    },
    {
        name: 'Radiant Refresh',
        description: "Go beyond the basics with detailed surface care Everything in Fresh Start, plus: Inside window cleaning (within safe reach) Baseboards and door-frame dusting Exterior appliance cleaning Garbage removal",
        pricing: [
            "Small home (1–2 bedrooms): $150",
            "Medium home (3–4 bedrooms): $225",
            "Large home (5+ bedrooms): $300"
        ]
    },
    {
        name: 'Ultimate Sparkle',
        description: "Comprehensive deep clean and organization for a spotless home Everything in Radiant Refresh, plus: Deep cleaning/organizing of kitchen and bathrooms Oven and refrigerator interior cleaning Closet organization Carpet deep cleaning Under-furniture cleaning",
        pricing: [
            "Small home (1–2 bedrooms): $250",
            "Medium home (3–4 bedrooms): $375",
            "Large home (5+ bedrooms): $500"
        ]
    }
]; 

function Services() {
    return (
        <div className="services">
            {SERVICES.map((service, index) => (
                <Service
                    key={index}
                    name={service.name}
                    description={service.description}
                    pricing={service.pricing}
                />
            ))}
        </div>
    );
}

import PropTypes from 'prop-types';

function Service({ name, description, pricing }) {
    return (
        <div className="service">
            <h2 className="service-name">{name}</h2>
            <p className="service-description">{description}</p>
            <div className="pricing">
                <h3 className="pricing-title">Pricing (Starting at):</h3>
                <ul className="pricing-tiers">
                    {pricing.map(price => (
                        <li key={price} className="pricing-tier">{price}</li>
                    ))}
                </ul>
                <p className="pricing-extra-info">Prices may vary for extra rooms or heavy clutter</p>
            </div>
        </div>
    );
}



// Add-On Services
// (Optional, can be added to any package)
// Inside cabinet cleaning
// Carpet steam cleaning or upholstery cleaning
// Carpet deodorizing
// Additional tasks upon request

// Additional Notes
// Custom Packages: If you have unique needs (e.g., move-in/move-out cleaning, specialized services), let us know and we’ll tailor a package.
// Pricing Flexibility: All prices serve as a baseline and can vary based on home size, condition, and specific requests.

export default Services;