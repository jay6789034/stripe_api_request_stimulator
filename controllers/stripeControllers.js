const stripe= require('stripe')
const Stripe= stripe(process.env.STRIPE_SECRET_KEY)
export.createCustomer=async (req,res)=>{
  try{
  const customer = await Stripe.customers.create(req.body)
  res.status(200).json(customer)
  catch(error){
    res.status(400).json({error:error.message})
    
  }
}
export.createAmount= async (req,res)=>{
  try{
    const amount= await Stripe.amount.create(req.body)
    res.status(200).json(amount)
  }

  catch(error){
    res.status(400).json({error:error.message}) I 
  }
}
                   
