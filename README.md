# Tls-exploration

TLS notaries for blockchain systems and Cartesi integration


## What is a TLS Notary?

TL;DR: A TLS notary is a system that allows a client to prove to a third party that a particular server has sent a particular piece of data.
This is done by having the client and server run a protocol that involves the server sending the data to the client, and the client sending a cryptographic proof of the data to the third party. The third party can then verify the proof and be convinced that the server did indeed send the data.


## Why do we need TLS Notaries (with Cartesi Rollups)?

TLS notaries can be a gateway to the web 2.0 internet from inside the Cartesi Machine. Allowing for verification of public data or private data. 


## Steps for notarization (high level)

1. The client(prover) establishes a MPC (Multi Party Computation) connection with a _trusted_ notary server. 
2. The client makes a request to the server, using the MPC as a means for the request (the client-generated key is partially shared by the notary)
3. The client prepares a proof by redacting or not pieces of it and sends it to the notary.
4. The client receives the finalized proof and can send it to any verifier, which includes a Cartesi Dapp.


### Links and references

- https://docs.tlsnotary.org/intro.html
- https://tlsnotary.org/