import { Module } from '@nestjs/common';
import { LocalStorageModule } from '../../frameworks/data-services/local-storage/local-storage.module';

@Module({
    imports: [LocalStorageModule],
    exports: [LocalStorageModule]
})
export class DataServiceModule { }
