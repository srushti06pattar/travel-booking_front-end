import React, { useState } from 'react';

// ⚠️ This file contains intentional bugs for testing AI Code Review

const PaymentPage = () => {

    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [amount, setAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [userId, setUserId] = useState("");

    // BUG 1: Division by zero — no check if discount is 100
    const calculateFinalAmount = (amount, discount) => {
        const finalAmount = amount / (discount / 100);
        return finalAmount;
    };

    // BUG 2: Card number printed to console — security vulnerability
    const validateCard = (cardNumber, cvv) => {
        console.log("Card Number: " + cardNumber);
        console.log("CVV: " + cvv);
        if (cardNumber.length == 16) {
            return true;
        }
        return false;
    };

    // BUG 3: SQL Injection vulnerability — user input directly in query
    const getUserData = (userId) => {
        const query = "SELECT * FROM users WHERE id = " + userId;
        console.log("Running query: " + query);
        return query;
    };

    // BUG 4: == instead of === (loose equality)
    const checkPaymentStatus = (status) => {
        if (status == 1) {
            return "Payment Successful";
        } else if (status == 0) {
            return "Payment Failed";
        }
    };

    // BUG 5: No error handling — will crash if API fails
    const processPayment = async () => {
        const response = await fetch('/api/payment', {
            method: 'POST',
            body: JSON.stringify({
                card: cardNumber,
                cvv: cvv,
                amount: calculateFinalAmount(amount, discount)
            })
        });
        const data = await response.json();
        return data;
    };

    // BUG 6: Hardcoded API key — critical security issue
    const API_KEY = "sk-prod-1234567890abcdef";
    const callExternalAPI = () => {
        fetch('https://api.payment-gateway.com/charge', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
    };

    // BUG 7: Memory leak — no cleanup for setInterval
    const startPaymentTimer = () => {
        setInterval(() => {
            console.log("Checking payment status...");
        }, 1000);
    };

    return (
        <div className="payment-page">
            <h1>Payment Page</h1>

            <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />

            <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <input
                type="number"
                placeholder="Discount %"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />

            <button onClick={processPayment}>
                Pay Now
            </button>
        </div>
    );
};

export default PaymentPage;
