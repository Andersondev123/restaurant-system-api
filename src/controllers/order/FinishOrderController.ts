import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const {order_id} = req.body;
        const orderFinish = new FinishOrderService();

        const updateOrder = await orderFinish.execute({
            order_id: order_id,
            
        })
        res.status(200).json(updateOrder)
    };
};
export { FinishOrderController };