import { RequestWithUser } from '@/interfaces/auth.interface';
import { VideoService } from '@/services/video.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { VideoUtils } from '@/utils/VideoUtils';

export class VideoController {
  public video = Container.get(VideoService);
  constructor() {
    this.uploadThumbnail = this.uploadThumbnail.bind(this);
    this.uploadVideo = this.uploadVideo.bind(this);
    this.likeVideo = this.likeVideo.bind(this);
    this.commentOnVideo = this.commentOnVideo.bind(this);
    this.updateBlockChainId = this.updateBlockChainId.bind(this);
    this.getVideos = this.getVideos.bind(this)
    this.deleteVideo = this.deleteVideo.bind(this);
    this.deleteAllVideos = this.deleteAllVideos.bind(this);
    this.getVideoById = this.getVideoById.bind(this);
  }
  public async uploadVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (req.file) {
        const videoId = Number(req.params.id);

        VideoUtils.generateIPFSHashOnly(req.file.path, async videoHash => {
          if (!videoHash) {
            await this.video.deleteVideo(videoId);
            return res.status(500).send('Error generating hash');
          }
          VideoUtils.uploadFileToIPFS(req.file.path, async success => {
            if (!success) {
              await this.video.deleteVideo(videoId);
              return res.status(500).send('Error uploading thumbnail');
            }
            res.status(201).json({ hash: videoHash, message: 'uploadedThumbnail' });
          });
        });
      } else {
        res.status(400).send('No files uploaded');
      }
    } catch (error) {
      next(error);
    }
  }

  public async uploadThumbnail(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
      if (req.file) {
        VideoUtils.generateIPFSHashOnly(req.file.path, async thumbnail => {
          if (!thumbnail) return res.status(400).send('Error generating hash');
          const desc = req.params.description;
          const title = req.params.title;
          const fees = Number(req.params.fees);
          const paid = (req.params.paid === 'true');
          const userId = req.user.id;
          console.log(req.params)


          VideoUtils.uploadFileToIPFS(req.file.path, async success => {
            
            if (!success) return res.status(400).send('Error uploading thumbnail');

            const createVideoData = await this.video.uploadVideo(
              thumbnail,
              userId,
              title,
              desc,
              paid,
              req.user.walletAddress,
              req.user.username,
              fees
            );

            res.status(201).json({ data: createVideoData, message: 'uploadedThumbnail' });
          });
        });
      } else res.status(400).send('No files uploaded');
    } catch (error) {
      next(error);
    }
  }

  public async likeVideo(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
      const { videoId,inc } = req.params;
      const updateLikeData = await this.video.updateLikeByOne(Number(videoId),Boolean(inc),req.user.id);
      res.status(200).json({ data: updateLikeData, message: 'likeVideo' });
    } catch (error) {
      next(error);
    }
  }

  public async commentOnVideo(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
      const { videoId, comment } = req.body;
      const userId = req.user.id;
      const createCommentData = await this.video.CommentOnVideo(videoId, userId, comment);
      res.status(201).json({ data: createCommentData, message: 'commentOnVideo' });
    } catch (error) {
      next(error);
    }
  }

  public async updateBlockChainId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { videoId, blockChainId } = req.body;
      const updateBlockChainData = await this.video.updateBlockChainId(videoId, blockChainId);
      res.status(200).json({ data: updateBlockChainData, message: 'updateBlockChainId' });
    } catch (error) {
      next(error);
    }
  }

  public async getVideos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const videos = await this.video.getVideos();
      res.status(200).json({ data: videos, message: 'getVideos' });
    } catch (error) {
      next(error);
    }
  }

  public async getVideoById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { videoId } = req.params;
      const video = await this.video.getVideoById(Number(videoId));
      res.status(200).json({ data: video, message: 'getVideoById' });
    } catch (error) {
      next(error);
    }
  }

  public async deleteVideo(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {


      const { videoId } = req.params;
      const userId = req.user.id;

      if (!videoId) {
        res.status(400).json({ message: 'videoId is required' });
      }


      const video = await this.video.getVideoById(Number(videoId));

      if (video.uploaderId !== userId) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        const deleteVideoData = await this.video.deleteVideo(Number(videoId));
      }

      res.status(200).json({ message: 'deleteVideo' })
    } catch (error) {
      next(error);
    }
  }

  public async deleteAllVideos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const videos = await this.video.deleteVideos();
      res.status(200).json({ message: 'deleteAllVideos' });
    } catch (error) {
      next(error);
    }
  }
}
