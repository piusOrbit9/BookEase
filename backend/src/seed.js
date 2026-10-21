import 'dotenv/config';import mongoose from 'mongoose';import Booking from './models/Booking.js';
await mongoose.connect(process.env.MONGODB_URI);await Booking.deleteMany({});
const future=(days,hour)=>{const d=new Date();d.setDate(d.getDate()+days);d.setHours(hour,0,0,0);return d};
await Booking.insertMany([
{customerName:'Isha Patil',email:'isha@example.com',service:'Discovery Call',startsAt:future(1,11),durationMinutes:30,notes:'Discuss MVP idea.'},
{customerName:'Kabir Joshi',email:'kabir@example.com',service:'Website Consultation',startsAt:future(2,14),durationMinutes:60,notes:'Review a small business website.'},
{customerName:'Demo Customer',email:'demo@example.com',service:'Support Session',startsAt:future(3,10),durationMinutes:30}
]);console.log('Seeded 3 BookEase demo bookings');await mongoose.disconnect();
