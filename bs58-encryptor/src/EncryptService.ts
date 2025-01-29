import bs58 from 'bs58';

export class EncryptService {
    // Encrypt data
    public static encrypt(data: string): string {
        const encodedData = new TextEncoder().encode(data); // Convert string to byte array
        return bs58.encode(encodedData);
    }

    // Decrypt data
    public static decrypt(encryptedData: string): string {
        const decodedData = bs58.decode(encryptedData);
        return new TextDecoder().decode(decodedData); // Convert byte array back to string
    }
}
