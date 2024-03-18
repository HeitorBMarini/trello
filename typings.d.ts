interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "afazer" | "emprogresso" | "feito";

interface Column {
  id: TypedColumn;
  afazer: AFazer[];
}

interface AFazer extends Models.Document {
  $id: string;
  $createdAt: string;
  title: string;
  status: string;
  image?: string;
}

interface Image {
  bucketId: string;
  fileId: string;
}
