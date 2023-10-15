import { Request, Response } from "express";

export const getResources = (req: Request, res: Response) => {
    // Lógica para obtener recursos
    res.status(200).json({ resources: ["resource1", "resource2"] });
};
