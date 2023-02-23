import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { FileUploadDto } from './dto/upload.dto';
import { TaskService } from './task.service';

@ApiTags("task")
@Controller('task')
export class TaskController {

    constructor(
        private taskSerive: TaskService
    ) { }

    //upload
    // yarn add @types/multer

    @Post("/upload")
    @UseInterceptors(FileInterceptor("file", {
        storage: diskStorage({
            destination: process.cwd() + "/public/img",
            filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
        })
    }))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'List of cats',
        type: FileUploadDto,
    })
    upload(@UploadedFile() file: Express.Multer.File): Express.Multer.File {
        // băm => base64

        return file;
    }

    @Get()
    getTask(): string {
        return this.taskSerive.getTask();
    }


}
