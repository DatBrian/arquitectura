import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    // Lógica de autenticación
    res.status(200).json({ message: "Login successful" });
};

export const register = (req: Request, res: Response) => {
    // Lógica de registro
    res.status(201).json({ message: "Registration successful" });
};
