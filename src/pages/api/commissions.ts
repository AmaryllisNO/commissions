import { NextApiRequest, NextApiResponse } from 'next';

let statusOpen = false;
let activeSlots = 5;
let totalSlots = 10;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      statusOpen,
      activeSlots,
      totalSlots,
    });
  } else if (req.method === 'POST') {
    const {
      statusOpen: newStatusOpen,
      activeSlots: newActiveSlots,
      totalSlots: newTotalSlots,
    } = req.body;

    statusOpen = newStatusOpen !== undefined ? newStatusOpen : statusOpen;
    activeSlots = newActiveSlots !== undefined ? newActiveSlots : activeSlots;
    totalSlots = newTotalSlots !== undefined ? newTotalSlots : totalSlots;

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
