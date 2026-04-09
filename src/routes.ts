import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

import { validateSchema } from "./middlewares/validateSchema";
import { isAdmin } from "./middlewares/isAdmin";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { createUserSchema, authUserSchema } from "./schemas/userSchema";
import { createCategorySchema } from "./schemas/categorySchema";
import { createProductSchema, listProductByCategorySchema, listProductSchema } from "./schemas/productSchemas";
import { addIemSchema, createOrderSchema, deleteOrderSchema, detailOrderSchema, finishOrderSchema, removeItemSchema, sendOrderSchema } from "./schemas/orderSchema";

const router = Router();
const upload = multer(uploadConfig);

//Rotas Users
router.post("/users", 
    validateSchema(createUserSchema), 
    new CreateUserController().handle
);

router.post("/session", 
    validateSchema(authUserSchema), 
    new AuthUserController().handle
);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//Rotas Category
router.post("/category", 
    isAuthenticated, 
    isAdmin, 
    validateSchema(createCategorySchema), 
    new CreateCategoryController().handle 
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//Rotas Products
router.post("/product", 
    isAuthenticated, 
    isAdmin, 
    upload.single("file"),
    validateSchema(createProductSchema),
    new CreateProductController().handle
);

router.get("/products", 
    isAuthenticated, 
    validateSchema(listProductSchema),
    new ListProductController().handle
);

router.delete("/product", 
    isAuthenticated, 
    isAdmin, 
    new DeleteProductController().handle
);

router.get("/category/product",
    isAuthenticated,
    validateSchema(listProductByCategorySchema),
    new ListProductByCategoryController().handle
);

//Rotas Order
router.post("/order",
    isAuthenticated,
    validateSchema(createOrderSchema),
    new CreateOrderController().handle
);
// deletar order
router.delete("/order", 
    isAuthenticated, 
    validateSchema(deleteOrderSchema),
    new DeleteOrderController().handle
);

router.get("/orders", isAuthenticated, new ListOrderController().handle);

//Adicionar item a order
router.post("/order/add", 
    isAuthenticated, 
    validateSchema(addIemSchema), 
    new AddItemController().handle
);

// Buscar detalhes da ordem
router.get("/order/detail", 
    isAuthenticated,
    validateSchema(detailOrderSchema),
    new DetailOrderController().handle
)
// Remover item da order
router.delete("/order/remove", 
    validateSchema(removeItemSchema),
    isAuthenticated, new RemoveItemController().handle
);

router.put("/order/send", 
    isAuthenticated, 
    validateSchema(sendOrderSchema),
    new SendOrderController().handle
);

router.put("/order/finish",
    isAuthenticated,
    validateSchema(finishOrderSchema),
    new FinishOrderController().handle
);

export {router};