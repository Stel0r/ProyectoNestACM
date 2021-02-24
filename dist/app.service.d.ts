import { HttpService } from '@nestjs/common';
import { FirebaseService } from './shared/firebase/firebase.service';
export declare class AppService {
    private http;
    private firebaseService;
    text: string;
    constructor(http: HttpService, firebaseService: FirebaseService);
    request: any;
    getChampName(id: any): Promise<string>;
    getCommonTags(list: Object): Promise<string>;
    url: string;
    getHello(nombre: String): Promise<any>;
}
