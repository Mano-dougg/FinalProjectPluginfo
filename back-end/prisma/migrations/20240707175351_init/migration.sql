/*
  Warnings:

  - You are about to alter the column `preco_alterado` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "preco_alterado" REAL NOT NULL,
    "promocao" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade_carrinho" INTEGER NOT NULL DEFAULT 0,
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
