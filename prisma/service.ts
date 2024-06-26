import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const countAllProducts = async () => {
  try {
    const products = await prisma.goods.count()
    console.log(products);

    return products
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
} // получить общее количество всех товаров на всех складах,

export const countAllProductsOnStock = async (uuid: string) => {
  try {
    const products = await prisma.goods.findMany({
      where: {
        storage: {
          uuid
        }
      }
    })
    console.log(products);

    return products
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
} // получить товары на определенном складе

export const countProduct = async (sku: string) => {
  try {
    const products = await prisma.goods.findMany({
      where: {
        sku
      }
    })
    console.log(products.length);

    return products.length
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
} // получить количество товара на всех складах, 
export const countProductOnStock = async (uuid: string, sku: string) => {
  try {
    const products = await prisma.goods.findMany({
      where: {
        sku,
        storage: {
          uuid
        }
      }
    })
    console.log(products.length);

    return products.length
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }

} // получить количество товара на определенном складе

export const countProductByCategory = async (slug: string) => {
  try {
    const products = await prisma.goods.findMany({
      where: {
        categories: {
          some: {
            slug: slug,
          },
        }
      }
    })
    console.log(products.length);

    return products.length
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
} // получить количество продуктов по категории

export const countProductOnStockByCategory = async (uuid: string, slug: string) => {
  try {
    const products = await prisma.goods.findMany({
      where: {
        categories: {
          some: {
            slug: slug,
          },
        },
        storage: {
          uuid
        }
      }
    })
    console.log(products.length);

    return products.length
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
} // получить количество продуктов на определенном складе по категории.
