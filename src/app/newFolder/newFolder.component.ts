import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newFolder',
  templateUrl: './newFolder.component.html',
  styleUrls: ['./newFolder.component.css']
})
export class NewFolderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewFolderComponent>) {}

  folderName: string;

  ngOnInit() {}
}
