import { Module } from '@nestjs/common';
import { LocalStorgeService } from './local-storge.service';
import { LocalStorageRepository } from './local-storage.repository';
import { DataServices } from 'src/core/abstract/data-services.interface';

@Module({
    imports: [],
    // providers: [LocalStorgeService, LocalStorageRepository],
    providers: [{
        provide: DataServices,
        useClass: LocalStorgeService,
    },],
    exports: [DataServices],
})
export class LocalStorageModule { }
