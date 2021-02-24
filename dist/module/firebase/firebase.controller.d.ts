import { FireService } from './firebase.service';
export declare class FireController {
    private fireService;
    constructor(fireService: FireService);
    getAll(): Promise<any>;
    getOne(id: string): Promise<any>;
    post(datos: any): Promise<any>;
    put(id: string, datos: any): Promise<any>;
    delete(id: string): Promise<any>;
}
