import { Movie } from './movie.model';

export class HttpResponse {
	constructor(
		public Response: string,
		public Search: Movie[],
		public totalResults: string,
		public Error: string
	) {}
}
