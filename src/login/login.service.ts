import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createJWT(loginDto: CreateLoginDto) {
    const payload = await this.userRepository.findOne({
      where: { userId: loginDto.userId },
    });

    const token = this.jwtService.sign({ payload }, { expiresIn: 20, secret: 'mysecret' });

    return { token };
  }

  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
      const decoded = await this.jwtService.decode(token);
      return decoded;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
