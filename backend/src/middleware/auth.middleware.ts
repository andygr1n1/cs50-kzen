import type { NextFunction, Request, Response } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.header('x-api-key') || req.header('x-api-key') !== process.env.X_API_KEY) {
        res.status(401)
        return res.json({ message: 'X_API_KEY is invalid' })
    }

    next()
}
