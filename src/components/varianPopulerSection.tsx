import Carousel from "./carousel"
import products  from "@core/data/products.json"


const productPopuler = products.filter(item => item.statusPopuler === true)
const VarianPopuler = () => {
return (
    <div>
        <div className="section-container flex flex-col gap-6 mx-auto">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-3xl text-center flex flex-col">
                    <span>Varian populer</span>
                    <span>the cookies</span>
                </h2>
            </div>
        </div>
        <div className="mb-10">
        <Carousel products={productPopuler} />
        </div>
    </div>
)
}

export default VarianPopuler