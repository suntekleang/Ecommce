import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Product } from "src/app/store/product.store";
import { DataService } from 'src/app/services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-upload-cover",
  templateUrl: "./upload-cover.component.html",
  styleUrls: ["./upload-cover.component.scss"]
})
export class UploadCoverComponent implements OnInit {
  file: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  upload;
  constructor(
    public dialogRef: MatDialogRef<UploadCoverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public storage: AngularFireStorage,
    public store: Product,
    private ds:DataService,
    private afs:AngularFirestore,
  ) {}

  ngOnInit() {}

  uploadFile(event) {
    this.file = event.target.files;
    console.log(this.file);
  }
  _onSave() {
    if (this.file) {
      console.log(this.file);
      this.upload = [];
      for (const file of this.file) {
        // const {name}=this.file;
        const filename = Math.random().toString(36).substring(7) + new Date().getTime() + file.name
        console.log(file)
        const filePath = `products/${this.data.key}/${filename}`;

        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        const fkey = this.afs.createId()
        this.uploadPercent = task.percentageChanges();
       
        task.then(f=>{
          return f.ref.getDownloadURL().then(url=>{
            console.log(url,this.data.key)
            return this.ds.productef().doc(this.data.key).collection('files').doc(fkey)
            .set({
                key:fkey,
                name:filename,
                url:url,
              })
          })
        })
          
      }
    }
  }
}
