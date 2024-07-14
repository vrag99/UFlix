export interface video {
    id: number;
    Title: string;
    Description: string;
    price?: number;
    tag: string;
    ipfsHashThumbnail: string;
    likeCount: number;
    comments: comment[];
    username: string;
    walletAddress: string;
    blockChainId: number;
    paid : boolean;
    fees:number;
}

export interface comment {
    text: string;
    username: string;
    address: string;
}