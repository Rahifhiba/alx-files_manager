#!/usr/bin/env node
import { createClient } from 'redis';

class RedisClient {
    constructor() {
        this.client = createClient();
        this.client.on('error', (error) => {
            console.log(error.message);
        });
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        return await this.client.get(key);
    }

    async set(key, value, duration) {
        await this.client.set(key, value, 'EX', duration);
    }

    async del(key) {
        await this.client.del(key);
    }
}

const redisClient = new RedisClient();
export default redisClient;