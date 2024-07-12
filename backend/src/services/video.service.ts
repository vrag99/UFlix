import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class VideoService {
  public video = new PrismaClient().video;
  public comment = new PrismaClient().comment;

  public async uploadVideo(thumbnail: string, userId: number, title: string, description: string): Promise<any> {
    const createVideoData: any = await this.video.create({
      data: {
        ipfsHashThumbnail: thumbnail,
        uploaderId: userId,
        blockChainId: 0,
        Description: description,
        Title: title,
      },
    });
    return createVideoData;
  }

  public async updateBlockChainId(videoId: number, blockChainId: number): Promise<any> {
    const updateVideoData = await this.video.update({ where: { id: videoId }, data: { blockChainId: blockChainId } });
    return updateVideoData;
  }

  public async updateLikeByOne(videoId: number): Promise<any> {
    const video = await this.video.findUnique({ where: { id: videoId } });
    const updateVideoData = await this.video.update({ where: { id: videoId }, data: { likeCount: video.likeCount + 1 } });
    return updateVideoData;
  }

  public async CommentOnVideo(videoId: number, userId: number, comment: string): Promise<any> {
    const createCommentData: any = await this.comment.create({
      data: {
        userId: userId,
        videoId: videoId,
        comment: comment,
      },
    });
    return createCommentData;
  }

  public async deleteVideo(videoId: number): Promise<any> {
    const deleteVideoData = await this.video.delete({ where: { id: videoId } });
    return deleteVideoData;
  }

  public async getVideos(): Promise<any> {
    const videos = await this.video.findMany();
    return videos;
  }
}
