interface Products { title: string, stock: number, price: number, type: ProductTypes, isOnline: boolean }
type ProductTypes = 'electronics' | 'furniture' | 'fashion' | 'health' | 'grocery' | 'toys'

const mockData: Products[] = [
    { title: "iPhone 15", stock: 120, price: 999, type: "electronics", isOnline: true },
    { title: "MacBook Pro", stock: 45, price: 1999, type: "electronics", isOnline: true },
    { title: "AirPods Pro", stock: 200, price: 249, type: "electronics", isOnline: false },
    { title: "Office Chair", stock: 85, price: 180, type: "furniture", isOnline: true },
    { title: "Standing Desk", stock: 30, price: 450, type: "furniture", isOnline: false },
    { title: "Bookshelf", stock: 60, price: 120, type: "furniture", isOnline: true },
    { title: "Running Shoes", stock: 150, price: 95, type: "fashion", isOnline: true },
    { title: "Denim Jacket", stock: 70, price: 130, type: "fashion", isOnline: false },
    { title: "Baseball Cap", stock: 220, price: 35, type: "fashion", isOnline: true },
    { title: "Protein Powder", stock: 90, price: 55, type: "health", isOnline: true },
    { title: "Vitamin C", stock: 300, price: 20, type: "health", isOnline: true },
    { title: "Yoga Mat", stock: 110, price: 40, type: "health", isOnline: false },
    { title: "Coffee Beans", stock: 180, price: 25, type: "grocery", isOnline: true },
    { title: "Olive Oil", stock: 75, price: 18, type: "grocery", isOnline: false },
    { title: "Organic Honey", stock: 50, price: 22, type: "grocery", isOnline: true },
    { title: "LEGO City Set", stock: 95, price: 60, type: "toys", isOnline: true },
    { title: "Remote Control Car", stock: 40, price: 85, type: "toys", isOnline: false },
    { title: "Puzzle 1000 pcs", stock: 130, price: 30, type: "toys", isOnline: true }
]

function groupBy<T, K extends PropertyKey>(
    items: T[],
    getKey: (item: T) => K
): Record<K, T[]> {
    const result = {} as Record<K, T[]>;
    for (const item of items) {
        const key = getKey(item)
        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item)
    }
    return result
}

function groupData(type: Products["type"]) {
    const grouped = groupBy(mockData, (item) => item.type);
    const items = grouped[type] ?? [];
    items.forEach((item) => {
        console.log(JSON.stringify(item, null, 0))
    })
}

groupData('electronics')