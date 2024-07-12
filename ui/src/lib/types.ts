export interface video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    ipfsHash: string;
    likes: number;
    comments: comment[];
    username: string;
    address: string;
}

export interface comment {
    text: string;
    username: string;
    address: string;
}