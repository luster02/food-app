const categories = [
    { name: 'Todo', value: 'all' },
    { name: 'Popular', value: 'popular' },
    { name: 'Pizza', value: 'pizza' },
    { name: 'Hamburguesa', value: 'hamburguesa' },
    { name: 'Bebidas', value: 'bebidas' },
]

export default function Categories() {
    return (
        <div className="flex overflow-x-auto scroll-p">
            {categories.map(({ name }, index) => (
                <div
                    key={index}
                    className="mx-1 border-2 py-1 px-3 rounded-2xl cursor-pointer"
                >
                    <p>{name}</p>
                </div>
            ))}
        </div>
    )
}