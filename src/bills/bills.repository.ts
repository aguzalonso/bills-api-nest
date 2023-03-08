import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BillsRepository {
  async findOne(id: string) {
    const contents = await readFile('bills.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('bills.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: object) {
    const contents = await readFile('bills.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('bills.json', JSON.stringify(messages));
  }
}
