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
    this.router.post(`${this.path}uploadThumbnail/:title/:description/:paid/:fees`, AuthMiddleware, upload.single('thumbnail'), this.video.uploadThumbnail);
    this.router.post(`${this.path}comment`, AuthMiddleware, this.video.commentOnVideo);
    this.router.get(`${this.path}like/:videoId`, AuthMiddleware, this.video.likeVideo);
    this.router.post(`${this.path}updateBlockChainId`, AuthMiddleware, this.video.updateBlockChainId);
    this.router.get(`${this.path}getVideos`, AuthMiddleware, this.video.getVideos);
    this.router.delete(`${this.path}deleteVideo/:videoId`, AuthMiddleware, this.video.deleteVideo);
    this.router.delete(`${this.path}deleteAll` , this.video.deleteAllVideos);
    this.router.get(`${this.path}getVideoById/:videoId`, AuthMiddleware, this.video.getVideoById);
  }
}
