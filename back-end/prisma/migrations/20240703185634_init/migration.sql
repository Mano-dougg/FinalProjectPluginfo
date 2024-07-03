/*
  Warnings:

  - You are about to drop the column `imagePath` on the `Produto` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "imagePath" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "imagePath_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
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
INSERT INTO "new_Produto" ("descricao", "face", "id", "kits", "labios", "marca", "nome", "olhos", "original", "preco", "preco_alterado", "promocao", "quantidade_carrinho", "sombrancelha", "unhas") SELECT "descricao", "face", "id", "kits", "labios", "marca", "nome", "olhos", "original", "preco", "preco_alterado", "promocao", "quantidade_carrinho", "sombrancelha", "unhas" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "imagePath_id_key" ON "imagePath"("id");
