import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPost(): string {
    return 'getPost';
  }
}
