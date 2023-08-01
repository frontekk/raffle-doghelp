import React from "react";

const RaffleCard = ({ id }) => {
  return (
    <div className="w-4/5 h-60 mx-auto mb-1 grid grid-cols-4 border border-black font-myfont">
      {/* LEFT SIDE */}
      <div className=" col-span-1 p-1">
        <div className="flex flex-col space-y-5">
          <div>
            <p>Nombre</p>
            <div className="border-b-2 border-dotted border-black mt-6"></div>
          </div>
          <div className="">
            <p>Telefono</p>
            <div className="border-b-2 border-dotted border-black mt-6"></div>
          </div>
          <span>Sorteo: DOM 27 / 08</span>
          <span className="text-2xl font-bold">{`N° ${id}`}</span>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className=" col-span-3 p-1">
        <h1 className="text-center text-2xl font-bold font-myfont">
          BONO CONTRIBUCIÓN
        </h1>
        <p className="text-center text-sm">organiza ayuda huellitas</p>
        <div className="grid grid-cols-4 mt-3">
          <div className="text-sm">
            <ul>
              <li>1 - premio</li>
              <li>2 - premio</li>
              <li>3 - premio</li>
              <li>4 - premio</li>
            </ul>
          </div>
          <div className="text-sm">
            <ul>
              <li>5 - premio</li>
              <li>6 - premio</li>
              <li>7 - premio</li>
              <li>8 - premio</li>
            </ul>
          </div>
          <div className=" mx-auto flex items-center text-4xl">
            <h1>$ 500</h1>
          </div>
          <div className=" mx-auto flex flex-col items-center">
            <img
              className="w-20 h-20"
              alt="logo"
              src="https://img.freepik.com/free-icon/paws_318-859200.jpg"
            />
            <span className="font-bold">{`N° ${id}`} </span>
          </div>
        </div>
        <div className=" mt-3">
          <span className="text-center text-xs">
            Sorteo domingo <span className="font-semibold">27 de agosto</span>{" "}
            for FM' SOL LA SOLIDARIA',{" "}
            <span className="font-semibold">
              venda 20 números para castrar a su mascota
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RaffleCard;
