export class File {
  id?: string;
  isFolder: boolean;
  name: string;
  parent: string;

  compare(obj : any){
    if (obj.isFolder === this.isFolder && obj.name === this.name && obj.parent === this.parent)
      return true;
    else
      return false;  
  }
}
