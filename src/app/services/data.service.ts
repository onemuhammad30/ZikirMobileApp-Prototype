import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() { 
    this.items = [
      {title:"Asmaul Husna", page:"/zikir1"},
      {title:"Surah Al-Fatihah", page:"/zikir3"},
      {title:"Surah Al-Ikhlas", page:"/kul1"},
      {title:"Surah Al-Falaq", page:"/kul2"},
      {title:"Surah An-Nas", page:"/kul3"},
      {title:"Surah Al-Kafirun", page:"/kul4"},
      {title:"Surah Al-Mulk", page:"/almulk"},
      {title:"Ayat Kursi", page:"/kursi"},
      {title:"Subhanallah", page:"/selawat1"},
      {title:"Alhamdulillah", page:"/z1"},
      {title:"Allahu Akbar", page:"/z2"},
      {title:"Astagfirullah", page:"/z3"},
      {title:"Laailaaha Illallah", page:"/z4"},
      {title:"Zikir Isnin", page:"/zikir2"},
      {title:"Doa Ibu Bapa", page:"/doa"},
      {title:"Doa Mohon Keampunan", page:"/doakeampunan"},
      {title:"Doa Mohon Kebahagian Di Dunia Dan Akhirat", page:"/doakebahagian"},
      {title:"Doa Mohon Diberi Kesabaran", page:"/doakesabaran"},
      {title:"Doa Mohon Keuturunan Yang Taat Kepada Allah", page:"/doaketurunan"},
      {title:"Doa Mohon Keamanan Negara Dan Rezeki", page:"/doaKeamanan"},
      {title:"Doa Mohon Ketetapan Iman", page:"/doaiman"},
      {title:"Doa Mohon Keampunan Iman Dan Diselamatkan Dari Neraka", page:"/doaampunneraka"},
      {title:"Doa Mohon Dipelahara Dari Siksaan Neraka", page:"/doasiksa"},
      {title:"Doa Mohon Menetapkan Pendirian", page:"/doatetap"},
      {title:"Selawat Ibrahimiyah", page:"/s1"},
      {title:"Selawat Munjiyat", page:"/s2"},
      {title:"Selawat Syifa'", page:"/s3"},
      {title:"Selawat Tafrijiyah", page:"/s4"},
    ]
  }

  filterItems(searchTerm) {
    return this.items.filter(item =>{
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}