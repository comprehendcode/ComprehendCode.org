import { Component, OnInit } from '@angular/core';
import { PostService, postDetails } from '../post.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-admin-progress',
  templateUrl: './admin-progress.component.html',
  styleUrls: ['./admin-progress.component.css']
})

export class AdminProgressComponent implements OnInit {
  date: Date = new Date();
  private postForm: postDetails = {
    name: '',
    body: {
      desc: '',
      full_text: '',
      img_name: ''
    },
    meta: {
      date: '',
      author: '',
    }

  };
  form: FormGroup;
  constructor(private post: PostService, private _fb: FormBuilder, private auth: AuthenticationService) { }
  ngOnInit() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      full_text: ['', Validators.required],
      img_path: [null],
    })
  }

  submitForm(){
    this.postForm.name = this.form.controls.name.value;
    this.postForm.body.desc = this.form.controls.description.value;
    this.postForm.body.full_text = this.form.controls.full_text.value;
    this.postForm.meta.date = String(this.date.getDate());
    this.postForm.meta.author = this.auth.getUserDetails().name;
    this.addPost();
  }
  addPost(){
    console.log(this.postForm);
    return this.post.createPost(this.postForm).subscribe(()=>{
      console.log("Post sent!");
    });
  }
}
