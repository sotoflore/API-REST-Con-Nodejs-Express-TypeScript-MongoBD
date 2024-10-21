import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {

    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG');
    }

};

const getItems = (req: Request, res: Response) => {

    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GET_IBLOG');
    }
};

const updateItem = (req: Request, res: Response) => {

    try {

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG');
    }
};

const postItem = (req: Request, res: Response) => {

    try {

        const { body } = req;

    } catch (error) {
        handleHttp(res, 'ERROR_POST_BLOG');
    }
};

const deleteItem = (req: Request, res: Response) => {

    try {

    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }

};

export { getItem, getItems, updateItem, postItem, deleteItem };