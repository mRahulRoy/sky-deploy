const nodemailer = require("nodemailer");

exports.contactUsController = (req,res,next)=>{

    const transporter = nodemailer.createTransport({
        host : process.env.HOST,
        port:process.env.PORT,
        secure:false,
        requireTLS:true,
        auth:{
            user: process.env.USER,
            pass:process.env.PASSWORD
        }
    })
    
    const mailOptions ={
        from :`${req.body.email}`,
        to:"rahulroy177602@gmail.com",
        subject:`Skywalk Subscription Letter`,
        text :"Hello rahul",
        html: ` 
                <h2>Coustomer Details</h2>
                <h3 style="display:inline-block">Name</h3> : ${ req.body.name} <br> 
                <h3 style="display:inline-block">Email</h3> : ${req.body.email} <br>
                <h3 style="display:inline-block">Work Email</h3> : ${req.body.workEmail} <br>
                <h3 style="display:inline-block">Company Web Site</h3> : ${req.body.companyWebSite} <br>
                <h3 style="display:inline-block">Budget</h3> : ${req.body.budgetLimit} <br>
                <h3 style="display:inline-block">Country</h3> : ${req.body.country} <br> <br>
                <p>Message : ${req.body.message} </p>  <br>

        
        `
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("Error Occured : ",err.message);
        }else{
            console.log("Email Has been Sent : ",info);
    
        }
    })
   res.status(200).json({
    data :req.body,
    success:true
   })
}


// This methods will send the user a confirmation mail for subscribing skywalk subscription letter
exports.confirmSubscription = (req,res,next)=>{

    const transporter = nodemailer.createTransport({
        host : process.env.HOST,
        port:process.env.PORT,
        secure:false,
        requireTLS:true,
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD,
        }
    })
    const mailOptions ={
        from :`rahulroy177602@gmail.com`,
        to: `${req.body.email}`,
        subject:`Skywalk`,
        html: ` 
        <h2>Dear,  ${ req.body.name}</h2>
        <h3 style="display:inline-block">Thanks for subscribing Skywalk News letter. We will get back to you soon.</h3> 
        <br/> 
        <img  src="https://skywalktech.in/img/skywalktech.png"   />
            <p> <strong>Greetings from Skywalk</strong/> <br/>
            1101-1102,<br/> Tower B4, Spaze itech Park, <br/> Sohna Gurgaon Road, Sec-49, <br/> Gurugram, Harayana, 122018</p>        
          `
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("Error Occured : ",err.message);
        }else{
            console.log("Email Has been Sent : ",info);
    
        }
    })
   res.status(200).json({
    data :req.body,
    success:true
   })
}




// ask support
exports.askSupport = (req,res,next)=>{

   
    const transporter = nodemailer.createTransport({
        host : process.env.HOST,
        port:process.env.PORT,
        secure:false,
        requireTLS:true,
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD,
        }
    })
    const mailOptions ={
        from :`rahulroy177602@gmail.com`,
        to: `rahulroy177602@gmail.com`,
        subject:`User Querry`,
        html: ` 
        <h2>Name :   ${ req.body.name} ${req.body.lastName}</h2>
        <h3 style="display:inline-block">Email : ${req.body.email}</h3> 
        <br/> 
        <h3 style="display:inline-block">Phone : ${req.body.phone}</h3> 
        <br/> 
        <h3 style="display:inline-block">Message : ${req.body.message}</h3> 
        <br/>
          `
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("Error Occured : ",err.message);
        }else{
            console.log("Email Has been Sent : ",info);
    
        }
    })
   res.status(200).json({
    data :req.body,
    success:true
   })
}

