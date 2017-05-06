import { NestFactory} from 'nest.js'
import { ApplicationModule } from './lib/app.module'

const app = NestFactory.create(ApplicationModule)
app.listen(3000, () => console.log('Running at port: 3000'))