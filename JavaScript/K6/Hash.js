import crypto from 'k6/crypto';

export default function () {
  console.log(crypto.sha256('hello world! Hello', 'hex'));
  let hasher = crypto.createHash('sha256');
  hasher.update('hello ');
  hasher.update('world!');
  hasher.update('Hello ');
  console.log(hasher.digest('hex'));
}