import { Injectable, HttpService } from '@nestjs/common';
import { json } from 'express';
import {map} from 'rxjs/operators'
import { FirebaseService } from './shared/firebase/firebase.service';

@Injectable()
export class AppService {

  constructor(
    private http:HttpService,
    private firebaseService: FirebaseService){

  }

  text = ""
  url = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name'

  async getChampName(id) {
    let championList = await await this.http.get(`http://ddragon.leagueoflegends.com/cdn/11.4.1/data/de_DE/champion.json`).pipe(map(response => response.data.data)).toPromise();
    for (var i in championList) {
        if (championList[i].key == id) {
            return championList[i].id;
        }
        ;
    }
}
async getCommonTags(list) {
    let StringList = new Array();
    let championList = await this.http.get(`http://ddragon.leagueoflegends.com/cdn/11.4.1/data/de_DE/champion.json`).pipe(map(response => response.data.data)).toPromise();
    let dict = new Object();
    dict = {
        "Marksman": 0,
        "Tank": 0,
        "Fighter": 0,
        "Mage": 0,
        "Assassin": 0,
        "Support": 0,
    };
    for (var i in championList) {
        for (var x in list) {
            if (championList[i].key == x) {
                for (var z in championList[i].tags) {
                    dict[championList[i].tags[z]] += list[x];
                }
            }
        }
    }
    console.log(dict);
    var result = "";
    var highest = "";
    var max = 0;
    for (var k in dict) {
        if (dict[k] >= max) {
            max = dict[k];
            highest = k;
        }
    }
    result += `${highest} | `;
    dict[highest] = 0;
    max = 0;
    highest = "";
    for (var k in dict) {
        if (dict[k] >= max) {
            max = dict[k];
            highest = k;
        }
    }
    result += `${highest}`;
    return result;
}
async getHello(nombre:string) {
  console.log(nombre);
    this.text = `{"${nombre}" : {`;
    let respone = await this.http.get(`${this.url}/${nombre}`, { 'headers': { "X-Riot-Token": "RGAPI-38536339-da07-4360-92cb-0f71a1c40480" } }).pipe(map(response => response.data)).toPromise();
    this.text += `"Nivel" : "${respone.summonerLevel}","Icono" : "http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/${respone.profileIconId}.png",`;
    let re = await this.http.get(`https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${respone.id}`, { 'headers': { "X-Riot-Token": "RGAPI-38536339-da07-4360-92cb-0f71a1c40480" } }).pipe(map(response => response.data)).toPromise();
    let ChampName = await this.getChampName(re[0].championId);
    console.log(respone);
    this.text += `"MainChamp" : "${ChampName}",`;
    this.text += `"PuntosDeMaestria" : "${re[0].championPoints}",`;
    let list = new Object();
    for (var i in re) {
        list[re[i].championId] = parseInt(re[i].championPoints);
    }
    var roles = await this.getCommonTags(list);
    this.text += `"RolesPreferidos" : "${roles}"`;
    this.text += `}}`;
    var response1 = await this.firebaseService.post(JSON.parse(this.text)).toPromise();
    return response1;
}
}
