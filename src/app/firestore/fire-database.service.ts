import { RepositoryData} from '../interfaces/repository';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { ModelConnection} from '../interfaces/repository';

export class FireDatabaseService implements RepositoryData{

  constructor(private db: AngularFirestore, private config: ModelConnection) {}

  getData() {
    return this.db.collection(this.config.model).valueChanges();
  }

  filter(query: any) {
    return this.db.collection(this.config.model, ref => ref.where('code', '==', query)).valueChanges();
  }

  add(data: any) {
    return Observable.create((observe: Observer<any>) => {
      this.db.collection(this.config.model).add(data);
      observe.next(data);
    });
  }

  update(data: any) {
    return Observable.create((observe: Observer<any>) => {
      const itemDoc = this.db.doc(`${this.config.model}/${data.id}`);
      itemDoc.update(data);
      observe.next(data);
    });
  }

  remove(id: string) {
    return Observable.create((observe: Observer<any>) => {
      const itemDoc = this.db.doc(`${this.config.model}/${id}`);
      itemDoc.delete()
      observe.next(true);
    });
  }
}
