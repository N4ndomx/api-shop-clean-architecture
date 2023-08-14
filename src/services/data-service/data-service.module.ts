import { Module } from '@nestjs/common';
// import { LocalStorageModule } from '../../frameworks/data-services/local-storage/local-storage.module';
import { TypeormModule } from '../../frameworks/data-services/typeorm/typeorm.module';

@Module({
    imports: [TypeormModule],
    exports: [TypeormModule]
})
export class DataServiceModule { }
