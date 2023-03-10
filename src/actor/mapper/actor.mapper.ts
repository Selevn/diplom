import {CreateActorDto} from "../dto/create-actor.dto";
import {Actor} from "../entities/actor.entity";

export const creationDtoToActor = (creationDto: CreateActorDto): Actor => {
    return {
        id: null,
        firstName
    }
}