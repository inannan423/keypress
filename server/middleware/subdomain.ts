export default defineEventHandler(({ req, res, context }) => {
  const hostname = req.headers.host || "jetpanodoc.vercel.app";

  const mainDomain = ["localhost:3000", "jetpanodoc.vercel.app"];

  if (!mainDomain.includes(hostname)) {
    const currentHost =
      process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
        ? hostname.replace(`.jetpanodoc.vercel.app`, "")
        : hostname.replace(`.localhost:3000`, "");

    console.log({ currentHost });
    context.subdomain = currentHost;
  }
});
