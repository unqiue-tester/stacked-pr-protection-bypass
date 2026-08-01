function verifyToken(token) {
  if (!verifySignature(token)) throw new Error("invalid signature");
  return decode(token);
}
