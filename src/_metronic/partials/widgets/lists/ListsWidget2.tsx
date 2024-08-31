import React from "react";
import { toAbsoluteUrl } from "../../../helpers";
import shirt from "../../../../../public/media/logos/t-shirt.svg";
import profile from "../../../../../public/media/logos/profile.svg";
import { Link } from "react-router-dom";

type Player = {
  id: number;
  name: string;
  age: number;
  number: number | null;
  position: string;
};

type ListsWidget2Props = {
  className: string;
  title: string;
  players: Player[];
};

const ListsWidget2: React.FC<ListsWidget2Props> = ({
  className,
  title,
  players,
}) => {
  console.log(players);
  return (
    <div className={`card ${className} px-0 mx-0`}>
      <div className="card-header border-0 dir bg-secondary">
        <h3
          className="card-title fw-bold text-gray-900"
          style={{ fontFamily: "peyda-bold " }}
        >
          {title}
        </h3>
      </div>
      <div
        className="card-body pt-2 dir px-2"
        style={{ fontFamily: "peyda-medium " }}
      >
        {players.map((player) => (
          <div
            key={player.id}
            className="d-flex align-items-center mb-7 gap-3 border-bottom pb-1"
          >
            <div className="symbol symbol-50px">
              {player?.photo ? (
                <img src={player?.photo} alt="player photo" />
              ) : (
                <img src={profile} alt="profile" />
              )}
            </div>
            <div className="flex-grow-1">
              <Link
                to={`/player/${player?.id}`}
                className="text-gray-900 fw-bold text-hover-primary fs-6"
              >
                {player.name}
              </Link>
              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-row gap-1">
                  <span className="text-muted d-block fw-semibold">سن:</span>
                  <span className="text-gray-700 d-block fw-semibold">
                    {" "}
                    {player.age}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <img src={shirt} className="w-md-55px w-45px" alt="shirt" />
              <span className="position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1">
                {player.number || "0"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ListsWidget2 };
