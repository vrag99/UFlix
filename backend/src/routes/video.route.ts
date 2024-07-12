import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import { VideoController } from '@/controllers/video.controller';
import { upload } from '@/middlewares/multer.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class VideoRoute implements Routes {
  public path = '/api/video/';
  public router = Router();
  public video = new VideoController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}upload/:id`, AuthMiddleware, upload.single('video'), this.video.uploadVideo);
    this.router.post(`${this.path}uploadThumbnail/:title/:description`, AuthMiddleware, upload.single('thumbnail'), this.video.uploadThumbnail);
    this.router.post(`${this.path}comment`, AuthMiddleware, this.video.commentOnVideo);
    this.router.post(`${this.path}like`, AuthMiddleware, this.video.likeVideo);
    this.router.post(`${this.path}updateBlockChainId`, AuthMiddleware, this.video.updateBlockChainId);
    this.router.get(`${this.path}getVideos`, AuthMiddleware, this.video.getVideos);
  }
}
