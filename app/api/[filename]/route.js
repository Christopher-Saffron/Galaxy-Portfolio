import fs from "fs";
import { join } from "path";

export async function GET(request, { params }) {
  const uploadDir = join(process.env.ROOT_DIR || process.cwd(), `/`);
  const filePath = join(uploadDir, `/public/portfolio/${params.filename}`);
  var file = await fs.createReadStream(filePath);
  var stat = await fs.statSync(filePath);
  const res = new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": stat.size.toString(),
      "Content-Disposition": "attachment; filename=" + params.filename,
    },
  });

  return res;
}
