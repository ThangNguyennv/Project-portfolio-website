import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent { 
  // Lưu trữ và quản lý biểu mẫu 
  userForm:any;

  constructor(public formbuilder:FormBuilder){
  
  }
  // Phương thức lifecycle - Được gọi sau khi thành phần đã được khởi tạo và các dữ liệu đầu vào đã được đặt.
  ngOnInit(){
    this.userForm = this.formbuilder.group({
      name: [null],
      email: [null],
      message: [null],
    });
  }
  
  // Phương thức được gọi khi người dùng gửi biểu mẫu.
  onSubmit(){
    console.log("Form Submitted",this.userForm.value);
  }
}
