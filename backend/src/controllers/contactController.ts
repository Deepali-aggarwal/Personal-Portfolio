import { Request, Response, NextFunction } from 'express';
import Message from '../models/Message';

export const submitContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'No Subject',
      message,
    });

    console.log(`[Success] New contact message received from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: {
        id: newMessage._id,
        createdAt: newMessage.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};
