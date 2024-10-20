export interface IDatabaseAdapter {
    connect(connectionString: string): Promise<void>;
    insert(entity: any): Promise<void>;
    update(entity: any, criteria: any): Promise<void>;
    delete(criteria: any): Promise<void>;
    query<T>(model: T, criteria: any): any;
    exec(): Promise<any>;
}

export class DatabaseService {
    private adapter: IDatabaseAdapter;

    constructor(adapter: IDatabaseAdapter) {
        this.adapter = adapter;
    }

    async connect(connectionString: string) {
        await this.adapter.connect(connectionString);
    }

    insert(entity: any) {
        return this.adapter.insert(entity);
    }

    update(entity: any, criteria: any) {
        return this.adapter.update(entity, criteria);
    }

    delete(criteria: any) {
        return this.adapter.delete(criteria);
    }

    query<T>(model: T, criteria: any) {
        return this.adapter.query(model, criteria);
    }

    exec() {
        return this.adapter.exec();
    }
}
