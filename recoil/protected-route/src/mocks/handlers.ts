import { rest } from "msw";

interface PostLoginReqBody {
  id: string;
  pw: string;
}

export const handlers = [
  rest.post<PostLoginReqBody>("/user/login", (req, res, ctx) => {
    const { id, pw } = req.body;

    if (id && pw) {
      return res(
        ctx.json({
          accessToken: "토큰^0^",
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),
];
