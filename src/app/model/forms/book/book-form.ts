import {FormControl, FormGroup, Validators} from "@angular/forms";

export class Forms {
  FormCreateBook() {
    return new FormGroup({
      author: new FormControl('', {
        validators: [Validators.required]
      }),
      comments: new FormControl('', {
        validators: []
      }),
      created: new FormControl(new Date(), {
        validators: []
      }),
      description: new FormControl('', {
        validators: []
      }),
      modified: new FormControl(new Date(), {
        validators: []
      }),
      sku: new FormControl('', {
        validators: []
      }),
      title: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

}
