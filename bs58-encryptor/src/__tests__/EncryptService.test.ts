import { EncryptService } from '../EncryptService';
import {describe, expect, it} from '@jest/globals';

describe("EncryptService", () => {
  it("should correctly encrypt and decrypt data", () => {
    const data = "Hello, world!";
    const encryptedData = EncryptService.encrypt(data);
    const decryptedData = EncryptService.decrypt(encryptedData);

    expect(encryptedData).not.toEqual(data); // Ensure encryption changes the data
    expect(decryptedData).toEqual(data); // Ensure decryption returns the original data
  });

  it("should return the same decrypted data for repeated encryption", () => {
    const data = "Test data";
    const encryptedData = EncryptService.encrypt(data);
    const decryptedData = EncryptService.decrypt(encryptedData);

    expect(decryptedData).toEqual(data);
  });

  it("should handle empty strings correctly", () => {
    const data = "";
    const encryptedData = EncryptService.encrypt(data);
    const decryptedData = EncryptService.decrypt(encryptedData);

    expect(decryptedData).toEqual(data);
  });

  it("should handle special characters correctly", () => {
    const data = "Some special characters: !@#$%^&*()";
    const encryptedData = EncryptService.encrypt(data);
    const decryptedData = EncryptService.decrypt(encryptedData);

    expect(decryptedData).toEqual(data);
  });
});
