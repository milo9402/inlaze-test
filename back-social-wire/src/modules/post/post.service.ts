import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  // Implementar los metodos para manejo de posts
  async create(createPostDto: CreatePostDto) {
    const newPost = this.postRepository.create(createPostDto);
    const post = await this.postRepository.save(newPost);
    return post;
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    const editedPost = {
      ...post,
      ...updatePostDto,
    };
    return await this.postRepository.save(editedPost);
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return await this.postRepository.remove(post);
  }
}
