import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './entities/actor.entity';
import {ID} from "../common/types/id";

@Injectable()
export class ActorService {
  constructor(
      @InjectRepository(Actor)
      private actorRepository: Repository<Actor>,
  ) {}

  async findAll(): Promise<Actor[]> {
    return this.actorRepository.find();
  }

  async findOne(id: ID): Promise<Actor> {
    return this.actorRepository.findOne({where: {id: id}});
  }

  async create(actor: Actor): Promise<Actor> {
    return this.actorRepository.save(actor);
  }

  async update(id: ID, actor: Actor): Promise<Actor> {
    await this.actorRepository.update(id, actor);
    return this.actorRepository.findOne({where: {id: id}});
  }

  async delete(id: ID): Promise<void> {
    await this.actorRepository.delete(id);
  }
}
