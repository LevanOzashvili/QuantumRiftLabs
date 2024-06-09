import { Request, Response } from 'express';

class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorMiddleware = (err: HttpException, req: Request, res: Response) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ status, message });
};

export { errorMiddleware, HttpException };
