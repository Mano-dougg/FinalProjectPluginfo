-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "preco_alterado" TEXT NOT NULL,
    "promocao" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade_carrinho" INTEGER NOT NULL,
    "face" BOOLEAN NOT NULL DEFAULT false,
    "labios" BOOLEAN NOT NULL DEFAULT false,
    "olhos" BOOLEAN NOT NULL DEFAULT false,
    "kits" BOOLEAN NOT NULL DEFAULT false,
    "sombrancelha" BOOLEAN NOT NULL DEFAULT false,
    "unhas" BOOLEAN NOT NULL DEFAULT false,
    "original" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");
