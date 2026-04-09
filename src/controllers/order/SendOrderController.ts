import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){
        const {order_id, name} = req.body;

        const sendOrder = new SendOrderService();

        const uptateOrder = await sendOrder.execute({
           order_id: order_id,
           name: name,
        });
        res.status(201).json(uptateOrder)
    };
};
export { SendOrderController };