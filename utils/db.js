#!/usr/bin/node
class DBClient {
    constructor() {
        this.host = process.env.DB_HOST || 'localhost';
        this.port = process.env.DB_PORT || 27017;
        this.databaser = process.env.DB_DATABASE || 'files_manager';
    }
}