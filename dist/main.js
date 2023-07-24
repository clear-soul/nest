"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const responseInterceptor_1 = require("./common/responseInterceptor");
const loggingInterceptor_1 = require("./common/loggingInterceptor");
const filter_1 = require("./common/filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new filter_1.HttpFilter());
    app.useGlobalInterceptors(new responseInterceptor_1.ResponseInterceptor(), new loggingInterceptor_1.LoggingInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map