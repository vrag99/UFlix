import { exec } from 'child_process';
import fs from 'fs';
export class VideoUtils {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  static ipfs: string = '/opt/homebrew/bin/ipfs';

  static uploadFileToIPFS(filePath: string, callback: (success: boolean) => void) {
    const cmd = `${this.ipfs} add --quieter ${filePath} 2>&1`;
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
        callback(false);
      } else {
        this.deleteFile(filePath, deleted => {
          callback(deleted);
        });
      }
    });
  }

  static deleteFile(filePath: string, callback: (success: boolean) => void) {
    fs.unlink(filePath, err => {
      callback(!err);
    });
  }

  static generateIPFSHashOnly(filePath: string, callback: (hash: string | false) => void) {
    const cmd = `${this.ipfs} add --only-hash --quieter ${filePath} 2>&1`;
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
        callback(false);
      } else {
        callback(stdout.trim());
      }
    });
  }
}
