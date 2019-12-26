import { Component, OnInit } from '@angular/core';
import { PostService, postDetails } from '../post.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import {FilestackService} from '@filestack/angular';
import {
  InputFile,
  TransformOptions,
  PickerOptions
} from 'filestack-js';

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
  apikey: string;
  public uploadSucess = false;
  constructor(private post: PostService, private _fb: FormBuilder, private auth: AuthenticationService, private filestackService: FilestackService) { }
  ngOnInit() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      full_text: ['', Validators.required],
      img_name: [null],
    })
    this.apikey = 'ABpAMN7XuSjmg9ZSr9ObQz';
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


  onUploadSuccess(res) {
    this.uploadSucess = true;
    this.postForm.body.img_name = res.filesUploaded[0].handle; 
    console.log('###uploadSuccess', res);
  }

  onUploadError(err: object) {
    console.log('###uploadError', err);
  }
}
