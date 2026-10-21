import mongoose from 'mongoose';
const bookingSchema=new mongoose.Schema({
 customerName:{type:String,required:true,trim:true,maxlength:100},
 email:{type:String,required:true,trim:true,lowercase:true,maxlength:160},
 phone:{type:String,trim:true,maxlength:30,default:''},
 service:{type:String,required:true,enum:['Discovery Call','Website Consultation','Support Session']},
 startsAt:{type:Date,required:true},
 durationMinutes:{type:Number,required:true,min:15,max:180,default:30},
 status:{type:String,enum:['Confirmed','Cancelled'],default:'Confirmed'},
 notes:{type:String,trim:true,maxlength:1000,default:''}
},{timestamps:true});
bookingSchema.index({service:1,startsAt:1,status:1});
export default mongoose.model('Booking',bookingSchema);
