import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DirectoryListService } from './service/directoryList.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { NewFolderComponent } from './newFolder/newFolder.component';
import { DirectoryExplorerComponent } from './directory-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFolderComponent,
    DirectoryExplorerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule 
  ],
  providers: [DirectoryListService],
  bootstrap: [AppComponent],
  entryComponents: [NewFolderComponent]
})
export class AppModule { }
