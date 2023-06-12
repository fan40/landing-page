import Card from "./Card"

const Articles = () => {
  return (
    <div className="w-full" >
        <p className="text-white text-[1.4rem] font-medium text-center mt-4" >Articles</p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
            <Card image={require("../images/card1.png")} />
            <Card image={require("../images/card2.png")} />
            <Card image={require("../images/card3.png")} />
        </div>
    </div>
  )
}

export default Articles