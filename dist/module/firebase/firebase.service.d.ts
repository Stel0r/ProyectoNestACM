import { FirebaseService } from '../../shared/firebase/firebase.service';
export declare class FireService {
    private firebaseService;
    constructor(firebaseService: FirebaseService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    post(data: any): Promise<any>;
    put(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
}
