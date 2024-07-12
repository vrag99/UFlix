import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { VideoRoute } from './routes/video.route';
ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(),   new VideoRoute()]);
app.listen();
