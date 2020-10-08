import { HttpClient} from '@angular/common/http';
import { ModelConnection} from '../interfaces/repository';

export class HttpService implements RepositoryData{
  constructor(private http: HttpClient, private config: ModelConnection) {}

  getData() {
    return this.http.get(`${this.config.model}`);
  }

  filter(query: any) {
    return this.http.get(`${this.config.model}`, );
  }

  add(data: any) {

  }

  update(data: any) {

  }

  remove(id: string) {

  }
}
// https://api.first.org/v1/get-countries
