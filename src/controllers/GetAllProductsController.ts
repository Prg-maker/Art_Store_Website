import {Request , Response} from 'express'
import {stripe} from '../utils/stripe'

class GetAllProductsController{
  async handle(req:Request , res:Response){



    const {data} =  await stripe.products.list()


    return res.json(data)

  }
}

export {GetAllProductsController}