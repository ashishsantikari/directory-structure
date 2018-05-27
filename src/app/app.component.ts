import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectoryListService } from './service/directoryList.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { File } from './model/file';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public list: Observable<File[]>;

  constructor(public fileService: DirectoryListService, public snackBar: MatSnackBar) { }

  currentRoot: File;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
  }

  addFolder(folder: { name: string }) {
    let newFolder = new File();
    newFolder.isFolder = true;
    newFolder.name = folder.name.trim();
    newFolder.parent = this.currentRoot ? this.currentRoot.id : 'root';

    let isExists: File = this.fileService.add(newFolder)
    if (!_.isUndefined(isExists)) {
      this.updateFileQuery();
    } else {
      this.snackBar.open('Folder Already Exists', 'Close', {
        duration: 3000
      });
    }
   
  }

  navigateToFolder(element: File) {
    this.currentRoot = element;
    this.updateFileQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  updateFileQuery() {
    this.list = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '/';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '/';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }
}
