import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Note } from 'src/app/models/note.mode';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {

  note = {} as Note;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  this.firestore.doc("note/" + id)
  .valueChanges()
  .subscribe(data => {
    this.note.title = data["title"];
    this.note.note = data["note"];
    this.note.date = data["date"];


  });
  //dismiss loader
  (await loader).dismiss();
  }

  async updatePost(post: Note){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("note/" + this.id).update(post);
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
  
      //redirect to view post page
      this.navCtrl.navigateRoot("view-note");
      }
  }

  formValidation(){
    if(!this.note.title){
      this.showToast("Enter title");
      return false;
    }

    if(!this.note.note){
      this.showToast("Enter note");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }
}
