import { Router } from 'express';
import { submitContact, getMessages } from '../controllers/contactController';
import { validateContactInput } from '../middleware/validator';

const router = Router();

// POST: Submit a contact form (validated)
router.post('/', validateContactInput, submitContact);

// GET: Retrieve all contact forms (simulated dashboard endpoint)
router.get('/', getMessages);

export default router;
