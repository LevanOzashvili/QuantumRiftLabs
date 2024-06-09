import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from '@jest/globals';

describe('GET /items', () => {
    it('should return a list of items', async () => {
        const response = await request(app).get('/api/items');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('POST /items', () => {
    it('should create a new item', async () => {
        const newItem = { name: 'NewItem', price: 200 };
        const response = await request(app)
            .post('/api/items')
            .send(newItem);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(newItem.name);
        expect(response.body.price).toBe(newItem.price);
    });

    it('should return a 400 error if the item is invalid', async () => {
        const invalidItem = { name: 'It', price: -100 };
        const response = await request(app)
            .post('/api/items')
            .send(invalidItem);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeInstanceOf(Array);
    });
});