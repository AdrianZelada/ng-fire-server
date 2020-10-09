import { HttpClient} from '@angular/common/http';
import { ModelConnection, RepositoryData} from '../interfaces/repository';

const HOST = 'https://api.first.org/v1/';
export class HttpService implements RepositoryData{
  constructor(private http: HttpClient, private config: ModelConnection) {}

  getData() {
    return this.http.get(`${HOST}/${this.config.model}`);
  }

  filter(query: any) {
    const params = this.stringifyUrl(query);
    return this.http.get(`${HOST}/${this.config.model}?${params}`);
  }

  add(data: any) {
    return this.http.post(`${HOST}/${this.config.model}`,data);
  }

  update(data: any) {
    return this.http.post(`${HOST}/${this.config.model}/${data.id}`,data);
  }

  remove(id: string) {
    return this.http.delete(`${HOST}/${this.config.model}/${id}`);
  }


  stringifyUrl(data: any = {}) {
    const params = Object.entries(data);
    const paramsString = params.map((item) => {
      return item.join('=');
    });
    return paramsString.join('&');
  }
}
// https://api.first.org/v1/get-countries
