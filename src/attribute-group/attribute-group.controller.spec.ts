import { Test, TestingModule } from '@nestjs/testing';
import { AttributeGroupController } from './attribute-group.controller';

describe('AttributeGroupController', () => {
  let controller: AttributeGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributeGroupController],
    }).compile();

    controller = module.get<AttributeGroupController>(AttributeGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
