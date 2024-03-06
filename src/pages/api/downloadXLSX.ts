// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'employee-sample.xlsx');
  console.log(filePath, 'filePath');

  fs.readFile(filePath, (err, data) => {
    console.log(err, 'err');
    console.log(data, 'data');
    if (err) {
      console.error(err);
      return res.status(500).end('Error reading file');
    }

    res.setHeader('Content-Disposition', 'attachment; filename=employee-sample.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.end(data);
  });
}
