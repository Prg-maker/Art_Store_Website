import {Router} from 'express'
const routes = Router()


import {GetAllProductsController} from './controllers/GetAllProductsController'




routes.get('/products' , new GetAllProductsController().handle )


routes.get('/product/:id' , async ()=>{})


export default routes