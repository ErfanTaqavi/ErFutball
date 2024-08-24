import { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../helpers";

// import {ThemeModeSwitcher} from '../../../partials'

const Topbar: FC = () => (
  <div className="">
  <div className="d-flex  dir    mt-4 ">
    <div className="d-flex ms-3  ps-lg-5  ">
      {/* begin::Logo */}
      <div>
        <Link to="/">
          <img
            src={toAbsoluteUrl("media/logos/img2.png")}
            alt="logo"
            className="h-sm-90px  logo-md "
          />
        </Link>
      </div>
      {/* end::Logo */}
    </div>

    <div
      className="d-flex align-items-center ms-3 pe-lg-5  logo-md  "
      style={{ position: "relative", top: "7px" }}
    >
      <h1 className="font-c5x font-c4x ">ErFutball</h1>
    </div>
    </div>
  </div>
);

export { Topbar };
