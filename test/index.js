import fsExtra from 'fs-extra'
import MD5 from 'md5'
import JSEncrypt from "jsencrypt"
import NodeRSA from 'node-rsa';
import crypto from 'crypto';

const hash = crypto.createHash('md5');




async function main() {
    const privateKey = "MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAhYNZ3mJVdVQyqoVXdjJRkvfUmlKEllTfMTaN2r8ovyKMUoTqpOcI91+5nyHruNa8YxdxbLgPImtRIciiXTykIQIDAQABAkBXdbMCNaJLqKtD/vNLTy0WvFg9+341SEWo5FbKi9yyT4oDLJi9w9Wn7uN8jo6REAANA+3deOl+ciTkhEtMYlpBAiEAv6Fa02oqQv0avmcBCLiTYUqsoV/UDl10doX+qoK24nkCIQCyXGPU3tHESpzI6w/IsDYuyi6au3XgoeE62S1wZIuk6QIhAK1UNyDu8BbzdJMv++F1gekIcCju0pHDuinSfUyhOuaRAiEAhsBIaCXjYyJfq2fz59JBTT5Q0XP5TbnfeN9ldflwiykCIGMPwR1okSuUwa867UM6LBSRrB3pDf7fM5BKEUrlp9Ph"
    const publicKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIWDWd5iVXVUMqqFV3YyUZL31JpShJZU3zE2jdq/KL8ijFKE6qTnCPdfuZ8h67jWvGMXcWy4DyJrUSHIol08pCECAwEAAQ=="

    const response = await fsExtra.readJson("response.json")
    const content = response.content
    const sign = response.sign

const key = new NodeRSA(publicKey,"pkcs8-public", {encryptionScheme:"pkcs1",signingScheme:"pkcs1-md5"});







const decrypted = key.decryptPublic(content, 'json');




const verify_test = key.verify(content, sign , 'utf8', 'base64' );


// console.log({decrypted}); // 解密后的明文





console.log({verify_test}); // 解密后的明文




    const verify = new JSEncrypt({log: true})
    verify.setPublicKey(publicKey)
    const verified = verify.verify(content, sign, MD5)


    console.log({verified})
}

main()