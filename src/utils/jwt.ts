import { Secret, sign as sgn, SignOptions, verify as vrfy } from "jsonwebtoken";
import future from "./future";

export { Secret, SignOptions } from "jsonwebtoken";

export async function sign(
  payload: string | object | Buffer,
  secretOrPrivateKey: Secret = "ca597093-b22d-49f3-97ce-992294636b25",
  options?: SignOptions
) {
  return (await future(
    new Promise<string>((res, rej) => {
      sgn(payload, secretOrPrivateKey, options, (err, token) => {
        if (err) return rej(err);
        return res(token);
      });
    })
  )) as [string | null, Error | null];
}
