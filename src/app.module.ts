import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseService } from './shared/firebase/firebase.service';
import { FireModule } from './module/fire/fire.module';

@Module({
  imports: [ HttpModule, FireModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}