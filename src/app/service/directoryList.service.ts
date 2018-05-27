import { Injectable } from '@angular/core';

import { v4 } from 'uuid';
import { File } from '../model/file';;
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export interface IFileService {
  add(File: File);
  queryInFolder(folderId: string): Observable<File[]>;
  get(id: string): File;
  elementExists(file: File): boolean;
}

@Injectable()
export class DirectoryListService implements IFileService {
  private datastore = new Map<string, File>();

  constructor() { }

  add(File: File) {
    let doesFolderExists = this.elementExists(File);
    if (_.isUndefined(doesFolderExists)) {
      File.id = v4();
      this.datastore.set(File.id, this.clone(File));
      return File;
    } else {
      return undefined;
    }
  }

  elementExists(File: File) {
    let element;
    this.datastore.forEach(function (value, key) {
        // element = File.compare(value);
        if (File.compare(value)){
          element = true;
        }
    });
    return element;
  }

  private querySubject: BehaviorSubject<File[]>;
  queryInFolder(folderId: string) {
    const result: File[] = [];
    this.datastore.forEach(element => {
      if (element.parent === folderId) {
        result.push(this.clone(element));
      }
    });
    if (!this.querySubject) {
      this.querySubject = new BehaviorSubject(result);
    } else {
      this.querySubject.next(result);
    }
    return this.querySubject.asObservable();
  }

  get(id: string) {
    return this.datastore.get(id);
  }

  clone(element: File) {
    return JSON.parse(JSON.stringify(element));
  }
}