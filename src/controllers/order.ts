import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItems = async (req: RequestExt, res: Response) => {

    try {
        
        res.send({
            data: "Esto solo lo ve las personas con sesión / JWT",
            user: req.user
        });

    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
};


export { getItems };