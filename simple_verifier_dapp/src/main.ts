import { verify } from 'tlsn-js';
import fs from 'fs';

(async () => {
  const notaryPubKey = fs.readFileSync('notary.pub', 'utf8');
  const proof = JSON.parse(fs.readFileSync('proof.json', 'utf8'));
  const res = await verify(proof, notaryPubKey);
  console.log(res);
})();
