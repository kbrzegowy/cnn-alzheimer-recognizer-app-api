import bcrypt from 'bcrypt';

export class BcryptService {
  public async hash(to: string) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(to, salt);
  }

  public async compare(notEncrypted: string, encrypted: string) {
    const valid = await bcrypt.compare(notEncrypted, encrypted);

    if (!valid) return false;
    else return true;
  }
}
