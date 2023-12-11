function Card({ image, p1, p2 }) {
    return (
        <div className="flex flex-col bg-white py-10 px-5 h-[30vw] w-auto justify-between border-2 border-solid rounded-xl">
            <img src={image} alt="" className="h-[30vh] w-auto" />
            <p>{p1}</p>
            <p className="w-full">{p2}</p>
        </div>
    );
}

export default Card;
