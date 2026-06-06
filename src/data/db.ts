import Dexie, { type Table } from 'dexie';
import { produtos, type Product } from './products';

// Classe do banco de dados
export class RovalDatabase extends Dexie {
    // Tabela "produtos". O número indica o tipo da chave primária (id)
    produtos!: Table<Product, number>;

    constructor() {
        super('RovalTotemDB');

        // Versão 1 do banco. 
        // 'id' é a chave principal e 'categoria' é um índice (para filtrar rápido na Sidebar)
        this.version(1).stores({
            produtos: 'id, categoria'
        });
    }
}

export const db = new RovalDatabase();

// Função inteligente que roda ao abrir o app: 
// Se o banco estiver vazio, ele injeta os nossos produtos. Se já tiver dados, ele não faz nada.
export async function popularBancoDeDados() {
    const contagem = await db.produtos.count();

    if (contagem === 0) {
        console.log("Banco de dados vazio. Realizando carga inicial dos produtos...");
        await db.produtos.bulkAdd(produtos);
    } else {
        console.log(`Banco pronto. ${contagem} produtos carregados na memória local.`);
    }
}