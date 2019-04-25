import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatToolbarModule, MatIconModule, 
  MatButtonModule, MatListModule, 
  MatMenuModule, MatFormFieldModule,
  MatInputModule, MatRippleModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,
    MatTabsModule, MatToolbarModule, MatIconModule, 
    MatButtonModule, MatListModule, 
    MatMenuModule, MatFormFieldModule,
    MatInputModule, MatRippleModule, MatCardModule
  ],
  exports: [
    MatTabsModule, FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule, MatCardModule
  ]
})
export class MaterialModule { }
