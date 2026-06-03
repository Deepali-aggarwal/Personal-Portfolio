import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

const MESSAGES_FILE = path.join(__dirname, '../../data/messages.json');

// Helper to ensure data folder and file exists
const initMessagesFile = () => {
  const dir = path.dirname(MESSAGES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
  }
};

export const submitContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, subject, message } = req.body;

    initMessagesFile();

    // Read existing messages
    const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages: ContactMessage[] = JSON.parse(rawData);

    // Create a new message object
    const newMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject: subject || 'No Subject',
      message,
      createdAt: new Date().toISOString()
    };

    // Save to the array
    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Success] New contact message received from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: {
        id: newMessage.id,
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
    initMessagesFile();
    const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(rawData);

    // For safety, let's limit return info or require simple admin auth in a real app
    // Here we just return them sorted by date for demo purposes
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};
