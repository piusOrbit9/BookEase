import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import routes from './routes/index.js';
const app=express();
app.use(helmet());
app.use(cors({origin:process.env.CLIENT_ORIGIN?.split(',')||'http://localhost:5173'}));
app.use(express.json({limit:'1mb'}));
app.use(morgan(process.env.NODE_ENV==='production'?'combined':'dev'));
app.use('/api',rateLimit({windowMs:15*60*1000,limit:300,standardHeaders:true,legacyHeaders:false}));
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'BookEase',database:mongoose.connection.readyState===1?'connected':'disconnected',time:new Date().toISOString()}));
app.use('/api',routes);
app.use((req,res)=>res.status(404).json({message:'Route not found'}));
app.use((err,req,res,next)=>{
 if(err?.name==='ZodError')return res.status(400).json({message:'Please check the submitted fields.',details:err.issues.map(i=>({field:i.path.join('.'),message:i.message}))});
 if(err?.name==='ValidationError')return res.status(400).json({message:err.message});
 if(err?.code===11000)return res.status(409).json({message:'A record with this unique value already exists.'});
 if(err?.name==='CastError')return res.status(400).json({message:'Invalid record ID.'});
 console.error(err);
 res.status(500).json({message:process.env.NODE_ENV==='production'?'An unexpected server error occurred.':'Unexpected server error',...(process.env.NODE_ENV!=='production'?{detail:err.message}:{})});
});
const port=Number(process.env.PORT||4000);
try{await mongoose.connect(process.env.MONGODB_URI);console.log('MongoDB connected');app.listen(port,()=>console.log(`BookEase API listening on ${port}`));}
catch(e){console.error('Failed to connect to MongoDB:',e.message);process.exit(1)}
