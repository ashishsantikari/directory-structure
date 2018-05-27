import { Component, Input, Output, EventEmitter } from '@angular/core';
import { File } from './model/file';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderComponent } from './newFolder/newFolder.component';

@Component({
  selector: 'directory-explorer',
  templateUrl: './directory-explorer.component.html',
  styleUrls: ['./directory-explorer.component.css']
})
export class DirectoryExplorerComponent {
  constructor(public dialog: MatDialog) {}

  @Input() list: File[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() navigatedDown = new EventEmitter<File>();
  @Output() navigatedUp = new EventEmitter();

  navigate(element: File) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }
}
